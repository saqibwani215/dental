import './Doctors.css'

const DOCTORS = [
  {
    // Real photo: professional male doctor/surgeon
    photo: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&facepad=3',
    initials: 'AR',
    name: 'Dr. Abid Majeed Rather',
    role: 'Consultant, Dental Surgery',
    tag: 'Implantologist · Facial Trauma · TMJ',
    creds: [
      'MDS — Oral & Maxillofacial Surgery, PGI Chandigarh',
      'Ex-Senior Resident, AIIMS',
    ],
  },
  {
    // Real photo: professional female doctor
    photo: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&facepad=3',
    initials: 'BT',
    name: 'Dr. Bisma Aijaz Tak',
    role: 'HOD, Dental Surgery',
    tag: 'Gum Disease · Root Canal',
    creds: [
      'MDS — Periodontics & Oral Implantology',
      'Govt. Dental College & Hospital, Srinagar',
    ],
  },
  {
    // Real photo: professional male doctor smiling
    photo: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&facepad=3',
    initials: 'IB',
    name: 'Dr. Irfan Bashir',
    role: 'Orthodontist',
    tag: 'Braces & Aligners',
    creds: [
      'MDS — Orthodontics & Dentofacial Orthopedics',
      'Ex-Resident, PGI Chandigarh',
    ],
  },
]

export default function Doctors() {
  return (
    <section id="doctors" className="section doctors">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Our Doctors</p>
          <h2>Meet the specialists behind every treatment plan.</h2>
          <p>
            Each case at AIMS is led by a named specialist, trained at PGI Chandigarh, AIIMS
            or Govt. Dental College &amp; Hospital Srinagar.
          </p>
        </div>

        <div className="doctors-grid">
          {DOCTORS.map((d) => (
            <article className="doctor-card" key={d.name}>
              <div className="doctor-avatar">
                <img src={d.photo} alt={`Portrait of ${d.name}`} loading="lazy" />
              </div>
              <span className="doctor-tag">{d.tag}</span>
              <h3>{d.name}</h3>
              <p className="doctor-role">{d.role}</p>
              <ul className="doctor-creds">
                {d.creds.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}