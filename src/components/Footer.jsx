import { BrandMark } from './Icons.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <BrandMark size={30} color="var(--white)" accent="var(--gold)" />
          <div>
            <strong>AIMS</strong>
            <span>Dental Implant, Facial Aesthetic, Trauma &amp; Hair Transplant Centre</span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#doctors">Doctors</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} AIMS Dental &amp; Facial Aesthetic Centre, Sopore. An
          initiative by PGI &amp; AIIMS alumni.
        </p>
      </div>
    </footer>
  )
}
