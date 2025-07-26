"use client"

import { useState } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We specialize in custom software development, mobile app development, UI/UX design, and social media marketing. Our team creates scalable solutions that drive real business results."
  },
  {
    question: "How much does a project cost?",
    answer: "Project costs vary based on complexity and requirements. We offer free consultations to provide accurate quotes. Contact us to discuss your specific needs!"
  },
  {
    question: "How long does development take?",
    answer: "Timeline depends on project scope. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer comprehensive maintenance and support packages to ensure your digital assets continue performing optimally after launch."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern tech stack including React, Next.js, Node.js, React Native, Flutter, and more. We choose the best technology for each project's specific needs."
  }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Aqstoria AI. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(text)
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Check for FAQ matches
    for (const faq of faqData) {
      if (input.includes(faq.question.toLowerCase().split(' ')[0]) || 
          faq.question.toLowerCase().includes(input.split(' ')[0])) {
        return faq.answer
      }
    }

    // Default responses
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! How can I assist you with your project today?"
    }
    if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return "I'd be happy to help you get a quote! Please contact us at hello@aqstoria.com or call +92 300 123 4567 for a free consultation."
    }
    if (input.includes('contact') || input.includes('reach')) {
      return "You can reach us at hello@aqstoria.com or call +92 300 123 4567. We're available Monday to Friday, 9 AM to 6 PM."
    }
    if (input.includes('portfolio') || input.includes('work')) {
      return "You can view our portfolio on our website! We've completed 150+ projects across software development and digital marketing."
    }

    return "Thanks for your message! For detailed information about our services, pricing, or to start a project, please contact our team at hello@aqstoria.com or call +92 300 123 4567."
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              <span className="font-semibold">Aqstoria AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage(inputValue)
              }}
              className="flex space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ef3a5d] focus:border-transparent transition-all duration-300 text-sm"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white rounded-lg hover:from-[#d62f4f] hover:to-[#c42a47] transition-all duration-300"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
} 