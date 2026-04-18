import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const services = [
  "Outsourced Accounting",
  "Finance & Accounting",
  "Taxation Services",
  "Digital Bookkeeping",
  "Payroll Services",
  "VAT Returns",
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Free Trial", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="container-max px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/">
            <img src={logoSvg} alt="Initor Global" className="h-10 mb-4" />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Empowering UK accountants with expert outsourced accounting services
            since 2006. GDPR compliant & ISO 27001 accredited.
          </p>
          <div className="flex gap-3 mt-4">
            {["linkedin", "twitter", "facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-400 text-slate-400 transition-all duration-200"
                aria-label={social}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-slate-400 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gold-500 rounded-full" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-slate-400 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gold-500 rounded-full" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              London, United Kingdom
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@initor-global.co.uk
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 0000000000
            </li>
          </ul>

          {/* ISO / GDPR badges */}
          <div className="mt-5 flex gap-3">
            <span className="px-2 py-1 rounded border border-gold-500/40 text-gold-400 text-xs font-medium">
              GDPR
            </span>
            <span className="px-2 py-1 rounded border border-gold-500/40 text-gold-400 text-xs font-medium">
              ISO 27001
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-5">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} Initor Global. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
