import { Link } from "react-router-dom";

/**
 * Button component
 * variant: 'primary' | 'outline' | 'ghost'
 * size: 'sm' | 'md' | 'lg'
 * as: 'button' | 'link' (React Router Link)
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  disabled,
  className = "",
  icon,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400";

  const variants = {
    primary:
      "bg-gold-500 hover:bg-gold-400 text-navy-950 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5",
    outline:
      "border border-gold-500 text-gold-400 hover:bg-gold-500/10 hover:-translate-y-0.5",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    dark: "bg-navy-800 text-white hover:bg-navy-700 border border-white/10 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3.5",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  if (to)
    return (
      <Link to={to} className={cls} {...props}>
        {content}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  return (
    <button onClick={onClick} disabled={disabled} className={cls} {...props}>
      {content}
    </button>
  );
}
