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
    <div className="w-full pt-[88px] sm:pt-24 md:pt-[108px] lg:pt-[120px] 2xl:pt-[124px]">
      <Header />

      <main className="mx-auto w-full max-w-[1688px] space-y-16 px-4 sm:px-6 md:space-y-20 md:px-12 lg:px-20 2xl:px-[124px]">
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
