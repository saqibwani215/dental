import { BrandMark } from './Icons.jsx'
import './Footer.css'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">

        {/* Top section — 3 columns */}
        <div className="footer-top">

          {/* Brand column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <BrandMark size={30} color="var(--white)" accent="var(--gold)" />
              <div>
                <strong>AIMS</strong>
                <span>Dental Implant, Facial Aesthetic, Trauma &amp; Hair Transplant Centre</span>
              </div>
            </div>
            <p className="footer-tagline">
              An initiative by PGI &amp; AIIMS alumni, bringing specialist-level dental and aesthetic care to J&K.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/aimssopore"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social footer-social--facebook"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/aimssopore"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social footer-social--instagram"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/917006651582"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social footer-social--whatsapp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#about">About Us</a>
              <a href="#services">Our Services</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#doctors">Our Doctors</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Contact & hours column */}
          <div className="footer-contact-col">
            <h4>Visit Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPinIcon />
                <span>
                  AIMS Dental &amp; Aesthetic Centre<br />
                  Main Chowk, Sopore<br />
                  Baramulla, J&amp;K — 193201
                </span>
              </li>
              <li>
                <PhoneIcon />
                <a href="tel:+917006651582">+91 700 665 1582</a>
              </li>
              <li>
                <PhoneIcon />
                <a href="tel:+917006551582">+91 700 655 1582</a>
              </li>
              <li>
                <ClockIcon />
                <span>
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: Emergency only
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} AIMS Dental &amp; Facial Aesthetic Centre, Sopore.
            All rights reserved.
          </p>
          <p className="footer-copy footer-copy--right">
            PGI &amp; AIIMS alumni initiative
          </p>
        </div>

      </div>
    </footer>
  )
}
