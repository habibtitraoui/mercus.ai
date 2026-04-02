import mercusLogo from '../../../../assets/mercus-logo.svg'

type BrandProps = {
  href: string
  ariaLabel?: string
}

export function Brand({ href, ariaLabel }: BrandProps) {
  return (
    <a
      className="inline-flex shrink-0 items-center no-underline"
      href={href}
      aria-label={ariaLabel}
    >
      <img
        className="block h-auto w-24 max-w-full sm:w-[108px] md:w-[126px] xl:w-[141px]"
        src={mercusLogo}
        alt="Mercus"
      />
    </a>
  )
}
