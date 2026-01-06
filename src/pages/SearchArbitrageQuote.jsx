import { useState } from 'react'
import { CheckCircle, ArrowRight, Search, Megaphone, FileText, Mail, Star, TrendingUp, Shield, Zap, Globe, Target, BarChart3, Users, Clock, Award } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'

const SearchArbitrageQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    monthlyTraffic: '',
    currentRevenue: '',
    goals: '',
    timeline: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const partners = [
    {
      name: 'Afd (Google AdSense for Domains)',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      description: 'Transform parked domains into high-converting revenue streams',
      features: [
        'AI-driven feed integration with real-time quality scoring',
        'Advanced page-level A/B testing for maximum revenue',
        'Enterprise-grade throttling and fraud protection',
        'Machine learning algorithms for predictive optimization',
        'Global scale with localized ad experiences'
      ],
      benefits: ['Up to 300% RPM increase', '99.9% uptime guarantee', 'Real-time analytics'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Rsoc',
      icon: <Megaphone className="w-8 h-8 text-purple-600" />,
      description: 'Revolutionary search arbitrage platform for premium publishers',
      features: [
        'Next-gen multi-feed demand orchestration',
        'AI-powered compliance filtering and brand safety',
        'Dynamic bid shading and floor optimization',
        'Predictive analytics for traffic quality scoring',
        'Seamless API connectivity and custom reporting'
      ],
      benefits: ['40% higher conversion rates', 'Advanced fraud protection', 'Custom integrations'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Afs (AdSense for Search)',
      icon: <FileText className="w-8 h-8 text-green-600" />,
      description: 'Monetize internal search with Google\'s cutting-edge technology',
      features: [
        'Advanced custom search UX with personalized placements',
        'AI-driven query-level blocking and brand safety',
        'Server-side metrics and comprehensive analytics',
        'Privacy-compliant tracking and cookieless attribution',
        'Multi-language support with localized experiences'
      ],
      benefits: ['Privacy-first approach', 'Real-time content analysis', 'Global reach'],
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Yahoo Search Partners',
      icon: <Mail className="w-8 h-8 text-red-600" />,
      description: 'Leverage Yahoo\'s premium search ecosystem',
      features: [
        'Direct Yahoo feed integration with real-time optimization',
        'Advanced marketplace routing with intelligent distribution',
        'Enterprise-grade fallback rules and sub-100ms latency',
        'Privacy-focused advertising platform',
        'Multi-region support with localized experiences'
      ],
      benefits: ['Sub-100ms latency', 'Privacy-focused platform', 'Global monetization'],
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Microsoft Bing Ads',
      icon: <Mail className="w-8 h-8 text-indigo-600" />,
      description: 'Maximize revenue through Microsoft\'s sophisticated platform',
      features: [
        'Direct Microsoft feed integration with advanced bid management',
        'AI-driven marketplace performance routing',
        'Enterprise fallback rules with intelligent allocation',
        'Privacy-first advertising solutions',
        'Worldwide reach with localized targeting'
      ],
      benefits: ['AI-powered optimization', 'Enterprise-grade solutions', 'Global scale'],
      color: 'from-indigo-500 to-indigo-700'
    }
  ]

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '300%', label: 'Average RPM Increase' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Active Publishers' },
    { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Countries Served' },
    { icon: <Award className="w-6 h-6" />, value: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
              🚀 Search Arbitrage Quote
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Get Your Custom Search Arbitrage Plan
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock the full potential of your traffic with our premium partner network. 
              Get a tailored strategy for Afd, Rsoc, Afs, Yahoo, and Bing integration.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-center mb-2 text-orange-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Partner Network</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We work with the industry's leading search arbitrage partners to maximize your revenue potential
              </p>
              <div className="mt-4 h-1 w-24 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                      {partner.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                      <p className="text-sm text-gray-600">{partner.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {partner.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Custom Quote</h2>
              <p className="text-gray-600 text-lg">
                Tell us about your traffic and goals, and we'll create a personalized arbitrage strategy
              </p>
            </div>
          </AnimatedSection>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Traffic Volume *
                  </label>
                  <select
                    name="monthlyTraffic"
                    value={formData.monthlyTraffic}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select traffic volume</option>
                    <option value="under-10k">Under 10,000 visitors</option>
                    <option value="10k-50k">10,000 - 50,000 visitors</option>
                    <option value="50k-100k">50,000 - 100,000 visitors</option>
                    <option value="100k-500k">100,000 - 500,000 visitors</option>
                    <option value="500k-1m">500,000 - 1M visitors</option>
                    <option value="over-1m">Over 1M visitors</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Monthly Revenue
                  </label>
                  <select
                    name="currentRevenue"
                    value={formData.currentRevenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What are your main goals? *
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your revenue goals, target markets, and any specific requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Timeline for Implementation
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Within 1 week)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Get My Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond within 24 hours with your personalized arbitrage strategy
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediaMonetix?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We're not just another arbitrage company. We're your strategic partner in maximizing search revenue.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-orange-500" />,
                title: 'Precision Targeting',
                description: 'AI-powered traffic routing to maximize yield across all partners'
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-500" />,
                title: 'Enterprise Security',
                description: 'Bank-level security and compliance with all major platforms'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
                title: 'Real-time Analytics',
                description: 'Comprehensive dashboards with actionable insights and optimization recommendations'
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: '24/7 Support',
                description: 'Round-the-clock technical support and account management'
              }
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={0.2 + index * 0.1}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Maximize Your Search Revenue?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of publishers who've increased their revenue by 300%+ with our premium arbitrage network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">
                Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl border border-gray-200">
                Schedule a Call
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default SearchArbitrageQuote
