// Illustrated "scenes" — a consistent line-art + soft-blob visual
// language built specifically for AIMS, so the site never depends on
// generic stock photography. Each scene shares the same construction:
// a tinted blob field for depth, then a line-drawing in the brand ink.

function Blob({ d, fill }) {
  return <path d={d} fill={fill} />
}

const frame = {
  viewBox: '0 0 400 300',
  xmlns: 'http://www.w3.org/2000/svg',
}

export function SceneHero(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M40 230c-30-60 10-150 90-160s150 40 160 110-50 110-130 115S70 290 40 230Z" fill="var(--teal-tint)" />
      <circle cx="300" cy="80" r="46" fill="var(--gold-tint)" />
      <g stroke="var(--teal)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 60c-30 0-42 18-60 18-15 0-24-9-24-9s-6 78 18 126c12 24 24 36 36 36 15 0 15-30 30-30s15 30 30 30c12 0 24-12 36-36 24-48 18-126 18-126s-9 9-24 9c-18 0-30-18-60-18z" />
        <rect x="188" y="150" width="24" height="58" rx="6" fill="var(--gold)" stroke="none" />
        <rect x="178" y="138" width="44" height="18" rx="7" fill="var(--gold)" stroke="none" />
      </g>
      <g stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="2 5" opacity="0.4">
        <circle cx="200" cy="150" r="100" fill="none" />
      </g>
      <g fill="var(--teal)">
        <circle cx="70" cy="70" r="3.5" />
        <circle cx="340" cy="190" r="3.5" />
        <circle cx="330" cy="50" r="3.5" />
      </g>
    </svg>
  )
}

export function SceneAbout(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M30 250c-10-90 60-180 160-180s170 80 170 160c0 20-340 50-330 20Z" fill="var(--surface-deep)" />
      <g stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="90" y="120" width="220" height="120" rx="6" fill="var(--paper)" />
        <path d="M90 120 200 50l110 70" />
        <rect x="186" y="170" width="28" height="70" fill="var(--teal-tint)" />
        <rect x="120" y="150" width="30" height="30" fill="var(--gold-tint)" />
        <rect x="250" y="150" width="30" height="30" fill="var(--gold-tint)" />
      </g>
      <g stroke="var(--teal)" strokeWidth="2" fill="none">
        <circle cx="200" cy="80" r="14" />
        <path d="M186 80a14 14 0 0 1 28 0" />
      </g>
      <g fill="var(--gold)">
        <circle cx="60" cy="200" r="4" />
        <circle cx="345" cy="100" r="4" />
      </g>
    </svg>
  )
}

export function SceneImplant(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M60 240c-40-70 0-160 100-170s170 50 170 130-60 90-150 90S90 290 60 240Z" fill="var(--teal-tint)" />
      <g stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 50c-22 0-30 14-46 14-12 0-19-7-19-7s-5 60 14 98c9 18 18 27 27 27 11 0 11-23 24-23s13 23 24 23c9 0 18-9 27-27 19-38 14-98 14-98s-7 7-19 7c-16 0-24-14-46-14z" />
      </g>
      <rect x="190" y="158" width="20" height="48" fill="var(--gold)" />
      <rect x="178" y="148" width="44" height="14" rx="5" fill="var(--gold)" />
      <g stroke="var(--teal)" strokeWidth="1.4" strokeDasharray="3 4">
        <line x1="240" y1="160" x2="290" y2="160" />
        <line x1="240" y1="200" x2="290" y2="200" />
        <line x1="290" y1="160" x2="290" y2="200" />
      </g>
      <text x="296" y="184" fontFamily="var(--font-mono)" fontSize="11" fill="var(--teal)">titanium</text>
    </svg>
  )
}

