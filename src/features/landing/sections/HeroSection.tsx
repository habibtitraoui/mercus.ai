import { ButtonLink } from '../components/ui/ButtonLink'
import { Eyebrow } from '../components/ui/Eyebrow'

export function HeroSection() {
  return (
    <section className="hero-section section" id="hero">
      <Eyebrow>Trusted By Our Clients</Eyebrow>
      <h1>Your AI team that answers, sells and follows up 24/7.</h1>
      <p className="hero-copy">
        Mercus deploys AI agents that handle customer service, confirm orders
        and appointments, qualify leads, reply to DMs, and answer calls, so
        your team can focus on closing deals.
      </p>
      <div className="hero-actions">
        <ButtonLink href="#workforce" icon="play">
          Quick Demo
        </ButtonLink>
        <ButtonLink href="#contact" variant="secondary">
          Book a Demo
        </ButtonLink>
      </div>
    </section>
  )
}
