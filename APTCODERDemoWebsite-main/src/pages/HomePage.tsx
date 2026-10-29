import { useState } from "react"
import type { Page } from "../App"
import CodelyDemo from "../components/CodelyDemo"
import RecordedClassLead from "../components/RecordedClassLead"
import { useLanguage } from "../components/LanguageContext"

interface Props {
  navigate: (page: Page) => void
}

interface ProjectCategory {
  title: string
  description: string
  skills: string[]
  examples: string[]
  learning: {
    title: string
    description: string
  }[]
  iconPath: string
  tone: string
}

const projects: ProjectCategory[] = [
  {
    title: "Games",
    description: "Build platforms, puzzles and arcade games with real logic.",
    skills: ["Logic", "Loops", "Events"],
    examples: ["Maze Game", "Platformer", "Quiz Game"],
    learning: [
      {
        title: "Block Coding",
        description: "Build a strong foundation with visual code.",
      },
      {
        title: "Python",
        description: "Bring game ideas to life with text-based code.",
      },
    ],
    iconPath:
      "M6 8h12a4 4 0 0 1 3.9 4.9l-1 4a2.5 2.5 0 0 1-4.3 1L14 15h-4l-2.6 2.9a2.5 2.5 0 0 1-4.3-1l-1-4A4 4 0 0 1 6 8ZM7 10v4m-2-2h4m7-1h.01M18 13h.01",
    tone: "bg-peach text-primary",
  },
  {
    title: "Websites",
    description: "Design and build interactive pages that share an idea.",
    skills: ["HTML", "CSS", "Interaction"],
    examples: ["Personal website", "Story page", "Mini portfolio"],
    learning: [
      {
        title: "Web Development",
        description:
          "Design and build your own websites using HTML, CSS and modern tools.",
      },
    ],
    iconPath:
      "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18",
    tone: "bg-blue-soft text-blue-600",
  },
  {
    title: "Apps",
    description: "Create useful experiences that solve everyday problems.",
    skills: ["Problem solving", "UI thinking", "Interaction"],
    examples: ["Calculator", "Habit tracker", "Simple app"],
    learning: [
      {
        title: "App Development",
        description:
          "Build your own mobile apps and turn your ideas into real applications.",
      },
    ],
    iconPath:
      "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM10 6h4M11 18h2",
    tone: "bg-yellow-soft text-amber-600",
  },
  {
    title: "Robotics",
    description: "Program physical robots that sense and respond.",
    skills: ["Sensors", "Testing", "Automation"],
    examples: ["Robot mission", "Sensor response", "Movement sequence"],
    learning: [
      {
        title: "Robotics with Vernatics",
        description:
          "Program physical robots and bring code to life in the real world.",
      },
    ],
    iconPath:
      "M6 7h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM12 3v4M9 12h.01M15 12h.01M9 16h6",
    tone: "bg-green-soft text-emerald-600",
  },
  {
    title: "Animation & Interactive Stories",
    description:
      "Bring characters and stories to life through choices and motion.",
    skills: ["Sequencing", "Events", "Storytelling"],
    examples: ["Interactive story", "Character scene", "Animation"],
    learning: [
      {
        title: "Block Coding",
        description:
          "Learn coding with blocks and build stories, animations and interactive projects.",
      },
    ],
    iconPath: "M9 7l8 5-8 5V7ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    tone: "bg-peach text-primary",
  },
  {
    title: "AI Projects",
    description:
      "Explore patterns, data and machine learning through experiments.",
    skills: ["Patterns", "Data", "AI concepts"],
    examples: ["Classifier", "Prediction experiment", "Simple chatbot"],
    learning: [
      {
        title: "AI & Machine Learning",
        description:
          "Explore AI concepts and build chatbots, image projects and smart applications.",
      },
    ],
    iconPath:
      "M9 4a3 3 0 0 0-5 3 4 4 0 0 0-1 7 4 4 0 0 0 6 5V4ZM15 4a3 3 0 0 1 5 3 4 4 0 0 1 1 7 4 4 0 0 1-6 5V4ZM9 12h6",
    tone: "bg-purple-soft text-violet-600",
  },
]

