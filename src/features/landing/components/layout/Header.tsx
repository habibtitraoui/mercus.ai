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

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Brand href="#hero" ariaLabel="Mercus home" />

          <nav className="nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHref === item.href ? 'is-active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <ButtonLink href="#contact" small>
              Book a Demo
            </ButtonLink>

            <button
              type="button"
              className="menu-toggle"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-backdrop${isMenuOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      <aside className={`mobile-menu${isMenuOpen ? ' is-open' : ''}`}>
        <div className="mobile-menu-header">
          <Brand href="#hero" ariaLabel="Mercus home" />
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            x
          </button>
        </div>

        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeHref === item.href ? 'is-active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contact">Book a Demo</ButtonLink>
      </aside>
    </>
  )
}
