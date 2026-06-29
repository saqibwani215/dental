import { Link } from 'react-router-dom'
import { SERVICES, CATEGORY_LABELS } from './servicesData.js'
import './Services.css'

function ToothIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8 2 5 5 5 8c0 2 .5 3.5 1 5l1 7c.2 1.5 1 2 2 2s1.5-.5 2-2l1-3 1 3c.5 1.5 1 2 2 2s1.8-.5 2-2l1-7c.5-1.5 1-3 1-5 0-3-3-6-7-6z" />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">What We Offer</p>
          <h2>Facilities Available</h2>
          <p>
            From routine check-ups to complex maxillofacial procedures — all under one roof,
            delivered by PGI &amp; AIIMS trained specialists.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <Link
              to={`/services/${s.slug}`}
              className="services-card"
              key={s.name}
              data-category={s.category}
            >
              <span className="services-card-icon">
                <ToothIcon />
              </span>
              <div className="services-card-body">
                <h3>{s.name}</h3>
                {s.sub && <p className="services-card-sub">{s.sub}</p>}
                <span className="services-tag">{CATEGORY_LABELS[s.category]}</span>
              </div>
              <span className="services-card-arrow">→</span>
            </Link>
          ))}
        </div>

        <p className="services-note">
          Not sure which treatment you need?{' '}
          <a href="#contact" className="services-note-link">Book a free consultation →</a>
        </p>
      </div>
    </section>
  )
}
