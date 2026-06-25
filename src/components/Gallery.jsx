import { useCallback, useEffect, useRef, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from './Icons.jsx'
import './Gallery.css'

// Real Pexels photos — free for commercial use
// 2 slides per speciality: Dental Implants · Facial Aesthetics · Hair Transplant · Facial Trauma
const SLIDES = [
  {
    image: 'https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Dental Implants',
    label: 'Dental Implants',
    text: 'Titanium implants restoring single teeth to full arches — built to last a lifetime.',
  },
  {
    image: 'https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Implant Prosthetics',
    label: 'Dental Implants',
    text: 'Custom crowns and bridges crafted for a natural look and long-term function.',
  },
  {
    image: 'https://images.pexels.com/photos/7582568/pexels-photo-7582568.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Facial Aesthetics',
    label: 'Facial Aesthetics',
    text: 'Subtle, natural-looking rejuvenation with precision injectables.',
  },
  {
    image: 'https://images.pexels.com/photos/7581583/pexels-photo-7581583.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Anti-Ageing Treatment',
    label: 'Facial Aesthetics',
    text: 'Botox and dermal fillers administered by PGI-trained specialists.',
  },
  {
    image: 'https://images.pexels.com/photos/36963686/pexels-photo-36963686.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Hair Transplant',
    label: 'Hair Transplant',
    text: 'Follicle-by-follicle FUE restoration for natural, permanent growth lines.',
  },
  {
    image: 'https://images.pexels.com/photos/20845681/pexels-photo-20845681.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Hair Restoration Surgery',
    label: 'Hair Transplant',
    text: 'Precision micro-graft surgery performed under magnification by our surgeons.',
  },
  {
    image: 'https://images.pexels.com/photos/30769213/pexels-photo-30769213.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Facial Trauma Care',
    label: 'Facial Trauma',
    text: 'Emergency-ready surgical treatment for facial fractures and injuries.',
  },
  {
    image: 'https://images.pexels.com/photos/30797771/pexels-photo-30797771.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    title: 'Reconstructive Surgery',
    label: 'Facial Trauma',
    text: 'Restoring function and appearance after maxillofacial trauma.',
  },
]

// Colour chip per speciality
const LABEL_COLORS = {
  'Dental Implants': 'var(--teal)',
  'Facial Aesthetics': 'var(--gold)',
  'Hair Transplant': '#7c5cbf',
  'Facial Trauma': '#c05c3a',
}

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const timer = useRef(null)

  const go = useCallback((next) => {
    setIndex((next + SLIDES.length) % SLIDES.length)
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4500)
  }, [])

  useEffect(() => {
    if (!paused) startTimer()
    else clearInterval(timer.current)
    return () => clearInterval(timer.current)
  }, [paused, startTimer])

  // Mobile swipe
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStart === null) return
    const dx = touchStart - e.changedTouches[0].clientX
    if (Math.abs(dx) > 40) { go(dx > 0 ? index + 1 : index - 1); startTimer() }
    setTouchStart(null)
  }

  const slide = SLIDES[index]

  return (
    <section id="gallery" className="section surface gallery">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2>A look inside our specialities.</h2>
          <p>Browse our four treatment areas — tap any thumbnail to jump directly to it.</p>
        </div>

        {/* ── Slider ── */}
        <div
          className="slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="slider-arrow left" onClick={() => { go(index - 1); startTimer() }} aria-label="Previous slide">
            <IconChevronLeft width={22} height={22} />
          </button>

          <div
            className="slider-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="slider-art">
              <img key={index} src={slide.image} alt={slide.title} loading="lazy" />
            </div>
            <div className="slider-caption">
              <div className="slider-meta">
                <span
                  className="slider-speciality-tag"
                  style={{ background: LABEL_COLORS[slide.label] }}
                >
                  {slide.label}
                </span>
                <span className="slider-count">
                  {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
                </span>
              </div>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>

          <button className="slider-arrow right" onClick={() => { go(index + 1); startTimer() }} aria-label="Next slide">
            <IconChevronRight width={22} height={22} />
          </button>

          <div className="slider-dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.title}
                className={i === index ? 'is-active' : ''}
                onClick={() => { go(i); startTimer() }}
                aria-label={`Go to ${s.title}`}
              />
            ))}
          </div>
        </div>

        {/* ── Thumbnail Grid ── */}
        <div className="gallery-grid">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              className={`gallery-thumb ${i === index ? 'is-active' : ''}`}
              onClick={() => { go(i); startTimer() }}
              aria-label={`View ${s.title}`}
            >
              <div className="gallery-thumb-img">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <span>{s.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}