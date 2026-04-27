import Link from "next/link"
import { ArrowRight, BookOpen, FlaskConical, Atom, GraduationCap, Target, Beaker, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Courses - Brillio Beyond Learning",
  description: "Explore our comprehensive coaching programs for SSLC, Plus One, Plus Two, JEE, NEET, and KEAM at Brillio - Beyond Learning.",
}

const courses = [
  {
    id: "sslc",
    name: "SSLC Coaching",
    icon: BookOpen,
    description: "Comprehensive preparation for SSLC board examinations with focus on all subjects.",
    features: [
      "Complete syllabus coverage",
      "Regular tests and assessments",
      "Previous year question practice",
      "Doubt clearing sessions",
      "Study materials provided",
    ],
    branches: ["Nadapuram"],
    color: "bg-blue-500",
  },
  {
    id: "plus-one",
    name: "+1 Science Tuition",
    icon: FlaskConical,
    description: "Build a strong foundation in Plus One Science with our expert faculty guidance.",
    features: [
      "Physics, Chemistry, Maths & Biology",
      "Concept-based teaching",
      "Lab practical preparation",
      "Regular assignments",
      "Performance tracking",
    ],
    branches: ["Nadapuram", "Vadakara"],
    color: "bg-green-500",
  },
  {
    id: "plus-two",
    name: "+2 Science Tuition",
    icon: Atom,
    description: "In-depth Plus Two Science coaching to excel in board exams and prepare for entrances.",
    features: [
      "Complete board exam preparation",
      "Entrance exam foundation",
      "Model exam practice",
      "Individual attention",
      "Career guidance",
    ],
    branches: ["Nadapuram", "Vadakara"],
    color: "bg-purple-500",
  },
  {
    id: "jee",
    name: "JEE Coaching",
    icon: GraduationCap,
    description: "Expert coaching for JEE Main and Advanced to secure admission in top engineering colleges.",
    features: [
      "JEE Main & Advanced preparation",
      "IIT-focused curriculum",
      "Problem-solving techniques",
      "Mock tests series",
      "Expert faculty guidance",
    ],
    branches: ["Nadapuram"],
    color: "bg-orange-500",
  },
  {
    id: "neet",
    name: "NEET Coaching",
    icon: Target,
    description: "Comprehensive NEET preparation to help you secure a seat in top medical colleges.",
    features: [
      "Complete NEET syllabus",
      "Biology-focused training",
      "NCERT mastery",
      "Regular mock tests",
      "Expert medical mentors",
    ],
    branches: ["Nadapuram"],
    color: "bg-red-500",
  },
  {
    id: "keam",
    name: "KEAM Coaching",
    icon: Beaker,
    description: "Focused coaching for Kerala Engineering Architecture Medical entrance examination.",
    features: [
      "Kerala syllabus expertise",
      "State rank achievers",
      "Comprehensive study materials",
      "Weekly test series",
      "Performance analysis",
    ],
    branches: ["Nadapuram"],
    color: "bg-teal-500",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-accent">Courses</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Comprehensive coaching programs designed to help you excel in academics and competitive exams.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                  <div className={`h-2 ${course.color}`} />
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-12 h-12 rounded-lg ${course.color}/10 flex items-center justify-center`}>
                        <course.icon className={`h-6 w-6 text-primary`} />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {course.branches.map((branch) => (
                          <span key={branch} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                            {branch}
                          </span>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.name}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href={`/enquiry?course=${course.id}`}>
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Courses */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                What Makes Our Courses <span className="text-primary">Special</span>?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground">Students Trained</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <p className="text-muted-foreground">Expert Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us for a free consultation. Our counselors will help you choose the best program based on your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/enquiry">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
