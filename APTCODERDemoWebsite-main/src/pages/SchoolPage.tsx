import type { Page } from '../App'
import SchoolSalesKit from '../components/SchoolSalesKit'
import { useLanguage } from '../components/LanguageContext'

interface Props {
  navigate: (page: Page) => void
}

const schoolTestimonials = [
  {
    quote: '"AptCoder has brought a new level of excitement to our classrooms. Our students are more confident, curious and engaged with technology."',
    name: 'Principal', school: 'Delhi Public School, Noida',
  },
  {
    quote: '"The teacher training and support from AptCoder has been exceptional. The curriculum is well-structured and easy to integrate into school programs."',
    name: 'Academic Head', school: 'Ryan International School',
  },
  {
    quote: '"Our students have created amazing projects and participated in C-NAT with great enthusiasm. AptCoder is a valuable partner in our digital learning journey."',
    name: 'Director', school: 'Mount Carmel School',
  },
]

const steps = [
  { num: '1', title: 'Understand Your Needs', desc: 'We work with your team to understand your goals and craft the right approach.' },
  { num: '2', title: 'Design a Custom Plan', desc: 'Get a tailored program for your school, aligned to your curriculum.' },
  { num: '3', title: 'Train & Launch', desc: 'We enable your teachers and help you launch smoothly.' },
  { num: '4', title: 'Track & Grow', desc: 'Monitor progress and expand grades and programs over time.' },
]

export default function SchoolPage({ navigate }: Props) {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#FFF5F2] rounded-l-[80px] -z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-4">{t('APTCODER FOR SCHOOLS', 'स्कूलों के लिए APTCODER')}</div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-2">
              {t('Future-Ready Students for a', 'भविष्य के लिए तैयार छात्र')}
            </h1>
            <h1 className="text-3xl lg:text-4xl font-black text-[#E8401C] leading-tight mb-6">
              {t('Brighter Tomorrow', 'एक उज्ज्वल कल के लिए')}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
              {t(
                'A complete K-12 coding and technology program for schools to build real skills, confidence and creativity in every student.',
                'हर छात्र में वास्तविक कौशल, आत्मविश्वास और रचनात्मकता विकसित करने के लिए स्कूलों का संपूर्ण K-12 कोडिंग और तकनीक कार्यक्रम।',
              )}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="bg-[#E8401C] text-white font-semibold rounded-full px-7 py-3.5 hover:bg-[#C73516] transition-colors flex items-center gap-2">
                Partner with Us →
              </button>
              <SchoolSalesKit compact />
            </div>
            <div className="flex flex-wrap gap-6">
              {['Structured Curriculum', 'Teacher Enablement', 'Hands-on Learning', 'Measurable Impact'].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FFF5F2] rounded-lg flex items-center justify-center text-sm">📚</div>
                  <span className="text-xs font-medium text-gray-600">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#FFE8E0]">
            <img
              src="https://images.unsplash.com/photo-1550706899-d71befa3b74f?w=700&h=500&fit=crop&auto=format"
              alt="Students using technology in classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 text-center">
              <p className="text-xs font-bold text-[#E8401C]">Create · Explore</p>
              <p className="text-xs font-bold text-gray-700">Innovate Together</p>
            </div>
          </div>
        </div>
      </section>

      {/* School validation */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-[#E8401C] uppercase tracking-widest mb-2">SCHOOLS WE WORK WITH</p>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Trusted by Schools</h2>
          <p className="text-sm text-gray-500 mb-7">Supporting technology learning with schools and educators.</p>
          <div className="flex gap-x-8 gap-y-5 items-center overflow-x-auto sm:flex-wrap pb-2 sm:pb-0">
            {['Delhi Public School', 'Ryan International School', 'Mount Carmel School', "St. Xavier's School", 'Army International School'].map((school) => (
              <div key={school} className="shrink-0" title={`${school} logo placeholder — approved asset not supplied`}>
                <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">{school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AptCoder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-3">WHY APTCODER FOR SCHOOLS</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">More Than Just Coding Classes</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We partner with schools to bring a comprehensive technology education program that goes beyond theory — helping students apply, create and solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: '</>', label: 'Coding', color: 'bg-blue-50 text-blue-600' },
                  { icon: '🤖', label: 'Robotics (Vernatics)', color: 'bg-orange-50 text-orange-600' },
                  { icon: '🧠', label: 'AI & Emerging Tech', color: 'bg-purple-50 text-purple-600' },
                  { icon: '📊', label: 'Assessments (C-NAT)', color: 'bg-green-50 text-green-600' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${f.color}`}>{f.icon}</div>
                    <span className="text-sm font-semibold text-gray-700">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop&auto=format', label: 'Curriculum Integration' },
                { img: 'https://images.unsplash.com/photo-1568585262983-9b54814595a9?w=300&h=200&fit=crop&auto=format', label: 'Teacher Training & Support' },
                { img: 'https://images.unsplash.com/photo-1603354351149-e97b9124020d?w=300&h=200&fit=crop&auto=format', label: 'Hands-on Learning' },
                { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format', label: 'Assessment & Recognition' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] relative group">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs font-semibold">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact in schools */}
      <section className="py-16 bg-[#FFF5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label justify-center mb-3">OUR IMPACT IN SCHOOLS</div>
          <h2 className="text-3xl font-black text-gray-900 mb-12">Building a Stronger, Smarter Generation</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏫', num: '500+', label: 'Partner Schools' },
              { icon: '👦', num: '2,00,000+', label: 'Students Impacted' },
              { icon: '👨‍🏫', num: '10,000+', label: 'Teachers Trained' },
              { icon: '🌍', num: '15+', label: 'Countries' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-4xl font-black text-[#E8401C] mb-1">{s.num}</p>
                <p className="text-sm text-gray-600 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-3">HOW IT WORKS</div>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-gray-900">Simple and Seamless Implementation</h2>
            <button className="hidden sm:flex text-sm text-[#E8401C] font-semibold items-center gap-1 hover:opacity-70">
              View Detailed Process →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-100 z-0 -translate-x-4" />
                )}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg mb-5 relative z-10"
                  style={{ background: ['#E8401C', '#3B82F6', '#10B981', '#8B5CF6'][i] }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label mb-3">WHAT SCHOOLS SAY</div>
          <h2 className="text-3xl font-black text-gray-900 mb-10">Trusted by Educators and School Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schoolTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <p className="text-gray-700 text-sm leading-relaxed italic mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF5F2] flex items-center justify-center text-[#E8401C] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF5F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Let's Bring Future-Ready Learning to Your School
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with AptCoder and empower your students with real skills for tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#E8401C] text-white font-bold rounded-full px-8 py-4 hover:bg-[#C73516] transition-colors">
              Partner with Us →
            </button>
            <SchoolSalesKit />
          </div>
        </div>
      </section>
    </div>
  )
}
