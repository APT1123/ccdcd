import { useState } from 'react'
import type { Page } from '../App'
import { useLanguage } from '../components/LanguageContext'

interface Props {
  navigate: (page: Page) => void
}

const categories = [
  { label: 'All Courses', icon: '📚', active: true },
  { label: 'Block Coding', icon: '🧩' },
  { label: 'Python', icon: '🐍' },
  { label: 'Web Development', icon: '</>' },
  { label: 'App Development', icon: '📱' },
  { label: 'AI & ML', icon: '🧠' },
  { label: 'Robotics (Vernatics)', icon: '🤖' },
]

const courses = [
  {
    title: 'Block Coding for Beginners', grade: 'Grades 1–4', level: 'Beginner',
    duration: '3 Months', langs: 'EN · HI · +3',
    desc: 'Learn coding with blocks and fun animations. Build games, stories and interactive projects.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-green-100 text-green-700',
    levelColor: 'text-green-600',
  },
  {
    title: 'Block Coding (Advanced)', grade: 'Grades 3–6', level: 'Intermediate',
    duration: '3 Months', langs: 'EN · HI · +3',
    desc: 'Create advanced projects, animations and interactive web simulations using block coding.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-blue-100 text-blue-700',
    levelColor: 'text-blue-600',
  },
  {
    title: 'Python Programming', grade: 'Grades 5–8', level: 'Intermediate',
    duration: '4 Months', langs: 'EN · HI · +3',
    desc: 'Learn Python with hands-on projects, graphics and problem-solving challenges.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-purple-100 text-purple-700',
    levelColor: 'text-blue-600',
  },
  {
    title: 'Web Development', grade: 'Grades 8–9', level: 'Intermediate',
    duration: '4 Months', langs: 'EN · HI · +3',
    desc: 'Design and build your own websites using HTML, CSS and modern tools.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-orange-100 text-orange-700',
    levelColor: 'text-blue-600',
  },
  {
    title: 'App Development', grade: 'Grades 8–12', level: 'Advanced',
    duration: '4 Months', langs: 'EN · HI · +3',
    desc: 'Build your own mobile apps and turn your ideas into real applications.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-pink-100 text-pink-700',
    levelColor: 'text-orange-600',
  },
  {
    title: 'AI & Machine Learning', grade: 'Grades 9–12', level: 'Advanced',
    duration: '4 Months', langs: 'EN · HI · +3',
    desc: 'Explore AI concepts and build chatbots, image projects and smart applications.',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-red-100 text-red-700',
    levelColor: 'text-orange-600',
  },
  {
    title: 'Robotics with Vernatics', grade: 'Grades 4–12', level: 'Intermediate',
    duration: '3 Months', langs: 'EN · HI · +3',
    desc: 'Program physical robots and bring code to life in the real world.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-teal-100 text-teal-700',
    levelColor: 'text-blue-600',
  },
  {
    title: 'Game Development', grade: 'Grades 5–10', level: 'Intermediate',
    duration: '3 Months', langs: 'EN · HI · +3',
    desc: 'Build games from scratch using Python, logic and game design principles.',
    img: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-yellow-100 text-yellow-700',
    levelColor: 'text-blue-600',
  },
  {
    title: 'Data Science for Kids', grade: 'Grades 8–12', level: 'Advanced',
    duration: '4 Months', langs: 'EN · HI · +3',
    desc: 'Explore data, charts, statistics and build data-driven projects.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format',
    gradeColor: 'bg-indigo-100 text-indigo-700',
    levelColor: 'text-orange-600',
  },
]

export default function CoursesPage({ navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('All Courses')
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFF5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="section-label mb-4">{t('OUR COURSES', 'हमारे कोर्स')}</div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-2">
              {t('Coding Courses for', 'हर बच्चे के लिए')}
            </h1>
            <h1 className="text-4xl lg:text-5xl font-black text-[#E8401C] leading-tight mb-6">
              {t('Every Child', 'कोडिंग कोर्स')}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              {t(
                'From beginner to advanced, our structured learning tracks help children build real skills through projects — in the language they understand best.',
                'शुरुआत से उन्नत स्तर तक, हमारे व्यवस्थित पाठ्यक्रम बच्चों को उनकी पसंदीदा भाषा में प्रोजेक्ट बनाकर वास्तविक कौशल सीखने में मदद करते हैं।',
              )}
            </p>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: '📺', label: 'Live & Interactive Classes' },
                { icon: '🌐', label: 'Available in Multiple Languages' },
                { icon: '</>', label: 'Project-Based Learning' },
                { icon: '📜', label: 'Certificates & Assessments' },
                { icon: '👨‍🏫', label: 'Guided by Expert Mentors' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-xs font-medium text-gray-600">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#FFE8E0]">
            <img
              src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=700&h=500&fit=crop&auto=format"
              alt="Child with headphones learning coding online"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 text-center">
              <p className="text-xs font-bold text-gray-700">Learn · Create</p>
              <p className="text-xs font-bold text-[#E8401C]">Build in Your Language</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-16 bg-white border-b border-gray-100 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  activeCategory === cat.label
                    ? 'bg-[#E8401C] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm font-medium">{courses.length} courses</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${course.gradeColor}`}>
                      {course.grade}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-lg mb-1.5">{course.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{course.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">⏱ {course.duration}</span>
                    <span>{course.langs}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${course.levelColor}`}>◆ {course.level}</span>
                    <button className="text-sm font-bold text-[#E8401C] hover:opacity-70 transition-opacity">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF5F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Not sure which course is right for your child?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a free class and let your child experience our teaching style before you decide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#E8401C] text-white font-bold rounded-full px-8 py-4 hover:bg-[#C73516] transition-colors">
              Book a Free Class →
            </button>
            <button
              onClick={() => navigate('contact')}
              className="border-2 border-gray-200 text-gray-700 font-bold rounded-full px-8 py-4 hover:border-gray-400 transition-colors"
            >
              Talk to a Mentor
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
