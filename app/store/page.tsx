"use client"

import { useState } from 'react'
import { ShoppingCart, Download, Star, Eye, Code, Database, Globe, Shield, Zap, Package } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

const scripts = [
  {
    id: 1,
    name: "Advanced Dashboard Script",
    description: "Complete admin dashboard with analytics, user management, and real-time data visualization",
    price: 15000,
    originalPrice: 20000,
    category: "Dashboard",
    features: ["React + TypeScript", "Real-time charts", "User management", "Responsive design"],
    rating: 4.8,
    reviews: 24,
    downloads: 156,
    image: "/placeholder.jpg",
    demo: "https://demo.dashboard.com",
    icon: Code
  },
  {
    id: 2,
    name: "E-commerce ERP Module",
    description: "Complete inventory management system with order processing and analytics",
    price: 25000,
    originalPrice: 35000,
    category: "ERP",
    features: ["Inventory tracking", "Order management", "Analytics dashboard", "Multi-store support"],
    rating: 4.9,
    reviews: 18,
    downloads: 89,
    image: "/placeholder.jpg",
    demo: "https://demo.erp.com",
    icon: Database
  },
  {
    id: 3,
    name: "Social Media Automation",
    description: "Automated posting, scheduling, and analytics for all major platforms",
    price: 12000,
    originalPrice: 18000,
    category: "Automation",
    features: ["Multi-platform", "Auto-scheduling", "Analytics", "Content templates"],
    rating: 4.7,
    reviews: 31,
    downloads: 203,
    image: "/placeholder.jpg",
    demo: "https://demo.social.com",
    icon: Globe
  },
  {
    id: 4,
    name: "Security Scanner Script",
    description: "Comprehensive security vulnerability scanner with detailed reporting",
    price: 18000,
    originalPrice: 25000,
    category: "Security",
    features: ["Vulnerability scanning", "Detailed reports", "API integration", "Real-time alerts"],
    rating: 4.6,
    reviews: 15,
    downloads: 67,
    image: "/placeholder.jpg",
    demo: "https://demo.security.com",
    icon: Shield
  },
  {
    id: 5,
    name: "Performance Optimizer",
    description: "Website performance optimization script with caching and compression",
    price: 8000,
    originalPrice: 12000,
    category: "Performance",
    features: ["Caching system", "Image optimization", "Minification", "CDN integration"],
    rating: 4.5,
    reviews: 22,
    downloads: 134,
    image: "/placeholder.jpg",
    demo: "https://demo.performance.com",
    icon: Zap
  },
  {
    id: 6,
    name: "API Gateway Package",
    description: "Complete API gateway with authentication, rate limiting, and monitoring",
    price: 22000,
    originalPrice: 30000,
    category: "API",
    features: ["Authentication", "Rate limiting", "Monitoring", "Documentation"],
    rating: 4.8,
    reviews: 19,
    downloads: 78,
    image: "/placeholder.jpg",
    demo: "https://demo.api.com",
    icon: Package
  }
]

const categories = ["All", "Dashboard", "ERP", "Automation", "Security", "Performance", "API"]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<number[]>([])

  const filteredScripts = selectedCategory === "All" 
    ? scripts 
    : scripts.filter(script => script.category === selectedCategory)

  const addToCart = (scriptId: number) => {
    setCart(prev => [...prev, scriptId])
  }

  const removeFromCart = (scriptId: number) => {
    setCart(prev => prev.filter(id => id !== scriptId))
  }

  const cartTotal = scripts
    .filter(script => cart.includes(script.id))
    .reduce((total, script) => total + script.price, 0)

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Script Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premium scripts and tools to accelerate your development
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{scripts.length}</div>
                <div className="text-sm opacity-80">Available Scripts</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Downloads</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm opacity-80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed top-20 right-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 min-w-[300px]">
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">Shopping Cart</h3>
            {scripts.filter(script => cart.includes(script.id)).map(script => (
              <div key={script.id} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <div className="font-medium text-gray-800 dark:text-white">{script.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">PKR {script.price.toLocaleString()}</div>
                </div>
                <button
                  onClick={() => removeFromCart(script.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>PKR {cartTotal.toLocaleString()}</span>
              </div>
              <button className="w-full mt-3 bg-[#ef3a5d] hover:bg-[#ff6b6b] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#ef3a5d] text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scripts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScripts.map((script) => (
              <div
                key={script.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <script.icon className="h-16 w-16 text-[#ef3a5d]" />
                  </div>
                  {script.originalPrice > script.price && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {Math.round(((script.originalPrice - script.price) / script.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[#ef3a5d] bg-[#ef3a5d]/10 px-3 py-1 rounded-full">
                      {script.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{script.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-[#ef3a5d] transition-colors">
                    {script.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {script.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {script.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{script.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{script.reviews} reviews</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-800 dark:text-white">
                        PKR {script.price.toLocaleString()}
                      </span>
                      {script.originalPrice > script.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          PKR {script.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => addToCart(script.id)}
                      className="flex-1 bg-[#ef3a5d] hover:bg-[#ff6b6b] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Why Choose Our Scripts?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional-grade scripts built with modern technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef3a5d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All scripts are thoroughly tested and follow security best practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef3a5d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Instant Download</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your scripts immediately after payment with detailed documentation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef3a5d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Easy to customize and integrate with your existing projects
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </SharedLayout>
  )
} 