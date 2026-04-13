import { Eyebrow } from '../components/ui/Eyebrow'
import { industries } from '../data/content'

export function IndustriesSection() {
  return (
    <section id="industries">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Best use cases</Eyebrow>
        <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          Built for businesses that talk to customers every day.
        </h2>
      </div>
      <div className="mt-[44px] grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-8">
        {industries.map((item) => {
          const Icon = item.icon

          return (
            <article
              className="rounded-[26px] bg-[#FFFFFF] p-5 shadow-[0_10px_30px_rgba(238,182,93,0.08)] md:p-10"
              key={item.title}
            >
              <div className="flex items-center gap-4 rounded-[20px] bg-white px-5 py-5 shadow-[0_6px_20px_rgba(17,17,17,0.04)] md:min-h-[114px] md:px-8 md:py-6">
                <div className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#ffab19_0%,#faa41a_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_10px_24px_rgba(250,164,26,0.18)] md:h-[80px] md:w-[80px] md:rounded-[18px]">
                  <Icon
                    className="h-[28px] w-[28px] md:h-[42px] md:w-[42px]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <h3 className="text-[1.25rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0d1330] md:text-[1.625rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[18ch] text-[1rem] leading-[1.35] text-[rgba(17,17,17,0.82)] md:max-w-[20ch] md:text-[1.125rem]">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
