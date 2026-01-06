import { useState } from 'react'
import { CheckCircle, ArrowRight, Facebook, Instagram, Twitter, Linkedin, Zap, Star, TrendingUp, Shield, Users, BarChart3, Target, Globe, Award, Clock, DollarSign, Play, Camera, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'

const SocialMediaMarketingQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    industry: '',
    monthlyBudget: '',
    currentChannels: [],
    goals: '',
    timeline: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        currentChannels: checked 
          ? [...prev.currentChannels, value]
          : prev.currentChannels.filter(channel => channel !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const platforms = [
    {
      name: 'Facebook & Instagram',
      icon: <Facebook className="w-8 h-8 text-blue-600" />,
      description: 'Meta\'s powerhouse platforms for maximum reach and engagement',
      features: [
        'Meta Advantage+ campaigns with AI optimization',
        'Facebook Shops + Instagram Checkout integration',
        'Creator monetization through Reels Play bonus',
        'Live shopping events with instant checkout',
        'Branded content partnerships and sponsored posts',
        'Advanced audience targeting with custom audiences',
        'CAPI integration for enhanced conversion tracking',
        'Facebook Gaming monetization for creators'
      ],
      benefits: ['2.9B+ monthly active users', 'Advanced AI targeting', 'Integrated shopping features'],
      color: 'from-blue-500 to-blue-700',
      revenue: 'Up to $50K/month potential'
    },
    {
      name: 'TikTok',
      icon: <Zap className="w-8 h-8 text-black" />,
      description: 'The viral video platform driving explosive growth',
      features: [
        'TikTok Shop integration with live commerce',
        'Creator Fund and TikTok Creator Rewards',
        'Branded hashtag challenges with viral potential',
        'Spark Ads on trending UGC content',
        'TikTok for Business advertising suite',
        'Influencer partnerships and collaborations',
        'TikTok LIVE gifts and virtual coins',
        'Product showcase videos with direct purchase'
      ],
      benefits: ['1B+ monthly active users', 'Highest engagement rates', 'Gen Z & Millennial focus'],
      color: 'from-gray-800 to-black',
      revenue: 'Up to $30K/month potential'
    },
    {
      name: 'Snapchat',
      icon: <Camera className="w-8 h-8 text-yellow-500" />,
      description: 'AR-first platform for immersive brand experiences',
      features: [
        'AR Lens sponsorships and branded filters',
        'Snapchat Spotlight creator fund rewards',
        'Snap Ads with full-screen experiences',
        'Snapchat Discover publisher partnerships',
        'Snapchat Public Profiles for business',
        'Snapchat Shopping with AR try-on',
        'Snapchat Games advertising integration',
        'Snap Map location-based advertising'
      ],
      benefits: ['363M+ daily active users', 'AR innovation leader', 'Gen Z dominant audience'],
      color: 'from-yellow-400 to-yellow-600',
      revenue: 'Up to $25K/month potential'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8 text-blue-700" />,
      description: 'Professional network for B2B monetization',
      features: [
        'LinkedIn Premium subscriptions and newsletters',
        'LinkedIn Learning course creation and sales',
        'B2B lead generation with high-value prospects',
        'LinkedIn Events monetization and ticket sales',
        'LinkedIn Live streaming with sponsors',
        'LinkedIn Sales Navigator for enterprise',
        'LinkedIn Creator Accelerator Program',
        'LinkedIn Marketing Solutions for B2B growth'
      ],
      benefits: ['900M+ members', 'Highest B2B conversion rates', 'Premium audience'],
      color: 'from-blue-600 to-blue-800',
      revenue: 'Up to $75K/month potential'
    },
    {
      name: 'Twitter (X)',
      icon: <Twitter className="w-8 h-8 text-blue-400" />,
      description: 'Real-time conversations and trend monetization',
      features: [
        'Twitter Blue subscription revenue sharing',
        'Twitter Spaces monetization with ticketed events',
        'Twitter Creator Fund and Super Follows',
        'Promoted Tweets and Twitter Ads campaigns',
        'Twitter Shopping with product catalogs',
        'Twitter API monetization for developers',
        'Twitter Moments sponsorship opportunities',
        'Twitter Live streaming with monetization'
      ],
      benefits: ['450M+ monthly active users', 'Real-time engagement', 'News and trend focus'],
      color: 'from-blue-400 to-blue-600',
      revenue: 'Up to $20K/month potential'
    }
  ]

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '400%', label: 'Average Revenue Increase' },
    { icon: <Users className="w-6 h-6" />, value: '1000+', label: 'Successful Campaigns' },
    { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Countries Served' },
    { icon: <Award className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' }
  ]

  const monetizationStrategies = [
    {
      title: 'Creator Monetization',
      description: 'Turn your content into revenue streams',
      features: ['Creator funds and bonus programs', 'Brand partnerships and sponsorships', 'Subscription and premium content', 'Live streaming monetization']
    },
    {
      title: 'E-commerce Integration',
      description: 'Drive sales directly from social platforms',
      features: ['Social commerce and shopping features', 'Live shopping events', 'Product catalogs and showcases', 'AR try-on experiences']
    },
    {
      title: 'Advertising Revenue',
      description: 'Maximize ad performance and ROI',
      features: ['AI-powered campaign optimization', 'Advanced audience targeting', 'Cross-platform ad management', 'Performance analytics and insights']
    },
    {
      title: 'Lead Generation',
      description: 'Convert followers into customers',
      features: ['B2B lead generation campaigns', 'Lead magnets and gated content', 'Email list building', 'CRM integration and automation']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
              📱 Social Media Monetization
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Transform Your Social Presence Into Revenue
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock the full monetization potential of Facebook, TikTok, Snapchat, LinkedIn, and Twitter. 
              Turn your social media presence into a profitable business with our proven strategies.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Monetization Strategies</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Each platform offers unique monetization opportunities. We help you maximize revenue across all channels.
              </p>
              <div className="mt-4 h-1 w-24 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <AnimatedSection key={platform.name} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                      <div className="mt-1">
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {platform.revenue}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Monetization Features:</h4>
                    <ul className="space-y-2">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.benefits.map((benefit, i) => (
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

      {/* Monetization Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Monetization Framework</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We use proven strategies to help you generate revenue from your social media presence
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Social Monetization Plan</h2>
              <p className="text-gray-600 text-lg">
                Tell us about your social media presence and goals, and we'll create a personalized monetization strategy
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
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="saas">SaaS & Technology</option>
                    <option value="healthcare">Healthcare & Wellness</option>
                    <option value="finance">Finance & Fintech</option>
                    <option value="education">Education & Training</option>
                    <option value="entertainment">Entertainment & Media</option>
                    <option value="realestate">Real Estate</option>
                    <option value="food">Food & Beverage</option>
                    <option value="fashion">Fashion & Beauty</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    name="monthlyBudget"
                    value={formData.monthlyBudget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Social Media Channels
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Facebook', 'Instagram', 'TikTok', 'Snapchat', 'LinkedIn', 'Twitter'].map((channel) => (
                    <label key={channel} className="flex items-center">
                      <input
                        type="checkbox"
                        name="currentChannels"
                        value={channel}
                        checked={formData.currentChannels.includes(channel)}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{channel}</span>
                    </label>
                  ))}
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
                  placeholder="Tell us about your revenue goals, target audience, and any specific monetization objectives..."
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
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Get My Monetization Plan <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond within 24 hours with your personalized social media monetization strategy
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediaMonetix for Social Media?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We're not just another social media agency. We're your strategic partner in maximizing social revenue.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-orange-500" />,
                title: 'Revenue-Focused',
                description: 'Every strategy is designed to generate measurable revenue and ROI'
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-500" />,
                title: 'Platform Expertise',
                description: 'Deep knowledge of each platform\'s monetization features and best practices'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
                title: 'Data-Driven',
                description: 'Advanced analytics and optimization based on real performance data'
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: '24/7 Support',
                description: 'Round-the-clock support and account management for your success'
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
              Ready to Monetize Your Social Media?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of creators and businesses who've increased their social media revenue by 400%+ with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link to="/contact" className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl border border-gray-200">
                Schedule a Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default SocialMediaMarketingQuote
