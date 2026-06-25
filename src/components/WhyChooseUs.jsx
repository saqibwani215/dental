import { IconImplant, IconFace, IconTrauma, IconHair, IconClock, IconShield } from './Icons.jsx'
import './WhyChooseUs.css'

const REASONS = [
  {
    icon: IconImplant,
    title: 'Specialist-led implants',
    text: 'Oral & maxillofacial surgeons plan every implant case, not a single generalist doing it all.',
  },
  {
    icon: IconFace,
    title: 'Facial aesthetics, done carefully',
    text: 'Treatments are paired with dental and jaw assessment for results that look natural, not done.',
  },
  {
    icon: IconTrauma,
    title: 'Facial trauma & TMJ care',
    text: 'Emergency-trained surgeons for fractures, dislocations and jaw joint disorders.',
  },
  {
    icon: IconHair,
    title: 'Hair transplant, same building',
    text: 'No referral hand-offs — your aesthetic and dental care stay coordinated under one team.',
  },
  {
    icon: IconShield,
    title: 'Tertiary-centre training',
    text: 'Faculty trained or resident at PGI Chandigarh, AIIMS and Govt. Dental College Srinagar.',
  },
  {
    icon: IconClock,
    title: 'Open every day',
    text: 'Monday to Sunday, 9:00 AM – 7:00 PM, so urgent dental pain doesn\u2019t have to wait.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section surface why">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Why Choose AIMS</p>
          <h2>Tertiary-level training, brought to your neighbourhood.</h2>
          <p>
            Six reasons families across Sopore and Kupwara trust AIMS with implants,
            aesthetics, trauma and hair restoration.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map((r) => {
            const Icon = r.icon
            return (
              <div className="why-card" key={r.title}>
                <div className="why-card-icon">
                  <Icon width={26} height={26} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
