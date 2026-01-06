import { 
  Users,
  GraduationCap,
  BarChart3,
  MousePointerClick,
  Megaphone,
  LineChart,
  ShieldCheck,
  Cloud,
  CheckCircle,
  Clock,
  MapPin,
  Briefcase,
  Trophy,
  Rocket
} from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { track } from '../utils/tracking'
import AnimatedSection from '../components/AnimatedSection'

const Career = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const openApplyModal = (roleTitle) => {
    setSelectedRole(roleTitle)
    setIsModalOpen(true)
    track('apply_modal_open', { role: roleTitle })
  }

  const goToFullApply = (roleTitle) => {
    track('apply_full_click', { role: roleTitle })
    navigate('/career/apply', { state: { role: roleTitle } })
  }

  const closeApplyModal = () => {
    setIsModalOpen(false)
    setSelectedRole('')
    setFormData({ fullName: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      track('apply_submit', { role: selectedRole, ...formData })
      // Simulate submit success; integrate API/email service here if needed
      // eslint-disable-next-line no-alert
      alert('Application submitted successfully!')
      closeApplyModal()
    } finally {
      setIsSubmitting(false)
    }
  }
  const jobOpenings = [
    {
      title: 'Performance Marketing Manager (Paid Media)',
      department: 'Growth Marketing',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '4-6 years',
      icon: <Megaphone className="text-2xl text-orange-500" />,
      description:
        'Own ROAS-driven campaigns across Google, Meta, and LinkedIn. You will manage budgets, build experiments, and scale winners to hit CAC/LTV targets.',
      requirements: [
        'Hands-on with Google Ads, Facebook Ads, and LinkedIn Ads',
        'Deep understanding of attribution and pixel/server-side tracking',
        'Strong command of A/B testing and creative iteration',
        'Proven track record managing 6–7 figure monthly budgets'
      ]
    },
    {
      title: 'SEO & Content Lead',
      department: 'Organic Growth',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      icon: <BarChart3 className="text-2xl text-orange-500" />,
      description:
        'Lead our SEO strategy: technical audits, topical maps, briefs, and content velocity to capture high-intent traffic and monetize via funnels.',
      requirements: [
        'Technical SEO (Core Web Vitals, schema, internal linking)',
        'Editorial strategy and content operations',
        'Experience with Ahrefs/Semrush/Search Console',
        'Results improving rankings and organic conversions'
      ]
    },
    {
      title: 'CRO/Analytics Specialist',
      department: 'Conversion & Monetisation',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      icon: <LineChart className="text-2xl text-orange-500" />,
      description:
        'Increase revenue per visitor using experimentation. You will design hypotheses, implement tests, and quantify uplift end-to-end.',
      requirements: [
        'GA4, GTM, Looker/Data Studio proficiency',
        'Experiment design with Optimizely/VWO/Google Optimize alternatives',
        'SQL or spreadsheet modeling skills',
        'Comfort collaborating with design and engineering'
      ]
    },
    {
      title: 'Affiliate Partnerships Manager',
      department: 'Monetisation',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      icon: <MousePointerClick className="text-2xl text-orange-500" />,
      description:
        'Build and manage affiliate programs. Source partners, negotiate terms, and optimize EPC/CR with creative and landing page improvements.',
      requirements: [
        'Experience with affiliate networks and tracking platforms',
        'Strong partner management and negotiation skills',
        'Understanding of funnels and payout structures',
        'Copy/creative feedback for higher CTR/CVR'
      ]
    },
    {
      title: 'MarTech Engineer (Tracking/Automation)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      icon: <Cloud className="text-2xl text-orange-500" />,
      description:
        'Own analytics and automation: server-side tagging, ETL to warehouse, and marketing data pipelines to enable precise attribution.',
      requirements: [
        'GTM server-side/Segment/RudderStack experience',
        'Event schemas and data modelling',
        'APIs, webhooks, and automation tools (Zapier/Make)',
        'Privacy compliance and data governance awareness'
      ]
    }
  ]

  const benefits = [
    { icon: <Trophy className="text-3xl text-orange-500" />, title: 'Performance Bonuses', description: 'Revenue-share and KPI bonuses for real impact' },
    { icon: <GraduationCap className="text-3xl text-orange-500" />, title: 'Learning Budget', description: 'Courses, tools, and conferences covered' },
    { icon: <ShieldCheck className="text-3xl text-orange-500" />, title: 'Remote-first Culture', description: 'Flexible hours and async collaboration' },
    { icon: <Rocket className="text-3xl text-orange-500" />, title: 'High-growth Environment', description: 'Ship fast, measure, and scale winners' }
  ]

  const hiringProcess = [
    {
      step: "1",
      title: "Application",
      description: "Submit your resume and cover letter"
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Our team reviews your application"
    },
    {
      step: "3",
      title: "Interview",
      description: "Technical and cultural fit interview"
    },
    {
      step: "4",
      title: "Decision",
      description: "We make our hiring decision"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growth & Monetisation Team</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Help brands acquire users, increase conversions, and scale revenue through paid media, SEO, CRO, and partnerships.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Work at MediaMonetix?</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Own outcomes, not tickets. We reward experiments that move the needle on revenue and customer lifetime value.</p>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.05}>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Open Roles</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">We hire builders who think in experiments, unit economics, and growth loops.</p>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.05}>
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-orange-500 font-medium">{job.department}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.experience}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => { goToFullApply(job.title) }} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                      Quick Apply
                    </button>
                    <button onClick={() => { goToFullApply(job.title) }} className="w-full bg-white border border-orange-500 text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-orange-50 transition duration-300">
                      Full Application
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Hiring Process</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple, transparent, and fast. Here’s how we collaborate from the first chat to joining.</p>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Application', description: 'Share your resume, portfolio, and impact highlights' },
              { step: '2', title: 'Initial Review', description: 'We assess experience and outcomes you’ve driven' },
              { step: '3', title: 'Interview', description: 'Skills chat and a short practical exercise' },
              { step: '4', title: 'Decision', description: 'Offer with clear KPIs and growth path' }
            ].map((s, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.05}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-extrabold">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <CTASection heading="Don’t see your role?" sub="Send your resume and portfolio. We’ll reach out when there’s a fit." onPrimaryClick={() => track('cta_click', { location: 'career_bottom_cta' })} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={closeApplyModal} />
          <div className="relative bg-white w-full max-w-xl mx-auto rounded-xl shadow-2xl border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-600 to-orange-800 rounded-t-xl">
              <h3 className="text-xl font-semibold text-white">Apply for {selectedRole}</h3>
              <p className="text-white/80 text-sm">Fill in all required fields to submit your application</p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input type="text" value={selectedRole} readOnly className="w-full rounded-lg border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name<span className="text-red-500"> *</span></label>
                <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} className={`w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="Your full name" />
                {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email<span className="text-red-500"> *</span></label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="you@example.com" />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone<span className="text-red-500"> *</span></label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="Your phone number" />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message<span className="text-red-500"> *</span></label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="Tell us why you're a great fit" />
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>
              <div className="flex items-center justify-end space-x-3 pt-2">
                <button type="button" onClick={closeApplyModal} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" disabled={isSubmitting} className={`px-5 py-2 rounded-lg text-white font-semibold transition ${isSubmitting ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}>{isSubmitting ? 'Submitting...' : 'Submit Application'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Career
