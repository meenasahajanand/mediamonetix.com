import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { track } from '../utils/tracking'

const Offer = () => {
  const bullets = [
    'Audit of current acquisition and analytics (GA4/GTM)',
    'Paid media plan with creative angles and budgets',
    'SEO roadmap: technical fixes, topical map, content briefs',
    'CRO experiments prioritized by projected uplift',
    'Affiliate monetisation setup and partner sourcing',
    'Measurement framework with KPIs and reporting cadence'
  ]

  const tiers = [
    { name: 'Starter', price: '$1,499/mo', items: ['Account setup', '3 experiments/mo', 'Monthly reporting'] },
    { name: 'Growth', price: '$3,999/mo', items: ['Multi-channel ads', '6 experiments/mo', 'Weekly reporting'] },
    { name: 'Scale', price: 'Custom', items: ['7-figure budgets', 'Advanced attribution', 'Dedicated squad'] }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Growth & Monetisation Blueprint</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">A step-by-step plan to acquire users, increase conversions, and maximize revenue across paid, organic, CRO, and affiliates.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What you get</h2>
            <ul className="space-y-3">
              {bullets.map((b,i)=> (
                <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />{b}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" onClick={()=>track('cta_click',{location:'offer_top_cta'})} className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Your Blueprint <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=700&fit=crop" alt="Growth Plan" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t,idx)=> (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="text-xl font-semibold mb-1">{t.name}</div>
                <div className="text-3xl font-extrabold text-orange-600 mb-4">{t.price}</div>
                <ul className="text-gray-700 space-y-2 mb-6">
                  {t.items.map((it,i)=>(
                    <li key={i} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{it}</li>
                  ))}
                </ul>
                <Link to="/contact" onClick={()=>track('cta_click',{location:`offer_tier_${t.name}`})} className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-lg">Choose {t.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">FAQ</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <div className="font-semibold">How fast can we see results?</div>
              <p>Quick wins typically appear within 2–4 weeks via CRO and creative testing, while SEO compounds over 8–12 weeks.</p>
            </div>
            <div>
              <div className="font-semibold">Do you work with existing teams?</div>
              <p>Yes. We can act as your full growth squad or embed with your marketing and engineering teams.</p>
            </div>
            <div>
              <div className="font-semibold">How do you measure success?</div>
              <p>We align on north-star KPIs (ROAS, CAC/LTV, revenue per visitor) and build dashboards for transparent reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer


