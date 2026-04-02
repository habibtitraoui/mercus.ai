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
  { label: 'Messages unanswered', icon: 'message' },
  { label: 'Leads forgotten', icon: 'userOff' },
  { label: 'Orders not confirmed', icon: 'ban' },
  { label: 'Slow response times', icon: 'slow' },
  { label: 'Calls missed', icon: 'phone' },
]

export const workforceCards: TextCard[] = [
  {
    title: 'Customer Support',
    text: 'Answers questions instantly and keeps service quality consistent.',
    icon: 'headset',
  },
  {
    title: 'Order Confirmation',
    text: 'Confirms orders faster and reduces costly mistakes.',
    icon: 'checkCard',
  },
  {
    title: 'Lead Qualification',
    text: 'Filters and tags prospects so sales teams focus on intent.',
    icon: 'target',
  },
  {
    title: 'Follow-Ups',
    text: 'Stays on every lead automatically until the conversation moves.',
    icon: 'repeat',
  },
  {
    title: 'DM Agent',
    text: 'Replies on Instagram, WhatsApp, Messenger, and your site chat.',
    icon: 'dm',
  },
  {
    title: 'Voice Receptionist',
    text: 'Answers inbound calls around the clock with natural routing.',
    icon: 'receiver',
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
    text: 'AI qualifies property leads and keeps the pipeline warm.',
    icon: 'building',
  },
  {
    title: 'Service businesses',
    text: 'AI handles enquiries and follow-ups without missed opportunities.',
    icon: 'briefcase',
  },
  {
    title: 'Ecommerce',
    text: 'AI confirms orders and reduces the boring support backlog.',
    icon: 'cart',
  },
  {
    title: 'Restaurants and Clinics',
    text: 'AI schedules reservations and messages customers back instantly.',
    icon: 'calendar',
  },
]

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
