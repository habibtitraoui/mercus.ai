import { useEffect, useRef, useState } from 'react'
import { Eyebrow } from '../components/ui/Eyebrow'
import { testimonials } from '../data/content'

export function TestimonialsSection() {
  const [activePage, setActivePage] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const slideRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const handleResize = () => {
      const nextSlidesPerView =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1

      setSlidesPerView(nextSlidesPerView)
      setActivePage((current) =>
        Math.min(current, Math.max(0, testimonials.length - nextSlidesPerView)),
      )
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    slideRefs.current[activePage]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }, [activePage])

  const pageCount = Math.max(1, testimonials.length - slidesPerView + 1)

  const previousTestimonial = () => {
    setActivePage((current) => (current === 0 ? pageCount - 1 : current - 1))
  }

  const nextTestimonial = () => {
    setActivePage((current) => (current === pageCount - 1 ? 0 : current + 1))
  }

  return (
    <section className="flex flex-col items-center text-center">
      <Eyebrow>Testimonials</Eyebrow>
      <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
        We all need proof
      </h2>
      <div className="mt-16 w-full">
        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => (
            <article
              className="w-full shrink-0 snap-start basis-full rounded-3xl border border-[rgba(17,17,17,0.06)] bg-white p-[22px] text-left shadow-[0_18px_38px_rgba(17,17,17,0.04)] md:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)] lg:p-7"
              key={item.name}
              ref={(node) => {
                slideRefs.current[index] = node
              }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#efefef] text-xl uppercase text-[#111111]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="mt-6 mb-2.5 text-2xl leading-[1.3] text-[#111111]">
                    {item.name}
                  </h3>
                  <p className="text-base leading-7 text-[#6b6b6b] sm:text-2xl sm:leading-[1.45]">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="my-6 text-base leading-7 text-[#6b6b6b] sm:text-2xl sm:leading-[1.45]">
                {item.text}
              </p>
              <a
                href="#contact"
                className="text-base text-[#f58220] no-underline sm:text-xl"
              >
                Read story
              </a>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex gap-2" aria-label="Testimonials pagination">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              type="button"
              key={`testimonial-page-${index + 1}`}
              aria-label={`Go to testimonial slide ${index + 1}`}
              aria-pressed={activePage === index}
              className={`h-2 rounded-full transition-all ${
                activePage === index
                  ? 'w-[18px] bg-[#f58220]'
                  : 'w-2 bg-[rgba(245,130,32,0.3)]'
              }`}
              onClick={() => setActivePage(index)}
            />
          ))}
        </div>
        <div className="flex gap-2.5">
          <button
            type="button"
            className="h-[52px] w-[52px] rounded-full border border-[#f58220] bg-white text-2xl text-[#f58220]"
            aria-label="Previous testimonial"
            onClick={previousTestimonial}
          >
            {'<-'}
          </button>
          <button
            type="button"
            className="h-[52px] w-[52px] rounded-full border border-[#f58220] bg-[#f58220] text-2xl text-white"
            aria-label="Next testimonial"
            onClick={nextTestimonial}
          >
            {'->'}
          </button>
        </div>
      </div>
    </section>
  )
}
