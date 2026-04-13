import type { ComponentType, SVGProps } from 'react'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type NavItem = {
  label: string
  href: string
}

export type TextCard = {
  title: string
  text: string
  icon: IconComponent
}

export type StepItem = {
  title: string
  text: string
  active?: boolean
}

export type Testimonial = {
  name: string
  role: string
  text: string
}

export type PainPoint = {
  label: string
  icon: IconComponent
}
