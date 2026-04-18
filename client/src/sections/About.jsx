import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'

const values = [
  { title: 'Integrity', desc: 'Upholding the highest standards in all our actions.' },
  { title: 'Innovation', desc: 'Continuously seeking new ways to deliver value.' },
  { title: 'Excellence', desc: 'Aiming for excellence in each aspect of our business.' },
  { title: 'Collaboration', desc: 'Believing in the power of teamwork and partnership.' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-navy-900/40">
      <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Initor Global Office"
              className="w-full h-[480px] object-cover"
            />
          </div>
          {/* Floating stat cards */}
          <div className="absolute -bottom-6 -right-6 glass-card p-5 shadow-2xl border border-gold-500/30">
            <p className="text-gold-400 font-display text-3xl font-bold">19+</p>
            <p className="text-slate-400 text-xs mt-0.5">Years of Experience</p>
          </div>
          <div className="absolute -top-6 -left-6 glass-card p-5 shadow-2xl border border-gold-500/20">
            <p className="text-gold-400 font-display text-3xl font-bold">250+</p>
            <p className="text-slate-400 text-xs mt-0.5">Team Members</p>
          </div>
        </div>

        {/* Content side */}
        <div>
          <SectionLabel number={1}>About</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Welcome to
            <br />
            <span className="text-gold-400">Initor Global</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            At Initor Global, our mission is to empower UK accountants with detailed, sincere, and transparent outsourced accounting services. We have been delivering modern outsourced accounting solutions since 2006, ensuring our services are fully compliant with accounting rules and regulations, including GDPR.
          </p>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-4 hover:border-gold-500/40 transition-all duration-200">
                <div className="w-1 h-6 bg-gold-500 rounded mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">{v.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <Button to="/about" size="md">
            Company Profile
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}