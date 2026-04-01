import { footerLinks } from '../../data/content'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div>
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
        <span>Terms and Privacy</span>
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
    </footer>
  )
}
