import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin,
  Send
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="text-2xl text-orange-500" />,
      title: "Phone",
      details: ["+91 9033409898"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="text-2xl text-orange-500" />,
      title: "Email", 
      details: ["info@mediamonetix.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="text-2xl text-orange-500" />,
      title: "Address",
      details: [
        "531A Upper Cross Street",
        "#04-95 Hong Lim Complex", 
        "Singapore-051531"
      ],
      description: "Visit our office"
    },
    {
      icon: <Clock className="text-2xl text-orange-500" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ],
      description: "We're here to help"
    }
  ]

  const services = [
    "Web Development",
    "Mobile App Development", 
    "Game Development",
    "UI/UX Design",
    "Custom Software",
    "Cloud Solutions",
    "Cybersecurity",
    "Digital Transformation"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.05}>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              </AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="info@mediamonetix.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="91 9033409898"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-lg overflow-hidden mb-6 border border-gray-200">
                  <div className="relative" style={{paddingBottom: '56.25%', height: 0}}>
                    <iframe
                      title="MediaMonetix Location"
                      src="https://www.google.com/maps?q=531A%20Upper%20Cross%20Street%20%2304-95%20Hong%20Lim%20Complex%2C%20Singapore%20051531&output=embed"
                      style={{border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </AnimatedSection>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-orange-500 hover:text-orange-600">
                      <Facebook className="text-2xl" />
                    </a>
                    <a href="#" className="text-orange-500 hover:text-orange-600">
                      <Twitter className="text-2xl" />
                    </a>
                    <a href="#" className="text-orange-500 hover:text-orange-600">
                      <Linkedin className="text-2xl" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Response</h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Free Consultation</h3>
                  <p className="text-gray-600">
                    Schedule a free 30-minute consultation to discuss your project requirements and get expert advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, 
                while complex applications can take 3-6 months. We provide detailed timelines during the planning phase.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive maintenance and support packages to keep your solution running smoothly 
                and up-to-date with the latest technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What technologies do you use?</h3>
              <p className="text-gray-600">
                We use modern, industry-standard technologies including React, Node.js, Python, AWS, and more. 
                We choose the best technology stack for each specific project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
