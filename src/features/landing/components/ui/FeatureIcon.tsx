type FeatureIconProps = {
  name: string
  className?: string
}

const iconMap = {
  message: (
    <path
      d="M8.5 8.5h15a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5H13l-5.5 4v-4H8.5A4.5 4.5 0 0 1 4 22V13a4.5 4.5 0 0 1 4.5-4.5Zm6 5.5 6 6m0-6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  userOff: (
    <>
      <circle
        cx="15.5"
        cy="11"
        r="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M7 24c1.4-3.6 4.6-5.5 8.5-5.5S22.6 20.4 24 24m1-10 5 5m0-5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  ban: (
    <>
      <circle
        cx="17"
        cy="17"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="m10 10 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </>
  ),
  slow: (
    <>
      <rect
        x="5"
        y="10"
        width="26"
        height="14"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="m15 17 3 3 5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="17" r="1.5" fill="currentColor" />
    </>
  ),
  phone: (
    <path
      d="M11.5 6.5c1.2 0 2.1.8 2.4 1.9l.8 3a2.5 2.5 0 0 1-.7 2.4l-1.6 1.6a18.6 18.6 0 0 0 7.2 7.2l1.6-1.6a2.5 2.5 0 0 1 2.4-.7l3 .8a2.5 2.5 0 0 1 1.9 2.4v2.7A2.8 2.8 0 0 1 25.7 31C14.3 30.2 5.8 21.7 5 10.3A2.8 2.8 0 0 1 7.8 7.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  headset: (
    <>
      <path
        d="M7 17a9 9 0 0 1 18 0v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <rect x="6" y="17" width="5" height="9" rx="2.2" fill="currentColor" />
      <rect x="23" y="17" width="5" height="9" rx="2.2" fill="currentColor" />
      <path
        d="M22 28c0 2.2-1.8 4-4 4h-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </>
  ),
  checkCard: (
    <>
      <rect
        x="5.5"
        y="7"
        width="27"
        height="20"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="m13 18 3.2 3.2L25 12.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  target: (
    <>
      <circle
        cx="18"
        cy="18"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <circle cx="18" cy="18" r="3.2" fill="currentColor" />
      <path
        d="M18 5v3m0 20v3m13-13h-3M8 18H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </>
  ),
  repeat: (
    <path
      d="M10 12h14l-3-3m3 3-3 3M26 24H12l3 3m-3-3 3-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  dm: (
    <>
      <path
        d="M7 10h22v14H15l-6 5v-5H7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="m12 15 5 4 7-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  receiver: (
    <>
      <path
        d="M9 24h5m4 0h5m-7-17v17"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
    </>
  ),
  building: (
    <>
      <path
        d="M10 29V8l8-3v24m0-14h8v14H8h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M13 11h2m-2 5h2m6 4h2m-10 5h2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </>
  ),
  briefcase: (
    <>
      <rect
        x="6"
        y="10"
        width="24"
        height="16"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M14 10V8.5A2.5 2.5 0 0 1 16.5 6h3A2.5 2.5 0 0 1 22 8.5V10m-16 6h24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </>
  ),
  cart: (
    <>
      <path
        d="M7 9h3l2.2 11h11.4L26 12H12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="27" r="1.8" fill="currentColor" />
      <circle cx="23" cy="27" r="1.8" fill="currentColor" />
    </>
  ),
  calendar: (
    <>
      <rect
        x="6"
        y="8"
        width="24"
        height="20"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M12 5v6m12-6v6M6 14h24m-16 5h8m-8 4h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </>
  ),
  play: (
    <>
      <path
        d="M11 9.5v17l14-8.5-14-8.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M28 11v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </>
  ),
  chevronLeft: (
  <path
    d="M22 8l-8 10 8 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
),
chevronRight: (
  <path
    d="M14 8l8 10-8 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
),
} as const

export function FeatureIcon({ name, className = '' }: FeatureIconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden="true" fill="none">
      {iconMap[name as keyof typeof iconMap]}
    </svg>
  )
}
