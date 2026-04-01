import { footerLinks } from '../../data/content'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Brand href="#hero" />
          <div className="footer-links">
            {footerLinks.map((item) => (
              <a key={item.href + item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-meta">
          <div className="footer-socials">
            <a href="#contact" aria-label="Facebook">
              f
            </a>
            <a href="#contact" aria-label="Twitter">
              t
            </a>
            <a href="#contact" aria-label="Instagram">
              o
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright © 2026 Mercus. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#contact">Terms & Conditions</a>
          <a href="#contact">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
