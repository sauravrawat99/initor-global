import SectionLabel from '../components/ui/SectionLabel'
import Contact from '../sections/Contact'
import FAQ from '../sections/FAQ'

export default function ContactPage() {
  return (
    <div className="pt-20 bg-navy-950">
      {/* Page header */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-navy-900/50 text-center">
        <div className="container-max">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Let's Start a
            <span className="text-gold-400"> Conversation</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Ready to reduce costs and improve efficiency? Book a free 10-hour trial or simply reach out — our team responds within 24 hours.
          </p>

          {/* Offices */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
            {[
              { region: 'United Kingdom', city: 'London Office', flag: '🇬🇧' },
              { region: 'India', city: 'Operations Centre', flag: '🇮🇳' },
              { region: 'North America', city: 'USA Office', flag: '🇺🇸' },
            ].map((o) => (
              <div key={o.region} className="glass-card p-4 text-center">
                <div className="text-2xl mb-1">{o.flag}</div>
                <p className="text-white text-sm font-semibold">{o.region}</p>
                <p className="text-slate-400 text-xs">{o.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <FAQ />
    </div>
  )
}