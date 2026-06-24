'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [instrFilter, setInstrFilter] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", doctor: "", date: "", time: "", notes: "", urgency: "routine" });
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (section: string) => {
    setActiveNav(section);
    setMobileMenuOpen(false);
    const id = section.toLowerCase().replace(/ /g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const SERVICES = [
    { icon: "🦷", title: "Dental Implants", desc: "State-of-the-art titanium implants", price: "₹25,000+" },
    { icon: "✨", title: "Facial Aesthetics", desc: "Botox, fillers & treatments", price: "₹8,000+" },
    { icon: "🩺", title: "Facial Trauma", desc: "Expert reconstructive care", price: "Consultation" },
    { icon: "💇", title: "Hair Transplant", desc: "FUE/FUT techniques", price: "₹40,000+" },
    { icon: "🔍", title: "Root Canal", desc: "Painless endodontic therapy", price: "₹4,000+" },
    { icon: "😁", title: "Braces", desc: "Metal, ceramic & aligners", price: "₹18,000+" },
    { icon: "🧬", title: "Gum Disease", desc: "Periodontal treatment", price: "₹2,500+" },
    { icon: "⚡", title: "Oral Surgery", desc: "Advanced surgical procedures", price: "₹5,000+" },
  ];

  const INSTRUMENTS = [
    { title: "Digital X-Ray", desc: "90% less radiation with instant imaging", tag: "Diagnostics", icon: "📸" },
    { title: "Implant Motor", desc: "Precision implant placement", tag: "Implants", icon: "🔧" },
    { title: "Ultrasonic Scaler", desc: "Advanced tartar removal", tag: "Hygiene", icon: "🌊" },
    { title: "Laser Whitening", desc: "8 shades brighter in 45 min", tag: "Cosmetic", icon: "✨" },
    { title: "3D Scanner", desc: "Accurate dental imaging", tag: "Technology", icon: "📱" },
    { title: "Autoclave", desc: "Class-B sterilization", tag: "Safety", icon: "🔒" },
  ];

  const DOCTORS = [
    { name: "Dr. Abid Majeed Rather", role: "Implantologist & Trauma Specialist", exp: "12+ Years", initials: "AMR", cred: "MDS - PGI Chandigarh" },
    { name: "Dr. Bisma Aijaz Tak", role: "Periodontics & Implantology", exp: "10+ Years", initials: "BAT", cred: "MDS - Periodontics" },
    { name: "Dr. Irfan Bashir", role: "Orthodontist", exp: "8+ Years", initials: "IB", cred: "MDS - Orthodontics" },
  ];

  const GALLERY = [
    { img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", category: "Clinic", title: "Modern Treatment Room" },
    { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80", category: "Procedure", title: "Implant Surgery" },
    { img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80", category: "Treatment", title: "Orthodontics" },
    { img: "https://images.unsplash.com/photo-1588776814546-1ffbb172a4ff?w=600&q=80", category: "Equipment", title: "Sterilization" },
    { img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80", category: "Clinic", title: "Digital Suite" },
    { img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80", category: "Procedure", title: "Cosmetic Work" },
  ];

  const REVIEWS = [
    { name: "Tariq Mir", text: "Excellent implant surgery. No pain and recovery was smooth. Highly recommended!", rating: 5 },
    { name: "Rukhsar Bhat", text: "Dr. Irfan's braces treatment was perfect. Results exceeded my expectations!", rating: 5 },
    { name: "Faisal Lone", text: "Root canal was completely painless. Professional team throughout!", rating: 5 },
    { name: "Aisha Khan", text: "Facial aesthetics treatment is world-class. Very satisfied!", rating: 5 },
    { name: "Mushtaq Ahmad", text: "Hair transplant results are natural and amazing. Worth it!", rating: 5 },
    { name: "Zara Mufti", text: "My son loved the visit. Staff is so kind and gentle!", rating: 5 },
  ];

  const FAQS = [
    { q: "Are dental implants painful?", a: "No. The procedure is performed under local anesthesia. Mild soreness for 2-3 days is normal." },
    { q: "How long do implants last?", a: "With proper care, dental implants can last a lifetime. The crown typically lasts 15-20 years." },
    { q: "What age for braces?", a: "Most effective between 10-14, but adults can be treated successfully too." },
    { q: "How many hair transplant sessions?", a: "Most patients need just one session. We'll assess and create a personalized plan." },
    { q: "Is facial filler treatment safe?", a: "Yes, when administered by trained medical professionals like our qualified team." },
    { q: "Do you offer payment plans?", a: "Yes. We work with financing partners for 6-24 month EMI options." },
    { q: "How to prepare for surgery?", a: "Avoid eating 6 hours before. Arrange transport home. Bring current medications." },
    { q: "What sterilization standards?", a: "We use Class-B autoclave sterilization exceeding national dental guidelines." },
  ];

  const filteredGallery = galleryFilter === "All" ? GALLERY : GALLERY.filter(g => g.category === galleryFilter);
  const filteredInstr = instrFilter === "All" ? INSTRUMENTS : INSTRUMENTS.filter(i => i.tag === instrFilter);
  const instrTags = ["All", ...new Set(INSTRUMENTS.map(i => i.tag))];

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: "#fff", color: "#1a1a2e" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid #e8edf2", padding: "0 1rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 60, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#1a6fc4,#0f6e56)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18 }}>A</div>
            {!isMobile && (
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: "#1a1a2e", lineHeight: 1 }}>AIMS</div>
                <div style={{ fontSize: "clamp(7px, 1vw, 9px)", color: "#666", letterSpacing: "0.05em", marginTop: 2 }}>DENTAL & AESTHETICS CENTRE</div>
              </div>
            )}
          </div>
          {isMobile && (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#1a1a2e", padding: "8px" }} aria-label="Toggle menu">☰</button>
          )}
          <div style={{ display: isMobile && !mobileMenuOpen ? "none" : "flex", flexDirection: isMobile ? "column" : "row", gap: 2, width: isMobile ? "100%" : "auto", marginTop: mobileMenuOpen ? "1rem" : 0, justifyContent: "flex-end" }}>
            {["Home", "Services", "Technology", "Gallery", "Doctors", "Reviews", "FAQ", "Book Appointment", "Contact"].map(link => (
              <button key={link} onClick={() => scrollTo(link)} style={{ padding: isMobile ? "12px 0" : "8px 12px", border: "none", borderRadius: isMobile ? 0 : 7, cursor: "pointer", fontSize: "clamp(11px, 2vw, 12.5px)", fontWeight: link === "Book Appointment" ? 600 : 400, background: link === "Book Appointment" ? "#1a6fc4" : activeNav === link ? "#e6f1fb" : "transparent", color: link === "Book Appointment" ? "#fff" : activeNav === link ? "#1a6fc4" : "#444", transition: "all 0.2s", width: isMobile ? "100%" : "auto", textAlign: isMobile ? "left" : "center" }}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", display: "flex", alignItems: "center", background: "#f0f6ff", padding: isMobile ? "2rem 1rem" : "4rem 2rem", minHeight: isMobile ? "auto" : "80vh" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "3rem", alignItems: "center", width: "100%" }}>
          <div>
            <div style={{ display: "inline-block", background: "#e6f1fb", color: "#1a6fc4", padding: "6px 16px", borderRadius: 20, fontSize: "clamp(11px, 2vw, 13px)", fontWeight: 600, marginBottom: "1.5rem" }}>PGI & AIIMS ALUMNI INITIATIVE</div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, color: "#1a1a2e", margin: "0 0 1.5rem" }}>
              Expert Care for Your <span style={{ color: "#1a6fc4" }}>Smile</span> & <span style={{ color: "#0f6e56" }}>Confidence</span>
            </h1>
            <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "#555", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 480 }}>
              Comprehensive dental implants, facial aesthetics, trauma care & hair transplant services led by PGI Chandigarh & AIIMS specialists.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Book Appointment")} style={{ padding: isMobile ? "12px 24px" : "14px 28px", background: "#1a6fc4", color: "#fff", border: "none", borderRadius: 10, fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 600, cursor: "pointer" }}>Book Appointment</button>
              <button onClick={() => scrollTo("Doctors")} style={{ padding: isMobile ? "12px 24px" : "14px 28px", background: "transparent", color: "#1a6fc4", border: "2px solid #1a6fc4", borderRadius: 10, fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 600, cursor: "pointer" }}>Meet Doctors</button>
            </div>
            <div style={{ display: isMobile ? "grid" : "flex", gridTemplateColumns: isMobile ? "1fr 1fr" : undefined, gap: isMobile ? "1rem" : "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {[["10+","Years Experience"],["5000+","Happy Patients"],["3","Expert Doctors"],["12+","Services"]].map(([num,label]) => (
                <div key={label}>
                  <div style={{ fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 700, color: "#1a6fc4" }}>{num}</div>
                  <div style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "#777" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          {!isMobile && (
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 30px 80px rgba(26,111,196,0.2)" }}>
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=85" alt="Modern Clinic" style={{ width: "100%", height: 460, objectFit: "cover", display: "block" }} />
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#1a6fc4", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>What We Offer</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 1rem" }}>Our Services</h2>
            <p style={{ color: "#666", fontSize: "clamp(14px, 2vw, 16px)", maxWidth: 520, margin: "0 auto" }}>From preventive care to advanced cosmetic procedures with transparent pricing.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(auto-fit, minmax(150px, 1fr))" : "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {SERVICES.map(service => (
              <div key={service.title} style={{ background: "#f8fafd", border: "1.5px solid #e8edf2", borderRadius: 16, padding: "1.5rem", transition: "all 0.3s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.borderColor = "#1a6fc4"} onMouseLeave={e => e.currentTarget.style.borderColor = "#e8edf2"}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{service.icon}</div>
                <h3 style={{ fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>{service.title}</h3>
                <p style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#666", margin: "0 0 8px", lineHeight: 1.5 }}>{service.desc}</p>
                <div style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 600, color: "#1a6fc4" }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#f8fafd" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#1a6fc4", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>State-of-the-Art Equipment</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 1rem" }}>Our Technology</h2>
            <p style={{ color: "#666", fontSize: "clamp(14px, 2vw, 16px)", maxWidth: 540, margin: "0 auto 2rem" }}>Latest dental technology for safer, faster, and more comfortable procedures.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {instrTags.map(tag => (
                <button key={tag} onClick={() => setInstrFilter(tag)} style={{ padding: "7px 14px", border: `1.5px solid ${instrFilter === tag ? "#1a6fc4" : "#e0e7ef"}`, borderRadius: 20, fontSize: "clamp(12px, 2vw, 13px)", fontWeight: instrFilter === tag ? 600 : 400, background: instrFilter === tag ? "#e6f1fb" : "#fff", color: instrFilter === tag ? "#1a6fc4" : "#555", cursor: "pointer", transition: "all 0.2s" }}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {filteredInstr.map(instr => (
              <div key={instr.title} style={{ background: "#fff", border: "1px solid #e8edf2", borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{instr.icon}</div>
                <div style={{ display: "inline-block", background: "#e6f1fb", color: "#1a6fc4", padding: "4px 12px", borderRadius: 12, fontSize: "11px", fontWeight: 600, marginBottom: 8 }}>{instr.tag}</div>
                <h3 style={{ fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>{instr.title}</h3>
                <p style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#666", margin: 0, lineHeight: 1.6 }}>{instr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#1a6fc4", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>Inside AIMS</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 1rem" }}>Clinic Gallery</h2>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {["All", "Clinic", "Procedure", "Equipment", "Treatment"].map(cat => (
                <button key={cat} onClick={() => setGalleryFilter(cat)} style={{ padding: "6px 14px", border: `1.5px solid ${galleryFilter === cat ? "#1a6fc4" : "#e0e7ef"}`, borderRadius: 20, fontSize: "clamp(12px, 2vw, 13px)", fontWeight: galleryFilter === cat ? 600 : 400, background: galleryFilter === cat ? "#e6f1fb" : "#fff", color: galleryFilter === cat ? "#1a6fc4" : "#555", cursor: "pointer", transition: "all 0.2s" }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: "1rem" }}>
            {filteredGallery.map((item, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: "hidden", position: "relative", height: isMobile ? "180px" : "240px", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "1rem", color: "#fff" }}>
                  <div style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 600 }}>{item.title}</div>
                  <div style={{ fontSize: "clamp(10px, 2vw, 12px)", opacity: 0.8 }}>{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#f8fafd" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#1a6fc4", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>Our Team</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 1rem" }}>Expert Doctors</h2>
            <p style={{ color: "#666", fontSize: "clamp(14px, 2vw, 16px)", maxWidth: 480, margin: "0 auto" }}>Trained at India's premier medical institutions with world-class expertise.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {DOCTORS.map(doc => (
              <div key={doc.name} style={{ background: "#fff", border: "1.5px solid #e8edf2", borderRadius: 16, padding: "2rem", textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #1a6fc4, #0f6e56)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 28, margin: "0 auto 1rem" }}>{doc.initials}</div>
                <h3 style={{ fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{doc.name}</h3>
                <div style={{ fontSize: "clamp(12px, 2vw, 13px)", fontWeight: 600, color: "#1a6fc4", marginBottom: 8 }}>{doc.role}</div>
                <div style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#666", marginBottom: 12 }}>{doc.cred}</div>
                <div style={{ fontSize: "clamp(12px, 2vw, 13px)", fontWeight: 600, color: "#0f6e56" }}>{doc.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#7bb3e8", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>Patient Stories</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff", margin: "0 0 1rem" }}>What Our Patients Say</h2>
            <p style={{ color: "#aab4c4", fontSize: "clamp(14px, 2vw, 16px)", maxWidth: 460, margin: "0 auto" }}>Over 5,000 happy patients trust AIMS for their dental care.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {REVIEWS.map(review => (
              <div key={review.name} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: i < review.rating ? "#fbbf24" : "#4b5563", fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#e5e7eb", lineHeight: 1.6, margin: "0 0 1rem", fontStyle: "italic" }}>"{review.text}"</p>
                <div style={{ fontSize: "clamp(12px, 2vw, 13px)", fontWeight: 600, color: "#fff" }}>{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#f8fafd" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#1a6fc4", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>Questions?</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 1rem" }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "#fff", border: `1.5px solid ${openFaq === i ? "#1a6fc4" : "#e8edf2"}`, borderRadius: 14, overflow: "hidden", transition: "border 0.2s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: isMobile ? "1rem" : "1.1rem 1.5rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: "clamp(14px, 2vw, 15px)", fontWeight: 600, color: "#1a1a2e", textAlign: "left" }}>{faq.q}</span>
                  <span style={{ fontSize: 20, color: "#1a6fc4", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: isMobile ? "0 1rem 1rem" : "0 1.5rem 1.25rem", fontSize: "clamp(13px, 2vw, 14px)", color: "#555", lineHeight: 1.75, borderTop: "1px solid #e8edf2" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book-appointment" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: "#1a6fc4", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>Schedule a Visit</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#1a1a2e", margin: "0 0 1rem" }}>Book an Appointment</h2>
            <p style={{ color: "#666", fontSize: "clamp(14px, 2vw, 16px)" }}>Fill in your details and we'll confirm within 24 hours.</p>
          </div>
          {!submitted ? (
            <div style={{ background: "#f8fafd", border: "1.5px solid #e8edf2", borderRadius: 20, padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <input placeholder="Full Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit" }} />
                <input placeholder="Phone Number *" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{ padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit" }} />
                <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{ padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit" }}>
                  <option value="">Select Service *</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <select value={form.doctor} onChange={e => setForm({...form, doctor: e.target.value})} style={{ padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit" }}>
                  <option value="">Prefer Doctor</option>
                  {DOCTORS.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                </select>
                <input placeholder="Preferred Date *" type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} style={{ padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#444", marginBottom: 8 }}>Preferred Time *</label>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(auto-fit, minmax(80px, 1fr))", gap: 8 }}>
                  {["09:00", "10:00", "11:00", "12:00", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"].map(t => (
                    <button key={t} onClick={() => setForm({...form, time: t})} style={{ padding: "8px", border: `1.5px solid ${form.time === t ? "#1a6fc4" : "#e0e7ef"}`, borderRadius: 8, fontSize: "12px", fontWeight: form.time === t ? 600 : 400, background: form.time === t ? "#e6f1fb" : "#fff", color: form.time === t ? "#1a6fc4" : "#555", cursor: "pointer" }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <textarea placeholder="Additional Notes" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} style={{ width: "100%", padding: "12px 16px", border: "1px solid #e0e7ef", borderRadius: 10, fontSize: "14px", fontFamily: "inherit", minHeight: 100, marginBottom: "1rem" }} />
              <button onClick={() => { if (form.name && form.phone && form.service && form.date && form.time) setSubmitted(true); else alert("Please fill required fields"); }} style={{ width: "100%", padding: "14px", background: "#1a6fc4", color: "#fff", border: "none", borderRadius: 10, fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
                Confirm Appointment
              </button>
            </div>
          ) : (
            <div style={{ background: "#e1f5ee", border: "1.5px solid #4db8a0", borderRadius: 20, padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Appointment Confirmed!</h3>
              <p style={{ color: "#555", margin: "0 0 16px" }}>We'll contact you within 24 hours to confirm your appointment.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", doctor: "", date: "", time: "", notes: "", urgency: "routine" }); }} style={{ padding: "10px 20px", background: "#1a6fc4", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600 }}>
                Book Another
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: isMobile ? "2rem 1rem" : "5rem 2rem", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "3rem", alignItems: "start" }}>
          <div>
            <div style={{ color: "#7bb3e8", fontWeight: 600, fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.1em", marginBottom: 12, textTransform: "uppercase" }}>Find Us</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px, 5vw, 34px)", fontWeight: 700, color: "#fff", margin: "0 0 1.5rem" }}>Visit Our Clinic</h2>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#aab4c4", fontWeight: 600, marginBottom: 4 }}>Location</div>
              <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#e5e7eb", margin: "0 0 1rem", lineHeight: 1.6 }}>River Edge Complex, Kupwara Road, Opp R&B Division, Sopore, J&K 193202</p>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#aab4c4", fontWeight: 600, marginBottom: 4 }}>Hours</div>
              <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#e5e7eb", margin: 0 }}>Monday - Sunday: 9:00 AM - 7:00 PM</p>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#aab4c4", fontWeight: 600, marginBottom: 4 }}>Contact</div>
              <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#e5e7eb", margin: "0 0 4px" }}>Phone: +91 XXXXX XXXXX</p>
              <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#e5e7eb", margin: 0 }}>Email: contact@aims-dental.com</p>
            </div>
          </div>
          <div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "2rem" }}>
              <h3 style={{ fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 700, color: "#fff", margin: "0 0 1rem" }}>Why Choose AIMS?</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {["PGI & AIIMS trained specialists", "Latest technology & equipment", "Transparent pricing with EMI options", "20+ years combined experience", "5,000+ satisfied patients", "Infection control excellence"].map((item, i) => (
                  <li key={i} style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "#e5e7eb", marginBottom: "8px", paddingLeft: 24, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#1a6fc4", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111322", padding: isMobile ? "2rem 1rem" : "3rem 2rem", textAlign: "center", borderTop: "1px solid #1a1a2e" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "clamp(16px, 4vw, 20px)", color: "#fff", marginBottom: 12 }}>AIMS Dental & Aesthetics Centre</div>
          <p style={{ color: "#aaa", fontSize: "clamp(12px, 2vw, 13px)", margin: "0 0 12px" }}>River Edge Complex, Sopore, Jammu & Kashmir · PGI & AIIMS Alumni</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem", fontSize: "clamp(11px, 2vw, 12px)" }}>
            {["Services", "Doctors", "Gallery", "FAQ", "Contact"].map(link => (
              <button key={link} onClick={() => scrollTo(link)} style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", padding: "4px 8px", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#1a6fc4"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}>
                {link}
              </button>
            ))}
          </div>
          <p style={{ color: "#666", fontSize: "clamp(11px, 2vw, 12px)", margin: 0 }}>© 2026 AIMS Dental Implant, Facial Aesthetic, Trauma & Hair Transplant Centre. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
