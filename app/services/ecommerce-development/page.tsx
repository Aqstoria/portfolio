"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, ShoppingBag, Code, Database, Cloud, Shield, Zap, Users, Clock, Star, MessageCircle, Download, Play, BookOpen, Target, Rocket, DollarSign } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'

export default function EcommerceDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: ShoppingBag,
      title: "Custom E-commerce Platforms",
      description: "Tailored online store solutions built to your specific business requirements",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Code,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment methods and fraud protection",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Database,
      title: "Inventory Management",
      description: "Advanced inventory tracking, stock alerts, and automated reordering systems",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Multi-vendor Marketplaces",
      description: "Scalable marketplace platforms supporting multiple vendors and sellers",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI DSS compliance, SSL certificates, and advanced security measures",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Mobile Commerce",
      description: "Optimized mobile shopping experiences with PWA capabilities",
      color: "from-yellow-500 to-orange-600"
    }
  ]

  const technologies = [
    { name: "Shopify", category: "Platform", icon: "🛍️" },
    { name: "WooCommerce", category: "Platform", icon: "🛒" },
    { name: "Magento", category: "Platform", icon: "🔧" },
    { name: "Stripe", category: "Payment", icon: "💳" },
    { name: "PayPal", category: "Payment", icon: "💰" },
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" }
  ]

  const pricingPlans = [
    {
      name: "Basic Store",
      price: "PKR 100,000",
      duration: "2-3 months",
      features: [
        "Single vendor store",
        "Basic payment integration",
        "Inventory management",
        "Mobile responsive design",
        "Basic SEO optimization",
        "3 months support"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional Store",
      price: "PKR 250,000",
      duration: "3-4 months",
      features: [
        "Advanced payment gateways",
        "Multi-currency support",
        "Advanced inventory system",
        "Customer management",
        "Analytics dashboard",
        "6 months support"
      ],
      color: "from-purple-500 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise Marketplace",
      price: "PKR 500,000",
      duration: "4-6 months",
      features: [
        "Multi-vendor marketplace",
        "Advanced analytics",
        "Custom integrations",
        "Scalable architecture",
        "24/7 monitoring",
        "12 months support"
      ],
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#95BF47]/10 to-[#7CB342]/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#95BF47] to-[#7CB342] rounded-2xl flex items-center justify-center shadow-xl">
                  <ShoppingBag className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent mb-6">
                E-commerce Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Complete online store solutions with payment processing and inventory management. 
                We build e-commerce platforms that drive sales and grow your business.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, label: "150+", description: "Stores Built" },
                { icon: Clock, label: "24/7", description: "Support Available" },
                { icon: Star, label: "4.8/5", description: "Client Rating" },
                { icon: Zap, label: "99.9%", description: "Uptime Guarantee" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-[#95BF47]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { key: 'overview', label: 'Overview', icon: BookOpen },
                { key: 'features', label: 'Features', icon: CheckCircle },
                { key: 'technologies', label: 'Technologies', icon: Code },
                { key: 'pricing', label: 'Pricing', icon: DollarSign },
                { key: 'process', label: 'Process', icon: Rocket }
              ].map((tab) => (
                <Button
                  key={tab.key}
                  variant={activeTab === tab.key ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold
                    ${
                      activeTab === tab.key
                        ? `bg-gradient-to-r from-[#95BF47] to-[#7CB342] text-white shadow-lg`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#95BF47] hover:bg-[#95BF47]/10"
                    }
                  `}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-20">
              {/* Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent">
                      Why Choose Our E-commerce Development?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We specialize in creating powerful e-commerce solutions that drive sales and provide exceptional shopping experiences.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Transform Your Business with E-commerce
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Our e-commerce development services are designed to help businesses establish a strong online presence 
                        and drive sales through powerful, user-friendly online stores. We create platforms that not only look 
                        great but also convert visitors into customers.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        From startups to enterprise-level organizations, we've delivered over 150 e-commerce solutions 
                        that have helped businesses increase their online sales, improve customer experience, and scale 
                        their operations. Our approach combines cutting-edge technology with proven e-commerce best practices.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-[#95BF47] to-[#7CB342] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#95BF47] text-[#95BF47] font-semibold px-8 py-4 rounded-xl hover:bg-[#95BF47] hover:text-white transition-all duration-300">
                          View Portfolio
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#95BF47]/10 to-[#7CB342]/10 rounded-3xl p-8 shadow-2xl border border-[#95BF47]/20">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-[#95BF47] to-[#7CB342] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <ShoppingBag className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Expertise</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#95BF47] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Custom e-commerce platforms</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#95BF47] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Payment gateway integration</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#95BF47] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Inventory management systems</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#95BF47] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Multi-vendor marketplaces</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              {activeTab === 'features' && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent">
                      Comprehensive Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Our e-commerce development includes a wide range of features designed to meet your business needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                      <Card
                        key={index}
                        className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                      >
                        <CardContent className="p-8">
                          <div className="relative mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <feature.icon className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {activeTab === 'technologies' && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent">
                      Technologies We Use
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We leverage the latest e-commerce technologies and platforms to build robust, scalable, and secure online stores.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {['Platform', 'Payment', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'].map((category) => (
                      <div key={category}>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {technologies
                            .filter(tech => tech.category === category)
                            .map((tech, index) => (
                              <Card
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                              >
                                <CardContent className="p-6">
                                  <div className="text-3xl mb-3">{tech.icon}</div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                                </CardContent>
                              </Card>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing */}
              {activeTab === 'pricing' && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent">
                      Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Choose the plan that best fits your business needs and budget.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                      <Card
                        key={index}
                        className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl relative ${
                          plan.popular ? 'ring-2 ring-[#95BF47]' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-[#95BF47] to-[#7CB342] text-white px-4 py-2">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent">
                              {plan.price}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{plan.duration}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#95BF47] mr-3 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className={`w-full bg-gradient-to-r ${plan.color} text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Process */}
              {activeTab === 'process' && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#95BF47] to-[#7CB342] bg-clip-text text-transparent">
                      Our Development Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We follow a proven methodology to ensure your e-commerce project's success from concept to launch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Discovery & Planning", description: "We analyze your business requirements and create a detailed e-commerce strategy", icon: Target, color: "from-blue-500 to-cyan-600" },
                      { step: "02", title: "Design & UX", description: "Create user-friendly store design with optimized shopping experience", icon: BookOpen, color: "from-green-500 to-emerald-600" },
                      { step: "03", title: "Development", description: "Build your e-commerce platform with secure payment processing", icon: Code, color: "from-purple-500 to-pink-600" },
                      { step: "04", title: "Testing & QA", description: "Comprehensive testing ensures your store is bug-free and secure", icon: Shield, color: "from-orange-500 to-red-600" },
                      { step: "05", title: "Launch & Deployment", description: "Deploy your store and provide launch support", icon: Rocket, color: "from-indigo-500 to-purple-600" },
                      { step: "06", title: "Support & Maintenance", description: "Ongoing support and maintenance to keep your store running smoothly", icon: Users, color: "from-yellow-500 to-orange-600" }
                    ].map((step, index) => (
                      <Card
                        key={index}
                        className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                      >
                        <CardContent className="p-8">
                          <div className="relative mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <step.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#95BF47] to-[#7CB342] rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {step.step}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#95BF47] to-[#7CB342]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Online Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your e-commerce requirements and create a platform that drives sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#95BF47] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#95BF47] transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 