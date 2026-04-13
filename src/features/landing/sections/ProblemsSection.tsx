import { Eyebrow } from '../components/ui/Eyebrow'
import { painPoints } from '../data/content'

export function ProblemsSection() {
  return (
    <section className="text-center">
      <div className="flex flex-col items-center text-center">
        <Eyebrow id="about">Problems</Eyebrow>
        <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          Your business is losing customers everyday!
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-2 justify-items-center gap-x-5 gap-y-5 md:grid-cols-2 md:gap-x-[55px] md:gap-y-[55px] lg:grid-cols-6">
        {painPoints.map((item, index) => {
          const Icon = item.icon
          const offsetClassName =
            index === 3 ? 'lg:col-start-2 lg:col-span-2' : index === 4 ? 'lg:col-start-4 lg:col-span-2' : 'lg:col-span-2'

          return (
            <div
              className={`relative inline-flex h-auto min-h-[70px] w-full max-w-[362.81px] items-center gap-4 overflow-visible rounded-[9.21px] bg-[linear-gradient(180deg,#fffefe_0%,#fffafa_100%)] px-[17.84px] py-[17.84px] text-left text-[17px] leading-[1.05] text-[#0b0b11] shadow-[0_24px_60px_rgba(13,18,30,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] sm:text-lg md:text-2xl ${offsetClassName}`}
              key={item.label}
            >
              <span
                className="absolute top-2 bottom-2 -left-3.5 -z-10 w-[72px] rounded-[18px] blur-[10px] md:w-[88px]"
                style={{
                  background:
                    'radial-gradient(circle at 28% 50%, rgba(255, 43, 43, 0.34) 0%, rgba(255, 43, 43, 0.2) 34%, rgba(255, 43, 43, 0.08) 58%, transparent 78%)',
                }}
              />
              <span className="inline-flex h-[34.53px] w-[34.53px] shrink-0 items-center justify-center rounded-[6.63px] bg-[linear-gradient(180deg,#ff1d1d_0%,#ff0606_100%)] text-white shadow-[0_14px_28px_rgba(255,0,4,0.18),inset_0_0_0_1px_rgba(255,255,255,0.18)]">
                <Icon className="h-[18px] w-[18px] sm:h-[30px] sm:w-[30px]" aria-hidden="true" />
              </span>
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
