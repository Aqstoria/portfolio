import { Github, Linkedin, Mail, Globe, MessageCircle, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-gray-500/10" />
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-gray-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-blue-400/20 rounded-full" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                  Aqstoria
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your complete digital solutions team delivering innovative MERN/MEAN stack development, Shopify
                  solutions, WordPress development, and comprehensive digital marketing services.
                </p>
                <div className="flex items-center text-gray-400 mb-3">
                  <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">Pakistan</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "MERN Stack Development",
                  "MEAN Stack Development",
                  "Shopify Development",
                  "WordPress Development",
                  "Mobile App Development",
                  "Graphic Design & Branding",
                  "Digital Marketing",
                  "SEO & Analytics",
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Team", href: "#team" },
                  { label: "Portfolio", href: "#projects" },
                  { label: "Case Studies", href: "#" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact Us", href: "#contact" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-blue-400" />
                  <a
                    href="mailto:hello@aqstoria.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    hello@aqstoria.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-blue-400" />
                  <a
                    href="tel:+923001234567"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    +92 300 123 4567
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-4 text-blue-400" />
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h5>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:hello@aqstoria.com", label: "Email" },
                    { icon: Globe, href: "#", label: "Website" },
                    { icon: MessageCircle, href: "https://wa.me/923001234567", label: "WhatsApp" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                      title={social.label}
                    >
                      <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Aqstoria. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">Crafted with ❤️ by the Aqstoria Team</p>
              </div>

              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
