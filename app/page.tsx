"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  ArrowRight,
  Star,
  Users,
  Menu,
  X,
  Calendar,
  Phone,
  Quote,
  Globe,
  Palette,
  ShoppingCart,
  Settings,
  Monitor,
  PenTool,
  Search,
  TrendingUp,
  Shield,
  Headphones,
  Database,
  CheckCircle,
  Target,
  Lightbulb,
  MessageCircle,
  Zap,
  CreditCard,
  FileCode,
  Puzzle,
  Rocket,
  Link,
  Server,
  Package,
  ArrowLeft,
  Clock,
  BarChart3,
  Crown,
  Award,
  Eye,
  Flame,
  UserIcon,
} from "lucide-react"
import Footer from "@/components/footer"
import BlogSection from "@/components/blog-section"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState("all")
  const [activeService, setActiveService] = useState("all")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState("home")
  const [currentServicePage, setCurrentServicePage] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const expertise = [
    { name: "Web Development", level: 95, icon: Monitor, category: "Development" },
    { name: "Mobile Apps", level: 94, icon: Smartphone, category: "Development" },
    { name: "UI/UX Design", level: 96, icon: Palette, category: "Design" },
    { name: "E-commerce", level: 92, icon: ShoppingCart, category: "Development" },
    { name: "Digital Marketing", level: 90, icon: TrendingUp, category: "Marketing" },
    { name: "SEO Optimization", level: 87, icon: Search, category: "Marketing" },
    { name: "Brand Identity", level: 93, icon: PenTool, category: "Design" },
    { name: "Cloud Solutions", level: 89, icon: Server, category: "Technology" },
    { name: "API Development", level: 91, icon: Link, category: "Development" },
    { name: "WordPress", level: 88, icon: Monitor, category: "CMS" },
    { name: "Shopify Development", level: 90, icon: ShoppingCart, category: "E-commerce" },
    { name: "Enterprise Solutions", level: 85, icon: Settings, category: "Enterprise" },
  ]

  const projects = [
    {
      title: "Fashion E-commerce Platform (MERN)",
      description:
        "Complete e-commerce solution built with MERN stack featuring React frontend, Node.js/Express backend, MongoDB database, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "ecommerce",
      featured: true,
    },
    {
      title: "Restaurant Management System (MEAN)",
      description:
        "Comprehensive restaurant management built with MEAN stack using Angular frontend, Node.js/Express backend, MongoDB database with real-time order tracking.",
      tech: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io", "TypeScript"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "erp",
      featured: true,
    },
    {
      title: "Shopify Custom Theme & App",
      description:
        "Custom Shopify theme development with advanced features, custom app integration, and third-party API connections for enhanced functionality.",
      tech: ["Shopify Liquid", "JavaScript", "CSS3", "Shopify API", "GraphQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "shopify",
      featured: true,
    },
    {
      title: "Brand Identity & Digital Campaign",
      description: "Complete brand identity design with logo, website, and comprehensive digital marketing strategy.",
      tech: ["Figma", "Adobe Creative Suite", "Next.js", "Google Ads"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "design",
      featured: true,
    },
    {
      title: "WordPress Multi-site Network",
      description:
        "Custom WordPress multisite network with advanced user management, custom plugins, and integrated e-commerce functionality.",
      tech: ["WordPress", "PHP", "MySQL", "WooCommerce", "Custom Plugins"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "wordpress",
      featured: false,
    },
    {
      title: "Real-time Chat Application (MERN)",
      description:
        "Scalable real-time messaging application built with MERN stack featuring Socket.io, file sharing, and video calling capabilities.",
      tech: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "realtime",
      featured: false,
    },
    {
      title: "Corporate Website + SEO Campaign",
      description: "Modern corporate website with comprehensive SEO strategy achieving 400% traffic increase.",
      tech: ["Next.js", "Strapi", "PostgreSQL", "SEO Tools"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "website",
      featured: true,
    },
    {
      title: "Android E-commerce App",
      description:
        "Native Android app for e-commerce with advanced features, payment integration, and real-time notifications.",
      tech: ["Kotlin", "Firebase", "Material Design", "Payment APIs"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "android",
      featured: false,
    },
  ]

  const services = [
    {
      title: "UI/UX Design",
      description: "Professional user interface and experience design services",
      icon: Palette,
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
        "Mobile App Design",
        "Web Design",
      ],
      color: "from-blue-500 to-blue-600",
      category: "design",
      slug: "ui-ux-design",
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      icon: Code,
      features: [
        "React.js & Next.js Development",
        "Node.js & Express.js Backend",
        "Database Design & Integration",
        "RESTful API Development",
        "Authentication & Authorization",
        "Performance Optimization",
        "SEO Implementation",
        "Responsive Design",
      ],
      color: "from-cyan-600 to-cyan-700",
      category: "development",
      slug: "web-development",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      features: [
        "React Native Development",
        "Flutter Development",
        "iOS App Development",
        "Android App Development",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Performance Optimization",
      ],
      color: "from-blue-600 to-blue-700",
      category: "development",
      slug: "mobile-app-development",
    },
    {
      title: "Shopify Development",
      description: "Custom Shopify stores, themes, and app development",
      icon: ShoppingCart,
      features: [
        "Custom Shopify Theme Development",
        "Shopify App Development",
        "Store Setup & Configuration",
        "Payment Gateway Integration",
        "Third-party App Integration",
        "Custom Functionality",
        "Performance Optimization",
        "Store Migration",
      ],
      color: "from-gray-600 to-gray-700",
      category: "ecommerce",
      slug: "shopify-development",
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress websites, themes, and plugin development",
      icon: Monitor,
      features: [
        "Custom WordPress Development",
        "Theme Development & Customization",
        "Plugin Development",
        "WooCommerce Integration",
        "Multisite Network Setup",
        "Performance Optimization",
        "Security Implementation",
        "Maintenance & Support",
      ],
      color: "from-blue-500 to-blue-600",
      category: "cms",
      slug: "wordpress-development",
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store development with advanced features",
      icon: ShoppingCart,
      features: [
        "Custom E-commerce Development",
        "Shopping Cart Systems",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management System",
        "Customer Portal",
        "Multi-vendor Platforms",
        "Mobile Commerce",
      ],
      color: "from-gray-700 to-gray-800",
      category: "ecommerce",
      slug: "ecommerce-solutions",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      features: [
        "Android Development (Kotlin/Java)",
        "iOS Development (Swift)",
        "React Native Development",
        "Flutter Development",
        "App Store Optimization",
        "Push Notifications",
        "In-app Purchases",
        "Offline Functionality",
      ],
      color: "from-cyan-600 to-cyan-700",
      category: "mobile",
      slug: "mobile-app-development",
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      icon: Monitor,
      features: [
        "Custom Web Development",
        "Responsive Design",
        "CMS Integration",
        "Landing Pages",
        "Portfolio Websites",
        "Corporate Websites",
        "Blog Development",
        "Multi-language Sites",
      ],
      color: "from-gray-600 to-gray-700",
      category: "development",
      slug: "website-development",
    },
    {
      title: "ERP & Enterprise Solutions",
      description: "Custom enterprise software to streamline business operations",
      icon: Settings,
      features: [
        "Custom ERP Systems",
        "CRM Solutions",
        "Business Process Automation",
        "System Integration",
        "Data Migration",
        "Workflow Management",
        "Reporting Systems",
        "Multi-user Access Control",
      ],
      color: "from-blue-500 to-blue-600",
      category: "enterprise",
      slug: "erp-enterprise-solutions",
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations",
      icon: Link,
      features: [
        "RESTful API Development",
        "GraphQL APIs",
        "Third-party Integrations",
        "API Documentation",
        "Authentication & Security",
        "Rate Limiting",
        "API Testing",
        "Microservices Architecture",
      ],
      color: "from-gray-700 to-gray-800",
      category: "development",
      slug: "api-development-integration",
    },
    {
      title: "Database Design & Management",
      description: "Efficient database architecture and optimization",
      icon: Database,
      features: [
        "Database Design & Architecture",
        "SQL & NoSQL Databases",
        "Data Modeling",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery Solutions",
        "Database Security",
        "Scalability Planning",
      ],
      color: "from-blue-600 to-blue-700",
      category: "development",
      slug: "database-design-management",
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns",
      icon: TrendingUp,
      features: [
        "Social Media Marketing",
        "PPC Campaigns (Google/Facebook)",
        "Email Marketing Campaigns",
        "Content Marketing Strategy",
        "Influencer Marketing",
        "Brand Awareness Campaigns",
        "Lead Generation",
        "Conversion Optimization",
      ],
      color: "from-gray-600 to-gray-700",
      category: "marketing",
      slug: "digital-marketing",
    },
    {
      title: "SEO & Analytics",
      description: "Search engine optimization and performance analytics",
      icon: Search,
      features: [
        "Technical SEO Optimization",
        "On-page & Off-page SEO",
        "Local SEO",
        "Google Analytics Setup",
        "Performance Monitoring",
        "Keyword Research & Strategy",
        "Link Building",
        "SEO Audits & Reports",
      ],
      color: "from-blue-500 to-blue-600",
      category: "marketing",
      slug: "seo-analytics",
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Fast, reliable web applications with native app features",
      icon: Zap,
      features: [
        "Offline Functionality",
        "Push Notifications",
        "App-like Experience",
        "Fast Loading Performance",
        "Responsive Design",
        "Cross-platform Compatibility",
        "Service Workers",
        "Web App Manifest",
      ],
      color: "from-gray-700 to-gray-800",
      category: "development",
      slug: "progressive-web-apps",
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure payment processing solutions for businesses",
      icon: CreditCard,
      features: [
        "Multiple Payment Methods",
        "Secure Transaction Processing",
        "Recurring Payment Setup",
        "Payment Analytics",
        "Fraud Protection",
        "Mobile Payment Solutions",
        "International Payments",
        "PCI Compliance",
      ],
      color: "from-blue-600 to-blue-700",
      category: "development",
      slug: "payment-gateway-integration",
    },
    {
      title: "Real-time Applications",
      description: "Live chat, notifications, and real-time data applications",
      icon: MessageCircle,
      features: [
        "Live Chat Systems",
        "Real-time Notifications",
        "WebSocket Integration",
        "Live Data Updates",
        "Collaborative Tools",
        "Video Conferencing",
        "File Sharing Systems",
        "Multi-user Synchronization",
      ],
      color: "from-gray-600 to-gray-700",
      category: "development",
      slug: "realtime-applications",
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions for specific business needs",
      icon: FileCode,
      features: [
        "Business Requirements Analysis",
        "Custom Application Development",
        "Legacy System Modernization",
        "Software Architecture Design",
        "Scalable Solution Development",
        "System Integration Services",
        "Performance Optimization",
        "Maintenance & Support",
      ],
      color: "from-blue-500 to-blue-600",
      category: "development",
      slug: "custom-software-development",
    },
    {
      title: "System Integration",
      description: "Connecting different systems and platforms seamlessly",
      icon: Puzzle,
      features: [
        "Third-party System Integration",
        "Data Synchronization",
        "Workflow Automation",
        "Legacy System Integration",
        "Cloud Service Integration",
        "API Connections",
        "Data Migration Services",
        "System Optimization",
      ],
      color: "from-gray-700 to-gray-800",
      category: "enterprise",
      slug: "system-integration",
    },
    {
      title: "Quality Assurance & Testing",
      description: "Comprehensive testing and quality assurance services",
      icon: Shield,
      features: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "User Acceptance Testing",
        "Load Testing",
        "Bug Tracking & Reporting",
        "Quality Assurance Reports",
      ],
      color: "from-blue-600 to-blue-700",
      category: "qa",
      slug: "quality-assurance-testing",
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance for all your digital assets",
      icon: Headphones,
      features: [
        "24/7 Technical Support",
        "Regular Updates & Patches",
        "Bug Fixes & Troubleshooting",
        "Performance Optimization",
        "Backup Services",
        "Security Updates",
        "Feature Enhancements",
        "Technical Consultation",
      ],
      color: "from-gray-600 to-gray-700",
      category: "support",
      slug: "support-maintenance",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "Fashion Boutique Chain",
      industry: "Fashion & Retail",
      challenge:
        "Client had an outdated website with poor user experience, slow loading times, and no mobile optimization. Sales were declining due to technical issues.",
      solution:
        "Developed a complete MERN stack e-commerce platform with modern UI/UX, mobile-first design, integrated payment systems, inventory management, and admin dashboard.",
      results: [
        "500% increase in online sales",
        "70% improvement in page load speed",
        "300% increase in mobile conversions",
        "90% reduction in cart abandonment",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
      duration: "3 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Restaurant Chain Management System",
      client: "Multi-location Restaurant Chain",
      industry: "Food & Hospitality",
      challenge:
        "Managing 15 restaurant locations with separate systems, no centralized inventory, poor communication between locations, and manual reporting processes.",
      solution:
        "Built a comprehensive MEAN stack ERP system with real-time inventory tracking, centralized management, automated reporting, and mobile apps for staff.",
      results: [
        "60% reduction in food waste",
        "40% improvement in operational efficiency",
        "Real-time visibility across all locations",
        "80% faster reporting processes",
      ],
      technologies: ["Angular", "Node.js", "MongoDB", "Express", "Socket.io"],
      duration: "4 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Shopify Store Optimization & Custom App",
      client: "Health & Wellness Brand",
      industry: "Health & Wellness",
      challenge:
        "Low conversion rates, poor mobile experience, need for subscription functionality, and integration with third-party wellness tracking apps.",
      solution:
        "Redesigned Shopify theme, developed custom subscription app, integrated with fitness tracking APIs, and implemented advanced analytics.",
      results: [
        "250% increase in conversion rate",
        "400% growth in subscription revenue",
        "Seamless integration with 5+ fitness apps",
        "50% increase in customer retention",
      ],
      technologies: ["Shopify Liquid", "JavaScript", "Shopify API", "GraphQL"],
      duration: "2 months",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Corporate Digital Transformation",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      challenge:
        "Outdated systems, manual processes, poor data visibility, and need for modern web presence with integrated business processes.",
      solution:
        "Complete digital transformation including new corporate website, custom ERP system, automated workflows, and integrated business intelligence.",
      results: [
        "70% reduction in manual processes",
        "Real-time business intelligence",
        "300% improvement in data accuracy",
        "50% faster decision-making processes",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "React", "Custom APIs"],
      duration: "6 months",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const teamMembers = [
    {
      name: "Aqsa Khan",
      role: "CEO & Founder",
      speciality: "Strategic Leadership & MERN/MEAN Stack Development",
      image: "/placeholder.svg?height=150&width=150",
      icon: Crown,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Rania",
      role: "Chief Marketing Officer",
      speciality: "Digital Marketing Strategy & Brand Development",
      image: "/placeholder.svg?height=150&width=150",
      icon: TrendingUp,
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "Muhammad Hassan",
      role: "Senior Software Engineer",
      speciality: "Full-Stack Development & System Architecture",
      image: "/placeholder.svg?height=150&width=150",
      icon: Code,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Fatima Ahmed",
      role: "Software Engineer",
      speciality: "Frontend Development & UI/UX Design",
      image: "/placeholder.svg?height=150&width=150",
      icon: Palette,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Ali Raza",
      role: "Software Engineer",
      speciality: "Backend Development & Database Design",
      image: "/placeholder.svg?height=150&width=150",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Zainab Malik",
      role: "Software Engineer",
      speciality: "Mobile App Development & React Native",
      image: "/placeholder.svg?height=150&width=150",
      icon: Smartphone,
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "Ahmad Khan",
      role: "Software Engineer",
      speciality: "DevOps & Cloud Infrastructure",
      image: "/placeholder.svg?height=150&width=150",
      icon: Server,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Ayesha Tariq",
      role: "Software Engineer",
      speciality: "WordPress & CMS Development",
      image: "/placeholder.svg?height=150&width=150",
      icon: Monitor,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Usman Sheikh",
      role: "Software Engineer",
      speciality: "E-commerce & Shopify Development",
      image: "/placeholder.svg?height=150&width=150",
      icon: ShoppingCart,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Sana Iqbal",
      role: "Software Engineer",
      speciality: "Quality Assurance & Testing",
      image: "/placeholder.svg?height=150&width=150",
      icon: Shield,
      color: "from-gray-700 to-gray-800",
    },
  ]



  const experience = [
    {
      title: "Founder & CEO",
      company: "Aqstoria",
      period: "2022 - Present",
      description:
        "Leading a team of 20+ professionals delivering comprehensive digital solutions across MERN/MEAN stacks, Shopify, WordPress, and enterprise systems.",
      type: "work",
    },
    {
      title: "Senior Full Stack Developer",
      company: "Digital Solutions Agency",
      period: "2020 - 2022",
      description:
        "Led development teams specializing in MERN/MEAN stack applications and e-commerce solutions for major clients.",
      type: "work",
    },
    {
      title: "Lead Android Developer",
      company: "Mobile Tech Company",
      period: "2019 - 2020",
      description: "Developed and published 15+ Android applications with advanced features, achieving 2M+ downloads.",
      type: "work",
    },
    {
      title: "Computer Science & Design",
      company: "University of Technology",
      period: "2016 - 2020",
      description:
        "Bachelor's degree with specialization in software engineering, graphic design, and modern web technologies.",
      type: "education",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "300+", icon: Star, color: "text-blue-500" },
    { label: "Happy Clients", value: "150+", icon: Users, color: "text-gray-700" },
    { label: "Team Members", value: "20+", icon: Users, color: "text-blue-600" },
    { label: "Years Experience", value: "5+", icon: Calendar, color: "text-gray-600" },
  ]

  const pricingPlans = {
    wordpress: [
      {
        name: "Basic WordPress",
        price: "PKR 15,000",
        features: [
          "5-page WordPress website",
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
          "Social media integration",
          "1 month support",
        ],
        popular: false,
      },
      {
        name: "Professional WordPress",
        price: "PKR 35,000",
        features: [
          "10-page WordPress website",
          "Custom theme development",
          "Advanced SEO optimization",
          "Blog setup",
          "E-commerce integration",
          "Performance optimization",
          "3 months support",
        ],
        popular: true,
      },
      {
        name: "Enterprise WordPress",
        price: "PKR 75,000",
        features: [
          "Unlimited pages",
          "Custom plugin development",
          "Multisite network",
          "Advanced security",
          "Custom post types",
          "API integrations",
          "6 months support",
        ],
        popular: false,
      },
    ],
    shopify: [
      {
        name: "Shopify Basic",
        price: "PKR 25,000",
        features: [
          "Shopify store setup",
          "Theme customization",
          "Product catalog setup",
          "Payment gateway integration",
          "Basic SEO optimization",
          "Mobile optimization",
          "1 month support",
        ],
        popular: false,
      },
      {
        name: "Shopify Professional",
        price: "PKR 50,000",
        features: [
          "Custom Shopify theme",
          "Advanced product features",
          "Custom app integration",
          "Inventory management",
          "Advanced analytics",
          "Marketing tools setup",
          "3 months support",
        ],
        popular: true,
      },
      {
        name: "Shopify Enterprise",
        price: "PKR 100,000",
        features: [
          "Custom Shopify app development",
          "Third-party integrations",
          "Advanced customizations",
          "Multi-currency support",
          "Wholesale functionality",
          "Custom checkout process",
          "6 months support",
        ],
        popular: false,
      },
    ],
  }

  const filteredProjects =
    activeProject === "all" ? projects : projects.filter((project) => project.category === activeProject)

  const filteredServices =
    activeService === "all" ? services : services.filter((service) => service.category === activeService)

  const handleServiceSelection = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle) ? prev.filter((s) => s !== serviceTitle) : [...prev, serviceTitle],
    )
  }

  const navigateToPage = (page: string) => {
    if (page === "about" || page === "services" || page === "portfolio" || page === "contact") {
      window.location.href = `/${page}`
    } else {
      setCurrentPage(page)
      setMobileMenuOpen(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    setCurrentPage("home")
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
    setMobileMenuOpen(false)
  }

  const navigateToServicePage = (serviceSlug: string) => {
    setCurrentServicePage(serviceSlug)
    setCurrentPage("service-detail")
    setMobileMenuOpen(false)
  }

  // Services Page
  if (currentPage === "services") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-gray-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Header */}
        <div className="relative bg-white/90 backdrop-blur-xl border-b border-gray-200/50 pt-20 pb-12 shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <Button
              variant="ghost"
              onClick={() => navigateToPage("home")}
              className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-300 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-800 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to your business needs. From web development to
                mobile apps and enterprise systems.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="relative py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                          {[
              { key: "all", label: "All Services", color: "from-blue-600 to-cyan-600" },
              { key: "design", label: "Design", color: "from-blue-500 to-blue-600" },
              { key: "development", label: "Development", color: "from-cyan-600 to-cyan-700" },
              { key: "ecommerce", label: "E-commerce", color: "from-blue-600 to-blue-700" },
              { key: "marketing", label: "Marketing", color: "from-cyan-500 to-cyan-600" },
            ].map((category) => (
                <Button
                  key={category.key}
                  variant={activeService === category.key ? "default" : "outline"}
                  onClick={() => setActiveService(category.key)}
                  className={`
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold
                    ${
                      activeService === category.key
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-0`
                        : "border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50/50"
                    }
                  `}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredServices.map((service, index) => (
                <Card
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${service.color} transition-all duration-300 group-hover:h-3`}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 font-bold">
                          {service.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center group/item">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                          <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <Button
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                        size="sm"
                        onClick={() => navigateToServicePage(service.slug)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-blue-50 transition-colors duration-300 bg-transparent border-blue-200"
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-gray-50 transition-colors duration-300 bg-transparent border-gray-200"
                          onClick={() => window.open("https://wa.me/923001234567", "_blank")}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WordPress Pricing */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
                  WordPress Development Pricing
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.wordpress.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-gray-700 text-white px-6 py-2 shadow-lg">
                          <Flame className="h-4 w-4 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="mb-6">
                        <Monitor className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                        <CardTitle className="text-2xl mb-2 font-bold">{plan.name}</CardTitle>
                        <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                        <p className="text-gray-600 text-sm">One-time payment</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800"
                            : "bg-gray-600 hover:bg-gray-700"
                        } text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                        onClick={() => scrollToSection("contact")}
                      >
                        Choose Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Shopify Pricing */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-blue-600 bg-clip-text text-transparent">
                  Shopify Development Pricing
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-blue-500 rounded-full mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.shopify.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      plan.popular ? "ring-2 ring-gray-700 scale-105" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-gray-700 to-blue-500 text-white px-6 py-2 shadow-lg">
                          <Flame className="h-4 w-4 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="mb-6">
                        <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-700" />
                        <CardTitle className="text-2xl mb-2 font-bold">{plan.name}</CardTitle>
                        <div className="text-4xl font-bold text-gray-700 mb-2">{plan.price}</div>
                        <p className="text-gray-600 text-sm">One-time payment</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-gray-700 mr-3" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-gray-700 to-blue-600 hover:from-gray-800 hover:to-blue-700"
                            : "bg-gray-600 hover:bg-gray-700"
                        } text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                        onClick={() => scrollToSection("contact")}
                      >
                        Choose Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-r from-blue-50/50 to-gray-50/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Every business is unique. Let's discuss your specific requirements and create a tailored solution that
                fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                  onClick={() => {
                    navigateToPage("home")
                    setTimeout(() => scrollToSection("contact"), 100)
                  }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get Custom Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent font-semibold"
                  onClick={() => window.open("https://wa.me/923001234567", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Case Studies Page
  if (currentPage === "case-studies") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-gray-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Header */}
        <div className="relative bg-white/90 backdrop-blur-xl border-b border-gray-200/50 pt-20 pb-12 shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <Button
              variant="ghost"
              onClick={() => navigateToPage("home")}
              className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-300 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-gray-800 to-blue-600 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real success stories from our clients. See how we've helped businesses transform their digital presence
                and achieve remarkable results.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="relative py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-10">
                      <div className="flex items-center gap-4 mb-8">
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-200 bg-blue-50/50 px-4 py-2 font-semibold"
                        >
                          {study.industry}
                        </Badge>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">{study.duration}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">{study.title}</h2>
                      <p className="text-xl text-blue-600 font-semibold mb-8">{study.client}</p>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Target className="h-4 w-4 text-blue-500" />
                          </div>
                          Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-11">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                            <Zap className="h-4 w-4 text-gray-700" />
                          </div>
                          Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-11">{study.solution}</p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 pl-11">
                          {study.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 border-gray-200 font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results & Image */}
                    <div className="p-10 bg-gradient-to-br from-blue-50/50 to-gray-50/50">
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-6 text-gray-800 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <BarChart3 className="h-4 w-4 text-blue-500" />
                          </div>
                          Results Achieved
                        </h3>
                        <div className="space-y-4 pl-11">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center group">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-200" />
                              <span className="text-gray-700 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Image Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-blue-200/50 to-gray-200/50 rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-inner">
                        <div className="text-center">
                          <TrendingUp className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                          <p className="text-blue-600 font-semibold text-lg">Project Screenshot</p>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          className="flex-1 bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                          onClick={() => {
                            navigateToPage("home")
                            setTimeout(() => scrollToSection("contact"), 100)
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Get Quote
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent font-semibold"
                          onClick={() => navigateToPage("services")}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Similar Solution
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-gradient-to-r from-blue-50/50 to-gray-50/50 backdrop-blur-sm rounded-3xl p-16 border border-white/20 shadow-xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join our growing list of successful clients. Let's discuss how we can help transform your business with
                our proven expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    navigateToPage("home")
                    setTimeout(() => scrollToSection("contact"), 100)
                  }}
                  className="bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigateToPage("services")}
                  className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Individual Service Page
  if (currentPage === "service-detail" && currentServicePage) {
    const service = services.find((s) => s.slug === currentServicePage)
    if (!service) {
      setCurrentPage("services")
      return null
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-gray-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Header */}
        <div className="relative bg-white/90 backdrop-blur-xl border-b border-gray-200/50 pt-20 pb-12 shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                onClick={() => navigateToPage("services")}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigateToPage("home")}
                className="text-gray-600 hover:text-gray-700 hover:bg-gray-50/50 transition-all duration-300"
              >
                Home
              </Button>
            </div>

            <div className="flex items-center mb-8">
              <div className={`p-6 rounded-3xl bg-gradient-to-r ${service.color} mr-8 shadow-xl`}>
                <service.icon className="h-16 w-16 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="relative py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-10">
                  <CardContent className="p-10">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center group">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Service-specific content */}
                {service.slug === "mern-stack-development" && (
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-10">
                    <CardContent className="p-10">
                      <h2 className="text-3xl font-bold mb-8 text-gray-800">MERN Stack Expertise</h2>
                      <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-100">
                          <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                            <Code className="h-6 w-6 mr-3" />
                            Frontend Development (React)
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Build dynamic, responsive user interfaces with React.js, including modern hooks, context
                            API, and component-based architecture.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              React 18
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              Redux Toolkit
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              React Router
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              Material-UI
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                            <Server className="h-6 w-6 mr-3" />
                            Backend Development (Node.js & Express)
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Robust server-side applications with Node.js and Express.js, including RESTful APIs,
                            authentication, and real-time features.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                              Node.js
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                              Express.js
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                              Socket.io
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                              JWT Auth
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-100">
                          <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                            <Database className="h-6 w-6 mr-3" />
                            Database (MongoDB)
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Flexible NoSQL database solutions with MongoDB, including data modeling, aggregation
                            pipelines, and performance optimization.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              MongoDB
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              Mongoose
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              Atlas Cloud
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                              Aggregation
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {service.slug === "shopify-development" && (
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-10">
                    <CardContent className="p-10">
                      <h2 className="text-3xl font-bold mb-8 text-gray-800">Shopify Solutions</h2>
                      <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                            <Palette className="h-6 w-6 mr-3" />
                            Custom Theme Development
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Create unique, conversion-optimized Shopify themes tailored to your brand identity and
                            business requirements.
                          </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-100">
                          <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                            <Code className="h-6 w-6 mr-3" />
                            Shopify App Development
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Build custom Shopify apps to extend functionality and integrate with third-party services.
                          </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                            <Zap className="h-6 w-6 mr-3" />
                            Store Optimization
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            Optimize your Shopify store for performance, SEO, and conversions with advanced techniques.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Process Section */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-10">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Process</h2>
                    <div className="space-y-8">
                      {[
                        {
                          step: 1,
                          title: "Discovery & Planning",
                          description:
                            "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
                          color: "from-blue-500 to-blue-600",
                        },
                        {
                          step: 2,
                          title: "Design & Architecture",
                          description:
                            "Create wireframes, mockups, and technical architecture ensuring scalability and performance.",
                          color: "from-gray-600 to-gray-700",
                        },
                        {
                          step: 3,
                          title: "Development & Testing",
                          description:
                            "Build your solution using best practices, with continuous testing and quality assurance.",
                          color: "from-blue-600 to-blue-700",
                        },
                        {
                          step: 4,
                          title: "Launch & Support",
                          description:
                            "Deploy your solution and provide ongoing support, maintenance, and optimization.",
                          color: "from-gray-700 to-gray-800",
                        },
                      ].map((process, index) => (
                        <div key={index} className="flex items-start group">
                          <div
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${process.color} text-white flex items-center justify-center font-bold mr-6 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {process.step}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-3 text-xl text-gray-800">{process.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{process.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Get Started Today</h3>
                    <div className="space-y-4">
                      <Button
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                        onClick={() => {
                          navigateToPage("home")
                          setTimeout(() => scrollToSection("contact"), 100)
                        }}
                      >
                        <Rocket className="mr-2 h-4 w-4" />
                        Get Free Quote
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent font-semibold"
                        onClick={() => window.open("https://wa.me/923001234567", "_blank")}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-blue-50 transition-all duration-300 bg-transparent border-blue-200 font-semibold"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing Info */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Starting From</h3>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-3">
                        {service.slug === "wordpress-development"
                          ? "PKR 15,000"
                          : service.slug === "shopify-development"
                            ? "PKR 25,000"
                            : service.slug === "mern-stack-development"
                              ? "PKR 50,000"
                              : service.slug === "mean-stack-development"
                                ? "PKR 50,000"
                                : service.slug === "graphic-design-branding"
                                  ? "PKR 10,000"
                                  : service.slug === "mobile-app-development"
                                    ? "PKR 75,000"
                                    : "PKR 20,000"}
                      </div>
                      <p className="text-gray-600 text-sm mb-6">Custom pricing based on requirements</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigateToPage("services")}
                        className="hover:bg-blue-50 transition-colors duration-300 border-blue-200 font-semibold"
                      >
                        View Pricing Plans
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Services */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Related Services</h3>
                    <div className="space-y-4">
                      {services
                        .filter((s) => s.category === service.category && s.slug !== service.slug)
                        .slice(0, 3)
                        .map((relatedService, index) => (
                          <button
                            key={index}
                            onClick={() => navigateToServicePage(relatedService.slug)}
                            className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 transform hover:scale-105 group"
                          >
                            <div className="flex items-center">
                              <relatedService.icon className="h-6 w-6 text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-200" />
                              <span className="font-medium text-gray-800">{relatedService.title}</span>
                            </div>
                          </button>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Client Success</h3>
                    <div className="text-center">
                      <Quote className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-700 mb-6 italic leading-relaxed">
                        {service.slug === "mern-stack-development"
                          ? "The MERN stack solution transformed our business operations completely. Outstanding technical expertise!"
                          : service.slug === "shopify-development"
                            ? "Our Shopify store conversion rate increased by 250% after their optimization. Highly recommended!"
                            : "Professional service delivery and excellent results. The team exceeded our expectations!"}
                      </p>
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-blue-400 text-blue-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Verified Client Review</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(220, 38, 38, 0.4), rgba(75, 85, 99, 0.4), transparent 70%)`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-gray-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => navigateToPage("home")}>
              <Image
                src="/logo.png"
                alt="Aqstoria Logo"
                width={120}
                height={40}
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { label: "About", action: () => navigateToPage("about") },
                { label: "Services", action: () => navigateToPage("services") },
                { label: "Portfolio", action: () => navigateToPage("portfolio") },
                { label: "Contact", action: () => navigateToPage("contact") },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-gray-700 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-gray-700 hover:bg-gray-100/50 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-gray-200/50 pt-6">
              {[
                { label: "About", action: () => navigateToPage("about") },
                { label: "Services", action: () => navigateToPage("services") },
                { label: "Portfolio", action: () => navigateToPage("portfolio") },
                { label: "Contact", action: () => navigateToPage("contact") },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 w-full text-left font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Professional Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl" />
          
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              {/* Professional Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                <span className="text-sm font-semibold text-gray-700">Award-Winning Digital Agency</span>
              </div>

              {/* Professional Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-gray-900">
                <span className="block">
                  We Create
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>

              {/* Professional Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Empowering businesses with innovative{" "}
                <span className="text-blue-600 font-semibold">digital solutions</span> and{" "}
                <span className="text-cyan-600 font-semibold">strategic growth</span>
              </p>

              {/* Professional Service Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { name: "Web Development", color: "from-blue-500 to-blue-600" },
                  { name: "Mobile Apps", color: "from-cyan-600 to-cyan-700" },
                  { name: "UI/UX Design", color: "from-teal-600 to-teal-700" },
                  { name: "E-commerce", color: "from-blue-600 to-blue-700" },
                  { name: "Digital Marketing", color: "from-cyan-500 to-cyan-600" },
                  { name: "Cloud Solutions", color: "from-teal-500 to-teal-600" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.name}
                  </div>
                ))}
              </div>

              {/* Professional CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={() => navigateToPage("contact")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                >
                  <Rocket className="mr-3 h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigateToPage("services")}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold bg-white"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Explore Services
                </Button>
              </div>

              {/* Professional Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-500 font-medium">Connect with us:</span>
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: MessageCircle, href: "https://wa.me/923001234567", label: "WhatsApp" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 group"
                    title={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Professional Visual Elements */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <div className="relative">
                {/* Professional Visual Container */}
                <div className="relative w-full h-96 lg:h-[500px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Professional Floating Elements */}
                  <div className="absolute top-8 left-8 w-32 h-20 bg-white rounded-xl shadow-lg border border-gray-200 transform rotate-6">
                    <div className="p-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-2" />
                      <div className="w-16 h-2 bg-gray-200 rounded" />
                      <div className="w-12 h-2 bg-gray-200 rounded mt-1" />
                    </div>
                  </div>

                  <div className="absolute top-16 right-12 w-28 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 transform -rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="p-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg mb-2" />
                      <div className="w-14 h-2 bg-gray-200 rounded" />
                    </div>
                  </div>

                  <div className="absolute bottom-20 left-12 w-36 h-24 bg-white rounded-2xl shadow-xl border border-gray-100 transform rotate-3 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="p-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg mb-2" />
                      <div className="w-20 h-2 bg-gray-200 rounded" />
                      <div className="w-16 h-2 bg-gray-200 rounded mt-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-8 w-24 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 transform -rotate-12 animate-float" style={{ animationDelay: '3s' }}>
                    <div className="p-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg mb-2" />
                      <div className="w-12 h-2 bg-gray-200 rounded" />
                    </div>
                  </div>

                  {/* Central Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-700 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/logo.png"
                          alt="Aqstoria Logo"
                          width={80}
                          height={40}
                          className="h-10 w-auto filter drop-shadow-lg"
                        />
                      </div>
                      
                      {/* Orbiting Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg animate-spin-slow" />
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-600 rounded-full shadow-lg animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 50 100 Q 200 50 350 150"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M 100 300 Q 250 250 400 350"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>

                {/* Stats Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">300+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-700">150+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 text-center hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                      stat.color === "text-blue-500"
                        ? "from-blue-500 to-blue-600"
                        : stat.color === "text-gray-700"
                          ? "from-gray-700 to-gray-800"
                          : stat.color === "text-blue-600"
                            ? "from-blue-600 to-blue-700"
                            : "from-gray-600 to-gray-700"
                    } flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-r from-blue-50/50 to-gray-50/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
              About Aqstoria
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-700">
                <strong className="text-2xl bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
                  Aqstoria
                </strong>{" "}
                is a comprehensive digital solutions agency founded by Aqsa Khan, bringing together a team of 20+
                skilled professionals who specialize in modern web technologies including MERN/MEAN stacks, Shopify
                development, WordPress solutions, and enterprise systems.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our expertise spans from <strong>graphic design and branding</strong> to{" "}
                <strong>complex full-stack development</strong>, <strong>e-commerce solutions</strong>,{" "}
                <strong>mobile applications</strong>, and <strong>comprehensive digital marketing</strong>. We believe
                in delivering innovative solutions that drive real business transformation.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Whether you're a startup looking to establish your digital presence or an enterprise seeking to
                modernize with cutting-edge technologies, our diverse team has the expertise to deliver solutions that
                exceed expectations and drive measurable results.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { icon: Target, label: "Innovation-Driven", color: "from-blue-500 to-blue-600" },
                  { icon: Lightbulb, label: "Modern Tech Stack", color: "from-gray-600 to-gray-700" },
                  { icon: CheckCircle, label: "Quality Guaranteed", color: "from-blue-600 to-blue-700" },
                  { icon: Headphones, label: "24/7 Support", color: "from-gray-700 to-gray-800" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Code,
                  title: "Modern Development",
                  color: "from-blue-500 to-blue-600",
                  items: [
                    "MERN & MEAN Stack Expertise",
                    "Shopify & WordPress Development",
                    "Mobile App Development",
                    "API Integration & Development",
                  ],
                },
                {
                  icon: Palette,
                  title: "Creative Excellence",
                  color: "from-gray-600 to-gray-700",
                  items: [
                    "Award-winning design team",
                    "Brand identity specialists",
                    "UI/UX design experts",
                    "Digital marketing masters",
                  ],
                },
                {
                  icon: Settings,
                  title: "Enterprise Solutions",
                  color: "from-blue-600 to-blue-700",
                  items: ["Custom ERP systems", "System integration", "Scalable architecture", "Quality assurance"],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg`}
                      >
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl font-bold text-gray-800">{category.title}</span>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of talented professionals brings together expertise in development, design, marketing,
              and innovation.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl text-center overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-8">
                  <div className="relative mb-8">
                    <div
                      className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r ${member.color} p-1 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                        <member.icon className="h-10 w-10 text-gray-700" />
                      </div>
                    </div>
                    {(member.name === "Aqsa Khan" || member.name === "Rania") && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                        <Crown className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50/50 to-gray-50/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Join Our Growing Team!</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our mission of delivering exceptional digital
                solutions.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Users className="mr-2 h-4 w-4" />
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-r from-gray-50/50 to-blue-50/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              From creative design to cutting-edge technology solutions, our expert team delivers comprehensive digital
              services including MERN/MEAN stacks, Shopify, WordPress, and enterprise systems tailored to your business
              needs.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 6).map((service, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color} transition-all duration-300 group-hover:h-3`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight font-bold">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group/item">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                    size="sm"
                    onClick={() => navigateToServicePage(service.slug)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigateToPage("services")}
                              className="bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 font-semibold"
            >
              <Flame className="mr-2 h-5 w-5" />
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((skill, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs border-blue-200 text-blue-600 bg-blue-50 font-medium"
                      >
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 h-4 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-600 font-semibold">{skill.level}%</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-r from-blue-50/50 to-gray-50/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { key: "all", label: "All Projects", color: "from-blue-600 to-gray-700" },
              { key: "ecommerce", label: "E-commerce", color: "from-gray-700 to-gray-800" },
              { key: "shopify", label: "Shopify", color: "from-blue-500 to-blue-600" },
              { key: "erp", label: "Enterprise", color: "from-gray-600 to-gray-700" },
              { key: "design", label: "Design", color: "from-blue-600 to-blue-700" },
            ].map((category) => (
              <Button
                key={category.key}
                variant={activeProject === category.key ? "default" : "outline"}
                onClick={() => setActiveProject(category.key)}
                className={`
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold
                  ${
                    activeProject === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-0`
                      : "border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50/50"
                  }
                `}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-sm border-0 overflow-hidden hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100/50 to-gray-100/50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    {project.category === "design" && <Palette className="h-20 w-20 text-blue-600 mx-auto mb-4" />}
                    {project.category === "website" && <Monitor className="h-20 w-20 text-gray-700 mx-auto mb-4" />}
                    {project.category === "ecommerce" && (
                      <ShoppingCart className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                    )}
                    {project.category === "shopify" && <Package className="h-20 w-20 text-gray-700 mx-auto mb-4" />}
                    {project.category === "android" && <Smartphone className="h-20 w-20 text-blue-600 mx-auto mb-4" />}
                    {project.category === "erp" && <Settings className="h-20 w-20 text-gray-700 mx-auto mb-4" />}
                    {project.category === "wordpress" && <Monitor className="h-20 w-20 text-blue-600 mx-auto mb-4" />}
                    {project.category === "realtime" && (
                      <MessageCircle className="h-20 w-20 text-gray-700 mx-auto mb-4" />
                    )}
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-gray-700 text-white shadow-lg">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 border-gray-200 text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigateToPage("case-studies")}
                      className="flex-1 bg-transparent border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Case Study
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => scrollToSection("contact")}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => navigateToPage("case-studies")}
              className="bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 font-semibold"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>



      {/* Contact & Quote Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-blue-50/50 to-gray-50/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
              Get Your Free Quote Today
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-gray-700 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-800">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-12 leading-relaxed text-gray-700">
                Whether you need MERN/MEAN stack development, Shopify solutions, WordPress development, mobile apps, or
                complete digital transformation, our expert team is ready to bring your vision to life. Get a detailed
                quote tailored to your specific requirements.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "hello@aqstoria.com", color: "from-blue-500 to-blue-600" },
                  { icon: Phone, label: "Phone", value: "+92 300 123 4567", color: "from-gray-600 to-gray-700" },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+92 300 123 4567",
                    color: "from-blue-600 to-blue-700",
                    link: "https://wa.me/923001234567",
                  },
                  { icon: Globe, label: "Website", value: "aqstoria.com", color: "from-gray-700 to-gray-800" },
                  { icon: Headphones, label: "Support", value: "24/7 Available", color: "from-blue-500 to-blue-600" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">{contact.label}</p>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-semibold"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 text-gray-800">Request Detailed Quote</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold mb-3 text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        placeholder="Your Full Name"
                        className="bg-white/50 border-gray-300 focus:border-blue-500 h-12 rounded-xl font-medium"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/50 border-gray-300 focus:border-blue-500 h-12 rounded-xl font-medium"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-3 text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="+92 300 123 4567"
                        className="bg-white/50 border-gray-300 focus:border-blue-500 h-12 rounded-xl font-medium"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-3 text-gray-700">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company Name"
                        className="bg-white/50 border-gray-300 focus:border-blue-500 h-12 rounded-xl font-medium"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-3 text-gray-700">
                      Project Budget (PKR) *
                    </label>
                    <select
                      id="budget"
                      className="w-full p-4 border border-gray-300 rounded-xl bg-white/50 focus:border-blue-500 focus:outline-none h-12 font-medium"
                    >
                      <option>Select Budget</option>
                      <option>PKR 10,000 - PKR 50,000</option>
                      <option>PKR 50,000 - PKR 100,000</option>
                      <option>PKR 100,000 - PKR 500,000</option>
                      <option>PKR 500,000 +</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-semibold mb-3 text-gray-700">
                      Tell us more about your project *
                    </label>
                    <Textarea
                      id="projectDescription"
                      rows={4}
                      placeholder="Describe your project in detail"
                      className="w-full p-4 border border-gray-300 rounded-xl bg-white/50 focus:border-blue-500 focus:outline-none font-medium"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                    Get Detailed Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how we've helped businesses transform their digital presence and achieve remarkable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Testimonial Card */}
            <div className="md:col-span-2">
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl flex flex-col justify-between">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <Quote className="h-8 w-8 text-blue-400 mr-3" />
                    <span className="text-blue-400 font-bold text-lg">"Aqstoria's UI/UX design services are world-class. They redesigned our entire product interface, resulting in a 60% increase in user engagement and a 45% reduction in support tickets. The design is both beautiful and functional."</span>
                  </div>
                  <div className="flex items-center mt-8">
                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                      <UserIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Ayesha Hassan</p>
                      <p className="text-sm text-gray-600">Product Manager at Innovate Labs</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        ))}
                        <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full font-semibold">Verified</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Results Card */}
            <div>
              <Card className="h-full bg-blue-50/80 border-0 shadow-xl flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <PenTool className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Product Redesign</p>
                      <p className="text-xs text-gray-600">UI/UX Design</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 mb-2">Key Results:</p>
                    <div className="flex justify-between items-center bg-white rounded-lg px-4 py-2 mb-2">
                      <span className="text-gray-600">User Engagement</span>
                      <span className="font-bold text-gray-900">60% <span className="text-green-500 text-xs font-semibold ml-1">+40%</span></span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg px-4 py-2 mb-2">
                      <span className="text-gray-600">Support Tickets</span>
                      <span className="font-bold text-gray-900">45% <span className="text-green-500 text-xs font-semibold ml-1">-55%</span></span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg px-4 py-2">
                      <span className="text-gray-600">User Satisfaction</span>
                      <span className="font-bold text-gray-900">92% <span className="text-green-500 text-xs font-semibold ml-1">+35%</span></span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center mt-auto">
                    <Calendar className="h-4 w-4 mr-1" /> December 2023
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <BlogSection />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
