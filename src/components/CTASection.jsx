export default function CTASection() {
  const showToast = (msg) => {
    const t = document.getElementById('global-toast');
    if (t) {
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2800);
    }
  };

  return (
    <section className="cta-section" id="contact" aria-label="Get a Free Quote">
      <div className="container">
        <div className="cta-inner">
          <div className="section-tag" style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
            🚀 Get Started Today
          </div>
          <h2 className="cta-title">
            Ready to Grow Your <span>Beverage Business?</span>
          </h2>
          <p className="cta-desc">
            Talk to our experts and get a customized machinery solution tailored
            to your business requirements and budget.
          </p>
          <div className="cta-btns">
            <a href="tel:+919909012345" className="btn-cta-primary" id="cta-call-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Now: +91 99090 12345
            </a>
            <a
              href="https://wa.me/919909012345"
              className="btn-cta-secondary"
              id="cta-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Quick Contact Form */}
          <div
            style={{
              marginTop: 48,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 20,
              padding: '36px 40px',
              maxWidth: 720,
              margin: '40px auto 0',
              textAlign: 'left',
            }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: 'white', marginBottom: 24 }}>
              Request a Free Quote
            </h3>
            <form
              id="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast('✅ Request submitted! We will contact you shortly.');
                e.target.reset();
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <input
                  id="name-input"
                  type="text"
                  placeholder="Full Name"
                  required
                  style={inputStyle}
                />
                <input
                  id="phone-input"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  style={inputStyle}
                />
              </div>
              <select id="machinery-select" style={{ ...inputStyle, width: '100%', marginBottom: 16 }}>
                <option value="">Select Machinery Type</option>
                <option value="soda">Soda Dispensing Machine</option>
                <option value="filling">Bottle Filling Machine</option>
                <option value="capping">Capping & Sealing Machine</option>
                <option value="refrigeration">Refrigeration & Display</option>
                <option value="ice-cream">Ice Cream Machine</option>
                <option value="complete-plant">Complete Beverage Plant</option>
              </select>
              <textarea
                id="message-input"
                placeholder="Tell us about your requirements..."
                rows={3}
                style={{ ...inputStyle, width: '100%', resize: 'vertical', marginBottom: 20 }}
              />
              <button
                type="submit"
                id="submit-quote-btn"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: '#F4511E',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  borderRadius: 8,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#FF5A20')}
                onMouseLeave={(e) => (e.target.style.background = '#F4511E')}
              >
                Submit Request →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  display: 'block',
  padding: '11px 14px',
  borderRadius: 8,
  border: '1.5px solid rgba(255,255,255,0.2)',
  fontSize: '0.88rem',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
  width: '100%',
};
