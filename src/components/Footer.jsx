// src/components/Footer.jsx
import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'; // Twitter removed

const Footer = () => {
  return (
    <footer className="relative text-gray-800 pt-20 overflow-hidden">
      {/* Background image covering the top part (grid area) */}
      <div className="absolute inset-0 z-0" style={{ height: 'calc(100% - 80px)' }}> 
        <img
          src="/images/pfdfooter.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg inline-block mb-2">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl font-bold text-blue-600 drop-shadow-md">Prathamesh</span>
                <span className="text-sm text-gray-800 drop-shadow-md">Est. 1992</span>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed drop-shadow-md max-w-xs">
                From our farm to your home – delivering pure, fresh dairy goodness since three generations.
              </p>
            </div>
            {/* Social Icons - moved upward with negative margin */}
            <div className="flex space-x-4 -mt-2">
              <button
                className="p-2 rounded-full border border-gray-400 hover:border-blue-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-gray-700" />
              </button>
              <button
                className="p-2 rounded-full border border-gray-400 hover:border-blue-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 drop-shadow-md">Quick Links</h3>
            <ul className="space-y-2 text-gray-800">
              <li><a href="#home" className="hover:text-blue-600 transition drop-shadow-md">Home</a></li>
              <li><a href="#products" className="hover:text-blue-600 transition drop-shadow-md">Products</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition drop-shadow-md">About Us</a></li>
              <li><a href="#process" className="hover:text-blue-600 transition drop-shadow-md">Our Process</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition drop-shadow-md">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 drop-shadow-md">Get In Touch</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-blue-600 drop-shadow-md" />
                <span className="drop-shadow-md">Narayan Galli, Kangrali KH, Belgaum, Karnataka - 590010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-blue-600 drop-shadow-md" />
                <span className="drop-shadow-md">8277700089</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-blue-600 drop-shadow-md" />
                <span className="drop-shadow-md">prathameshpatil528@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 text-blue-600 drop-shadow-md" />
                <span className="drop-shadow-md">Mon-Sat: 8am - 8pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Tagline */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 drop-shadow-md">Farm Fresh Promise</h3>
            <p className="text-gray-800 text-sm mb-4 drop-shadow-md">
              Subscribe to receive updates on fresh arrivals and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white bg-opacity-80 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Solid light green band at the bottom - taller for better visibility */}
      <div className="bg-[#8BC34A] text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base font-medium">
            &copy; {new Date().getFullYear()} Prathamesh Dairy & Foods. All rights reserved. Crafted with ❤️ in Belgaum | Freshness since 1992.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;