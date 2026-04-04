import { useRef, useState, useEffect } from 'react'
import { Eyebrow } from '../components/ui/Eyebrow'
import { FeatureIcon } from '../components/ui/FeatureIcon'
import { testimonials } from '../data/content'

export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const slidesPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1

  const totalSlides = testimonials.length
  const maxIndex = totalSlides - slidesPerView

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return
    const container = containerRef.current
    const slideWidth = container.scrollWidth / totalSlides
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
              className="w-full shrink-0 snap-start basis-full rounded-3xl border border-[rgba(17,17,17,0.06)] bg-white p-5.5 text-left shadow-[0_18px_38px_rgba(17,17,17,0.04)] md:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)] lg:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#efefef] text-xl uppercase text-[#111111]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="mt-6 mb-2.5 text-2xl leading-[1.3] text-[#111111]">{item.name}</h3>
                  <p className="text-base leading-7 text-[#6b6b6b] sm:text-2xl sm:leading-[1.45]">{item.role}</p>
                </div>
              </div>

              <p className="my-6 text-base leading-7 text-[#6b6b6b] sm:text-2xl sm:leading-[1.45]">{item.text}</p>

              <a href="#contact" className="text-base text-[#f58220] no-underline sm:text-xl">
                Read story
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination + Arrows */}
      <div className="mt-16 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === activeSlide
                  ? 'w-4.5 bg-[#f58220]'
                  : 'w-2 bg-[rgba(245,130,32,0.3)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-[#f58220] bg-white text-[#f58220] cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FeatureIcon name="chevronLeft" className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-[#f58220] bg-[#f58220] text-white cursor-pointer"
            aria-label="Next testimonial"
          >
            <FeatureIcon name="chevronRight" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}