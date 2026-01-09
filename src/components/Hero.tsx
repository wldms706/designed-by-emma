import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF9F6] via-[#F3F1ED] to-[#E8E5DF] pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif mt-6 mb-6 leading-tight">
          Not Every Salon Can Do K-Hair Properly.<br />
          <span className="italic">This one was built by a Korean master.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
          20+ years of refined Korean hair artistry.
        </p>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Signature perms, designer cuts, clinic treatments, and brown colors made for your skin tone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 bg-amber-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-amber-800 transition-colors"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-amber-900 text-amber-900 text-xs uppercase tracking-[0.2em] hover:bg-amber-900 hover:text-white transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-[8px] uppercase tracking-[0.3em]">Scroll Down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
