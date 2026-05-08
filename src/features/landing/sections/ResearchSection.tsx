import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from '../components/ui/Eyebrow'

const researchStats = [
  {
    value: '5',
    suffix: 'minutes',
    title: 'Response Time',
    text: 'Average time to first response',
    iconClassName: 'bg-[linear-gradient(135deg,#ff6b10_0%,#ff9d0b_100%)]',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2.6" />
        <path
          d="M16 10.5V16L20 18.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.6"
        />
      </svg>
    ),
  },
  {
    value: '100x',
    title: 'Higher Conversion',
    text: 'Faster responses mean more conversions',
    iconClassName: 'bg-[linear-gradient(135deg,#ff9d0b_0%,#ffc400_100%)]',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M6 21L12.5 14.5L17.5 19.5L26 11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.8"
        />
        <path
          d="M20 11H26V17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.8"
        />
      </svg>
    ),
  },
  {
    value: '98%',
    title: 'Lead Capture',
    text: 'Never miss an opportunity',
    iconClassName: 'bg-[linear-gradient(135deg,#ff6b10_0%,#ff4f0a_100%)]',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="5.8" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: '24/7',
    title: 'Always Active',
    text: 'Round-the-clock automation',
    iconClassName: 'bg-[linear-gradient(135deg,#ffb300_0%,#ffc400_100%)]',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M18.5 4L8 17H15L13.5 28L24 14.5H17L18.5 4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.6"
        />
      </svg>
    ),
  },
]

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.28 },
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="mx-auto max-w-[1180px] text-center" ref={sectionRef}>
      <div
        className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <Eyebrow>Mercus Strength</Eyebrow>
      </div>
      <h2
        className={`mx-auto max-w-[1120px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111] transition-all delay-100 duration-700 ease-out motion-reduce:transition-none ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Research shows responding to leads within{' '}
        <span className="text-[#f58220]">5 minutes</span> makes you{' '}
        <span className="text-[#f58220]">100x more</span> likely to convert
        them.
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {researchStats.map((stat, index) => (
          <article
            className={`group relative overflow-hidden rounded-[24px] border border-[#edf0f4] bg-white px-8 py-8 text-left shadow-[0_18px_40px_rgba(17,17,17,0.03)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#ffd6a3] hover:bg-[#fff8f3] hover:shadow-[0_24px_50px_rgba(245,130,32,0.12)] motion-reduce:transition-none ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            key={stat.title}
            style={{ transitionDelay: isVisible ? `${180 + index * 110}ms` : '0ms' }}
          >
            <div
              className={`mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[0_14px_28px_rgba(245,130,32,0.18)] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none ${stat.iconClassName}`}
            >
              <span className="h-8 w-8">{stat.icon}</span>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-[48px] font-bold leading-none tracking-[-0.04em] text-black">
                {stat.value}
              </span>
              {stat.suffix ? (
                <span className="pb-1 text-xl font-semibold leading-none text-[#667085]">
                  {stat.suffix}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.03em] text-black">
              {stat.title}
            </h3>
            <p className="mt-3 max-w-[20ch] text-[15px] leading-6 text-[#5f6b7a]">
              {stat.text}
            </p>
            <span
              className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 rounded-b-[24px] bg-[linear-gradient(90deg,#ff6b10_0%,#ff9d0b_100%)] transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
      <div
        className={`mx-auto mt-16 flex max-w-[800px] flex-col items-center justify-between gap-6 rounded-2xl bg-[linear-gradient(90deg,#ff6b10_0%,#ff9d0b_100%)] px-8 py-8 text-white shadow-[0_24px_50px_rgba(245,130,32,0.24)] transition-all duration-700 ease-out motion-reduce:transition-none sm:flex-row sm:px-10 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: isVisible ? '680ms' : '0ms' }}
      >
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
            Don't let leads slip away
          </h3>
          <p className="mt-3 text-base leading-6 text-white/90">
            Join thousands of businesses maximizing their conversion rates
          </p>
        </div>
        <a
          className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-white px-8 text-base font-semibold text-[#f58220] no-underline shadow-[0_12px_24px_rgba(17,17,17,0.08)] transition hover:-translate-y-0.5 sm:w-auto"
          href="#contact"
        >
          Get Started Now
        </a>
      </div>
    </section>
  )
}
