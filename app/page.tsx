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

  // Dark mode functionality
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  // Mouse tracking and visibility
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
      tagline: "300% revenue increase in 6 months",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "6 months",
      team: "4 developers, 2 designers",
      results: [
        { metric: "Revenue increased by", value: "300%", description: "in 6 months" },
        { metric: "Conversion rate", value: "15%", description: "improvement" },
        { metric: "Average order value", value: "$120", description: "increase" }
      ]
    },
    {
      title: "Social Media Campaign - FashionBrand",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Multi-platform social media campaign across Instagram, TikTok, and Facebook with influencer partnerships",
      tagline: "40% engagement boost, 2.5M reach",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "3 months",
      team: "3 developers, 1 designer",
      results: [
        { metric: "Engagement boost", value: "40%", description: "increase" },
        { metric: "Reach", value: "2.5M", description: "impressions" },
        { metric: "Conversion rate", value: "10%", description: "improvement" }
      ]
    },
    {
      title: "SaaS Dashboard - DataFlow",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Real-time analytics dashboard with data visualization, user management, and automated reporting",
      tagline: "60% faster decision making",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "4 months",
      team: "5 developers, 3 designers",
      results: [
        { metric: "Decision making", value: "60%", description: "faster" },
        { metric: "Data accuracy", value: "99.9%", description: "improvement" },
        { metric: "User retention", value: "20%", description: "increase" }
      ]
    },
    {
      title: "Brand Identity - StartupXYZ",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity including logo design, style guide, marketing collateral, and website redesign",
      tagline: "200% brand recognition increase",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "2 months",
      team: "2 developers, 1 designer",
      results: [
        { metric: "Brand recognition", value: "200%", description: "increase" },
        { metric: "Website traffic", value: "50%", description: "increase" },
        { metric: "Conversion rate", value: "15%", description: "improvement" }
      ]
    },
    {
      title: "Mobile App - FitnessTracker",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cross-platform fitness tracking app with GPS, workout plans, and social features",
      tagline: "4.8-star rating, 50K+ downloads",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "3 months",
      team: "3 developers, 2 designers",
      results: [
        { metric: "Rating", value: "4.8", description: "stars" },
        { metric: "Downloads", value: "50K+", description: "downloads" },
        { metric: "Retention rate", value: "80%", description: "increase" }
      ]
    },
    {
      title: "Content Strategy - B2B Company",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive content marketing strategy with SEO optimization, blog management, and lead generation",
      tagline: "150% organic traffic growth",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "5 months",
      team: "4 developers, 3 designers",
      results: [
        { metric: "Organic traffic", value: "150%", description: "growth" },
        { metric: "Lead generation", value: "300%", description: "increase" },
        { metric: "Conversion rate", value: "10%", description: "improvement" }
      ]
    },
    {
      title: "API Integration - PaymentSystem",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Secure payment gateway integration with multiple payment methods and fraud protection",
      tagline: "99.9% uptime, 0% fraud rate",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "4 months",
      team: "4 developers, 2 designers",
      results: [
        { metric: "Uptime", value: "99.9%", description: "uptime" },
        { metric: "Fraud rate", value: "0%", description: "rate" },
        { metric: "Transaction success rate", value: "99.9%", description: "improvement" }
      ]
    },
    {
      title: "Website Redesign - LawFirm",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional website redesign with improved user experience and lead capture optimization",
      tagline: "80% increase in lead generation",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "3 months",
      team: "3 developers, 2 designers",
      results: [
        { metric: "Lead generation", value: "80%", description: "increase" },
        { metric: "Conversion rate", value: "15%", description: "improvement" },
        { metric: "Bounce rate", value: "30%", description: "decrease" }
      ]
    },
    {
      title: "Cloud Migration - Enterprise Corp",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Legacy system migration to AWS with containerization and automated deployment",
      tagline: "70% cost reduction, 3x performance",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      duration: "6 months",
      team: "5 developers, 3 designers",
      results: [
        { metric: "Cost reduction", value: "70%", description: "reduction" },
        { metric: "Performance", value: "3x", description: "increase" },
        { metric: "Scalability", value: "10x", description: "improvement" }
      ]
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
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
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
      <header className="fixed top-0 w-full z-50 glassmorphism border-b border-[#ef3a5d]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group">
              <Image
                src="/logo.png"
                alt="Aqstoria Logo"
                width={120}
                height={40}
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-[#ef3a5d] transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Enhanced Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-200 animate-rotate-slow" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                )}
              </button>

              <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 text-gray-700 dark:text-gray-200" /> : <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-600">
              <nav className="flex flex-col space-y-4">
                {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 dark:text-gray-200 hover:text-[#ef3a5d] transition-all duration-300 font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-bounce">
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
      <section id="services" className="py-16 px-6 bg-[#f8f1e9] dark:bg-[#1a2a3e] transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a1a2e] dark:text-white">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative glassmorphism-enhanced p-6 rounded-3xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 hover-lift-enhanced ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${index % 2 === 0 ? 'organic-float' : 'organic-float-delayed'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Enhanced Floating Elements */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#ff6b6b] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-100" />
                <div className="absolute top-1/2 right-2 w-1 h-1 bg-[#ef3a5d] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200" />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 animate-pulse-glow`}>
                  <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#0a1a2e] dark:text-white group-hover:text-[#ef3a5d] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
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
                
                {/* Enhanced Service Features */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-[#ef3a5d]/10 text-[#ef3a5d] text-xs rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-white dark:bg-[#0a1a2e] transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a1a2e] dark:text-white">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that drive real results
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "software", "marketing", "design", "ecommerce"].map((filter) => (
              <button
                key={filter}
                onClick={() => setPortfolioFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover-bounce ${
                  portfolioFilter === filter
                    ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Enhanced Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-fr">
            {portfolio
              .filter((project) => portfolioFilter === "all" || project.category === portfolioFilter)
              .map((project, index) => {
                // Determine card size based on project importance and category
                const getCardSize = (project: any) => {
                  if (project.title.includes("E-commerce")) return "md:col-span-6 lg:col-span-8"
                  if (project.title.includes("Social Media")) return "md:col-span-3 lg:col-span-4 md:row-span-2"
                  if (project.title.includes("Mobile App")) return "md:col-span-3 lg:col-span-6"
                  if (project.title.includes("Analytics")) return "md:col-span-3 lg:col-span-4"
                  if (project.title.includes("Brand Identity")) return "md:col-span-3 lg:col-span-3"
                  if (project.title.includes("Fitness")) return "md:col-span-3 lg:col-span-4"
                  if (project.title.includes("Content Marketing")) return "md:col-span-3 lg:col-span-3"
                  if (project.title.includes("Payment")) return "md:col-span-3 lg:col-span-3"
                  if (project.title.includes("Website")) return "md:col-span-3 lg:col-span-3"
                  if (project.title.includes("Legacy")) return "md:col-span-6 lg:col-span-6"
                  return "md:col-span-3 lg:col-span-3" // Default size
                }

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    } ${getCardSize(project)}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative h-full glassmorphism">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 group-hover:from-black/40 group-hover:to-black/20 transition-all duration-500" />
                      
                      <div className="relative p-6 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-[#ef3a5d]/20 text-[#ef3a5d] rounded-full text-xs font-semibold">
                              {project.category}
                            </span>
                            <div className="flex space-x-2">
                              {project.tech.map((tech: string, techIndex: number) => (
                                <div
                                  key={techIndex}
                                  className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                  style={{ animationDelay: `${techIndex * 100}ms` }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ef3a5d] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* Project Stats */}
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Duration: {project.duration}</span>
                            <span>Team: {project.team}</span>
                          </div>
                          
                          {/* Enhanced Action Buttons */}
                          <div className="flex space-x-3">
                            <button className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 group-hover:bg-[#ef3a5d] group-hover:text-white">
                              Learn More
                            </button>
                            <button className="px-4 py-2 bg-[#ef3a5d] text-white rounded-lg font-semibold hover:bg-[#ff6b6b] transition-all duration-300 hover:scale-105 hover-bounce">
                              View Case Study
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-[#f8f1e9]">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a1a2e]">
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
                    <div className="neumorphic p-10 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-[#ef3a5d] text-[#ef3a5d] mx-1" />
                        ))}
                      </div>
                      <Quote className="h-12 w-12 text-[#ef3a5d] mx-auto mb-6" />
                      <blockquote className="text-2xl font-light text-[#0a1a2e] mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Success Metric */}
                      <div className="bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl p-4 mb-6 inline-block">
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
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a1a2e]">
              About <span className="gradient-text">Aqstoria</span>
            </h2>
            <div className="bg-gradient-to-br from-[#ef3a5d]/10 to-[#ff6b6b]/10 rounded-3xl p-8 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We're a passionate team of developers, designers, and marketers dedicated to transforming businesses through innovative digital solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience and 150+ successful projects, we've helped businesses of all sizes achieve their digital goals. Our commitment to quality, innovation, and client success drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[#f8f1e9] dark:bg-[#1a2a3e] transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a1a2e] dark:text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className={`glassmorphism p-8 rounded-3xl transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`} style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold mb-6 text-[#0a1a2e] dark:text-white">
                Send us a message
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Enhanced Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-[#ef3a5d] bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-[#ef3a5d] focus:ring-2"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the <a href="#" className="text-[#ef3a5d] hover:underline">Privacy Policy</a> and consent to being contacted about my project.
                  </label>
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-5 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce animate-pulse-glow"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Enhanced Contact Info */}
            <div className={`space-y-8 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`} style={{ animationDelay: "400ms" }}>
              <div className="glassmorphism p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 text-[#0a1a2e] dark:text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        hello@aqstoria.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-1">
                        Office
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Innovation Street<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Newsletter Signup */}
              <div className="glassmorphism p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 text-[#0a1a2e] dark:text-white">
                  Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get the latest insights on digital innovation and tech trends.
                </p>
                <div className="flex space-x-3">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-[#ef3a5d] text-white rounded-xl font-semibold hover:bg-[#ff6b6b] transition-all duration-300 hover:scale-105 hover-bounce">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a1a2e]">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in digital development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`group relative neumorphic hover-lift rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Blog Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#0a1a2e] to-[#1a2a3e] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ef3a5d] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <button className="text-[#ef3a5d] font-semibold text-sm group-hover:text-[#ff6b6b] transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-16 px-6 bg-[#f8f1e9]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a1a2e]">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group relative neumorphic hover-lift p-6 rounded-3xl text-center transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Team Member Image */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Team Member Info */}
                <h3 className="text-lg font-bold text-[#0a1a2e] mb-2 group-hover:text-[#ef3a5d] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#ef3a5d] font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={member.twitter} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#0a1a2e] dark:bg-[#0a1a2e] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Aqstoria Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering businesses with innovative digital solutions. We transform ideas into powerful, scalable applications that drive growth and success.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Github, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover-bounce group"
                  >
                    <social.icon className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {["Custom Software Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "Cloud Solutions"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300 hover:translate-x-1 inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & CTA */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-6">Get Started</h3>
                <p className="text-gray-300 mb-4">
                  Ready to transform your business? Let's discuss your project.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
                  Request a Quote
                </button>
              </div>
              
              <div className="pt-6 border-t border-gray-700">
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>hello@aqstoria.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>123 Innovation Street<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2025 Aqstoria. All rights reserved. | Made with ❤️ by Aqstoria Team.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  )
}
