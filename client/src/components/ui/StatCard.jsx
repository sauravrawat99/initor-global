import { useEffect, useRef, useState } from 'react'

/**
 * StatCard — animated number counter card
 */
export default function StatCard({ number, suffix = '', label, sublabel, className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const target = parseInt(number.replace(/[^0-9]/g, ''), 10)
    if (isNaN(target)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let start = 0
          const duration = 2000
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [number])

  return (
    <div
      ref={ref}
      className={`glass-card p-6 text-center hover:border-gold-500/40 transition-all duration-300 ${className}`}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-1">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <p className="text-white font-medium text-sm">{label}</p>
      {sublabel && <p className="text-slate-500 text-xs mt-1">{sublabel}</p>}
    </div>
  )
}