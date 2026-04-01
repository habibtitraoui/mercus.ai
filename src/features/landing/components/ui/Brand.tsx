import mercusLogo from '../../../../assets/mercus-logo.svg'

type BrandProps = {
  href: string
  ariaLabel?: string
}

export function Brand({ href, ariaLabel }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label={ariaLabel}>
      <img className="brand-logo" src={mercusLogo} alt="Mercus" />
    </a>
  )
}
