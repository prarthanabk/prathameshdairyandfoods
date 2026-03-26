import React from 'react';

const Hero = ({ openOrderModal }) => {
  return (
    <section
      id="home"
      className="relative bg-[#eef5e6] overflow-hidden"
    >

      {/* DESKTOP LOGO (RIGHT SIDE) */}
      <div className="hidden md:flex absolute right-0 top-0 h-full w-1/2 items-center justify-center pointer-events-none">
        <img
          src="/images/pfdlogo1.png"
          alt="logo"
          className="w-[500px] lg:w-[700px] opacity-20 object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[600px]">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Pure Dairy Goodness <br />
            From Our Farm to Your Home
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Fresh, pasteurised milk and pure ghee, crafted with care since 1992.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => openOrderModal()}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Shop Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('process')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Our Process
            </button>
          </div>
        </div>

        {/* MOBILE LOGO (BELOW CONTENT) */}
        <div className="md:hidden mt-10 flex justify-center">
          <img
            src="/images/pfdlogo1.png"
            alt="logo"
            className="w-[280px] opacity-30 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;