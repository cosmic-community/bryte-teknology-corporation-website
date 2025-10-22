import Link from 'next/link'

interface HeroProps {
  title?: string
  subtitle?: string
  image?: string
}

export default function Hero({ title, subtitle, image }: HeroProps = {}) {
  // Default values for homepage hero
  const heroTitle = title || 'Powering Remote Islands with Reliable Generator Solutions'
  const heroSubtitle = subtitle || 'Expert parts supply, repairs, and technical services for island communities across the region'
  const heroImage = image || 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=900&fit=crop&auto=format,compress'

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Generator on remote island"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Request a Quote
            </Link>
            <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-100 text-sm md:text-base">Islands Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100 text-sm md:text-base">Emergency Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-100 text-sm md:text-base">Generators Maintained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-100 text-sm md:text-base">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}