
"use client";

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { MenuSection } from '@/components/menu-section';
import { CartSidebar } from '@/components/cart-sidebar';
import { OrderForm } from '@/components/order-form';
import { Footer } from '@/components/footer';

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const handleOrderNow = () => {
    // Scroll to menu section
    const menuSection = document.getElementById('menu-section');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsOrderFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onCartClick={handleCartClick} />
      <main>
        <HeroSection onOrderNowClick={handleOrderNow} />
        <div id="menu-section">
          <MenuSection />
        </div>
      </main>
      <Footer />
      
      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Order Form */}
      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
      />
    </div>
  );
}
