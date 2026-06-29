import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { IconShield } from './Icons.jsx'
import { SERVICES, CATEGORY_LABELS } from './servicesData.js'
import './ServicePage.css'

export default function ServicePage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const service = SERVICES.find((s) => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="sp-notfound">
        <h2>Service not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    )
  }

  const { name, sub, category, description, highlights, images = [], longDescription, process } = service
  const categoryLabel = CATEGORY_LABELS[category]

  // Related services (same category, not this one)
  const related = SERVICES.filter((s) => s.category === category && s.slug !== slug).slice(0, 3)

  return (
    <div className="sp-root">
      {/* Back nav */}
      <div className="sp-topbar">
        <div className="shell">
          <Link to="/" className="sp-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to all services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="sp-hero">
        {images[0] && (
          <div className="sp-hero-img">
            <img src={images[0]} alt={name} />
            <div className="sp-hero-overlay" />
          </div>
        )}
        <div className="shell sp-hero-content">
          <span className="sp-category-badge">{categoryLabel}</span>
          <h1>{name}</h1>
          {sub && <p className="sp-sub">{sub}</p>}
          <p className="sp-lead">{description}</p>
          <div className="sp-hero-ctas">
            <Link to="/#contact" className="btn btn-primary">Book Free Consultation</Link>
            <a href="tel:+917006651582" className="btn btn-outline-white">Call Now</a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="sp-highlights-section">
        <div className="shell sp-highlights-inner">
          <div className="sp-highlights-text">
            <h2>What's Included</h2>
            <p>{longDescription || description}</p>
            <ul className="sp-highlights-list">
              {highlights.map((h) => (
                <li key={h}>
                  <IconShield width={18} height={18} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sp-highlights-imgs">
            {images.slice(1, 3).map((src, i) => (
              <div className="sp-highlights-img" key={i}>
                <img src={src} alt={`${name} ${i + 2}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      {process && process.length > 0 && (
        <section className="sp-process">
          <div className="shell">
            <h2>How It Works</h2>
            <div className="sp-process-steps">
              {process.map((step, i) => (
                <div className="sp-step" key={i}>
                  <div className="sp-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery strip */}
      {images.length > 1 && (
        <section className="sp-gallery">
          <div className="shell">
            <h2>Gallery</h2>
            <div className={`sp-gallery-grid count-${Math.min(images.length, 4)}`}>
              {images.slice(0, 4).map((src, i) => (
                <div className="sp-gallery-item" key={i}>
                  <img src={src} alt={`${name} gallery ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="sp-cta-banner">
        <div className="shell sp-cta-inner">
          <div>
            <h2>Ready to get started?</h2>
            <p>Book a free consultation with our {categoryLabel.toLowerCase()} specialists today.</p>
          </div>
          <div className="sp-cta-actions">
            <Link to="/#contact" className="btn btn-primary">Book Consultation</Link>
            <a href="tel:+917006651582" className="sp-cta-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +91 700 665 1582
            </a>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="sp-related">
          <div className="shell">
            <h2>Related Services</h2>
            <div className="sp-related-grid">
              {related.map((s) => (
                <Link to={`/services/${s.slug}`} className="sp-related-card" key={s.slug}>
                  {s.images[0] && (
                    <div className="sp-related-img">
                      <img src={s.images[0]} alt={s.name} loading="lazy" />
                    </div>
                  )}
                  <div className="sp-related-body">
                    <span className="services-tag">{CATEGORY_LABELS[s.category]}</span>
                    <h3>{s.name}</h3>
                    <p>{s.description.slice(0, 90)}…</p>
                    <span className="sp-related-link">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
