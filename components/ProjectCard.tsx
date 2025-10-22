import { Project } from '@/types'
import { MapPin, Calendar, CheckCircle } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = project.metadata?.image
  const location = project.metadata?.location
  const completionDate = project.metadata?.completion_date
  const description = project.metadata?.description
  const highlights = project.metadata?.highlights || []

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Project Image */}
      {image?.imgix_url && (
        <div className="relative h-48 bg-gray-200">
          <img
            src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        {/* Location and Date */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          {location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          )}
          {completionDate && (
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(completionDate).toLocaleDateString()}
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}