import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/types'

export default async function ProjectsPage() {
  const projects = await getProjects() as Project[]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-blue-100">
              Success stories from island communities we've powered
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Project Highlights Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We're currently documenting our successful generator installations and repairs across the region. Check back soon to see the communities we've helped power.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <p className="text-gray-600">Island Communities Served</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <p className="text-gray-600">Generators Maintained</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-gray-600">Emergency Support</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Project
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to ensure reliable power for your island community? Let's discuss your generator needs.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}