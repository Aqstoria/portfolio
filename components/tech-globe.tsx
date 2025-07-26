"use client"

import { useState, useEffect, useRef } from 'react'
import { 
  Code, 
  Cpu, 
  Server, 
  Box, 
  Database, 
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
  color: string
}

const techStack: TechIcon[] = [
  // Frontend
  { id: 'react', icon: Cpu, name: 'React', category: 'frontend', color: '#61DAFB' },
  { id: 'typescript', icon: Code, name: 'TypeScript', category: 'frontend', color: '#3178C6' },
  { id: 'nextjs', icon: Code, name: 'Next.js', category: 'frontend', color: '#000000' },
  
  // Backend
  { id: 'nodejs', icon: Server, name: 'Node.js', category: 'backend', color: '#339933' },
  { id: 'python', icon: Box, name: 'Python', category: 'backend', color: '#3776AB' },
  { id: 'docker', icon: Box, name: 'Docker', category: 'backend', color: '#2496ED' },
  
  // Database
  { id: 'mongodb', icon: Database, name: 'MongoDB', category: 'database', color: '#47A248' },
  { id: 'postgresql', icon: Database, name: 'PostgreSQL', category: 'database', color: '#336791' },
  
  // Cloud
  { id: 'aws', icon: Cloud, name: 'AWS', category: 'cloud', color: '#FF9900' },
  { id: 'firebase', icon: Zap, name: 'Firebase', category: 'cloud', color: '#FFCA28' },
  
  // Design
  { id: 'figma', icon: Palette, name: 'Figma', category: 'design', color: '#F24E1E' },
  { id: 'adobe', icon: Layers, name: 'Adobe Suite', category: 'design', color: '#FF0000' },
  
  // Tools
  { id: 'git', icon: GitBranch, name: 'Git', category: 'tools', color: '#F05032' },
  { id: 'shopify', icon: ShoppingBag, name: 'Shopify', category: 'tools', color: '#95BF47' },
  { id: 'wordpress', icon: Globe, name: 'WordPress', category: 'tools', color: '#21759B' },
]

interface FloatingTechIconsProps {
  isVisible: boolean
}

export default function FloatingTechIcons({ isVisible }: FloatingTechIconsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'all', name: 'All', color: '#ef3a5d' },
    { id: 'frontend', name: 'Frontend', color: '#61DAFB' },
    { id: 'backend', name: 'Backend', color: '#339933' },
    { id: 'database', name: 'Database', color: '#47A248' },
    { id: 'cloud', name: 'Cloud', color: '#FF9900' },
    { id: 'design', name: 'Design', color: '#F24E1E' },
    { id: 'tools', name: 'Tools', color: '#F05032' },
  ]

  const filteredTech = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory)

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Floating Tech Icons Container */}
      <div 
        ref={containerRef}
        className="relative w-96 h-96 mx-auto bg-gradient-to-br from-[#0a1a2e]/50 to-[#1a2a3e]/50 rounded-3xl border border-[#ef3a5d]/20 overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#ef3a5d] rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-1 h-1 bg-[#ff6b6b] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-[#ef3a5d] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-10 right-10 w-1 h-1 bg-[#ff6b6b] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Floating Tech Icons */}
        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * 2 * Math.PI
          const radius = 120
          const centerX = 192 // container width / 2
          const centerY = 192 // container height / 2
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)

          return (
            <div
              key={tech.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                animationDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`
                relative group cursor-pointer transition-all duration-300
                ${hoveredTech === tech.id ? 'scale-125 z-10' : 'scale-100'}
              `}>
                {/* Icon Container */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                  style={{ 
                    backgroundColor: tech.color + '20',
                    border: `2px solid ${tech.color}`,
                    boxShadow: hoveredTech === tech.id ? `0 0 20px ${tech.color}40` : 'none'
                  }}
                >
                  <tech.icon 
                    className="w-6 h-6 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredTech === tech.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-[#0a1a2e] text-white text-sm rounded-lg shadow-lg border border-[#ef3a5d]/20 z-20">
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0a1a2e]" />
                  </div>
                )}

                {/* Floating Animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
            </div>
          )
        })}

        {/* Center Element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-gradient-to-r from-[#ef3a5d] to-[#ff6b6b] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Code className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Connection Lines */}
        {techStack.length > 1 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {techStack.map((tech, index) => {
              const angle = (index / techStack.length) * 2 * Math.PI
              const radius = 120
              const centerX = 192
              const centerY = 192
              const x1 = centerX + radius * Math.cos(angle)
              const y1 = centerY + radius * Math.sin(angle)
              
              const nextIndex = (index + 1) % techStack.length
              const nextAngle = (nextIndex / techStack.length) * 2 * Math.PI
              const x2 = centerX + radius * Math.cos(nextAngle)
              const y2 = centerY + radius * Math.sin(nextAngle)

              return (
                <line
                  key={`line-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={tech.color}
                  strokeWidth="1"
                  opacity="0.3"
                  className="transition-all duration-1000"
                />
              )
            })}
          </svg>
        )}
      </div>
    </div>
  )
} 