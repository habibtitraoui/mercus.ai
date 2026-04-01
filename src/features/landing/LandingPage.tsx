import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ComplexitySection } from './sections/ComplexitySection'
import { ContactSection } from './sections/ContactSection'
import { FaqSection } from './sections/FaqSection'
import { HeroSection } from './sections/HeroSection'
import { IndustriesSection } from './sections/IndustriesSection'
import { ProblemsSection } from './sections/ProblemsSection'
import { ResearchSection } from './sections/ResearchSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { WorkforceSection } from './sections/WorkforceSection'

export function LandingPage() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <HeroSection />
        <ProblemsSection />
        <WorkforceSection />
        <ComplexitySection />
        <IndustriesSection />
        <ResearchSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
