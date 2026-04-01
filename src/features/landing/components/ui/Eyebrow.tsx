import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
  id?: string
}

export function Eyebrow({ children, id }: EyebrowProps) {
  return (
    <div className="eyebrow" id={id}>
      {children}
    </div>
  )
}
