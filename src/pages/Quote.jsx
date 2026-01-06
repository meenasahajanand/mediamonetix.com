import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { CheckCircle } from 'lucide-react'
import { track } from '../utils/tracking'

const Quote = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    monthlyBudget: '',
    goals: '',
    channels: [],
    message: ''
  })

  const channels = ['Paid Ads (Google/Meta)', 'SEO', 'CRO/Experimentation', 'Affiliate/Partnerships', 'Analytics/Attribution']

  const toggleChannel = (c) => {
    setForm((f) => ({
      ...f,
      channels: f.channels.includes(c) ? f.channels.filter((x) => x !== c) : [...f.channels, c]
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    track('quote_submit', { ...form, location: 'quote_page' })
    alert('Thanks! Your request was recorded. We will contact you shortly.')
    setForm({ name: '', email: '', website: '', monthlyBudget: '', goals: '', channels: [], message: '' })
  }

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Growth Quote</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Tell us about your digital marketing and monetisation goals. We’ll send a tailored plan, timeline, and pricing.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What’s included</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <ul className="space-y-3 text-gray-700">
                {["Account & analytics audit (GA4/GTM)", 'Paid & SEO opportunity sizing', 'CRO test plan with prioritisation', 'Affiliate monetisation roadmap', 'Projected KPIs & timeline'].map((i, idx) => (
                  <li key={idx} className="flex items-start"><CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />{i}</li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          <div>
            <AnimatedSection delay={0.2}>
              <form onSubmit={submit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <input value={form.website} onChange={(e)=>setForm({...form,website:e.target.value})} placeholder="Website / App URL" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              <div className="grid md:grid-cols-2 gap-4">
                <select value={form.monthlyBudget} onChange={(e)=>setForm({...form,monthlyBudget:e.target.value})} className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Estimated Monthly Budget</option>
                  <option value="<$2k">Less than $2k</option>
                  <option value="$2k-$5k">$2k - $5k</option>
                  <option value="$5k-$15k">$5k - $15k</option>
                  <option value=">$15k">Above $15k</option>
                </select>
                <input value={form.goals} onChange={(e)=>setForm({...form,goals:e.target.value})} placeholder="Primary Goal (ROAS, leads, sales)" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Channels of Interest</div>
                <div className="flex flex-wrap gap-2">
                  {channels.map((c)=> (
                    <button type="button" key={c} onClick={()=>toggleChannel(c)} className={`px-3 py-1.5 rounded-full border ${form.channels.includes(c)?'bg-orange-600 text-white border-orange-600':'border-gray-300 text-gray-700 hover:border-gray-400'}`}>{c}</button>
                  ))}
                </div>
              </div>
              <textarea rows={5} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Tell us about your audience, product, and current marketing..." className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg">Request Quote</button>
              <div className="text-xs text-gray-500">We respond within 24 hours. No spam.</div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quote


