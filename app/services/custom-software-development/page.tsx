"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Code, Database, Cloud, Shield, Zap, Users, Clock, Star, MessageCircle, Download, Play, BookOpen, Target, Rocket } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'

export default function CustomSoftwareDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web applications using modern frameworks like React, Angular, and Vue.js",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized database architecture with PostgreSQL, MongoDB, and MySQL",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Scalable cloud solutions using AWS, Azure, and Google Cloud Platform",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Enterprise-grade security with authentication, authorization, and data protection",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance applications with caching, CDN, and load balancing",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user authentication, roles, and permission systems",
      color: "from-indigo-500 to-purple-600"
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Angular", category: "Frontend", icon: "🅰️" },
    { name: "Vue.js", category: "Frontend", icon: "💚" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Python", category: "Backend", icon: "🐍" },
    { name: "Java", category: "Backend", icon: "☕" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "PKR 50,000",
      duration: "2-3 months",
      features: [
        "Single-page application",
        "Basic user authentication",
        "Database integration",
        "Responsive design",
        "Basic security",
        "3 months support"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "PKR 150,000",
      duration: "3-4 months",
      features: [
        "Multi-page application",
        "Advanced user management",
        "API development",
        "Cloud deployment",
        "Advanced security",
        "6 months support"
      ],
      color: "from-purple-500 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "PKR 500,000",
      duration: "4-6 months",
      features: [
        "Complex enterprise solution",
        "Custom integrations",
        "Advanced analytics",
        "Scalable architecture",
        "24/7 monitoring",
        "12 months support"
      ],
      color: "from-orange-500 to-red-600"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      icon: Target,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user interface",
      icon: BookOpen,
      color: "from-green-500 to-emerald-600"
    },
    {
      step: "03",
      title: "Development",
      description: "Expert developers build your solution using best practices",
      icon: Code,
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing ensures your application is bug-free",
      icon: Shield,
      color: "from-orange-500 to-red-600"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We deploy your application and provide launch support",
      icon: Rocket,
      color: "from-indigo-500 to-purple-600"
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your system running smoothly",
      icon: Users,
      color: "from-yellow-500 to-orange-600"
    }
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ef3a5d]/10 to-[#ff6b6b]/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-2xl flex items-center justify-center shadow-xl">
                  <Code className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent mb-6">
                Custom Software Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Tailored software solutions built with modern technologies to solve your unique business challenges. 
                From concept to deployment, we deliver scalable applications that drive growth.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, label: "500+", description: "Projects Delivered" },
                { icon: Clock, label: "24/7", description: "Support Available" },
                { icon: Star, label: "4.9/5", description: "Client Rating" },
                { icon: Zap, label: "99.9%", description: "Uptime Guarantee" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-[#ef3a5d]" />
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
                        ? `bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#ef3a5d] hover:bg-[#ef3a5d]/10"
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent">
                      Why Choose Our Custom Software Development?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We specialize in creating bespoke software solutions that perfectly align with your business objectives and scale with your growth.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Transform Your Business with Custom Software
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Our custom software development services are designed to address your unique business challenges. 
                        We don't just build applications; we create solutions that streamline operations, enhance productivity, 
                        and drive measurable results.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        From startups to enterprise-level organizations, we've delivered over 500 custom software solutions 
                        that have transformed businesses across various industries. Our approach combines cutting-edge 
                        technology with proven methodologies to ensure your project's success.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#ef3a5d] text-[#ef3a5d] font-semibold px-8 py-4 rounded-xl hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                          View Portfolio
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#ef3a5d]/10 to-[#ff6b6b]/10 rounded-3xl p-8 shadow-2xl border border-[#ef3a5d]/20">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <Code className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Expertise</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#ef3a5d] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Full-stack development</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#ef3a5d] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Cloud-native applications</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#ef3a5d] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Microservices architecture</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#ef3a5d] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">API-first development</span>
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent">
                      Comprehensive Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Our custom software development includes a wide range of features designed to meet your business needs.
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent">
                      Technologies We Use
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We leverage the latest technologies and frameworks to build robust, scalable, and future-proof applications.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'].map((category) => (
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent">
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
                          plan.popular ? 'ring-2 ring-[#ef3a5d]' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white px-4 py-2">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent">
                              {plan.price}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{plan.duration}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#ef3a5d] mr-3 flex-shrink-0" />
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent">
                      Our Development Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We follow a proven methodology to ensure your project's success from concept to deployment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                      <Card
                        key={index}
                        className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                      >
                        <CardContent className="p-8">
                          <div className="relative mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <step.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center text-white font-bold text-sm">
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
        <section className="py-20 px-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Custom Software?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#ef3a5d] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#ef3a5d] transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 