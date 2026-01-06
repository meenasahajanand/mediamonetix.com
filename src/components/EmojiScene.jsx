import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const float = {
  initial: { y: 10 },
  animate: {
    y: -10,
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 2.4, ease: 'easeInOut' }
  }
}

const floatSlow = {
  initial: { y: 6 },
  animate: {
    y: -6,
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 3.2, ease: 'easeInOut' }
  }
}

const floatFast = {
  initial: { y: 12 },
  animate: {
    y: -12,
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 1.8, ease: 'easeInOut' }
  }
}

const Emoji = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// Emoji-based illustration with staggered entrance and subtle floating
const EmojiScene = () => {
  const rootRef = useRef(null)
  const inView = useInView(rootRef, { once: true, amount: 0.2 })

  return (
    <div ref={rootRef} className="relative w-full h-[520px] rounded-2xl overflow-hidden">
      {/* background card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-white/10 backdrop-blur rounded-2xl"
      />

      {/* big orange accent like the blue blob but in brand */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 0.35, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="absolute -right-12 -bottom-12 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-orange-500/40 to-orange-700/30 blur-2xl"
      />

      {/* Person at laptop */}
      <Emoji delay={0.1} className="absolute left-4 bottom-6 text-[8rem] md:text-[10rem]">
        <motion.span variants={floatSlow} initial="initial" animate="animate">🧑‍💻</motion.span>
      </Emoji>

      {/* UI window/chart */}
      <Emoji delay={0.2} className="absolute right-8 top-6 text-7xl md:text-8xl">
        <motion.span variants={float} initial="initial" animate="animate">📊</motion.span>
      </Emoji>

      {/* Coins */}
      <Emoji delay={0.32} className="absolute right-16 top-28 text-5xl">
        <motion.span variants={float} initial="initial" animate="animate">💰</motion.span>
      </Emoji>
      <Emoji delay={0.44} className="absolute right-28 top-40 text-4xl">
        <motion.span variants={float} initial="initial" animate="animate">🪙</motion.span>
      </Emoji>
      <Emoji delay={0.52} className="absolute right-36 top-56 text-4xl">
        <motion.span variants={floatFast} initial="initial" animate="animate">🪙</motion.span>
      </Emoji>

      {/* Growth sparkles */}
      <Emoji delay={0.55} className="absolute left-10 top-10 text-4xl">
        <motion.span variants={float} initial="initial" animate="animate">✨</motion.span>
      </Emoji>
      <Emoji delay={0.65} className="absolute left-24 top-24 text-3xl">
        <motion.span variants={float} initial="initial" animate="animate">✨</motion.span>
      </Emoji>

      {/* Rocket & target for dynamic feel */}
      <Emoji delay={0.6} className="absolute left-40 top-6 text-5xl">
        <motion.span variants={floatFast} initial="initial" animate="animate">🚀</motion.span>
      </Emoji>
      <Emoji delay={0.7} className="absolute right-48 bottom-10 text-5xl">
        <motion.span variants={floatSlow} initial="initial" animate="animate">🎯</motion.span>
      </Emoji>

      {/* small plant to echo original composition */}
      <Emoji delay={0.8} className="absolute right-16 bottom-8 text-4xl">
        <motion.span variants={float} initial="initial" animate="animate">🪴</motion.span>
      </Emoji>

      {/* Orange accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full shadow-lg"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full shadow"
      />
    </div>
  )
}

export default EmojiScene


