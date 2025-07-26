"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Maximize2,
  Phone,
  Mail,
  Clock,
  User,
  Bot,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Star,
  ThumbsUp,
  ThumbsDown,
  Smile,
  FileText,
  Settings,
  Headphones,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  ShoppingCart,
  Palette,
  Code,
  Database,
  TrendingUp,
  Search,
} from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "quick-reply" | "service-info"
  quickReplies?: string[]
  serviceInfo?: {
    title: string
    description: string
    icon: any
    price: string
  }
}

interface ChatState {
  isOpen: boolean
  isMinimized: boolean
  messages: Message[]
  isTyping: boolean
  unreadCount: number
}

export default function LiveChat() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    isMinimized: false,
    messages: [],
    isTyping: false,
    unreadCount: 0,
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications",
      icon: Monitor,
      price: "PKR 15,000 - 150,000",
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android applications",
      icon: Smartphone,
      price: "PKR 75,000 - 300,000",
    },
    {
      title: "E-commerce",
      description: "Online stores and shopping platforms",
      icon: ShoppingCart,
      price: "PKR 25,000 - 100,000",
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design",
      icon: Palette,
      price: "PKR 10,000 - 50,000",
    },
    {
      title: "Digital Marketing",
      description: "SEO, PPC, and social media marketing",
      icon: TrendingUp,
      price: "PKR 20,000 - 80,000",
    },
  ]

  const quickReplies = [
    "Tell me about your services",
    "What are your prices?",
    "How long does a project take?",
    "Can you work with my existing system?",
    "I want to start a project",
    "Contact sales team",
  ]

  const botResponses = {
    greeting: [
      "Hello! 👋 Welcome to Aqstoria. How can I help you today?",
      "Hi there! I'm here to assist you with our digital services. What would you like to know?",
      "Welcome! I can help you with web development, mobile apps, e-commerce, and more. What interests you?",
    ],
    services: [
      "We offer comprehensive digital solutions including web development, mobile apps, e-commerce, UI/UX design, and digital marketing.",
      "Our services range from basic websites to complex enterprise solutions. What type of project do you have in mind?",
    ],
    pricing: [
      "Our pricing is project-based and transparent. Basic websites start at PKR 15,000, while complex applications can go up to PKR 300,000.",
      "We offer three tiers: Basic (PKR 15,000), Professional (PKR 50,000), and Enterprise (PKR 150,000). Would you like a custom quote?",
    ],
    timeline: [
      "Project timelines vary by complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months.",
      "We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
    ],
    contact: [
      "Great! I can connect you with our sales team. You can also reach us directly at +92 300 123 4567 or info@aqstoria.com",
      "Perfect! Our team will get back to you within 24 hours with a customized proposal.",
    ],
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatState.messages])

  const addMessage = (text: string, sender: "user" | "bot", type: "text" | "quick-reply" | "service-info" = "text", quickReplies?: string[], serviceInfo?: any) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
      quickReplies,
      serviceInfo,
    }

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      unreadCount: prev.isOpen ? 0 : prev.unreadCount + 1,
    }))
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    addMessage(text, "user")

    // Simulate bot typing
    setChatState(prev => ({ ...prev, isTyping: true }))

    // Generate bot response
    setTimeout(() => {
      setChatState(prev => ({ ...prev, isTyping: false }))
      
      const lowerText = text.toLowerCase()
      
      if (lowerText.includes("service") || lowerText.includes("offer")) {
        addMessage(botResponses.services[0], "bot")
        setTimeout(() => {
          addMessage("Here are our main services:", "bot", "service-info")
        }, 1000)
      } else if (lowerText.includes("price") || lowerText.includes("cost")) {
        addMessage(botResponses.pricing[0], "bot")
        setTimeout(() => {
          addMessage("Would you like me to connect you with our sales team for a custom quote?", "bot", "quick-reply", ["Yes, please", "Not right now"])
        }, 1000)
      } else if (lowerText.includes("time") || lowerText.includes("duration")) {
        addMessage(botResponses.timeline[0], "bot")
      } else if (lowerText.includes("contact") || lowerText.includes("sales")) {
        addMessage(botResponses.contact[0], "bot")
        setTimeout(() => {
          addMessage("You can also reach us on WhatsApp: +92 300 123 4567", "bot")
        }, 1000)
      } else if (lowerText.includes("start") || lowerText.includes("project")) {
        addMessage("Excellent! I'd be happy to help you start your project.", "bot")
        setTimeout(() => {
          addMessage("What type of project are you looking for?", "bot", "quick-reply", ["Web Development", "Mobile App", "E-commerce", "Design", "Marketing"])
        }, 1000)
      } else {
        addMessage("I understand you're interested in our services. Let me help you better.", "bot")
        setTimeout(() => {
          addMessage("What would you like to know more about?", "bot", "quick-reply", quickReplies)
        }, 1000)
      }
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    addMessage(reply, "user")
    setTimeout(() => {
      handleSendMessage(reply)
    }, 500)
  }

  const handleServiceSelect = (service: any) => {
    addMessage(`I'm interested in ${service.title}`, "user")
    setTimeout(() => {
      addMessage(`Great choice! ${service.title} typically costs ${service.price}. Would you like a detailed quote?`, "bot")
      setTimeout(() => {
        addMessage("I can connect you with our team right now.", "bot", "quick-reply", ["Yes, connect me", "Send me more info", "Schedule a call"])
      }, 1000)
    }, 1000)
  }

  const toggleChat = () => {
    setChatState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      isMinimized: false,
      unreadCount: 0,
    }))
  }

  const toggleMinimize = () => {
    setChatState(prev => ({
      ...prev,
      isMinimized: !prev.isMinimized,
    }))
  }

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/923001234567", "_blank")
  }

  const handleEmailRedirect = () => {
    window.open("mailto:info@aqstoria.com", "_blank")
  }

  const handlePhoneRedirect = () => {
    window.open("tel:+923001234567", "_blank")
  }

  // Auto-start chat when opened
  useEffect(() => {
    if (chatState.isOpen && chatState.messages.length === 0) {
      setTimeout(() => {
        addMessage(botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)], "bot")
        setTimeout(() => {
          addMessage("How can I assist you today?", "bot", "quick-reply", quickReplies.slice(0, 4))
        }, 1000)
      }, 500)
    }
  }, [chatState.isOpen])

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
          {chatState.unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {chatState.unreadCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {chatState.isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px]">
          <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Aqstoria Support</CardTitle>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMinimize}
                    className="text-white hover:bg-white/20"
                  >
                    {chatState.isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleChat}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!chatState.isMinimized && (
              <>
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {chatState.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === "bot" && (
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <Bot className="h-3 w-3 text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm">{message.text}</p>
                            <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                              <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                              {message.sender === "user" && <CheckCircle className="h-3 w-3" />}
                            </div>
                          </div>
                        </div>

                        {/* Quick Replies */}
                        {message.type === "quick-reply" && message.quickReplies && (
                          <div className="mt-3 space-y-2">
                            {message.quickReplies.map((reply, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuickReply(reply)}
                                className="w-full text-xs border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                              >
                                {reply}
                              </Button>
                            ))}
                          </div>
                        )}

                        {/* Service Info */}
                        {message.type === "service-info" && (
                          <div className="mt-3 space-y-2">
                            {services.map((service, index) => (
                              <div
                                key={index}
                                className="p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                                onClick={() => handleServiceSelect(service)}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <service.icon className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-sm">{service.title}</h4>
                                    <p className="text-xs text-gray-600">{service.description}</p>
                                    <p className="text-xs text-blue-600 font-medium">{service.price}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {chatState.isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex space-x-2 mb-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleWhatsAppRedirect}
                      className="flex-1 text-xs bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                    >
                      <MessageCircle className="h-3 w-3 mr-1" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePhoneRedirect}
                      className="flex-1 text-xs bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleEmailRedirect}
                      className="flex-1 text-xs bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </Button>
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      placeholder="Type your message..."
                      className="flex-1 text-sm"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage(e.currentTarget.value)
                          e.currentTarget.value = ""
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      onClick={() => {
                        if (inputRef.current) {
                          handleSendMessage(inputRef.current.value)
                          inputRef.current.value = ""
                        }
                      }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  )
} 