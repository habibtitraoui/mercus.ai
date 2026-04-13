declare module "coolicons-react" {
  import * as React from "react"

  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string
  }

  export const Chat: React.FC<IconProps>
  export const User: React.FC<IconProps>
  export const ArrowLeftMD: React.FC<IconProps>
  export const ArrowRightMD: React.FC<IconProps>
  export const CloseCircle: React.FC<IconProps>
  export const Check: React.FC<IconProps>
  export const Phone: React.FC<IconProps>
  export const Headphone: React.FC<IconProps>
  export const CreditCard: React.FC<IconProps>
  export const Target: React.FC<IconProps>
  export const Refresh: React.FC<IconProps>
  export const Mail: React.FC<IconProps>
  export const PhoneCall: React.FC<IconProps>
  export const Building: React.FC<IconProps>
  export const Briefcase: React.FC<IconProps>
  export const ShoppingCart: React.FC<IconProps>
  export const Calendar: React.FC<IconProps>
  export const Play: React.FC<IconProps>
}
