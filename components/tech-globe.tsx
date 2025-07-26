"use client"

import { useState, useEffect, useRef } from 'react'
import { 
  Code, 
  Cpu, 
  Server, 
  Box, 
  Database, 
  Database2, 
  Cloud, 
  Zap, 
  Palette, 
  Layers, 
  GitBranch, 
  ShoppingBag, 
  Globe 
} from 'lucide-react'

interface TechIcon {
  id: string
  icon: any
  name: string
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'design' | 'tools'
  position: { x: number; y: number; z: number }
  color: string
}

const techStack: TechIcon[] = [
  // Frontend
  { id: 'react', icon: Cpu, name: 'React', category: 'frontend', position: { x: 0.8, y: 0.2, z: 0.6 }, color: '#61DAFB' },
  { id: 'typescript', icon: Code, name: 'TypeScript', category: 'frontend', position: { x: -0.7, y: 0.3, z: 0.7 }, color: '#3178C6' },
  { id: 'nextjs', icon: Code, name: 'Next.js', category: 'frontend', position: { x: 0.6, y: -0.4, z: 0.7 }, color: '#000000' },
  
  // Backend
  { id: 'nodejs', icon: Server, name: 'Node.js', category: 'backend', position: { x: -0.8, y: -0.2, z: 0.6 }, color: '#339933' },
  { id: 'python', icon: Box, name: 'Python', category: 'backend', position: { x: 0.3, y: 0.8, z: 0.5 }, color: '#3776AB' },
  { id: 'docker', icon: Box, name: 'Docker', category: 'backend', position: { x: -0.5, y: 0.7, z: 0.5 }, color: '#2496ED' },
  
  // Database
  { id: 'mongodb', icon: Database, name: 'MongoDB', category: 'database', position: { x: 0.9, y: -0.1, z: 0.4 }, color: '#47A248' },
  { id: 'postgresql', icon: Database2, name: 'PostgreSQL', category: 'database', position: { x: -0.9, y: 0.1, z: 0.4 }, color: '#336791' },
  
  // Cloud
  { id: 'aws', icon: Cloud, name: 'AWS', category: 'cloud', position: { x: 0.2, y: -0.9, z: 0.4 }, color: '#FF9900' },
  { id: 'firebase', icon: Zap, name: 'Firebase', category: 'cloud', position: { x: -0.2, y: -0.9, z: 0.4 }, color: '#FFCA28' },
  
  // Design
  { id: 'figma', icon: Palette, name: 'Figma', category: 'design', position: { x: 0.7, y: 0.6, z: 0.3 }, color: '#F24E1E' },
  { id: 'adobe', icon: Layers, name: 'Adobe Suite', category: 'design', position: { x: -0.7, y: -0.6, z: 0.3 }, color: '#FF0000' },
  
  // Tools
  { id: 'git', icon: GitBranch, name: 'Git', category: 'tools', position: { x: 0.1, y: 0.9, z: 0.4 }, color: '#F05032' },
  { id: 'shopify', icon: ShoppingBag, name: 'Shopify', category: 'tools', position: { x: -0.1, y: 0.9, z: 0.4 }, color: '#95BF47' },
  { id: 'wordpress', icon: Globe, name: 'WordPress', category: 'tools', position: { x: 0.5, y: -0.8, z: 0.3 }, color: '#21759B' },
]

interface TechGlobeProps {
  isVisible: boolean
}

