"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Globe, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  BarChart3, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Target,
  Award,
  Shield,
  Heart,
  Share2,
  Eye,
  Download,
  Settings,
  Palette,
  Camera,
  Video,
  FileText,
  Hash,
  AtSign,
  ThumbsUp,
  MessageSquare,
  Repeat,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Gift,
  Rocket,
  Crown,
  Sparkles
} from "lucide-react"
import SharedLayout from '@/components/shared-layout'

export default function SocialMediaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("premium")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState("packages")

  // Social Media Packages
  const packages = [
    {
      id: "basic",
      name: "Basic",
      price: 10000,
      originalPrice: 15000,
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "2 posts per week",
        "Content creation",
        "Basic scheduling",
        "Monthly report",
        "1 platform focus",
        "Email support"
      ],
      notIncluded: [
        "Advanced analytics",
        "Influencer outreach",
        "Paid advertising",
        "Crisis management"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: MessageCircle,
      isPopular: false,
      discount: 33
    },
    {
      id: "premium",
      name: "Premium",
      price: 30000,
      originalPrice: 40000,
      description: "Comprehensive social media management for growing businesses",
      features: [
        "5 posts per week",
        "Advanced content creation",
        "Multi-platform scheduling",
        "Detailed analytics & reporting",
        "Community management",
        "Paid advertising setup",
        "Influencer outreach",
        "Crisis management",
        "Priority support"
      ],
      notIncluded: [
        "Custom strategy development",
        "Brand ambassador program"
      ],
      color: "from-[#ef3a5d] to-[#ff6b6b]",
      icon: TrendingUp,
      isPopular: true,
      discount: 25
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 75000,
      originalPrice: 100000,
      description: "Full-service social media management for large organizations",
      features: [
        "Daily posting (7 posts/week)",
        "Custom content strategy",
        "Advanced analytics & insights",
        "Multi-platform management",
        "Paid advertising campaigns",
        "Influencer partnerships",
        "Crisis management",
        "Brand ambassador program",
        "Custom reporting",
        "Dedicated account manager",
        "24/7 support"
      ],
      notIncluded: [],
      color: "from-purple-600 to-pink-600",
      icon: Crown,
      isPopular: false,
      discount: 25
    }
  ]

  // Platform-specific packages
  const platformPackages = [
    {
      platform: "Instagram",
      icon: Instagram,
      price: 15000,
      features: [
        "Daily stories",
        "Reels creation",
        "Hashtag strategy",
        "Engagement monitoring",
        "Influencer outreach",
        "Analytics dashboard"
      ]
    },
    {
      platform: "Facebook",
      icon: Facebook,
      price: 12000,
      features: [
        "Page management",
        "Ad campaign setup",
        "Community engagement",
        "Content scheduling",
        "Performance tracking",
        "Lead generation"
      ]
    },
    {
      platform: "Twitter",
      icon: Twitter,
      price: 10000,
      features: [
        "Tweet scheduling",
        "Trend monitoring",
        "Hashtag research",
        "Engagement tracking",
        "Thread creation",
        "Analytics reporting"
      ]
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      price: 18000,
      features: [
        "Company page management",
        "Thought leadership content",
        "B2B networking",
        "Lead generation",
        "Industry insights",
        "Professional branding"
      ]
    },
    {
      platform: "YouTube",
      icon: Youtube,
      price: 25000,
      features: [
        "Video content creation",
        "SEO optimization",
        "Thumbnail design",
        "Comment management",
        "Analytics tracking",
        "Monetization setup"
      ]
    },
    {
      platform: "TikTok",
      icon: TrendingUp,
      price: 20000,
      features: [
        "Viral content creation",
        "Trend analysis",
        "Hashtag strategy",
        "Engagement boosting",
        "Influencer collaboration",
        "Performance analytics"
      ]
    }
  ]

  // Statistics data
  const statistics = [
    {
      icon: Users,
      value: "500+",
      label: "Clients Served",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      value: "2.5M+",
      label: "Total Reach",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      value: "150K+",
      label: "Engagement Rate",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
      color: "from-orange-500 to-red-500"
    }
  ]

  // Case studies
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Brand Growth",
      company: "Fashion Forward",
      industry: "Fashion & Retail",
      results: {
        followers: "50K → 250K",
        engagement: "2.1% → 8.5%",
        sales: "PKR 500K → PKR 2.5M"
      },
      duration: "6 months",
      platforms: ["Instagram", "Facebook", "TikTok"],
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "B2B Lead Generation",
      company: "Tech Solutions Ltd",
      industry: "Technology",
      results: {
        followers: "2K → 15K",
        engagement: "1.2% → 6.8%",
        leads: "50 → 300/month"
      },
      duration: "4 months",
      platforms: ["LinkedIn", "Twitter", "YouTube"],
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Restaurant Local Marketing",
      company: "Cafe Delight",
      industry: "Food & Beverage",
      results: {
        followers: "1K → 25K",
        engagement: "3.5% → 12.2%",
        orders: "100 → 500/day"
      },
      duration: "3 months",
      platforms: ["Instagram", "Facebook", "Google My Business"],
      image: "/placeholder.jpg"
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Ahmed Khan",
      company: "TechStart Pakistan",
      content: "Aqstoria's social media management increased our engagement by 300% and helped us reach 50K+ new followers in just 3 months!",
      metric: "300% engagement increase",
      metricValue: "300%",
      rating: 5,
      image: "/placeholder-user.jpg"
    },
    {
      name: "Fatima Ali",
      company: "Fashion Boutique",
      content: "Our Instagram sales increased by 200% after implementing their social media strategy. The team is incredibly professional and creative.",
      metric: "200% sales increase",
      metricValue: "200%",
      rating: 5,
      image: "/placeholder-user.jpg"
    },
    {
      name: "Usman Hassan",
      company: "Restaurant Chain",
      content: "The social media campaigns generated 500+ new customers and increased our online orders by 150%. Highly recommended!",
      metric: "500+ new customers",
      metricValue: "500+",
      rating: 5,
      image: "/placeholder-user.jpg"
    }
  ]

  // Services offered
  const services = [
    {
      title: "Content Creation",
      description: "Engaging posts, stories, and videos tailored to your brand",
      icon: Palette,
      features: ["Custom graphics", "Video editing", "Copywriting", "Brand consistency"]
    },
    {
      title: "Community Management",
      description: "Active engagement with your audience across all platforms",
      icon: Users,
      features: ["Comment responses", "Message management", "Engagement strategies", "Crisis handling"]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights and performance tracking",
      icon: BarChart3,
      features: ["Performance metrics", "Growth tracking", "ROI analysis", "Custom reports"]
    },
    {
      title: "Paid Advertising",
      description: "Strategic paid campaigns to boost reach and conversions",
      icon: Target,
      features: ["Ad creation", "Campaign management", "Budget optimization", "A/B testing"]
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, testimonials.length])

  const selectedPackageData = packages.find(pkg => pkg.id === selectedPackage)

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#f8f1e9] to-[#e8f4f8] dark:from-[#0a1a2e] dark:to-[#1a2a3e] transition-all duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <div className="relative mb-8">
              {/* 3D Social Media Globe */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full animate-pulse-glow" />
                <div className="absolute inset-2 bg-gradient-to-r from-[#0a1a2e] to-[#1a2a3e] rounded-full flex items-center justify-center">
                  <Globe className="h-12 w-12 text-white animate-spin-slow" />
                </div>
                {/* Floating social icons */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                  <Facebook className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Instagram className="h-4 w-4 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <Twitter className="h-4 w-4 text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <Linkedin className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0a1a2e] dark:text-white">
              Social Media <span className="gradient-text">Management</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your social media presence with our comprehensive management services. 
              Drive engagement, increase followers, and boost your brand's online visibility.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Users, value: "500+", label: "Clients Served" },
                { icon: TrendingUp, value: "300%", label: "Avg. Engagement Increase" },
                { icon: Globe, value: "50K+", label: "Followers Generated" }
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

      {/* Statistics Dashboard */}
      <section className="py-16 bg-white dark:bg-[#0a1a2e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real results from real clients across all industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4">
            {[
              { id: "packages", label: "Packages" },
              { id: "platforms", label: "Platforms" },
              { id: "services", label: "Services" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {activeTab === "packages" && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
                Choose Your Package
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Flexible packages designed to meet your social media needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className={`relative glassmorphism p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                    pkg.isPopular ? 'ring-2 ring-[#ef3a5d]' : ''
                  } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Popular Badge */}
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-6 py-2 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full text-sm font-semibold shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mx-auto mb-4`}>
                      <pkg.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a1a2e] dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {pkg.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-4xl font-bold text-[#ef3a5d]">
                          PKR {pkg.price.toLocaleString()}
                        </div>
                        {pkg.originalPrice > pkg.price && (
                          <div className="text-lg text-gray-500 line-through">
                            PKR {pkg.originalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-4">
                      What's Included:
                    </h4>
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included */}
                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-[#0a1a2e] dark:text-white mb-4">
                        Not Included:
                      </h4>
                      {pkg.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Minus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover-bounce ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-[#ef3a5d] border-2 border-[#ef3a5d] hover:bg-[#ef3a5d] hover:text-white"
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Platforms Section */}
      {activeTab === "platforms" && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
                Platform-Specific Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Specialized management for each social media platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformPackages.map((platform, index) => (
                <div
                  key={platform.platform}
                  className={`glassmorphism p-6 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] flex items-center justify-center mx-auto mb-4">
                      <platform.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1a2e] dark:text-white mb-2">
                      {platform.platform}
                    </h3>
                    <div className="text-2xl font-bold text-[#ef3a5d]">
                      PKR {platform.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>

                  <div className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover-bounce">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === "services" && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Comprehensive social media solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`glassmorphism p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0a1a2e] dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real results from our social media management campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-gray-400" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[#ef3a5d] bg-[#ef3a5d]/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {study.company}
                  </p>

                  {/* Results */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-sm font-semibold text-gray-800 dark:text-white">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {study.platforms.map((platform, platformIndex) => (
                      <span
                        key={platformIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#0a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how we've helped businesses grow their social media presence
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="glassmorphism p-10 rounded-3xl text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-[#ef3a5d] text-[#ef3a5d] mx-1" />
                        ))}
                      </div>
                      
                      <blockquote className="text-2xl font-light text-[#0a1a2e] dark:text-white mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Success Metric */}
                      <div className="bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl p-4 mb-6 inline-block">
                        <div className="text-3xl font-bold">{testimonial.metricValue}</div>
                        <div className="text-sm opacity-90">{testimonial.metric}</div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center mr-4">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#0a1a2e] dark:text-white">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{testimonial.company}</p>
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-[#ef3a5d]" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
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

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey to social media success today. Get a free consultation and custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#ef3a5d] rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-[#ef3a5d] transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
      </div>
    </SharedLayout>
  )
} 