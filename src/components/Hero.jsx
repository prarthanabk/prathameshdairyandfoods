import React from 'react';

const Hero = ({ openOrderModal }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden"
    >
      {/* Background image container with fixed height */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero2.1.jpg"
          alt="Dairy farm"
          className="w-full h-full object-cover object-center opacity-80"
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>

      {/* Content container with responsive height */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px]">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Pure Dairy Goodness<br />From Our Farm to Your Home
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Fresh, pasteurised milk and pure ghee, crafted with care since 1992.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => openOrderModal()}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Shop Now
            </button>
            <button
              onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Our Process
            </button>
          </div>
        </div>

        {/* Right image (milk bottle) */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/images/hero-milk.png"
            alt="Fresh milk"
            className="max-h-96 drop-shadow-2xl"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/400x400?text=Prathamesh+Milk')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;