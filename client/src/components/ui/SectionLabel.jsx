/**
 * SectionLabel — small numbered label above section headings
 * Example: "01  About"
 */
export default function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${light ? 'opacity-70' : ''}`}>
      {number && (
        <span className="text-gold-500 font-body text-xs font-semibold tracking-widest">
          {String(number).padStart(2, '0')}
        </span>
      )}
      <span className="w-8 h-px bg-gold-500/60" />
      <span className="text-gold-400 font-body text-xs font-semibold tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}