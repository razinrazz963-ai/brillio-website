"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "917025392200"
const DEFAULT_MESSAGE = "Hi, I am interested in learning more about Brillio - Beyond Learning. Please share more details."

interface WhatsAppButtonProps {
  message?: string
}

export function WhatsAppButton({ message = DEFAULT_MESSAGE }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}
