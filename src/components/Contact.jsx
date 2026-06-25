import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../emailjsConfig.js'
import { IconMapPin, IconPhone, IconMail, IconClock, BrandMark } from './Icons.jsx'
import './Contact.css'

const INITIAL = { from_name: '', from_email: '', from_phone: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [values, setValues] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        values,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('sent')
      setValues(INITIAL)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="shell contact-inner">
        <div className="contact-info">
          <p className="eyebrow">Visit or Write to Us</p>
          <h2>Book a visit or send us your query.</h2>
          <p className="contact-lead">
            Walk-ins are welcome, but booking ahead means less waiting — especially for
            implant and aesthetic consultations.
          </p>

          <ul className="contact-list">
            <li>
              <IconMapPin width={20} height={20} />
              <div>
                <h4>Clinic</h4>
                <p>River Edge Complex, Kupwara Road, Opp. R&amp;B Division, Sopore</p>
              </div>
            </li>
            <li>
              <IconClock width={20} height={20} />
              <div>
                <h4>Timing</h4>
                <p>Monday to Sunday, 9:00 AM – 7:00 PM</p>
              </div>
            </li>
            <li>
              <IconPhone width={20} height={20} />
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+917006943071">+91 70069 43071</a>
                </p>
              </div>
            </li>
            <li>
              <IconMail width={20} height={20} />
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:drabidr8@gmail.com">drabidr8@gmail.com</a>
                </p>
              </div>
            </li>
          </ul>

          <div className="contact-brandcard">
            <BrandMark size={30} />
            <p>An initiative by PGI &amp; AIIMS Alumni</p>
          </div>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={onSubmit}>
          <div className="form-row">
            <label htmlFor="from_name">Full name</label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              placeholder="Your name"
              value={values.from_name}
              onChange={onChange}
            />
          </div>

          <div className="form-row two">
            <div>
              <label htmlFor="from_email">Email</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
                value={values.from_email}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="from_phone">Phone</label>
              <input
                id="from_phone"
                name="from_phone"
                type="tel"
                required
                placeholder="98XXXXXXXX"
                value={values.from_phone}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="message">What can we help with?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="E.g. I'd like a consultation for a dental implant"
              value={values.message}
              onChange={onChange}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Request'}
          </button>

          {status === 'sent' && (
            <p className="form-note success">Thank you — we've received your request and will call you back shortly.</p>
          )}
          {status === 'error' && (
            <p className="form-note error">
              Email isn't connected yet — add your EmailJS IDs in
              <code> src/emailjsConfig.js</code> (see README.md).
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
