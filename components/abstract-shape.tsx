export function AbstractShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g opacity="0.2">
        <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="2" />
        <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="2" />
        <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="2" />
        <circle cx="250" cy="250" r="50" stroke="currentColor" strokeWidth="2" />
      </g>
      <path
        d="M250 50L280 220L450 250L280 280L250 450L220 280L50 250L220 220L250 50Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M250 150L265 220L335 250L265 280L250 350L235 280L165 250L235 220L250 150Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  )
}

