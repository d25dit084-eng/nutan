export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero Section">
      {/* Decorative side framing (leaves, citrus, droplets, juice splashes) */}
      <img
        src="/side-decor-transparent.png"
        alt=""
        className="hero-side-decor"
        aria-hidden="true"
        loading="eager"
      />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* LEFT: Hero Content */}
          <div className="hero-content">
            {/* Trust Badge */}
            <div className="hero-badge" aria-label="India's Trusted Beverage Machinery Manufacturer">
              <span className="badge-icon-wrap" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F4511E">
                  <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 16.1l-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L12 2z" />
                </svg>
              </span>
              <span>INDIA'S TRUSTED BEVERAGE MACHINERY MANUFACTURER</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="hero-title-main">Complete Beverage</span>
              <span className="hero-title-accent">
                <span className="word-orange">Machinery</span>{' '}
                <span className="word-green">Solutions</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc">
              From soda machines to complete beverage plants – Nutan Soda
              provides high-quality, reliable and customized machinery solutions
              for your growing business.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#machinery" className="btn-hero-explore" id="explore-machinery-btn">
                <span className="btn-icon-bubble" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#F4511E">
                    <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.36.07-.73.07-1.08s-.03-.73-.07-1.08l2.32-1.82c.21-.17.27-.45.14-.68l-2.2-3.8c-.13-.23-.41-.32-.64-.23l-2.74 1.1c-.57-.44-1.18-.81-1.85-1.09l-.42-2.9C14.05 2.2 13.8 2 13.5 2h-3c-.3 0-.55.2-.59.47l-.42 2.9c-.67.28-1.28.65-1.85 1.09l-2.74-1.1c-.24-.09-.51 0-.64.23l-2.2 3.8c-.14.23-.07.51.14.68l2.32 1.82c-.04.35-.07.73-.07 1.08s.03.73.07 1.08L2.4 13.5c-.21.17-.27.45-.14.68l2.2 3.8c.13.23.41.32.64.23l2.74-1.1c.57.44 1.18.81 1.85 1.09l.42 2.9c.04.27.29.47.59.47h3c.3 0 .55-.2.59-.47l.42-2.9c.67-.28 1.28-.65 1.85-1.09l2.74 1.1c.24.09.51 0 .64-.23l2.2-3.8c.14-.23.07-.51-.14-.68l-2.32-1.82z" />
                  </svg>
                </span>
                <span>Explore Machinery</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>

              <a href="#contact" className="btn-hero-quote" id="request-quote-hero-btn">
                <span className="quote-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#65B82E">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </span>
                <span>Request a Quote</span>
              </a>
            </div>

            {/* 3 Green Pillars */}
            <div className="hero-pillars">
              <div className="hero-pillar">
                <div className="pillar-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65B82E" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <strong>Premium Quality</strong>
                  <small>Machinery</small>
                </div>
              </div>

              <div className="hero-pillar">
                <div className="pillar-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65B82E" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <strong>Custom Solutions</strong>
                  <small>For Your Business</small>
                </div>
              </div>

              <div className="hero-pillar">
                <div className="pillar-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#65B82E" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8c-1.66 0-3 1.34-3 3 0 2.25 3 5 3 5s3-2.75 3-5c0-1.66-1.34-3-3-3z" />
                  </svg>
                </div>
                <div className="pillar-text">
                  <strong>Pan India</strong>
                  <small>Support</small>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Machinery with Platform & Script Text */}
          <div className="hero-showcase">
            <div className="hero-script-slogan" aria-hidden="true">
              Machines<br />
              That Bring<br />
              <em>Refreshment</em><br />
              to Life
            </div>
            <img
              src="/hero-machinery-transparent.png"
              alt="Nutan Soda complete beverage machinery lineup with soda dispensers, bottle filling plants, coolers and ice cream machines"
              className="hero-machinery-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
