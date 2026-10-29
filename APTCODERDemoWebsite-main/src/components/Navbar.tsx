import { useState } from 'react'
import type { Page } from '../App'
import { useLanguage } from './LanguageContext'

interface NavbarProps {
  currentPage: Page
  navigate: (page: Page) => void
}

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const links: { label: string; page: Page }[] = [
    { label: t('Courses', 'कोर्स'), page: 'courses' },
    { label: t('School', 'स्कूल'), page: 'school' },
    { label: t('About', 'हमारे बारे में'), page: 'about' },
    { label: t('Contact Us', 'संपर्क'), page: 'contact' },
  ]

  const languageToggle = (
    <div className="inline-flex items-center rounded-full bg-gray-100 p-1" aria-label="Website language">
      {(['en', 'hi'] as const).map((item) => (
        <button
          key={item}
          onClick={() => setLanguage(item)}
          className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
            language === item ? 'bg-white text-[#E8401C] shadow-sm' : 'text-gray-500'
          }`}
          aria-pressed={language === item}
        >
          {item === 'en' ? 'EN' : 'हिं'}
        </button>
      ))}
    </div>
  )

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-8 h-8 bg-[#E8401C] rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 14L8 4L14 14H2Z" fill="white" />
                <circle cx="14" cy="6" r="3" fill="white" opacity="0.7" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900">
              apt<span className="text-[#E8401C]">coder</span>
              <span className="text-[10px] align-top text-[#E8401C]">®</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={`nav-link text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-[#E8401C] active'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {languageToggle}
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="text-sm font-semibold text-gray-800 border border-gray-300 rounded-full px-4 py-2 hover:border-gray-500 transition-colors">
              {t('Sign In', 'साइन इन')}
            </button>
            <button
              onClick={() => navigate('courses')}
              className="text-sm font-semibold text-white bg-[#E8401C] rounded-full px-5 py-2 hover:bg-[#C73516] transition-colors"
            >
              {t('Join for Free', 'मुफ़्त जुड़ें')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex items-center justify-between px-2 pb-3 mb-1 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-500">{t('Language', 'भाषा')}</span>
              {languageToggle}
            </div>
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => { navigate(link.page); setMobileOpen(false) }}
                className={`block w-full text-left px-2 py-3 text-sm font-medium ${
                  currentPage === link.page ? 'text-[#E8401C]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
              <button className="flex-1 text-sm font-semibold text-gray-800 border border-gray-300 rounded-full px-4 py-2">
                {t('Sign In', 'साइन इन')}
              </button>
              <button
                onClick={() => { navigate('courses'); setMobileOpen(false) }}
                className="flex-1 text-sm font-semibold text-white bg-[#E8401C] rounded-full px-4 py-2"
              >
                {t('Join for Free', 'मुफ़्त जुड़ें')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
