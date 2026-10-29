import { useState } from 'react'
import type { Page } from '../App'
import { useLanguage } from '../components/LanguageContext'

interface Props {
  navigate: (page: Page) => void
}

const faqs = [
  { q: 'How can I book a free class?', a: 'Click "Book a Free Class" on any page or fill in the contact form. Our team will get in touch within 24 hours to schedule.' },
  { q: 'What age or grade is suitable to start?', a: 'We welcome children aged 6–18. Our programs are grade-appropriate from beginners to advanced learners.' },
  { q: 'Do you offer programs for schools?', a: 'Yes! We have comprehensive school partnership programs including curriculum integration and teacher training.' },
  { q: 'How can we partner with APTCODER?', a: 'Fill the contact form selecting "For Partnerships" or email us at hello@aptcoder.com for collaborations.' },
  { q: 'Which languages are available?', a: 'Our courses are available in English, Hindi, Tamil, Telugu, Bengali, Kannada, Marathi and more regional languages.' },
  { q: 'Do you offer offline or hybrid programs?', a: 'We primarily offer online live classes but also support school-based offline programs through our partner schools.' },
  { q: 'How can I get information about upcoming camps or events?', a: 'Follow us on social media or subscribe to our newsletter. You can also check our website for upcoming events.' },
  { q: 'How long does it take to receive a response?', a: 'We typically respond within 1–2 business days via email or phone.' },
]

export default function ContactPage({ navigate }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: '', topic: '', message: '',
  })
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#FFF5F2] rounded-l-[80px] -z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-4">{t('CONTACT US', 'संपर्क करें')}</div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-2">
              {t("Let's Build Brighter Futures", 'आइए उज्ज्वल भविष्य बनाएँ')}
            </h1>
            <h1 className="text-3xl lg:text-4xl font-black text-[#E8401C] leading-tight mb-6">{t('Together.', 'साथ मिलकर।')}</h1>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              {t(
                "Have questions about our courses, school programs, partnerships or events? We're here to help. Get in touch and our team will be happy to assist you.",
                'हमारे कोर्स, स्कूल कार्यक्रम, साझेदारी या आयोजनों के बारे में सवाल हैं? हम मदद के लिए यहाँ हैं। हमारी टीम से संपर्क करें।',
              )}
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#FFE8E0]">
            <img
              src="https://images.unsplash.com/photo-1568585219057-9206080e6c74?w=700&h=500&fit=crop&auto=format"
              alt="Friendly student waving, ready to connect"
              className="w-full h-full object-cover"
            />
            {[
              { text: 'Ask Questions', pos: 'top-4 left-4' },
              { text: 'Get Guidance', pos: 'top-4 right-4' },
              { text: 'Start a Conversation', pos: 'bottom-4 right-4' },
            ].map((b) => (
              <div key={b.text} className={`absolute ${b.pos} bg-white rounded-xl shadow-lg px-3 py-2`}>
                <p className="text-xs font-bold text-gray-800">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact type cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '👨‍👩‍👦', title: 'For Parents & Students', desc: 'Course information, free class, enrollments and support', color: 'border-red-200 hover:border-red-400' },
              { icon: '🏫', title: 'For Schools & Institutions', desc: 'Partnerships, school programs and custom solutions', color: 'border-blue-200 hover:border-blue-400' },
              { icon: '🤝', title: 'For Partnerships', desc: 'Collaborations, media, events and community', color: 'border-green-200 hover:border-green-400' },
              { icon: '💬', title: 'General Inquiries', desc: 'Any other questions or feedback', color: 'border-purple-200 hover:border-purple-400' },
            ].map((card) => (
              <div key={card.title} className={`border-2 ${card.color} rounded-2xl p-5 transition-colors cursor-pointer group`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{card.icon}</span>
                  <span className="text-gray-300 group-hover:text-gray-500 transition-colors">→</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill in your details and we'll get back to you soon.</p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8401C] focus:ring-1 focus:ring-[#E8401C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8401C] focus:ring-1 focus:ring-[#E8401C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8401C] focus:ring-1 focus:ring-[#E8401C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">I am a *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8401C] focus:ring-1 focus:ring-[#E8401C] transition-colors bg-white"
                    >
                      <option value="">Select an option</option>
                      <option>Parent</option>
                      <option>Student</option>
                      <option>School Administrator</option>
                      <option>Teacher</option>
                      <option>Partner / Investor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">What is this regarding? *</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8401C] focus:ring-1 focus:ring-[#E8401C] transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option>Book a Free Class</option>
                    <option>Course Information</option>
                    <option>School Program Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8401C] focus:ring-1 focus:ring-[#E8401C] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="bg-[#E8401C] text-white font-bold rounded-full px-8 py-3.5 hover:bg-[#C73516] transition-colors flex items-center gap-2"
                  >
                    Send Message →
                  </button>
                  <p className="text-xs text-gray-400">
                    By clicking send, you agree to our{' '}
                    <a href="#" className="text-[#E8401C] hover:underline">Privacy Policy</a>
                    {' '}and Terms of Service.
                  </p>
                </div>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Other Ways to Reach Us</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-lg shrink-0">✉️</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">Email Us</p>
                    <p className="text-[#E8401C] text-sm font-semibold">hello@aptcoder.com</p>
                    <p className="text-xs text-gray-400 mt-1">We typically respond within 1–2 business days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-lg shrink-0">📞</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">Call Us</p>
                    <p className="text-gray-800 text-sm font-semibold">+91 98765 43210</p>
                    <p className="text-xs text-gray-400 mt-1">Mon – Sat, 9:00 AM – 6:00 PM (IST)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-lg shrink-0">📍</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">Our Office</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      APTCODER<br />
                      IML-INCUBATOR, IIM Lucknow<br />
                      Prabandh Nagar, Lucknow<br />
                      Uttar Pradesh, India – 226013
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-4">Follow Us</p>
                <p className="text-xs text-gray-500 mb-4">Stay updated on our latest programs, events and student projects.</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { icon: '💼', label: 'LinkedIn', color: 'bg-blue-600' },
                    { icon: '▶', label: 'YouTube', color: 'bg-red-600' },
                    { icon: '📸', label: 'Instagram', color: 'bg-pink-600' },
                    { icon: '📘', label: 'Facebook', color: 'bg-blue-700' },
                    { icon: '✖', label: 'Twitter/X', color: 'bg-gray-900' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      title={s.label}
                      className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white text-sm hover:opacity-80 transition-opacity`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-black text-gray-900">Frequently Asked Questions</h2>
            <button className="text-sm font-semibold text-[#E8401C] flex items-center gap-1 hover:opacity-70">
              View All FAQs →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {[faqs.slice(0, 4), faqs.slice(4)].map((col, ci) => (
              <div key={ci}>
                {col.map((faq, i) => {
                  const idx = ci * 4 + i
                  return (
                    <div key={idx} className="faq-item py-4">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-start justify-between gap-3 text-left"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-[#E8401C] mt-0.5 shrink-0">❓</span>
                          <span className="font-semibold text-gray-800 text-sm">{faq.q}</span>
                        </div>
                        <span className={`shrink-0 text-lg font-light text-gray-400 transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {openFaq === idx && (
                        <p className="mt-3 ml-8 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FFF5F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                Still have questions?<br />
                <span className="text-[#E8401C]">We're here to help!</span>
              </h2>
              <p className="text-gray-600 text-sm">
                Talk to our team and get the right guidance for your child, school or organization.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <button className="bg-[#E8401C] text-white font-bold rounded-full px-8 py-4 hover:bg-[#C73516] transition-colors">
                Contact Our Team →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
