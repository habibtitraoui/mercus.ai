import { ButtonLink } from '../components/ui/ButtonLink'
import { Eyebrow } from '../components/ui/Eyebrow'
import { landingUiIcons } from '../data/content'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[1180px] flex-col items-center text-center"
    >
      <Eyebrow>Trusted By Our Clients</Eyebrow>
      <h1 className="mx-auto max-w-[900px] text-center text-[clamp(2.5rem,7vw,72px)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111111]">
        Your AI team that answers, sells and follows up 24/7.
      </h1>
      <p className="mx-auto mt-10 max-w-[1120px] text-center text-base leading-7 text-[#6b6b6b] sm:text-[22px] sm:leading-[1.65]">
        Mercus deploys AI agents that handle customer service, confirm orders
        and appointments, qualify leads, reply to DMs, and answer calls, so
        your team can focus on closing deals.
      </p>
      <div className="mt-[34px] flex flex-col items-center justify-center gap-3.5 sm:flex-row">
        <ButtonLink href="#workforce" icon={landingUiIcons.play}>
          Quick Demo
        </ButtonLink>
        <ButtonLink href="#contact" variant="secondary">
          Book a Demo
        </ButtonLink>
      </div>
    </section>
  )
}
