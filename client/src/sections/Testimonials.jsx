import { useState } from 'react'
import SectionLabel from '../components/ui/SectionLabel'
import { testimonialsData } from '../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const current = testimonialsData[active]

  return (
    <section id="testimonials" className="section-padding bg-navy-900/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <SectionLabel number={7}>Partners</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Trusted by UK
            <span className="text-gold-400"> Accountancy</span>
            <br />Professionals
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
            {testimonialsData.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                  i === active
                    ? 'bg-gold-500/10 border-gold-500/50 text-white'
                    : 'bg-navy-800/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <p className="font-semibold text-sm leading-snug">{t.company}</p>
                <p className="text-xs mt-0.5 opacity-70">{t.author}</p>
              </button>
            ))}
          </div>

          {/* Active testimonial */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 border-gold-500/20 relative">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-gold-500/10 font-display text-8xl font-bold leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6 relative z-10">
                "{current.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 font-display font-bold">
                  {current.author[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{current.author}</p>
                  <p className="text-gold-400 text-xs">{current.company}</p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === active ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}