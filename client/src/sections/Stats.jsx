import SectionLabel from "../components/ui/SectionLabel";
import StatCard from "../components/ui/StatCard";

const stats = [
  {
    number: "19",
    suffix: "+",
    label: "Years of Expertise",
    sublabel: "Serving UK Accountancy",
  },
  {
    number: "300",
    suffix: "+",
    label: "Satisfied UK Clients",
    sublabel: "Client Success",
  },
  {
    number: "45000",
    suffix: "+",
    label: "Payrolls Processed",
    sublabel: "Payroll Accuracy",
  },
  {
    number: "15000",
    suffix: "+",
    label: "Accounts Finalized",
    sublabel: "Accounting Excellence",
  },
  {
    number: "20000",
    suffix: "+",
    label: "VAT Returns Filed",
    sublabel: "VAT Precision",
  },
  {
    number: "8000",
    suffix: "+",
    label: "Self-Assessment Returns",
    sublabel: "Tax Return Efficiency",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="section-padding bg-navy-900/60 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(ellipse, #C9A043 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <SectionLabel number={5}>Essential Facts</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Numbers That
            <span className="text-gold-400"> Speak</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Over 19 years of delivering exceptional results for UK accountancy
            professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s) => (
            <StatCard
              key={s.label}
              number={s.number}
              suffix={s.suffix}
              label={s.label}
              sublabel={s.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
