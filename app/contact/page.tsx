"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Star,
  Users,
  Calendar,
  Globe,
  Target,
  Lightbulb,
  Heart,
  Award,
  Clock as ClockIcon,
  BarChart3,
  Flame,
  ExternalLink,
  ArrowRight,
  Play,
  Github,
  ExternalLink as ExternalLinkIcon,
  Filter,
  Grid,
  List,
  ChevronRight,
  ChevronLeft,
  Quote,
  ThumbsUp,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  ShoppingCart as ShoppingCartIcon,
  Palette as PaletteIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon2,
  FileText,
  Upload,
  Download,
  Info,
  HelpCircle,
  AlertCircle,
  Check,
  X,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon2,
  Globe as GlobeIcon2,
  MessageSquare,
  Calendar as CalendarIcon,
  User,
  Building,
  Smartphone,
  Monitor,
  ShoppingCart,
  Palette,
  Code,
  Database,
  Settings,
  Search,
  TrendingUp,
  Zap,
  CreditCard,
  FileCode,
  Puzzle,
  Server,
  Package,
  Headphones,
  Shield,
  Rocket,
  Eye,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Users as UsersIcon2,
  Calendar as CalendarIcon2,
  Globe as GlobeIcon3,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  Heart as HeartIcon,
  Award as AwardIcon2,
  Clock as ClockIcon3,
  BarChart3 as BarChart3Icon,
  Flame as FlameIcon,
  ExternalLink as ExternalLinkIcon2,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  Github as GithubIcon,
  ExternalLink as ExternalLinkIcon3,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Quote as QuoteIcon,
  ThumbsUp as ThumbsUpIcon,
  Award as AwardIcon3,
  TrendingUp as TrendingUpIcon3,
  DollarSign as DollarSignIcon,
  Users as UsersIcon3,
  Globe as GlobeIcon4,
  Smartphone as SmartphoneIcon2,
  Monitor as MonitorIcon2,
  ShoppingCart as ShoppingCartIcon2,
  Palette as PaletteIcon2,
  Code as CodeIcon2,
  Database as DatabaseIcon2,
  Settings as SettingsIcon2,
  Search as SearchIcon2,
  TrendingUp as TrendingUpIcon4,
  FileText as FileTextIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  AlertCircle as AlertCircleIcon,
  Check as CheckIcon,
  X as XIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Youtube as YoutubeIcon,
  Mail as MailIcon2,
  Phone as PhoneIcon2,
  MapPin as MapPinIcon2,
  Clock as ClockIcon4,
  Globe as GlobeIcon5,
  MessageSquare as MessageSquareIcon,
  Calendar as CalendarIcon3,
  User as UserIcon,
  Building as BuildingIcon,
} from "lucide-react"
import Link from "next/link"
import SharedLayout from '@/components/shared-layout'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 123 4567",
      description: "Call us directly for immediate assistance",
      color: "from-blue-500 to-blue-600",
      action: "Call Now",
      href: "tel:+923001234567",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@aqstoria.com",
      description: "Send us an email for detailed inquiries",
      color: "from-cyan-500 to-cyan-600",
      action: "Send Email",
      href: "mailto:info@aqstoria.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92 300 123 4567",
      description: "Quick chat for instant responses",
      color: "from-green-500 to-green-600",
      action: "WhatsApp",
      href: "https://wa.me/923001234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Lahore, Pakistan",
      description: "Visit our office for face-to-face meetings",
      color: "from-purple-500 to-purple-600",
      action: "Get Directions",
      href: "https://maps.google.com",
    },
  ]

  const officeLocations = [
    {
      city: "Lahore",
      address: "Gulberg III, Lahore, Pakistan",
      phone: "+92 300 123 4567",
      email: "lahore@aqstoria.com",
      hours: "Mon-Fri: 9AM-6PM",
      color: "from-blue-500 to-cyan-600",
    },
    {
      city: "Karachi",
      address: "Clifton, Karachi, Pakistan",
      phone: "+92 300 123 4568",
      email: "karachi@aqstoria.com",
      hours: "Mon-Fri: 9AM-6PM",
      color: "from-cyan-500 to-teal-600",
    },
    {
      city: "Islamabad",
      address: "Blue Area, Islamabad, Pakistan",
      phone: "+92 300 123 4569",
      email: "islamabad@aqstoria.com",
      hours: "Mon-Fri: 9AM-6PM",
      color: "from-teal-500 to-blue-600",
    },
  ]

  const faqs = [
    {
      question: "What services does Aqstoria offer?",
      answer: "We offer comprehensive digital solutions including web development (MERN/MEAN stack), mobile app development, e-commerce solutions, UI/UX design, digital marketing, and SEO services. Our team specializes in creating custom solutions tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex e-commerce platforms can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and project-based. We offer three tiers: Basic (PKR 15,000), Professional (PKR 50,000), and Enterprise (PKR 150,000). Custom projects are quoted individually based on your specific requirements and scope.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, security monitoring, and technical support. Our support plans range from 1 month to 6 months depending on your needs.",
    },
    {
      question: "Can you work with existing systems?",
      answer: "Absolutely! We can integrate with your existing systems, migrate data, and enhance current platforms. Our team is experienced in working with various technologies and can ensure seamless integration.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Angular, Node.js, MongoDB, PostgreSQL, React Native, Flutter, and more. We choose the best technology stack for each project based on requirements.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we offer complete hosting solutions including domain registration, SSL certificates, and cloud hosting. We can also work with your existing hosting provider if preferred.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, testing protocols, and quality assurance processes. Our projects go through multiple testing phases and we provide comprehensive documentation.",
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-cyan-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/923001234567", color: "hover:text-green-500" },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
  }

  return (
    <SharedLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Header */}
        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 pt-20 pb-12 shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <Button
              variant="ghost"
              asChild
              className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/50 transition-all duration-300 group"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
            </Button>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to start your project? Let's discuss how we can help transform your business with our digital solutions.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="relative py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { key: "contact", label: "Contact Form", icon: MessageCircle },
                { key: "locations", label: "Our Locations", icon: MapPin },
                { key: "faq", label: "FAQ", icon: HelpCircle },
              ].map((tab) => (
                <Button
                  key={tab.key}
                  variant={activeTab === tab.key ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold
                    ${
                      activeTab === tab.key
                        ? `bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border-0`
                        : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/50"
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
              {/* Contact Form */}
              {activeTab === "contact" && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Let's Start Your Project
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours with a customized proposal.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Send us a Message</CardTitle>
                          <p className="text-gray-600 dark:text-gray-400">We'll respond within 24 hours</p>
                        </CardHeader>
                        <CardContent>
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Full Name *
                                </Label>
                                <Input
                                  id="name"
                                  value={formData.name}
                                  onChange={(e) => handleInputChange("name", e.target.value)}
                                  placeholder="Your full name"
                                  className="mt-2"
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Email Address *
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => handleInputChange("email", e.target.value)}
                                  placeholder="your@email.com"
                                  className="mt-2"
                                  required
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Phone Number
                                </Label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange("phone", e.target.value)}
                                  placeholder="+92 300 123 4567"
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label htmlFor="company" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Company Name
                                </Label>
                                <Input
                                  id="company"
                                  value={formData.company}
                                  onChange={(e) => handleInputChange("company", e.target.value)}
                                  placeholder="Your company name"
                                  className="mt-2"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="service" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Service Required *
                                </Label>
                                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                                  <SelectTrigger className="mt-2">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="web-development">Web Development</SelectItem>
                                    <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                                    <SelectItem value="ecommerce">E-commerce Development</SelectItem>
                                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                    <SelectItem value="seo">SEO & Analytics</SelectItem>
                                    <SelectItem value="consultation">Consultation</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="budget" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Budget Range
                                </Label>
                                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                                  <SelectTrigger className="mt-2">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="under-25k">Under PKR 25,000</SelectItem>
                                    <SelectItem value="25k-50k">PKR 25,000 - 50,000</SelectItem>
                                    <SelectItem value="50k-100k">PKR 50,000 - 100,000</SelectItem>
                                    <SelectItem value="100k-200k">PKR 100,000 - 200,000</SelectItem>
                                    <SelectItem value="over-200k">Over PKR 200,000</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                Project Details *
                              </Label>
                              <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                                className="mt-2 min-h-[120px]"
                                required
                              />
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="newsletter"
                                checked={formData.newsletter}
                                onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                              />
                              <Label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-400">
                                Subscribe to our newsletter for updates and insights
                              </Label>
                            </div>

                            <Button
                              type="submit"
                              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                            >
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                          {contactMethods.map((method, index) => (
                            <Card
                              key={index}
                              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                              <CardContent className="p-6">
                                <div className="flex items-center">
                                  <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    <method.icon className="h-6 w-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{method.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{method.description}</p>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{method.value}</p>
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/50"
                                    onClick={() => window.open(method.href, "_blank")}
                                  >
                                    {method.action}
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-3">
                          {socialLinks.map((social, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="w-10 h-10 p-0 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                              onClick={() => window.open(social.href, "_blank")}
                              title={social.name}
                            >
                              <social.icon className="h-4 w-4" />
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Office Locations */}
              {activeTab === "locations" && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Our Office Locations
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Visit us at any of our offices across Pakistan for face-to-face consultations and meetings.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {officeLocations.map((location, index) => (
                      <Card
                        key={index}
                        className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                      >
                        <div className={`h-2 bg-gradient-to-r ${location.color} transition-all duration-300 group-hover:h-3`} />
                        <CardContent className="p-6">
                          <div className="text-center mb-6">
                            <div
                              className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${location.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Building className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{location.city}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{location.address}</p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-blue-500 mr-3" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{location.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-blue-500 mr-3" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{location.email}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-blue-500 mr-3" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{location.hours}</span>
                            </div>
                          </div>

                          <Button
                            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                            onClick={() => window.open("https://maps.google.com", "_blank")}
                          >
                            <MapPin className="mr-2 h-4 w-4" />
                            Get Directions
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {activeTab === "faq" && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Find answers to common questions about our services, processes, and policies.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    </div>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <Card
                          key={index}
                          className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                            >
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                                {faq.question}
                              </h3>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-8 w-8 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                              >
                                {expandedFaq === index ? (
                                  <Minus className="h-4 w-4 text-blue-600" />
                                ) : (
                                  <Plus className="h-4 w-4 text-blue-600" />
                                )}
                              </Button>
                            </div>
                            {expandedFaq === index && (
                              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:to-cyan-900/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Ready to Start Your Project?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Don't wait! Get in touch with us today and let's discuss how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                  onClick={() => setActiveTab("contact")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent font-semibold dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                  onClick={() => window.open("https://wa.me/923001234567", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
} 