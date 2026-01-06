import { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Filter,
  Search,
  Eye,
  Code,
  Smartphone,
  Globe
} from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Gaming Platform",
      category: "game",
      description: "Multiplayer gaming platform with real-time gameplay, leaderboards, and social features.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
      technologies: ["Unity", "C#", "Photon", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "web",
      description: "Complete healthcare management solution for clinics with patient records, appointment scheduling, and billing.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Personal fitness tracking app with workout plans, progress monitoring, and social sharing features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Google Fit API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "web",
      description: "Educational platform with course management, video streaming, assessments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React", "Express.js", "MongoDB", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Filter className="w-4 h-4" /> },
    { id: 'web', name: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'game', name: 'Game Development', icon: <Code className="w-4 h-4" /> }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our diverse range of projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Some of our most successful and innovative projects that showcase our expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition duration-300 flex space-x-4">
                      <a 
                        href={project.liveUrl}
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Live
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-500 hover:text-gray-600 font-medium"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio of web, mobile, and game development projects.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition duration-300 ${
                  activeFilter === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'web' ? 'bg-blue-100 text-blue-600' :
                      project.category === 'mobile' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {project.category === 'web' ? 'Web' : 
                       project.category === 'mobile' ? 'Mobile' : 'Game'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-500 hover:text-gray-600 font-medium"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/service"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
