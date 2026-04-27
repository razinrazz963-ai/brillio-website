import Link from "next/link"
import { ArrowRight, Users, BookOpen, ClipboardCheck, Heart, Target, Eye, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Brillio Beyond Learning",
  description: "Learn about Brillio - Beyond Learning, our vision, mission, and why we are the best choice for SSLC, +1, +2, and entrance exam coaching in Nadapuram and Vadakara.",
}

const whyChooseUs = [
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Our faculty comprises highly qualified educators with years of experience in coaching students for board and competitive exams.",
  },
  {
    icon: BookOpen,
    title: "Small Batch Size",
    description: "We maintain small batch sizes to ensure every student gets the attention they deserve and can interact freely with teachers.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Tests",
    description: "Frequent assessments and mock tests help students track their progress and identify areas that need improvement.",
  },
  {
    icon: Heart,
    title: "Personal Mentoring",
    description: "Each student receives personalized guidance and mentoring to help them overcome challenges and achieve their goals.",
  },
]

const values = [
  "Student-centered approach to education",
  "Commitment to academic excellence",
  "Creating a supportive learning environment",
  "Building confidence and critical thinking skills",
  "Preparing students for lifelong success",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-accent">Brillio</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Your trusted partner in academic excellence since day one. We believe every student has the potential to shine.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="text-primary font-semibold">Brillio - Beyond Learning</span> is a premier educational tuition center 
                  dedicated to nurturing young minds and helping students achieve academic excellence. With branches in 
                  Nadapuram and Vadakara, we have been instrumental in shaping the futures of countless students.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our comprehensive coaching programs cover SSLC, Plus One, Plus Two, and entrance examinations 
                  including JEE, NEET, and KEAM. We go beyond traditional teaching methods to provide a holistic 
                  learning experience that builds strong foundations and instills confidence in our students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading educational institution that transforms students into confident, 
                    knowledgeable individuals ready to excel in academics and life. We envision a future 
                    where every student from our institute becomes a success story.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide quality education through innovative teaching methods, personalized attention, 
                    and a supportive learning environment. We are committed to helping every student discover 
                    their potential and achieve their academic goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Brillio</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What sets us apart from others and makes us the preferred choice for students and parents.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item) => (
                <Card key={item.title} className="border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our <span className="text-primary">Values</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do at Brillio.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm">
                <ul className="space-y-4">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Brillio Family
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Take the first step towards academic excellence. Join our community of successful students today.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/enquiry">
                Enquire Now
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
