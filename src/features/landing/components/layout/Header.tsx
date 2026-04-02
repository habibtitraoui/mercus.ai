import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { navItems } from '../../data/content'
import { Brand } from '../ui/Brand'
import { ButtonLink } from '../ui/ButtonLink'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#about')

  useEffect(() => {
    const syncActiveHref = () => {
      setActiveHref(window.location.hash || '#about')
    }

    syncActiveHref()
    window.addEventListener('hashchange', syncActiveHref)

    return () => {
      window.removeEventListener('hashchange', syncActiveHref)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (href: string) => {
    const target = document.querySelector<HTMLElement>(href)
    const header = document.querySelector<HTMLElement>('header[data-topbar="true"]')

    if (!target) {
      return
    }

    const headerHeight = header?.offsetHeight ?? 0
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8

    window.history.replaceState(null, '', href)
    setActiveHref(href)
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    })
  }

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault()
    closeMenu()
    scrollToSection(href)
  }

  return (
    <>
      <header
        data-topbar="true"
        className="fixed inset-x-0 top-0 z-50 w-full border-b border-[rgba(17,17,17,0.06)] bg-[rgba(255,255,255,0.98)] backdrop-blur-[14px]"
      >
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-2.5 px-3.5 py-3 sm:px-[18px] md:gap-3.5 md:px-[18px] lg:gap-6 lg:px-10">
          <Brand href="#hero" ariaLabel="Mercus home" />

          <nav className="hidden flex-1 items-center justify-center gap-[38px] text-[17px] min-[721px]:inline-flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  activeHref === item.href
                    ? 'font-bold text-[#111111]'
                    : 'font-normal text-[#252525]'
                }
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink href="#contact" small>
              Book a Demo
            </ButtonLink>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(17,17,17,0.08)] bg-white min-[721px]:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-0.5 w-5 rounded-full bg-[#111111]" />
                <span className="block h-0.5 w-5 rounded-full bg-[#111111]" />
                <span className="block h-0.5 w-5 rounded-full bg-[#111111]" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[59] bg-[rgba(17,17,17,0.32)] transition-opacity duration-200 ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      <aside
        className={`fixed right-0 top-0 bottom-0 z-[60] flex w-full max-w-[360px] flex-col gap-7 bg-white px-5 py-6 shadow-[-12px_0_32px_rgba(17,17,17,0.12)] transition-transform duration-200 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Brand href="#hero" ariaLabel="Mercus home" />
          <button
            type="button"
            className="h-11 w-11 rounded-xl border border-[rgba(17,17,17,0.08)] bg-white text-[28px] leading-none text-[#111111]"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            x
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-[14px] bg-[#fafafa] px-3 py-3.5 text-base no-underline ${
                activeHref === item.href
                  ? 'font-bold text-[#111111]'
                  : 'font-normal text-[#111111]'
              }`}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contact" className="sm:w-full">
          Book a Demo
        </ButtonLink>
      </aside>
    </>
  )
}