export default function TechGlobe({ isVisible }: TechGlobeProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!isVisible) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isAutoRotating) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      setRotation({
        x: (deltaY / rect.height) * 30,
        y: (deltaX / rect.width) * 30
      })
    }

    const handleAutoRotate = () => {
      if (!isAutoRotating) return
      
      setRotation(prev => ({
        x: prev.x,
        y: prev.y + 0.5
      }))
      
      animationRef.current = requestAnimationFrame(handleAutoRotate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationRef.current = requestAnimationFrame(handleAutoRotate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, isAutoRotating])

  const filteredTech = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory)

  const categories = [
    { id: 'all', name: 'All', color: '#ef3a5d' },
    { id: 'frontend', name: 'Frontend', color: '#61DAFB' },
    { id: 'backend', name: 'Backend', color: '#339933' },
    { id: 'database', name: 'Database', color: '#47A248' },
    { id: 'cloud', name: 'Cloud', color: '#FF9900' },
    { id: 'design', name: 'Design', color: '#F24E1E' },
    { id: 'tools', name: 'Tools', color: '#F05032' }
  ]

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Category Filters */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Globe Container */}
      <div 
        ref={containerRef}
        className="relative w-96 h-96 mx-auto perspective-1000"
        onMouseEnter={() => setIsAutoRotating(false)}
        onMouseLeave={() => setIsAutoRotating(true)}
      >
        {/* Globe Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/20 to-[#ff6b6b]/20 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* 3D Globe */}
        <div 
          className="relative w-full h-full bg-gradient-to-br from-[#0a1a2e] to-[#1a2a3e] rounded-full border-2 border-[#ef3a5d]/30 shadow-2xl overflow-hidden group transition-transform duration-1000"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Globe Surface */}
          <div className="absolute inset-4 bg-gradient-to-br from-[#ef3a5d]/10 to-[#ff6b6b]/10 rounded-full" />
          
          {/* Tech Stack Icons */}
          {filteredTech.map((tech) => {
            const IconComponent = tech.icon
            const scale = hoveredTech === tech.id ? 1.2 : 1
            const zIndex = hoveredTech === tech.id ? 50 : 10
            
            return (
              <div
                key={tech.id}
                className="absolute transition-all duration-300 cursor-pointer group"
                style={{
                  left: `${50 + tech.position.x * 40}%`,
                  top: `${50 + tech.position.y * 40}%`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  zIndex
                }}
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Icon Container */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                  style={{ 
                    backgroundColor: tech.color,
                    boxShadow: hoveredTech === tech.id 
                      ? `0 0 20px ${tech.color}80` 
                      : '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                {/* Tooltip */}
                <div 
                  className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#0a1a2e] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    hoveredTech === tech.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0a1a2e]" />
                </div>
              </div>
            )
          })}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {filteredTech.map((tech, i) => 
              filteredTech.slice(i + 1).map((otherTech, j) => {
                const distance = Math.sqrt(
                  Math.pow(tech.position.x - otherTech.position.x, 2) + 
                  Math.pow(tech.position.y - otherTech.position.y, 2) + 
                  Math.pow(tech.position.z - otherTech.position.z, 2)
                )
                
                if (distance < 0.8) {
                  return (
                    <line
                      key={`${tech.id}-${otherTech.id}`}
                      x1={`${50 + tech.position.x * 40}%`}
                      y1={`${50 + tech.position.y * 40}%`}
                      x2={`${50 + otherTech.position.x * 40}%`}
                      y2={`${50 + otherTech.position.y * 40}%`}
                      stroke="#ef3a5d"
                      strokeWidth="1"
                      opacity="0.3"
                      className="transition-opacity duration-300"
                    />
                  )
                }
                return null
              })
            )}
          </svg>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ef3a5d]/0 to-[#ff6b6b]/0 group-hover:from-[#ef3a5d]/10 group-hover:to-[#ff6b6b]/10 transition-all duration-500 rounded-full" />
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ef3a5d] rounded-full shadow-lg" />
        </div>
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '8s' }}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#ff6b6b] rounded-full shadow-lg" />
        </div>
      </div>

      {/* Tech Stack Summary */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Our Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(1).map((category) => (
            <div key={category.id} className="text-center">
              <div 
                className="w-3 h-3 rounded-full mx-auto mb-2"
                style={{ backgroundColor: category.color }}
              />
              <div className="text-sm text-gray-300">{category.name}</div>
              <div className="text-xs text-gray-400">
                {techStack.filter(tech => tech.category === category.id).length} tools
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Instructions */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        <p>Hover over icons to explore our tech stack</p>
        <p>Click categories to filter technologies</p>
      </div>
    </div>
  )
} 