// Shared line-art icon set for AIMS. All icons are drawn as simple
// stroke-based SVGs so the whole site shares one consistent visual
// vocabulary instead of mixing icon styles.

export function BrandMark({ size = 40, color = 'var(--teal)', accent = 'var(--gold)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 14c-5 0-7 3-10 3-2.5 0-4-1.5-4-1.5s-1 13 3 21c2 4 4 6 6 6 2.5 0 2.5-5 5-5s2.5 5 5 5c2 0 4-2 6-6 4-8 3-21 3-21s-1.5 1.5-4 1.5c-3 0-5-3-10-3z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <rect x="29.4" y="29" width="5.2" height="13" rx="1.4" fill={accent} />
      <rect x="27" y="27" width="10" height="3.6" rx="1.4" fill={accent} />
    </svg>
  )
}

// Large faint watermark version of the mark, used as a signature
// background motif behind hero copy and section dividers.
export function BrandWatermark({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M100 30c-16 0-22 9-31 9-8 0-12-5-12-5s-3 41 9 66c6 12 13 19 19 19 8 0 8-16 15-16s7 16 15 16c6 0 13-7 19-19 12-25 9-66 9-66s-4 5-12 5c-9 0-15-9-31-9z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="91" y="91" width="18" height="46" rx="5" fill="currentColor" />
      <rect x="84" y="83" width="32" height="13" rx="5" fill="currentColor" />
    </svg>
  )
}

export function IconImplant(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 6c5 0 9 3 9 8 0 9-4 14-6 18-1 2-2 3-3 3s-1.5-2-3-2-2 2-3 2-2-1-3-3c-2-4-6-9-6-18 0-5 4-8 9-8h6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15 16h10M15 20h10M15 24h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconFace(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 18.5h.1M25 18.5h.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 26c2.2 2 4 3 6 3s3.8-1 6-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 7V4M11 9l-2-2M29 9l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconTrauma(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 5 8 10v9c0 9 5.5 14.5 12 16 6.5-1.5 12-7 12-16v-9L20 5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 13v8M16 19h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconHair(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 22c-1-7 2-14 8-14s9 7 8 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 12v10M20 9v14M26 12v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 26c1.5 4 5 7 9 7s7.5-3 9-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 6l11 4v9c0 9-5 14-11 15-6-1-11-6-11-15v-9l11-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15.5 20l3.2 3.4L25 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 12v8l6 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMicroscope(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 30h14M19 30v-6M14 24l6-12 2 1-5.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="11" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 30c0-1.7 1.5-3 3.5-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconHeartHand(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 24s-7-4.3-7-9.6c0-2.8 2.2-5 5-5 1.7 0 3.2.9 4 2.2.8-1.3 2.3-2.2 4-2.2 2.8 0 5 2.2 5 5 0 5.3-7 9.6-7 9.6h-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 33c0-3 2.5-5 6-5h7l8-3c1.2-.4 2.4.6 2 1.8-.3 1-1 1.7-2 2.1l-9 3.4H9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMapPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.5 4h3l1.5 4-2 1.6a12 12 0 0 0 5.4 5.4l1.6-2 4 1.5v3a2 2 0 0 1-2.1 2A17.5 17.5 0 0 1 4.5 6.1 2 2 0 0 1 6.5 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 7l7 6 7-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
