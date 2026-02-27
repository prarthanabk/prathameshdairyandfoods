import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToHome, scrollToProducts, scrollToAbout, scrollToProcess, scrollToContact, openOrderModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: scrollToHome },
        { id: 'products', ref: scrollToProducts },
        { id: 'about', ref: scrollToAbout },
        { id: 'process', ref: scrollToProcess },
        { id: 'contact', ref: scrollToContact },
      ];
      // Find the section currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', action: scrollToHome },
    { id: 'products', label: 'Products', action: scrollToProducts },
    { id: 'about', label: 'About', action: scrollToAbout },
    { id: 'process', label: 'Process', action: scrollToProcess },
    { id: 'contact', label: 'Contact', action: scrollToContact },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToHome}>
          <span className="text-2xl font-bold text-blue-600">Prathamesh Dairy & Foods</span>
           
          <span className="text-sm text-gray-500">Est. 1992</span>
        </div>



        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`hover:text-blue-600 transition-colors ${
                activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => openOrderModal()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
          >
            Place Order
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { item.action(); setIsOpen(false); }}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { openOrderModal(); setIsOpen(false); }}
            className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;