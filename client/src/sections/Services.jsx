import { useContext } from 'react'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import { servicesData } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-950">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <SectionLabel number={2}>Services</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Crafting{' '}
              <span className="text-gold-400 italic">tailored</span>
              <br />
              strategies
            </h2>
          </div>
          <Button to="/services" variant="outline" className="mt-6 md:mt-0">
            All Services
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <div
              key={service.id}
              className="glass-card p-6 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <span className="text-gold-400 text-xl">{service.icon}</span>
              </div>
              <h3 className="text-white font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <Button to="/services" variant="ghost" size="sm" className="p-0 text-gold-400 hover:text-gold-300">
                Learn more →
              </Button>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-navy-800 to-navy-700 border border-gold-500/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Empowering UK Accountants with Modern Solutions
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Flexible outsourced accounting services — ad-hoc, half-time, or full-time. Reduce risks, cut costs, enhance efficiency.
            </p>
          </div>
          <Button to="/contact" size="lg" className="flex-shrink-0">
            Connect Now
          </Button>
        </div>
      </div>
    </section>
  )
}