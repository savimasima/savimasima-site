interface PortfolioItem {
  image: string;
  title: string;
  alt: string;
  testId: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1719518411379-dba02901556f?auto=format&fit=crop&w=800&q=80',
    title: 'Editorial Elegance',
    alt: 'Editorial website layout on a laptop screen',
    testId: 'portfolio-item-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1719518411339-5158cea86caf?auto=format&fit=crop&w=800&q=80',
    title: 'Minimalist Interiors',
    alt: 'Minimalist interior design showcased on tablet devices',
    testId: 'portfolio-item-2',
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    title: 'Brand Narrative',
    alt: 'Creative brand visuals arranged on a desk',
    testId: 'portfolio-item-3',
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio" data-testid="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title" data-testid="portfolio-title">
          Selected Works
        </h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="portfolio-item" data-testid={item.testId} key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
