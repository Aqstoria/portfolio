"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Smartphone, Code, Database, Cloud, Shield, Zap, Users, Clock, Star, MessageCircle, Download, Play, BookOpen, Target, Rocket, DollarSign } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'

export default function MobileAppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Smartphone,
      title: "iOS & Android Development",
      description: "Native mobile applications for both iOS and Android platforms",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Code,
      title: "React Native Apps",
      description: "Cross-platform development using React Native for faster deployment",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud services integration for data sync and storage",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      title: "App Security",
      description: "Enterprise-grade security with encryption and secure APIs",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance apps with smooth animations and fast loading",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive UI/UX design focused on user engagement",
      color: "from-indigo-500 to-purple-600"
    }
  ]

  const technologies = [
    { name: "React Native", category: "Cross-Platform", icon: "⚛️" },
    { name: "Flutter", category: "Cross-Platform", icon: "🦋" },
    { name: "Swift", category: "iOS", icon: "🍎" },
    { name: "Kotlin", category: "Android", icon: "🤖" },
    { name: "Firebase", category: "Backend", icon: "🔥" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "Redux", category: "State Management", icon: "🔄" },
    { name: "TypeScript", category: "Development", icon: "📘" },
    { name: "Jest", category: "Testing", icon: "🧪" }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "PKR 75,000",
      duration: "2-3 months",
      features: [
        "Single platform app (iOS or Android)",
        "Basic user authentication",
        "Core features implementation",
        "Basic UI/UX design",
        "App store submission",
        "3 months support"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "PKR 200,000",
      duration: "3-4 months",
      features: [
        "Cross-platform app (iOS & Android)",
        "Advanced user management",
        "Cloud integration",
        "Push notifications",
        "Advanced UI/UX design",
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
        "Complex enterprise app",
        "Custom integrations",
        "Advanced analytics",
        "Real-time features",
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#61DAFB]/10 to-[#4ECDC4]/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] rounded-2xl flex items-center justify-center shadow-xl">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent mb-6">
                Mobile App Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences. 
                From concept to app store, we build apps that users love.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, label: "200+", description: "Apps Delivered" },
                { icon: Clock, label: "24/7", description: "Support Available" },
                { icon: Star, label: "4.8/5", description: "App Store Rating" },
                { icon: Zap, label: "99.9%", description: "Uptime Guarantee" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-[#61DAFB]" />
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
                        ? `bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] text-white shadow-lg`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#61DAFB] hover:bg-[#61DAFB]/10"
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent">
                      Why Choose Our Mobile App Development?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We specialize in creating mobile applications that not only look great but also provide exceptional user experiences and drive business results.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Transform Your Business with Mobile Apps
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Our mobile app development services are designed to help businesses reach their customers 
                        wherever they are. We create apps that are not just functional but also engaging and 
                        user-friendly, ensuring high user retention and satisfaction.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        From startups to enterprise-level organizations, we've delivered over 200 mobile applications 
                        that have helped businesses increase their reach, improve customer engagement, and boost revenue. 
                        Our approach combines cutting-edge technology with proven mobile development methodologies.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#61DAFB] text-[#61DAFB] font-semibold px-8 py-4 rounded-xl hover:bg-[#61DAFB] hover:text-white transition-all duration-300">
                          View Portfolio
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#61DAFB]/10 to-[#4ECDC4]/10 rounded-3xl p-8 shadow-2xl border border-[#61DAFB]/20">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <Smartphone className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Expertise</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#61DAFB] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Native iOS & Android</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#61DAFB] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Cross-platform development</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#61DAFB] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">App store optimization</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#61DAFB] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Performance optimization</span>
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent">
                      Comprehensive Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Our mobile app development includes a wide range of features designed to meet your business needs.
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent">
                      Technologies We Use
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We leverage the latest mobile technologies and frameworks to build robust, scalable, and future-proof applications.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {['Cross-Platform', 'iOS', 'Android', 'Backend', 'Cloud', 'Development', 'Testing'].map((category) => (
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent">
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
                          plan.popular ? 'ring-2 ring-[#61DAFB]' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] text-white px-4 py-2">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent">
                              {plan.price}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{plan.duration}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#61DAFB] mr-3 flex-shrink-0" />
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] bg-clip-text text-transparent">
                      Our Development Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We follow a proven methodology to ensure your mobile app's success from concept to app store.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Discovery & Planning", description: "We analyze your requirements and create a detailed app roadmap", icon: Target, color: "from-blue-500 to-cyan-600" },
                      { step: "02", title: "Design & Prototyping", description: "Our designers create beautiful, intuitive app interfaces", icon: BookOpen, color: "from-green-500 to-emerald-600" },
                      { step: "03", title: "Development", description: "Expert developers build your app using best practices", icon: Code, color: "from-purple-500 to-pink-600" },
                      { step: "04", title: "Testing & QA", description: "Comprehensive testing ensures your app is bug-free", icon: Shield, color: "from-orange-500 to-red-600" },
                      { step: "05", title: "App Store Submission", description: "We handle app store submission and approval process", icon: Rocket, color: "from-indigo-500 to-purple-600" },
                      { step: "06", title: "Launch & Support", description: "Ongoing support and updates to keep your app running smoothly", icon: Users, color: "from-yellow-500 to-orange-600" }
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
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold text-sm">
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
        <section className="py-20 px-6 bg-gradient-to-r from-[#61DAFB] to-[#4ECDC4]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your app requirements and create a mobile solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#61DAFB] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#61DAFB] transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 