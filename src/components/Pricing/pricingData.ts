export type PricingCard = {
  title: string;
  subline?: string;
  price?: string;
  period?: string;
  bullets: string[];
  timeline?: string;
  ctaLabel: string;
  ctaHref: string;
  note?: string;
};

export const pricingCards: PricingCard[] = [
  {
    title: 'Hourly Development',
    price: '£45',
    period: '/hour',
    subline: 'Best for: ongoing tasks, fixes, and micro-features.',
    bullets: [
      'React/Next.js, Webflow, WordPress',
      'Stripe/OpenAI integrations',
      'Performance & accessibility',
      'Quick iterations + deploy help',
    ],
    ctaLabel: 'Book hours',
    ctaHref: 'mailto:savimasima@gmail.com?subject=Book%20development%20hours',
    note: '10-hour Sprint (prepaid) — £400',
  },
  {
    title: 'Landing / Mini-site',
    price: '£500',
    period: 'from',
    subline: 'Best for: fast one-pager or portfolio.',
    bullets: [
      'Responsive, semantic build',
      'Light animations',
      'GA4 + basic SEO meta',
      'Deploy (Vercel/Webflow)',
    ],
    timeline: 'Timeline: 3–7 days',
    ctaLabel: 'Start your landing',
    ctaHref: 'mailto:savimasima@gmail.com?subject=Landing%20or%20mini-site%20project',
  },
  {
    title: 'CMS / Business Site',
    price: '£1,000',
    period: 'from',
    subline: 'Best for: content sites and small businesses needing structure and growth.',
    bullets: [
      'Webflow CMS / WordPress',
      'Collections & filters',
      'Forms + automations',
      'Performance & SEO setup',
      'Domain + SSL, handover',
    ],
    timeline: 'Timeline: 1–3 weeks',
    ctaLabel: 'Get a tailored quote',
    ctaHref: 'mailto:savimasima@gmail.com?subject=CMS%20or%20business%20site%20enquiry',
  },
  {
    title: 'React/Next Feature',
    price: '£2,500',
    period: 'from',
    subline: 'Best for: functional modules or mini-apps.',
    bullets: [
      'Component architecture',
      'Stripe / OpenAI / REST integrations',
      'Basic tests + deploy',
      'Short documentation',
    ],
    timeline: 'Timeline: 1–3 weeks',
    ctaLabel: 'Discuss your feature',
    ctaHref: 'mailto:savimasima@gmail.com?subject=React%20or%20Next.js%20feature%20project',
  },
];