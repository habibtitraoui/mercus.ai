import { painPoints } from '../data/content'
import { Eyebrow } from '../components/ui/Eyebrow'
import { FeatureIcon } from '../components/ui/FeatureIcon'

export function ProblemsSection() {
  return (
    <section className="section centered-section">
      <div className="section-header" id="about">
        <Eyebrow>Problems</Eyebrow>
        <h2>Your business is losing customers everyday!</h2>
      </div>
      <div className="pill-grid">
        {painPoints.map((item) => (
          <div className="pain-pill" key={item.label}>
            <span className="pain-pill-icon-wrap" aria-hidden="true">
              <FeatureIcon className="pain-pill-icon" name={item.icon} />
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
