import { getCompanyInfo } from '@/lib/cosmic'
import { Building2, Heart, Users, Zap } from 'lucide-react'

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo()

  const values = companyInfo?.metadata?.values || [
    'Reliability',
    'Quality Service',
    'Customer Focus',
    'Technical Excellence'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Bryte Teknology Corporation
            </h1>
            <p className="text-xl text-blue-100">
              Dedicated to powering remote island communities with reliable generator solutions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bryte Teknology Corporation was founded with a clear mission: to ensure that remote island communities never have to face darkness due to generator failures or lack of spare parts.
                </p>
                <p>
                  We recognized that island communities face unique challenges when it comes to maintaining reliable power generation. Distance, logistics, and access to technical expertise often meant extended power outages that impacted daily life, businesses, and essential services.
                </p>
                <p>
                  Today, we serve dozens of island communities across the region, providing not just parts and equipment, but peace of mind knowing that expert help is just a call away.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop&auto=format"
                alt="Generator repair technician"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                {companyInfo?.metadata?.mission || 
                  "To provide reliable, accessible generator parts, repair services, and technical support to remote island communities, ensuring uninterrupted power supply for essential services and daily life."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted partner for island communities, known for our commitment to keeping the lights on through superior service, rapid response times, and genuine care for the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Building2 className="w-8 h-8 text-white" />}
                  {index === 1 && <Zap className="w-8 h-8 text-white" />}
                  {index === 2 && <Users className="w-8 h-8 text-white" />}
                  {index === 3 && <Heart className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Team, Island by Island
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified technicians and logistics specialists brings decades of combined experience in generator maintenance, parts supply, and remote island operations. We understand the unique challenges of island power systems and are committed to providing solutions that work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's work together to ensure reliable power for your island community
            </p>
            <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}