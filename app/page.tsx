"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, Code, Smartphone, Palette, ShoppingCart, TrendingUp, Server, Quote, Star, ArrowRight, Calendar, User, Users, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight, Play, Pause, Filter, CheckCircle, Send, Eye, Zap, Award, Shield, Globe, Moon, Sun, Menu, X } from "lucide-react"
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
      title: "E-commerce Platform - TechMart",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Full-stack e-commerce solution with advanced inventory management, payment processing, and analytics dashboard",
      tagline: "300% revenue increase in 6 months"
    },
    {
      title: "Social Media Campaign - FashionBrand",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Multi-platform social media campaign across Instagram, TikTok, and Facebook with influencer partnerships",
      tagline: "40% engagement boost, 2.5M reach"
    },
    {
      title: "SaaS Dashboard - DataFlow",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Real-time analytics dashboard with data visualization, user management, and automated reporting",
      tagline: "60% faster decision making"
    },
    {
      title: "Brand Identity - StartupXYZ",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity including logo design, style guide, marketing collateral, and website redesign",
      tagline: "200% brand recognition increase"
    },
    {
      title: "Mobile App - FitnessTracker",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cross-platform fitness tracking app with GPS, workout plans, and social features",
      tagline: "4.8-star rating, 50K+ downloads"
    },
    {
      title: "Content Strategy - B2B Company",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive content marketing strategy with SEO optimization, blog management, and lead generation",
      tagline: "150% organic traffic growth"
    },
    {
      title: "API Integration - PaymentSystem",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Secure payment gateway integration with multiple payment methods and fraud protection",
      tagline: "99.9% uptime, 0% fraud rate"
    },
    {
      title: "Website Redesign - LawFirm",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional website redesign with improved user experience and lead capture optimization",
      tagline: "80% increase in lead generation"
    },
    {
      title: "Cloud Migration - Enterprise Corp",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Legacy system migration to AWS with containerization and automated deployment",
      tagline: "70% cost reduction, 3x performance"
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

  // Blog posts data
  const blogPosts = [
    {
      title: "5 UX Trends for 2025",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Discover the top user experience trends that will shape digital products in 2025.",
      author: "Aqsa Khan",
      date: "2024-06-01",
      slug: "ux-trends-2025"
    },
    {
      title: "How AI is Transforming Marketing",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing strategies.",
      author: "Ali Raza",
      date: "2024-05-20",
      slug: "ai-marketing"
    },
    {
      title: "Building Scalable Web Apps with Next.js",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "A practical guide to architecting robust, scalable web applications using Next.js.",
      author: "Sara Ahmed",
      date: "2024-05-10",
      slug: "scalable-nextjs"
    }
  ]

  // Team members data
  const team = [
    {
      name: "Aqsa Khan",
      role: "Founder & Lead Designer",
      image: "/placeholder-user.jpg",
      bio: "Aqsa leads the creative vision at Aqstoria, specializing in UI/UX and branding.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Ali Raza",
      role: "Full Stack Developer",
      image: "/placeholder-user.jpg",
      bio: "Ali builds scalable web and mobile apps with a focus on performance and security.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sara Ahmed",
      role: "Digital Marketing Strategist",
      image: "/placeholder-user.jpg",
      bio: "Sara crafts data-driven marketing campaigns that deliver real results.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Bilal Hussain",
      role: "Cloud Solutions Architect",
      image: "/placeholder-user.jpg",
      bio: "Bilal designs and deploys secure, scalable cloud infrastructure for clients.",
      linkedin: "#",
      twitter: "#"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative neumorphic hover-lift p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-3`}>
                  <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0a1a2e] group-hover:text-[#ef3a5d] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <p className="text-[#ef3a5d] font-semibold text-sm group-hover:text-[#ff6b6b] transition-colors duration-300">
                  {service.title === "Custom Software Development" && "Build scalable apps with cutting-edge tech"}
                  {service.title === "Mobile App Development" && "Native performance with cross-platform reach"}
                  {service.title === "UI/UX Design" && "User-centered design that converts visitors to customers"}
                  {service.title === "E-commerce Development" && "Complete online store solutions with payment processing"}
                  {service.title === "Digital Marketing" && "Strategic campaigns that drive real engagement"}
                  {service.title === "Cloud Solutions" && "Scalable cloud infrastructure for modern applications"}
                  {service.title === "API Development" && "Robust APIs for seamless system integration"}
                  {service.title === "Database Design" && "Optimized database architecture for performance"}
                  {service.title === "Maintenance & Support" && "24/7 technical support and maintenance"}
                </p>
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/0 to-[#ff6b6b]/0 group-hover:from-[#ef3a5d]/5 group-hover:to-[#ff6b6b]/5 rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Floating Elements on Hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#ef3a5d] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#ff6b6b] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-100" />
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
                className={`group relative neumorphic hover-lift overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-gradient-to-br from-[#ef3a5d] to-[#ff6b6b] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2e]/20 to-[#1a2a3e]/20" />
                  <div className="text-center text-white relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      {project.category === "Software" && <Code className="h-8 w-8" />}
                      {project.category === "Marketing" && <TrendingUp className="h-8 w-8" />}
                      {project.category === "Design" && <Palette className="h-8 w-8" />}
                    </div>
                    <p className="font-semibold text-lg">{project.title.split(' - ')[0]}</p>
                    <p className="text-sm opacity-90">{project.title.split(' - ')[1]}</p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/80 to-[#ff6b6b]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-[#ef3a5d] rounded-full font-semibold transform scale-95 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      View Case Study
                    </button>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === "Software" ? "bg-blue-100 text-blue-700" :
                      project.category === "Marketing" ? "bg-green-100 text-green-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#ef3a5d] rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-lg font-bold mb-3 text-[#0a1a2e] group-hover:text-[#ef3a5d] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Results Tagline */}
                  <div className="bg-gradient-to-r from-[#ef3a5d]/10 to-[#ff6b6b]/10 rounded-lg p-3 border-l-4 border-[#ef3a5d]">
                    <p className="text-[#ef3a5d] font-semibold text-sm group-hover:text-[#ff6b6b] transition-colors duration-300">
                      ✨ {project.tagline}
                    </p>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>3-6 months</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Team of 4-6</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements on Hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#ef3a5d] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#ff6b6b] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-100" />
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

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest articles, tips, and industry news
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="group relative neumorphic hover-lift overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/10 to-[#ff6b6b]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#0a1a2e] group-hover:text-[#ef3a5d] transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>By {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <a href={`#blog/${post.slug}`} className="inline-block px-4 py-2 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow hover:shadow-lg transition-all duration-300">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 px-6 bg-[#f8f1e9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              Meet <span className="gradient-text">Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Aqstoria’s success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative neumorphic hover-lift overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="relative h-40 w-40 mx-auto mt-6 mb-4 rounded-full overflow-hidden group-hover:ring-4 group-hover:ring-[#ef3a5d] transition-all duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-1 text-[#0a1a2e] group-hover:text-[#ef3a5d] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[#ef3a5d] font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#ef3a5d] transition-all duration-300">
                      <svg className="w-4 h-4 text-[#0a1a2e] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z"/></svg>
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#ef3a5d] transition-all duration-300">
                      <svg className="w-4 h-4 text-[#0a1a2e] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
            <p>&copy; 2025 Aqstoria. All rights reserved. | Made with ❤️ by Aqstoria Team</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  )
}
