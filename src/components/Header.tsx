import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home', testId: 'nav-home' },
  { href: '#about', label: 'About', testId: 'nav-about' },
  { href: '#services', label: 'Services', testId: 'nav-services' },
  { href: '#portfolio', label: 'Portfolio', testId: 'nav-portfolio' },
  { href: '#pricing', label: 'Pricing', testId: 'nav-pricing' },
  { href: '#contact', label: 'Contact', testId: 'nav-contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar${isScrolled ? ' scrolled' : ''}`} data-testid="main-navigation">
      <div className="nav-container">
        <a href="#home" className="nav-logo" data-testid="nav-logo">
          Savimasima
        </a>
        <nav className={`nav-menu${isMenuOpen ? ' active' : ''}`} id="navMenu" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              data-testid={link.testId}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:savimasima@gmail.com?subject=Project%20Brief"
            className="btn-outline nav-secondary-cta"
            data-testid="nav-secondary-cta"
            onClick={closeMenu}
          >
            Email me your brief
          </a>
          <a
            href="mailto:savimasima@gmail.com"
            className="btn-primary nav-primary-cta"
            data-testid="nav-primary-cta"
            onClick={closeMenu}
          >
            Book a free 20-min call
          </a>
        </nav>
        <button
          className={`nav-toggle${isMenuOpen ? ' active' : ''}`}
          id="navToggle"
          data-testid="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="navMenu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
