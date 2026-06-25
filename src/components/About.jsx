import { IconShield, IconMicroscope, IconHeartHand } from './Icons.jsx'
import './About.css'

const POINTS = [
  {
    icon: IconShield,
    title: 'PGI &amp; AIIMS trained',
    text: 'Founded by alumni of two of India\u2019s most respected medical institutes.',
  },
  {
    icon: IconMicroscope,
    title: 'Four specialities, one roof',
    text: 'Implants, facial aesthetics, hair transplant and facial trauma under one clinic.',
  },
  {
    icon: IconHeartHand,
    title: 'Patient-first care',
    text: 'Every plan is explained in plain language before any treatment begins.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="shell about-inner">

        {/* ── Real photo: dentist consulting a patient ── */}
        <div className="about-visual">
          <div className="about-photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
              alt="AIMS specialist consulting a patient"
              loading="lazy"
            />
            {/* floating credential badge */}
            <div className="about-badge">
              <span className="about-badge-num">PGI</span>
              <span className="about-badge-text">AIIMS Alumni</span>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">About AIMS</p>
          <h2>
            Built by alumni who trained at India&rsquo;s leading dental &amp; medical institutes.
          </h2>
          <p className="about-lead">
            AIMS — Dental Implant, Facial Aesthetic, Trauma &amp; Hair Transplant Centre — is
            an initiative by PGI and AIIMS alumni, set up to bring tertiary-level dental and
            facial care to Sopore and the wider Kupwara belt, without a trip to the city.
          </p>
          <p>
            From a single root canal to a full implant rehabilitation, a braces correction to
            facial trauma reconstruction, our team plans every case around long-term function
            and a natural-looking result — not just the next appointment.
          </p>

          <ul className="about-points">
            {POINTS.map((p) => {
              const Icon = p.icon
              return (
                <li key={p.title}>
                  <span className="about-point-icon">
                    <Icon width={20} height={20} />
                  </span>
                  <div>
                    <h4 dangerouslySetInnerHTML={{ __html: p.title }} />
                    <p>{p.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}