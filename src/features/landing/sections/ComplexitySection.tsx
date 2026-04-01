import { Eyebrow } from '../components/ui/Eyebrow'
import { steps } from '../data/content'

export function ComplexitySection() {
  return (
    <section className="section complexity-section">
      <div className="section-header">
        <Eyebrow id="how-it-works">Simple flow</Eyebrow>
        <h2>We hate complexity</h2>
      </div>
      <div className="complexity-layout">
        <div className="orb-wrap" aria-hidden="true">
          <div className="orb-core" />
          <span className="orb-line orb-line-a" />
          <span className="orb-line orb-line-b" />
          <span className="orb-line orb-line-c" />
          <span className="orb-line orb-line-d" />
          <span className="orb-node orb-node-a" />
          <span className="orb-node orb-node-b" />
          <span className="orb-node orb-node-c" />
          <span className="orb-node orb-node-d" />
        </div>

        <div className="steps">
          {steps.map((item, index) => (
            <div
              className={`step${item.active ? ' step-active' : ''}`}
              key={item.title}
            >
              <div className="step-index">{index + 1}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
