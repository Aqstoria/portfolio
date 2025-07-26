"use client"

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, Code, TrendingUp, Globe, ArrowRight, Play, Pause } from 'lucide-react'
import FloatingTechIcons from './tech-globe'

interface HeroSectionProps {
  isVisible: boolean
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const [currentLetter, setCurrentLetter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  const headline = "Code Your Future. Amplify Your Brand."
  const subheadline = "Innovative software and high-ROI social media campaigns tailored for your success."

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentLetter(prev => {
          if (prev < headline.length) {
            return prev + 1
          }
          return prev
        })
      }, 100)

      return () => clearInterval(timer)
    }
  }, [isVisible, headline.length])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? '#ef3a5d' : '#ff6b6b'
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connecting lines
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          )
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(239, 58, 93, ${0.3 - distance / 300})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a2e] via-[#1a2a3e] to-[#2a3a4e]">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ zIndex: 1 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-[#ff6b6b]/20 to-[#ef3a5d]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#ef3a5d]/30 to-[#ff6b6b]/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}>
            {/* Main Headline with Letter-by-Letter Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
              {headline.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    index < currentLetter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    color: index < currentLetter ? 'white' : 'transparent'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Subheadline with Fade-in */}
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {subheadline}
            </p>

            {/* CTA Buttons with Neumorphic Styling */}
            <div className={`flex flex-col sm:flex-row gap-6 mb-12 transition-all duration-1000 delay-1500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-2xl font-semibold shadow-2xl hover:shadow-[0_20px_40px_rgba(239,58,93,0.3)] transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ef3a5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group px-8 py-4 border-2 border-[#ef3a5d] text-[#ef3a5d] rounded-2xl font-semibold hover:bg-[#ef3a5d] hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Our Work
                </span>
                <div className="absolute inset-0 bg-[#ef3a5d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-8 transition-all duration-1000 delay-2000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ef3a5d] mb-2">150+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ef3a5d] mb-2">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ef3a5d] mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Tech Icons */}
          <div className={`transform transition-all duration-2000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}>
            <FloatingTechIcons isVisible={isVisible} />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full shadow-2xl hover:shadow-[0_20px_40px_rgba(239,58,93,0.4)] transition-all duration-300 transform hover:scale-110 z-50 animate-pulse-slow"
        title="Contact us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#ef3a5d] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#ef3a5d] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
} 