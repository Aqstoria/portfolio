"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(239, 58, 93, 0.3), rgba(214, 47, 79, 0.3), transparent 70%)`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ef3a5d]/10 to-[#d62f4f]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#ef3a5d]/10 to-[#c42a47]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group">
              <Image
                src="/logo.png"
                alt="Aqstoria Logo"
                width={120}
                height={40}
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex items-center space-x-4">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] hover:from-[#d62f4f] hover:to-[#c42a47] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Centered Logo */}
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 text-center">
          {/* Logo Container */}
          <div className={`transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
          }`}>
            <div className="relative">
              {/* Main Logo */}
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="Aqstoria Logo"
                  width={300}
                  height={100}
                  className="h-24 w-auto filter drop-shadow-2xl transform hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Subtitle */}
              <div className={`transform transition-all duration-2000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}>
                <p className="text-xl text-gray-600 font-light tracking-wide">
                  Digital Excellence
                </p>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-8 -right-8 w-6 h-6 bg-[#ef3a5d] rounded-full animate-bounce`} style={{ animationDelay: '1s' }} />
              <div className={`absolute -bottom-8 -left-8 w-4 h-4 bg-[#d62f4f] rounded-full animate-bounce`} style={{ animationDelay: '2s' }} />
              <div className={`absolute top-1/2 -right-12 w-3 h-3 bg-[#c42a47] rounded-full animate-pulse`} style={{ animationDelay: '3s' }} />
              <div className={`absolute top-1/2 -left-12 w-5 h-5 bg-[#ef3a5d] rounded-full animate-pulse`} style={{ animationDelay: '4s' }} />
            </div>
          </div>

          {/* Contact Button */}
          <div className={`transform transition-all duration-2000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 mt-12 bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] hover:from-[#d62f4f] hover:to-[#c42a47] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
