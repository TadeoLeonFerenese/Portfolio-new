import Navbar from '@/components/organisms/Navbar.jsx'
import Footer from '@/components/organisms/Footer.jsx'
import HeroSection from '@/sections/HeroSection.jsx'
import SpecialtiesSection from '@/sections/SpecialtiesSection.jsx'
import ProjectsSection from '@/sections/ProjectsSection.jsx'
import TimelineSection from '@/sections/TimelineSection.jsx'
import { LanguageProvider } from '@/context/LanguageContext.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-clip bg-surface font-sans text-zinc-100 antialiased selection:bg-red-500/20 selection:text-red-300">
        <header className="fixed top-0 z-50 w-full">

          <Navbar />
        </header>
        <main>
          <HeroSection />
          <SpecialtiesSection />
          <ProjectsSection />
          <TimelineSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

