import { Eyebrow } from '../components/ui/Eyebrow'
import { FeatureIcon } from '../components/ui/FeatureIcon'
import { workforceCards } from '../data/content'

export function WorkforceSection() {
  return (
    <section className="section">
      <div className="section-header">
        <Eyebrow id="workforce">Our AI workforce</Eyebrow>
        <h2>Meet your AI Workforce</h2>
      </div>
      <div className="card-grid">
        {workforceCards.map((item) => (
          <article className="info-card" key={item.title}>
            <div className="card-icon">
              <FeatureIcon className="card-icon-svg" name={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
