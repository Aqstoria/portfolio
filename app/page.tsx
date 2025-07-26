"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, Code, Smartphone, Palette, ShoppingCart, TrendingUp, Server, Quote, Star, ArrowRight, Calendar, User, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [sliderValue, setSliderValue] = useState(50)
  const [isPlaying, setIsPlaying] = useState(true)

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

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Scalable web applications, SaaS platforms, and enterprise solutions built with modern technologies.",
      color: "from-[#ef3a5d] to-[#d62f4f]"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS/Android apps and cross-platform solutions with React Native and Flutter.",
      color: "from-[#d62f4f] to-[#c42a47]"
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Strategic campaigns across all platforms with data-driven analytics and ROI tracking.",
      color: "from-[#ef3a5d] to-[#d62f4f]"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance engagement and drive conversions.",
      color: "from-[#d62f4f] to-[#c42a47]"
    }
  ]

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Full-stack e-commerce solution with payment integration"
    },
    {
      title: "Social Media Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Multi-platform campaign with 300% engagement increase"
    },
    {
      title: "SaaS Dashboard",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Analytics dashboard with real-time data visualization"
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity and marketing collateral"
    },
    {
      title: "Mobile App",
      category: "Software",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cross-platform mobile application with offline sync"
    },
    {
      title: "Content Strategy",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive content marketing and SEO strategy"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Aqstoria transformed our business with their exceptional software development services. The team delivered beyond our expectations!",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Pro",
      content: "Our social media campaigns increased engagement by 300% and drove 250% more conversions. Highly recommended!",
      rating: 5,
      company: "E-commerce Pro"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Professional service delivery and excellent results. The team exceeded our expectations in every project!",
      rating: 5,
      company: "Digital Solutions"
    }
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(239, 58, 93, 0.3), rgba(214, 47, 79, 0.3), transparent 70%)`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ef3a5d]/10 to-[#d62f4f]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#ef3a5d]/10 to-[#c42a47]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg">
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
                  className="text-gray-700 hover:text-[#ef3a5d] transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-[#ef3a5d]/20">
                Get Started
              </button>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] hover:from-[#d62f4f] hover:to-[#c42a47] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className={`transform transition-all duration-2000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}>
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-gray-900">
                <span className="block">Build.</span>
                <span className="block">Grow.</span>
                <span className="block bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] bg-clip-text text-transparent">
                  Thrive.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                Custom software and social media strategies that elevate your brand.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm border border-[#ef3a5d]/20">
                  Get a Quote
                </button>
                <button className="px-8 py-4 border-2 border-[#ef3a5d] text-[#ef3a5d] rounded-full font-semibold hover:bg-[#ef3a5d] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Column - Interactive Slider */}
            <div className={`transform transition-all duration-2000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Before & After</h3>
                
                {/* Interactive Slider */}
                <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex">
                    {/* Before Image */}
                    <div className="w-1/2 h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <Code className="h-12 w-12 mx-auto mb-4" />
                        <p className="font-semibold">Basic UI</p>
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="w-1/2 h-full bg-gradient-to-br from-[#ef3a5d] to-[#d62f4f] flex items-center justify-center">
                      <div className="text-center text-white">
                        <Palette className="h-12 w-12 mx-auto mb-4" />
                        <p className="font-semibold">Polished Design</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Slider Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-pointer"
                    style={{ left: `${sliderValue}%` }}
                    onMouseDown={(e) => {
                      const handleMouseMove = (e: MouseEvent) => {
                        const target = e.currentTarget as HTMLElement
                        if (!target) return
                        const rect = target.getBoundingClientRect()
                        const x = e.clientX - rect.left
                        const percentage = (x / rect.width) * 100
                        setSliderValue(Math.max(0, Math.min(100, percentage)))
                      }
                      const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove)
                        document.removeEventListener('mouseup', handleMouseUp)
                      }
                      document.addEventListener('mousemove', handleMouseMove)
                      document.addEventListener('mouseup', handleMouseUp)
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-[#ef3a5d] flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#ef3a5d] rounded-full" />
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 text-sm">
                  Drag to see the transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-[#ef3a5d]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-[#ef3a5d]">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our best work across software and marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-[#ef3a5d] to-[#d62f4f] flex items-center justify-center overflow-hidden">
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="text-[#ef3a5d]">Clients Say</span>
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
                    <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-[#ef3a5d] text-[#ef3a5d] mx-1" />
                        ))}
                      </div>
                      <Quote className="h-12 w-12 text-[#ef3a5d] mx-auto mb-8" />
                      <blockquote className="text-2xl font-light text-gray-900 mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] rounded-full flex items-center justify-center mr-4">
                          <User className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                About <span className="text-[#ef3a5d]">Aqstoria</span>
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
              <div className="bg-gradient-to-br from-[#ef3a5d] to-[#d62f4f] rounded-3xl p-8 text-white text-center">
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
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get In <span className="text-[#ef3a5d]">Touch</span>
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
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@aqstoria.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+92 300 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
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
              <p className="text-gray-400 leading-relaxed">
                Building digital excellence through innovative software solutions and strategic marketing campaigns.
              </p>
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
              <div className="flex space-x-4">
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
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aqstoria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
