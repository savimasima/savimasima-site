'use client';

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
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          playsInline
          muted
          loop
          poster="https://images.unsplash.com/photo-1541927634837-a7d5c4892527?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-night-drive-9774/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content fade-in">
        <h1 className="hero-title" data-testid="hero-title">
          Savimasima
        </h1>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          Boutique Web Studio — Belfast
        </p>
        <a href="mailto:savimasima@gmail.com" className="btn-primary" data-testid="hero-cta-button">
          Book a free 20-min call
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
