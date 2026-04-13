import { useRef, useState, useEffect } from 'react'
import { Eyebrow } from '../components/ui/Eyebrow'
import { landingUiIcons, testimonials } from '../data/content'

export function TestimonialsSection() {
  const ChevronLeftIcon = landingUiIcons.chevronLeft
  const ChevronRightIcon = landingUiIcons.chevronRight
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const slidesPerView = window.innerWidth >= 1024 ? 2.5 : window.innerWidth >= 768 ? 2 : 1

  const totalSlides = testimonials.length
  const maxIndex = Math.max(totalSlides - Math.ceil(slidesPerView), 0)
  const pageCount = maxIndex + 1

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return
    const container = containerRef.current
    const firstSlide = container.firstElementChild as HTMLElement | null
    const gap = Number.parseFloat(window.getComputedStyle(container).columnGap || '0')
    const slideWidth = firstSlide ? firstSlide.getBoundingClientRect().width + gap : 0

    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    })
    setActiveSlide(index)
  }

  const prevSlide = () => {
    const newIndex = activeSlide === 0 ? maxIndex : activeSlide - 1
    scrollToSlide(newIndex)
  }

  const nextSlide = () => {
    const newIndex = activeSlide === maxIndex ? 0 : activeSlide + 1
    scrollToSlide(newIndex)
  }

  // Update activeSlide on resize (optional)
  useEffect(() => {
    const handleResize = () => {
      setActiveSlide((prev) => Math.min(prev, maxIndex))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [maxIndex])

  const getInitials = (name: string) =>
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('')

  return (
    <section className="flex flex-col items-center text-center">
      <Eyebrow>Testimonials</Eyebrow>
      <h2 className="mx-auto max-w-245 text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
        We all need proof
      </h2>

      <div className="mt-16 w-full">
        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="w-full shrink-0 snap-start basis-full rounded-[14px] border border-[rgba(17,17,17,0.03)] bg-white px-5 py-4 text-left shadow-[0_10px_28px_rgba(17,17,17,0.05)] md:basis-[calc((100%-24px)/2)] md:px-6 md:py-5 lg:basis-[calc((100%-48px)/2.5)]"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[1rem] font-semibold uppercase tracking-[-0.04em] text-[#111111] shadow-[0_6px_14px_rgba(17,17,17,0.14)]">
                  {getInitials(item.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[1.125rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#111111] md:text-[1.625rem]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-[#9f9f9f] md:text-[0.78rem]">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 min-h-[96px] text-[0.95rem] leading-[1.55] text-[#4e4e4e] md:min-h-[112px] md:text-[1rem]">
                {item.text}
              </p>

              <div className="mt-5 flex items-center gap-2 text-[0.8rem] text-[#b0b0b0] md:text-[0.85rem]">
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-3.5 rounded-[2px] bg-[linear-gradient(135deg,#f58220_0%,#ffae46_100%)] [clip-path:polygon(0_100%,18%_100%,33%_20%,51%_100%,69%_20%,100%_100%,82%_100%,67%_48%,49%_100%,31%_48%,16%_100%)]"
                />
                <span>Mercus user, 2026.03.29</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex gap-3">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`cursor-pointer rounded-full border border-[#f58220] transition-all ${
                index === activeSlide
                  ? 'h-2.5 w-7 bg-[#f58220]'
                  : 'h-2.5 w-2.5 bg-transparent'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={prevSlide}
            className="cursor-pointer flex h-13 w-13 items-center justify-center rounded-full border border-[#f58220] bg-white text-[#f58220] shadow-[0_10px_24px_rgba(245,130,32,0.08)]"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="cursor-pointer flex h-13 w-13 items-center justify-center rounded-full border border-[#f58220] bg-[#f58220] text-white shadow-[0_12px_26px_rgba(245,130,32,0.22)]"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
