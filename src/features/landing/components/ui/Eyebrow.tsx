import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
  id?: string
}

export function Eyebrow({ children, id }: EyebrowProps) {
  return (
    <div
      className="mx-auto mb-6 w-fit scroll-mt-28 rounded-full border border-[#f58220] bg-[rgba(245,130,32,0.05)] px-4.5 py-2.5 text-base leading-none text-[#f58220] md:scroll-mt-32"
      id={id}
    >
      {children}
    </div>
  )
}
