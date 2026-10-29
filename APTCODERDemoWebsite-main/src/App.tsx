import { useState } from "react"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import AboutPage from "./pages/AboutPage"
import SchoolPage from "./pages/SchoolPage"
import ContactPage from "./pages/ContactPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CredibilityStrip from "./components/CredibilityStrip"
import { LanguageProvider } from "./components/LanguageContext"

export type Page = "home" | "courses" | "about" | "school" | "contact"

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} navigate={navigate} />
        {currentPage === "home" && <CredibilityStrip />}
        {currentPage === "home" && <HomePage navigate={navigate} />}
        {currentPage === "courses" && <CoursesPage navigate={navigate} />}
        {currentPage === "about" && <AboutPage navigate={navigate} />}
        {currentPage === "school" && <SchoolPage navigate={navigate} />}
        {currentPage === "contact" && <ContactPage navigate={navigate} />}
        <Footer navigate={navigate} />
      </div>
    </LanguageProvider>
  )
}
