import React from 'react';
import { Award, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/aboutus.jpg"
              alt="Our farm"
              className="rounded-2xl shadow-xl w-full"
              onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Our+Farm'}
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-blue-600" size={36} />
              <span className="text-2xl font-semibold text-blue-600">Est. 1992</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              At Prathamesh Milk Dairy, we believe in freshness, purity, and trust—values that have guided our family for over 35 years. What started as a humble milk collection business has grown into a modern, ethically-run dairy delivering premium quality milk and dairy products every day.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our farm is a model of ethical animal care and sustainable dairy practices. Every cow and buffalo is raised with compassion, clean surroundings, and nutritious feed, ensuring that every drop of milk is rich, wholesome, and naturally fresh.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We are committed to delivering milk that is fresh, pure, and safe. Every
batch is pasteurised under strict hygiene standards, ensuring that our milk
reaches hotels, hospitals, and homes with the same quality and care that we
uphold on our farm.
            </p>
             <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            At Prathamesh Milk Dairy, we combine traditional values with modern
hygiene standards, ethical practices, and scientific methods to provide dairy
that is not only fresh but safe, healthy, and delicious.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            From our farm to your table, we promise dairy products that are natural,
nutritious, and full of goodness.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Shield className="text-blue-600" size={24} />
                <span>Hygienic</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-blue-600" size={24} />
                <span>Ethical</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;