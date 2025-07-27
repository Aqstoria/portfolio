"use client"

import { useState } from 'react'
import { services } from '@/lib/data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  TrendingUp, 
  Server, 
  Database, 
  Link as LinkIcon, 
  FileCode, 
  Puzzle, 
  Shield, 
  Headphones, 
  Zap, 
  CreditCard, 
  MessageCircle, 
  Globe, 
  Cpu, 
  BarChart3, 
  Monitor, 
  Camera, 
  Users, 
  Target, 
  Rocket, 
  Settings, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Award
} from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

export default function AllServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'software', name: 'Software Development', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'support', name: 'Support', icon: Shield }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const serviceStats = [
    { icon: Users, label: '500+', description: 'Happy Clients' },
    { icon: Award, label: '50+', description: 'Awards Won' },
    { icon: Clock, label: '24/7', description: 'Support Available' },
    { icon: Star, label: '4.9/5', description: 'Client Rating' }
  ]

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ef3a5d]/10 to-[#ff6b6b]/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to transform your business. 
                From custom software development to strategic marketing, we deliver excellence in every project.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {serviceStats.map((stat, index) => (
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

        {/* Category Filter */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 ${
                    hoveredService === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#ef3a5d] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-4 w-4 text-[#ef3a5d] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link href={`/services/${service.slug}`} passHref legacyBehavior>
                        <Button className="w-full bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/5 to-[#ff6b6b]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#ef3a5d] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#ef3a5d] transition-all duration-300">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project's success from concept to deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Discovery", description: "We analyze your requirements and create a detailed project plan" },
                { icon: Palette, title: "Design", description: "Our designers create beautiful, functional interfaces" },
                { icon: Code, title: "Development", description: "Expert developers build your solution with best practices" },
                { icon: Rocket, title: "Launch", description: "We deploy and maintain your project for optimal performance" }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ef3a5d] to-[#ff6b6b] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
} 