const possibilities = [
  {
    title: "Make Everyday Tasks Smarter",
    note: "Notice a problem. Design a better way.",
    path: "M4 12h4l2-7 4 14 2-7h4",
  },
  {
    title: "Build Something That Reacts",
    note: "Connect an input to a visible response.",
    path: "M5 8h14v10H5V8Zm3-3v3m8-3v3M8 13h.01M16 13h.01",
  },
  {
    title: "Turn an Idea into a Working Prototype",
    note: "Make, test and improve a first version.",
    path: "M4 19h16M6 16l3-9 3 6 2-4 4 7",
  },
  {
    title: "Create for Other People",
    note: "Think about who will use what you make.",
    path: "M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 1a3 3 0 1 0 0-6M2 21v-2a6 6 0 0 1 12 0v2m2-6a5 5 0 0 1 6 4v2",
  },
  {
    title: "Solve a Challenge in a New Way",
    note: "Question the obvious answer and try again.",
    path: "M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 1-2 2-2 4h-4c0-2-1-3-2-4Z",
  },
  {
    title: "Bring the Physical and Digital Together",
    note: "Use code, controls and sensors as one system.",
    path: "M7 7h10v10H7V7Zm5-4v4m0 10v4M3 12h4m10 0h4",
  },
]

const faqs = [
  {
    q: "What age groups can join APTCODER?",
    a: "APTCODER offers grade-appropriate learning paths for children across Grades 1–12.",
  },
  {
    q: "Does my child need prior coding experience?",
    a: "No. Children can begin with foundational lessons and progress from there.",
  },
  {
    q: "What will my child actually learn?",
    a: "Children learn to think through problems, build working outcomes, test ideas and improve what they create.",
  },
  {
    q: "How do Live, Assisted and Self-Learning work?",
    a: "Live includes real-time instruction, Assisted combines independent learning with support, and Self-Learning uses recorded lessons and practice.",
  },
  {
    q: "What is Vernatics?",
    a: "Vernatics is APTCODER’s hands-on robotics experience where children program and control a real robot, work with sensors and test their ideas.",
  },
  {
    q: "Can children learn robotics in a regional language?",
    a: "APTCODER supports robotics learning through its regional-language approach. Ask the team which language options are currently available.",
  },
  {
    q: "What is C-NAT?",
    a: "C-NAT is India’s Coding Olympiad, where learners choose a track, take a coding challenge and earn recognition.",
  },
  {
    q: "What is KCC?",
    a: "KCC is the Kids Coding Community, a free community for continued learning, building, sharing and problem-solving.",
  },
  {
    q: "How do you track my child’s progress?",
    a: "Progress is followed through lesson completion, practice, projects and instructor feedback where applicable.",
  },
  {
    q: "Can schools work with APTCODER?",
    a: "Yes. Schools can contact APTCODER to discuss current programs and suitable learning formats.",
  },
]

