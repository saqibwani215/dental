import dentalImplantsImg from '../assets/images/dental-implants.jpg'
import orthodonticsImg from '../assets/images/orthodontics.jpg'
import facialAestheticsImg from '../assets/images/facial-aesthetics.jpg'
import hairTransplantImg from '../assets/images/hair-transplant.jpg'
import facialTraumaImg from '../assets/images/facial-trauma.jpg'
import patientConsultationsImg from '../assets/images/patient-consultations.jpg'

export const CATEGORY_LABELS = {
  diagnostics: 'Diagnostics',
  restorative: 'Restorative',
  surgical: 'Surgical',
  preventive: 'Preventive',
  cosmetic: 'Cosmetic',
  aesthetics: 'Aesthetics',
}

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop`

export const SERVICES = [
  {
    slug: 'dental-xray',
    name: 'Dental X-Ray',
    category: 'diagnostics',
    description:
      "Digital X-rays give our dentists a clear, low-radiation view of what's happening beneath the gumline — from hidden decay to bone density — so every treatment plan starts with an accurate diagnosis.",
    longDescription:
      "At AIMS, our digital radiography suite delivers diagnostic-grade images at a fraction of the radiation dose of conventional film X-rays. Whether we're mapping bone for an implant, locating hidden decay between teeth, or assessing a wisdom tooth's position, the images are available on-screen in seconds — allowing our specialists to explain findings to you in real time. Digital sensors also eliminate the chemical waste of traditional processing, making the process better for you and the environment.",
    highlights: [
      'Low-dose digital imaging',
      'Instant on-screen results',
      'Used to plan implants, root canals & extractions',
      'Painless & quick — done in minutes',
    ],
    images: [patientConsultationsImg, px(4269681), px(4971508)],
    process: [
      { title: 'Positioning', desc: 'A small sensor is placed inside your mouth and you bite gently on a positioner — the whole setup takes under a minute.' },
      { title: 'Exposure', desc: 'The X-ray unit emits a brief, low-dose pulse. You stay still for about half a second.' },
      { title: 'Instant image', desc: 'The digital image appears on our monitor in seconds. Your dentist walks you through exactly what it shows.' },
      { title: 'Treatment planning', desc: 'Findings are used to build your personalised treatment plan right away.' },
    ],
  },
  {
    slug: 'root-canal',
    name: 'Root Canal Treatment',
    sub: 'Single, Multiple & Retreatment',
    category: 'restorative',
    description:
      'When the soft pulp inside a tooth becomes infected or inflamed, root canal therapy removes the damaged tissue and seals the tooth — relieving pain and saving it from extraction.',
    longDescription:
      "Root canal treatment has an undeserved reputation for being painful — in reality, it's the infection that hurts, and the treatment provides rapid relief. At AIMS, we use rotary nickel-titanium files and apex locators to clean and shape canals with precision. Most single-rooted teeth can be completed in one appointment. Microscope-assisted retreatment is available for cases where a previous root canal has failed, giving even complex teeth a second chance.",
    highlights: [
      'Single-visit options for most cases',
      'Microscope-assisted precision',
      'Retreatment for previously treated teeth',
      'Pain relief from the very first sitting',
    ],
    images: [px(4269700), px(4971507), px(6809656)],
    process: [
      { title: 'Diagnosis & X-ray', desc: 'We confirm the diagnosis with a digital X-ray and discuss the treatment plan with you.' },
      { title: 'Anaesthesia', desc: 'Local anaesthetic is administered so you feel only gentle pressure, not pain.' },
      { title: 'Cleaning & shaping', desc: 'The infected pulp is removed and the canal system is cleaned, shaped and disinfected.' },
      { title: 'Sealing & restoration', desc: 'Canals are sealed with biocompatible material and the tooth is restored with a crown or filling.' },
    ],
  },
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    category: 'restorative',
    description:
      'Titanium implants replace missing teeth at the root, giving you a stable foundation for crowns, bridges or dentures that look and feel like your own teeth.',
    longDescription:
      "AIMS is the leading implant centre in J&K, placing Neobiotech and Nobel Biocare implants under strict sterile protocols. Our implantologists are PGI Chandigarh and AIIMS trained — among the few in the region with specialist-level competency in guided implant surgery. We offer single-tooth replacements, implant-supported bridges, and All-on-4 or All-on-6 solutions for full-arch reconstruction. A free consultation includes CBCT bone assessment and a custom treatment timeline.",
    highlights: [
      'Single tooth to full-arch solutions',
      'PGI & AIIMS trained implantologists',
      'Built to last for decades with proper care',
      'Free initial implant consultation',
    ],
    images: [dentalImplantsImg, px(6502305), px(4687905), px(6193205)],
    process: [
      { title: 'Consultation & CBCT scan', desc: 'We assess your bone volume, gum health and overall suitability for implants.' },
      { title: 'Implant placement', desc: 'A titanium post is placed under local anaesthesia in a single surgical appointment.' },
      { title: 'Osseointegration', desc: 'Over 6–12 weeks the implant fuses with your bone, creating a permanent anchor.' },
      { title: 'Crown fitting', desc: 'A custom-shaded crown, bridge or prosthesis is fitted to the implant for a natural result.' },
    ],
  },
  {
    slug: 'extractions',
    name: 'Extractions',
    category: 'surgical',
    description:
      'When a tooth is too damaged, decayed or crowded to save, we remove it gently and safely — with replacement options discussed upfront so your bite stays complete.',
    longDescription:
      "Not every tooth can or should be saved — and when extraction is the right call, doing it properly makes all the difference to recovery and future options. Our surgical team uses micro-surgical elevation and atraumatic extraction techniques designed to preserve the surrounding bone for a potential implant later. We always discuss replacement options — implants, bridges or partial dentures — before the extraction so you leave with a clear plan for your bite.",
    highlights: [
      'Local anaesthesia for comfort',
      'Sterile, surgical-grade protocols',
      'Aftercare guidance included',
      'Replacement options discussed beforehand',
    ],
    images: [px(4270361), px(6193196), px(4971501)],
    process: [
      { title: 'Assessment', desc: 'X-rays confirm the tooth\'s position and root shape before any procedure.' },
      { title: 'Anaesthesia', desc: 'Local anaesthetic ensures you feel only gentle pressure during the procedure.' },
      { title: 'Atraumatic removal', desc: 'Specialist instruments loosen and remove the tooth while preserving surrounding bone.' },
      { title: 'Aftercare plan', desc: 'You receive written aftercare instructions and a follow-up appointment is booked.' },
    ],
  },
  {
    slug: 'wisdom-tooth-removal',
    name: 'Wisdom Tooth Removal',
    category: 'surgical',
    description:
      'Impacted or painful wisdom teeth are surgically removed under local or sedation anaesthesia, preventing crowding, infection and damage to neighbouring teeth.',
    longDescription:
      "Impacted wisdom teeth — ones that can't fully erupt — are among the most common causes of dental pain and infection in young adults. At AIMS, our maxillofacial surgeons handle even fully bony impactions with precision. A pre-operative OPG or CBCT scan maps the exact position of the tooth relative to the inferior alveolar nerve, minimising risk. Sedation is available for anxious patients, and our fast-track recovery protocol gets most patients back to normal within 3–5 days.",
    highlights: [
      'Impacted & erupted cases',
      'Sedation options available',
      'Fast-track recovery protocol',
      'Reduces risk of future crowding & infection',
    ],
    images: [px(4270084), px(6193195), px(4270361)],
    process: [
      { title: 'OPG / CBCT scan', desc: 'We map the wisdom tooth\'s exact position and proximity to nerves.' },
      { title: 'Anaesthesia / sedation', desc: 'Local anaesthesia or conscious sedation is administered per your preference.' },
      { title: 'Surgical removal', desc: 'The tooth is divided and removed atraumatically; the site is sutured.' },
      { title: 'Recovery guidance', desc: 'Detailed post-op instructions are provided; sutures are removed at follow-up.' },
    ],
  },
  {
    slug: 'scaling-polishing',
    name: 'Scaling & Polishing',
    category: 'preventive',
    description:
      'A thorough professional clean removes plaque and tartar buildup above and below the gumline, leaving teeth smoother, brighter and less prone to gum disease.',
    longDescription:
      "Even the most diligent brushing and flossing can't remove all plaque — especially below the gumline, where it hardens into calculus. Our ultrasonic scalers break down deposits efficiently, and polishing removes surface stains from tea, coffee and tobacco. We also include a personalised oral hygiene instruction session, because the best cleaning is the one you do every day at home. Recommended every 6 months as part of your prevention programme.",
    highlights: [
      'Removes stains & tartar',
      'Improves gum health',
      'Recommended every 6 months',
      'Gentle on enamel, safe for sensitive teeth',
    ],
    images: [px(4269698), px(6627313), px(4269696)],
    process: [
      { title: 'Gum assessment', desc: 'We measure pocket depths and record your gum health baseline.' },
      { title: 'Ultrasonic scaling', desc: 'Calculus is removed above and below the gumline using a fine ultrasonic tip.' },
      { title: 'Polishing', desc: 'A gentle paste removes surface stains and leaves teeth smooth.' },
      { title: 'OHI session', desc: 'Your hygienist demonstrates the brushing and flossing technique best suited to your anatomy.' },
    ],
  },
  {
    slug: 'crown-bridges',
    name: 'Crown & Bridges',
    category: 'restorative',
    description:
      'Crowns cap and strengthen damaged teeth, while bridges fill the gap left by missing ones — both custom-crafted to match the shape, shade and bite of your natural teeth.',
    longDescription:
      "A crown (or cap) encases a damaged tooth entirely, protecting it from further fracture while restoring its shape and function. Bridges use two crowned teeth on either side of a gap to support a false tooth in between — a fixed, comfortable solution for replacing one or two missing teeth. At AIMS, we use high-strength zirconia and lithium disilicate materials for aesthetic zones, and full-cast metal for posterior teeth where chewing loads are highest.",
    highlights: [
      'Tooth-coloured, durable materials',
      'Custom shade-matched fit',
      'Fixed & removable options',
      'Completed in as few as 2 visits',
    ],
    images: [px(4269687), px(4269700), px(6809652)],
    process: [
      { title: 'Tooth preparation', desc: 'The tooth is reshaped under local anaesthesia to accept the crown.' },
      { title: 'Impression', desc: 'A precise digital or physical impression captures the prepared tooth and surrounding bite.' },
      { title: 'Temporary crown', desc: 'A temporary restoration protects your tooth while the permanent one is fabricated.' },
      { title: 'Fitting & bonding', desc: 'The final crown is checked for fit, shade and bite before permanent cementation.' },
    ],
  },
  {
    slug: 'smile-makeover',
    name: 'Smile Makeover',
    category: 'cosmetic',
    description:
      'A personalised combination of whitening, veneers, alignment and contouring designed to transform your smile while keeping it looking natural.',
    longDescription:
      "A smile makeover isn't one single treatment — it's a curated combination of procedures chosen specifically for your face, teeth, and goals. At AIMS, we start with a Digital Smile Design consultation where you see a photorealistic preview of your result before any work begins. Makeovers typically combine teeth whitening, porcelain veneers for shape and shade, and minor alignment with clear aligners. Our AIIMS-trained specialists ensure the result enhances your features rather than overpowering them.",
    highlights: [
      'Tailored treatment combinations',
      'Digital smile preview before treatment',
      'Natural-looking results',
      'Free digital smile design consultation',
    ],
    images: [px(6193200), px(4269696), px(9951397)],
    process: [
      { title: 'Digital smile design', desc: 'Photos are taken and a digital simulation shows your potential result.' },
      { title: 'Treatment planning', desc: 'We map the sequence of procedures: whitening, veneers, aligners, or contouring.' },
      { title: 'Treatment delivery', desc: 'Each component is completed in a logical sequence, preserving tooth structure at every step.' },
      { title: 'Reveal & review', desc: 'Final review appointment confirms the result matches your preview and expectations.' },
    ],
  },
  {
    slug: 'gum-surgeries',
    name: 'Gum Surgeries',
    category: 'surgical',
    description:
      'From treating advanced gum disease to reshaping the gumline for a more even smile, our periodontal surgeries restore both the health and appearance of your gums.',
    longDescription:
      "Healthy gums are the foundation of a healthy smile. When non-surgical cleaning isn't enough to control advanced periodontitis, our periodontal team performs flap surgery to clean root surfaces directly and reduce pocket depths. We also offer gum grafting for recession, crown lengthening to expose more tooth structure, and aesthetic gum contouring for a more even smile line. All procedures use minimally invasive microsurgical techniques and resorbable sutures for faster healing.",
    highlights: [
      'Periodontal disease treatment',
      'Gum contouring & grafting',
      'Minimally invasive techniques',
      'Local anaesthesia, comfortable recovery',
    ],
    images: [px(6627332), px(6193197), px(6809659)],
    process: [
      { title: 'Periodontal assessment', desc: 'Full charting of pocket depths, bone levels, and furcation involvement.' },
      { title: 'Non-surgical phase', desc: 'Scaling and root planing is completed first; surgery only if needed after reassessment.' },
      { title: 'Surgical procedure', desc: 'Flap surgery, grafting or contouring under local anaesthesia.' },
      { title: 'Healing & maintenance', desc: 'Strict maintenance visits every 3 months to keep gums stable long-term.' },
    ],
  },
  {
    slug: 'dentures',
    name: 'Dentures',
    sub: 'Partial & Complete',
    category: 'restorative',
    description:
      'Custom-fitted partial or complete dentures replace missing teeth, restoring your ability to chew and speak comfortably while supporting your natural facial structure.',
    longDescription:
      "Modern dentures are far more comfortable, stable and natural-looking than their predecessors. At AIMS, we take a series of precisely staged impressions and jaw records to build dentures that distribute bite forces evenly and support your lip and cheek contours. Partial dentures use precision attachments or clasps to anchor to remaining teeth. For patients wanting fixed stability without surgery, implant-retained dentures are an excellent option we can discuss.",
    highlights: [
      'Partial & full sets',
      'Comfortable, natural-fitting base',
      'Easy maintenance & adjustments',
      'Regular fit check-ups included',
    ],
    images: [px(5622023), px(6529112), px(4269687)],
    process: [
      { title: 'Initial impressions', desc: 'Primary impressions give us a working model of your mouth.' },
      { title: 'Jaw records', desc: 'We record your bite relationship and select tooth shades and shapes.' },
      { title: 'Try-in', desc: 'Wax trial dentures let you preview the appearance and bite before final fabrication.' },
      { title: 'Fitting & review', desc: 'The finished denture is fitted and adjusted; a review appointment is booked at 1 week.' },
    ],
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontic Treatment',
    category: 'cosmetic',
    description:
      'Braces and clear aligners gradually straighten crowded or misaligned teeth, improving both your bite and the overall balance of your smile.',
    longDescription:
      "Orthodontic treatment at AIMS is led by a specialist orthodontist with a PGI Chandigarh residency. We offer conventional metal braces, tooth-coloured ceramic braces, and clear aligner therapy for patients who prefer a near-invisible approach. Treatment is suitable for teenagers and adults alike. Progress is monitored with in-house digital scanning — no messy impressions — and retainers are included in your treatment plan to keep results permanent.",
    highlights: [
      'Metal, ceramic & clear aligner options',
      'Suitable for teens & adults',
      'Regular progress monitoring',
      'Free orthodontic assessment',
    ],
    images: [orthodonticsImg, px(4269686), px(6193200)],
    process: [
      { title: 'Assessment & records', desc: 'X-rays, photos and digital scans map your teeth and jaw relationship.' },
      { title: 'Treatment planning', desc: 'A detailed plan shows predicted tooth movements and the estimated duration.' },
      { title: 'Active treatment', desc: 'Braces or aligners are fitted; monthly adjustments track progress.' },
      { title: 'Retention', desc: 'Retainers are fitted immediately after braces are removed to hold your new alignment.' },
    ],
  },
  {
    slug: 'full-mouth-rehabilitation',
    name: 'Full Mouth Rehabilitation',
    category: 'restorative',
    description:
      'For complex cases involving multiple teeth, bite issues or long-term wear, we combine restorative and surgical treatments into one coordinated plan to rebuild your entire bite.',
    longDescription:
      "Full mouth rehabilitation addresses cases where multiple systems — teeth, gums, jaw joints, and bone — all need attention simultaneously. Common causes include severe acid erosion, bruxism-related wear, trauma, and congenital conditions. At AIMS, a multidisciplinary team including our oral surgeon, periodontist and restorative specialist develops a phased treatment plan that rebuilds your bite systematically. Each phase is designed to be functional and aesthetically acceptable before the next begins.",
    highlights: [
      'Multi-disciplinary treatment plan',
      'Addresses function & aesthetics',
      'Phased for comfort & budget',
      'One dedicated treatment coordinator',
    ],
    images: [px(6809654), px(4971498), px(6193205)],
    process: [
      { title: 'Comprehensive assessment', desc: 'Full records including CBCT, study models, bite analysis and facial photos.' },
      { title: 'Diagnostic wax-up', desc: 'A wax model shows the planned final result before any teeth are prepared.' },
      { title: 'Phase 1 — foundations', desc: 'Gum disease treatment, extractions and implant placements are completed first.' },
      { title: 'Phase 2 — reconstruction', desc: 'Crowns, bridges and prosthetics restore the complete bite to the planned design.' },
    ],
  },
  {
    slug: 'botox-fillers',
    name: 'Botox & Fillers',
    category: 'aesthetics',
    description:
      'Precision injectables smooth fine lines and restore volume in the face, delivered by PGI-trained specialists for subtle, natural-looking results.',
    longDescription:
      "Injectable aesthetics at AIMS are performed exclusively by our PGI-trained oral and maxillofacial surgeon — a qualification that gives deep anatomical knowledge of facial nerves and vessels, making treatments both safer and more precise. Botulinum toxin relaxes hyperactive muscles that cause dynamic lines, while hyaluronic acid fillers restore volume in areas like the cheeks, lips and nasolabial folds. Our philosophy is always subtlety: results that refresh your appearance without making you look 'done'.",
    highlights: [
      'Anti-ageing & volume restoration',
      'Quick, walk-in friendly sessions',
      'Administered by trained specialist surgeon',
      'Results visible within days',
    ],
    images: [facialAestheticsImg, px(7582568), px(7581583)],
    process: [
      { title: 'Consultation', desc: 'Goals and concerns are discussed; a facial assessment maps areas for treatment.' },
      { title: 'Consent & marking', desc: 'Injection points are marked and consent is confirmed before any product is used.' },
      { title: 'Treatment', desc: 'Injections are delivered with fine needles; the whole session typically takes 20–30 minutes.' },
      { title: 'Review', desc: 'A 2-week review confirms the result and allows any minor adjustments.' },
    ],
  },
  {
    slug: 'threads-cogs',
    name: 'Threads & Cogs',
    category: 'aesthetics',
    description:
      'Dissolvable thread lifts gently lift and tighten sagging skin, stimulating collagen production for a firmer, more youthful contour without surgery.',
    longDescription:
      "Thread lifts use fine, absorbable PDO or PLLA threads inserted beneath the skin to mechanically lift sagging tissue while simultaneously triggering a collagen-building response. The result is a dual benefit: an immediate improvement in contour, followed by ongoing skin tightening as new collagen forms around the threads over 3–6 months. Cog threads — barbed for extra lift — are used for more significant laxity, while smooth mono-threads improve skin texture and elasticity in finer areas.",
    highlights: [
      'Non-surgical lift',
      'Stimulates natural collagen',
      'Minimal downtime — resume normal activity next day',
      'Results last 12–18 months',
    ],
    images: [px(7581583), facialAestheticsImg, px(7582568)],
    process: [
      { title: 'Assessment', desc: 'Skin laxity, fat distribution and bone structure are assessed to plan thread placement.' },
      { title: 'Anaesthesia', desc: 'Topical or local anaesthesia is applied to the insertion points.' },
      { title: 'Thread insertion', desc: 'Threads are guided under the skin through tiny entry points — no scalpels, no stitches.' },
      { title: 'Immediate shaping', desc: 'The surgeon shapes the tissue along the threads for an immediate lift; minor swelling settles within days.' },
    ],
  },
  {
    slug: 'hair-transplant',
    name: 'Hair Transplant',
    category: 'aesthetics',
    description:
      'Follicle-by-follicle FUE transplantation relocates healthy hair to thinning or balding areas, giving permanent, natural-looking growth lines.',
    longDescription:
      "AIMS is one of very few centres in J&K offering surgical hair restoration performed by a trained oral and maxillofacial surgeon — skills directly transferable to the precision incisions and graft placement required for a natural hairline. Our Follicular Unit Extraction (FUE) technique harvests individual follicular units from the donor area, leaving no linear scar. Grafts are placed at natural angles under magnification. New hair growth begins at 3–4 months and matures fully at 12 months.",
    highlights: [
      'FUE technique — no linear scar',
      'Permanent, natural growth lines',
      'Performed under magnification',
      'One-time procedure, lifelong results',
    ],
    images: [hairTransplantImg, px(36963686), px(20845681)],
    process: [
      { title: 'Consultation & planning', desc: 'Hair loss pattern, donor density and expected graft count are assessed.' },
      { title: 'Donor harvesting', desc: 'Individual follicular units are extracted from the donor area under local anaesthesia.' },
      { title: 'Graft preparation', desc: 'Follicles are sorted and kept in a preservation solution while recipient sites are created.' },
      { title: 'Implantation', desc: 'Each graft is placed at the correct angle and depth to match your natural growth pattern.' },
    ],
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    category: 'cosmetic',
    description:
      'From teeth whitening to veneers and contouring, our cosmetic treatments are designed to enhance the appearance of your smile without compromising tooth health.',
    longDescription:
      "Cosmetic dentistry at AIMS covers the full spectrum of smile-enhancing treatments. Professional in-office whitening achieves 4–8 shades of improvement in a single appointment. Porcelain veneers correct shape, length, colour and minor alignment issues with as little as 0.5 mm of tooth reduction. Composite bonding offers same-day corrections for chips and small gaps. Every cosmetic plan starts with a health assessment — we never place aesthetics over the long-term integrity of your teeth.",
    highlights: [
      'Whitening & veneers',
      'Shape & contouring correction',
      'Health-first cosmetic approach',
      'Free smile consultation included',
    ],
    images: [px(9951397), px(6627315), px(6193200)],
    process: [
      { title: 'Smile consultation', desc: 'Photos and a clinical exam identify areas you\'d like to improve.' },
      { title: 'Health check first', desc: 'Any underlying decay or gum issues are resolved before cosmetic work begins.' },
      { title: 'Cosmetic treatment', desc: 'Whitening, veneers, bonding or contouring are completed in one or two visits.' },
      { title: 'Maintenance plan', desc: 'You receive a maintenance guide and schedule to keep results looking their best.' },
    ],
  },
  {
    slug: 'facial-trauma',
    name: 'Treatment of Facial Injury & Jaw Fractures',
    category: 'surgical',
    description:
      'Our maxillofacial surgeons provide emergency and reconstructive care for facial fractures and jaw injuries, restoring both function and appearance.',
    longDescription:
      "Maxillofacial trauma — fractures of the jaw, cheekbones, orbit and mid-face — requires specialist surgical care that goes beyond what general surgeons typically provide. AIMS is led by an AIIMS and PGI-trained oral and maxillofacial surgeon with specific training in fracture fixation, soft-tissue reconstruction and post-traumatic rehabilitation. We use titanium mini-plates and screws for rigid internal fixation, allowing patients to eat soft foods within days. Emergency assessment is available; we coordinate with ENT, ophthalmology and neurosurgery when complex injuries require a multidisciplinary approach.",
    highlights: [
      '24/7 emergency-ready care',
      'Fracture fixation with titanium plates',
      'AIIMS-trained maxillofacial surgeons',
      'Coordinated with ENT & ortho teams when needed',
    ],
    images: [facialTraumaImg, px(30769213), px(30797771)],
    process: [
      { title: 'Emergency assessment', desc: 'Airway, breathing and circulation are assessed immediately; CBCT imaging follows.' },
      { title: 'Surgical planning', desc: 'Fracture pattern, displacement and occlusion guide the surgical approach.' },
      { title: 'Fixation surgery', desc: 'Fractures are reduced and fixed with titanium plates under general or local anaesthesia.' },
      { title: 'Rehabilitation', desc: 'A graded diet and physiotherapy programme restores full jaw function.' },
    ],
  },
  {
    slug: 'tmj-treatment',
    name: 'TMJ Problems Treatment',
    category: 'surgical',
    description:
      'We diagnose and treat jaw joint pain, clicking and locking caused by TMJ disorders — using splints, physiotherapy or surgery depending on severity.',
    longDescription:
      "The temporomandibular joint is one of the most complex joints in the body. TMJ disorders can cause jaw pain, clicking, locking, earache, headaches and difficulty opening the mouth wide. At AIMS, we use a step-wise approach: conservative splint therapy and physiotherapy resolve the majority of cases without surgery. For joints with structural damage — including disc displacement or arthritic changes — arthroscopy or open-joint surgery is available from our maxillofacial surgeon, one of very few practitioners in J&K trained in TMJ surgery.",
    highlights: [
      'Jaw pain & clicking diagnosis',
      'Non-surgical splint therapy first-line',
      'Arthroscopic & open-joint surgery for severe cases',
      'Custom night-guards available',
    ],
    images: [px(6193198), px(6809659), px(4270084)],
    process: [
      { title: 'Detailed history & examination', desc: 'Joint sounds, range of motion and muscle tenderness are assessed.' },
      { title: 'Imaging', desc: 'MRI or CBCT imaging confirms the joint anatomy and disc position.' },
      { title: 'Conservative treatment', desc: 'Occlusal splint, physiotherapy and anti-inflammatory medication are started.' },
      { title: 'Surgical intervention if needed', desc: 'Arthrocentesis, arthroscopy or open surgery for cases not responding to conservative care.' },
    ],
  },
  {
    slug: 'oral-cancer-screening',
    name: 'Oral Cancer Screening',
    category: 'diagnostics',
    description:
      'A quick, painless examination of the mouth, tongue and throat to catch early warning signs of oral cancer, when treatment is most effective.',
    longDescription:
      "Oral cancer is highly treatable when caught early, but survival rates drop dramatically with late diagnosis. At AIMS, we perform a structured oral cancer screening at every patient's annual check-up and on-demand for high-risk patients — smokers, tobacco chewers, heavy alcohol users, and those with a family history. The exam takes under 5 minutes: a systematic visual and tactile inspection of the lips, cheeks, tongue, floor of mouth, palate and throat. Suspicious areas can be further investigated with VELscope fluorescence and biopsy if indicated.",
    highlights: [
      'Early detection screening',
      'Painless visual & physical exam',
      'Recommended annually for all adults',
      'Takes less than 5 minutes',
    ],
    images: [px(4971510), px(6193199), px(4269681)],
    process: [
      { title: 'Medical history review', desc: 'Risk factors including tobacco use, alcohol, HPV and family history are noted.' },
      { title: 'Visual inspection', desc: 'All mucosal surfaces are examined systematically under good light.' },
      { title: 'Palpation', desc: 'The tongue, floor of mouth and neck nodes are palpated for lumps or asymmetry.' },
      { title: 'Further investigation if needed', desc: 'Suspicious lesions are photographed and referred for biopsy or specialist review.' },
    ],
  },
]
