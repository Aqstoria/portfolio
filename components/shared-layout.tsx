"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Sun, Moon, ChevronRight, Star, MessageCircle, Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Github, ChevronDown } from 'lucide-react'
import Chatbot from './chatbot'
import { services } from '@/lib/data'

interface SharedLayoutProps {
  children: React.ReactNode
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  const navigationItems = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Services", href: "/services" },
        ...services.map(service => ({
          name: service.title,
          href: `/services/${service.slug}`
        }))
      ]
    },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Store", href: "/store" },
    { name: "Social Media", href: "/social-media" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0a1a2e]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer group">
              <Image
                src="/logo.png"
                alt="Aqstoria Logo"
                width={120}
                height={40}
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-[#ef3a5d] transition-all duration-300 font-medium relative group">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] group-hover:w-full transition-all duration-300" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isServicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-4 z-50">
                          <div className="px-4 py-2">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Our Services</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdownItems?.map((dropdownItem, index) => (
                                <a
                                  key={index}
                                  href={dropdownItem.href}
                                  className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#ef3a5d] rounded-lg transition-all duration-200"
                                >
                                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                  {dropdownItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 dark:text-gray-200 hover:text-[#ef3a5d] transition-all duration-300 font-medium relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] group-hover:w-full transition-all duration-300" />
                    </a>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-200 animate-rotate-slow" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                )}
              </button>
              <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
                Get Started
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 text-gray-700 dark:text-gray-200" /> : <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-600">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                          className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-[#ef3a5d] transition-all duration-300 font-medium"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isServicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdownItems?.map((dropdownItem, index) => (
                              <a
                                key={index}
                                href={dropdownItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-[#ef3a5d] transition-all duration-300"
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-700 dark:text-gray-200 hover:text-[#ef3a5d] transition-all duration-300 font-medium"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-bounce">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1a2e] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center cursor-pointer group">
                <Image
                  src="/logo.png"
                  alt="Aqstoria Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering businesses with innovative digital solutions. We transform ideas into powerful, scalable applications that drive growth and success.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Github, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover-bounce group"
                  >
                    <social.icon className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <a href={`/services/${service.slug}`} className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300 hover:translate-x-1 inline-block">
                      {service.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/services" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300 hover:translate-x-1 inline-block">
                    View All Services →
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/#about" },
                  { name: "Our Team", href: "/#team" },
                  { name: "Case Studies", href: "/case-studies" },
                  { name: "Blog", href: "/blog" },
                  { name: "Store", href: "/store" },
                  { name: "Social Media", href: "/social-media" },
                  { name: "Contact", href: "/#contact" }
                ].map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300 hover:translate-x-1 inline-block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-6">Get Started</h3>
                <p className="text-gray-300 mb-4">
                  Ready to transform your business? Let's discuss your project.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-bounce">
                  Request a Quote
                </button>
              </div>
              <div className="pt-6 border-t border-gray-700">
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>hello@aqstoria.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>123 Innovation Street<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2025 Aqstoria. All rights reserved. | Made with ❤️ by Aqstoria Team.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ef3a5d] transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  )
} 