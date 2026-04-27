import Link from "next/link"
import { ArrowRight, Phone, MapPin, Clock, GraduationCap, BookOpen, FlaskConical, Target, Atom, MessageCircle, Instagram } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Branches - Brillio Beyond Learning",
  description: "Visit Brillio - Beyond Learning at our branches in Nadapuram and Vadakara. Expert coaching for SSLC, +1, +2, JEE, NEET, and KEAM.",
}

const branches = [
  {
    id: "nadapuram",
    name: "Nadapuram Branch",
    address: "Opp. TIM GHSS Road, Nadapuram",
    phone: "7025392200",
    whatsapp: ["7025392200", "7025393300"],
    instagram: "https://www.instagram.com/brillio_nadapuram?igsh=MXE2ZzMxNWR6NXF6ZA==",
    instagramHandle: "@brillio_nadapuram",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d75.6!3d11.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ4JzAwLjAiTiA3NcKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    courses: [
      { name: "SSLC Coaching", icon: BookOpen, description: "Comprehensive preparation for SSLC board exams" },
      { name: "+1 Science Tuition", icon: FlaskConical, description: "Strong foundation in Physics, Chemistry, Mathematics & Biology" },
      { name: "+2 Science Tuition", icon: Atom, description: "In-depth coverage of Plus Two Science syllabus" },
      { name: "JEE Coaching", icon: GraduationCap, description: "Expert preparation for JEE Main and Advanced" },
      { name: "KEAM Coaching", icon: Target, description: "Focused coaching for Kerala Engineering entrance" },
      { name: "NEET Coaching", icon: Target, description: "Medical entrance exam preparation by experts" },
    ],
  },
  {
    id: "vadakara",
    name: "Vadakara Branch",
    address: "Daliya Square, Edodi, Vadakara",
    phone: "04964050049",
    whatsapp: ["9037932131"],
    instagram: "https://www.instagram.com/brillio_learning?igsh=NTNqZG9uano0cW9i",
    instagramHandle: "@brillio_learning",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d75.5!3d11.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM2JzAwLjAiTiA3NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    courses: [
      { name: "+1 Science Tuition", icon: FlaskConical, description: "Strong foundation in Physics, Chemistry, Mathematics & Biology" },
      { name: "+2 Science Tuition", icon: Atom, description: "In-depth coverage of Plus Two Science syllabus" },
      { name: "Entrance Coaching", icon: GraduationCap, description: "Comprehensive preparation for JEE, NEET & KEAM" },
    ],
  },
]

export default function BranchesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-accent">Branches</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Two convenient locations to serve you better. Visit us at Nadapuram or Vadakara.
              </p>
            </div>
          </div>
        </section>

        {/* Branches */}
        {branches.map((branch, index) => (
          <section 
            key={branch.id} 
            id={branch.id}
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Branch Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {branch.name}
                    </h2>
                    <div className="flex flex-col gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-accent" />
                        <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-accent" />
                        <span className="flex gap-2">
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
                      <div className="flex items-center gap-2">
                        <Instagram className="h-5 w-5 text-accent" />
                        <a 
                          href={branch.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {branch.instagramHandle}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={`/enquiry?branch=${branch.id}`}>
                        Enquire for {branch.name.split(' ')[0]}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Courses */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Courses Offered</h3>
                    <div className="grid gap-4">
                      {branch.courses.map((course) => (
                        <Card key={course.name} className="border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <course.icon className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">{course.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{course.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Map */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Location</h3>
                    <div className="rounded-xl overflow-hidden border border-border/50 bg-muted h-80 lg:h-full min-h-[300px]">
                      <iframe
                        src={branch.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${branch.name} Location`}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <Card className="mt-8 border-border/50 bg-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Need More Information?</p>
                          <p className="text-sm text-muted-foreground">Call us or visit our branch for details</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button asChild variant="outline">
                          <a href={`tel:${branch.phone}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </a>
                        </Button>
                        <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                          <a 
                            href={`https://wa.me/91${branch.whatsapp[0]}?text=Hi, I am interested in ${branch.name}. Please share more details.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Brillio?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Choose your preferred branch and start your journey towards academic excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/enquiry">
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/courses">View All Courses</Link>
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
