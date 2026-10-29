import type { Page } from '../App'
import { useLanguage } from '../components/LanguageContext'

interface Props {
  navigate: (page: Page) => void
}

const team = [
  { name: 'Gaurav Aggarwal', role: 'Founder & CEO', desc: 'Driving the vision to make coding and technology education accessible for every child.' },
  { name: 'Ashish Bhatt', role: 'Co-Founder & CTO', desc: 'Leads product and technology development to create engaging and scalable learning solutions.' },
  { name: 'Priya Sharma', role: 'Product & Learning', desc: 'Designing structured curriculum and meaningful learning experiences for all grade levels.' },
  { name: 'Rahul Verma', role: 'Product & Success', desc: 'Supporting teachers, mentors and students across all programs.' },
  { name: 'Neha Singh', role: 'Community & Outreach', desc: 'Building a strong community of learners, schools and partner organizations.' },
]

const journey = [
  { year: '2020', title: 'The Beginning', desc: 'Started with a mission to make coding accessible for children across India.' },
  { year: '2021', title: 'Building the Foundation', desc: 'Developed structured learning programs and began working with schools and students.' },
  { year: '2022', title: 'Expanding Reach', desc: 'Trained 310+ teachers and reached 5K+ students across India.' },
  { year: '2023', title: 'Global Presence', desc: 'Extended to 15+ countries and strengthened our community of learners.' },
  { year: '2024', title: 'New Possibilities', desc: 'Launched innovative programs like Vernatics, C-NAT and global collaborations.' },
  { year: '2025+', title: 'A Bigger Impact', desc: 'Continuing to scale, reach more schools and enable more children to create with technology.' },
]

export default function AboutPage({ navigate }: Props) {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-4">{t('ABOUT APTCODER', 'APTCODER के बारे में')}</div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-2">
              {t('Opening a Brighter Future', 'तकनीक के साथ')}
            </h1>
            <h1 className="text-3xl lg:text-4xl font-black text-[#E8401C] leading-tight mb-6">
              {t('Through Technology', 'उज्ज्वल भविष्य की ओर')}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              {t(
                'We help children across India and beyond learn coding and emerging technologies through hands-on, project-based learning — in the language they understand best.',
                'हम भारत और दुनिया भर के बच्चों को उनकी पसंदीदा भाषा में प्रोजेक्ट-आधारित शिक्षा से कोडिंग और नई तकनीक सीखने में मदद करते हैं।',
              )}
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: '💡', label: 'Practical Learning' },
                { icon: '🌐', label: 'Regional Language Support' },
                { icon: '👨‍🏫', label: 'Expert Mentors' },
                { icon: '📈', label: 'Real-World Skills' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFF5F2] rounded-xl flex items-center justify-center text-lg shrink-0">{f.icon}</div>
                  <span className="text-sm font-semibold text-gray-700">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#FFE8E0]">
            <img
              src="https://images.unsplash.com/photo-1568585262983-9b54814595a9?w=700&h=500&fit=crop&auto=format"
              alt="Children collaborating and learning technology together"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 text-center">
              <p className="text-xs font-bold text-[#E8401C]">Learn · Create</p>
              <p className="text-xs font-bold text-gray-700">Grow in Your Language</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and supporters */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-[#E8401C] uppercase tracking-widest mb-2">OUR PARTNERS &amp; SUPPORTERS</p>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Supported by Leading Institutions &amp; Organizations</h2>
          <p className="text-sm text-gray-500 mb-7">We are supported and associated with leading institutions and organizations.</p>
          <div className="flex gap-x-8 gap-y-5 items-center overflow-x-auto sm:flex-wrap pb-2 sm:pb-0">
            {['FITT IIT Delhi', 'Microsoft', 'IIT Ropar', 'Kotak BizLab', 'DST', 'EXIM Bank', 'IIM Lucknow EIC'].map((organization) => (
              <div key={organization} className="shrink-0" title={`${organization} logo placeholder — approved asset not supplied`}>
                <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{organization}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Belief */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-3">OUR PURPOSE</div>
          <h2 className="text-3xl font-black text-gray-900 mb-10">Our Mission, Vision and Belief</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mb-5">🎯</div>
              <h3 className="font-black text-gray-900 text-lg mb-3">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To make coding and technology education accessible, engaging and meaningful for every child — in the language they understand best.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5">👁️</div>
              <h3 className="font-black text-gray-900 text-lg mb-3">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A future where every child, regardless of background or location, can confidently use technology to create, solve and contribute to a better world.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-2xl mb-5">❤️</div>
              <h3 className="font-black text-gray-900 text-lg mb-3">What We Believe</h3>
              <ul className="space-y-2">
                {[
                  'Every child has the potential to create.',
                  'Technology education should be practical, not just theoretical.',
                  'Learning is more effective in a familiar language.',
                  'Hands-on projects build confidence and real skills.',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Our Impact So Far</h2>
          <p className="text-gray-500 mb-10">A growing community of learners, teachers and partner institutions.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: '👥', num: '5K+', label: 'Students Empowered' },
              { icon: '🎓', num: '250+', label: 'Teachers Trained' },
              { icon: '🌍', num: '15+', label: 'Countries Reached' },
              { icon: '🏫', num: '500+', label: 'Government Schools' },
              { icon: '🏆', num: '20+', label: 'Competitions & Camps' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-14 h-14 bg-[#FFF5F2] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">{s.icon}</div>
                <p className="text-3xl font-black text-gray-900">{s.num}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-20 bg-[#FFF5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Our Journey</h2>
          <p className="text-gray-500 mb-12">From a vision to a growing global community.</p>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {journey.map((j, i) => (
                <div key={j.year} className="relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm mb-4 relative z-10 mx-auto md:mx-0"
                    style={{ background: ['#E8401C', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6'][i] }}
                  >
                    {j.year.replace('+', '')}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{j.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Meet Our Team</h2>
              <p className="text-gray-500">A passionate team working to make technology education easy, practical and impactful for every child.</p>
            </div>
            <button className="hidden sm:flex border border-gray-200 text-gray-700 font-semibold rounded-full px-5 py-2 text-sm hover:border-gray-400 transition-colors items-center gap-2">
              View All Team Members →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d', '1472099645785-5658abf4ff4e', '1438761681033-6461ffad8d80', '1500648767791-00dcc994a43e', '1487412720507-e7ab37603c6f'][i]}?w=300&h=300&fit=crop&auto=format&face`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-black text-gray-900 text-sm mb-0.5">{member.name}</h3>
                <p className="text-xs text-[#E8401C] font-semibold mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF5F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#E8401C] uppercase tracking-widest mb-3">JOIN OUR MISSION</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Let's Create Brighter<br />Futures Together.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Be a part of a movement to make technology education accessible, practical and meaningful for every child.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate('courses')}
                className="bg-[#E8401C] text-white font-bold rounded-full px-8 py-4 hover:bg-[#C73516] transition-colors text-center"
              >
                Book a Free Class →
              </button>
              <button
                onClick={() => navigate('school')}
                className="border-2 border-[#E8401C] text-[#E8401C] font-bold rounded-full px-8 py-4 hover:bg-[#FFF0EB] transition-colors text-center"
              >
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
