import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/AdBanner'
import CTASection from '../components/CTASection'
import Testimonials from '../components/Testimonials'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'
import { track } from '../utils/tracking'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Globe,
  Smartphone,
  Gamepad2,
  Palette,
  Code,
  Cloud,
  Shield,
  TrendingUp,
  Clock,
  MessageCircle,
  Phone,
  Target,
  DollarSign,
  BarChart3,
  Zap,
  Brain,
  Rocket,
  PieChart,
  MousePointer,
  Search,
  Share2,
  Monitor
} from 'lucide-react'
import EmojiScene from '../components/EmojiScene'
import OrangeIllustration from '../components/OrangeIllustration'

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "MediaMonetix transformed our digital presence. Their team delivered an exceptional web application that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "Outstanding mobile app development. The team's expertise and attention to detail made all the difference.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Professional, reliable, and innovative. MediaMonetix helped us achieve our digital transformation goals.",
      rating: 5
    }
  ]

  const services = [
    {
      icon: <Search className="text-4xl text-orange-500" />,
      title: "Search Arbitrage",
      description: "Acquire undervalued clicks and route them to high‑RPM demand for profit.",
      features: ["High‑intent click acquisition", "Premium demand partners", "Compliance & scrub protection", "Price‑map routing"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      link: "/service/search-arbitrage"
    },
    {
      icon: <Share2 className="text-4xl text-orange-500" />,
      title: "Social Media Marketing",
      description: "Platform‑native ads and content that entertain, educate and convert.",
      features: ["Facebook/Instagram ads", "TikTok & Snapchat creatives", "LinkedIn B2B lead gen", "Influencer & UGC"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "/service/social-media-marketing"
    },
    {
      icon: <Target className="text-4xl text-orange-500" />,
      title: "Conversion Optimization",
      description: "Data-driven CRO strategies that maximize your conversion rates",
      features: ["A/B Testing", "UX Analysis", "Funnel Optimization", "Landing Pages"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "/service"
    },
    {
      icon: <DollarSign className="text-4xl text-orange-500" />,
      title: "Monetisation Solutions",
      description: "Grow ARPU with ads, affiliates and subscriptions — without hurting UX.",
      features: ["Ad stack & mediation", "Affiliate programs", "Subscriptions & paywalls", "Yield analytics"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      link: "/service/monetisation"
    },
    {
      icon: <BarChart3 className="text-4xl text-orange-500" />,
      title: "Digital Marketing",
      description: "Full‑funnel growth: Google Ads, App Installs, Lead Gen, Affiliate, E‑commerce.",
      features: ["Google Ads/PMax", "App Install campaigns", "Lead gen funnels", "Affiliate & E‑com growth"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "/service/digitalmarketing"
    },
    {
      icon: <Rocket className="text-4xl text-orange-500" />,
      title: "Growth Marketing",
      description: "End-to-end growth strategies that scale your business sustainably",
      features: ["Growth Hacking", "Retention Strategies", "Viral Marketing", "Scaling Systems"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      link: "/service"
    }
  ]

  const stats = [
    { number: "5x", label: "Avg. ROAS on Paid" },
    { number: "+210%", label: "Organic Traffic YoY" },
    { number: "+32%", label: "CVR Uplift from CRO" },
    { number: "24/7", label: "Monitoring & Support" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
                🚀 Digital Marketing & Revenue Growth Experts
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Revenue</span>
                <br /> With Performance Marketing
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Search Arbitrage, Social Media, Digital Marketing and Monetisation — executed by experts,
                measured daily, and optimized for ROAS, CPA and LTV.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  onClick={() => track('cta_click', { location: 'home_hero_primary' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Free Growth Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/service"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition duration-300 inline-flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust Indicators */}
            <AnimatedSection delay={1.0}>
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm">Certified Experts</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.4} direction="left">
              <OrangeIllustration />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-orange-600">Growth Engine</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From traffic acquisition to revenue optimization - we build the complete digital marketing 
                and monetization system that scales your business.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Ad slot above services grid */}
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <AdBanner
                title="Sponsored"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=300&fit=crop"
                href="/offer"
                onClick={() => track('ad_click', { location: 'home_top_ad' })}
              />
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="h-48 overflow-hidden">
                    <AnimatedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                      delay={0.5 + index * 0.1}
                    />
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Service CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
                        to={service.link || '/service'}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-orange-600">MediaMonetix?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We combine technical expertise with creative vision to deliver exceptional results that drive real business growth.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certified digital marketing experts bring years of experience and proven strategies to every project, ensuring maximum ROI.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the importance of speed in digital marketing. Our optimized processes deliver measurable results within 30 days.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated support team is always available to help you optimize campaigns, troubleshoot issues, and maximize performance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-orange-400">Proven Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A systematic approach to digital marketing success that has generated millions in revenue for our clients.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Analysis",
                description: "Comprehensive analysis of your current digital presence, competitors, and growth opportunities.",
                icon: <Search className="h-8 w-8 text-orange-400" />
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Custom growth strategy tailored to your business goals, target audience, and market position.",
                icon: <Brain className="h-8 w-8 text-orange-400" />
              },
              {
                step: "03",
                title: "Implementation",
                description: "Rapid deployment of campaigns across all channels with continuous optimization and testing.",
                icon: <Zap className="h-8 w-8 text-orange-400" />
              },
              {
                step: "04",
                title: "Scale & Optimize",
                description: "Continuous monitoring, optimization, and scaling to maximize ROI and sustainable growth.",
                icon: <TrendingUp className="h-8 w-8 text-orange-400" />
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-500/30 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Growth Framework Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-orange-600">Revenue Engine</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our end‑to‑end system turns traffic into profit using paid media, SEO, CRO, affiliates and accurate analytics.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Paid Media",
                description: "ROAS‑driven campaigns on Google, Meta and LinkedIn with continuous creative testing.",
                icon: <Target className="h-8 w-8 text-orange-500" />,
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
              },
              {
                title: "SEO Growth",
                description: "Technical fixes, topical maps and content velocity to capture high‑intent demand.",
                icon: <Search className="h-8 w-8 text-orange-500" />,
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop"
              },
              {
                title: "CRO & Experimentation",
                description: "A/B tests, funnel analysis and UX improvements for higher conversion rates.",
                icon: <MousePointer className="h-8 w-8 text-orange-500" />,
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
              },
              {
                title: "Affiliate Monetisation",
                description: "Partner sourcing, payout optimization and tracking to add incremental revenue.",
                icon: <DollarSign className="h-8 w-8 text-orange-500" />,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-orange-600 font-bold mb-3 text-center">{item.title}</div>
                  <p className="text-gray-700 text-center leading-relaxed">{item.description}</p>
                  
                  {/* Framework Image */}
                  <div className="mt-4 h-32 rounded-lg overflow-hidden">
                    <AnimatedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      delay={0.5 + index * 0.1}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Client <span className="text-orange-600">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Real results from real businesses. See how we've helped companies scale their revenue through strategic digital marketing.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AnimatedSection>
          <CTASection 
            heading="Ready to Scale Your Revenue?"
            sub="Get a free growth audit and discover how to 3x your digital marketing ROI in 90 days."
            primary={{ to: '/contact', label: 'Get Free Audit' }}
            secondary={{ to: '/service', label: 'View Services' }}
            onPrimaryClick={() => track('cta_click', { location: 'home_bottom_cta' })} 
          />
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Home
