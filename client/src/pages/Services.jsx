import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";
import { servicesData } from "../data/services";

const deliveryModels = [
  {
    title: "Ad-Hoc",
    desc: "Perfect for one-off projects or overflow work during busy seasons. No long-term commitment required.",
    icon: "⚡",
  },
  {
    title: "Part-Time",
    desc: "Half-time dedicated resource supporting your practice at a fraction of in-house cost.",
    icon: "🕐",
  },
  {
    title: "Full-Time",
    desc: "A dedicated team member fully integrated into your workflow, managed by your practice.",
    icon: "💼",
  },
];

export default function Services() {
  return (
    <div className="pt-20 bg-navy-950">
      {/* Hero */}
      <section className="section-padding bg-navy-900/50">
        <div className="container-max">
          <SectionLabel>Services</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Expert
                <span className="text-gold-400"> Accounting</span>
                <br />
                Services
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8">
                Initor Global offers comprehensive outsourced accounting
                services tailored for UK accounting practices and businesses —
                from digital bookkeeping to complex tax returns.
              </p>
              <Button to="/contact" size="lg">
                Start 10-Hour Free Trial
              </Button>
            </div>
            <div className="glass-card p-6 space-y-4">
              {[
                "Digital Bookkeeping",
                "Payroll Processing",
                "VAT Returns",
                "Self Assessment",
                "Company Tax Returns",
                "Year-End Accounts",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-gold-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <h2 className="font-display text-4xl font-bold text-white mb-10">
            All Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="glass-card p-6 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors text-xl">
                  {service.icon}
                </div>
                <h3 className="text-white font-display text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="space-y-1.5 mt-4">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-slate-400 text-xs"
                      >
                        <span className="w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section-padding bg-navy-900/40">
        <div className="container-max">
          <SectionLabel>Delivery Model</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white mb-3">
            Flexible, Secure &amp; Client-Centric
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl">
            Choose the engagement model that best fits your practice's needs and
            workflow.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryModels.map((m) => (
              <div
                key={m.title}
                className="glass-card p-6 text-center hover:border-gold-500/40 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-white font-display text-xl font-semibold mb-3">
                  {m.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
