import { Eyebrow } from '../components/ui/Eyebrow'
import { FeatureIcon } from '../components/ui/FeatureIcon'
import { industries } from '../data/content'

export function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="section-header">
        <Eyebrow>Best use cases</Eyebrow>
        <h2>Built for businesses that talk to customers every day.</h2>
      </div>
      <div className="industry-grid">
        {industries.map((item) => (
          <article className="industry-card" key={item.title}>
            <div className="industry-icon" aria-hidden="true">
              <FeatureIcon className="industry-icon-svg" name={item.icon} />
            </div>
            <div className="industry-card-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
