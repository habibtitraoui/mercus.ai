import type { ComponentType, SVGProps } from 'react'

import ArrowLeftMDRaw from 'coolicons-react/src/outline/Arrow/ArrowLeftMD.jsx'
import ArrowRightMDRaw from 'coolicons-react/src/outline/Arrow/ArrowRightMD.jsx'
import ArrowsReload01Raw from 'coolicons-react/src/outline/Arrow/ArrowsReload01.jsx'
import CalendarRaw from 'coolicons-react/src/outline/Calendar/Calendar.jsx'
import ChatRaw from 'coolicons-react/src/outline/Communication/Chat.jsx'
import MailRaw from 'coolicons-react/src/outline/Communication/Mail.jsx'
import PaperPlaneRaw from 'coolicons-react/src/outline/Communication/PaperPlane.jsx'
import PhoneRaw from 'coolicons-react/src/outline/Communication/Phone.jsx'
import CloseCircleRaw from 'coolicons-react/src/outline/Edit/CloseCircle.jsx'
import CheckAllRaw from 'coolicons-react/src/outline/Interface/CheckAll.jsx'
import CreditCard01Raw from 'coolicons-react/src/outline/Interface/CreditCard01.jsx'
import HandbagRaw from 'coolicons-react/src/outline/Interface/Handbag.jsx'
import LinkRaw from 'coolicons-react/src/outline/Interface/Link.jsx'
import ShoppingCart02Raw from 'coolicons-react/src/outline/Interface/ShoppingCart02.jsx'
import SuitcaseRaw from 'coolicons-react/src/outline/Interface/Suitcase.jsx'
import BulbRaw from 'coolicons-react/src/outline/Live/Bulb.jsx'
import HeadphonesRaw from 'coolicons-react/src/outline/Media/Headphones.jsx'
import PlayRaw from 'coolicons-react/src/outline/Media/Play.jsx'
import Building03Raw from 'coolicons-react/src/outline/Navigation/Building03.jsx'
import HouseCheckRaw from 'coolicons-react/src/outline/Navigation/HouseCheck.jsx'
import UserCloseRaw from 'coolicons-react/src/outline/User/UserClose.jsx'
import UsersGroupRaw from 'coolicons-react/src/outline/User/UsersGroup.jsx'
import UserVoiceRaw from 'coolicons-react/src/outline/User/UserVoice.jsx'


type RawIcon = ComponentType<SVGProps<SVGSVGElement>>

function withCurrentColor(Icon: RawIcon) {
  return function CoolIcon({ className = '', ...props }: SVGProps<SVGSVGElement>) {
    const resolvedClassName = [
      className,
      '[&>g>path]:stroke-current',
      '[&>g>path]:fill-none',
      '[&>g>circle]:stroke-current',
      '[&>g>circle]:fill-none',
      '[&>g>rect]:stroke-current',
      '[&>g>rect]:fill-none',
      '[&>g>line]:stroke-current',
      '[&>g>line]:fill-none',
    ]
      .filter(Boolean)
      .join(' ')

    return <Icon {...props} className={resolvedClassName} />
  }
}

export const ArrowLeftMD = withCurrentColor(ArrowLeftMDRaw)
export const ArrowRightMD = withCurrentColor(ArrowRightMDRaw)
export const CheckAll = withCurrentColor(CheckAllRaw)
export const Calendar = withCurrentColor(CalendarRaw)
export const Chat = withCurrentColor(ChatRaw)
export const CloseCircle = withCurrentColor(CloseCircleRaw)
export const Building = withCurrentColor(Building03Raw)
export const Briefcase = withCurrentColor(SuitcaseRaw)
export const Bulb = withCurrentColor(BulbRaw)
export const CreditCard = withCurrentColor(CreditCard01Raw)
export const Handbag = withCurrentColor(HandbagRaw)
export const Headphone = withCurrentColor(HeadphonesRaw)
export const HouseCheck = withCurrentColor(HouseCheckRaw)
export const Link = withCurrentColor(LinkRaw)
export const Mail = withCurrentColor(MailRaw)
export const PaperPlane = withCurrentColor(PaperPlaneRaw)
export const Phone = withCurrentColor(PhoneRaw)
export const PhoneCall = withCurrentColor(UserVoiceRaw)
export const Play = withCurrentColor(PlayRaw)
export const Refresh = withCurrentColor(ArrowsReload01Raw)
export const ShoppingCart = withCurrentColor(ShoppingCart02Raw)
export const Target = withCurrentColor(HouseCheckRaw)
export const User = withCurrentColor(UserCloseRaw)
export const UsersGroup = withCurrentColor(UsersGroupRaw)
