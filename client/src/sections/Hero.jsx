import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background gradient & noise texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-navy-950 to-navy-950" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A043 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#E8EDF4 1px, transparent 1px), linear-gradient(90deg, #E8EDF4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-max px-6 md:px-12 lg:px-20 pt-28 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold tracking-wider">Serving UK Since 2006</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
              Outsourcing
              <br />
              <span className="text-gold-400">Accounting</span>
              <br />
              Services
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              Our expert offshore accountancy services support hundreds of UK accountants and businesses, ensuring excellence and trust in every detail.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact" size="lg">
                Start Free Trial
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { value: '19+', label: 'Years Experience' },
                { value: '250+', label: 'Team Members' },
                { value: '300+', label: 'UK Clients' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-px h-8 bg-gold-500/30" />
                  <div>
                    <p className="text-gold-400 font-display text-2xl font-bold leading-none">{item.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - image mosaic */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden bg-navy-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
                  alt="Accounting professional"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="h-40 rounded-2xl overflow-hidden bg-navy-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 rounded-2xl overflow-hidden bg-navy-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
                  alt="Business handshake"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden bg-navy-800 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Office"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Floating card */}
              <div className="absolute bg-navy-800/80 backdrop-blur-lg border border-gold-500/30 rounded-xl p-3 shadow-xl"
                style={{ bottom: '10%', right: '2%', zIndex: 10 }}>
                <p className="text-gold-400 text-xs font-semibold">ISO 27001 Certified</p>
                <p className="text-white text-xs">GDPR Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}