export function SceneConsult(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M40 230c-20-80 50-170 150-170s160 70 165 150-60 80-150 85S60 300 40 230Z" fill="var(--surface-deep)" />
      <g stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="150" cy="120" r="28" fill="var(--paper)" />
        <path d="M105 210c0-28 20-44 45-44s45 16 45 44" fill="var(--paper)" />
        <circle cx="270" cy="135" r="24" fill="var(--paper)" />
        <path d="M232 210c0-22 17-36 38-36s38 14 38 36" fill="var(--paper)" />
      </g>
      <g fill="var(--teal)">
        <rect x="190" y="70" width="70" height="44" rx="12" />
      </g>
      <path d="M210 114l-8 14-4-14" fill="var(--teal)" />
      <g stroke="var(--paper)" strokeWidth="2.4" strokeLinecap="round">
        <line x1="205" y1="86" x2="245" y2="86" />
        <line x1="205" y1="96" x2="235" y2="96" />
      </g>
    </svg>
  )
}

export function SceneAesthetic(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M50 220c-30-70 20-160 120-170s170 50 160 130-70 100-150 100S75 270 50 220Z" fill="var(--gold-tint)" />
      <g stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M150 70c-40 0-66 32-66 76 0 36 22 60 30 70 4 5 10 6 15 2 5-5 8-12 8-12" />
        <path d="M150 70c40 0 66 32 66 76 0 36-22 60-30 70-4 5-10 6-15 2" />
        <circle cx="128" cy="120" r="3" fill="var(--ink)" />
      </g>
      <g stroke="var(--teal)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M250 90c10 14 10 30 0 44" />
        <path d="M270 80c16 20 16 44 0 64" />
        <path d="M290 70c22 26 22 58 0 86" />
      </g>
      <path d="M150 200c10 18 10 30 0 40-10-10-10-22 0-40Z" fill="var(--teal)" />
    </svg>
  )
}

export function SceneHair(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M40 240c-20-90 60-180 160-180s170 90 150 170c-10 40-300 50-310 10Z" fill="var(--teal-tint)" />
      <g stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M120 150c-10-50 20-90 80-90s90 40 80 90" />
        <path d="M150 60v60M180 50v66M210 50v66M240 60v60" />
      </g>
      <g stroke="var(--teal)" strokeWidth="2" strokeLinecap="round">
        <path d="M150 190l40-14" />
        <path d="M150 210l40-14" />
        <path d="M150 230l40-14" />
      </g>
      <circle cx="280" cy="120" r="5" fill="var(--gold)" />
      <circle cx="295" cy="150" r="3.5" fill="var(--gold)" />
      <circle cx="270" cy="160" r="3" fill="var(--gold)" />
    </svg>
  )
}

export function SceneOrtho(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M50 230c-30-70 10-160 110-170s170 50 165 130-60 100-150 100S75 280 50 230Z" fill="var(--surface-deep)" />
      <g stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M110 150c0-20 18-32 40-32h100c22 0 40 12 40 32" />
        <path d="M120 150v18c0 10 8 16 18 16h124c10 0 18-6 18-16v-18" />
      </g>
      <g stroke="var(--teal)" strokeWidth="3" strokeLinecap="round">
        <line x1="135" y1="150" x2="135" y2="172" />
        <line x1="165" y1="150" x2="165" y2="176" />
        <line x1="195" y1="150" x2="195" y2="178" />
        <line x1="225" y1="150" x2="225" y2="176" />
        <line x1="255" y1="150" x2="255" y2="172" />
      </g>
      <line x1="120" y1="162" x2="270" y2="162" stroke="var(--gold)" strokeWidth="2.4" />
    </svg>
  )
}

export function SceneTrauma(props) {
  return (
    <svg {...frame} {...props}>
      <Blob d="M40 220c-20-80 50-160 150-160s160 70 160 150-60 90-150 90S60 280 40 220Z" fill="var(--gold-tint)" />
      <g stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 60l66 24v54c0 54-30 84-66 90-36-6-66-36-66-90V84l66-24z" fill="var(--paper)" />
      </g>
      <g stroke="var(--teal)" strokeWidth="4" strokeLinecap="round">
        <line x1="200" y1="108" x2="200" y2="156" />
        <line x1="176" y1="132" x2="224" y2="132" />
      </g>
      <g fill="var(--gold)">
        <circle cx="120" cy="100" r="4" />
        <circle cx="290" cy="200" r="4" />
        <circle cx="300" cy="90" r="3" />
      </g>
    </svg>
  )
}
