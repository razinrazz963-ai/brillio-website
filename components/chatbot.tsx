"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const WHATSAPP_NUMBER = "917025392200"

interface Message {
  id: number
  text: string
  isBot: boolean
  options?: { label: string; value: string }[]
}

const courseInfo: Record<string, string> = {
  sslc: "SSLC Coaching is available at our Nadapuram branch. It includes complete syllabus coverage, regular tests, and doubt clearing sessions.",
  "plus-one": "+1 Science Tuition covers Physics, Chemistry, Maths & Biology with concept-based teaching. Available at both Nadapuram and Vadakara branches.",
  "plus-two": "+2 Science Tuition provides in-depth board exam preparation and entrance foundation. Available at both branches.",
  jee: "JEE Coaching prepares you for JEE Main and Advanced with IIT-focused curriculum. Available at Nadapuram branch.",
  neet: "NEET Coaching offers comprehensive medical entrance preparation with Biology-focused training. Available at Nadapuram branch.",
  keam: "KEAM Coaching provides focused preparation for Kerala Engineering entrance. Available at Nadapuram branch.",
}

const branchInfo: Record<string, string> = {
  nadapuram: "Nadapuram Branch is located at Opp. TIM GHSS Road, Nadapuram.\n\nCall: 7025392200\nWhatsApp: 7025392200 / 7025393300\nInstagram: @brillio_nadapuram\n\nWe offer SSLC, +1, +2, JEE, NEET, and KEAM coaching here.",
  vadakara: "Vadakara Branch is located at Daliya Square, Edodi, Vadakara.\n\nCall: 04964050049\nWhatsApp: 9037932131\nInstagram: @brillio_learning\n\nWe offer +1, +2 Science tuition and Entrance coaching here.",
}

