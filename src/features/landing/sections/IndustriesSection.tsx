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
      <div className="mt-[44px] grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        {industries.map((item) => {
          const Icon = item.icon

          return (
            <article
              className="grid grid-cols-1 gap-[22px] rounded-3xl border border-[rgba(17,17,17,0.06)] bg-white p-6 text-left shadow-[0_18px_38px_rgba(17,17,17,0.04)] md:grid-cols-[108px_minmax(0,1fr)] md:gap-[26px] md:p-[34px] lg:grid-cols-[132px_minmax(0,1fr)] lg:items-center lg:gap-[23px] lg:px-[46px] lg:py-[42px]"
              key={item.title}
            >
              <div className="inline-flex h-[94px] w-[88px] items-center justify-center rounded-[20px] bg-[linear-gradient(180deg,#ffab19_0%,#faa41a_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_14px_30px_rgba(250,164,26,0.16)] md:h-[116px] md:w-[108px] md:rounded-[24px] lg:h-[70px] lg:w-[62px] lg:rounded-[28px]">
                <Icon
                  className="h-[54px] w-[54px] md:h-[66px] md:w-[66px] lg:h-[39px] lg:w-[39px]"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center">
                <h3 className="mb-3.5 text-2xl font-semibold leading-[1.05] text-[#0d1330]">
                  {item.title}
                </h3>
                <p className="max-w-none text-base leading-7 text-[rgba(17,17,17,0.82)] sm:text-2xl sm:leading-[1.22] lg:max-w-[20ch]">
                  {item.text}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
