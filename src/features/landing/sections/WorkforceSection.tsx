import { Eyebrow } from '../components/ui/Eyebrow'
import { FeatureIcon } from '../components/ui/FeatureIcon'
import { workforceCards } from '../data/content'

export function WorkforceSection() {
  return (
    <section>
      <div className="flex flex-col items-center text-center">
        <Eyebrow id="workforce">Our AI workforce</Eyebrow>
        <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          Meet your AI Workforce
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-[22px] md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-12">
        {workforceCards.map((item) => (
          <article
            className="rounded-[8.54px] border border-[rgba(17,17,17,0.04)] bg-white px-5 pt-6 pb-[22px] shadow-[0_18px_44px_rgba(245,130,32,0.08)] md:min-h-[234.72px] md:px-6 md:pt-[26px] md:pb-6 lg:px-8 lg:pt-7 lg:pb-[26px]"
            key={item.title}
          >
            <div className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#ffaf6c_0%,#f58220_100%)] text-white shadow-[0_14px_28px_rgba(245,130,32,0.18),inset_0_1px_0_rgba(255,255,255,0.38)]">
              <FeatureIcon className="h-5 w-5 md:h-10 md:w-10" name={item.icon} />
            </div>
            <h3 className="mt-[22px] mb-2.5 text-[25px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111111] md:mt-6 lg:mt-7 lg:mb-3">
              {item.title}
            </h3>
            <p className="max-w-none text-xl leading-[1.2] tracking-[-0.03em] text-[#707070] md:max-w-[19ch] lg:max-w-[18ch]">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
