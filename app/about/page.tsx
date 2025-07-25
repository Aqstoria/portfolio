"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowLeft,
  Users,
  Target,
  Lightbulb,
  Award,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Calendar,
  Star,
  CheckCircle,
  Rocket,
  Shield,
  Heart,
  Zap,
  TrendingUp,
  Crown,
  Palette,
  Code,
  Database,
  Smartphone,
  Monitor,
  ShoppingCart,
  Settings,
  Headphones,
  Server,
  Package,
  Clock,
  BarChart3,
  Eye,
  Flame,
  FileCode,
  Puzzle,
  Link as LinkIcon,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

  const companyValues = [
    {
      icon: Target,
      title: "Innovation-Driven",
      description: "We constantly push boundaries to deliver cutting-edge solutions that set new industry standards.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Every project is an opportunity to create something extraordinary and memorable.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We maintain the highest standards of quality in every aspect of our work.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships based on trust and results.",
      color: "from-blue-600 to-blue-700",
    },
  ]

  const timeline = [
    {
      year: "2022",
      title: "Aqstoria Founded",
      description: "Aqsa Khan founded Aqstoria with a vision to deliver exceptional digital solutions.",
      icon: Rocket,
      color: "from-blue-500 to-cyan-600",
    },
    {
      year: "2022",
      title: "First Major Project",
      description: "Successfully delivered our first MERN stack e-commerce platform, achieving 500% sales increase.",
      icon: ShoppingCart,
      color: "from-cyan-500 to-teal-600",
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team to 20+ professionals, expanding expertise across multiple technologies.",
      icon: Users,
      color: "from-teal-500 to-blue-600",
    },
    {
      year: "2023",
      title: "Enterprise Solutions",
      description: "Launched enterprise-level services including ERP systems and custom software development.",
      icon: Settings,
      color: "from-blue-600 to-cyan-700",
    },
    {
      year: "2024",
      title: "International Reach",
      description: "Expanded services globally, serving clients across multiple countries and industries.",
      icon: Globe,
      color: "from-cyan-600 to-teal-700",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established as a leading digital solutions provider with 300+ successful projects.",
      icon: Star,
      color: "from-teal-600 to-blue-700",
    },
  ]

  const teamMembers = [
    {
      name: "Aqsa Khan",
      role: "CEO & Founder",
      speciality: "Strategic Leadership & MERN/MEAN Stack Development",
      image: "/placeholder.svg?height=150&width=150",
      icon: Crown,
      color: "from-blue-500 to-cyan-600",
      skills: ["MERN Stack", "MEAN Stack", "Strategic Planning", "Team Leadership"],
      experience: "5+ years",
      education: "Computer Science & Design",
    },
    {
      name: "Rania",
      role: "Chief Marketing Officer",
      speciality: "Digital Marketing Strategy & Brand Development",
      image: "/placeholder.svg?height=150&width=150",
      icon: TrendingUp,
      color: "from-cyan-500 to-teal-600",
      skills: ["Digital Marketing", "Brand Strategy", "SEO", "Social Media"],
      experience: "4+ years",
      education: "Marketing & Communications",
    },
    {
      name: "Muhammad Hassan",
      role: "Senior Software Engineer",
      speciality: "Full-Stack Development & System Architecture",
      image: "/placeholder.svg?height=150&width=150",
      icon: Code,
      color: "from-teal-500 to-blue-600",
      skills: ["React", "Node.js", "System Architecture", "API Development"],
      experience: "6+ years",
      education: "Software Engineering",
    },
    {
      name: "Fatima Ahmed",
      role: "Software Engineer",
      speciality: "Frontend Development & UI/UX Design",
      image: "/placeholder.svg?height=150&width=150",
      icon: Palette,
      color: "from-blue-600 to-cyan-700",
      skills: ["React", "Next.js", "UI/UX Design", "TypeScript"],
      experience: "3+ years",
      education: "Computer Science",
    },
    {
      name: "Ali Raza",
      role: "Software Engineer",
      speciality: "Backend Development & Database Design",
      image: "/placeholder.svg?height=150&width=150",
      icon: Database,
      color: "from-cyan-600 to-teal-700",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "API Design"],
      experience: "4+ years",
      education: "Computer Science",
    },
    {
      name: "Zainab Malik",
      role: "Software Engineer",
      speciality: "Mobile App Development & React Native",
      image: "/placeholder.svg?height=150&width=150",
      icon: Smartphone,
      color: "from-teal-600 to-blue-700",
      skills: ["React Native", "Android", "iOS", "Mobile UI/UX"],
      experience: "3+ years",
      education: "Mobile Development",
    },
  ]

  const awards = [
    {
      title: "Best Digital Agency 2023",
      organization: "Tech Awards Pakistan",
      year: "2023",
      icon: Award,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Excellence in Web Development",
      organization: "Digital Innovation Awards",
      year: "2023",
      icon: Star,
      color: "from-cyan-500 to-teal-600",
    },
    {
      title: "Top E-commerce Solutions Provider",
      organization: "E-commerce Summit",
      year: "2024",
      icon: ShoppingCart,
      color: "from-teal-500 to-blue-600",
    },
    {
      title: "Innovation in Mobile Development",
      organization: "Mobile Tech Conference",
      year: "2024",
      icon: Smartphone,
      color: "from-blue-600 to-cyan-700",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "300+", icon: Star, color: "text-blue-500" },
    { label: "Happy Clients", value: "150+", icon: Users, color: "text-cyan-600" },
    { label: "Team Members", value: "20+", icon: Users, color: "text-teal-600" },
    { label: "Years Experience", value: "5+", icon: Calendar, color: "text-blue-600" },
    { label: "Technologies", value: "25+", icon: Code, color: "text-cyan-700" },
    { label: "Countries Served", value: "10+", icon: Globe, color: "text-teal-700" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative bg-white/90 backdrop-blur-xl border-b border-gray-200/50 pt-20 pb-12 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-300 group"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              About Aqstoria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions.
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
              { key: "story", label: "Our Story", icon: Rocket },
              { key: "team", label: "Our Team", icon: Users },
              { key: "values", label: "Our Values", icon: Heart },
              { key: "timeline", label: "Timeline", icon: Calendar },
              { key: "awards", label: "Awards", icon: Award },
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
                      : "border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50/50"
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
            {/* Our Story */}
            {activeTab === "story" && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Our Journey
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      <strong className="text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Aqstoria
                      </strong>{" "}
                      was founded in 2022 by Aqsa Khan with a vision to bridge the gap between innovative technology and business success. What started as a small team of passionate developers has grown into a comprehensive digital solutions agency serving clients worldwide.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Our journey began with a simple belief: every business deserves access to world-class digital solutions. Today, we're proud to have delivered over 300 successful projects, helping businesses of all sizes transform their digital presence and achieve remarkable growth.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      From startups to enterprise-level organizations, we've built lasting partnerships based on trust, innovation, and measurable results. Our commitment to excellence and client success drives everything we do.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl p-8 shadow-2xl border border-white/20">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                          <Rocket className="h-16 w-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                          To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Our Team */}
            {activeTab === "team" && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Meet Our Expert Team
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Our diverse team of talented professionals brings together expertise in development, design, marketing, and innovation.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <Card
                      key={index}
                      className="group bg-white/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl text-center overflow-hidden"
                    >
                      <CardContent className="p-8">
                        <div className="relative mb-8">
                          <div
                            className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r ${member.color} p-1 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                          >
                            <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                              <member.icon className="h-10 w-10 text-gray-700" />
                            </div>
                          </div>
                          {member.role.includes("CEO") && (
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                              <Crown className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-3 text-sm">{member.role}</p>
                        <p className="text-gray-600 text-xs leading-relaxed mb-4">{member.speciality}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {member.experience} experience
                          </div>
                          <div className="flex items-center justify-center text-xs text-gray-500">
                            <BarChart3 className="h-3 w-3 mr-1" />
                            {member.education}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.skills.slice(0, 3).map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Our Values */}
            {activeTab === "values" && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Our Core Values
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    These principles guide everything we do and shape the way we serve our clients.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {companyValues.map((value, index) => (
                    <Card
                      key={index}
                      className="group bg-white/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <value.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            {activeTab === "timeline" && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Our Journey Through Time
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Key milestones that shaped Aqstoria into the leading digital agency it is today.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500" />

                  <div className="space-y-12">
                    {timeline.map((item, index) => (
                      <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="w-1/2 px-8">
                          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <CardContent className="p-6">
                              <div className="flex items-center mb-4">
                                <div
                                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-4 shadow-lg`}
                                >
                                  <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Timeline Dot */}
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg relative z-10" />

                        <div className="w-1/2 px-8" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Awards */}
            {activeTab === "awards" && (
              <div className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Awards & Recognition
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Recognition of our excellence and commitment to delivering outstanding digital solutions.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {awards.map((award, index) => (
                    <Card
                      key={index}
                      className="group bg-white/90 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${award.color} flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <award.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{award.title}</h3>
                            <p className="text-gray-600 text-sm">{award.organization}</p>
                            <p className="text-blue-600 font-semibold text-sm">{award.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Our Impact in Numbers
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-0 text-center hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-50/50 to-cyan-50/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Ready to Work With Us?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join our growing list of successful clients. Let's discuss how we can help transform your business with our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent font-semibold"
                asChild
              >
                <Link href="/services">
                  <Eye className="mr-2 h-4 w-4" />
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 