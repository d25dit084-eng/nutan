const FEATURED_PRODUCTS = [
  {
    id: 'soda-dispensing-machine',
    title: 'Soda Dispensing Machine',
    subtitle: 'Multiple Flavour Options',
    img: '/prod-soda.png',
    theme: 'orange',
  },
  {
    id: 'automatic-bottle-filling-machine',
    title: 'Automatic Bottle Filling Machine',
    subtitle: 'High Speed & Accurate Filling',
    img: '/prod-filling.png',
    theme: 'green',
  },
  {
    id: 'capping-sealing-machine',
    title: 'Capping & Sealing Machine',
    subtitle: 'Reliable & Efficient Sealing',
    img: '/prod-capping.png',
    theme: 'orange',
  },
  {
    id: 'beverage-display-cooler',
    title: 'Beverage Display Cooler',
    subtitle: 'Attractive & Energy Efficient',
    img: '/prod-cooler.png',
    theme: 'green',
  },
  {
    id: 'softy-ice-cream-machine',
    title: 'Softy Ice Cream Machine',
    subtitle: 'Perfect for Your Business',
    img: '/prod-softy.png',
    theme: 'orange',
  },
  {
    id: 'complete-beverage-plant',
    title: 'Complete Beverage Plant',
    subtitle: 'End-to-End Solution',
    img: '/prod-plant.png',
    theme: 'green',
  },
];

export default function FeaturedProducts() {
  const showToast = (name) => {
    const toast = document.getElementById('global-toast');
    if (toast) {
      toast.textContent = `Inquiring about ${name} — Quotation form ready below!`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2800);
    }
    const cta = document.getElementById('contact');
    if (cta) cta.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="featured-section" id="machinery" aria-label="Our Featured Machinery">
      <div className="container">
        {/* Header Row */}
        <div className="section-head-bar">
          <div className="head-text-group">
            <span className="eyebrow-tag tag-orange">FEATURED PRODUCTS</span>
            <h2 className="section-heading">
              Our Featured <span className="cat-text-orange">Mach</span><span className="cat-text-green">inery</span>
            </h2>
            <p className="head-subtitle">
              High quality, reliable and efficient machinery for your beverage business.
              Explore our most popular products.
            </p>
          </div>
          <a
            href="#categories"
            className="btn-view-all"
            id="view-all-products-btn"
            aria-label="View All Products"
          >
            <span>View All Products</span>
            <span className="arrow-sym" aria-hidden="true">→</span>
          </a>
        </div>

        {/* 6 Products Grid (1 Row across desktop) */}
        <div className="products-card-row">
          {FEATURED_PRODUCTS.map((prod) => (
            <article
              className="product-showcase-card"
              key={prod.id}
              id={`product-card-${prod.id}`}
            >
              <div className="product-image-container">
                <img
                  src={prod.img}
                  alt={prod.title}
                  loading="lazy"
                  className="product-card-img"
                />
              </div>
              <div className="product-meta">
                <h3 className="product-heading">{prod.title}</h3>
                <p className="product-subtext">{prod.subtitle}</p>
                <button
                  type="button"
                  className={`btn-details theme-${prod.theme}`}
                  id={`details-btn-${prod.id}`}
                  onClick={() => showToast(prod.title)}
                  aria-label={`View Details for ${prod.title}`}
                >
                  <span>View Details</span>
                  <span className="arrow-sym" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
