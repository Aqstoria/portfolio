import { services } from '../../page'
import { notFound } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

interface ServiceDetailPageProps {
  params: { slug: string }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((s: any) => s.slug === params.slug)
  if (!service) return notFound()
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ef3a5d]/10 to-white text-gray-900">
      {/* Header */}
      <div className="py-16 px-4 text-center bg-gradient-to-r from-[#ef3a5d] to-[#d62f4f] text-white mb-12">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mx-auto mb-5 shadow-lg">
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{service.description}</p>
      </div>
      {/* Features */}
      <div className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-6 text-[#ef3a5d]">Key Features</h2>
        <ul className="space-y-4">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-[#ef3a5d] mt-1" />
              <span className="text-gray-800 text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 