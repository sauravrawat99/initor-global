import { useState } from 'react'
import SectionLabel from '../components/ui/SectionLabel'
import { faqsData } from '../data/faqs'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`glass-card border transition-all duration-300 cursor-pointer ${
        isOpen ? 'border-gold-500/40' : 'border-white/10 hover:border-white/20'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4 p-5">
        <div className="flex-1">
          <h4 className={`font-semibold text-sm leading-snug transition-colors ${isOpen ? 'text-gold-400' : 'text-white'}`}>
            {question}
          </h4>
          {isOpen && (
            <p className="text-slate-400 text-sm leading-relaxed mt-3 animate-fade-in">{answer}</p>
          )}
        </div>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
          isOpen ? 'bg-gold-500 border-gold-500 rotate-45' : 'border-slate-600'
        }`}>
          <svg className="w-3 h-3 text-navy-950" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-navy-950">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="sticky top-28">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Frequently Asked
              <br />
              <span className="text-gold-400">Questions</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Everything you need to know about our outsourced accounting services for UK businesses.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=700&q=80"
                alt="FAQ"
                className="w-full h-56 object-cover opacity-70"
              />
            </div>
          </div>

          {/* Right — FAQ list */}
          <div className="space-y-3">
            {faqsData.map((faq, i) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}