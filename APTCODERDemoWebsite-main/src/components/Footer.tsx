import type { Page } from '../App'
import { useLanguage } from './LanguageContext'

interface FooterProps {
  navigate: (page: Page) => void
}

export default function Footer({ navigate }: FooterProps) {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8401C] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14L8 4L14 14H2Z" fill="white" />
                  <circle cx="14" cy="6" r="3" fill="white" opacity="0.7" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-tight">
                apt<span className="text-[#E8401C]">coder</span>
                <span className="text-[10px] align-top text-[#E8401C]">®</span>
              </span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t(
                'Helping children across India learn coding and technology in the language they understand best.',
                'भारत भर के बच्चों को उनकी पसंदीदा भाषा में कोडिंग और तकनीक सीखने में मदद करना।',
              )}
            </p>
            <div className="flex gap-3">
              {['linkedin', 'youtube', 'instagram', 'facebook', 'twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E8401C] hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">{t('Programs', 'कार्यक्रम')}</h3>
            <ul className="space-y-3">
              {['Coding Courses', 'Vernatics (Robotics)', 'C-NAT Olympiad', 'Kids Coding Community', 'School Programs', 'Codely Platform'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">{t('Company', 'कंपनी')}</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', page: 'about' as Page },
                { label: 'Our Team', page: 'about' as Page },
                { label: 'Partner With Us', page: 'school' as Page },
                { label: 'Contact Us', page: 'contact' as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-gray-400 text-sm hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">{t('Get In Touch', 'संपर्क करें')}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">hello@aptcoder.com</p>
                <p className="text-gray-400 text-sm mt-1">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  IML-INCUBATOR, IIM Lucknow<br />
                  Prabandh Nagar, Lucknow<br />
                  Uttar Pradesh, India – 226013
                </p>
              </div>
              <button
                onClick={() => navigate('courses')}
                className="inline-block bg-[#E8401C] text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-[#C73516] transition-colors"
              >
                {t('Book a Free Class →', 'मुफ़्त क्लास बुक करें →')}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 APTCODER. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Supported & Associated with IIM Lucknow EIC · FITT IIT Delhi · Microsoft · IIT Ropar</p>
        </div>
      </div>
    </footer>
  )
}
