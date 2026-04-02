import { Eyebrow } from '../components/ui/Eyebrow'
import { faqs } from '../data/content'

export function FaqSection() {
  return (
    <section className="mx-auto max-w-[1100px] text-center">
      <div className="flex flex-col items-center text-center">
        <Eyebrow id="faq">FAQs</Eyebrow>
        <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-16 flex flex-col gap-[18px]">
        {faqs.map((item, index) => (
          <details
            className="group overflow-hidden rounded-3xl border border-[rgba(17,17,17,0.08)] bg-white text-left shadow-[0_14px_36px_rgba(17,17,17,0.04)]"
            key={item}
            open={index === 0}
          >
            <summary className="grid min-h-[92px] cursor-pointer list-none grid-cols-[37.28px_minmax(0,1fr)_24px] items-center gap-4 px-5 py-[22px] text-xl leading-[1.1] text-[#111111] sm:min-h-32 sm:grid-cols-[37.28px_minmax(0,1fr)_32px] sm:gap-7 sm:px-11 sm:py-7 sm:text-2xl">
              <span className="h-[37.28px] w-[37.28px] rounded-full bg-[#faa41a] shadow-[0_10px_20px_rgba(250,164,26,0.22)]" aria-hidden="true" />
              <span>{item}</span>
              <span className="justify-self-end">
                <span className="block h-[18px] w-[18px] rotate-45 border-r-[5px] border-b-[5px] border-[#f7a21a] transition-transform duration-200 group-open:rotate-[225deg]" />
              </span>
            </summary>
            <p className="px-5 pb-6 text-base leading-[1.6] text-[#6b6b6b] sm:px-11 sm:pb-8 sm:pl-[136px] sm:text-lg">
              Mercus gives businesses an always-on AI team for customer
              conversations, follow-ups and conversions without adding
              operational complexity.
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
