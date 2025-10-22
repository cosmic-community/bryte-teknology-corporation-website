import ContactForm from '@/components/ContactForm'
import { getCompanyInfo } from '@/lib/cosmic'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default async function ContactPage() {
  const companyInfo = await getCompanyInfo()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              We're here to help with all your generator needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services, need a quote, or require emergency support? Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      {companyInfo?.metadata?.phone || '+1 (555) 123-4567'}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">24/7 Emergency Hotline</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">
                      {companyInfo?.metadata?.email || 'info@bryteteknology.com'}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">
                      {companyInfo?.metadata?.address || 'Island Industrial Park, Main Island'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency Service Only</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3">Service Areas</h3>
                <p className="text-gray-600">
                  We provide generator parts and services to remote islands throughout the region, including specialized delivery to hard-to-reach locations. Contact us to confirm service availability in your area.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Emergency Generator Service
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Power outage? Generator failure? Our emergency response team is available 24/7 to help restore power to your island community.
            </p>
            <a href={`tel:${companyInfo?.metadata?.phone || '+15551234567'}`} className="btn-primary bg-white text-primary hover:bg-gray-100">
              Call Emergency Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}