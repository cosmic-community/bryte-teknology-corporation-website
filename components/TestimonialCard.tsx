import { Testimonial } from '@/types'
import { Star, MapPin } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = testimonial.metadata?.rating || 5
  const customerName = testimonial.metadata?.customer_name || testimonial.title
  const location = testimonial.metadata?.location
  const testimonialText = testimonial.metadata?.testimonial
  const image = testimonial.metadata?.image

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      {testimonialText && (
        <p className="text-gray-600 mb-6 italic">"{testimonialText}"</p>
      )}

      {/* Customer Info */}
      <div className="flex items-center">
        {image?.imgix_url && (
          <img
            src={`${image.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={customerName}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          <div className="font-bold text-gray-900">{customerName}</div>
          {location && (
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}