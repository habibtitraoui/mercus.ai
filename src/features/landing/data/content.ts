import {
  ArrowLeftMD,
  ArrowRightMD,
  CheckAll,
  Calendar,
  Chat,
  CloseCircle,
  Building,
  Briefcase,
  Bulb,
  PaperPlane,
  Phone,
  PhoneCall,
  Play,
  Refresh,
  ShoppingCart,
  User,
  UsersGroup,
} from '../components/ui/coolicons'
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
    icon: Building,
  },
  {
    title: 'Service businesses',
    text: 'AI handles inquiries and follow-ups.',
    icon: Briefcase,
  },
  {
    title: 'Ecommerce',
    text: 'AI confirms orders and reduces the boring stuff.',
    icon: ShoppingCart,
  },
  {
    title: 'Restaurants and Clinics',
    text: 'AI handles reservations and messages.',
    icon: Calendar,
  },
]

export const landingUiIcons = {
  play: Play,
  chevronLeft: ArrowLeftMD,
  chevronRight: ArrowRightMD,
} as const

export const testimonials: Testimonial[] = [
  {
    name: 'Xara cosmetic',
    role: 'Founder',
    text: 'Mercus helped us stop losing leads at night. Messages now get answered right away and our team only steps in when needed.',
  },
  {
    name: 'Ousssama Ben Abla',
    role: 'Consultant',
    text: 'The setup was simple, and the handoff felt smooth. It now follows up faster than any assistant we hired before.',
  },
  {
    name: 'Annonymous',
    role: 'Business owner',
    text: 'Our prospects get replies in minutes, not hours. That alone changed the number of people who stayed in the funnel.',
  },
  {
    name: 'Mira Studio',
    role: 'Operations lead',
    text: 'Before Mercus, our team missed weekend enquiries. Now every message gets a fast reply, and booked calls come in far more consistently.',
  },
]

export const faqs = [
  'What is Mercus?',
  'What channels does Mercus support?',
  'How long does setup take?',
  'Can I customize the AI agents?',
  'Do you offer voice and text automation?',
]

export const footerLinks: NavItem[] = [
  { label: 'AI Workforce', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Book a demo', href: '#workforce' },
  { label: 'FAQ', href: '#faq' },
]
