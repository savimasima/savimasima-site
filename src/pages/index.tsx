import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero/HeroSection';
import AboutSection from '../components/About/AboutSection';
import ServicesSection from '../components/Services/ServicesSection';
import PortfolioSection from '../components/Portfolio/PortfolioSection';
import PricingSection from '../components/Pricing/PricingSection';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .service-card, .portfolio-item, .pricing-card'
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
