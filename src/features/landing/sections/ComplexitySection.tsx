import { useEffect, useRef, useState } from 'react'
import complexityGraph from '../../../assets/complexity-graph.svg'
import { Eyebrow } from '../components/ui/Eyebrow'
import { steps } from '../data/content'

export function ComplexitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(1 / steps.length)

  useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      ticking = false

      if (!sectionRef.current || typeof window === 'undefined') {
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollDistance = Math.max((steps.length - 1) * viewportHeight, 1)
      const travelled = Math.min(Math.max(-rect.top, 0), scrollDistance)
      const normalized = travelled / scrollDistance
      const nextStep = Math.min(
        steps.length - 1,
        Math.max(0, Math.round(normalized * (steps.length - 1))),
      )

      setActiveStep(nextStep)
      setProgress((travelled / (steps.length * viewportHeight)) + 1 / steps.length)
    }

    const onScroll = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      className="relative text-center"
      ref={sectionRef}
      style={{ minHeight: `${steps.length * 100}vh` }}
    >
      <div className="flex flex-col items-center text-center">
        <Eyebrow id="how-it-works">Simple flow</Eyebrow>
        <h2 className="mx-auto max-w-245 text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          We hate complexity
        </h2>
      </div>
      <div className="sticky top-0 mt-16 flex min-h-screen items-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(280px,1fr)_minmax(340px,1fr)] lg:gap-16">
          <div className="relative mx-auto flex w-full max-w-[500px]">
            <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-[#dddddd]">
              <div
                className="w-full rounded-full bg-[linear-gradient(180deg,#ffb56e_0%,#f58220_100%)] transition-[height] duration-500"
                style={{ height: `${Math.min(progress * 100, 100)}%` }}
              />
            </div>

            <div className="flex w-full flex-col gap-10 pl-12 sm:gap-14">
              {steps.map((item, index) => {
                const isActive = index === activeStep

                return (
                  <div className="relative text-left" key={item.title}>
                    <div
                      className={`absolute -left-[46px] top-1 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? 'scale-110 border-[#f58220] bg-[linear-gradient(180deg,#ffb56e_0%,#f58220_100%)] text-white shadow-[0_12px_24px_rgba(245,130,32,0.24)]'
                          : 'border-[#d7d7d7] bg-white text-[#909090]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div
                      className={`max-w-md transition-all duration-500 ${
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-45'
                      }`}
                    >
                      <h3 className="mb-3 text-2xl leading-[1.2] text-[#111111] sm:text-[32px]">
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-[#6b6b6b] sm:text-xl sm:leading-[1.45]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mx-auto flex h-[320px] w-full max-w-[540px] items-center justify-center sm:h-[420px] lg:h-[520px]">
            {steps.map((item, index) => {
              const isActive = activeStep === index

              return (
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    isActive
                      ? 'translate-y-0 scale-100 opacity-100'
                      : 'translate-y-6 scale-95 opacity-0'
                  }`}
                  key={item.title}
                >
                  <div className="relative">
                    <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,#ffd8a3_0%,rgba(245,130,32,0.14)_42%,rgba(245,130,32,0)_72%)] blur-2xl" />
                    <img
                      alt=""
                      aria-hidden="true"
                      className="relative mx-auto w-[260px] max-w-full drop-shadow-[0_24px_48px_rgba(213,110,18,0.24)] sm:w-[340px] lg:w-[420px]"
                      src={complexityGraph}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
