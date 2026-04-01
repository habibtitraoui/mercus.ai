import type { ReactNode } from 'react'
import { FeatureIcon } from './FeatureIcon'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  small?: boolean
  icon?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  small = false,
  icon,
}: ButtonLinkProps) {
  const className = ['button', `button-${variant}`, small ? 'button-small' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <a className={className} href={href}>
      {icon ? <FeatureIcon className="button-icon" name={icon} /> : null}
      {children}
    </a>
  )
}
