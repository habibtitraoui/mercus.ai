import { Eyebrow } from '../components/ui/Eyebrow'
import { steps } from '../data/content'

export function ComplexitySection() {
  return (
    <section className="text-center">
      <div className="flex flex-col items-center text-center">
        <Eyebrow id="how-it-works">Simple flow</Eyebrow>
        <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
          We hate complexity
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-7 lg:grid-cols-[minmax(280px,1fr)_minmax(320px,1fr)] lg:gap-10">
        <div
          className="relative mx-auto h-[200px] w-[200px] rounded-full shadow-[inset_0_22px_30px_rgba(255,255,255,0.25),inset_0_-16px_24px_rgba(132,64,0,0.22),0_28px_40px_rgba(230,129,32,0.2)] sm:h-[240px] sm:w-[240px]"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #ffd79f 0, #f8bd67 24%, transparent 25%), radial-gradient(circle at 45% 45%, #ffcc7f 0, #f4aa3f 42%, #cf7a21 70%, #a75a12 100%)',
          }}
        >
          <div className="absolute inset-7 rounded-full border-2 border-[rgba(255,225,184,0.65)]" />
          <span className="absolute top-[25px] left-[99px] h-[150px] w-0.5 rotate-[32deg] bg-[rgba(255,226,182,0.7)] sm:top-7 sm:left-[119px] sm:h-[184px]" />
          <span className="absolute top-[25px] left-[99px] h-[150px] w-0.5 -rotate-[32deg] bg-[rgba(255,226,182,0.7)] sm:top-7 sm:left-[119px] sm:h-[184px]" />
          <span className="absolute top-[99px] left-[25px] h-0.5 w-[150px] rotate-[24deg] bg-[rgba(255,226,182,0.7)] sm:top-[119px] sm:left-7 sm:w-[184px]" />
          <span className="absolute top-[99px] left-[25px] h-0.5 w-[150px] -rotate-[24deg] bg-[rgba(255,226,182,0.7)] sm:top-[119px] sm:left-7 sm:w-[184px]" />
          <span className="absolute top-[22px] left-[91px] h-[18px] w-[18px] rounded-full shadow-[0_0_0_4px_rgba(255,180,90,0.14)] sm:top-7 sm:left-[111px]" style={{ background: 'radial-gradient(circle at 35% 35%, #fff1d8, #d98523 72%)' }} />
          <span className="absolute top-[91px] right-[22px] h-[18px] w-[18px] rounded-full shadow-[0_0_0_4px_rgba(255,180,90,0.14)] sm:top-[111px] sm:right-7" style={{ background: 'radial-gradient(circle at 35% 35%, #fff1d8, #d98523 72%)' }} />
          <span className="absolute bottom-[22px] left-[91px] h-[18px] w-[18px] rounded-full shadow-[0_0_0_4px_rgba(255,180,90,0.14)] sm:bottom-7 sm:left-[111px]" style={{ background: 'radial-gradient(circle at 35% 35%, #fff1d8, #d98523 72%)' }} />
          <span className="absolute top-[91px] left-[22px] h-[18px] w-[18px] rounded-full shadow-[0_0_0_4px_rgba(255,180,90,0.14)] sm:top-[111px] sm:left-7" style={{ background: 'radial-gradient(circle at 35% 35%, #fff1d8, #d98523 72%)' }} />
        </div>

        <div className="relative mx-auto flex max-w-[460px] flex-col gap-[18px] before:absolute before:top-7 before:bottom-7 before:left-[18px] before:w-0.5 before:bg-[linear-gradient(180deg,#f58220,#d7d7d7_40%,#d7d7d7)] before:content-['']">
          {steps.map((item, index) => (
            <div
              className="grid grid-cols-[36px_minmax(0,1fr)] items-start gap-[18px] text-left"
              key={item.title}
            >
              <div
                className={`z-[1] inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${
                  item.active
                    ? 'bg-[linear-gradient(180deg,#ffaf6c_0%,#f58220_100%)]'
                    : 'bg-[#d7d7d7]'
                }`}
              >
                {index + 1}
              </div>
              <div>
                <h3 className="mt-6 mb-2.5 text-2xl leading-[1.3] text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-[#6b6b6b] sm:text-2xl sm:leading-[1.45]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
