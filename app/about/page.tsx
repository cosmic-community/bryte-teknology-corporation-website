import { Suspense } from 'react'
import { getPageBySlug, getCompanyInfo } from '@/lib/cosmic'
import { CompanyInfo, Page } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

async function AboutContent() {
  try {
    const [pageData, companyData] = await Promise.all([
      getPageBySlug('about'),
      getCompanyInfo()
    ])

    const page = pageData as Page | null
    const company = companyData as CompanyInfo | null

    if (!page || !company) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600">The about page content could not be loaded.</p>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <Hero
          title={page.title}
          subtitle={page.metadata.subtitle || ''}
          image={page.metadata.hero_image?.imgix_url}
        />

        <main className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Mission Section */}
            <section className="mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {company.metadata.mission || 'Building the future of technology, one project at a time.'}
                </p>
              </div>
            </section>

            {/* Values Section */}
            {company.metadata.values && company.metadata.values.length > 0 && (
              <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {company.metadata.values.map((value: string, index: number) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-lg font-medium text-gray-900">{value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Company Info */}
            <section className="bg-gray-50 rounded-lg p-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get In Touch</h2>
                <div className="space-y-4">
                  {company.metadata.phone && (
                    <div className="flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">{company.metadata.phone}</span>
                    </div>
                  )}
                  {company.metadata.email && (
                    <div className="flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{company.metadata.email}</span>
                    </div>
                  )}
                  {company.metadata.address && (
                    <div className="flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">{company.metadata.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    )
  } catch (error) {
    console.error('Error loading about page:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600">There was an error loading the about page.</p>
        </div>
      </div>
    )
  }
}

export default function AboutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <AboutContent />
    </Suspense>
  )
}