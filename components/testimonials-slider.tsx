"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  User,
  Building,
  Globe,
  Smartphone,
  Monitor,
  ShoppingCart,
  Palette,
  Code,
  Database,
  TrendingUp,
  Search,
  Award,
  ThumbsUp,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Target,
  Lightbulb,
  Heart,
  Zap,
  Rocket,
  Shield,
  Eye,
  BarChart3,
  Flame,
  ExternalLink,
  ArrowRight,
  Play,
  Github,
  ExternalLink as ExternalLinkIcon,
  Filter,
  Grid,
  List,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Quote as QuoteIcon,
  ThumbsUp as ThumbsUpIcon,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  ShoppingCart as ShoppingCartIcon,
  Palette as PaletteIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Settings,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon2,
} from "lucide-react"

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  avatar: string
  rating: number
  content: string
  project: string
  service: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  date: string
  verified: boolean
}

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ahmed Khan",
      position: "CEO",
      company: "TechStart Pakistan",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content: "Aqstoria transformed our business with their exceptional web development services. The team delivered our e-commerce platform ahead of schedule with outstanding quality. Our online sales increased by 300% within the first month!",
      project: "E-commerce Platform",
      service: "Web Development",
      results: [
        { metric: "Sales Increase", value: "300%", improvement: "+250%" },
        { metric: "Page Load Speed", value: "1.2s", improvement: "-60%" },
        { metric: "Conversion Rate", value: "8.5%", improvement: "+4.2%" },
      ],
      date: "March 2024",
      verified: true,
    },
    {
      id: "2",
      name: "Fatima Ali",
      position: "Marketing Director",
      company: "Fashion Forward",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content: "The mobile app developed by Aqstoria exceeded our expectations. The user experience is flawless, and the app has been downloaded over 50,000 times. Their attention to detail and customer service is unmatched.",
      project: "Mobile Shopping App",
      service: "Mobile Development",
      results: [
        { metric: "App Downloads", value: "50K+", improvement: "+40K" },
        { metric: "User Rating", value: "4.8/5", improvement: "+0.8" },
        { metric: "Retention Rate", value: "85%", improvement: "+25%" },
      ],
      date: "February 2024",
      verified: true,
    },
    {
      id: "3",
      name: "Usman Malik",
      position: "Founder",
      company: "Digital Solutions Co.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content: "Working with Aqstoria was a game-changer for our startup. They built a comprehensive digital marketing strategy that increased our brand visibility by 400%. Their expertise in SEO and social media marketing is outstanding.",
      project: "Digital Marketing Campaign",
      service: "Digital Marketing",
      results: [
        { metric: "Brand Visibility", value: "400%", improvement: "+350%" },
        { metric: "Website Traffic", value: "25K/month", improvement: "+20K" },
        { metric: "Lead Generation", value: "150/month", improvement: "+120" },
      ],
      date: "January 2024",
      verified: true,
    },
    {
      id: "4",
      name: "Ayesha Hassan",
      position: "Product Manager",
      company: "Innovate Labs",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content: "Aqstoria's UI/UX design services are world-class. They redesigned our entire product interface, resulting in a 60% increase in user engagement and a 45% reduction in support tickets. The design is both beautiful and functional.",
      project: "Product Redesign",
      service: "UI/UX Design",
      results: [
        { metric: "User Engagement", value: "60%", improvement: "+40%" },
        { metric: "Support Tickets", value: "45%", improvement: "-55%" },
        { metric: "User Satisfaction", value: "92%", improvement: "+35%" },
      ],
      date: "December 2023",
      verified: true,
    },
    {
      id: "5",
      name: "Bilal Ahmed",
      position: "CTO",
      company: "Enterprise Solutions",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      content: "Aqstoria developed a complex enterprise management system for us. Their technical expertise, attention to security, and ability to handle large-scale projects is impressive. The system has improved our operational efficiency by 70%.",
      project: "Enterprise Management System",
      service: "Custom Development",
      results: [
        { metric: "Operational Efficiency", value: "70%", improvement: "+50%" },
        { metric: "Processing Time", value: "3 hours", improvement: "-12 hours" },
        { metric: "Cost Savings", value: "PKR 2M/year", improvement: "+1.5M" },
      ],
      date: "November 2023",
      verified: true,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  const getServiceIcon = (service: string) => {
    const icons = {
      "Web Development": Monitor,
      "Mobile Development": Smartphone,
      "Digital Marketing": TrendingUp,
      "UI/UX Design": Palette,
      "Custom Development": Code,
      "E-commerce": ShoppingCart,
    }
    return icons[service as keyof typeof icons] || Code
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4">
          <Award className="h-3 w-3 mr-1" />
          Client Success Stories
        </Badge>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how we've helped businesses transform their digital presence and achieve remarkable results
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        {/* Main Testimonial */}
        <div className="relative">
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Testimonial Content */}
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-500/20 absolute -top-2 -left-2" />
                    <p className="text-lg text-gray-700 leading-relaxed pl-6">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        {renderStars(testimonials[currentIndex].rating)}
                        {testimonials[currentIndex].verified && (
                          <Badge className="bg-green-100 text-green-700 text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Project Info */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        {React.createElement(getServiceIcon(testimonials[currentIndex].service), {
                          className: "h-5 w-5 text-white"
                        })}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          {testimonials[currentIndex].project}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {testimonials[currentIndex].service}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <h6 className="font-medium text-gray-900">Key Results:</h6>
                      {testimonials[currentIndex].results.map((result, index) => (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                          <span className="text-sm text-gray-600">{result.metric}</span>
                          <div className="text-right">
                            <span className="font-semibold text-gray-900">{result.value}</span>
                            <span className="text-xs text-green-600 ml-2">
                              {result.improvement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{testimonials[currentIndex].date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Previous/Next Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleAutoPlay}
            className={`text-sm ${
              isAutoPlaying ? "text-blue-600" : "text-gray-500"
            }`}
          >
            {isAutoPlaying ? "Pause" : "Play"}
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">150+</div>
          <div className="text-sm text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-600">4.9/5</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600">98%</div>
          <div className="text-sm text-gray-600">Client Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-600">300+</div>
          <div className="text-sm text-gray-600">Projects Completed</div>
        </div>
      </div>
    </div>
  )
} 