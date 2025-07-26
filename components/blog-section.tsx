"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ArrowRight,
  Tag,
  Filter,
  Grid,
  List,
  TrendingUp,
  Code,
  Palette,
  Smartphone,
  ShoppingCart,
  Database,
  Settings,
  Globe,
  Target,
  Lightbulb,
  Zap,
  Rocket,
  Shield,
  Award,
  Star,
  ThumbsUp,
  CheckCircle,
  MessageCircle,
  ExternalLink,
  Play,
  Github,
  ExternalLink as ExternalLinkIcon,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronRight,
  ChevronLeft,
  Quote,
  Quote as QuoteIcon,
  ThumbsUp as ThumbsUpIcon,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign,
  Users,
  Clock as ClockIcon,
  BarChart3,
  Flame,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  Github as GithubIcon,
  ExternalLink as ExternalLinkIcon2,
  Filter as FilterIcon2,
  Grid as GridIcon2,
  List as ListIcon2,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Quote as QuoteIcon2,
  ThumbsUp as ThumbsUpIcon2,
  Award as AwardIcon2,
  TrendingUp as TrendingUpIcon2,
  DollarSign as DollarSignIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Monitor,
  ShoppingCart as ShoppingCartIcon,
  Palette as PaletteIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon3,
} from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  views: number
  likes: number
  image: string
  slug: string
}

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    { id: "all", name: "All Posts", icon: Grid },
    { id: "web-development", name: "Web Development", icon: Code },
    { id: "mobile-apps", name: "Mobile Apps", icon: Smartphone },
    { id: "ui-ux", name: "UI/UX Design", icon: Palette },
    { id: "e-commerce", name: "E-commerce", icon: ShoppingCart },
    { id: "digital-marketing", name: "Digital Marketing", icon: TrendingUp },
    { id: "technology", name: "Technology", icon: Settings },
    { id: "business", name: "Business", icon: Target },
  ]

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Web Development: AI-Powered Tools and Frameworks",
      excerpt: "Discover how artificial intelligence is revolutionizing web development and what tools you should be using in 2024.",
      content: "AI is transforming every aspect of web development, from code generation to testing and deployment...",
      author: "Ahmed Khan",
      authorAvatar: "/placeholder-user.jpg",
      publishDate: "2024-03-15",
      readTime: "8 min read",
      category: "web-development",
      tags: ["AI", "Web Development", "Technology", "Frameworks"],
      featured: true,
      views: 2540,
      likes: 128,
      image: "/placeholder.jpg",
      slug: "future-web-development-ai-tools",
    },
    {
      id: "2",
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Learn the best practices for creating high-performance mobile applications that scale with your business.",
      content: "React Native has become the go-to framework for cross-platform mobile development...",
      author: "Fatima Ali",
      authorAvatar: "/placeholder-user.jpg",
      publishDate: "2024-03-10",
      readTime: "12 min read",
      category: "mobile-apps",
      tags: ["React Native", "Mobile Development", "JavaScript", "Performance"],
      featured: true,
      views: 1890,
      likes: 95,
      image: "/placeholder.jpg",
      slug: "scalable-mobile-apps-react-native",
    },
    {
      id: "3",
      title: "UX Design Principles That Drive Conversion",
      excerpt: "Explore the key user experience design principles that can significantly improve your website's conversion rates.",
      content: "User experience design is not just about aesthetics; it's about creating intuitive, efficient, and enjoyable user journeys...",
      author: "Usman Malik",
      authorAvatar: "/placeholder-user.jpg",
      publishDate: "2024-03-08",
      readTime: "10 min read",
      category: "ui-ux",
      tags: ["UX Design", "Conversion", "User Experience", "Design"],
      featured: false,
      views: 1560,
      likes: 87,
      image: "/placeholder.jpg",
      slug: "ux-design-principles-conversion",
    },
    {
      id: "4",
      title: "E-commerce Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the competition by implementing these cutting-edge e-commerce trends and technologies.",
      content: "The e-commerce landscape is constantly evolving, with new technologies and consumer behaviors shaping the industry...",
      author: "Ayesha Hassan",
      authorAvatar: "/placeholder-user.jpg",
      publishDate: "2024-03-05",
      readTime: "15 min read",
      category: "e-commerce",
      tags: ["E-commerce", "Trends", "Technology", "Business"],
      featured: true,
      views: 2100,
      likes: 112,
      image: "/placeholder.jpg",
      slug: "ecommerce-trends-2024",
    },
    {
      id: "5",
      title: "SEO Strategies for 2024: What's Working Now",
      excerpt: "Master the latest SEO techniques and strategies to improve your website's search engine rankings.",
      content: "Search engine optimization continues to evolve, with Google's algorithms becoming more sophisticated...",
      author: "Bilal Ahmed",
      authorAvatar: "/placeholder-user.jpg",
      publishDate: "2024-03-01",
      readTime: "14 min read",
      category: "digital-marketing",
      tags: ["SEO", "Digital Marketing", "Search Engines", "Strategy"],
      featured: false,
      views: 1780,
      likes: 93,
      image: "/placeholder.jpg",
      slug: "seo-strategies-2024",
    },
    {
      id: "6",
      title: "Database Optimization for High-Traffic Applications",
      excerpt: "Learn how to optimize your database performance to handle millions of users efficiently.",
      content: "Database performance is crucial for applications that serve thousands or millions of users...",
      author: "Sara Khan",
      authorAvatar: "/placeholder-user.jpg",
      publishDate: "2024-02-28",
      readTime: "11 min read",
      category: "technology",
      tags: ["Database", "Performance", "Optimization", "Backend"],
      featured: false,
      views: 1320,
      likes: 76,
      image: "/placeholder.jpg",
      slug: "database-optimization-high-traffic",
    },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category?.icon || Grid
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4">
          <Bookmark className="h-3 w-3 mr-1" />
          Latest Insights
        </Badge>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Blog & Insights
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="p-2"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="p-2"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Filter by:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-blue-600">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white/90 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishDate)}</span>
                      <Clock className="h-4 w-4 ml-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {React.createElement(getCategoryIcon(post.category), { className: "h-3 w-3 mr-1" })}
                      {categories.find(cat => cat.id === post.category)?.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h3>
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
          {regularPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className="text-xs bg-white/90">
                    {React.createElement(getCategoryIcon(post.category), { className: "h-3 w-3 mr-1" })}
                    {categories.find(cat => cat.id === post.category)?.name}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(post.publishDate)}</span>
                  <Clock className="h-3 w-3 ml-2" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16">
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Get the latest insights, tips, and trends delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 