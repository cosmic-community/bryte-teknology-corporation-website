import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import { Service } from '@/types'
import { Package, Wrench, Users, Truck, Phone, CheckCircle } from 'lucide-react'

export default async function ServicesPage() {
  const services = await getServices() as Service[]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Generator Solutions
            </h1>
            <p className="text-xl text-blue-100">
              From parts supply to on-site repairs, we provide complete generator services for remote island communities
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to keep your generators running smoothly
            </p>
          </div>

          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Default services if none in CMS */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Parts Supply & Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive inventory of genuine generator parts with fast delivery to even the most remote island locations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Genuine OEM parts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Fast island delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Emergency parts service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">On-Site Repair & Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Expert technicians available for scheduled maintenance and emergency repairs at your island location.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Certified technicians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Preventive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Emergency repairs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Skilled technicians dispatched to remote locations for installations, troubleshooting, and training.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Remote diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Installation support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Training programs</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined process designed for remote island logistics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Reach out via phone, email, or our online form with your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">
                Our team evaluates your needs and provides a detailed quote
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery/Service</h3>
              <p className="text-gray-600">
                We ship parts or dispatch technicians to your island location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Follow-Up</h3>
              <p className="text-gray-600">
                We ensure your complete satisfaction and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Specialized logistics for island locations with multiple delivery options
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Emergency hotline available for critical power failures
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All parts and services backed by our satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Started Today
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us for a free consultation and quote for your generator needs
            </p>
            <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}