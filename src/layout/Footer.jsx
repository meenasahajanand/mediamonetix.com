import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Digital Marketing Strategy',
    'SEO & Content Marketing',
    'Paid Ads (Google/Facebook)',
    'Conversion Rate Optimization',
    'Affiliate Monetisation',
    'Analytics & Tracking'
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/service' },
    { name: 'Career', href: '/career/career-openings' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/logo_header.png" 
                alt="MediaMonetix" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Digital marketing and monetisation studio helping brands acquire customers, increase conversions,
              and grow revenue with data-driven campaigns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-500 transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-orange-500 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9033409898</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@mediamonetix.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    531A Upper Cross Street<br />
                    #04-95 Hong Lim Complex<br />
                    Singapore-051531
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MediaMonetix. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ by MediaMonetix Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
