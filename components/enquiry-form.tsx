"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const WHATSAPP_NUMBERS = {
  nadapuram: "917025392200",
  vadakara: "919037932131",
}

const classOptions = [
  "SSLC (10th)",
  "Plus One (+1)",
  "Plus Two (+2)",
  "Entrance Aspirant",
  "Other",
]

const courseOptions = [
  { value: "sslc", label: "SSLC Coaching" },
  { value: "plus-one", label: "+1 Science Tuition" },
  { value: "plus-two", label: "+2 Science Tuition" },
  { value: "jee", label: "JEE Coaching" },
  { value: "neet", label: "NEET Coaching" },
  { value: "keam", label: "KEAM Coaching" },
  { value: "entrance", label: "Entrance Coaching (General)" },
]

const branchOptions = [
  { value: "nadapuram", label: "Nadapuram" },
  { value: "vadakara", label: "Vadakara" },
]

interface FormData {
  fullName: string
  phone: string
  studentClass: string
  branch: string
  course: string
  message: string
}

export function EnquiryForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    studentClass: "",
    branch: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Pre-fill form from URL params
  useEffect(() => {
    const branchParam = searchParams.get("branch")
    const courseParam = searchParams.get("course")
    
    if (branchParam || courseParam) {
      setFormData(prev => ({
        ...prev,
        branch: branchParam || prev.branch,
        course: courseParam || prev.course,
      }))
    }
  }, [searchParams])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError("")
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Please enter your full name"
    if (!formData.phone.trim()) return "Please enter your phone number"
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) return "Please enter a valid 10-digit phone number"
    if (!formData.studentClass) return "Please select your class"
    if (!formData.branch) return "Please select a branch"
    if (!formData.course) return "Please select a course"
    return ""
  }

  const submitToGoogleSheets = async () => {
    // Google Apps Script Web App URL - Replace with your actual deployed script URL
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.log("Google Script URL not configured - storing locally")
      // For demo purposes, we'll just log and continue
      return true
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          class: formData.studentClass,
          branch: branchOptions.find(b => b.value === formData.branch)?.label || formData.branch,
          course: courseOptions.find(c => c.value === formData.course)?.label || formData.course,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      })
      return true
    } catch (err) {
      console.error("Error submitting to Google Sheets:", err)
      return true // Continue anyway for better UX
    }
  }

  const redirectToWhatsApp = () => {
    const branchLabel = branchOptions.find(b => b.value === formData.branch)?.label || formData.branch
    const courseLabel = courseOptions.find(c => c.value === formData.course)?.label || formData.course
    const whatsappNumber = WHATSAPP_NUMBERS[formData.branch as keyof typeof WHATSAPP_NUMBERS] || WHATSAPP_NUMBERS.nadapuram
    
    const message = `Hi, my name is ${formData.fullName}. I am interested in ${courseLabel} at ${branchLabel} branch. Please contact me at ${formData.phone}.`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await submitToGoogleSheets()
      setIsSubmitted(true)
      
      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        redirectToWhatsApp()
      }, 1500)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-border/50 max-w-xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your enquiry has been submitted successfully. You will be redirected to WhatsApp to connect with us directly.
          </p>
          <Button onClick={redirectToWhatsApp} className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
            Open WhatsApp
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Enquiry Form</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="bg-background"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="bg-background"
            />
          </div>

          {/* Class */}
          <div className="space-y-2">
            <Label htmlFor="class">Current Class *</Label>
            <Select value={formData.studentClass} onValueChange={(value) => handleInputChange("studentClass", value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select your class" />
              </SelectTrigger>
              <SelectContent>
                {classOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Branch */}
          <div className="space-y-2">
            <Label htmlFor="branch">Preferred Branch *</Label>
            <Select value={formData.branch} onValueChange={(value) => handleInputChange("branch", value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                {branchOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Course */}
          <div className="space-y-2">
            <Label htmlFor="course">Course Interested *</Label>
            <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courseOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific questions or requirements..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-background min-h-[100px]"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Enquiry
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to be contacted by Brillio - Beyond Learning regarding your enquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
