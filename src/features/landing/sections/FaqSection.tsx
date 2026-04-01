import { Eyebrow } from '../components/ui/Eyebrow'
import { faqs } from '../data/content'

export function FaqSection() {
  return (
    <section className="section faq-section">
      <div className="section-header" id="faq">
        <Eyebrow>FAQs</Eyebrow>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <details className="faq-item" key={item} open={index === 0}>
            <summary>
              <span className="faq-bullet" aria-hidden="true" />
              <span>{item}</span>
            </summary>
            <p>
              Mercus gives businesses an always-on AI team for customer
              conversations, follow-ups and conversions without adding
              operational complexity.
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
