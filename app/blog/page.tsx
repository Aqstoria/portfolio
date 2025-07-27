"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  Search, 
  Filter, 
  Tag, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  TrendingUp,
  Code,
  Palette,
  Smartphone,
  Globe,
  BarChart3,
  Zap,
  Award,
  FileText,
  MessageCircle,
  Download,
  Play,
  Pause,
  Bookmark,
  ExternalLink,
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
  Sparkles,
  Star,
  CheckCircle,
  Target,
  Users,
  TrendingUp as TrendingUpIcon
} from "lucide-react"
import SharedLayout from '@/components/shared-layout'

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [currentFeatured, setCurrentFeatured] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 UX Trends That Will Dominate 2025",
      excerpt: "Discover the top user experience trends that will shape digital products in 2025, from AI-powered interfaces to immersive experiences.",
      content: "The landscape of user experience design is constantly evolving, driven by technological advancements and changing user expectations. As we approach 2025, several key trends are emerging that will fundamentally reshape how we design and interact with digital products...",
      author: "Aqsa Khan",
      authorImage: "/placeholder-user.jpg",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "design",
      tags: ["UX Design", "UI Trends", "2025", "Digital Design"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
      views: 2450,
      likes: 128,
      comments: 32
    },
    {
      id: 2,
      title: "How AI is Transforming Digital Marketing in 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing strategies and creating new opportunities for businesses.",
      content: "Artificial Intelligence has become the cornerstone of modern digital marketing, offering unprecedented capabilities in personalization, automation, and data analysis. From predictive analytics to automated content creation, AI is reshaping how businesses connect with their audiences...",
      author: "Ali Raza",
      authorImage: "/placeholder-user.jpg",
      date: "2024-12-10",
      readTime: "12 min read",
      category: "marketing",
      tags: ["AI", "Digital Marketing", "Automation", "Personalization"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
      views: 1890,
      likes: 95,
      comments: 28
    },
    {
      id: 3,
      title: "Building Scalable Web Applications with Next.js 14",
      excerpt: "A comprehensive guide to architecting robust, scalable web applications using Next.js 14 and modern development practices.",
      content: "Next.js 14 introduces groundbreaking features that make building scalable web applications easier than ever. From the new App Router to improved performance optimizations, developers now have powerful tools at their disposal...",
      author: "Sara Ahmed",
      authorImage: "/placeholder-user.jpg",
      date: "2024-12-05",
      readTime: "15 min read",
      category: "development",
      tags: ["Next.js", "React", "Web Development", "Performance"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
      views: 1560,
      likes: 87,
      comments: 24
    },
    {
      id: 4,
      title: "The Future of E-commerce: Trends to Watch in 2025",
      excerpt: "Discover the emerging trends that will shape the future of e-commerce and how businesses can prepare for the next wave of innovation.",
      content: "E-commerce is undergoing a dramatic transformation, driven by changing consumer behaviors, technological advancements, and new business models. As we look toward 2025, several key trends are emerging that will redefine the online shopping experience...",
      author: "Bilal Hussain",
      authorImage: "/placeholder-user.jpg",
      date: "2024-11-28",
      readTime: "10 min read",
      category: "ecommerce",
      tags: ["E-commerce", "Retail", "Digital Transformation", "Customer Experience"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
      views: 1320,
      likes: 76,
      comments: 19
    },
    {
      id: 5,
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A detailed comparison of native and cross-platform mobile app development approaches, helping you choose the right strategy for your project.",
      content: "Choosing between native and cross-platform mobile app development is one of the most critical decisions in mobile development. Each approach offers unique advantages and trade-offs that can significantly impact your project's success...",
      author: "Fatima Zahra",
      authorImage: "/placeholder-user.jpg",
      date: "2024-11-20",
      readTime: "14 min read",
      category: "development",
      tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
      views: 1180,
      likes: 65,
      comments: 16
    },
    {
      id: 6,
      title: "Social Media Marketing Strategies for 2024",
      excerpt: "Comprehensive guide to effective social media marketing strategies that drive engagement and conversions in 2024.",
      content: "Social media marketing continues to evolve rapidly, with new platforms, features, and algorithms constantly changing the landscape. To succeed in 2024, marketers need to adapt their strategies to meet these new challenges...",
      author: "Usman Hassan",
      authorImage: "/placeholder-user.jpg",
      date: "2024-11-15",
      readTime: "11 min read",
      category: "marketing",
      tags: ["Social Media", "Digital Marketing", "Content Strategy", "Engagement"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
      views: 980,
      likes: 54,
      comments: 12
    },
    {
      id: 7,
      title: "Cloud Computing: Choosing the Right Platform for Your Business",
      excerpt: "A strategic guide to selecting the optimal cloud computing platform based on your business needs and technical requirements.",
      content: "Cloud computing has become the foundation of modern business infrastructure, offering scalability, flexibility, and cost-effectiveness. However, choosing the right cloud platform can be overwhelming given the numerous options available...",
      author: "Ayesha Khan",
      authorImage: "/placeholder-user.jpg",
      date: "2024-11-10",
      readTime: "13 min read",
      category: "technology",
      tags: ["Cloud Computing", "AWS", "Azure", "Google Cloud", "Infrastructure"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
      views: 890,
      likes: 48,
      comments: 10
    },
    {
      id: 8,
      title: "The Psychology of Color in Web Design",
      excerpt: "Understanding how color psychology influences user behavior and how to use it effectively in web design.",
      content: "Color is one of the most powerful tools in web design, capable of influencing user emotions, behavior, and decision-making. Understanding color psychology and its application in web design can significantly impact your website's effectiveness...",
      author: "Hassan Ali",
      authorImage: "/placeholder-user.jpg",
      date: "2024-11-05",
      readTime: "9 min read",
      category: "design",
      tags: ["Color Theory", "Web Design", "Psychology", "User Experience"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
      views: 750,
      likes: 42,
      comments: 8
    }
  ]

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length, icon: BookOpen },
    { id: "design", name: "Design", count: blogPosts.filter(p => p.category === "design").length, icon: Palette },
    { id: "development", name: "Development", count: blogPosts.filter(p => p.category === "development").length, icon: Code },
    { id: "marketing", name: "Marketing", count: blogPosts.filter(p => p.category === "marketing").length, icon: TrendingUpIcon },
    { id: "ecommerce", name: "E-commerce", count: blogPosts.filter(p => p.category === "ecommerce").length, icon: Globe },
    { id: "technology", name: "Technology", count: blogPosts.filter(p => p.category === "technology").length, icon: Zap }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, featuredPosts.length])

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#f8f1e9] to-[#e8f4f8] dark:from-[#0a1a2e] dark:to-[#1a2a3e] transition-all duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0a1a2e] dark:text-white">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, trends, and expert perspectives on digital innovation, technology, and business growth
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover-bounce ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name} ({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our most popular and insightful content
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentFeatured * 100}%)` }}
                >
                  {featuredPosts.map((post, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-[#ef3a5d]/20 text-[#ef3a5d] rounded-full text-sm font-semibold">
                              {post.category.toUpperCase()}
                            </span>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-[#0a1a2e] dark:text-white">
                            {post.title}
                          </h3>
                          
                          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-[#ef3a5d]/10 text-[#ef3a5d] rounded-full text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Eye className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-500">{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Heart className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-500">{post.likes}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MessageSquare className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-500">{post.comments}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
                              Read Article
                            </button>
                            <button className="px-8 py-4 border-2 border-[#ef3a5d] text-[#ef3a5d] rounded-2xl font-semibold hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                              <Bookmark className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="aspect-video bg-gradient-to-br from-[#0a1a2e] to-[#1a2a3e] rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <FileText className="h-16 w-16 text-white opacity-80" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={() => setCurrentFeatured((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-[#ef3a5d]" />
              </button>
              <button 
                onClick={() => setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length)}
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
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay updated with the latest insights and trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group relative glassmorphism p-6 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#0a1a2e] to-[#1a2a3e] rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-white opacity-60" />
                  </div>
                </div>

                {/* Post Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#ef3a5d]/20 text-[#ef3a5d] rounded-full text-xs font-semibold">
                      {post.category.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a1a2e] dark:text-white group-hover:text-[#ef3a5d] transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#ef3a5d]/10 text-[#ef3a5d] rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0a1a2e] dark:text-white">{post.author}</div>
                        <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover-bounce">
                      Read More
                    </button>
                    <button className="px-4 py-3 border border-[#ef3a5d] text-[#ef3a5d] rounded-xl font-semibold hover:bg-[#ef3a5d] hover:text-white transition-all duration-300">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white shadow-lg"
                        : "border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#0a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0a1a2e] dark:text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get the latest insights delivered to your inbox. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      </div>
    </SharedLayout>
  )
} 