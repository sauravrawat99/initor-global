import { Link } from 'react-router-dom'

/**
 * Generic card used for services, blog posts etc.
 */
export default function Card({ image, category, title, description, to, className = '' }) {
  const Inner = () => (
    <div className={`group glass-card overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
            {category}
          </span>
        )}
        <h3 className="text-white font-display text-lg font-semibold mb-2 leading-snug">{title}</h3>
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{description}</p>
        )}
        {to && (
          <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
            Learn more
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  if (to) return <Link to={to}><Inner /></Link>
  return <Inner />
}