const initialMessage: Message = {
  id: 1,
  text: "Hello! Welcome to Brillio - Beyond Learning. How can I help you today?",
  isBot: true,
  options: [
    { label: "Course Information", value: "courses" },
    { label: "Branch Details", value: "branches" },
    { label: "Contact Info", value: "contact" },
    { label: "Talk to Us", value: "whatsapp" },
  ],
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addBotMessage = (text: string, options?: { label: string; value: string }[]) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text, isBot: true, options },
      ])
      setIsTyping(false)
    }, 500)
  }

  const handleOptionClick = (value: string) => {
    // Add user message
    const optionLabel = messages[messages.length - 1]?.options?.find(o => o.value === value)?.label || value
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: optionLabel, isBot: false },
    ])

    // Handle different options
    switch (value) {
      case "courses":
        addBotMessage("Which course are you interested in?", [
          { label: "SSLC Coaching", value: "sslc" },
          { label: "+1 Science", value: "plus-one" },
          { label: "+2 Science", value: "plus-two" },
          { label: "JEE Coaching", value: "jee" },
          { label: "NEET Coaching", value: "neet" },
          { label: "KEAM Coaching", value: "keam" },
        ])
        break

      case "branches":
        addBotMessage("Which branch would you like to know about?", [
          { label: "Nadapuram Branch", value: "nadapuram" },
          { label: "Vadakara Branch", value: "vadakara" },
        ])
        break

      case "contact":
        addBotMessage(
          "You can reach us at:\n\nNadapuram Branch:\nCall: 7025392200\nWhatsApp: 7025392200 / 7025393300\n\nVadakara Branch:\nCall: 04964050049\nWhatsApp: 9037932131\n\nWould you like to enquire or chat on WhatsApp?",
          [
            { label: "Submit Enquiry", value: "enquiry" },
            { label: "WhatsApp Chat", value: "whatsapp" },
            { label: "Back to Menu", value: "menu" },
          ]
        )
        break

      case "whatsapp":
        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I visited your website and would like to know more about Brillio - Beyond Learning.`,
          "_blank"
        )
        addBotMessage("Opening WhatsApp for you! Is there anything else I can help with?", [
          { label: "Course Information", value: "courses" },
          { label: "Branch Details", value: "branches" },
          { label: "No, thanks!", value: "bye" },
        ])
        break

      case "enquiry":
        window.location.href = "/enquiry"
        break

      case "menu":
        addBotMessage("How can I help you?", [
          { label: "Course Information", value: "courses" },
          { label: "Branch Details", value: "branches" },
          { label: "Contact Info", value: "contact" },
          { label: "Talk to Us", value: "whatsapp" },
        ])
        break

      case "bye":
        addBotMessage("Thank you for visiting Brillio - Beyond Learning! Feel free to reach out anytime. Good luck with your studies!")
        break

      // Course details
      case "sslc":
      case "plus-one":
      case "plus-two":
      case "jee":
      case "neet":
      case "keam":
        addBotMessage(courseInfo[value] + "\n\nWould you like to enquire about this course?", [
          { label: "Yes, Enquire Now", value: "enquiry" },
          { label: "Other Courses", value: "courses" },
          { label: "Back to Menu", value: "menu" },
        ])
        break

      // Branch details
      case "nadapuram":
      case "vadakara":
        addBotMessage(branchInfo[value] + "\n\nWould you like more information?", [
          { label: "Enquire Now", value: "enquiry" },
          { label: "Chat on WhatsApp", value: "whatsapp" },
          { label: "Back to Menu", value: "menu" },
        ])
        break

      default:
        addBotMessage("I'm not sure I understand. How can I help you?", [
          { label: "Course Information", value: "courses" },
          { label: "Branch Details", value: "branches" },
          { label: "Contact Info", value: "contact" },
        ])
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim().toLowerCase()
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: inputValue, isBot: false },
    ])
    setInputValue("")

    // Simple keyword matching
    if (userMessage.includes("course") || userMessage.includes("coaching") || userMessage.includes("tuition")) {
      handleOptionClick("courses")
    } else if (userMessage.includes("branch") || userMessage.includes("location") || userMessage.includes("address")) {
      handleOptionClick("branches")
    } else if (userMessage.includes("contact") || userMessage.includes("phone") || userMessage.includes("call")) {
      handleOptionClick("contact")
    } else if (userMessage.includes("nadapuram")) {
      handleOptionClick("nadapuram")
    } else if (userMessage.includes("vadakara")) {
      handleOptionClick("vadakara")
    } else if (userMessage.includes("sslc") || userMessage.includes("10th")) {
      handleOptionClick("sslc")
    } else if (userMessage.includes("jee")) {
      handleOptionClick("jee")
    } else if (userMessage.includes("neet")) {
      handleOptionClick("neet")
    } else if (userMessage.includes("keam")) {
      handleOptionClick("keam")
    } else if (userMessage.includes("+1") || userMessage.includes("plus one") || userMessage.includes("plusone")) {
      handleOptionClick("plus-one")
    } else if (userMessage.includes("+2") || userMessage.includes("plus two") || userMessage.includes("plustwo")) {
      handleOptionClick("plus-two")
    } else if (userMessage.includes("enquir") || userMessage.includes("join") || userMessage.includes("admit")) {
      handleOptionClick("enquiry")
    } else if (userMessage.includes("whatsapp") || userMessage.includes("chat")) {
      handleOptionClick("whatsapp")
    } else if (userMessage.includes("hi") || userMessage.includes("hello") || userMessage.includes("hey")) {
      addBotMessage("Hello! Welcome to Brillio - Beyond Learning. How can I assist you today?", [
        { label: "Course Information", value: "courses" },
        { label: "Branch Details", value: "branches" },
        { label: "Contact Info", value: "contact" },
      ])
    } else if (userMessage.includes("thank") || userMessage.includes("bye") || userMessage.includes("ok")) {
      handleOptionClick("bye")
    } else {
      addBotMessage("I'd be happy to help! Please select an option below or type your question:", [
        { label: "Course Information", value: "courses" },
        { label: "Branch Details", value: "branches" },
        { label: "Contact Info", value: "contact" },
        { label: "Talk to Us", value: "whatsapp" },
      ])
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[350px] max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border-border/50 overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Brillio Assistant</CardTitle>
                  <p className="text-xs text-primary-foreground/70">Online | Typically replies instantly</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/30">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div className={`max-w-[80%] ${message.isBot ? "" : "order-first"}`}>
                      <div
                        className={`px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                          message.isBot
                            ? "bg-card text-card-foreground rounded-tl-none"
                            : "bg-primary text-primary-foreground rounded-tr-none"
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.options && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {message.options.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleOptionClick(option.value)}
                              className="px-3 py-1.5 bg-card border border-border text-sm rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="px-4 py-2 bg-card rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-background"
                  />
                  <Button type="submit" size="icon" className="shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
