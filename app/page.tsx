"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, Code, Smartphone, Palette, ShoppingCart, TrendingUp, Server, Quote, Star, ArrowRight, Calendar, User, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight, Play, Pause, Filter, CheckCircle, Send, Eye, Zap, Award, Shield, Globe, Moon, Sun, Menu, X } from "lucide-react"
import { services } from '@/lib/data'
import Chatbot from '@/components/chatbot'
import HeroSection from '@/components/hero-section'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [sliderValue, setSliderValue] = useState(50)
  const [isPlaying, setIsPlaying] = useState(true)
  const [portfolioFilter, setPortfolioFilter] = useState("all")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Full-stack e-commerce solution with payment integration",
      tagline: "Scalable online store with 300% revenue increase"
    },
    {
      title: "Social Media Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Multi-platform campaign with 300% engagement increase",
      tagline: "40% engagement boost across all platforms"
    },
    {
      title: "SaaS Dashboard",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Analytics dashboard with real-time data visualization",
      tagline: "Real-time insights with 60% faster decision making"
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity and marketing collateral",
      tagline: "Cohesive brand that increased recognition by 200%"
    },
    {
      title: "Mobile App",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cross-platform mobile application with offline sync",
      tagline: "Native performance with 4.8-star app store rating"
    },
    {
      title: "Content Strategy",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive content marketing and SEO strategy",
      tagline: "Organic traffic growth of 150% in 6 months"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Aqstoria transformed our business with their exceptional software development services. The team delivered beyond our expectations!",
      rating: 5,
      company: "TechStart",
      metric: "Revenue increased by 300%",
      metricValue: "300%"
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Pro",
      content: "Our social media campaigns increased engagement by 300% and drove 250% more conversions. Highly recommended!",
      rating: 5,
      company: "E-commerce Pro",
      metric: "Engagement boost",
      metricValue: "300%"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Professional service delivery and excellent results. The team exceeded our expectations in every project!",
      rating: 5,
      company: "Digital Solutions",
      metric: "Conversion rate improvement",
      metricValue: "150%"
    }
  ]

  const filteredPortfolio = portfolioFilter === "all" 
    ? portfolio 
    : portfolio.filter(project => project.category.toLowerCase() === portfolioFilter.toLowerCase())

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic here
    setNewsletterEmail("")
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(239, 58, 93, 0.3), rgba(255, 107, 107, 0.3), transparent 70%)`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ef3a5d]/10 to-[#ff6b6b]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#ef3a5d]/10 to-[#ff6b6b]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 glass-dark border-b border-[#ef3a5d]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group">
              <Image
                src="/logo.png"
                alt="Aqstoria Logo"
                width={120}
                height={40}
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#ef3a5d] transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {isDarkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
              </button>

              <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-[#ef3a5d]/20">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/20">
              <nav className="flex flex-col space-y-4">
                {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-[#ef3a5d] transition-all duration-300 font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* New Cinematic Hero Section */}
      <HeroSection isVisible={isVisible} />

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#f8f1e9]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className={`neumorphic hover-lift p-8 rounded-3xl ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0a1a2e]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">{service.description}</p>
                <p className="text-[#ef3a5d] font-semibold text-sm">
                  {service.title === "Custom Software Development" && "Build scalable apps with cutting-edge tech"}
                  {service.title === "Mobile App Development" && "Native performance with cross-platform reach"}
                  {service.title === "Social Media Marketing" && "Strategic campaigns that drive real engagement"}
                  {service.title === "UI/UX Design" && "User-centered design that converts visitors to customers"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Showcasing our best work across software and marketing
            </p>
            
            {/* Portfolio Filters */}
            <div className="flex justify-center space-x-4 mb-12">
              {["all", "software", "marketing", "design"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    portfolioFilter === filter
                      ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <div
                key={index}
                className={`group neumorphic hover-lift overflow-hidden rounded-3xl ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-[#ef3a5d] to-[#ff6b6b] flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <Palette className="h-16 w-16 mx-auto mb-4" />
                    <p className="font-semibold text-lg">{project.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-[#ef3a5d] rounded-full font-semibold transform scale-95 group-hover:scale-100 transition-transform duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#ef3a5d]">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0a1a2e]">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{project.description}</p>
                  <p className="text-[#ef3a5d] font-semibold text-sm">{project.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-[#f8f1e9]">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="neumorphic p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-[#ef3a5d] text-[#ef3a5d] mx-1" />
                        ))}
                      </div>
                      <Quote className="h-12 w-12 text-[#ef3a5d] mx-auto mb-8" />
                      <blockquote className="text-2xl font-light text-[#0a1a2e] mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Success Metric */}
                      <div className="bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl p-4 mb-8 inline-block">
                        <div className="text-3xl font-bold">{testimonial.metricValue}</div>
                        <div className="text-sm opacity-90">{testimonial.metric}</div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center mr-4">
                          <User className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#0a1a2e]">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <p className="text-sm text-[#ef3a5d] font-semibold">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-[#ef3a5d]" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-[#ef3a5d]" />
            </button>

            {/* Play/Pause Button */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#ef3a5d] rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0a1a2e]">
                About <span className="gradient-text">Aqstoria</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are a passionate team of developers, designers, and marketers dedicated to helping businesses thrive in the digital age. Our mission is to create innovative software solutions and strategic marketing campaigns that drive real results.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                With years of experience in both software development and social media marketing, we understand the unique challenges modern businesses face. We combine technical expertise with creative thinking to deliver solutions that not only look great but also perform exceptionally.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ef3a5d]">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ef3a5d]">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ef3a5d]">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="bg-gradient-to-br from-[#ef3a5d] to-[#ff6b6b] rounded-3xl p-8 text-white text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation Meets Excellence</h3>
                <p className="text-lg leading-relaxed">
                  We believe in pushing boundaries and creating solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#f8f1e9]">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#0a1a2e] font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 neumorphic-inset focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#0a1a2e] font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 neumorphic-inset focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#0a1a2e] font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 neumorphic-inset focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1a2e]">Email</h3>
                    <p className="text-gray-600">hello@aqstoria.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1a2e]">Phone</h3>
                    <p className="text-gray-600">+92 300 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1a2e]">Location</h3>
                    <p className="text-gray-600">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a2e] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Aqstoria Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed mb-6">
                Building digital excellence through innovative software solutions and strategic marketing campaigns.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-r-lg hover:from-[#ff6b6b] hover:to-[#ef3a5d] transition-all duration-300"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-6">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ef3a5d] transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              
              {/* Trust Signals */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <Shield className="h-4 w-4 mr-2" />
                  SSL Secured
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Globe className="h-4 w-4 mr-2" />
                  Eco-Friendly Hosting
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Award className="h-4 w-4 mr-2" />
                  Award Winning
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aqstoria. All rights reserved. | Powered by sustainable hosting</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  )
}
