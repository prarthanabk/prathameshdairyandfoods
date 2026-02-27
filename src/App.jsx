import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Initialize EmailJS with public key
useEffect(() => {
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
}, []);

  // Refs for scrolling
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);

  const openOrderModal = (productName = '') => {
    setSelectedProduct(productName);
    setIsOrderModalOpen(true);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800">
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToProducts={() => scrollToSection(productsRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProcess={() => scrollToSection(processRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        openOrderModal={openOrderModal}
      />
      <div ref={homeRef}>
        <Hero openOrderModal={openOrderModal} />
      </div>
      <div ref={productsRef}>
        <Products openOrderModal={openOrderModal} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={processRef}>
        <Process />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}

export default App;