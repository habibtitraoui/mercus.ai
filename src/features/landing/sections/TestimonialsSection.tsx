import { Eyebrow } from '../components/ui/Eyebrow'
import { testimonials } from '../data/content'

export function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <Eyebrow>Testimonials</Eyebrow>
      <h2>We all need proof</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="testimonial-head">
              <div className="avatar">x</div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
            <p className="testimonial-text">{item.text}</p>
            <a href="#contact">Read story</a>
          </article>
        ))}
      </div>
      <div className="testimonial-controls" aria-hidden="true">
        <div className="dots">
          <span className="dot dot-active" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <div className="arrows">
          <button type="button" className="circle-button">
            {'<-'}
          </button>
          <button type="button" className="circle-button circle-button-fill">
            {'->'}
          </button>
        </div>
      </div>
    </section>
  )
}
