import { useState, useEffect, useCallback, useRef } from 'react'
import { IconArrow, IconPhone } from './Icons.jsx'
import './Hero.css'

// HD Pexels images matched specifically to each treatment
const SLIDES = [
  {
    // Dental implant model — Pexels #6502305 (cottonbro studio)
    src: 'https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    tag: 'Dental Implants',
    headline: 'Permanent teeth that\nlook & feel real.',
    sub: 'Titanium implants placed by PGI-trained specialists — single tooth to full-arch restorations.',
    details: ['Single & multiple implants', 'All-on-4 / All-on-6', 'Same-day temporaries', 'Bone grafting available'],
    accent: '#0E5C56',
    pos: 'center center',
  },
  {
    // Dentist examining patient — Pexels #3845625 (Jonathan Borba)
    src: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    tag: 'Restorative Dentistry',
    headline: 'Crowns, bridges &\nroot canals done right.',
    sub: 'Precision restorative care using the latest materials — restoring strength, function and aesthetics.',
    details: ['Porcelain crowns', 'Dental bridges', 'Root canal therapy', 'Tooth-coloured fillings'],
    accent: '#B8862E',
    pos: 'center 25%',
  },
  {
    // Braces / orthodontics close-up — Pexels #4269698 (Anna Shvets)
    src: 'https://images.pexels.com/photos/4269698/pexels-photo-4269698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    tag: 'Orthodontics',
    headline: 'Perfectly aligned,\nbeautifully straight.',
    sub: 'Metal braces, ceramic braces and clear aligners tailored to your lifestyle and budget.',
    details: ['Metal & ceramic braces', 'Clear aligners', 'Retainers & follow-up', 'Kids & adult treatment'],
    accent: '#0E5C56',
    pos: 'center 35%',
  },
  {
    // Botox / facial injection — Pexels #7581577 (cottonbro studio)
    src: 'https://images.pexels.com/photos/7581577/pexels-photo-7581577.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    tag: 'Facial Aesthetics',
    headline: 'Natural results.\nZero surgery.',
    sub: 'Botox, fillers and thread lifts delivered by a maxillofacial surgeon with deep anatomical precision.',
    details: ['Botox & anti-wrinkle', 'Dermal fillers', 'Thread lifts', 'Skin rejuvenation'],
    accent: '#B8862E',
    pos: 'center 20%',
  },
  {
    // Hair transplant surgery — Pexels #20845681 (Isabella Mendes)
    src: 'https://images.pexels.com/photos/20845681/pexels-photo-20845681.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    tag: 'Hair Transplant',
    headline: 'Permanent hair —\nfollicle by follicle.',
    sub: 'FUE hair transplantation under magnification. Natural growth lines. Lifelong results.',
    details: ['FUE technique', 'Natural hairline design', 'Beard & eyebrow transplant', 'PRP therapy available'],
    accent: '#0E5C56',
    pos: 'center 30%',
  },
  {
    // Dentist & patient consultation — Pexels #3779706 (Andrea Piacquadio)
    src: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    tag: 'Smile Makeover',
    headline: 'Your best smile,\ndesigned digitally.',
    sub: 'Whitening, veneers and aligners combined into a personalised plan with a digital preview before you commit.',
    details: ['Digital smile design', 'Porcelain veneers', 'Teeth whitening', 'Composite bonding'],
    accent: '#B8862E',
    pos: 'center 20%',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prevIdx, setPrevIdx] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  const startAutoPlay = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(c => {
          setPrevIdx(c)
          return (c + 1) % SLIDES.length
        })
        setTimeout(() => { setPrevIdx(null); setTransitioning(false) }, 80)
      }, 600)
    }, 5800)
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(timerRef.current)
  }, [startAutoPlay])

  const goTo = useCallback((index) => {
    if (transitioning || index === current) return
    clearInterval(timerRef.current)
    setPrevIdx(current)
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => { setPrevIdx(null); setTransitioning(false); startAutoPlay() }, 80)
    }, 600)
  }, [transitioning, current, startAutoPlay])

  const goNext = () => goTo((current + 1) % SLIDES.length)
  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)

  const slide = SLIDES[current]
  const prevSlide = prevIdx !== null ? SLIDES[prevIdx] : null

  return (
    <section id="top" className="hero">

      {/* ── Full-bleed background slides ── */}
      <div className="hero-bg">
        {prevSlide && (
          <div
            className={`hero-bg-slide hero-bg-slide--exit ${transitioning ? 'is-exiting' : ''}`}
            style={{
              backgroundImage: `url(${prevSlide.src})`,
              backgroundPosition: prevSlide.pos,
            }}
          />
        )}
        <div
          className={`hero-bg-slide hero-bg-slide--enter ${transitioning ? 'is-entering' : ''}`}
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundPosition: slide.pos,
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-vignette" />
      </div>

      {/* ── Main content ── */}
      <div className="shell hero-inner">

        {/* Left copy */}
        <div className="hero-copy">
          <p className="eyebrow">PGI &amp; AIIMS Alumni Initiative</p>
          <h1>
            Smiles, rebuilt.<br />
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
            <a className="btn btn-ghost-white" href="tel:+917006651582">
              <IconPhone width={16} height={16} />
              Call the Clinic
            </a>
          </div>
          <dl className="hero-stats">
            <div><dt>3</dt><dd>Specialists on staff</dd></div>
            <div><dt>PGI · AIIMS</dt><dd>Trained &amp; ex-resident faculty</dd></div>
            <div><dt>Mon–Sun</dt><dd>9:00 AM – 7:00 PM</dd></div>
          </dl>
        </div>

        {/* Right info card — updates per slide */}
        <div className="hero-card-wrap">
          <div className="hero-card" key={`card-${current}`}>
            <span className="hero-card-tag" style={{ background: slide.accent }}>
              <span className="hero-card-tag-dot" />
              {slide.tag}
            </span>
            <h2 className="hero-card-headline">
              {slide.headline.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="hero-card-sub">{slide.sub}</p>
            <ul className="hero-card-details">
              {slide.details.map((d, i) => (
                <li key={i}>
                  <span className="hero-card-check" style={{ color: slide.accent }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="hero-controls shell">
        <div className="hero-counter">
          <span className="hero-counter-cur">{String(current + 1).padStart(2, '0')}</span>
          <span className="hero-counter-sep" />
          <span className="hero-counter-total">{String(SLIDES.length).padStart(2, '0')}</span>
        </div>
        <div className="hero-dots">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.tag}`}
              title={s.tag}
            >
              <span className="hero-dot-fill" />
            </button>
          ))}
        </div>
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={goPrev} aria-label="Previous">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="hero-arrow" onClick={goNext} aria-label="Next">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="hero-progress" key={`progress-${current}`} style={{ '--accent': slide.accent }} />
    </section>
  )
}
