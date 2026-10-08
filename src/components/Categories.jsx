const CATEGORIES = [
  {
    id: 'soda-machines',
    title: 'Soda Machines',
    desc: 'High performance soda dispensing machines',
    img: '/cat-soda.png',
    theme: 'orange',
    accent: '#F4511E',
  },
  {
    id: 'filling-sealing',
    title: 'Filling & Sealing',
    desc: 'Automatic filling and sealing solutions',
    img: '/cat-filling.png',
    theme: 'green',
    accent: '#65B82E',
  },
  {
    id: 'refrigeration-display',
    title: 'Refrigeration & Display',
    desc: 'Coolers and display solutions for beverages',
    img: '/cat-cooler.png',
    theme: 'orange',
    accent: '#F4511E',
  },
  {
    id: 'ice-cream-machines',
    title: 'Ice Cream Machines',
    desc: 'Softy & ice cream making machines',
    img: '/cat-softy.png',
    theme: 'green',
    accent: '#65B82E',
  },
  {
    id: 'complete-plants',
    title: 'Complete Plants',
    desc: 'End-to-end beverage production plants',
    img: '/cat-plant.png',
    theme: 'orange',
    accent: '#F4511E',
  },
];

export default function Categories() {
  return (
    <section className="categories-section" id="categories" aria-label="Browse by Category">
      <div className="container">
        {/* Header Row */}
        <div className="section-head-bar">
          <div className="head-text-group">
            <span className="eyebrow-tag">OUR MACHINERY RANGE</span>
            <h2 className="section-heading">
              Browse by <span className="cat-text-orange">Cat</span><span className="cat-text-green">egory</span>
            </h2>
            <p className="head-subtitle">
              Explore our wide range of beverage and food processing machinery designed
              for quality, performance and long-term reliability.
            </p>
          </div>
          <a
            href="#machinery"
            className="btn-view-all"
            id="view-all-categories-btn"
            aria-label="View All Categories"
          >
            <span>View All Categories</span>
            <span className="arrow-sym" aria-hidden="true">→</span>
          </a>
        </div>

        {/* 5 Horizontal Cards in 1 Row */}
        <div className="category-cards-row">
          {CATEGORIES.map((cat) => (
            <a
              href={`#${cat.id}`}
              className={`category-item-card theme-${cat.theme}`}
              key={cat.id}
              id={`cat-card-${cat.id}`}
              aria-label={`${cat.title}: ${cat.desc}`}
            >
              <div className="cat-thumbnail">
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="cat-thumb-img"
                />
              </div>
              <div className="cat-details">
                <h3 className="cat-name">{cat.title}</h3>
                <p className="cat-summary">{cat.desc}</p>
                <div className={`cat-action-circle bg-${cat.theme}`} aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
