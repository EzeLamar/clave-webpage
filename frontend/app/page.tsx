import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;