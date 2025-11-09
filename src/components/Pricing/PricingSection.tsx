import PricingCard from './PricingCard';
import { pricingCards } from './pricingData';

const PricingSection = () => {
  return (
    <section className="pricing" id="pricing" data-testid="pricing-section">
      <div className="pricing-container">
        <h2 className="section-title" data-testid="pricing-title">
          Pricing
        </h2>
        <p className="pricing-subtitle">
          Engagements sized for fast, accessible delivery across React, Next.js, and Webflow.
        </p>
        <div className="pricing-grid">
          {pricingCards.map((card, index) => (
            <PricingCard key={card.title} card={card} isFeatured={index === 1} />
          ))}
        </div>
        <div className="pricing-cta-buttons" data-testid="pricing-cta-group">
          <a href="mailto:savimasima@gmail.com" className="btn-primary">
            Book a free 20-min call
          </a>
          <a
            href="mailto:savimasima@gmail.com?subject=Project%20Brief"
            className="btn-outline"
          >
            Email me your brief
          </a>
        </div>
        <p className="pricing-addons">
          <span>- 10-hour sprint (prepaid) — £400</span>
          <span>- Performance / SEO audit — £250</span>
          <span>- Maintenance retainer — from £300/mo</span>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
