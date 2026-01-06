import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedImage = ({ 
  src, 
  alt, 
  className = '',
  imgClassName = 'w-full h-full object-cover rounded-lg shadow-lg',
  delay = 0,
  duration = 0.8,
  onError,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      <img 
        src={src} 
        alt={alt} 
        className={imgClassName}
        onError={onError}
      />
    </motion.div>
  )
}

export default AnimatedImage
