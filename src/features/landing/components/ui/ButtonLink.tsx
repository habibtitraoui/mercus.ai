import type { ReactNode } from 'react'
import { FeatureIcon } from './FeatureIcon'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  small?: boolean
  icon?: string
  className?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  small = false,
  icon,
  className = '',
}: ButtonLinkProps) {
  const baseClassName =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#f58220] px-[18px] text-base no-underline transition hover:-translate-y-0.5'
  const variantClassName =
    variant === 'primary'
      ? 'bg-[#f58220] text-white shadow-[0_12px_30px_rgba(245,130,32,0.18)]'
      : 'bg-white text-[#f58220]'
  const sizeClassName = small
    ? 'h-[46px] min-h-[46px] w-[148px] gap-4 px-3.5 whitespace-nowrap max-[720px]:hidden'
    : 'w-full sm:w-auto'
  const resolvedClassName = [baseClassName, variantClassName, sizeClassName, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={resolvedClassName} href={href}>
      {icon ? <FeatureIcon className="h-4 w-4 shrink-0" name={icon} /> : null}
      {children}
    </a>
  )
}
