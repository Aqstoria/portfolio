"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Cloud, Code, Database, Shield, Zap, Users, Clock, Star, MessageCircle, Download, Play, BookOpen, Target, Rocket } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'

export default function CloudSolutionsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Cloud,
      title: "AWS & Azure Deployment",
      description: "Scalable cloud infrastructure using AWS and Microsoft Azure",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Code,
      title: "Serverless Architecture",
      description: "Modern serverless applications with auto-scaling capabilities",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Database,
      title: "Container Orchestration",
      description: "Docker and Kubernetes deployment and management",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance standards",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Load Balancing & Scaling",
      description: "High-performance load balancing and auto-scaling",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Database Migration",
      description: "Seamless database migration to cloud platforms",
      color: "from-yellow-500 to-orange-600"
    }
  ]

  const technologies = [
    { name: "AWS", category: "Cloud Platform", icon: "☁️" },
    { name: "Azure", category: "Cloud Platform", icon: "🔷" },
    { name: "Google Cloud", category: "Cloud Platform", icon: "🔵" },
    { name: "Docker", category: "Containerization", icon: "🐳" },
    { name: "Kubernetes", category: "Orchestration", icon: "⚓" },
    { name: "Terraform", category: "Infrastructure", icon: "🏗️" },
    { name: "Jenkins", category: "CI/CD", icon: "🤖" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "Redis", category: "Cache", icon: "🔴" },
    { name: "Nginx", category: "Load Balancer", icon: "🟢" }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "PKR 50,000",
      duration: "per month",
      features: [
        "Basic cloud setup",
        "Single region deployment",
        "Basic monitoring",
        "Security configuration",
        "Backup solutions",
        "24/7 support"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "PKR 150,000",
      duration: "per month",
      features: [
        "Multi-region deployment",
        "Auto-scaling setup",
        "Advanced monitoring",
        "Load balancing",
        "Database migration",
        "Performance optimization"
      ],
      color: "from-purple-500 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "PKR 500,000",
      duration: "per month",
      features: [
        "Full cloud transformation",
        "Microservices architecture",
        "Advanced security",
        "Disaster recovery",
        "Compliance management",
        "Dedicated support"
      ],
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/10 to-[#FF6B6B]/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] rounded-2xl flex items-center justify-center shadow-xl">
                  <Cloud className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent mb-6">
                Cloud Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Scalable cloud infrastructure and deployment solutions for modern applications. 
                We help businesses leverage the power of cloud computing for growth and efficiency.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, label: "100+", description: "Cloud Projects" },
                { icon: Clock, label: "24/7", description: "Monitoring" },
                { icon: Star, label: "4.9/5", description: "Client Rating" },
                { icon: Zap, label: "99.9%", description: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-[#FF9900]" />
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
                        ? `bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] text-white shadow-lg`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#FF9900] hover:bg-[#FF9900]/10"
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent">
                      Why Choose Our Cloud Solutions?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We specialize in creating scalable, secure, and cost-effective cloud solutions that drive business growth.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Transform Your Business with Cloud
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Our cloud solutions are designed to help businesses scale efficiently, reduce costs, and improve 
                        performance. We create robust cloud infrastructure that supports your business growth and ensures 
                        high availability and security.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        From startups to enterprise-level organizations, we've delivered over 100 cloud projects 
                        that have helped businesses reduce infrastructure costs by up to 70%, improve performance, 
                        and achieve better scalability. Our approach combines cutting-edge cloud technologies with 
                        proven best practices.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#FF9900] text-[#FF9900] font-semibold px-8 py-4 rounded-xl hover:bg-[#FF9900] hover:text-white transition-all duration-300">
                          View Case Studies
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#FF9900]/10 to-[#FF6B6B]/10 rounded-3xl p-8 shadow-2xl border border-[#FF9900]/20">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <Cloud className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Expertise</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF9900] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">AWS & Azure deployment</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF9900] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Serverless architecture</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF9900] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Container orchestration</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF9900] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Security & compliance</span>
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent">
                      Comprehensive Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Our cloud solutions include a wide range of features designed to meet your business needs.
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent">
                      Technologies We Use
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We leverage the latest cloud technologies and platforms to build robust, scalable, and secure solutions.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {['Cloud Platform', 'Containerization', 'Orchestration', 'Infrastructure', 'CI/CD', 'Database', 'Cache', 'Load Balancer'].map((category) => (
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent">
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
                          plan.popular ? 'ring-2 ring-[#FF9900]' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] text-white px-4 py-2">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent">
                              {plan.price}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{plan.duration}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#FF9900] mr-3 flex-shrink-0" />
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] bg-clip-text text-transparent">
                      Our Cloud Migration Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We follow a proven methodology to ensure your cloud migration's success from planning to deployment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Assessment & Planning", description: "We analyze your current infrastructure and plan the migration strategy", icon: Target, color: "from-blue-500 to-cyan-600" },
                      { step: "02", title: "Architecture Design", description: "Design scalable cloud architecture tailored to your needs", icon: BookOpen, color: "from-green-500 to-emerald-600" },
                      { step: "03", title: "Migration & Deployment", description: "Execute the migration with minimal downtime", icon: Cloud, color: "from-purple-500 to-pink-600" },
                      { step: "04", title: "Testing & Optimization", description: "Comprehensive testing and performance optimization", icon: Shield, color: "from-orange-500 to-red-600" },
                      { step: "05", title: "Go-Live & Monitoring", description: "Deploy to production with continuous monitoring", icon: Rocket, color: "from-indigo-500 to-purple-600" },
                      { step: "06", title: "Support & Maintenance", description: "Ongoing support and maintenance services", icon: Users, color: "from-yellow-500 to-orange-600" }
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
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B] rounded-full flex items-center justify-center text-white font-bold text-sm">
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
        <section className="py-20 px-6 bg-gradient-to-r from-[#FF9900] to-[#FF6B6B]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your cloud requirements and create a scalable solution that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#FF9900] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Migration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#FF9900] transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 