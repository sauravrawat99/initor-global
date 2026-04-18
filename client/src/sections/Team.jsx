import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import { teamData } from '../data/team'

export default function Team() {
  return (
    <section id="team" className="section-padding bg-navy-950">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <SectionLabel number={5}>Our Team</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Expert Accounting &
              <br />
              <span className="text-gold-400">Financial Solutions</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-lg text-sm">
              We help companies in all phases, focusing on accounting and financial aspects like cash flow and income.
            </p>
          </div>
          <Button to="/about" variant="outline" className="mt-6 md:mt-0 flex-shrink-0">
            Meet the Team
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group glass-card overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-5">
                <h3 className="text-white font-display font-semibold text-lg leading-snug">{member.name}</h3>
                <p className="text-gold-400 text-xs font-medium tracking-wide mt-1">{member.role}</p>
                {member.bio && (
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed line-clamp-2">{member.bio}</p>
                )}
                {/* Social links */}
                <div className="flex gap-2 mt-4">
                  <a
                    href={member.linkedin || '#'}
                    className="w-7 h-7 rounded-full bg-navy-700 border border-white/10 flex items-center justify-center hover:border-gold-500/50 text-slate-400 hover:text-gold-400 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}