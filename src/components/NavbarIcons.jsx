/**
 * Small decorative film-themed line icons for the navbar (hand-drawn feel, not literal copies).
 */
export function IconFilmStrip({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="4" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4v16M16 4v16M22 4v16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="6" cy="8" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="6" cy="16" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="26" cy="8" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="26" cy="16" r="1" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function IconSoundWaves({ className }) {
  return (
    <svg className={className} viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 10c2.5-4 6.5-4 9 0s6.5 4 9 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6 10c1.8-2.8 4.2-2.8 6 0s4.2 2.8 6 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
      <path d="M8 10c1-1.5 2.5-1.5 3.5 0s2.5 1.5 3.5 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export function IconMegaphone({ className }) {
  return (
    <svg className={className} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M6 14V8l10-3v12L6 14z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M16 5v12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 11h-3v0c-1 0-2 .9-2 2v0c0 1.1 1 2 2 2h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 9c2 1 3.5 2.5 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.75" />
      <path d="M21 7c2.5 1.2 4 3 5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

export function IconFilmReel({ className }) {
  return (
    <svg className={className} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="3" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="13" cy="4.5" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="9" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="17" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="13" cy="21.5" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="6" cy="17" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="6" cy="9" r="1" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function IconVideoCamera({ className }) {
  return (
    <svg className={className} viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="6" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M17 9.5l7-3.5v11l-7-3.5v-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="10" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.1" />
      <path d="M6 4h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export function IconSpotlight({ className }) {
  return (
    <svg className={className} viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M13 3L4 24h18L13 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="13" cy="22" rx="6" ry="2" stroke="currentColor" strokeWidth="1.1" opacity="0.75" />
      <path d="M13 8v4M9 12l3.5 2M17 12l-3.5 2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function IconTripod({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 4v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="3" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 10L5 22M12 10l7 12M12 10l0 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22h16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

export function IconSparkle({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M10 2l1.2 4.8L16 8l-4.8 1.2L10 14l-1.2-4.8L4 8l4.8-1.2L10 2z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

export function IconDirectorChair({ className }) {
  return (
    <svg className={className} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 18h14v3H6v-3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 18V10h10v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13 10V6M9 6h8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M6 21l-2 2M20 21l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
    </svg>
  )
}

export function IconClapboard({ className }) {
  return (
    <svg className={className} viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M5 18h18v3H5v-3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M7 18V11h14v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M7 11L9 7h12l2 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 9l1.5-1h9L21 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <path d="M10 8.5h8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}
