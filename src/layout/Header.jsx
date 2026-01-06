import { useState, useRef } from 'react'
import viteLogo from '../assets/vite.svg'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesCloseTimer = useRef(null)

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
    setIsServicesOpen(true)
  }
  const scheduleCloseServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
    servicesCloseTimer.current = setTimeout(() => setIsServicesOpen(false), 150)
  }
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/service' },
    { name: 'Career', href: '/career/career-openings' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91 9033409898</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@mediamonetix.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Free Consultation Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={viteLogo} 
                alt="MediaMonetix" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.name === 'Services' ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <button
                      type="button"
                      className={`px-3 py-2 rounded-md inline-flex items-center transition ${
                        location.pathname.startsWith('/service')
                          ? 'text-orange-600 bg-orange-50 font-extrabold text-lg'
                          : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-semibold text-base'
                      }`}
                      onClick={() => setIsServicesOpen(v => !v)}
                    >
                      Services <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 z-50" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
                        <Link to="/service/search-arbitrage" onClick={() => setIsServicesOpen(false)} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-800">
                          <span>Search Arbitrage</span>
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                        </Link>
                        <Link to="/service/social-media-marketing" onClick={() => setIsServicesOpen(false)} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-800">
                          <span>Social Media Marketing</span>
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                        </Link>
                        <Link to="/service/monetisation" onClick={() => setIsServicesOpen(false)} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-800">
                          <span>Monetisation Solutions</span>
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                        </Link>
                        <Link to="/service/digitalmarketing" onClick={() => setIsServicesOpen(false)} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-800">
                          <span>Digital Marketing</span>
                          <ChevronRight className="w-4 h-4 text-orange-500" />
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md transition duration-300 ${
                      location.pathname === item.href
                        ? 'text-orange-600 bg-orange-50 font-extrabold text-lg'
                        : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-semibold text-base'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                item.name === 'Services' ? (
                  <div key={item.name} className="px-3 py-2">
                    <div className="text-gray-800 font-semibold mb-2">Services</div>
                    <div className="space-y-1">
                      <Link to="/service/search-arbitrage" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-orange-100 hover:text-orange-600">Search Arbitrage</Link>
                      <Link to="/service/social-media-marketing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-orange-100 hover:text-orange-600">Social Media Marketing</Link>
                      <Link to="/service/monetisation" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-orange-100 hover:text-orange-600">Monetisation Solutions</Link>
                      <Link to="/service/digitalmarketing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-orange-100 hover:text-orange-600">Digital Marketing</Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                      location.pathname === item.href
                        ? 'text-orange-500 bg-orange-100'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <Link
                  to="/quote"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
