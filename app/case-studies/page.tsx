"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Target, 
  CheckCircle, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  BarChart3,
  Zap,
  Award,
  Calendar,
  FileText,
  MessageCircle,
  Eye,
  Download,
  Share2,
  Heart,
  Filter,
  Search,
  Tag,
  Award as Trophy,
  Rocket,
  Shield,
  Database,
  Server,
  Cloud,
  Cpu,
  Layers,
  GitBranch,
  Box,
  Globe2,
  ShieldCheck,
  Zap as Lightning,
  Palette as Design,
  Code2,
  Smartphone2,
  TrendingUp2,
  Server2,
  Link2,
  FileCode2,
  Puzzle2,
  Shield2,
  Headphones2,
  Zap2,
  CreditCard2,
  MessageCircle2
} from "lucide-react"
import SharedLayout from '@/components/shared-layout'

export default function CaseStudiesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  // Case Studies Data
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform - TechMart",
      category: "software",
      client: "TechMart",
      industry: "E-commerce",
      duration: "6 months",
      team: "4 developers, 2 designers",
      budget: "PKR 2,500,000",
      challenge: "TechMart needed a scalable e-commerce platform to handle 10,000+ daily transactions with advanced inventory management and real-time analytics.",
      solution: "Developed a full-stack e-commerce solution using React, Node.js, and MongoDB with Stripe payment integration, real-time inventory tracking, and advanced analytics dashboard.",
      results: [
        { metric: "Revenue increased by", value: "300%", description: "in 6 months" },
        { metric: "Conversion rate", value: "15%", description: "improvement" },
        { metric: "Average order value", value: "PKR 12,000", description: "increase" },
        { metric: "Customer satisfaction", value: "4.8/5", description: "rating" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AWS"],
      image: "/placeholder.svg?height=400&width=600",
      video: "https://demo.techmart-ecommerce.com",
      testimonial: {
        name: "Ahmed Khan",
        role: "CEO, TechMart",
        content: "Aqstoria transformed our business with their exceptional e-commerce platform. The team delivered beyond our expectations and the results speak for themselves!",
        rating: 5
      },
      process: [
        {
          phase: "Discovery & Planning",
          duration: "2 weeks",
          activities: ["Requirements gathering", "User research", "Technical architecture", "Project roadmap"]
        },
        {
          phase: "Design & Prototyping",
          duration: "3 weeks",
          activities: ["UI/UX design", "User flow mapping", "Interactive prototypes", "Design system creation"]
        },
        {
          phase: "Development",
          duration: "4 months",
          activities: ["Frontend development", "Backend API", "Database design", "Payment integration"]
        },
        {
          phase: "Testing & Launch",
          duration: "2 weeks",
          activities: ["Quality assurance", "Performance testing", "Security audit", "Production deployment"]
        }
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      id: 2,
      title: "Social Media Campaign - FashionBrand",
      category: "marketing",
      client: "FashionBrand",
      industry: "Fashion & Retail",
      duration: "3 months",
      team: "3 marketers, 1 designer",
      budget: "PKR 800,000",
      challenge: "FashionBrand wanted to increase brand awareness and drive sales through social media while competing with established fashion brands.",
      solution: "Developed a comprehensive multi-platform social media strategy with influencer partnerships, user-generated content campaigns, and targeted paid advertising.",
      results: [
        { metric: "Engagement boost", value: "40%", description: "increase" },
        { metric: "Reach", value: "2.5M", description: "impressions" },
        { metric: "Conversion rate", value: "10%", description: "improvement" },
        { metric: "Brand mentions", value: "15,000+", description: "increase" }
      ],
      technologies: ["Instagram", "Facebook", "TikTok", "Google Ads", "Analytics"],
      image: "/placeholder.svg?height=400&width=600",
      video: "https://demo.fashionbrand-campaign.com",
      testimonial: {
        name: "Fatima Ali",
        role: "Marketing Director, FashionBrand",
        content: "The social media campaign exceeded our expectations. We saw incredible engagement and a significant boost in sales. Highly recommended!",
        rating: 5
      },
      process: [
        {
          phase: "Strategy Development",
          duration: "2 weeks",
          activities: ["Market research", "Competitor analysis", "Target audience definition", "Campaign strategy"]
        },
        {
          phase: "Content Creation",
          duration: "4 weeks",
          activities: ["Visual content design", "Copywriting", "Video production", "Influencer collaboration"]
        },
        {
          phase: "Campaign Execution",
          duration: "2 months",
          activities: ["Multi-platform posting", "Community management", "Paid advertising", "Performance monitoring"]
        },
        {
          phase: "Analysis & Optimization",
          duration: "2 weeks",
          activities: ["Data analysis", "Strategy refinement", "ROI reporting", "Future planning"]
        }
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    },
    {
      id: 3,
      title: "SaaS Dashboard - DataFlow",
      category: "software",
      client: "DataFlow Analytics",
      industry: "SaaS & Analytics",
      duration: "4 months",
      team: "5 developers, 3 designers",
      budget: "PKR 3,200,000",
      challenge: "DataFlow needed a real-time analytics dashboard that could process millions of data points and provide actionable insights to enterprise clients.",
      solution: "Built a scalable SaaS platform with real-time data processing, interactive visualizations, automated reporting, and multi-tenant architecture.",
      results: [
        { metric: "Decision making", value: "60%", description: "faster" },
        { metric: "Data accuracy", value: "99.9%", description: "improvement" },
        { metric: "User retention", value: "20%", description: "increase" },
        { metric: "Client satisfaction", value: "4.9/5", description: "rating" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js", "AWS"],
      image: "/placeholder.svg?height=400&width=600",
      video: "https://demo.dataflow-dashboard.com",
      testimonial: {
        name: "Usman Hassan",
        role: "CTO, DataFlow Analytics",
        content: "The dashboard has revolutionized how our clients interact with their data. The real-time capabilities and intuitive design are game-changers.",
        rating: 5
      },
      process: [
        {
          phase: "Requirements Analysis",
          duration: "3 weeks",
          activities: ["Stakeholder interviews", "Data flow mapping", "Technical requirements", "Architecture planning"]
        },
        {
          phase: "Design & UX",
          duration: "4 weeks",
          activities: ["Information architecture", "UI/UX design", "Prototyping", "User testing"]
        },
        {
          phase: "Development",
          duration: "3 months",
          activities: ["Frontend development", "Backend API", "Database optimization", "Real-time features"]
        },
        {
          phase: "Testing & Deployment",
          duration: "2 weeks",
          activities: ["Performance testing", "Security audit", "Beta testing", "Production launch"]
        }
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400"
      ]
    }
  ]

  const categories = [
    { id: "all", name: "All Projects", count: caseStudies.length },
    { id: "software", name: "Software Development", count: caseStudies.filter(c => c.category === "software").length },
    { id: "marketing", name: "Digital Marketing", count: caseStudies.filter(c => c.category === "marketing").length },
    { id: "design", name: "UI/UX Design", count: caseStudies.filter(c => c.category === "design").length },
    { id: "ecommerce", name: "E-commerce", count: caseStudies.filter(c => c.category === "ecommerce").length }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, caseStudies.length])

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedCategory === "all" || study.category === selectedCategory
  )

  const currentStudy = caseStudies[currentCaseStudy]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#f8f1e9] to-[#e8f4f8] dark:from-[#0a1a2e] dark:to-[#1a2a3e] transition-all duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0a1a2e] dark:text-white">
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Detailed breakdowns of our most successful projects. See how we solve complex challenges and deliver exceptional results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Award, value: "150+", label: "Projects Completed" },
                { icon: TrendingUp, value: "300%", label: "Avg. ROI Increase" },
                { icon: Users, value: "50+", label: "Happy Clients" },
                { icon: Clock, value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={index} className="glassmorphism p-6 rounded-2xl text-center">
                  <stat.icon className="h-8 w-8 text-[#ef3a5d] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-[#0a1a2e] dark:text-white">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover-bounce ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Carousel */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our most impactful projects that demonstrate our expertise
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCaseStudy * 100}%)` }}
              >
                {caseStudies.map((study, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">
                      <div className="space-y-8">
                        <div>
                          <span className="px-3 py-1 bg-[#ef3a5d]/20 text-[#ef3a5d] rounded-full text-sm font-semibold mb-4 inline-block">
                            {study.category.toUpperCase()}
                          </span>
                          <h3 className="text-3xl font-bold text-[#0a1a2e] dark:text-white mb-4">
                            {study.title}
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Key Results */}
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.slice(0, 4).map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-gradient-to-r from-[#ef3a5d]/10 to-[#ff6b6b]/10 p-4 rounded-2xl">
                              <div className="text-2xl font-bold text-[#ef3a5d]">{result.value}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">{result.metric}</div>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-[#ef3a5d]/10 text-[#ef3a5d] rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <button className="px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
                            View Full Case Study
                          </button>
                          <button className="px-8 py-4 border-2 border-[#ef3a5d] text-[#ef3a5d] rounded-2xl font-semibold hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                            Watch Demo
                          </button>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-[#0a1a2e] to-[#1a2a3e] rounded-3xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-16 w-16 text-white opacity-80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-[#ef3a5d]" />
            </button>
            <button 
              onClick={() => setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
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

      {/* Detailed Case Studies Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our complete portfolio of successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`group relative glassmorphism p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#0a1a2e] to-[#1a2a3e] rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-12 w-12 text-white opacity-60" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <span className="px-3 py-1 bg-[#ef3a5d]/20 text-[#ef3a5d] rounded-full text-sm font-semibold mb-3 inline-block">
                      {study.category.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0a1a2e] dark:text-white mb-3 group-hover:text-[#ef3a5d] transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#ef3a5d]">{study.duration}</div>
                      <div className="text-sm text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#ef3a5d]">{study.team}</div>
                      <div className="text-sm text-gray-500">Team Size</div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {result.metric} {result.value} {result.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#ef3a5d]/10 text-[#ef3a5d] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover-bounce">
                      View Details
                    </button>
                    <button className="px-4 py-3 border border-[#ef3a5d] text-[#ef3a5d] rounded-xl font-semibold hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create the next case study together. Start your project today and join our success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#ef3a5d] rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-[#ef3a5d] transition-all duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
      </div>
    </SharedLayout>
  )
} 