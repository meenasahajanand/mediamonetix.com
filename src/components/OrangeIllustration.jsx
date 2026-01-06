import { motion } from 'framer-motion'

const OrangeIllustration = () => {
  const fadeUp = (d=0) => ({ initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, transition:{duration:.6,delay:d,ease:'easeOut'}, viewport:{once:true,amount:.3} })
  const float = { animate:{ y:[0,-8,0], transition:{repeat:Infinity,duration:3,ease:'easeInOut'} } }

  return (
    <div className="relative w-full h-[520px]">
      <svg viewBox="0 0 680 520" className="absolute inset-0 w-full h-full">
        {/* background blob */}
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#111827"/>
            <stop offset="100%" stopColor="#7c2d12"/>
          </linearGradient>
          <linearGradient id="orange" x1="0" x2="1">
            <stop offset="0%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#ea580c"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="680" height="520" fill="url(#g1)" rx="24"/>
      </svg>

      {/* chart card */}
      <motion.svg {...fadeUp(.1)} className="absolute left-8 top-24" width="280" height="160" viewBox="0 0 280 160">
        <rect width="280" height="160" rx="14" fill="#0f172a" opacity=".8" />
        <polyline points="12,120 80,90 130,110 200,40 268,30" fill="none" stroke="url(#orange)" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="32" width="60" height="8" rx="4" fill="#9ca3af"/>
        <rect x="20" y="48" width="40" height="8" rx="4" fill="#6b7280"/>
      </motion.svg>

      {/* ads-related floating icons */}
      <motion.div {...fadeUp(.28)} className="absolute left-[250px] top-[190px] text-3xl">
        <motion.span animate={{ y:[0,-6,0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>📢</motion.span>
      </motion.div>
      <motion.div {...fadeUp(.32)} className="absolute left-[320px] top-[230px] text-2xl">
        <motion.span animate={{ y:[0,-6,0] }} transition={{ repeat: Infinity, duration: 2.0, ease: 'easeInOut' }}>🖱️</motion.span>
      </motion.div>
      <motion.div {...fadeUp(.36)} className="absolute left-[140px] top-[230px] text-3xl">
        <motion.span animate={{ y:[0,-6,0] }} transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}>🎯</motion.span>
      </motion.div>
      <motion.div {...fadeUp(.4)} className="absolute left-[210px] top-[250px] text-2xl">
        <motion.span animate={{ y:[0,-6,0] }} transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}>💳</motion.span>
      </motion.div>

      {/* big back blob */}
      <motion.div {...fadeUp(.15)} className="absolute left-280 top-56"/>
      <motion.div className="absolute right-4 bottom-4 w-[420px] h-[420px] rounded-full" style={{background:'radial-gradient(closest-side,#ea580c30,#0000)'}} animate={{scale:[1,1.03,1]}} transition={{repeat:Infinity, duration:6}}/>

      {/* plant */}
      <motion.svg {...fadeUp(.25)} className="absolute right-72 top-180" width="140" height="220" viewBox="0 0 140 220">
        <rect x="56" y="180" width="48" height="24" rx="6" fill="#0f172a" opacity=".8"/>
        <path d="M80 176 C80 120 100 96 116 76" stroke="#f59e0b" strokeWidth="6" fill="none"/>
        <path d="M72 176 C72 132 60 110 44 98" stroke="#f59e0b" strokeWidth="6" fill="none"/>
        <circle cx="118" cy="72" r="10" fill="#f59e0b"/>
        <circle cx="38" cy="94" r="8" fill="#f59e0b"/>
      </motion.svg>

      {/* coins */}
      <motion.div {...fadeUp(.3)} className="absolute left-[360px] top-[140px]">
        <motion.div animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:2.2}} className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg"/>
      </motion.div>
      <motion.div {...fadeUp(.35)} className="absolute left-[410px] top-[180px]">
        <motion.div animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:2.6}} className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg"/>
      </motion.div>

      {/* orange bean removed as requested */}

      {/* person + laptop */}
      <motion.svg {...fadeUp(.35)} className="absolute left-160 top-160" width="360" height="280" viewBox="0 0 360 280">
        {/* legs */}
        <path d="M160 190 C200 240 240 240 280 220" stroke="#0f172a" strokeWidth="28" strokeLinecap="round"/>
        {/* torso */}
        <path d="M120 150 C120 120 160 110 190 120 C210 140 210 170 190 180 C160 190 140 180 120 160 Z" fill="#f59e0b"/>
        {/* head */}
        <circle cx="140" cy="120" r="26" fill="#fec56b"/>
        {/* laptop */}
        <rect x="160" y="140" width="120" height="80" rx="10" fill="#e5e7eb"/>
        <circle cx="220" cy="180" r="6" fill="#9ca3af"/>
      </motion.svg>

      {/* sparkles */}
      <motion.div {...fadeUp(.4)} className="absolute left-10 top-12">
        <motion.div animate={float.animate} className="w-3 h-3 bg-yellow-300 rounded-full"/>
      </motion.div>
      <motion.div {...fadeUp(.45)} className="absolute left-40 top-28">
        <motion.div animate={float.animate} className="w-2.5 h-2.5 bg-yellow-400 rounded-full"/>
      </motion.div>
    </div>
  )
}

export default OrangeIllustration


