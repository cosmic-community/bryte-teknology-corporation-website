import { Service } from '@/types'
import { Package, Wrench, Users, CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Map icon names to components
  const iconMap: Record<string, any> = {
    package: Package,
    wrench: Wrench,
    users: Users,
  }

  const IconComponent = service.metadata?.icon 
    ? iconMap[service.metadata.icon.toLowerCase()] || Package
    : Package

  const features = service.metadata?.features || []

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-4">
        {service.metadata?.description || 'Service description coming soon.'}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}