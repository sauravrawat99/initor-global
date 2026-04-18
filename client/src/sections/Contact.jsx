import { useState } from 'react'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import { submitContactForm } from '../utils/api'

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  source: '',
  message: '',
}

const sources = [
  'Google Search', 'Social Media', 'Event / Webinar',
  'Google Ad', 'Accounting Reference', 'Newsletter', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-navy-900/40">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Connect with
              <br />
              <span className="text-gold-400">Initor Global</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              Fill out the form to get in touch with our support team. We'll respond within 24 hours.
            </p>

            {/* Why choose us checklist */}
            <div className="space-y-4">
              {[
                'Proven Expertise — Over a decade of outstanding results',
                'Tailored Solutions — Customized strategies for your needs',
                'Innovative Approaches — Cutting-edge solutions',
                'Client-Centric — Exceptional value and satisfaction',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Free trial badge */}
            <div className="mt-10 glass-card p-5 border-gold-500/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Free 10-Hour Trial</p>
                <p className="text-slate-400 text-xs mt-0.5">No obligation — experience our services firsthand</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="glass-card p-8 border-white/10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-gold-500/15 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-display text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Our team will get back to you within 24 hours.</p>
                <Button className="mt-6" onClick={() => setStatus('idle')}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white font-display text-xl font-semibold mb-6">Get in Touch</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 placeholder-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 uppercase tracking-wide">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@firm.co.uk"
                      className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 uppercase tracking-wide">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Firm"
                      className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 placeholder-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 20 ..."
                      className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 uppercase tracking-wide">How did you hear about us?</label>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 transition-colors appearance-none"
                  >
                    <option value="">Select an option</option>
                    {sources.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 uppercase tracking-wide">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your accounting needs..."
                    className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <p className="text-slate-500 text-xs">
                  By clicking submit, you consent to sharing your details for support and basic marketing purposes only.
                </p>

                {status === 'error' && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}