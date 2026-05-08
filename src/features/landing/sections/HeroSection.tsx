import { ButtonLink } from '../components/ui/ButtonLink'
import { Calendar, Chat } from '../components/ui/coolicons'
import { Eyebrow } from '../components/ui/Eyebrow'
import { landingUiIcons } from '../data/content'

const heroStats = [
  { value: '10k+', label: 'Messages Handled' },
  { value: '99%', label: 'Customer Satisfaction' },
  { value: '5min', label: 'Avg Response' },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-[1180px] flex-col items-center text-center"
    >
      <div className="absolute left-0 top-20 hidden h-16 w-16 items-center justify-center rounded-2xl border border-[#fff0cf] bg-white text-[#f58220] shadow-[0_18px_30px_rgba(17,17,17,0.18)] lg:flex">
        <svg
          className="h-8 w-8"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.4" />
          <path
            d="M16 9.5V16L20.5 18.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-[385px] hidden h-16 w-16 items-center justify-center rounded-2xl border border-[#fff0cf] bg-white text-[#f58220] shadow-[0_18px_30px_rgba(17,17,17,0.18)] lg:flex">
        <Chat className="h-8 w-8" aria-hidden="true" />
      </div>
      <Eyebrow>Trusted By Our Clients</Eyebrow>
      <h1 className="mx-auto max-w-[900px] text-center text-[clamp(2.5rem,7vw,72px)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111111]">
        Your AI team that{' '}
        <span className="inline-block whitespace-nowrap max-sm:whitespace-normal">
          <span className="relative inline-block text-[#ff6b18]">
            answers
            <svg
              className="absolute -bottom-5 left-0 h-[18px] w-full min-w-[260px] text-[#ff9f17] max-sm:-bottom-3 max-sm:min-w-[170px]"
              viewBox="0 0 322 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10.2C67.8 24.1 173.4 -4.3 318 10.2"
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
          </span>
          , sells and follows
          <span className="block whitespace-nowrap">
            up <span className="text-[#ff850b]">24/7.</span>
          </span>
        </span>
      </h1>
      <p className="mx-auto mt-10 max-w-[1120px] text-center text-base leading-7 text-[#6b6b6b] sm:text-[22px] sm:leading-[1.65]">
        Mercus deploys AI agents that handle customer service, confirm orders
        and appointments, qualify leads, reply to DMs, and answer calls, so
        your team can focus on closing deals.
      </p>
      <div className="mt-7 grid w-full max-w-[550px] grid-cols-1 gap-4 rounded-2xl border border-[#e8edf3] bg-white px-8 py-6 shadow-[0_16px_30px_rgba(17,17,17,0.18)] sm:grid-cols-3 sm:gap-6 sm:px-10">
        {heroStats.map((stat) => (
          <div className="text-center" key={stat.label}>
            <div className="text-[34px] font-bold leading-none text-[#ff850b] sm:text-[36px]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm leading-5 text-[#4b5563]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[34px] flex flex-col items-center justify-center gap-3.5 sm:flex-row">
        <ButtonLink href="#workforce" icon={landingUiIcons.play}>
          Quick Demo
        </ButtonLink>
        <ButtonLink href="#contact" variant="secondary" icon={Calendar}>
          Book a Demo
        </ButtonLink>
      </div>
    </section>
  )
}
