import SectionLabel from '../components/ui/SectionLabel'

const brands = [
  { name: 'QuickBooks', color: '#2CA01C' },
  { name: 'Xero', color: '#13B5EA' },
  { name: 'Sage', color: '#00DC00' },
  { name: 'FreshBooks', color: '#1DBFE4' },
  { name: 'Taxfiler', color: '#E25B1A' },
  { name: 'Taxcalc', color: '#D64C4C' },
  { name: 'Iris', color: '#0066CC' },
  { name: 'Capium', color: '#FF6B35' },
  { name: 'AutoEntry', color: '#5C2D91' },
  { name: 'GEM', color: '#2563EB' },
]

// Duplicate for seamless loop
const allBrands = [...brands, ...brands]

export default function Brands() {
  return (
    <section id="brands" className="py-16 bg-navy-950 border-y border-white/5 overflow-hidden">
      <div className="container-max px-6 md:px-12 lg:px-20 mb-10">
        <SectionLabel number={6}>Software Expertise</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Expertise in Leading
          <span className="text-gold-400"> Accounting Software</span>
        </h2>
        <p className="text-slate-400 mt-2 text-sm max-w-lg">
          Providing comprehensive support for UK accountancy professionals across all major platforms.
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #060D16, transparent)' }} />
        <div className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #060D16, transparent)' }} />

        <div className="marquee-track flex gap-6 w-max animate-marquee">
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 glass-card px-8 py-5 flex items-center justify-center hover:border-gold-500/40 transition-all duration-200 min-w-[160px]"
            >
              <div className="flex flex-col items-center gap-2">
                {/* Color dot instead of real image — replace with <img> when you have real logos */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: brand.color + '33', border: `1px solid ${brand.color}44` }}
                >
                  <span style={{ color: brand.color }}>{brand.name[0]}</span>
                </div>
                <span className="text-slate-300 text-sm font-medium whitespace-nowrap">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}