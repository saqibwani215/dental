'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const NAV_LINKS = ["Home", "Services", "Technology", "Gallery", "Doctors", "Reviews", "FAQ", "Book Appointment", "Contact"];

const SERVICES = [
  { icon: "🦷", title: "Dental Implants", desc: "State-of-the-art titanium implants for a natural-looking, permanent smile restoration.", price: "Starting ₹25,000" },
  { icon: "✨", title: "Facial Aesthetics", desc: "Botox, fillers, and non-surgical treatments to enhance your natural beauty.", price: "Starting ₹8,000" },
  { icon: "🩺", title: "Facial Trauma", desc: "Expert management of facial injuries and reconstructive procedures.", price: "Consultation Based" },
  { icon: "💇", title: "Hair Transplant", desc: "Advanced FUE/FUT hair restoration techniques for natural, lasting results.", price: "Starting ₹40,000" },
  { icon: "🦷", title: "Root Canal", desc: "Painless, precise root canal treatments by our specialist endodontist.", price: "Starting ₹4,000" },
  { icon: "😁", title: "Braces & Orthodontics", desc: "Metal, ceramic & invisible aligners for a perfectly aligned, confident smile.", price: "Starting ₹18,000" },
  { icon: "🔬", title: "Gum Disease Treatment", desc: "Comprehensive periodontal therapy to protect your gum health long-term.", price: "Starting ₹2,500" },
  { icon: "⚡", title: "Oral Surgery", desc: "Expert oral & maxillofacial surgical procedures in a safe, comfortable environment.", price: "Starting ₹5,000" },
  { icon: "🪥", title: "Teeth Cleaning", desc: "Professional scaling and polishing for a spotless, healthy smile.", price: "Starting ₹800" },
  { icon: "🌟", title: "Teeth Whitening", desc: "Advanced laser whitening for a brighter, more confident smile in just one visit.", price: "Starting ₹3,500" },
  { icon: "👶", title: "Paediatric Dentistry", desc: "Gentle, child-friendly dental care in a calm, welcoming environment.", price: "Starting ₹500" },
  { icon: "🛡️", title: "Crowns & Bridges", desc: "Custom-crafted porcelain crowns and bridges for full smile restoration.", price: "Starting ₹6,000" },
];

const DOCTORS = [
  {
    name: "Dr. Abid Majeed Rather",
    role: "Implantologist & Facial Trauma Specialist",
    tag: "Oral & Maxillofacial Surgery",
    credentials: [
      "MDS – Oral & Maxillofacial Surgery, PGI Chandigarh",
      "Ex-Senior Resident, AIIMS",
      "Consultant Dental Surgery, Amandeep BR Medcity",
    ],
    exp: "12+ Years",
    initials: "AR", color: "#1a6fc4", bg: "#e6f1fb",
  },
  {
    name: "Dr. Bisma Aijaz Tak",
    role: "Gums Disease & Root Canal Specialist",
    tag: "Periodontics & Oral Implantology",
    credentials: [
      "MDS – Periodontics & Oral Implantology",
      "HOD Dental Surgery, Amandeep BR Medcity",
      "Govt. Dental College & Hospital, Srinagar",
    ],
    exp: "10+ Years",
    initials: "BT", color: "#0f6e56", bg: "#e1f5ee",
  },
  {
    name: "Dr. Irfan Bashir",
    role: "Braces Specialist",
    tag: "Orthodontics & Dentofacial Orthopedics",
    credentials: [
      "MDS – Orthodontics & Dentofacial Orthopedics",
      "Ex Resident, PGI Chandigarh",
      "Govt. Dental College & Hospital, Srinagar",
    ],
    exp: "8+ Years",
    initials: "IB", color: "#993c1d", bg: "#faece7",
  },
];

