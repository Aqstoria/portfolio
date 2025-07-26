"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, Code, Smartphone, Palette, ShoppingCart, TrendingUp, Server, Quote, Star, ArrowRight, Calendar, User } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      color: "from-[#ef3a5d] to-[#d62f4f]"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      color: "from-[#d62f4f] to-[#c42a47]"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Professional user interface and experience design services",
      color: "from-[#ef3a5d] to-[#d62f4f]"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Custom Shopify stores, themes, and app development",
      color: "from-[#d62f4f] to-[#c42a47]"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns",
      color: "from-[#ef3a5d] to-[#d62f4f]"
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services",
      color: "from-[#d62f4f] to-[#c42a47]"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Aqstoria transformed our business with their exceptional web development services. The team delivered beyond our expectations!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Pro",
      content: "Our Shopify store conversion rate increased by 250% after their optimization. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Professional service delivery and excellent results. The team exceeded our expectations!",
      rating: 5
    }
  ]

  const blogPosts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the web development landscape...",
      date: "Jan 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Why Mobile-First Design is Crucial",
      excerpt: "Learn why mobile-first design should be your priority in today's digital world...",
      date: "Jan 10, 2024",
      readTime: "4 min read"
    },
    {
      title: "E-commerce Success: Shopify vs WooCommerce",
      excerpt: "A comprehensive comparison to help you choose the right platform for your business...",
      date: "Jan 5, 2024",
      readTime: "6 min read"
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-gray-200/50 shadow-lg">
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

            <div className="flex items-center space-x-4">
              {/* WhatsApp Contact */}
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
      </nav>

      {/* Main Content - Centered Logo */}
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 text-center">
          {/* Logo Container */}
          <div className={`transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
          }`}>
            <div className="relative">
              {/* Main Logo */}
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="Aqstoria Logo"
                  width={300}
                  height={100}
                  className="h-24 w-auto filter drop-shadow-2xl transform hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Subtitle */}
              <div className={`transform transition-all duration-2000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}>
                <p className="text-xl text-gray-600 font-light tracking-wide">
                  Digital Excellence
                </p>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-8 -right-8 w-6 h-6 bg-[#ef3a5d] rounded-full animate-bounce`} style={{ animationDelay: '1s' }} />
              <div className={`absolute -bottom-8 -left-8 w-4 h-4 bg-[#d62f4f] rounded-full animate-bounce`} style={{ animationDelay: '2s' }} />
              <div className={`absolute top-1/2 -right-12 w-3 h-3 bg-[#c42a47] rounded-full animate-pulse`} style={{ animationDelay: '3s' }} />
              <div className={`absolute top-1/2 -left-12 w-5 h-5 bg-[#ef3a5d] rounded-full animate-pulse`} style={{ animationDelay: '4s' }} />
            </div>
          </div>

          {/* Contact Button */}
          <div className={`transform transition-all duration-2000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 mt-12 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] hover:from-[#d62f4f] hover:to-[#c42a47] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-[#ef3a5d]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#ef3a5d] text-[#ef3a5d]" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#ef3a5d] mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Latest <span className="text-[#ef3a5d]">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in digital technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-white" />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <button className="text-[#ef3a5d] font-semibold hover:text-[#d62f4f] transition-colors duration-300 flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <Quote className="h-16 w-16 text-[#ef3a5d] mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-light text-gray-900 mb-8 leading-relaxed">
              "Innovation distinguishes between a leader and a follower."
            </blockquote>
            <p className="text-xl text-gray-600">- Steve Jobs</p>
          </div>
        </div>
      </section>
    </div>
  )
}
