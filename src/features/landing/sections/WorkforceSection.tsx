import { Eyebrow } from '../components/ui/Eyebrow'
import { workforceCards } from '../data/content'

export function WorkforceSection() {
  return (
    <section>
      <div className="flex flex-col items-center text-center">
        <Eyebrow id="workforce">Our AI workforce</Eyebrow>
        <h2 className="mx-auto max-w-245 text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          Meet your AI Workforce
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-5">
        {workforceCards.map((item) => {
          const Icon = item.icon

          return (
            <article
              className="rounded-[10px] mt-8 border border-[rgba(17,17,17,0.03)] bg-white px-5 pt-5 pb-6 shadow-[0_10px_28px_rgba(245,130,32,0.06)] md:min-h-[174px] md:px-6 md:pt-6 md:pb-6 lg:min-h-[176px]"
              key={item.title}
            >
              <div className=" mb-6 inline-flex h-8 w-8 items-center justify-center rounded-[6px] bg-[linear-gradient(180deg,#ffaf56_0%,#f58220_100%)] text-white shadow-[0_10px_22px_rgba(245,130,32,0.16),inset_0_1px_0_rgba(255,255,255,0.38)] md:h-9 md:w-9">
                <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-[1.25rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111111] md:text-[1.375rem]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[22ch] text-[1rem] leading-[1.3] tracking-[-0.02em] text-[#5f5f5f] md:max-w-[20ch] md:text-[1.05rem]">
                {item.text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