function LineIcon({
  path,
  className = "h-6 w-6",
}: {
  path: string
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

export default function HomePage({ navigate }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [showMorePossibilities, setShowMorePossibilities] = useState(false)
  const { t } = useLanguage()
  const selectedProject = projects[activeProject]

  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute right-0 top-0 h-full w-1/2 rounded-l-[80px] bg-peach -z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="section-label mb-5">
                {t(
                  "CHILDREN · TECHNOLOGY · BRIGHTER TOMORROWS",
                  "बच्चे · तकनीक · उज्ज्वल भविष्य",
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-dark mb-6">
                {t("From Curious Minds", "जिज्ञासु मन से")}
                <br />
                <span className="text-primary">
                  {t("to Confident Creators.", "आत्मविश्वासी रचनाकार तक।")}
                </span>
              </h1>
              <div className="relative mb-5 max-w-xl overflow-hidden rounded-r-2xl border-l-4 border-primary bg-peach px-5 py-4">
                <p className="text-xl sm:text-2xl font-black leading-snug text-primary">
                  {t(
                    "Technology Makes More Sense in Your Own Language.",
                    "तकनीक अपनी भाषा में बेहतर समझ आती है।",
                  )}
                </p>
              </div>
              <p className="text-base leading-relaxed text-gray-500 max-w-xl mb-8">
                {t(
                  "Children learn coding, AI and robotics through a language they understand best — so they can focus on understanding ideas, solving problems and creating with technology.",
                  "बच्चे कोडिंग, एआई और रोबोटिक्स उस भाषा में सीखते हैं जिसे वे सबसे अच्छी तरह समझते हैं — ताकि वे विचारों को समझने, समस्याओं को हल करने और तकनीक के साथ रचना करने पर ध्यान दे सकें।",
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate("courses")}
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
                >
                  {t("Book a Free Class", "मुफ़्त क्लास बुक करें")}{" "}
                  <span aria-hidden="true">→</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("courses")}
                  className="rounded-full border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-dark hover:border-primary transition-colors"
                >
                  {t("Explore How We Teach", "हम कैसे सिखाते हैं")}{" "}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-sm mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black tracking-widest text-primary mb-1">
                      ENROLLING NOW
                    </p>
                    <p className="text-lg font-black text-dark">
                      Summer Coding Camp
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Build, code and create through a hands-on coding program.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate("courses")}
                    className="self-start shrink-0 text-sm font-bold text-primary hover:text-primary-dark"
                  >
                    Explore Camp →
                  </button>
                </div>
              </div>
              <div
                className="aspect-[4/3] rounded-3xl bg-peach-mid p-6 sm:p-8 flex items-center justify-center"
                role="img"
                aria-label="Video placeholder for approved Vernatics footage"
              >
                <div className="max-w-sm text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary">
                    <LineIcon
                      path="M4 6h11v12H4V6Zm11 4 5-3v10l-5-3M8 10h3m-3 4h5"
                      className="h-7 w-7"
                    />
                  </div>
                  <p className="font-black text-dark mb-2">
                    Approved video placeholder
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    A child codes on a laptop, tests a physical Vernatics robot
                    and sees it respond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 bg-white"
        aria-labelledby="project-builder-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-9">
            <div className="section-label justify-center mb-4">
              REAL PROJECTS. REAL SKILLS.
            </div>
            <h2
              id="project-builder-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-dark mb-4"
            >
              What Can Your Child Build?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-500 max-w-3xl mx-auto">
              From games and websites to AI, robotics and smart devices,
              children learn by turning ideas into things that actually work.
            </p>
          </div>

          <div
            className="flex overflow-x-auto gap-2 pb-3 mb-5 lg:justify-center"
            role="group"
            aria-label="Project categories"
          >
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => {
                  setActiveProject(index)
                  setShowMorePossibilities(false)
                }}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors ${
                  activeProject === index
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-primary"
                }`}
                aria-pressed={activeProject === index}
              >
                {project.title}
              </button>
            ))}
            <button
              type="button"
              onClick={() =>
                setShowMorePossibilities((isShowing) => !isShowing)
              }
              className={`shrink-0 rounded-full border px-4 py-2.5 text-xs sm:text-sm font-black tracking-wide transition-colors ${
                showMorePossibilities
                  ? "border-dark bg-dark text-white"
                  : "border-dark bg-white text-dark hover:bg-gray-50"
              }`}
              aria-pressed={showMorePossibilities}
              aria-expanded={showMorePossibilities}
              aria-controls="more-possibilities-panel"
            >
              {showMorePossibilities
                ? "SHOW LESS −"
                : "MORE POSSIBILITIES +"}
            </button>
          </div>

          {!showMorePossibilities ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr_1.35fr] gap-5 lg:gap-6 items-stretch">
                <div className={`rounded-2xl p-5 ${selectedProject.tone}`}>
                  <LineIcon
                    path={selectedProject.iconPath}
                    className="h-8 w-8 mb-4"
                  />
                  <h3 className="text-2xl font-black text-dark mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-black tracking-widest text-gray-400 mb-3">
                    SKILLS THEY PRACTISE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-50 px-3 py-2 text-xs font-bold text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-xs font-black tracking-widest text-gray-400 mb-3">
                    EXAMPLE PROJECTS
                  </p>
                  <ul className="grid gap-2">
                    {selectedProject.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red-100 bg-peach p-5 md:col-span-2 lg:col-span-1">
                  <p className="text-xs font-black tracking-widest text-primary mb-3">
                    RELEVANT APTCODER LEARNING
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {selectedProject.learning.map((course) => (
                      <div
                        key={course.title}
                        className="rounded-xl border border-red-100 bg-white p-3.5"
                      >
                        <h4 className="text-sm font-black text-dark mb-1">
                          {course.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-gray-500">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate("courses")}
                    className="mt-4 text-sm font-black text-primary hover:text-primary-dark"
                  >
                    Explore Courses →
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="more-possibilities-panel"
              className="possibilities-reveal relative overflow-hidden rounded-3xl bg-dark p-5 sm:p-6 text-white"
              aria-live="polite"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />
              <div className="relative mb-4 max-w-4xl">
                <p className="text-xs font-black tracking-widest text-primary mb-2">
                  IDEAS BEYOND THE SCREEN
                </p>
                <h3 className="text-lg sm:text-xl font-black leading-snug">
                  Technology is not just something to learn. It is something to
                  use, question and create with.
                </h3>
              </div>
              <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {possibilities.map((possibility) => (
                  <article
                    key={possibility.title}
                    className="rounded-2xl border border-white/10 bg-white/8 p-3.5 text-white"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <LineIcon
                          path={possibility.path}
                          className="h-5 w-5"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase leading-snug mb-1">
                          {possibility.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-white/65">
                          {possibility.note}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="relative text-center mt-3 text-xs font-bold text-white/65">
                The next idea could be theirs.
              </p>
            </div>
          )}
        </div>
      </section>

      <CodelyDemo />

      <section
        className="py-16 sm:py-20 bg-peach"
        aria-labelledby="offerings-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-9 sm:mb-11">
            <div className="section-label mb-3">OUR OFFERINGS</div>
            <h2
              id="offerings-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-dark mb-4"
            >
              Explore the APTCODER Ecosystem.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-500 max-w-3xl">
              Learn, build, take on challenges and keep creating with APTCODER.
            </p>
          </div>

          <article className="mb-5 overflow-hidden rounded-3xl bg-white">
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-black tracking-widest text-primary mb-2">
                  MEET VERNATICS
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-dark mb-3">
                  Code a Robot. Watch It Respond.
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  Program a real robot, control it wirelessly from anywhere,
                  work with sensors and experiment in the language you
                  understand best.
                </p>
                <dl className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    ["CODE", "Give it instructions."],
                    ["CONTROL", "Operate it from anywhere."],
                    ["SENSE", "Use sensors to detect and respond."],
                    ["CREATE", "Test. Change. Try again."],
                  ].map(([term, detail]) => (
                    <div key={term}>
                      <dt className="text-[10px] font-black tracking-widest text-primary mb-1">
                        {term}
                      </dt>
                      <dd className="text-xs text-gray-600">{detail}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mb-6 inline-flex rounded-full bg-peach px-3 py-2 text-xs font-black text-primary">
                  Learn Robotics in Your Language
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigate("courses")}
                    className="rounded-full bg-primary px-5 py-3 text-sm font-black text-white hover:bg-primary-dark"
                  >
                    Explore Vernatics →
                  </button>
                  <button
                    type="button"
                    disabled
                    title="Approved Vernatics video is not yet available"
                    className="text-sm font-bold text-gray-400 cursor-not-allowed"
                  >
                    Watch it in action
                  </button>
                </div>
              </div>
              <div
                className="relative min-h-64 bg-peach-mid p-6 flex items-center justify-center text-center lg:min-h-full"
                role="img"
                aria-label="Development placeholder for approved Vernatics robot footage"
              >
                <div>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <LineIcon
                      path="M6 7h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM12 3v4M9 12h.01M15 12h.01M9 16h6"
                      className="h-9 w-9"
                    />
                  </div>
                  <p className="text-xs font-black tracking-widest text-primary">
                    VERNATICS ROBOT MEDIA
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            <article className="md:col-span-2 lg:col-span-1 rounded-3xl bg-white p-6">
              <p className="text-xs font-black tracking-widest text-primary mb-2">
                COURSES &amp; LEARNING PATHS
              </p>
              <h3 className="text-2xl font-black text-dark mb-2">
                Courses &amp; Learning Paths
              </h3>
              <p className="text-sm font-black text-dark mb-3">
                Find a Learning Approach That Works for Your Child.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 mb-5">
                Explore coding, AI and other technology learning opportunities
                through live instruction, guided support or self-paced lessons.
              </p>
              <div className="grid gap-2 mb-5">
                {[
                  {
                    name: "LIVE",
                    copy: "Learn with an instructor in real time.",
                    path: "M4 5h16v12H4V5Zm5 15h6M12 17v3M9 9l6 2.5L9 14V9Z",
                  },
                  {
                    name: "ASSISTED",
                    copy: "Learn independently with support when needed.",
                    path: "M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 20v-2a6 6 0 0 1 12 0v2m2-9 2 2 4-5",
                  },
                  {
                    name: "SELF-LEARNING",
                    copy: "Learn at your own pace with recorded lessons and practice.",
                    path: "M4 5h16v12H4V5Zm6 4 5 2.5-5 2.5V9ZM8 21h8",
                  },
                ].map((format) => (
                  <div
                    key={format.name}
                    className="flex items-center gap-3 rounded-xl border border-red-100 bg-peach p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                      <LineIcon path={format.path} className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black tracking-widest text-dark">
                        {format.name}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {format.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => navigate("courses")}
                className="text-sm font-black text-primary hover:text-primary-dark"
              >
                Explore Learning Paths →
              </button>
            </article>

            <article className="rounded-3xl border border-red-100 bg-white p-6">
              <p className="text-xs font-black tracking-widest text-primary mb-2">
                INDIA’S CODING OLYMPIAD
              </p>
              <h3 className="text-3xl font-black text-dark mb-3">C-NAT</h3>
              <p className="text-sm leading-relaxed text-gray-600 max-w-2xl mb-5">
                A national coding challenge where young learners test their
                skills, compete in coding tracks and earn recognition for what
                they can do.
              </p>
              <p className="text-xs font-black tracking-wide text-gray-500 mb-5">
                CHOOSE YOUR TRACK <span className="text-primary">→</span> TAKE
                THE CHALLENGE <span className="text-primary">→</span> EARN
                RECOGNITION
              </p>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="text-sm font-black text-primary hover:text-primary-dark"
              >
                Explore C-NAT →
              </button>
            </article>

            <article className="rounded-3xl bg-dark p-6 text-white">
              <p className="text-[10px] font-black tracking-widest text-primary mb-2">
                THE KIDS CODING COMMUNITY
              </p>
              <h3 className="text-3xl font-black mb-3">KCC</h3>
              <p className="text-sm text-white/70 mb-5">
                Keep learning long after the class ends.
              </p>
              <p className="text-xs font-black tracking-wide text-white/70 mb-5">
                LEARN → BUILD → SHARE → SOLVE → GROW
              </p>
              <p className="inline-flex rounded-full bg-white/10 px-3 py-2 text-xs font-bold mb-6">
                Lifetime Free Community
              </p>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="block text-sm font-black text-white hover:text-primary"
              >
                Explore KCC →
              </button>
            </article>
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 bg-white"
        aria-labelledby="news-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-9">
            <div className="section-label mb-3">IN THE NEWS</div>
            <h2
              id="news-heading"
              className="text-3xl sm:text-4xl font-black text-dark"
            >
              From India to the World
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                publication: "London Story",
                label: "INTERNATIONAL SPOTLIGHT",
                international: true,
              },
              {
                publication: "Times of India",
                label: "TIMES OF INDIA",
                international: false,
              },
              {
                publication: "YourStory",
                label: "YOURSTORY",
                international: false,
              },
              {
                publication: "The Hindu",
                label: "THE HINDU",
                international: false,
              },
            ].map((story) => (
              <article
                key={story.publication}
                className={`flex aspect-[5/6] flex-col rounded-2xl border p-3.5 ${
                  story.international
                    ? "border-red-100 bg-peach"
                    : "border-gray-200 bg-white"
                }`}
              >
                <p
                  className={`text-[10px] font-black tracking-widest mb-2.5 ${
                    story.international ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {story.label}
                </p>
                <div
                  className={`min-h-0 flex-1 rounded-xl border border-dashed flex items-center justify-center ${
                    story.international
                      ? "border-red-200 bg-white/70"
                      : "border-gray-200 bg-gray-50"
                  }`}
                  role="img"
                  aria-label={`${story.publication} development media placeholder`}
                >
                  <LineIcon
                    path="M4 5h16v14H4V5Zm3 10 3-3 2 2 3-4 2 3"
                    className={`h-7 w-7 ${
                      story.international ? "text-primary" : "text-gray-300"
                    }`}
                  />
                </div>
                <p className="pt-3 text-sm font-black leading-snug text-dark">
                  {story.publication}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 bg-peach"
        aria-labelledby="stories-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-9">
            <div className="section-label mb-3">
              VOICES FROM THE APTCODER ECOSYSTEM
            </div>
            <h2
              id="stories-heading"
              className="text-3xl sm:text-4xl font-black text-dark mb-3"
            >
              Different Perspectives. One Shared Journey.
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-3xl">
              Hear from the learners, families, educators, schools and partners
              who experience APTCODER in different ways.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "STUDENT",
                description: "Student project or experience",
                path: "M4 5h16v12H4V5Zm5 15h6M12 17v3M9 9l6 2.5L9 14V9Z",
                tone: "bg-dark text-white",
              },
              {
                label: "FAMILY",
                description: "Parent testimonial or family experience",
                path: "M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 1a3 3 0 1 0 0-6M2 21v-2a6 6 0 0 1 12 0v2m2-6a5 5 0 0 1 6 4v2",
                tone: "bg-white text-dark",
              },
              {
                label: "SCHOOL / EDUCATOR",
                description: "Principal or teacher story",
                path: "M3 10 12 5l9 5-9 5-9-5Zm3 3v5c4 2 8 2 12 0v-5",
                tone: "bg-white text-dark",
              },
              {
                label: "PARTNER",
                description: "Collaboration or impact story",
                path: "M8 12 4 8l4-4 4 4m4 4 4-4-4-4-4 4m-4 4 4 4 4-4m-8 4-4 4 4 4 4-4m4 0 4 4-4 4-4-4",
                tone: "bg-white text-dark",
              },
            ].map((story) => (
              <article
                key={story.label}
                className={`flex min-h-48 flex-col rounded-2xl border border-red-100 p-5 ${story.tone}`}
              >
                <p className="text-[10px] font-black tracking-widest text-primary mb-5">
                  {story.label}
                </p>
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${
                    story.label === "STUDENT"
                      ? "bg-white/10"
                      : "bg-peach"
                  }`}
                >
                  <LineIcon
                    path={story.path}
                    className="h-6 w-6 text-primary"
                  />
                </div>
                <p
                  className={`mt-auto text-sm font-bold leading-relaxed ${
                    story.label === "STUDENT"
                      ? "text-white/75"
                      : "text-gray-500"
                  }`}
                >
                  {story.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RecordedClassLead />

      <section
        className="py-16 sm:py-20 bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="section-label mb-3">FAQS</div>
            <h2 id="faq-heading" className="text-3xl font-black text-dark mb-3">
              Questions? We’ve Got Answers.
            </h2>
            <p className="text-sm text-gray-500">
              Clear answers about learning with APTCODER.
            </p>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <div key={faq.q} className="faq-item py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-bold text-dark">{faq.q}</span>
                  <span
                    className={`shrink-0 text-xl font-light text-primary transition-transform ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <p className="mt-3 pr-10 text-sm leading-relaxed text-gray-500">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-peach">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-black tracking-widest text-primary mb-3">
            READY TO BEGIN?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-dark mb-4">
            Turn Curiosity Into Something Your Child Can Build.
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-7">
            Start with a conversation and find a learning path that fits your
            child.
          </p>
          <button
            type="button"
            onClick={() => navigate("courses")}
            className="rounded-full bg-primary px-8 py-4 text-sm font-black text-white hover:bg-primary-dark"
          >
            Book a Free Class →
          </button>
        </div>
      </section>
    </div>
  )
}
