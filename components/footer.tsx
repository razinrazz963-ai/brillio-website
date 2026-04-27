import Link from "next/link"
import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react"
import { BrillioLogo } from "./brillio-logo"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/branches", label: "Our Branches" },
  { href: "/courses", label: "Courses" },
  { href: "/enquiry", label: "Enquiry" },
  { href: "/contact", label: "Contact" },
]

const courses = [
  "SSLC Coaching",
  "+1 Science Tuition",
  "+2 Science Tuition",
  "JEE Coaching",
  "NEET Coaching",
  "KEAM Coaching",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-background rounded-lg p-3 inline-block">
              <BrillioLogo size="md" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Shaping brilliant students through expert coaching for SSLC, +1, +2 and Entrance Exams. 
              Two branches in Nadapuram and Vadakara.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/brillio_nadapuram?igsh=MXE2ZzMxNWR6NXF6ZA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors" 
                aria-label="Instagram Nadapuram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/brillio_learning?igsh=NTNqZG9uano0cW9i" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors" 
                aria-label="Instagram Vadakara"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course} className="text-primary-foreground/80 text-sm">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {/* Nadapuram Branch */}
              <li className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p className="font-medium text-primary-foreground">Nadapuram Branch</p>
                    <p>Opp. TIM GHSS Road, Nadapuram</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <Phone className="h-3.5 w-3.5 text-accent" />
                  <a href="tel:7025392200" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    7025392200
                  </a>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <MessageCircle className="h-3.5 w-3.5 text-accent" />
                  <div className="text-sm text-primary-foreground/80">
                    <a href="https://wa.me/917025392200" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      7025392200
                    </a>
                    {" / "}
                    <a href="https://wa.me/917025393300" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      7025393300
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <Instagram className="h-3.5 w-3.5 text-accent" />
                  <a 
                    href="https://www.instagram.com/brillio_nadapuram?igsh=MXE2ZzMxNWR6NXF6ZA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    @brillio_nadapuram
                  </a>
                </div>
              </li>

              {/* Vadakara Branch */}
              <li className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <p className="font-medium text-primary-foreground">Vadakara Branch</p>
                    <p>Daliya Square, Edodi, Vadakara</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <Phone className="h-3.5 w-3.5 text-accent" />
                  <a href="tel:04964050049" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    04964050049
                  </a>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <MessageCircle className="h-3.5 w-3.5 text-accent" />
                  <a href="https://wa.me/919037932131" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    9037932131
                  </a>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <Instagram className="h-3.5 w-3.5 text-accent" />
                  <a 
                    href="https://www.instagram.com/brillio_learning?igsh=NTNqZG9uano0cW9i" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    @brillio_learning
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Brillio - Beyond Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
