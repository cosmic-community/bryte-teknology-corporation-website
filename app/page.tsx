import Hero from '@/components/Hero'
import { getServices, getTestimonials, getCompanyInfo } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import { Service, Testimonial } from '@/types'
import Link from 'next/link'

export default async function HomePage() {
  const services = await getServices() as Service[]
  const testimonials = await getTestimonials() as Testimonial[]
  const companyInfo = await getCompanyInfo()

  // Get featured services (first 3)
  const featuredServices = services.slice(0, 3)

  // Get featured testimonials (first 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powering Remote Islands, One Generator at a Time
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {companyInfo?.metadata?.mission || 
                "At Bryte Teknology Corporation, we understand the critical importance of reliable power in remote island communities. Our mission is to ensure that distance is never a barrier to electricity access."}
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive generator solutions designed for the unique challenges of remote island locations
            </p>
          </div>
          
          {featuredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Services information coming soon.</p>
            </div>
          )}

          <div className="text-center">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {featuredTestimonials.length > 0 && (
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                What Our Clients Say
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Trusted by island communities across the region
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Power Your Community?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch with our team for expert generator solutions, repairs, and technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}