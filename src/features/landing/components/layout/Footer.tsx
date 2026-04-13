import { footerLinks } from '../../data/content'
import { Brand } from '../ui/Brand'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M13.5 21v-7.35h2.47l.37-2.86H13.5V8.97c0-.83.23-1.39 1.42-1.39H16.5V5.02c-.27-.04-1.18-.12-2.24-.12-2.21 0-3.73 1.35-3.73 3.84v2.05H8v2.86h2.53V21h2.97Z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M18.9 3H21l-4.59 5.24L21.8 21h-4.23l-3.31-4.89L9.98 21H7.87l4.91-5.62L3 3h4.34l2.99 4.42L18.9 3Zm-.74 16.64h1.17L6.7 4.28H5.44l12.72 15.36Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.25" />
        <circle cx="12" cy="12" r="3.75" />
        <circle cx="17.35" cy="6.65" r="0.9" className="fill-current stroke-0" />
      </svg>
    ),
  },
] as const

export function Footer() {
  return (
    <footer className="mt-16 flex w-full flex-col gap-7 border-t border-[rgba(0,0,0,0.04)] bg-white px-4 py-6 text-xs sm:px-6 md:px-10 md:py-8.75 md:text-[13px] lg:px-30 2xl:px-41.75">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-6">
          <Brand href="#hero" />
          <div className="flex max-w-130 flex-wrap gap-x-7 gap-y-3">
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
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-7 w-7 items-center justify-center text-[#252525] no-underline transition-colors hover:text-[#6b6b6b]"
              >
                {item.icon}
              </a>
            ))}
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
