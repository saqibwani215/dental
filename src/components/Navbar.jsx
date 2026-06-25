import { useEffect, useState } from 'react'
import { BrandMark, IconMenu, IconClose, IconPhone } from './Icons.jsx'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell navbar-inner">
        <a href="#top" className="navbar-brand" onClick={() => setOpen(false)}>
          <BrandMark size={34} />
          <span>
            AIMS
            <small>Dental &amp; Facial Aesthetic Centre</small>
          </span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar-cta">
          <a className="navbar-phone" href="tel:+917006943071">
            <IconPhone width={16} height={16} />
            Call Clinic
          </a>
          <a className="btn btn-primary" href="#contact">
            Book a Visit
          </a>
        </div>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
            Book a Visit
          </a>
        </div>
      )}
    </header>
  )
}
