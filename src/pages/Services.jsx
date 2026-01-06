import { 
  Search, 
  Share2, 
  Target, 
  DollarSign, 
  BarChart3, 
  Rocket,
  Brain,
  Zap,
  MousePointer,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
  MessageCircle,
  Users,
  Shield,
  Globe,
  Smartphone,
  Code,
  Cloud
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/AdBanner'
import CTASection from '../components/CTASection'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'
import { track } from '../utils/tracking'

const Services = () => {
  const services = [
    {
      icon: <Search className="text-4xl text-orange-500" />,
      title: "Search Arbitrage",
      description: "Profit-focused arbitrage strategies that buy traffic at scale and monetize through top-tier demand partners.",
      features: [
        "High-intent keyword acquisition",
        "Auto-rotation of landers and funnels",
        "Quality scoring, throttling and scrub protection",
        "Real-time bid & budget automation",
        "Supply–demand price mapping",
        "LTV-driven optimizations"
      ],
      price: "Custom rev-share / fixed + performance",
      image: "https://images.unsplash.com/photo-1553532435-93d532a45f54?w=400&h=300&fit=crop",
      link: "/service/search-arbitrage"
    },
    {
      icon: <Share2 className="text-4xl text-orange-500" />,
      title: "Social Media Marketing",
      description: "Engaging social campaigns that build communities and drive sales",
      features: [
        "Paid Social Campaigns",
        "Content Creation & Strategy",
        "Community Management",
        "Influencer Partnerships",
        "Social Commerce",
        "Analytics & Reporting"
      ],
      price: "Starting from $3,000/month",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "/service/social-media-marketing"
    },
    {
      icon: <Target className="text-4xl text-orange-500" />,
      title: "Conversion Optimization",
      description: "Data-driven CRO strategies that maximize your conversion rates",
      features: [
        "A/B Testing & Experiments",
        "UX Analysis & Optimization",
        "Landing Page Optimization",
        "Funnel Analysis",
        "User Behavior Tracking",
        "ROI Improvement"
      ],
      price: "Starting from $2,000/month",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "/service/conversion-optimization"
    },
    {
      icon: <DollarSign className="text-4xl text-orange-500" />,
      title: "Revenue Monetization",
      description: "Strategic monetization solutions to maximize your revenue streams",
      features: [
        "Affiliate Program Management",
        "Ad Revenue Optimization",
        "Subscription Model Setup",
        "E-commerce Optimization",
        "Revenue Analytics",
        "Monetization Strategy"
      ],
      price: "Starting from $2,500/month",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      link: "/service/monetisation"
    },
    {
      icon: <BarChart3 className="text-4xl text-orange-500" />,
      title: "Analytics & Tracking",
      description: "Comprehensive analytics setup for data-driven decision making",
      features: [
        "GA4 Implementation & Setup",
        "Custom Tracking & Events",
        "Reporting Dashboards",
        "ROI Analysis & Attribution",
        "Data Visualization",
        "Performance Monitoring"
      ],
      price: "Starting from $1,500/month",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "/service/digitalmarketing"
    },
    {
      icon: <Rocket className="text-4xl text-orange-500" />,
      title: "Growth Marketing",
      description: "End-to-end growth strategies that scale your business sustainably",
      features: [
        "Growth Hacking Strategies",
        "Retention & Loyalty Programs",
        "Viral Marketing Campaigns",
        "Scaling Systems",
        "Market Expansion",
        "Performance Optimization"
      ],
      price: "Starting from $4,000/month",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      link: "/service/growth-marketing"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Analysis",
      description: "Comprehensive analysis of your current digital presence and growth opportunities",
      icon: <Search className="h-8 w-8 text-orange-400" />
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom growth strategy tailored to your business goals and target audience",
      icon: <Brain className="h-8 w-8 text-orange-400" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Rapid deployment of campaigns across all channels with continuous optimization",
      icon: <Zap className="h-8 w-8 text-orange-400" />
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "A/B testing and data-driven optimization to maximize performance",
      icon: <MousePointer className="h-8 w-8 text-orange-400" />
    },
    {
      step: "05",
      title: "Scale & Growth",
      description: "Scaling successful campaigns and expanding to new growth channels",
      icon: <TrendingUp className="h-8 w-8 text-orange-400" />
    },
    {
      step: "06",
      title: "Monitor & Report",
      description: "Continuous monitoring, reporting, and strategic adjustments for sustained growth",
      icon: <BarChart3 className="h-8 w-8 text-orange-400" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
                🚀 Complete Digital Marketing Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive <span className="text-orange-400 font-semibold">digital marketing and monetization services</span> designed to 
                accelerate your growth and maximize your revenue potential.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-orange-600">Growth Engine</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From traffic acquisition to revenue optimization - we provide the complete digital marketing 
                and monetization system that scales your business.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <AdBanner 
                title="Sponsored" 
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=300&fit=crop"
                href="#" 
                onClick={() => track('ad_click', { location: 'services_top_ad' })} 
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
                    <ul className="text-sm text-gray-600 mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center mb-4">
                      <span className="text-orange-600 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    <div className="text-center">
                      <Link 
                        to={service.link}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-center block"
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

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Proven Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A systematic approach to digital marketing success that has generated millions in revenue for our clients.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-orange-400">MediaMonetix?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Clear KPIs, transparent reporting, and growth experiments that compound your success.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-4xl font-extrabold text-orange-400 mb-2">5+</div>
                <div className="text-gray-300 font-semibold">Years of Experience</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-4xl font-extrabold text-orange-400 mb-2">500+</div>
                <div className="text-gray-300 font-semibold">Campaigns Managed</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-4xl font-extrabold text-orange-400 mb-2">150+</div>
                <div className="text-gray-300 font-semibold">Happy Clients</div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.8}>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Results</h3>
                <p className="text-gray-300">Measurable improvements within 30 days</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={1.0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Dedicated support team always available</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={1.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Security</h3>
                <p className="text-gray-300">GDPR compliant and secure data handling</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Scale Your Revenue?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get a free growth audit and discover how to 3x your digital marketing ROI in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={() => track('cta_click', { location: 'services_bottom_cta' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/quote"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 inline-flex items-center justify-center"
              >
                Get Custom Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Services
