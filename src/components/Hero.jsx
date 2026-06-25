import { BrandWatermark, IconArrow, IconPhone } from './Icons.jsx'
import './Hero.css'

// Real Pexels photos — free for commercial use, no attribution required
// One image per speciality, displayed as a 2×2 grid mosaic in the hero
const SPECIALITY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    alt: 'Dental implant model',
    label: 'Dental Implants',
  },
  {
    src: 'https://images.pexels.com/photos/7582568/pexels-photo-7582568.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    alt: 'Facial aesthetics treatment',
    label: 'Facial Aesthetics',
  },
  {
    src: 'https://images.pexels.com/photos/36963686/pexels-photo-36963686.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    alt: 'Hair transplant surgery',
    label: 'Hair Transplant',
  },
  {
    src: 'https://images.pexels.com/photos/30769213/pexels-photo-30769213.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
    alt: 'Facial trauma surgical care',
    label: 'Facial Trauma',
  },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <BrandWatermark className="hero-watermark" />
      <div className="shell hero-inner">

        {/* ── Copy ── */}
        <div className="hero-copy">
          <p className="eyebrow">PGI &amp; AIIMS Alumni Initiative</p>
          <h1>
            Smiles, rebuilt.
            <br />
            Confidence, <em>restored.</em>
          </h1>
          <p className="hero-sub">
            AIMS brings dental implants, facial aesthetics, facial trauma care and hair
            transplant under one roof in Sopore — led by specialists trained at PGI
            Chandigarh, AIIMS and Govt. Dental College &amp; Hospital Srinagar.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Book an Appointment
              <IconArrow width={17} height={17} />
            </a>
            <a className="btn btn-ghost" href="tel:+917006943071">
              <IconPhone width={16} height={16} />
              Call the Clinic
            </a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt>3</dt>
              <dd>Specialists on staff</dd>
            </div>
            <div>
              <dt>PGI · AIIMS</dt>
              <dd>Trained &amp; ex-resident faculty</dd>
            </div>
            <div>
              <dt>Mon–Sun</dt>
              <dd>9:00 AM – 7:00 PM</dd>
            </div>
          </dl>
        </div>

        {/* ── 2×2 Speciality Image Grid ── */}
        <div className="hero-visual">
          <div className="hero-mosaic">
            {SPECIALITY_IMAGES.map((img) => (
              <div className="hero-mosaic-cell" key={img.label}>
                <img src={img.src} alt={img.alt} loading={img.label === 'Dental Implants' ? 'eager' : 'lazy'} />
                <span className="hero-mosaic-label">{img.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}