import { Eyebrow } from '../components/ui/Eyebrow'

export function ResearchSection() {
  return (
    <section className="mx-auto max-w-[980px] text-center">
      <Eyebrow>Why it works</Eyebrow>
      <h2 className="mx-auto max-w-[980px] text-center text-[clamp(2.25rem,6vw,64px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
        Research shows responding to leads within{' '}
        <span className="text-[#f58220]">5 minutes</span> makes you{' '}
        <span className="text-[#f58220]">100x more</span> likely to convert
        them.
      </h2>
    </section>
  )
}
