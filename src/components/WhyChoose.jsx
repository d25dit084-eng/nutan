const WHY_ITEMS = [
  {
    id: 'reliable-engineering',
    title: 'Reliable Engineering',
    desc: 'Durable and high-performance machinery built for long-term use.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    desc: 'Tailored machinery as per your business needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: 'quality-components',
    title: 'Quality Components',
    desc: 'We use premium grade components for maximum reliability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: 'after-sales-support',
    title: 'After-Sales Support',
    desc: 'Dedicated support team for installation, training and service.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="2">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section" id="about" aria-label="Why Choose Nutan Soda">
      <div className="container">
        <div className="why-row-container">
          {/* Left Title Block outside the card */}
          <div className="why-head-column">
            <span className="why-tag">OUR ADVANTAGES</span>
            <h2 className="why-main-title">
              Why Choose<br />
              <span className="why-brand-orange">Nutan </span>
              <span className="why-brand-green">Soda?</span>
            </h2>
          </div>

          {/* Right 4 Pillars in single white rounded card */}
          <div className="why-banner-card">
            {WHY_ITEMS.map((item) => (
              <div className="why-pillar-item" key={item.id} id={`why-${item.id}`}>
                <div className="why-pillar-icon-wrap" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="why-pillar-body">
                  <h3 className="why-pillar-title">{item.title}</h3>
                  <p className="why-pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
