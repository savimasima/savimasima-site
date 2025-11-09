export type PricingCard = {
  title: string;
  subline?: string;
  bullets: string[];
  timeline?: string;
  ctaLabel: string;
  ctaHref: string;
  note?: string;
};

export const pricingCards: PricingCard[] = [
  {
    title: 'Hourly Development — £45/h',
    subline: 'Best for: ongoing tasks, fixes, minor features.',
    bullets: [
      'React/Next.js, Webflow, WordPress',
      'Stripe/OpenAI integrations',
      'Performance & accessibility',
      'Quick iterations + deploy help',
    ],
    ctaLabel: 'Book hours',
    ctaHref: 'mailto:savimasima@gmail.com?subject=Book%20development%20hours',
    note: 'Add-on: 10-hour sprint (prepaid) — £400',
  },
  {
    title: 'Landing / Mini-site — from £500',
    subline: 'Best for: a fast one-pager or portfolio that loads fast.',
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
    title: 'CMS / Business Site — from £1,000',
    subline: 'Best for: content sites and small businesses needing structure and growth.',
    bullets: [
      'Webflow CMS / WordPress',
      'Collections & filters',
      'Forms + basic automations',
      'Performance & SEO setup',
      'Domain + SSL, handover',
    ],
    timeline: 'Timeline: 1–3 weeks',
    ctaLabel: 'Get a tailored quote',
    ctaHref: 'mailto:savimasima@gmail.com?subject=CMS%20or%20business%20site%20enquiry',
  },
  {
    title: 'React/Next Feature — from £2,500',
    subline: 'Best for: a functional module or mini-app inside your product/site.',
    bullets: [
      'Component architecture',
      'Integrations (Stripe / OpenAI / REST)',
      'Basic tests + deploy',
      'Short documentation',
    ],
    timeline: 'Timeline: 1–3 weeks',
    ctaLabel: 'Discuss your feature',
    ctaHref: 'mailto:savimasima@gmail.com?subject=React%20or%20Next.js%20feature%20project',
  },
];
