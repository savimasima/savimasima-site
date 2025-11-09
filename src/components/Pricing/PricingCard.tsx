import { Check } from 'lucide-react';
import type { PricingCard as PricingCardType } from './pricingData';

type PricingCardProps = {
  card: PricingCardType;
  isFeatured?: boolean;
};

const PricingCard = ({ card, isFeatured }: PricingCardProps) => {
  return (
    <div className={`pricing-card${isFeatured ? ' featured' : ''} fade-in`}>
      {isFeatured ? <span className="featured-badge">Popular</span> : null}
      <h3>{card.title}</h3>
      {card.subline ? <p className="pricing-subline-text">{card.subline}</p> : null}
      <ul className="pricing-features">
        {card.bullets.map((bullet) => (
          <li key={bullet}>
            <Check aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {card.timeline ? <p className="pricing-timeline">{card.timeline}</p> : null}
      {card.note ? <p className="pricing-note">{card.note}</p> : null}
      <a href={card.ctaHref} className="btn-primary pricing-card-cta">
        {card.ctaLabel}
      </a>
    </div>
  );
};

export default PricingCard;
