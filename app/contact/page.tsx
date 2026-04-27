import Link from "next/link"
import { Phone, MapPin, MessageCircle, Clock, ArrowRight, Instagram } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Brillio Beyond Learning",
  description: "Get in touch with Brillio - Beyond Learning. Contact us at our Nadapuram or Vadakara branches for enquiries about our coaching programs.",
}

const branches = [
  {
    name: "Nadapuram Branch",
    address: "Opp. TIM GHSS Road, Nadapuram",
    phone: "7025392200",
    whatsapp: ["7025392200", "7025393300"],
    instagram: "https://www.instagram.com/brillio_nadapuram?igsh=MXE2ZzMxNWR6NXF6ZA==",
    instagramHandle: "@brillio_nadapuram",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d75.6!3d11.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ4JzAwLjAiTiA3NcKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    name: "Vadakara Branch",
    address: "Daliya Square, Edodi, Vadakara",
    phone: "04964050049",
    whatsapp: ["9037932131"],
    instagram: "https://www.instagram.com/brillio_learning?igsh=NTNqZG9uano0cW9i",
    instagramHandle: "@brillio_learning",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d75.5!3d11.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM2JzAwLjAiTiA3NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact <span className="text-accent">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Have questions? We&apos;re here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Phone */}
              <Card className="border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Mon-Sat, 9am-8pm</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a 
                    href="tel:7025392200" 
                    className="block text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    7025392200
                  </a>
                  <span className="text-sm text-muted-foreground">(Nadapuram)</span>
                  <a 
                    href="tel:04964050049" 
                    className="block text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    04964050049
                  </a>
                  <span className="text-sm text-muted-foreground">(Vadakara)</span>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="border-border/50 hover:border-[#25D366]/50 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-7 w-7 text-[#25D366]" />
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Quick responses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Nadapuram</p>
                    <div className="flex justify-center gap-2">
                      <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                        <a 
                          href="https://wa.me/917025392200?text=Hi, I would like to know more about Brillio - Beyond Learning."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7025392200
                        </a>
                      </Button>
                      <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                        <a 
                          href="https://wa.me/917025393300?text=Hi, I would like to know more about Brillio - Beyond Learning."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          7025393300
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Vadakara</p>
                    <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                      <a 
                        href="https://wa.me/919037932131?text=Hi, I would like to know more about Brillio - Beyond Learning."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        9037932131
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Enquiry */}
              <Card className="border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle>Enquire Online</CardTitle>
                  <CardDescription>We&apos;ll call you back</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/enquiry">
                      Enquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Branch Locations */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Locations</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit us at our branches in Nadapuram and Vadakara.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {branches.map((branch) => (
                <Card key={branch.name} className="border-border/50 overflow-hidden">
                  <div className="h-64">
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name} Location`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{branch.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-accent" />
                        <a 
                          href={`tel:${branch.phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">
                          {branch.whatsapp.map((num, i) => (
                            <span key={num}>
                              <a 
                                href={`https://wa.me/91${num}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                              >
                                {num}
                              </a>
                              {i < branch.whatsapp.length - 1 && " / "}
                            </span>
                          ))}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Instagram className="h-5 w-5 text-accent" />
                        <a 
                          href={branch.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {branch.instagramHandle}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button asChild variant="outline" className="flex-1">
                        <a href={`tel:${branch.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call
                        </a>
                      </Button>
                      <Button asChild className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                        <a 
                          href={`https://wa.me/91${branch.whatsapp[0]}?text=Hi, I am interested in ${branch.name}. Please share more details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Fill out our enquiry form and our team will get back to you within 24 hours.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/enquiry">
                Submit Enquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
