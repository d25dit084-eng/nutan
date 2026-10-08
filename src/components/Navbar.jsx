import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'machinery', 'categories', 'about', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Machinery', href: '#machinery', id: 'machinery' },
    { label: 'Categories', href: '#categories', id: 'categories' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="banner"
      id="main-navbar"
    >
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo" aria-label="Nutan Soda Home" id="nav-logo">
            <img
              src="/nutan-soda-logo.png"
              alt="Nutan Soda Logo"
              className="nav-logo-img"
              loading="eager"
            />
          </a>

          {/* Navigation Links */}
          <nav className="nav-menu" role="navigation" aria-label="Main Navigation">
            <ul className="nav-links" role="menubar">
              {navLinks.map((link) => (
                <li key={link.id} role="none">
                  <a
                    href={link.href}
                    className={`nav-link${activeLink === link.id ? ' active' : ''}`}
                    role="menuitem"
                    id={`nav-link-${link.id}`}
                    onClick={() => setActiveLink(link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Phone, WhatsApp, Quotation CTA */}
          <div className="nav-actions">
            {/* Phone Block */}
            <a href="tel:+919909012345" className="nav-contact-item" id="nav-phone-link" aria-label="Call Nutan Soda at +91 99090 12345">
              <span className="nav-icon-wrap phone-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#F4511E">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </span>
              <span className="nav-contact-meta">
                <strong className="contact-number">+91 99090 12345</strong>
                <small className="contact-label">Call Us Now</small>
              </span>
            </a>

            {/* Vertical Divider */}
            <span className="nav-divider" aria-hidden="true" />

            {/* WhatsApp Block */}
            <a
              href="https://wa.me/919909012345"
              className="nav-contact-item"
              id="whatsapp-nav-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Quick Enquiry"
            >
              <span className="nav-icon-wrap whatsapp-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.815 11.815 0 018.413 3.48A11.821 11.821 0 0123.943 11.893c-.003 6.558-5.338 11.893-11.893 11.893h-.005a11.882 11.882 0 01-5.683-1.448L.057 24zm6.54-4.835l.374.222a9.86 9.86 0 005.082 1.407h.004c5.448 0 9.882-4.434 9.885-9.884.002-2.64-1.026-5.122-2.893-6.994A9.825 9.825 0 0012.05 1.996C6.598 1.996 2.164 6.43 2.161 11.88c-.001 1.868.517 3.693 1.5 5.275l.244.39-1 3.652 3.692-.968z"/>
                </svg>
              </span>
              <span className="nav-contact-meta">
                <strong className="contact-number">WhatsApp</strong>
                <small className="contact-label">Quick Enquiry</small>
              </span>
            </a>

            {/* Get a Quotation CTA */}
            <a
              href="#contact"
              className="nav-quote-btn"
              id="get-quote-nav-btn"
              aria-label="Get a Quotation"
            >
              <span className="btn-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </span>
              Get a Quotation
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
