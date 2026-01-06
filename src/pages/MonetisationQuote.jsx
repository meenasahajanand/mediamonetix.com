import { useState } from 'react'
import { CheckCircle, ArrowRight, Smartphone, Globe, Gamepad2, DollarSign, TrendingUp, Shield, Users, BarChart3, Target, Award, Clock, Zap, Star, Rocket, Brain, PieChart } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'

const MonetisationQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    platform: '',
    monthlyUsers: '',
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
    console.log('Form submitted:', formData)
  }

  const platforms = [
    {
      name: 'App Monetization',
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      description: 'Transform your mobile app into a revenue powerhouse',
      features: [
        'AdMob, MAX, IronSource mediation setup and optimization',
        'Rewarded video ads for key user actions and engagement',
        'In-app purchase (IAP) strategy and pricing optimization',
        'Subscription models with retention-focused onboarding',
        'Hybrid monetization combining ads and premium features',
        'Advanced analytics and cohort analysis for LTV optimization',
        'A/B testing for ad placements and frequency capping',
        'Fraud protection and brand safety implementation'
      ],
      benefits: ['Up to 500% ARPDAU increase', 'Advanced mediation', 'Real-time optimization'],
      color: 'from-blue-500 to-blue-700',
      revenue: 'Up to $100K/month potential',
      stats: ['2.8M+ apps monetized', 'Average 300% revenue increase', '99.9% uptime guarantee']
    },
    {
      name: 'Web Monetization',
      icon: <Globe className="w-8 h-8 text-green-600" />,
      description: 'Maximize website revenue with advanced ad technology',
      features: [
        'Header bidding setup with Prebid.js and Google Ad Manager',
        'Programmatic advertising with multiple SSPs and DSPs',
        'Native advertising integration and sponsored content',
        'Video advertising with outstream and instream formats',
        'Affiliate marketing integration and revenue sharing',
        'Subscription paywalls and premium content monetization',
        'Email monetization and newsletter advertising',
        'Performance optimization and Core Web Vitals protection'
      ],
      benefits: ['Up to 400% RPM increase', 'Header bidding', 'Multi-format ads'],
      color: 'from-green-500 to-green-700',
      revenue: 'Up to $200K/month potential',
      stats: ['50M+ page views optimized', 'Average 250% RPM increase', 'Sub-100ms load times']
    },
    {
      name: 'Game Monetization',
      icon: <Gamepad2 className="w-8 h-8 text-purple-600" />,
      description: 'Optimize game revenue across casual and hardcore genres',
      features: [
        'Balanced ad and IAP monetization strategy',
        'Rewarded video ads for lives, coins, and power-ups',
        'Playable ads and interactive advertising formats',
        'LiveOps events and limited-time offers optimization',
        'Player progression and retention-focused monetization',
        'Cross-platform monetization (mobile, web, console)',
        'Esports and tournament monetization strategies',
        'Creator economy and user-generated content monetization'
      ],
      benefits: ['Up to 600% LTV increase', 'LiveOps expertise', 'Cross-platform'],
      color: 'from-purple-500 to-purple-700',
      revenue: 'Up to $500K/month potential',
      stats: ['100M+ players monetized', 'Average 400% LTV increase', '24/7 live operations']
    }
  ]

  const monetizationStrategies = [
    {
      title: 'Ad Revenue Optimization',
      description: 'Maximize ad revenue across all platforms',
      features: ['Advanced mediation and waterfall optimization', 'Real-time bidding and floor price management', 'Brand safety and fraud protection', 'Cross-platform ad serving']
    },
    {
      title: 'Subscription Models',
      description: 'Build recurring revenue streams',
      features: ['Freemium to premium conversion strategies', 'Retention-focused onboarding flows', 'Pricing optimization and A/B testing', 'Churn prediction and win-back campaigns']
    },
    {
      title: 'In-App Purchases',
      description: 'Optimize IAP revenue and user experience',
      features: ['Strategic placement and timing optimization', 'Bundle creation and limited-time offers', 'Price elasticity testing and optimization', 'Purchase flow simplification']
    },
    {
      title: 'Affiliate & Partnerships',
      description: 'Diversify revenue through partnerships',
      features: ['Affiliate program setup and management', 'Influencer and creator partnerships', 'Brand collaboration and sponsorship deals', 'Revenue sharing and commission optimization']
    }
  ]

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '500%', label: 'Average Revenue Increase' },
    { icon: <Users className="w-6 h-6" />, value: '1000+', label: 'Apps & Websites Optimized' },
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
              💰 Monetization Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Maximize Revenue Across All Platforms
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your App, Web, and Game properties into revenue-generating machines. 
              Our proven strategies deliver measurable results across all monetization channels.
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

      {/* Platform Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform-Specific Monetization</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Each platform requires unique monetization strategies. We specialize in maximizing revenue across Apps, Web, and Games.
              </p>
              <div className="mt-4 h-1 w-24 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <AnimatedSection key={platform.name} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-xl bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                      <div className="mt-2">
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {platform.revenue}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.benefits.map((benefit, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Track Record:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {platform.stats.map((stat, i) => (
                        <li key={i} className="flex items-center">
                          <Star className="w-3 h-3 text-orange-500 mr-2" />
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Monetization Framework</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We use proven strategies to maximize revenue across all monetization channels
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {monetizationStrategies.map((strategy, index) => (
              <AnimatedSection key={strategy.title} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600 mb-6">{strategy.description}</p>
                  <ul className="space-y-3">
                    {strategy.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Monetization Strategy</h2>
              <p className="text-gray-600 text-lg">
                Tell us about your platform and goals, and we'll create a personalized monetization plan
              </p>
            </div>
          </AnimatedSection>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
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
                    Website/App URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://yourwebsite.com or App Store link"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Platform Type *
                  </label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select platform</option>
                    <option value="mobile-app">Mobile App (iOS/Android)</option>
                    <option value="web">Web Application</option>
                    <option value="game">Game (Mobile/Web/Console)</option>
                    <option value="multi-platform">Multi-Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Active Users
                  </label>
                  <select
                    name="monthlyUsers"
                    value={formData.monthlyUsers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select user count</option>
                    <option value="under-1k">Under 1,000</option>
                    <option value="1k-10k">1,000 - 10,000</option>
                    <option value="10k-100k">10,000 - 100,000</option>
                    <option value="100k-1m">100,000 - 1M</option>
                    <option value="1m-10m">1M - 10M</option>
                    <option value="over-10m">Over 10M</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
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
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What are your main monetization goals? *
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your revenue goals, target metrics (ARPDAU, RPM, LTV), and any specific monetization challenges..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Get My Monetization Strategy <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond within 24 hours with your personalized monetization plan
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediaMonetix?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We're not just another monetization company. We're your strategic partner in maximizing revenue across all platforms.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-orange-500" />,
                title: 'Platform Expertise',
                description: 'Deep knowledge of App, Web, and Game monetization best practices'
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-500" />,
                title: 'Revenue Protection',
                description: 'Advanced fraud protection and brand safety across all platforms'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
                title: 'Data-Driven Optimization',
                description: 'Real-time analytics and AI-powered optimization for maximum revenue'
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: '24/7 Support',
                description: 'Round-the-clock monitoring and optimization for your success'
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
              Ready to Maximize Your Revenue?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of developers and publishers who've increased their revenue by 500%+ with our proven monetization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl border border-gray-200"
              >
                Schedule a Call
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default MonetisationQuote
