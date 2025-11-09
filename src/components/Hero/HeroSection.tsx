import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroRef.current) {
        heroRef.current.style.transform = '';
      }
    };
  }, []);

  return (
    <section className="hero" id="home" data-testid="hero-section" ref={heroRef}>
      <div className="hero-overlay" />
      <div className="hero-content fade-in">
        <h1 className="hero-title" data-testid="hero-title">
          Savimasima
        </h1>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          Boutique Web Studio — Belfast
        </p>
        <a
          href="mailto:savimasima@gmail.com"
          className="btn-primary"
          data-testid="hero-cta-button"
        >
          Book a free 20-min call
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
