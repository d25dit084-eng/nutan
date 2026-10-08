export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Categories', href: '#categories' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const machines = [
    'Soda Machines',
    'Filling & Sealing',
    'Refrigeration & Display',
    'Ice Cream Machines',
    'Capping Machines',
    'Complete Plants',
  ];

  return (
    <footer className="footer" id="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <img
              src="/nutan-soda-logo.png"
              alt="Nutan Soda Logo"
              className="footer-logo-img"
              loading="lazy"
            />
            <p className="footer-desc">
              India's trusted beverage machinery manufacturer. From soda machines to
              complete beverage plants — we deliver quality, reliability, and innovation.
            </p>
            <div className="footer-socials" aria-label="Social Media Links">
              {[
                { icon: 'f', label: 'Facebook', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
                { icon: '▶', label: 'YouTube', href: '#' },
                { icon: 'in', label: 'LinkedIn', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-links" aria-label="Quick navigation">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Our Machines */}
          <div>
            <h3 className="footer-heading">Our Machines</h3>
            <nav className="footer-links" aria-label="Machinery categories">
              {machines.map((m) => (
                <a key={m} href="#categories" className="footer-link">{m}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div>
              {[
                {
                  icon: '📞',
                  label: 'Phone',
                  detail: '+91 99090 12345',
                  sub: 'Mon–Sat: 9AM–7PM',
                },
                {
                  icon: '💬',
                  label: 'WhatsApp',
                  detail: '+91 99090 12345',
                  sub: 'Quick Enquiry',
                },
                {
                  icon: '✉️',
                  label: 'Email',
                  detail: 'info@nutansoda.com',
                  sub: null,
                },
                {
                  icon: '📍',
                  label: 'Address',
                  detail: 'Gujarat, India',
                  sub: 'Pan India Delivery',
                },
              ].map((c) => (
                <div className="footer-contact-item" key={c.label}>
                  <div className="footer-contact-icon" aria-hidden="true">{c.icon}</div>
                  <div className="footer-contact-text">
                    <strong>{c.label}</strong>
                    {c.detail}
                    {c.sub && <><br /><span style={{ fontSize: '0.74rem', opacity: 0.7 }}>{c.sub}</span></>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2024 <span>Nutan Soda</span>. All rights reserved. Made with ❤️ in India.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">ISO Certified</span>
            <span className="footer-badge">Pan India Support</span>
            <span className="footer-badge">15+ Years</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
