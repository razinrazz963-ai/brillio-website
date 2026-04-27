import Link from "next/link"
import { ArrowRight, Users, Target, Award, MapPin, GraduationCap, BookOpen, FlaskConical } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from highly qualified and experienced teachers dedicated to your success.",
  },
  {
    icon: Target,
    title: "Result-Oriented Coaching",
    description: "Proven track record of students achieving top ranks in board and entrance exams.",
  },
  {
    icon: Award,
    title: "Personalized Attention",
    description: "Small batch sizes ensure every student receives individual care and guidance.",
  },
]

const branches = [
  {
    name: "Nadapuram Branch",
    address: "Opp. TIM GHSS Road, Nadapuram",
    courses: ["SSLC", "+1 & +2 Science", "JEE / KEAM / NEET"],
    icon: GraduationCap,
  },
  {
    name: "Vadakara Branch",
    address: "Daliya Square, Edodi, Vadakara",
    courses: ["+1 & +2 Science", "Entrance Coaching"],
    icon: BookOpen,
  },
]

const courses = [
  { name: "SSLC Coaching", icon: BookOpen },
  { name: "+1 & +2 Science", icon: FlaskConical },
  { name: "JEE Coaching", icon: GraduationCap },
  { name: "NEET Coaching", icon: Target },
  { name: "KEAM Coaching", icon: Award },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Two Branches: Nadapuram & Vadakara
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Shaping <span className="text-accent">Brilliant</span> Students
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
                Expert coaching for SSLC, +1, +2 & Entrance Exams. Join Brillio - Beyond Learning and unlock your true potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/enquiry">
                    Enquire Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/branches">View Branches</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="oklch(0.99 0 0)"/>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Brillio</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive coaching with a focus on individual growth and academic excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Branches</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit us at our conveniently located branches in Nadapuram and Vadakara.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {branches.map((branch) => (
                <Card key={branch.name} className="border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <branch.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{branch.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          {branch.address}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground">Courses Offered:</p>
                      <div className="flex flex-wrap gap-2">
                        {branch.courses.map((course) => (
                          <span key={course} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                            {course}
                          </span>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full mt-4">
                        <Link href="/branches">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Preview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Courses</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coaching programs designed to help students excel in academics and competitive exams.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {courses.map((course) => (
                <div key={course.name} className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <course.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.name}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/courses">
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join Brillio - Beyond Learning today and take the first step towards academic excellence. 
              Our expert faculty is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/enquiry">
                  Enquire Now
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
