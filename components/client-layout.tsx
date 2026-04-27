"use client"

import { Chatbot } from "@/components/chatbot"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  )
}
