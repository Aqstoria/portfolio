"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowLeft,
  Code,
  Palette,
  ShoppingCart,
  Monitor,
  Smartphone,
  Settings,
  Database,
  TrendingUp,
  Search,
  Zap,
  CreditCard,
  MessageCircle,
  FileCode,
  Puzzle,
  Server,
  Package,
  Headphones,
  Shield,
  Rocket,
  Eye,
  CheckCircle,
  Star,
  Users,
  Calendar,
  Globe,
  Target,
  Lightbulb,
  Heart,
  Award,
  Clock,
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
  ChevronRight,
  ChevronLeft,
  Quote,
  ThumbsUp,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  ShoppingCart as ShoppingCartIcon,
  Palette as PaletteIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon2,
} from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const projectCategories = [
    { key: "all", label: "All Projects", icon: Package },
    { key: "web", label: "Web Development", icon: Monitor },
    { key: "mobile", label: "Mobile Apps", icon: Smartphone },
    { key: "ecommerce", label: "E-commerce", icon: ShoppingCart },
    { key: "design", label: "UI/UX Design", icon: Palette },
    { key: "marketing", label: "Digital Marketing", icon: TrendingUp },
  ]

  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      category: "ecommerce",
      description: "A comprehensive e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      duration: "4 months",
      client: "Health & Wellness Brand",
      results: {
        salesIncrease: "500%",
        conversionRate: "250%",
        userEngagement: "300%",
      },
      features: [
        "Advanced product catalog",
        "Multi-payment gateway",
        "Inventory management",
        "Analytics dashboard",
        "Mobile responsive",
        "SEO optimized",
      ],
      testimonial: {
        text: "Aqstoria transformed our online business completely. The new platform increased our sales by 500% in just 3 months!",
        author: "Sarah Johnson",
        position: "CEO, HealthFirst",
        rating: 5,
      },
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aqstoria/ecommerce-platform",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=300",
        after: "/placeholder.svg?height=200&width=300",
      },
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management System",
      category: "web",
      description: "Complete restaurant management solution with order processing, inventory tracking, and customer management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Socket.io", "Redis"],
      duration: "3 months",
      client: "Fine Dining Chain",
      results: {
        costReduction: "60%",
        efficiency: "200%",
        customerSatisfaction: "150%",
      },
      features: [
        "Order management system",
        "Inventory tracking",
        "Customer database",
        "Real-time notifications",
        "Analytics reporting",
        "Multi-location support",
      ],
      testimonial: {
        text: "The system streamlined our operations and reduced costs by 60%. Our staff efficiency improved dramatically.",
        author: "Michael Chen",
        position: "Operations Manager, FineDine",
        rating: 5,
      },
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aqstoria/restaurant-system",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=300",
        after: "/placeholder.svg?height=200&width=300",
      },
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "mobile-ecommerce",
      title: "Mobile E-commerce App",
      category: "mobile",
      description: "Cross-platform mobile application for e-commerce with advanced features and seamless user experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe"],
      duration: "4 months",
      client: "Fashion Retailer",
      results: {
        mobileConversions: "400%",
        appDownloads: "50,000+",
        userRetention: "80%",
      },
      features: [
        "Cross-platform compatibility",
        "Push notifications",
        "In-app purchases",
        "Social sharing",
        "AR try-on feature",
        "Offline functionality",
      ],
      testimonial: {
        text: "Our mobile app increased conversions by 400% and we now have over 50,000 active users!",
        author: "Emma Rodriguez",
        position: "Marketing Director, FashionHub",
        rating: 5,
      },
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aqstoria/mobile-ecommerce",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=300",
        after: "/placeholder.svg?height=200&width=300",
      },
      color: "from-teal-500 to-teal-600",
    },
    {
      id: "corporate-website",
      title: "Corporate Website Redesign",
      category: "web",
      description: "Complete redesign of corporate website with modern design, improved performance, and enhanced user experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
      duration: "2 months",
      client: "Tech Startup",
      results: {
        pageLoadSpeed: "300%",
        organicTraffic: "200%",
        leadGeneration: "150%",
      },
      features: [
        "Modern responsive design",
        "Performance optimization",
        "SEO implementation",
        "Content management",
        "Analytics integration",
        "Contact forms",
      ],
      testimonial: {
        text: "The new website loads 3x faster and our organic traffic increased by 200%. Outstanding work!",
        author: "David Kim",
        position: "CTO, TechStart",
        rating: 5,
      },
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aqstoria/corporate-website",
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=300",
        after: "/placeholder.svg?height=200&width=300",
      },
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "brand-identity",
      title: "Complete Brand Identity",
      category: "design",
      description: "Comprehensive brand identity design including logo, guidelines, and marketing materials.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Adobe Creative Suite", "Figma", "Illustrator", "Photoshop"],
      duration: "2 weeks",
      client: "Startup Company",
      results: {
        brandRecognition: "200%",
        customerTrust: "180%",
        marketPosition: "150%",
      },
      features: [
        "Logo design",
        "Brand guidelines",
        "Marketing materials",
        "Social media assets",
        "Print materials",
        "Brand strategy",
      ],
      testimonial: {
        text: "Our brand recognition increased by 200% and customers now trust us more than ever before.",
        author: "Lisa Wang",
        position: "Founder, StartupCo",
        rating: 5,
      },
      liveUrl: "https://example.com",
      githubUrl: null,
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=300",
        after: "/placeholder.svg?height=200&width=300",
      },
      color: "from-cyan-600 to-cyan-700",
    },
    {
      id: "marketing-campaign",
      title: "Multi-channel Marketing Campaign",
      category: "marketing",
      description: "Comprehensive digital marketing campaign across multiple channels with targeted strategies.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "Analytics", "Social Media"],
      duration: "3 months",
      client: "E-commerce Business",
      results: {
        leadGeneration: "150%",
        conversionRate: "120%",
        roi: "300%",
      },
      features: [
        "PPC campaigns",
        "Social media marketing",
        "Email marketing",
        "Content marketing",
        "Influencer partnerships",
        "Analytics tracking",
      ],
      testimonial: {
        text: "Our lead generation increased by 150% and we achieved a 300% ROI on our marketing investment.",
        author: "Alex Thompson",
        position: "Marketing Manager, EcomBiz",
        rating: 5,
      },
      liveUrl: "https://example.com",
      githubUrl: null,
      beforeAfter: {
        before: "/placeholder.svg?height=200&width=300",
        after: "/placeholder.svg?height=200&width=300",
      },
      color: "from-teal-600 to-teal-700",
    },
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative bg-white/90 backdrop-blur-xl border-b border-gray-200/50 pt-20 pb-12 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-300 group"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our successful projects and the transformative results we've delivered for our clients.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="relative py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <Button
                  key={category.key}
                  variant={activeFilter === category.key ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.key)}
                  className={`
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold
                    ${
                      activeFilter === category.key
                        ? `bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border-0`
                        : "border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50/50"
                    }
                  `}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-blue-600 text-white" : ""}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-blue-600 text-white" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color} transition-all duration-300 group-hover:h-3`} />
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="bg-white/90 text-gray-800 hover:bg-white shadow-lg"
                      size="sm"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                      >
                        {project.category.toUpperCase()}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gray-50 text-gray-700 border-gray-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Preview */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                    <div className="flex items-center mb-2">
                      <Quote className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm font-semibold text-blue-700">Client Testimonial</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      "{project.testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-700">
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div className="text-gray-500">{project.testimonial.position}</div>
                      </div>
                      <div className="flex items-center">
                        {renderStars(project.testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-blue-50 transition-colors duration-300 bg-transparent border-blue-200"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLinkIcon className="h-4 w-4 mr-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-gray-50 transition-colors duration-300 bg-transparent border-gray-200"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${project.color} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                      size="sm"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Our Impact in Numbers
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Projects Completed", value: "300+", icon: Package, color: "text-blue-500" },
                { label: "Happy Clients", value: "150+", icon: Users, color: "text-cyan-600" },
                { label: "Technologies Used", value: "25+", icon: Code, color: "text-teal-600" },
                { label: "Countries Served", value: "10+", icon: Globe, color: "text-blue-600" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 text-center hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-50/50 to-cyan-50/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's discuss your project requirements and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent font-semibold"
                onClick={() => window.open("https://wa.me/923001234567", "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 