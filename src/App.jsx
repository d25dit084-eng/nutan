import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import WhyChoose from './components/WhyChoose';
import FeaturedProducts from './components/FeaturedProducts';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <WhyChoose />
        <FeaturedProducts />
        <CTASection />
      </main>
      <Footer />

      {/* Global Toast */}
      <div id="global-toast" className="toast" role="status" aria-live="polite" />

      {/* Scroll to Top */}
      <button
        className={`scroll-top${showScrollTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        id="scroll-top-btn"
        title="Back to top"
      >
        ↑
      </button>
    </>
  );
}
