"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight, BarChart, Code, Database, Cloud, Shield, Zap, Users, Clock, Star, MessageCircle, Download, Play, BookOpen, Target, Rocket } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'

export default function DigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: BarChart,
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO strategies to improve your website's search engine rankings",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all major platforms",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: "Content Marketing",
      description: "Engaging content strategies that drive traffic and conversions",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Targeted email campaigns with high conversion rates",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Target,
      title: "PPC & Google Ads",
      description: "Pay-per-click campaigns that deliver measurable ROI",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and detailed performance reports",
      color: "from-yellow-500 to-orange-600"
    }
  ]

  const tools = [
    { name: "Google Analytics", category: "Analytics", icon: "📊" },
    { name: "Google Ads", category: "PPC", icon: "💰" },
    { name: "Facebook Ads", category: "Social", icon: "📘" },
    { name: "Mailchimp", category: "Email", icon: "📧" },
    { name: "SEMrush", category: "SEO", icon: "🔍" },
    { name: "Hootsuite", category: "Social", icon: "🦉" },
    { name: "Canva", category: "Design", icon: "🎨" },
    { name: "HubSpot", category: "CRM", icon: "🔄" },
    { name: "Ahrefs", category: "SEO", icon: "📈" },
    { name: "Buffer", category: "Social", icon: "📱" }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "PKR 30,000",
      duration: "per month",
      features: [
        "Basic SEO optimization",
        "Social media management (3 platforms)",
        "Content creation (4 posts/week)",
        "Email marketing campaigns",
        "Monthly performance report",
        "Basic analytics"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Professional",
      price: "PKR 75,000",
      duration: "per month",
      features: [
        "Comprehensive SEO strategy",
        "Social media management (5 platforms)",
        "Content creation (6 posts/week)",
        "PPC campaign management",
        "Email marketing automation",
        "Weekly performance reports"
      ],
      color: "from-purple-500 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "PKR 150,000",
      duration: "per month",
      features: [
        "Full digital marketing suite",
        "Unlimited social media platforms",
        "Premium content creation",
        "Advanced PPC campaigns",
        "Marketing automation",
        "Daily performance monitoring"
      ],
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 to-[#FF8E53]/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-2xl flex items-center justify-center shadow-xl">
                  <BarChart className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent mb-6">
                Digital Marketing
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Strategic marketing campaigns that drive traffic, engagement, and conversions. 
                We help businesses grow their online presence and achieve measurable results.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, label: "200+", description: "Campaigns Managed" },
                { icon: Clock, label: "24/7", description: "Support Available" },
                { icon: Star, label: "4.9/5", description: "Client Rating" },
                { icon: Zap, label: "300%", description: "Average ROI" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-[#FF6B6B]" />
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
                        ? `bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white shadow-lg`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/10"
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                      Why Choose Our Digital Marketing?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We specialize in creating data-driven digital marketing strategies that deliver measurable results and drive business growth.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Transform Your Business with Digital Marketing
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Our digital marketing services are designed to help businesses establish a strong online presence, 
                        reach their target audience, and drive measurable results. We combine creativity with data-driven 
                        strategies to maximize your ROI.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        From startups to enterprise-level organizations, we've managed over 200 successful marketing campaigns 
                        that have helped businesses increase their online visibility, improve customer engagement, and boost 
                        sales. Our approach combines cutting-edge tools with proven marketing methodologies.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Get Free Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#FF6B6B] text-[#FF6B6B] font-semibold px-8 py-4 rounded-xl hover:bg-[#FF6B6B] hover:text-white transition-all duration-300">
                          View Case Studies
                        </Button>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF8E53]/10 rounded-3xl p-8 shadow-2xl border border-[#FF6B6B]/20">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                            <BarChart className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Expertise</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF6B6B] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">SEO optimization</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF6B6B] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Social media marketing</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF6B6B] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">PPC campaigns</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-[#FF6B6B] mr-3" />
                              <span className="text-gray-700 dark:text-gray-300">Content marketing</span>
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                      Comprehensive Features
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Our digital marketing includes a wide range of features designed to meet your business needs.
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                      Tools We Use
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We leverage the latest digital marketing tools and platforms to deliver exceptional results.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {['Analytics', 'PPC', 'Social', 'Email', 'SEO', 'Design', 'CRM'].map((category) => (
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
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
                          plan.popular ? 'ring-2 ring-[#FF6B6B]' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white px-4 py-2">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                              {plan.price}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{plan.duration}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#FF6B6B] mr-3 flex-shrink-0" />
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
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                      Our Marketing Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      We follow a proven methodology to ensure your marketing campaign's success from strategy to execution.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { step: "01", title: "Research & Analysis", description: "We analyze your market, competitors, and target audience", icon: Target, color: "from-blue-500 to-cyan-600" },
                      { step: "02", title: "Strategy Development", description: "Create comprehensive marketing strategies tailored to your goals", icon: BookOpen, color: "from-green-500 to-emerald-600" },
                      { step: "03", title: "Campaign Execution", description: "Implement campaigns across all relevant channels", icon: BarChart, color: "from-purple-500 to-pink-600" },
                      { step: "04", title: "Monitoring & Optimization", description: "Track performance and optimize campaigns for better results", icon: Shield, color: "from-orange-500 to-red-600" },
                      { step: "05", title: "Reporting & Analysis", description: "Provide detailed reports and insights for decision making", icon: Rocket, color: "from-indigo-500 to-purple-600" },
                      { step: "06", title: "Continuous Improvement", description: "Ongoing optimization and strategy refinement", icon: Users, color: "from-yellow-500 to-orange-600" }
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
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-full flex items-center justify-center text-white font-bold text-sm">
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
        <section className="py-20 px-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your marketing goals and create campaigns that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#FF6B6B] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#FF6B6B] transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 