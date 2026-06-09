import {
  ArrowLeftMD,
  ArrowRightMD,
  CheckAll,
  Chat,
  CloseCircle,
  Building,
  Bulb,
  Handbag,
  HouseCheck,
  Link,
  PaperPlane,
  Phone,
  PhoneCall,
  Play,
  Refresh,
  User,
  UsersGroup,
} from '../components/ui/coolicons'
import vintageDivisionLogo from '../../../assets/vinatge.jpeg'
import xaraCosmetiqueLogo from '../../../assets/xara.jpeg'
import catchShopLogo from '../../../assets/cat.jpeg'
import type {
  NavItem,
  PainPoint,
  StepItem,
  Testimonial,
  TextCard,
} from '../types'

export const navItems: NavItem[] = [
  { label: 'About us', href: '#about' },
  { label: 'What we do', href: '#workforce' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export const painPoints: PainPoint[] = [
  { label: 'Messages unanswered', icon: Chat },
  { label: 'Leads forgotten', icon: User },
  { label: 'Orders not confirmed', icon: CloseCircle },
  { label: 'Slow response times', icon: Refresh },
  { label: 'Calls missed', icon: Phone },
]

export const workforceCards: TextCard[] = [
  {
    title: 'Customer Support',
    text: 'Answers questions instantly',
    icon: Chat,
  },
  {
    title: 'Order Confirmation',
    text: 'Confirms orders automatically.',
    icon: CheckAll,
  },
  {
    title: 'Lead Qualification',
    text: 'Filters serious buyers.',
    icon: UsersGroup,
  },
  {
    title: 'Follow-Ups',
    text: 'Chases leads automatically.',
    icon: Bulb,
  },
  {
    title: 'DM Agent',
    text: 'Replies to Messenger / Instagram / WhatsApp.',
    icon: PaperPlane,
  },
  {
    title: 'Voice Receptionist',
    text: 'Answers calls and schedules meetings.',
    icon: PhoneCall,
  },
]

export const steps: StepItem[] = [
  {
    title: 'Connect your channels',
    text: 'WhatsApp, Instagram, Messenger, website and calls.',
    active: true,
  },
  {
    title: 'Mercus learns your business',
    text: 'Products, services, FAQs, tone, offers and routing.',
  },
  {
    title: 'Your AI agents start working',
    text: 'Answering customers 24/7 with instant follow-up.',
  },
]

export const industries: TextCard[] = [
  {
    title: 'Real Estate',
    text: 'AI qualifies property leads.',
    icon: HouseCheck,
  },
  {
    title: 'Service businesses',
    text: 'AI handles inquiries and follow-ups.',
    icon: Link,
  },
  {
    title: 'Ecommerce',
    text: 'AI confirms orders and reduces the boring stuff.',
    icon: Handbag,
  },
  {
    title: 'Restaurants and Clinics',
    text: 'AI handles reservations and messages.',
    icon: Building,
  },
]

export const landingUiIcons = {
  play: Play,
  chevronLeft: ArrowLeftMD,
  chevronRight: ArrowRightMD,
} as const

export const testimonials: Testimonial[] = [
  {
    name: 'Xara cosmétique',
    role: 'E-com Hair products',
    text: 'le System hada vraiment 3awni n scaler les campaign ta3i , Wellit ndir Ads w ng3ed netfarej f les commandes ydakhlou l sheet automatiquement, merci bcp rayane.',
    logo: xaraCosmetiqueLogo,
  },
  {
    name: 'Oussama Ben Abila',
    role: 'E-com Cat shop',
    text: 'ملي درت الsystem ديالكم ما عاودت خسرت دراهم على ادمين، و الله النهار ديالي ف الخدمة كان 90% انا نريبوندي على les messages، دوكا الحمد لله ما نشوفوهمش كامل ، يعطيكم الصحا.',
    logo: catchShopLogo,
  },
  {
    name: 'Vintage Division',
    role: 'E-com Clothes',
    text: 'خويا لعزيز لحد الان عندو سمانة و هو خدام الله يبارك ، كنت عندي ادمين يحطلي ماكس 30 كومند في النهار ، دوكا ندخل نلقى 90 الله يبارك ، و زيد الكاليتي تاع السيرفيس راني نشوف الناس كامل راضية على الخدمة ، بارك الله فيكم و كملو فيها',
    logo: vintageDivisionLogo,
  },
]

export const faqs = [
  {
    question: 'Does the System Speak Darja Well?',
    answer: 'Yes, it understands Darja, French, and mixed messages the way your customers actually type. It even understands pictures, screenshots, and voice messages in Darja.',
  },
  {
    question: 'What happens when the bot gets it wrong?',
    answer: 'It hands the conversation to your team automatically. You get a Telegram notification and take over, no one notices.',
  },
  {
    question: 'Will it work with my Shopify or WooCommerce store?',
    answer: 'Yes. It connects directly to your store and pulls products, prices, and orders in real time. Even if you have a custom made website, we can connect it if you provide us with the API documentation.',
  },
  {
    question: 'Can it connect with the Shipping Company I work with?',
    answer: 'Yes, we integrate with Yalidine, Zr Express, and Maystro and more. Once connected, the bot can automatically create shipments, share tracking numbers with customers, and update order status in real time.',
  },
  {
    question: 'What happens if I change my prices or add new products?',
    answer: 'Nothing breaks. Since the bot is connected directly to your store, any price change or new product you add is picked up automatically. You don\'t need to update anything on our side, it stays in sync on its own.',
  },
]

export const footerLinks: NavItem[] = [
  { label: 'AI Workforce', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Book a demo', href: '#workforce' },
  { label: 'FAQ', href: '#faq' },
]
