import { Suspense } from "react"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EnquiryForm } from "@/components/enquiry-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enquire Now - Brillio Beyond Learning",
  description: "Submit your enquiry for SSLC, +1, +2, JEE, NEET, or KEAM coaching at Brillio - Beyond Learning. We will get back to you shortly.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "7025392200",
    href: "tel:7025392200",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat Now",
    href: "https://wa.me/917025392200?text=Hi, I would like to know more about Brillio.",
    external: true,
  },
]

const branches = [
  {
    name: "Nadapuram",
    address: "Opp. TIM GHSS Road, Nadapuram",
  },
  {
    name: "Vadakara",
    address: "Daliya Square, Edodi, Vadakara",
  },
]

export default function EnquiryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enquire <span className="text-accent">Now</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Take the first step towards academic excellence. Fill out the form and our team will contact you shortly.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading form...</div>}>
                  <EnquiryForm />
                </Suspense>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>

                {/* Branch Locations */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Our Branches</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {branches.map((branch) => (
                      <div key={branch.name} className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">{branch.name}</p>
                          <p className="text-sm text-muted-foreground">{branch.address}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Info Card */}
                <Card className="border-accent/50 bg-accent/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                        <span>We receive your enquiry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                        <span>Our counselor will call you within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                        <span>Schedule a visit to our branch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                        <span>Complete enrollment and start learning!</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
