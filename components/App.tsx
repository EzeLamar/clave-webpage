'use client'

import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import ProductsSection from './ProductsSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

export function App() {
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
  )
} 