import { 
  Users, 
  Award, 
  Target, 
  Eye, 
  Lightbulb, 
  Shield, 
  TrendingUp,
  ArrowRight,
  DollarSign,
  BarChart3,
  Search,
  Share2,
  MousePointer,
  Rocket,
  Brain,
  Zap,
  Clock,
  MessageCircle,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Code
} from 'lucide-react'
import CTASection from '../components/CTASection'
import AdBanner from '../components/AdBanner'
import Testimonials from '../components/Testimonials'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'
import { track } from '../utils/tracking'

const About = () => {
  const values = [
    {
      icon: <Target className="text-4xl text-orange-500" />,
      title: "Performance-Driven",
      description: "We focus on measurable results and ROI-driven strategies that deliver real business value"
    },
    {
      icon: <Brain className="text-4xl text-orange-500" />,
      title: "Data Intelligence",
      description: "We leverage advanced analytics and AI to make informed decisions and optimize campaigns"
    },
    {
      icon: <Zap className="text-4xl text-orange-500" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve"
    },
    {
      icon: <Shield className="text-4xl text-orange-500" />,
      title: "Transparency",
      description: "We maintain complete transparency in our processes, reporting, and client relationships"
    }
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      expertise: "Digital Strategy & Growth",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description: "15+ years in digital marketing, former Google Ads strategist"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      expertise: "Technical Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Expert in marketing automation and analytics platforms"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Growth",
      expertise: "Performance Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Specialized in paid media and conversion optimization"
    }
  ]

  const achievements = [
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: "$50M+ Revenue Generated",
      description: "For our clients through strategic digital marketing campaigns"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: "500% Average ROAS",
      description: "Across all paid media campaigns we manage"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "300% Growth Rate",
      description: "Average client revenue increase within first year"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Industry Recognition",
      description: "Certified Google, Meta, and LinkedIn marketing partners"
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
                🚀 About Our Mission
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">MediaMonetix</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're the <span className="text-orange-400 font-semibold">digital marketing and revenue growth experts</span> who turn traffic into profit. 
                Our data-driven approach and innovative strategies help businesses scale faster than ever.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Who We <span className="text-orange-600">Are</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  MediaMonetix is a <span className="text-orange-600 font-semibold">performance-driven digital marketing agency</span> specializing in 
                  revenue growth, conversion optimization, and scalable marketing systems. Founded in 2019, we've evolved from a small startup 
                  to a trusted growth partner for businesses worldwide.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of <span className="text-orange-600 font-semibold">certified digital marketing experts</span>, data analysts, and growth strategists 
                  work together to deliver measurable results that drive business growth and maximize ROI across all digital channels.
                </p>
                
                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <AnimatedSection delay={0.4}>
                    <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                      <div className="text-4xl font-extrabold text-orange-500 mb-2">5+</div>
                      <div className="text-gray-600 font-semibold">Years Experience</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.5}>
                    <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                      <div className="text-4xl font-extrabold text-orange-500 mb-2">500+</div>
                      <div className="text-gray-600 font-semibold">Campaigns Managed</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.6}>
                    <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                      <div className="text-4xl font-extrabold text-orange-500 mb-2">150+</div>
                      <div className="text-gray-600 font-semibold">Happy Clients</div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.7}>
                    <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                      <div className="text-4xl font-extrabold text-orange-500 mb-2">24/7</div>
                      <div className="text-gray-600 font-semibold">Support</div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="left">
              <div className="relative">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our Digital Marketing Team"
                  className="rounded-2xl shadow-2xl"
                  imgClassName="w-full h-full object-cover rounded-2xl"
                  delay={0.5}
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">500% ROAS</div>
                      <div className="text-sm text-gray-600">Average</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center">
                    <DollarSign className="h-6 w-6 text-green-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">$50M+</div>
                      <div className="text-sm text-gray-600">Revenue Generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Core <span className="text-orange-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                These values guide everything we do and shape our company culture in the digital marketing space.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <AdBanner
                title="Partner Offer"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=300&fit=crop"
                href="#"
                onClick={() => track('ad_click', { location: 'about_top_ad' })}
              />
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orange-200">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed text-orange-100">
                  To empower businesses through <span className="text-white font-semibold">data-driven digital marketing strategies</span> that drive measurable growth, 
                  enhance conversion rates, and create sustainable revenue streams that scale with their success.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed text-orange-100">
                  To be the <span className="text-white font-semibold">leading digital marketing and monetization partner</span>, recognized globally for our 
                  innovative approach, exceptional ROI delivery, and commitment to transforming businesses into revenue-generating powerhouses.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-orange-600">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our diverse team of certified digital marketing experts brings together years of experience, 
                cutting-edge knowledge, and passion for driving measurable results.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative mb-6">
                    <AnimatedImage
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                      imgClassName="w-24 h-24 rounded-full object-cover mx-auto"
                      delay={0.5 + index * 0.1}
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop' }}
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-orange-600 font-semibold mb-2">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-4">{member.expertise}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Team Expertise Areas */}
          <AnimatedSection delay={0.6}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search Marketing</h3>
                <p className="text-gray-600 leading-relaxed">
                  SEO specialists and Google Ads experts who drive qualified traffic and maximize conversion rates.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & CRO</h3>
                <p className="text-gray-600 leading-relaxed">
                  Data analysts and conversion optimization experts who turn insights into revenue growth.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic thinkers who develop scalable marketing systems and revenue optimization strategies.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-orange-400">Achievements</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real results that speak to our expertise and commitment to client success.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials & CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AnimatedSection>
          <Testimonials items={[
            {
              name: 'Alex Morgan',
              company: 'FinTech Co.',
              role: 'Founder',
              content: 'MediaMonetix accelerated our launch and improved conversions by 35%. Their data-driven approach transformed our marketing ROI.',
              rating: 5
            },
            {
              name: 'Sarah Williams',
              company: 'E-commerce Solutions',
              role: 'CMO',
              content: 'The team delivered exceptional results across all channels. Our revenue increased by 300% within the first year.',
              rating: 5
            },
            {
              name: 'David Chen',
              company: 'SaaS Startup',
              role: 'CEO',
              content: 'Outstanding expertise in digital marketing. They built a scalable growth system that continues to drive results.',
              rating: 5
            }
          ]} />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="mt-12">
            <CTASection 
              heading="Ready to Scale Your Business?" 
              sub="Get a free growth audit and discover how to 3x your digital marketing ROI in 90 days." 
              primary={{ to: '/contact', label: 'Get Free Audit' }}
              secondary={{ to: '/service', label: 'View Services' }}
              onPrimaryClick={() => track('cta_click', { location: 'about_bottom_cta' })} 
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default About
