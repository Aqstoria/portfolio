"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, Palette, Code, Database, Cloud, Shield, Zap, Users, Clock, Star, MessageCircle, Download, Play, BookOpen, Target, Rocket, DollarSign } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'

export default function UIUXDesignPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Palette,
      title: "User Interface Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "User-centered design that creates seamless, enjoyable user journeys",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Code,
      title: "Prototyping & Wireframing",
      description: "Interactive prototypes and wireframes to visualize and test design concepts",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Design Systems",
      description: "Comprehensive design systems for consistent, scalable design across platforms",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Usability Testing",
      description: "Comprehensive testing to ensure optimal user experience and accessibility",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Cloud,
      title: "Brand Integration",
      description: "Seamless integration of brand identity into user interface design",
      color: "from-indigo-500 to-purple-600"
    }
  ]

  const tools = [
    { name: "Figma", category: "Design", icon: "🎨" },
    { name: "Adobe XD", category: "Design", icon: "✨" },
    { name: "Sketch", category: "Design", icon: "📱" },
    { name: "InVision", category: "Prototyping", icon: "🔗" },
    { name: "Principle", category: "Animation", icon: "🎬" },
    { name: "Framer", category: "Prototyping", icon: "🚀" },
    { name: "Zeplin", category: "Handoff", icon: "📋" },
    { name: "Abstract", category: "Version Control", icon: "📚" },
    { name: "Miro", category: "Collaboration", icon: "🤝" },
    { name: "Hotjar", category: "Analytics", icon: "📊" }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "PKR 25,000",
      duration: "2-3 weeks",
      features: [
        "Single page design",
        "Basic wireframes",
        "Mobile responsive design",
        "Basic prototyping",
        "Design handoff",
        "2 revisions"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "PKR 75,000",
      duration: "4-6 weeks",
      features: [
        "Multi-page design",
        "Advanced prototyping",
        "Design system creation",
        "Usability testing",
        "Brand integration",
        "Unlimited revisions"
      ],
      color: "from-purple-500 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "PKR 200,000",
      duration: "8-12 weeks",
      features: [
        "Complete design system",
        "Advanced animations",
        "Accessibility compliance",
        "User research",
        "Design documentation",
        "Ongoing support"
      ],
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F24E1E]/10 to-[#FF6B6B]/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] rounded-2xl flex items-center justify-center shadow-xl">
                  <Palette className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent mb-6">
                UI/UX Design
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                User-centered design that creates intuitive, beautiful, and conversion-focused interfaces. 
                We design experiences that users love and businesses value.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, label: "300+", description: "Designs Created" },
                { icon: Clock, label: "24/7", description: "Support Available" },
                { icon: Star, label: "4.9/5", description: "Client Rating" },
                { icon: Zap, label: "99%", description: "Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-[#F24E1E]" />
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
                { key: 'tools', label: 'Tools', icon: Code },
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
                        ? `bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] text-white shadow-lg`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#F24E1E] hover:bg-[#F24E1E]/10"
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent">
                      Why Choose Our UI/UX Design?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We specialize in creating user-centered designs that not only look beautiful but also provide exceptional user experiences and drive business results.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Transform Your Business with Great Design
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Our UI/UX design services are designed to help businesses create digital experiences 
                        that users love. We focus on understanding user needs, creating intuitive interfaces, 
                        and ensuring seamless user journeys that drive engagement and conversions.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        From startups to enterprise-level organizations, we've delivered over 300 design projects 
                        that have helped businesses improve user engagement, increase conversions, and build 
                        stronger brand connections. Our approach combines user research, creative design, and 
                        usability testing to ensure optimal results.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#F24E1E] text-[#F24E1E] font-semibold px-8 py-4 rounded-xl hover:bg-[#F24E1E] hover:text-white transition-all duration-300">
                          View Portfolio
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#F24E1E]/10 to-[#FF6B6B]/10 rounded-3xl p-8 shadow-2xl border border-[#F24E1E]/20">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <Palette className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Expertise</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#F24E1E] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">User-centered design</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#F24E1E] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Interactive prototyping</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#F24E1E] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Design systems</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#F24E1E] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Usability testing</span>
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent">
                      Comprehensive Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Our UI/UX design includes a wide range of features designed to meet your business needs.
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

              {/* Tools */}
              {activeTab === 'tools' && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent">
                      Tools We Use
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We leverage the latest design tools and technologies to create exceptional user experiences.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {['Design', 'Prototyping', 'Animation', 'Handoff', 'Version Control', 'Collaboration', 'Analytics'].map((category) => (
                      <div key={category}>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {tools
                            .filter(tool => tool.category === category)
                            .map((tool, index) => (
                              <Card
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                              >
                                <CardContent className="p-6">
                                  <div className="text-3xl mb-3">{tool.icon}</div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h4>
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent">
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
                          plan.popular ? 'ring-2 ring-[#F24E1E]' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] text-white px-4 py-2">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent">
                              {plan.price}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{plan.duration}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#F24E1E] mr-3 flex-shrink-0" />
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] bg-clip-text text-transparent">
                      Our Design Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We follow a proven methodology to ensure your design project's success from concept to implementation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Research & Discovery", description: "We analyze user needs and business requirements", icon: Target, color: "from-blue-500 to-cyan-600" },
                      { step: "02", title: "Wireframing", description: "Create low-fidelity wireframes to structure the design", icon: BookOpen, color: "from-green-500 to-emerald-600" },
                      { step: "03", title: "Design & Prototyping", description: "Create high-fidelity designs and interactive prototypes", icon: Palette, color: "from-purple-500 to-pink-600" },
                      { step: "04", title: "Usability Testing", description: "Test designs with real users to ensure usability", icon: Shield, color: "from-orange-500 to-red-600" },
                      { step: "05", title: "Design Handoff", description: "Deliver final designs with comprehensive documentation", icon: Rocket, color: "from-indigo-500 to-purple-600" },
                      { step: "06", title: "Support & Iteration", description: "Ongoing support and design iterations based on feedback", icon: Users, color: "from-yellow-500 to-orange-600" }
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
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B] rounded-full flex items-center justify-center text-white font-bold text-sm">
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
        <section className="py-20 px-6 bg-gradient-to-r from-[#F24E1E] to-[#FF6B6B]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Amazing Designs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your design requirements and create interfaces that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#F24E1E] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#F24E1E] transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 