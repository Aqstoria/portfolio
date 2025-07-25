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
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const serviceCategories = [
    { key: "all", label: "All Services", icon: Package },
    { key: "development", label: "Development", icon: Code },
    { key: "design", label: "Design", icon: Palette },
    { key: "ecommerce", label: "E-commerce", icon: ShoppingCart },
    { key: "mobile", label: "Mobile", icon: Smartphone },
    { key: "marketing", label: "Marketing", icon: TrendingUp },
  ]

  const services = [
    {
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React, and Node.js",
      icon: Code,
      category: "development",
      color: "from-blue-500 to-blue-600",
      features: [
        "React.js Frontend Development",
        "Node.js & Express.js Backend",
        "MongoDB Database Design",
        "RESTful API Development",
        "Authentication & Authorization",
        "Real-time Features (Socket.io)",
        "State Management (Redux/Context)",
        "Performance Optimization",
      ],
      pricing: {
        basic: "PKR 50,000",
        professional: "PKR 100,000",
        enterprise: "PKR 200,000",
      },
      duration: "2-4 months",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      caseStudy: {
        title: "E-commerce Platform Transformation",
        result: "500% increase in online sales",
        duration: "3 months",
      },
    },
    {
      title: "MEAN Stack Development",
      description: "Enterprise applications using MongoDB, Express.js, Angular, and Node.js",
      icon: Code,
      category: "development",
      color: "from-cyan-500 to-cyan-600",
      features: [
        "Angular Frontend Development",
        "Node.js & Express.js Backend",
        "MongoDB Database Integration",
        "TypeScript Development",
        "Angular Material UI",
        "Enterprise Architecture",
        "Scalable Solutions",
        "Testing & Documentation",
      ],
      pricing: {
        basic: "PKR 60,000",
        professional: "PKR 120,000",
        enterprise: "PKR 250,000",
      },
      duration: "3-5 months",
      technologies: ["Angular", "Node.js", "MongoDB", "Express", "TypeScript"],
      caseStudy: {
        title: "Restaurant Management System",
        result: "60% reduction in operational costs",
        duration: "4 months",
      },
    },
    {
      title: "Shopify Development",
      description: "Custom Shopify stores, themes, and app development",
      icon: ShoppingCart,
      category: "ecommerce",
      color: "from-teal-500 to-teal-600",
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
      pricing: {
        basic: "PKR 25,000",
        professional: "PKR 50,000",
        enterprise: "PKR 100,000",
      },
      duration: "1-2 months",
      technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Shopify API"],
      caseStudy: {
        title: "Health & Wellness Brand Store",
        result: "250% increase in conversion rate",
        duration: "2 months",
      },
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress websites, themes, and plugin development",
      icon: Monitor,
      category: "development",
      color: "from-blue-600 to-blue-700",
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
      pricing: {
        basic: "PKR 15,000",
        professional: "PKR 35,000",
        enterprise: "PKR 75,000",
      },
      duration: "1-3 months",
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce"],
      caseStudy: {
        title: "Corporate Website Redesign",
        result: "300% improvement in page load speed",
        duration: "2 months",
      },
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      category: "mobile",
      color: "from-cyan-600 to-cyan-700",
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
      pricing: {
        basic: "PKR 75,000",
        professional: "PKR 150,000",
        enterprise: "PKR 300,000",
      },
      duration: "3-6 months",
      technologies: ["React Native", "Flutter", "Kotlin", "Swift"],
      caseStudy: {
        title: "E-commerce Mobile App",
        result: "400% increase in mobile conversions",
        duration: "4 months",
      },
    },
    {
      title: "Graphic Design & Branding",
      description: "Complete visual identity solutions from concept to implementation",
      icon: Palette,
      category: "design",
      color: "from-teal-600 to-teal-700",
      features: [
        "Logo Design & Brand Identity",
        "Marketing Materials Design",
        "Print Design & Packaging",
        "Business Cards & Brochures",
        "Social Media Graphics",
        "Brand Guidelines",
        "Corporate Identity",
        "Creative Consultation",
      ],
      pricing: {
        basic: "PKR 10,000",
        professional: "PKR 25,000",
        enterprise: "PKR 50,000",
      },
      duration: "1-2 weeks",
      technologies: ["Adobe Creative Suite", "Figma", "Illustrator", "Photoshop"],
      caseStudy: {
        title: "Complete Brand Identity",
        result: "200% increase in brand recognition",
        duration: "2 weeks",
      },
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns",
      icon: TrendingUp,
      category: "marketing",
      color: "from-blue-700 to-blue-800",
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
      pricing: {
        basic: "PKR 20,000",
        professional: "PKR 40,000",
        enterprise: "PKR 80,000",
      },
      duration: "Ongoing",
      technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "Analytics"],
      caseStudy: {
        title: "Multi-channel Marketing Campaign",
        result: "150% increase in lead generation",
        duration: "3 months",
      },
    },
    {
      title: "SEO & Analytics",
      description: "Search engine optimization and performance analytics",
      icon: Search,
      category: "marketing",
      color: "from-cyan-700 to-cyan-800",
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
      pricing: {
        basic: "PKR 15,000",
        professional: "PKR 30,000",
        enterprise: "PKR 60,000",
      },
      duration: "Ongoing",
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
      caseStudy: {
        title: "SEO Campaign for E-commerce",
        result: "400% increase in organic traffic",
        duration: "6 months",
      },
    },
  ]

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory)

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From development to design, we deliver excellence.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="relative py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceCategories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                onClick={() => setActiveCategory(category.key)}
                className={`
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold
                  ${
                    activeCategory === category.key
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color} transition-all duration-300 group-hover:h-3`} />
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
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group/item">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{service.pricing.professional}</div>
                      <div className="text-xs text-gray-600">Professional</div>
                    </div>
                    <div className="text-center p-3 bg-cyan-50 rounded-lg">
                      <div className="text-lg font-bold text-cyan-600">{service.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                  </div>

                  {/* Case Study Preview */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm font-semibold text-blue-700">Case Study</span>
                    </div>
                    <h5 className="text-sm font-semibold text-gray-800 mb-1">{service.caseStudy.title}</h5>
                    <p className="text-xs text-gray-600">{service.caseStudy.result}</p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                      size="sm"
                      onClick={() => setSelectedService(service.title)}
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
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Get Quote
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-cyan-50 transition-colors duration-300 bg-transparent border-cyan-200"
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

          {/* Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the plan that best fits your business needs and budget.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "PKR 15,000",
                  description: "Perfect for small businesses and startups",
                  features: [
                    "Basic website development",
                    "Responsive design",
                    "SEO optimization",
                    "1 month support",
                    "Basic analytics",
                    "Contact form",
                  ],
                  popular: false,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "Professional",
                  price: "PKR 50,000",
                  description: "Ideal for growing businesses",
                  features: [
                    "Advanced website development",
                    "Custom functionality",
                    "E-commerce integration",
                    "3 months support",
                    "Advanced analytics",
                    "Performance optimization",
                    "Security implementation",
                    "Content management",
                  ],
                  popular: true,
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  name: "Enterprise",
                  price: "PKR 150,000",
                  description: "For large-scale projects",
                  features: [
                    "Custom enterprise solutions",
                    "Advanced integrations",
                    "Scalable architecture",
                    "6 months support",
                    "24/7 monitoring",
                    "Custom reporting",
                    "API development",
                    "Multi-language support",
                  ],
                  popular: false,
                  color: "from-cyan-600 to-teal-600",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 shadow-lg">
                        <Flame className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}
                      >
                        <Package className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-2 font-bold">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
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
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      } text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
                      onClick={() => window.open("https://wa.me/923001234567", "_blank")}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50/50 to-cyan-50/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get Custom Quote
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