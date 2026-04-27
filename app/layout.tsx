import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'Brillio - Beyond Learning | Expert Coaching for SSLC, +1, +2 & Entrance Exams',
  description: 'Brillio is a premier educational tuition center with branches in Nadapuram and Vadakara. Expert coaching for SSLC, Plus One, Plus Two, JEE, NEET, and KEAM entrance exams.',
  keywords: ['tuition center', 'SSLC coaching', 'Plus One tuition', 'Plus Two tuition', 'JEE coaching', 'NEET coaching', 'KEAM coaching', 'Nadapuram', 'Vadakara', 'Kerala'],
  authors: [{ name: 'Brillio - Beyond Learning' }],
  openGraph: {
    title: 'Brillio - Beyond Learning',
    description: 'Shaping Brilliant Students - Expert coaching for SSLC, +1, +2 & Entrance Exams',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.className} font-sans antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
