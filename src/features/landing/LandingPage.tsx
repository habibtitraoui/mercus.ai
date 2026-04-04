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
    <div className="w-full pt-22 sm:pt-24 md:pt-27 lg:pt-30 2xl:pt-31">
      <Header />

      <main className="mx-auto w-full max-w-422 space-y-16 px-4 sm:px-6 md:space-y-20 md:px-12 lg:px-20 2xl:px-31">
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
