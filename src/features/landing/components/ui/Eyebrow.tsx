import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
}

export function Eyebrow({ children }: EyebrowProps) {
  return <div className="eyebrow">{children}</div>
}
