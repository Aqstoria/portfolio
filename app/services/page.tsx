"use client"

import { services } from '@/lib/data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ef3a5d]/10 to-white text-gray-900">
      {/* Header */}
      <div className="py-16 px-4 text-center bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Explore our full range of digital solutions, from web and mobile development to design, marketing, and enterprise systems. Click any service to learn more.
        </p>
      </div>
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-[#ef3a5d]/10 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ef3a5d] to-[#d62f4f] mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <service.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#ef3a5d] group-hover:text-[#d62f4f] transition-colors duration-300">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <Link href={`/services/${service.slug}`} passHref legacyBehavior>
              <Button className="bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-[#d62f4f] hover:to-[#c42a47] transition-all duration-300">Learn More</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 