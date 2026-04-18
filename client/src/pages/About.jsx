import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";
import Stats from "../sections/Stats";
import Team from "../sections/Team";

const milestones = [
  {
    year: "2006",
    title: "Founded",
    desc: "Initor Global established with a vision to support UK accountants with offshore talent.",
  },
  {
    year: "2010",
    title: "ISO 27001",
    desc: "Achieved ISO 27001 accreditation, reinforcing our commitment to data security.",
  },
  {
    year: "2014",
    title: "GDPR Ready",
    desc: "Became fully GDPR compliant ahead of UK regulation requirements.",
  },
  {
    year: "2018",
    title: "100+ Clients",
    desc: "Surpassed 100 UK accounting practices as regular clients.",
  },
  {
    year: "2024",
    title: "300+ Clients",
    desc: "Now supporting over 300 satisfied UK clients with 250+ team members.",
  },
];

export default function About() {
  return (
    <div className="pt-20 bg-navy-950">
      {/* Hero banner */}
      <section className="section-padding bg-navy-900/50">
        <div className="container-max">
          <SectionLabel>About Us</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Who We
                <span className="text-gold-400"> Are</span>
              </h1>
              <p className="text-slate-400 leading-relaxed text-lg mb-4">
                At Initor Global, our mission is to empower UK accountants with
                detailed, sincere, and transparent outsourced accounting
                services since 2006.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mb-8">
                We deliver modern outsourced accounting solutions ensuring full
                compliance with accounting rules, regulations, and GDPR. With
                250+ qualified team members and offices in India, Australia,
                North America, and the UK, we serve clients across 20+
                countries.
              </p>
              <div className="flex gap-4">
                <Button to="/contact" size="lg">
                  Free Trial
                </Button>
                <Button to="/services" variant="outline" size="lg">
                  Our Services
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Initor Global Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white mb-12">
            Milestones
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 w-32">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 text-xs font-bold z-10">
                      {i + 1}
                    </div>
                    <span className="text-gold-400 text-sm font-semibold mt-2">
                      {m.year}
                    </span>
                  </div>
                  <div className="glass-card p-5 flex-1 hover:border-gold-500/30 transition-all duration-200">
                    <p className="text-gold-400 text-xs font-semibold mb-1 md:hidden">
                      {m.year}
                    </p>
                    <h3 className="text-white font-semibold mb-1">{m.title}</h3>
                    <p className="text-slate-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Team />
    </div>
  );
}
