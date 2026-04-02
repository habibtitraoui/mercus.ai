import { footerLinks } from '../../data/content'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="mt-16 flex w-full flex-col gap-7 border-t border-[rgba(0,0,0,0.04)] bg-white px-4 py-6 text-xs sm:px-6 md:px-10 md:py-[35px] md:text-[13px] lg:px-[120px] 2xl:px-[167px]">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-6">
          <Brand href="#hero" />
          <div className="flex max-w-[520px] flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                className="text-[#252525] no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex min-h-full items-center justify-end text-[#6b6b6b]">
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="#contact"
              aria-label="Facebook"
              className="inline-flex h-7 w-7 items-center justify-center text-[#252525] no-underline"
            >
              f
            </a>
            <a
              href="#contact"
              aria-label="Twitter"
              className="inline-flex h-7 w-7 items-center justify-center text-[#252525] no-underline"
            >
              t
            </a>
            <a
              href="#contact"
              aria-label="Instagram"
              className="inline-flex h-7 w-7 items-center justify-center text-[#252525] no-underline"
            >
              o
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-6 border-t border-[#efefef] pt-3 text-xs text-[#9a9a9a] md:flex-row">
        <span>Copyright (c) 2026 Mercus. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href="#contact" className="text-[#252525] no-underline">
            Terms & Conditions
          </a>
          <a href="#contact" className="text-[#252525] no-underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