const INSTRUMENTS = [
  { title: "Digital X-Ray System", desc: "90% less radiation than conventional X-rays with instant high-resolution imaging.", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80", tag: "Diagnostics" },
  { title: "Surgical Implant Motor", desc: "Precision-controlled implant placement with torque feedback for optimal osseointegration.", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80", tag: "Implantology" },
  { title: "Ultrasonic Scaler", desc: "Removes tartar and biofilm 3× faster than manual scaling with minimal discomfort.", img: "https://images.unsplash.com/photo-1588776814546-1ffbb172a4ff?w=500&q=80", tag: "Hygiene" },
  { title: "Laser Whitening Unit", desc: "LED-activated bleaching gel delivers up to 8 shades brighter results in 45 minutes.", img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=500&q=80", tag: "Cosmetic" },
  { title: "Orthodontic Brackets", desc: "Self-ligating ceramic and metal brackets for shorter treatment times and fewer visits.", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80", tag: "Orthodontics" },
  { title: "Autoclave Sterilizer", desc: "Class-B sterilization for all instruments, exceeding WHO hygiene standards.", img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80", tag: "Safety" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", caption: "Modern Treatment Rooms" },
  { img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80", caption: "Implant Procedure" },
  { img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80", caption: "Orthodontic Treatment" },
  { img: "https://images.unsplash.com/photo-1588776814546-1ffbb172a4ff?w=600&q=80", caption: "Sterilization Unit" },
  { img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80", caption: "Digital Imaging Suite" },
  { img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80", caption: "Cosmetic Dentistry" },
];

const REVIEWS = [
  { name: "Tariq Mir", location: "Sopore, J&K", rating: 5, text: "Dr. Abid did my implant surgery and the result is phenomenal. No pain during the procedure and recovery was smooth. The clinic is spotlessly clean and the staff is very helpful.", service: "Dental Implant" },
  { name: "Rukhsar Bhat", location: "Baramulla, J&K", rating: 5, text: "I had my braces done by Dr. Irfan. He is extremely professional and explains every step clearly. The results after 14 months are beyond what I expected!", service: "Braces" },
  { name: "Faisal Lone", location: "Kupwara, J&K", rating: 5, text: "Got my root canal from Dr. Bisma. I was scared but she made it completely painless. Truly a specialist! The entire experience was calm and comfortable.", service: "Root Canal" },
  { name: "Aisha Khan", location: "Srinagar, J&K", rating: 5, text: "The facial aesthetics treatment here is world-class. I came from Srinagar specifically for this clinic after seeing the doctors' credentials. Worth every rupee.", service: "Facial Aesthetics" },
  { name: "Mushtaq Ahmad", location: "Handwara, J&K", rating: 5, text: "Hair transplant results are natural and exactly what I hoped for. The team guided me at every stage, pre and post procedure. Highly recommended!", service: "Hair Transplant" },
  { name: "Zara Mufti", location: "Sopore, J&K", rating: 5, text: "Brought my 7-year-old for his first dental visit. The staff was so gentle and kind with him. The clinic is very child-friendly. We'll only come here from now on.", service: "Paediatric Dentistry" },
];

const FAQS = [
  { q: "Are dental implants painful?", a: "No. The procedure is performed under local anaesthesia, so you feel no pain during surgery. Mild soreness for 2–3 days after is normal and easily managed with standard painkillers." },
  { q: "How long do implants last?", a: "With proper care, dental implants can last a lifetime. The titanium post fuses permanently with your jawbone. The crown on top typically lasts 15–20 years." },
  { q: "What age is suitable for braces?", a: "Braces are most effective between ages 10–14 when teeth are still developing, but adults can be treated successfully too. We offer metal, ceramic, and invisible aligners for all ages." },
  { q: "How many sessions for hair transplant?", a: "Most patients need just one session. The number of grafts depends on hair loss extent — our specialists will assess and give you a personalised plan during your free consultation." },
  { q: "Is Botox/facial filler treatment safe?", a: "Yes, when administered by trained medical professionals like our team. All facial aesthetic procedures are performed by doctors with formal aesthetic medicine training." },
  { q: "Do you offer EMI or payment plans?", a: "Yes. We work with several financing partners so you can spread the cost of treatment over 6–24 months. Speak to our front desk for options available to you." },
  { q: "How do I prepare for oral surgery?", a: "You'll receive a detailed pre-op guide at your consultation. Generally: avoid eating 6 hours before, arrange a responsible adult to drive you home, and bring any medication you currently take." },
  { q: "What are your sterilisation standards?", a: "We use Class-B autoclave sterilisation for all instruments, single-use disposables where required, and follow strict infection control protocols that exceed national dental council guidelines." },
];

const TIMES = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

export default function AIMSDentalWebsite() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", doctor: "", date: "", time: "", notes: "", urgency: "routine", insurance: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [instrFilter, setInstrFilter] = useState("All");

  const formRef = useRef<HTMLFormElement>(null);

  const scrollTo = (section: string) => {
    setActiveNav(section);
    const id = section.toLowerCase().replace(/ /g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      alert("Please fill in all required fields (*).");
      return;
    }

    setIsSending(true);

    // Replace these values with your actual parameters from emailjs.com dashboard
    const SERVICE_ID = "service_s82bfgl";
    const TEMPLATE_ID = "template_l8y1xp8";
    const PUBLIC_KEY = "ywCB_2Hxq86sogEak";

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        phone_number: form.phone,
        reply_to: form.email || "No email provided",
        chosen_service: form.service,
        preferred_doctor: form.doctor || "Any Available Specialist",
        appointment_date: form.date,
        appointment_time: form.time,
        classification_urgency: form.urgency,
        insurance_details: form.insurance || "None",
        patient_notes: form.notes || "None provided"
      },
      PUBLIC_KEY
    )
    .then((result) => {
        setSubmitted(true);
    })
    .catch((error) => {
        alert("Failed to deliver your request over EmailJS. Please try again or check developer configurations.");
        console.error("EmailJS Error details:", error);
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  const instrumentTags = ["All", ...Array.from(new Set(INSTRUMENTS.map(i => i.tag)))];
  const filteredInstr = instrFilter === "All" ? INSTRUMENTS : INSTRUMENTS.filter(i => i.tag === instrFilter);

  const tagColors: Record<string, string> = { Diagnostics: "#e6f1fb", Implantology: "#e1f5ee", Hygiene: "#fef3c7", Cosmetic: "#fce7f3", Orthodontics: "#faece7", Safety: "#ede9fe" };
  const tagText: Record<string, string> = { Diagnostics: "#1a6fc4", Implantology: "#0f6e56", Hygiene: "#b45309", Cosmetic: "#be185d", Orthodontics: "#993c1d", Safety: "#6d28d9" };

  return (
    <div className="bg-white text-[#1a1a2e] min-h-screen font-sans selection:bg-[#e6f1fb] selection:text-[#1a6fc4]">
      {/* ── STICKY HEADER NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8edf2] px-4 py-3 md:px-8 transitions-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a6fc4] to-[#0f6e56] flex items-center justify-center text-white font-bold text-lg shadow-sm">A</div>
            <div>
              <div className="font-heading font-bold text-lg md:text-xl text-[#1a1a2e] tracking-tight leading-none">AIMS</div>
              <div className="text-[9px] md:text-[10px] text-zinc-500 font-semibold tracking-wider uppercase mt-1">DENTAL & AESTHETICS CENTRE</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  link === "Book Appointment"
                    ? "bg-[#1a6fc4] text-white font-semibold shadow-sm hover:bg-[#155fa0] ml-2"
                    : activeNav === link
                    ? "bg-[#e6f1fb] text-[#1a6fc4]"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e8edf2] shadow-xl p-4 flex flex-col gap-1 transition-all animate-in fade-in slide-in-from-top-5 duration-200">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => { scrollTo(link); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  link === "Book Appointment"
                    ? "bg-[#1a6fc4] text-white text-center font-semibold mt-2 shadow-sm"
                    : activeNav === link
                    ? "bg-[#e6f1fb] text-[#1a6fc4]"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO COMPONENT ── */}
      <section id="home" className="relative bg-gradient-to-b from-[#f0f6ff] to-white pt-12 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1a6fc4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#e6f1fb] text-[#1a6fc4] uppercase tracking-wider">
              ✨ PGI & AIIMS Alumni Initiative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-[#1a1a2e] leading-[1.1]">
              Expert Care for Your <span className="text-[#1a6fc4] bg-gradient-to-r from-[#1a6fc4] to-[#2582e6] bg-clip-text text-transparent">Smile</span> & <span className="text-[#0f6e56] bg-gradient-to-r from-[#0f6e56] to-[#16a37a] bg-clip-text text-transparent">Confidence</span>
            </h1>
            <p className="text-zinc-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Comprehensive dental implants, facial aesthetics, trauma care & hair transplant services led by specialists trained at PGI Chandigarh & AIIMS.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button onClick={() => scrollTo("Book Appointment")} className="px-6 py-3.5 bg-[#1a6fc4] hover:bg-[#155fa0] text-white font-semibold rounded-xl shadow-lg shadow-blue-500/10 transition-all transform hover:-translate-y-0.5">
                Book Appointment
              </button>
              <button onClick={() => scrollTo("Doctors")} className="px-6 py-3.5 border-2 border-zinc-200 hover:border-zinc-400 text-zinc-700 font-semibold rounded-xl bg-white/80 hover:bg-white transition-all transform hover:-translate-y-0.5">
                Meet Our Doctors
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-zinc-100">
              {[["10+", "Years Experience"], ["5000+", "Happy Patients"], ["3", "Expert Specialists"], ["12+", "Services Offered"]].map(([num, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#1a6fc4]">{num}</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white">
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=85" alt="AIMS Dental Clinic Structure" className="w-100 object-cover h-[450px]" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-zinc-100 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Clinic Status</span>
              <span className="text-sm font-bold text-zinc-800">Open Mon – Sun</span>
              <span className="text-xs text-[#1a6fc4] font-semibold">9:00 AM – 7:00 PM</span>
            </div>
            <div className="absolute top-6 -right-6 bg-[#0f6e56] text-white rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <div>
                <div className="text-xs font-medium opacity-80 leading-none">Patient Rating</div>
                <div className="text-base font-bold mt-0.5">5.0 Perfect Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINICAL SERVICES GRID ── */}
      <section id="services" className="py-20 px-4 md:px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Our Medical Services</h2>
            <p className="text-zinc-500 text-sm md:text-base">From preventive treatments to advanced facial reconstructions with dynamic crystal clear starting values.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="group bg-white border border-[#e8edf2] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#1a6fc4] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center text-2xl transition-colors group-hover:bg-[#e6f1fb]">{s.icon}</div>
                  <h3 className="text-base font-bold text-[#1a1a2e] tracking-tight">{s.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-50 flex items-center justify-between">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-zinc-400">Treatment Cost</span>
                  <span className="px-3 py-1 bg-[#e6f1fb] text-[#1a6fc4] text-xs font-bold rounded-md">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANCED TECHNOLOGY COMPONENT ── */}
      <section id="technology" className="py-20 px-4 md:px-8 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">State-of-the-Art Systems</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Our Instruments & Technology</h2>
            <p className="text-zinc-500 text-sm md:text-base">We systematically update medical assets so procedures remain quick, pristine, safe, and entirely comfortable.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
              {instrumentTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setInstrFilter(tag)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                    instrFilter === tag
                      ? "bg-[#e6f1fb] border-[#1a6fc4] text-[#1a6fc4] font-semibold"
                      : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstr.map((item, i) => (
              <div key={i} className="bg-white border border-[#e8edf2] rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group">
                <div className="h-48 overflow-hidden relative bg-zinc-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span 
                    style={{ background: tagColors[item.tag] || "#e6f1fb", color: tagText[item.tag] || "#1a6fc4" }}
                    className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider"
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-[#1a1a2e] group-hover:text-[#1a6fc4] transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC GALLERY COMPONENT ── */}
      <section id="gallery" className="py-20 px-4 md:px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">Inside Our Space</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Clinic Operations Gallery</h2>
            <p className="text-zinc-500 text-sm md:text-base">A transparent look across our dental suites, sterilization systems, and medical diagnostics rooms.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((g, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden h-44 sm:h-60 shadow-sm bg-zinc-900">
                <img src={g.img} alt={g.caption} className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end opacity-100 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-tight">{g.caption}</span>
                  <span className="text-zinc-400 text-[10px] uppercase tracking-wider mt-0.5">Verified Asset</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI DOCTORS ROSTER ── */}
      <section id="doctors" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">Elite Staff Specialists</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Our Expert Doctors</h2>
            <p className="text-zinc-500 text-sm md:text-base">Formally trained at India's highest-tier diagnostic medical institutes with verified credentials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((d, i) => (
              <div key={i} className="bg-white border border-[#e8edf2] rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div style={{ backgroundColor: d.bg, color: d.color }} className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-inner">
                      {d.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1a1a2e]">{d.name}</h3>
                      <span style={{ color: d.color, backgroundColor: d.bg }} className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
                        {d.role}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-50 p-3 rounded-lg text-center">
                      <div style={{ color: d.color }} className="text-lg font-bold">{d.exp}</div>
                      <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mt-0.5">Clinical Term</div>
                    </div>
                    <div className="bg-zinc-50 p-3 rounded-lg text-center">
                      <div style={{ color: d.color }} className="text-lg font-bold">⭐ 5.0</div>
                      <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mt-0.5">User Score</div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 space-y-2">
                    <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">Academic Credentials</div>
                    {d.credentials.map((c, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                        <span style={{ color: d.color }} className="font-bold shrink-0">✓</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => scrollTo("Book Appointment")}
                  style={{ backgroundColor: d.bg, color: d.color, borderColor: d.color }}
                  className="w-full mt-6 py-2.5 border rounded-xl text-xs font-bold transition-transform hover:scale-[1.01]"
                >
                  Book Consultation with {d.name.split(" ")[1]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT REVIEWS SYSTEM ── */}
      <section id="reviews" className="py-20 px-4 md:px-8 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#7bb3e8] tracking-widest uppercase">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">What Our Patients Say</h2>
            <p className="text-zinc-400 text-sm">Over 5,000 happy patients across Jammu & Kashmir trust AIMS for their care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 space-y-4 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a6fc4] to-[#0f6e56] flex items-center justify-center font-bold text-white text-sm shrink-0">
                        {r.name[0]}
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{r.name}</div>
                        <div className="text-zinc-400 text-xs">{r.location}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-white/5 text-[#7bb3e8] px-2.5 py-1 rounded-md">{r.service}</span>
                  </div>
                  <div className="text-yellow-500 tracking-wider text-sm">{"★".repeat(r.rating)}</div>
                  <p className="text-zinc-300 text-xs leading-relaxed italic">"{r.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DYNAMIC REASON COMPONENT ── */}
      <section className="py-20 px-4 md:px-8 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">Unmatched Safety</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏅", title: "PGI & AIIMS Alumni", desc: "Doctors trained at India's top 2 medical institutions." },
              { icon: "💉", title: "Painless Procedures", desc: "Advanced anaesthesia protocols for zero-discomfort treatments." },
              { icon: "🧬", title: "Latest Technology", desc: "Digital X-rays, laser systems, and imported instruments." },
              { icon: "🕐", title: "Open 7 Days", desc: "Monday to Sunday, 9 AM to 7 PM — at your convenience." },
              { icon: "🛡️", title: "Sterile Environment", desc: "Class-B autoclave sterilization exceeding safety standards." },
              { icon: "💳", title: "Flexible Payment", desc: "EMI options available across 6–24 month plans." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e8edf2] rounded-xl p-6 text-center space-y-3 group hover:border-[#1a6fc4] transition-colors">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-sm font-bold text-[#1a1a2e] tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS COMPONENT ── */}
      <section id="faq" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white border border-[#e8edf2] rounded-xl overflow-hidden transition-all duration-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs md:text-sm text-[#1a1a2e] hover:bg-zinc-50"
                >
                  <span>{f.q}</span>
                  <span className={`text-lg text-[#1a6fc4] transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 pt-1 text-xs text-zinc-600 leading-relaxed border-t border-zinc-50 animate-in fade-in duration-200">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT SCHEDULING FORM WITH EMAILJS ── */}
      <section id="book-appointment" className="py-20 px-4 md:px-8 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1a6fc4] tracking-widest uppercase">Schedule Your Visit</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a2e]">Book an Appointment</h2>
            <p className="text-zinc-500 text-sm">Fill out the form details below to trigger an automated notification to our doctors.</p>
          </div>

          {submitted ? (
            <div className="bg-[#e1f5ee] border border-[#9fe1cb] text-[#0f6e56] rounded-2xl p-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <span className="text-5xl inline-block">✅</span>
              <h3 className="text-xl md:text-2xl font-heading font-bold">Appointment Requested Successfully!</h3>
              <p className="text-sm max-w-md mx-auto">
                Thank you, <strong>{form.name}</strong>. The details were forwarded via EmailJS. Our front desk will audit your case profile and confirm your booking on <strong>{form.date}</strong> at <strong>{form.time}</strong>.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", doctor: "", date: "", time: "", notes: "", urgency: "routine", insurance: "" }); }}
                className="px-5 py-2.5 bg-[#0f6e56] hover:bg-[#0b5441] text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white border border-[#e8edf2] rounded-2xl p-6 md:p-10 shadow-xl shadow-zinc-100/40 space-y-8">
              
              {/* Personal Data */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#1a6fc4] uppercase tracking-wider pb-1 border-b border-zinc-100">1. Personal Information</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Full Name *</label>
                    <input required type="text" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Phone Number *</label>
                    <input required type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Email Address</label>
                    <input type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Insurance / Health Card No. <span className="text-zinc-400 font-normal">(Optional)</span></label>
                    <input type="text" placeholder="Card ID if available" value={form.insurance} onChange={e => setForm({...form, insurance: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all" />
                  </div>
                </div>
              </div>

              {/* Appointment Specifics */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#1a6fc4] uppercase tracking-wider pb-1 border-b border-zinc-100">2. Appointment Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Select Service Room *</label>
                    <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all cursor-pointer">
                      <option value="">Choose a treatment suite…</option>
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Preferred Specialist</label>
                    <select value={form.doctor} onChange={e => setForm({...form, doctor: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all cursor-pointer">
                      <option value="">Any consultant available</option>
                      {DOCTORS.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Preferred Date *</label>
                    <input required type="date" value={form.date} min={new Date().toISOString().split("T")[0]} onChange={e => setForm({...form, date: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Visit Classification Type</label>
                    <select value={form.urgency} onChange={e => setForm({...form, urgency: e.target.value})} className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all cursor-pointer">
                      <option value="routine">Routine / Planned Procedure</option>
                      <option value="urgent">Urgent Condition (Pain / Inflammation)</option>
                      <option value="followup">Follow-up Diagnostic</option>
                      <option value="consultation">Free Consultation Session</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-xs font-semibold text-zinc-700">Preferred Time Slot *</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
                      {TIMES.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({...form, time: t})}
                          className={`py-2 text-center text-xs rounded-lg border transition-all font-medium ${
                            form.time === t
                              ? "bg-[#e6f1fb] border-[#1a6fc4] text-[#1a6fc4] font-semibold"
                              : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
                          }`}
                        >
                          {t.replace(" AM", "").replace(" PM", "")}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Case History Section */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#1a6fc4] uppercase tracking-wider pb-1 border-b border-zinc-100">3. Symptoms & Case History</div>
                <div>
                  <textarea 
                    placeholder="Describe your current medical symptoms or specific concerns..." 
                    value={form.notes} 
                    onChange={e => setForm({...form, notes: e.target.value})} 
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6fc4] transition-all min-h-[100px] font-sans"
                  />
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs leading-relaxed">
                  ⚠️ <strong>Emergency Warning Notice:</strong> For severe trauma or acute swelling requiring direct relief, contact the operational terminal line immediately.
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-[#1a6fc4] hover:bg-[#155fa0] text-white text-base font-bold rounded-xl shadow-lg shadow-blue-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Processing via EmailJS..." : "Confirm Appointment Request →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CLINICAL FOOTPRINT CONTACT SECTION ── */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#7bb3e8] tracking-widest uppercase">Find Our Campus</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Visit Our Main Clinic</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { icon: "📍", title: "Clinic Address Location", lines: ["River Edge Complex", "Kupwara Road", "Opp R&B Division, Sopore, J&K 193202"] },
                { icon: "🕐", title: "Operational Hours", lines: ["Monday to Sunday", "9:00 AM – 7:00 PM", "Open Throughout"] },
                { icon: "📞", title: "Corporate Channels", lines: ["Phone: +91 XXXXX XXXXX", "Email: contact@aims-dental.com"] },
                { icon: "🚗", title: "Parking & Access", lines: ["Free Patient Parking", "Accessible Ramp Entrance", "Main Highway Hub"] }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0 border border-white/10">{item.icon}</div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                    {item.lines.map((l, lineIdx) => <p key={lineIdx} className="text-zinc-400 text-xs leading-relaxed">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">Verified Operations Blueprint</h3>
            {[
              ["🏅", "PGI & AIIMS Alumni Certified", "Doctors trained directly at India's primary medical hubs."],
              ["🎯", "Specialized Aesthetic Medicine", "Formal systems for structural hair transplants and facial care."],
              ["🤝", "Patient-Centered Risk Auditing", "Every case undergoes a safe structured profile mapping."],
              ["🏥", "Imported Digital Systems Equipment", "Advanced machinery for safe diagnostics and laser work."],
              ["💳", "Spotted Transparent Costing Structure", "Spotted baseline values with flexible EMI options available."]
            ].map(([icon, title, desc], index) => (
              <div key={index} className="flex gap-4 py-3 border-b border-white/5 last:border-0">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-white">{title}</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMUTABLE FOOTER ── */}
      <footer className="bg-[#111322] border-t border-white/5 py-12 px-4 md:px-8 text-center text-zinc-500 space-y-6">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="font-heading font-bold text-lg text-white tracking-tight">AIMS Dental & Aesthetics Centre</div>
          <p className="text-xs max-w-xl mx-auto text-zinc-400 leading-relaxed">
            River Edge Complex, Kupwara Road, Opp R&B Division, Sopore · Jammu & Kashmir
          </p>
          <p className="text-[11px] text-zinc-600">
            © 2026 AIMS Dental Implant, Facial Aesthetic, Trauma & Hair Transplant Centre. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 text-[11px] font-medium text-zinc-400">
          {NAV_LINKS.map((link, idx) => (
            <React.Fragment key={link}>
              <button onClick={() => scrollTo(link)} className="hover:text-[#1a6fc4] transition-colors px-2 py-1">{link}</button>
              {idx < NAV_LINKS.length - 1 && <span className="text-zinc-800 pointer-events-none">•</span>}
            </React.Fragment>
          ))}
        </div>
      </footer>
    </div>
  );
}