// src/components/Contact.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  // URL-encoded address for the map embed
  const address = encodeURIComponent(
    'Narayan Galli, Kangrali KH, Belgaum, Karnataka 590010'
  );

  // Using Google Maps embed with q parameter (no API key required for basic embed)
  // Note: For production, consider getting a free API key to avoid limitations
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1958804.8075634118!2d74.3430031!3d16.4861354!3m2!1i1024!2i768!4f13.1!2m1!1sNarayan%20Galli%20Kangrali%20KH%20Belgaum%20Karnataka%20590010!5e0!3m2!1sen!2sin!4v1772101250140!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-2">Visit us or reach out anytime</p>
        </div>

        {/* Map Section */}
        <div className="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Prathamesh Dairy Location"
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* Address Card */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-blue-600" size={28} />
              <h3 className="font-semibold text-lg">Address</h3>
            </div>
            <p className="text-gray-600">
              Narayan Galli, Kangrali KH,<br />
              Belgaum, Karnataka - 590010
            </p>
          </div>

          {/* Phone Card */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-blue-600" size={28} />
              <h3 className="font-semibold text-lg">Phone</h3>
            </div>
            <p className="text-gray-600">8277700089</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Sat, 8am - 8pm</p>
          </div>

          {/* Email Card */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-blue-600" size={28} />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <p className="text-gray-600 break-all">prathameshpatil528@gmail.com</p>
            <p className="text-sm text-gray-500 mt-1">For orders & inquiries</p>
          </div>
        </div>

        {/* Optional: Add a small note about timing */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <Clock className="inline mr-1" size={16} /> Open Monday–Saturday, 8am–8pm
        </div>
      </div>
    </section>
  );
};

export default Contact;