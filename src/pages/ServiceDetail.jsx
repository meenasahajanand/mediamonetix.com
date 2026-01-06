import { useParams, Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Search, Megaphone, FileText, Mail, Puzzle, Rocket, BarChart3, Link2, Shield, FlaskConical, LineChart, Users, Target, TrendingUp, Wallet, Camera, Image as ImageIcon, Video } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedImage from '../components/AnimatedImage'

const PAGES = {
  'search-arbitrage': {
    title: 'Search Arbitrage',
    tagline: 'Acquire undervalued clicks and convert them with premium demand partners.',
    heroClass: 'from-orange-600 to-orange-800',
    intro: [
      'We buy undervalued clicks from multiple sources and monetize them through premium demand partners.',
      'Our system auto‑routes traffic to Afd, Rsoc, Afs, Yahoo and Bing based on yield, compliance and user intent.',
      'Everything is measured server‑side with real‑time throttling, scrub protection and price‑mapping.'
    ],
    sections: [
      {
        heading: 'Arbitrage Stack',
        cards: [
          {
            title: 'Afd (Google AdSense for Domains)',
            desc: 'Transform parked domains into high-converting revenue streams with Google\'s premium demand ecosystem and AI-powered optimization.',
            icon: 'Search',
            bullets: [
              'AI-driven feed integration with real-time quality scoring and RPM optimization.',
              'Advanced page-level A/B testing for maximum revenue per visitor.',
              'Enterprise-grade throttling, fraud protection, and compliance monitoring.',
              '2025-ready: Machine learning algorithms for predictive yield optimization.',
              'Global scale: Multi-region deployment with localized ad experiences.'
            ]
          },
          {
            title: 'Rsoc',
            desc: 'Revolutionary search arbitrage platform connecting premium publishers with high-intent buyers through advanced programmatic infrastructure.',
            icon: 'Megaphone',
            bullets: [
              'Next-gen multi-feed demand orchestration with real-time bid optimization.',
              'AI-powered compliance filtering and brand safety protection.',
              'Dynamic bid shading and floor optimization for maximum yield.',
              '2025 innovation: Predictive analytics for traffic quality scoring.',
              'Enterprise integration: Seamless API connectivity and custom reporting.'
            ]
          },
          {
            title: 'Afs (AdSense for Search)',
            desc: 'Monetize internal search traffic with Google\'s cutting-edge search monetization technology and privacy-first approach.',
            icon: 'FileText',
            bullets: [
              'Advanced custom search UX with personalized ad placements and user experience optimization.',
              'AI-driven query-level blocking and brand safety with real-time content analysis.',
              'Server-side metrics, callbacks, and comprehensive analytics dashboard.',
              '2025 features: Privacy-compliant tracking and cookieless attribution.',
              'Global reach: Multi-language support with localized search experiences.'
            ]
          },
          {
            title: 'Yahoo Search Partners',
            desc: 'Leverage Yahoo\'s premium search ecosystem with advanced monetization tools and global reach capabilities.',
            icon: 'Mail',
            bullets: [
              'Direct Yahoo feed integration with real-time performance optimization.',
              'Advanced marketplace routing with intelligent traffic distribution.',
              'Enterprise-grade fallback rules and sub-100ms latency control.',
              '2025 advantage: Yahoo\'s privacy-focused advertising platform.',
              'Global monetization: Multi-region support with localized ad experiences.'
            ]
          },
          {
            title: 'Microsoft Bing Ads',
            desc: 'Maximize revenue through Microsoft\'s sophisticated search advertising platform with AI-powered optimization.',
            icon: 'Mail',
            bullets: [
              'Direct Microsoft feed integration with advanced bid management.',
              'AI-driven marketplace performance routing and yield optimization.',
              'Enterprise fallback rules with intelligent traffic allocation.',
              '2025 innovation: Microsoft\'s privacy-first advertising solutions.',
              'Global scale: Worldwide reach with localized targeting and optimization.'
            ]
          }
        ]
      },
      {
        heading: 'Monetisation Solutions',
        cards: [
          { title: 'Ad Mediation & Demand Aggregation', desc: 'Connect to multiple ad networks and maximize yield.', icon: 'Puzzle', bullets: ['Optimize fill rates, eCPMs and revenues.', 'Waterfall and in‑app header bidding.'] },
          { title: 'Programmatic Ad Serving', desc: 'Deliver ads via RTB, PMPs and SSPs.', icon: 'Rocket', bullets: ['Support banners, video, rewarded formats.', 'Automate placements for better ROI.'] },
          { title: 'High‑Impact Ad Formats', desc: 'Engaging formats that boost revenue.', icon: 'TrendingUp', bullets: ['Rewarded video ads for apps.', 'Interactive and immersive ads.', 'High CPM experiences.'] },
          { title: 'Yield Optimization & Analytics', desc: 'Real‑time tracking and optimization.', icon: 'BarChart3', bullets: ['ML for floor pricing.', 'Prioritize high‑paying partners.'] },
          { title: 'Affiliate & Subscription Models', desc: 'Diversified monetisation for web and apps.', icon: 'Wallet', bullets: ['Affiliate links and partnerships.', 'Premium subscriptions.', 'Hybrid models.'] }
        ]
      },
      {
        heading: 'Engagement & Strategy',
        cards: [
          { title: 'User Engagement Strategies', desc: 'Retain users with incentive‑driven experiences.', icon: 'Users', bullets: ['Push notifications for re‑engagement.', 'In‑app gamification (rewards, badges).', 'Loyalty programs.'] },
          { title: 'Audience Targeting & Data Strategy', desc: 'Make data‑driven decisions.', icon: 'Target', bullets: ['Collect & analyze user behavior.', 'Segment by location/interests/actions.', 'Use AI to predict intent.'] },
          { title: 'Ad Quality & Fraud Protection', desc: 'Protect budgets and brand safety.', icon: 'Shield', bullets: ['Block IVT and fake clicks.', 'Ensure brand‑safe advertising.', 'Industry‑standard detection.'] },
          { title: 'Monetisation Strategy Consulting', desc: 'Tailored consulting for publishers & advertisers.', icon: 'LineChart', bullets: ['Roadmap for short‑ and long‑term growth.', 'Dedicated expert advice.'] }
        ]
      }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    tagline: 'Grow brand awareness and community with performance creatives.',
    heroClass: 'from-purple-600 to-fuchsia-700',
    intro: [
      'We plan, produce and optimize social campaigns that drive measurable outcomes across Meta, LinkedIn, TikTok and more.',
      'Our creative and media teams iterate fast using data to improve CPAs and ROAS.',
      'From audience strategy and content production to attribution and CRM, we cover the full social growth stack.'
    ],
    sections: [
      {
        heading: 'Digital Marketing',
        cards: [
          { title: 'Paid Social Campaigns', desc: 'Full‑funnel paid campaigns across Meta, LinkedIn and TikTok.', icon: 'Megaphone', bullets: ['Creative testing framework.', 'Audience & look‑alike targeting.', 'Event tracking and attribution.'] },
          { title: 'Community & Content', desc: 'Organic and paid content to engage audiences.', icon: 'Users', bullets: ['Short‑form video and carousels.', 'UGC and influencer collabs.', 'Editorial calendars and scheduling.'] },
          { title: 'Analytics & Reporting', desc: 'Outcome‑driven dashboards and insights.', icon: 'BarChart3', bullets: ['Channel‑wise ROAS/CPA.', 'Creative performance tracking.', 'Clear next actions.'] }
        ]
      },
      {
        heading: 'Monetisation Solutions',
        cards: [
          { title: 'Affiliate & Partnerships', desc: 'Build revenue with affiliate programs and partner campaigns.', icon: 'Link2', bullets: ['Offer selection and tracking.', 'Creator/partner onboarding.', 'Payout and compliance.'] },
          { title: 'Lead Gen & Funnels', desc: 'High‑converting landing pages and CRM automations.', icon: 'TrendingUp', bullets: ['Lead magnets and forms.', 'Email sequences & retargeting.', 'Optimized user journeys.'] }
        ]
      },
      {
        heading: 'Engagement & Strategy',
        cards: [
          { title: 'Audience Strategy', desc: 'Segmentation by interest, intent and lifecycle.', icon: 'Target', bullets: ['First‑party data usage.', 'Behavior cohorts.', 'Predictive audiences.'] },
          { title: 'Brand Safety & Quality', desc: 'Protect brand integrity and budgets.', icon: 'Shield', bullets: ['Placement controls.', 'Invalid engagement monitoring.', 'Policy‑compliant creatives.'] }
        ]
      },
      {
        heading: 'Creative Production',
        cards: [
          { title: 'Video & Reels', desc: 'High‑impact short‑form videos designed for thumb‑stopping attention.', icon: 'Video', bullets: ['Hook‑first scripts.', 'Motion graphics & captions.', 'Platform‑native formats.'] },
          { title: 'Product Photography', desc: 'On‑brand stills and carousel imagery that convert.', icon: 'Camera', bullets: ['Lighting & composition.', 'Lifestyle and studio sets.', 'Fast delivery workflows.'] },
          { title: 'Design Systems', desc: 'Reusable brand components for speed at scale.', icon: 'ImageIcon', bullets: ['Templates for posts/ads.', 'Variant generation at scale.', 'Brand consistency.'] }
        ]
      }
    ]
  },
  'digitalmarketing': {
    title: 'Digital Marketing',
    tagline: 'Google Ads, App Installs, Lead Generation, Affiliate and E‑commerce growth.',
    heroClass: 'from-orange-600 to-orange-800',
    intro: [
      'We design ROI‑positive marketing programs across search and social with rigorous testing.',
      'From high‑intent search to full‑funnel e‑commerce, our playbooks scale profitably.'
    ],
    sections: [
      {
        heading: 'Google Ads',
        cards: [
          { title: 'Search & Performance Max', desc: 'Capture high‑intent demand across keywords and inventory.', icon: 'Search', bullets: ['Granular SKAG/intent clusters','Ad rank and QS improvements','PMax with feed & creative'] },
          { title: 'Tracking & Bidding', desc: 'Measure correctly; bid for business goals.', icon: 'BarChart3', bullets: ['CAPI/GA4 + conversions','TROAS/TCPA frameworks','Attribution sanity checks'] },
          { title: 'Creatives & Extensions', desc: 'Compelling copy and assets that win auctions.', icon: 'Megaphone', bullets: ['Responsive search ads','Sitelinks/callouts/price','Ad customizers'] }
        ]
      },
      {
        heading: 'App Install Campaigns',
        cards: [
          { title: 'UAC & ASA', desc: 'Scale installs with downstream event optimization.', icon: 'Rocket', bullets: ['Event mapping for ROAS','Creative iteration weekly','Store listings A/B tests'] },
          { title: 'Measurement', desc: 'Privacy‑safe installs and cohorts.', icon: 'Shield', bullets: ['SKAN v4+ schema','MMP integrations','Cohort LTV tracking'] },
          { title: 'Retention & Monetization', desc: 'Turn installs into revenue.', icon: 'Wallet', bullets: ['Onboarding funnels','Push/CRM playbooks','Ads/IAP mix guidance'] }
        ]
      },
      {
        heading: 'Lead Generation',
        cards: [
          { title: 'Funnels & Offers', desc: 'High‑intent landers with clear value props.', icon: 'FileText', bullets: ['Form simplification','Trust & proof blocks','Speed & mobile first'] },
          { title: 'Audiences & Nurture', desc: 'Warm + cold mixes with automation.', icon: 'Users', bullets: ['Look‑alikes & exclusions','Email/SMS sequences','CRM + webhook piping'] },
          { title: 'Compliance & QA', desc: 'Verified leads only.', icon: 'Shield', bullets: ['Validation & dedupe','Geo/time routing','Spam prevention'] }
        ]
      },
      {
        heading: 'Affiliate Marketing',
        cards: [
          { title: 'Program Setup', desc: 'Attract, approve and activate partners.', icon: 'Link2', bullets: ['Offer structure & payouts','Tracking links & pixels','Comms & enablement'] },
          { title: 'Recruit & Manage', desc: 'Grow top‑performing partners.', icon: 'Megaphone', bullets: ['Creator/influencer sourcing','Promo calendars','Fraud & compliance rules'] },
          { title: 'Reporting', desc: 'Transparent performance.', icon: 'BarChart3', bullets: ['Partner leaderboards','SKU/offer ROAS','Weekly insights'] }
        ]
      },
      {
        heading: 'E‑Commerce Growth',
        cards: [
          { title: 'Feed & Catalogs', desc: 'Perfect product data across channels.', icon: 'FileText', bullets: ['Titles/attributes optimization','Merchant Center hygiene','Back‑in‑stock flows'] },
          { title: 'Conversion & AOV', desc: 'Raise CR and order value.', icon: 'TrendingUp', bullets: ['Upsells/cross‑sells','Reviews & UGC','Checkout speedups'] },
          { title: 'Retention', desc: 'Repeat revenue engine.', icon: 'Users', bullets: ['Email/SMS segmentation','Loyalty & subscriptions','Win‑back automations'] }
        ]
      }
    ]
  },
  monetisation: {
    title: 'Monetisation Solutions',
    tagline: 'Turn traffic into predictable revenue.',
    heroClass: 'from-orange-600 to-amber-700',
    intro: [
      'We design monetisation systems for apps and websites using ads, affiliates and subscriptions.',
      'Our focus is sustainable ARPU growth with excellent user experience.'
    ],
    sections: [
      {
        heading: 'Ad Stack & Demand',
        cards: [
          { title: 'Ad Mediation & Demand Aggregation', desc: 'Connect to multiple ad networks and maximize yield.', icon: 'Puzzle', bullets: ['Optimize fill rates, eCPMs and revenues.', 'Waterfall and in‑app header bidding.'] },
          { title: 'Programmatic Ad Serving', desc: 'Deliver ads via RTB, PMPs and SSPs.', icon: 'Rocket', bullets: ['Banners, interstitial, native & rewarded.', 'Automated placements for better ROI.'] },
          { title: 'High‑Impact Ad Formats', desc: 'Engaging formats that boost revenue.', icon: 'TrendingUp', bullets: ['Rewarded video for apps.', 'Interactive experiences.', 'High CPM formats.'] }
        ]
      },
      {
        heading: 'Optimization & Analytics',
        cards: [
          { title: 'Yield Optimization & Analytics', desc: 'Track and optimize performance in real time.', icon: 'BarChart3', bullets: ['ML floor pricing.', 'Demand prioritization.', 'Partner performance analysis.'] },
          { title: 'A/B Testing for Ad Strategy', desc: 'Controlled experiments for formats and pricing.', icon: 'FlaskConical', bullets: ['Discover highest‑performing combinations.', 'Improve revenue and retention.'] }
        ]
      },
      {
        heading: 'Models & Strategy',
        cards: [
          { title: 'Affiliate & Subscription Models', desc: 'Diversify revenue for web and apps.', icon: 'Wallet', bullets: ['Affiliate links & partnerships.', 'Premium subscriptions.', 'Hybrid models.'] },
          { title: 'Monetisation Strategy Consulting', desc: 'Tailored consulting for publishers & advertisers.', icon: 'LineChart', bullets: ['Short‑ & long‑term roadmap.', 'Dedicated expert advice.'] }
        ]
      }
    ]
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const data = PAGES[slug]

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link to="/service" className="text-orange-600 font-semibold">Back to Services</Link>
      </div>
    )
  }

  const ICONS = { Search, Megaphone, FileText, Mail, Puzzle, Rocket, BarChart3, Link2, Shield, FlaskConical, LineChart, Users, Target, TrendingUp, Wallet, Camera, ImageIcon, Video }
  const IconBadge = ({ name, dark = false }) => {
    const Cmp = ICONS[name]
    if (!Cmp) return null
    return (
      <div className={`${dark ? 'bg-white/10 border-white/20' : 'bg-orange-50 border-orange-200'} mx-auto mb-5 h-20 w-20 rounded-full border flex items-center justify-center`}>
        <Cmp className={`w-10 h-10 ${dark ? 'text-orange-300' : 'text-orange-500'}`} />
      </div>
    )
  }

  // Distinct layouts per service
  const renderSearchMarketing = () => (
    <>
      <section className={"relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 overflow-hidden"}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
              🔎 Search Arbitrage
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">{data.title}</h1>
            {data.tagline && <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">{data.tagline}</p>}
          </AnimatedSection>
        </div>
      </section>









      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection delay={0.2}>
            <AnimatedImage
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop"
              alt="Search arbitrage analytics"
              className="w-full rounded-2xl shadow-lg"
              delay={0.3}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div>
              {Array.isArray(data.intro) ? (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {data.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed">{data.intro}</p>
              )}
              <div className="mt-8">
                <Link to="/searcharbitragesquote" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Arbitrage Partners (duplicate icon-card section ABOVE as requested) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Arbitrage Partners</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Afd, Rsoc, Afs, Yahoo & Bing — the core partners we integrate with and optimize across.</p>
              <div className="mt-3 h-1 w-24 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data.sections?.[0]?.cards || []).map((card, cIdx) => (
              <AnimatedSection key={`partners-icons-dup-${cIdx}`} delay={0.2 + cIdx * 0.1}>
                <div className="bg-white rounded-2xl border border-orange-100 p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-transparent hover:ring-orange-200 min-h-[280px] flex flex-col group">
                  <IconBadge name={card.icon} />
                  <div className="text-center">
                    <div className="text-lg font-bold mb-2 text-gray-900">{card.title}</div>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                  </div>
                  {card.bullets && (
                    <ul className="text-gray-700 space-y-2 mt-auto text-left">
                      {card.bullets.map((b, i) => (
                        <li key={i} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Arbitrage Partners</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">We integrate with premium search demand and optimize in real time for RPM and compliance.</p>
              <div className="mt-3 h-1 w-24 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title:'Afd (AdSense for Domains)', img:'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=800&auto=format&fit=crop', bullets:['Quality scoring','RPM experiments','Scrub protection'], emoji:'✨'},
              {title:'Rsoc', img:'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop', bullets:['Multi‑feed orchestration','Compliance filtering','Bid shading'], emoji:'🔁'},
              {title:'Afs (AdSense for Search)', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop', bullets:['Custom search UI','Brand safety','Server‑side metrics'], emoji:'🔍'},
              {title:'Yahoo + Bing', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', bullets:['Direct feed testing','Marketplace routing','Latency control'], emoji:'🧭'}
            ].map((p, i)=> (
              <AnimatedSection key={p.title} delay={0.2 + i*0.1}>
                <div className="bg-white rounded-2xl border border-orange-100 shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 w-full overflow-hidden">
                    <AnimatedImage src={p.img} alt={p.title} className="w-full h-full" imgClassName="w-full h-full object-cover" delay={0.3 + i*0.1} />
                  </div>
                  <div className="p-6">
                    <div className="text-lg font-bold text-gray-900 mb-2">{p.emoji} {p.title}</div>
                    <ul className="text-gray-700 space-y-2">
                      {p.bullets.map((b, j)=> (
                        <li key={j} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engine Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
          {[
            {title:'Acquire', text:'Buy undervalued clicks from multiple sources with smart budgets and rules.', img:'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1000&auto=format&fit=crop', emoji:'🛒'},
            {title:'Route', text:'Match queries to the best-paying partner in real time using our price map.', img:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop', emoji:'🔀'},
            {title:'Monetize', text:'Serve compliant results and high‑RPM formats; measure, learn, and iterate.', img:'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1000&auto=format&fit=crop', emoji:'💸'}
          ].map((s, i)=> (
            <AnimatedSection key={s.title} delay={0.2 + i*0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <AnimatedImage src={s.img} alt={s.title} className="w-full h-44" imgClassName="w-full h-full object-cover" />
                <div className="p-6">
                  <div className="text-xl font-bold text-gray-900 mb-2">{s.emoji} {s.title}</div>
                  <p className="text-gray-700">{s.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )

  const renderSocialMedia = () => (
    <>
      {/* Hero */}
      <section className={"relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 overflow-hidden"}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">📱 Social Media Marketing</div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Own Every Social Channel</h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">We build platform‑native campaigns and creatives that entertain, educate and convert across Facebook, TikTok, Snapchat, LinkedIn and Twitter (X).</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Channel Playbooks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Channel Playbooks</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">High‑impact creative formats, audience strategies and optimization frameworks for each platform.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title:'Facebook',
              img:'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
              bullets:['Meta Advantage+ campaigns with AI-powered optimization','Facebook Shops + Instagram Checkout integration','Creator monetization through Reels Play bonus program','Live shopping events with instant checkout','Branded content partnerships and sponsored posts','Advanced audience targeting with custom and lookalike audiences','CAPI integration for enhanced conversion tracking','Facebook Gaming monetization for content creators']
            },{
              title:'TikTok',
              img:'https://images.unsplash.com/photo-1600880292089-90e24be3bba1?q=80&w=1200&auto=format&fit=crop',
              bullets:['TikTok Shop integration with live commerce features','Creator Fund and TikTok Creator Rewards program','Branded hashtag challenges with viral potential','Spark Ads on trending UGC content','TikTok for Business advertising suite','Influencer partnerships and creator collaborations','TikTok LIVE gifts and virtual coins monetization','Product showcase videos with direct purchase links']
            },{
              title:'Snapchat',
              img:'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
              bullets:['AR Lens sponsorships and branded filters','Snapchat Spotlight creator fund rewards','Snap Ads with full-screen immersive experiences','Snapchat Discover publisher partnerships','Snapchat Public Profiles for business monetization','Snapchat Shopping with AR try-on features','Snapchat Games advertising integration','Snap Map location-based advertising']
            },{
              title:'LinkedIn',
              img:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
              bullets:['LinkedIn Premium subscriptions and newsletter monetization','LinkedIn Learning course creation and sales','B2B lead generation with high-value prospects','LinkedIn Events monetization and ticket sales','LinkedIn Live streaming with sponsor integration','LinkedIn Sales Navigator for enterprise clients','LinkedIn Creator Accelerator Program','LinkedIn Marketing Solutions for B2B growth']
            },{
              title:'Twitter (X)',
              img:'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
              bullets:['Twitter Blue subscription revenue sharing','Twitter Spaces monetization with ticketed events','Twitter Creator Fund and Super Follows','Promoted Tweets and Twitter Ads campaigns','Twitter Shopping with product catalogs','Twitter API monetization for developers','Twitter Moments sponsorship opportunities','Twitter Live streaming with monetization features']
            }].map((c,i)=> (
              <AnimatedSection key={c.title} delay={0.2 + i*0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <AnimatedImage src={c.img} alt={c.title} className="w-full h-40" imgClassName="w-full h-full object-cover" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop'}} />
                  <div className="p-6">
                    <div className="text-xl font-bold text-gray-900 mb-2">{c.title}</div>
                    <ul className="text-gray-700 space-y-2">
                      {c.bullets.map((b,j)=> (
                        <li key={j} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get</h2>
              <p className="text-gray-600">Everything you need for profitable social growth.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{t:'Creative System',d:'Hooks, concepts and storyboards turned into platform‑native variations each week.'},
              {t:'Audience Playbooks',d:'Warm & cold audiences, look‑alikes and exclusions with budget guardrails.'},
              {t:'Measurement',d:'CAPI/Pixel, UTMs and channel dashboards with weekly learnings.'},
              {t:'Optimization',d:'Creative rotation, bidding and placement testing to hit CPA/KPI goals.'}].map((x,i)=> (
              <AnimatedSection key={x.t} delay={0.2 + i*0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg text-center h-full">
                  <div className="text-xl font-bold text-gray-900 mb-2">{x.t}</div>
                  <p className="text-gray-600">{x.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let’s Launch Your Best Social Yet</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Get a channel‑wise plan with creatives, targeting, budgets and KPI projections.</p>
            <Link to="/socialmediamarketingquote" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">Get Started <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )

  const renderMonetisation = () => (
    <>
      {/* Enhanced Hero Section */}
      <section className={"relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 overflow-hidden"}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <AnimatedSection delay={0.2}>
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">
                💰 Revenue Optimization
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">{data.title}</h1>
              {data.tagline && <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">{data.tagline}</p>}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556157381-9713bf2721fa?q=80&w=1200&auto=format&fit=crop"
                alt="Monetisation dashboard"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                onError={(e) => { 
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=1200&auto=format&fit=crop' 
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview: App, Web, Games */}
      <section className="-mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {title:'App Monetization', desc:'Increase ARPDAU with better placements, mediation and brand‑safe demand.', icon:<Rocket className="h-6 w-6 text-orange-500" />},
            {title:'Web Monetization', desc:'Optimize layout, formats and partners to lift eCPM and revenue.', icon:<TrendingUp className="h-6 w-6 text-orange-500" />},
            {title:'Game Monetization', desc:'Balance ads and IAP for LTV growth across casual and mid‑core.', icon:<BarChart3 className="h-6 w-6 text-orange-500" />},
          ].map((s,i)=>(
            <AnimatedSection key={i} delay={0.2 + i * 0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{s.title}</div>
                <div className="text-gray-700">{s.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* App Monetization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">App Monetization</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Turn your mobile app into a revenue engine with smarter ad strategy, mediation and premium demand.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title:'Mediation & Waterfall', bullets:['Set up AdMob, MAX, IronSource','Floor price testing by geo','Hybrid bidding + waterfall']
            },{
              title:'Ad Placements', bullets:['Rewarded ads for key actions','Interstitial pacing controls','Native and banner balance']
            },{
              title:'Demand Partners', bullets:['Direct deals and PMPs','Brand‑safe SDK networks','Video + Playables mix']
            },{
              title:'Measurement', bullets:['Revenue per user/segment','Consent + privacy compliance','Server‑to‑server postbacks']
            },{
              title:'LTV Optimization', bullets:['Cohort analysis & pacing','A/B tests for formats','Churn‑aware ad frequency']
            },{
              title:'Store Growth', bullets:['ASA & UAC support','Creative testing for store','SKAN v4+ mapping']
            }].map((c,i)=> (
              <AnimatedSection key={c.title} delay={0.2 + i*0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg h-full">
                  <div className="text-lg font-bold text-gray-900 mb-2">{c.title}</div>
                  <ul className="text-gray-700 space-y-2">
                    {c.bullets.map((b,j)=> (
                      <li key={j} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Web Monetization */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Web Monetization</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Unlock new revenue with better layouts, header bidding and affiliate flows for your site.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title:'Header Bidding', bullets:['Prebid set‑up & analytics','Price floors by device/geo','Server‑side bidding tests']
            },{
              title:'Ad Layouts', bullets:['CLS‑safe placements','Sticky units & adhesion','Video outstream opportunities']
            },{
              title:'Demand & PMP', bullets:['SSP mix & direct deals','Contextual + semantic targeting','Brand safety + IVT control']
            },{
              title:'Affiliate & Commerce', bullets:['Topical hubs & comparators','Link tracking and ROAS','Hybrid ad + affiliate model']
            },{
              title:'Performance', bullets:['Core Web Vitals protection','Lazy loading & defer','CDN + image optimization']
            },{
              title:'Analytics', bullets:['Revenue by page/template','RPM heatmaps','A/B testing toolkit']
            }].map((c,i)=> (
              <AnimatedSection key={c.title} delay={0.2 + i*0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg h-full">
                  <div className="text-lg font-bold text-gray-900 mb-2">{c.title}</div>
                  <ul className="text-gray-700 space-y-2">
                    {c.bullets.map((b,j)=> (
                      <li key={j} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Game Monetization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Game Monetization</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Grow LTV with the right balance of ads and in‑app purchases across genres.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title:'Ad Mix', bullets:['Rewarded videos around high‑value events','Playable + video for UA and monetization','Interstitial pacing without churn']
            },{
              title:'Economy & IAP', bullets:['Bundles and limited‑time offers','Price testing by cohort','Reward loops that retain']
            },{
              title:'A/B & LiveOps', bullets:['Event‑based promos','Remote config for tests','Weekly content cadence']
            },{
              title:'Mediation & SDKs', bullets:['MAX/AdMob/ironSource setup','Network prioritization','Crash‑safe updates']
            },{
              title:'Measurement', bullets:['Revenue by cohort & geo','Ad‑engagement vs churn','Consent + privacy compliance']
            },{
              title:'Brand Deals', bullets:['In‑game sponsorships','Playable brand integrations','Creator campaigns for launches']
            }].map((c,i)=> (
              <AnimatedSection key={c.title} delay={0.2 + i*0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg h-full">
                  <div className="text-lg font-bold text-gray-900 mb-2">{c.title}</div>
                  <ul className="text-gray-700 space-y-2">
                    {c.bullets.map((b,j)=> (
                      <li key={j} className="flex items-start"><CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Build Your Monetization Plan</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Get an App/Web/Game strategy with projected RPM, ARPDAU and LTV improvements.</p>
            <Link to="/monetisationquote" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">Get Monetisation <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )

  return (
    <div className="min-h-screen">
      {slug === 'search-arbitrage' && renderSearchMarketing()}
      {slug === 'social-media-marketing' && renderSocialMedia()}
      {slug === 'monetisation' && renderMonetisation()}
      {slug === 'digitalmarketing' && (
        <>
          {/* Use existing search/social hero style for consistency */}
          <section className={"relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 overflow-hidden"}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              <AnimatedSection>
                <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6 border border-orange-500/30">🎯 Digital Marketing</div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Scale What Works</h1>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">Google Ads, App Installs, Lead Gen, Affiliate and E‑commerce — executed with measurement and speed.</p>
              </AnimatedSection>
            </div>
          </section>

          {/* Sections mapped from PAGES['digitalmarketing'] */}
          {(PAGES['digitalmarketing'].sections || []).map((sec, idx)=> (
            <section key={idx} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
              <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection>
                  <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{sec.heading}</h2>
                    <div className="mt-2 h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                  </div>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sec.cards.map((card, i) => (
                    <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
                        <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconBadge name={card.icon} />
                        </div>
                        <div className="text-xl font-bold mb-3 text-gray-900">{card.title}</div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{card.desc}</p>
                        <ul className="text-gray-700 space-y-3 text-left">
                          {card.bullets?.map((b, j) => (
                            <li key={j} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <AnimatedSection>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Your Digital Marketing Plan</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Channel mix, budgets and KPI projections for Google Ads, App, Lead Gen, Affiliate and E‑commerce.</p>
                <Link to="/quote" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">Get Plan <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </AnimatedSection>
            </div>
          </section>
        </>
      )}
    </div>
  )
}


