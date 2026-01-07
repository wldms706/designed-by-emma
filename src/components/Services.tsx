import React from 'react';
import { SERVICES } from '../data/content';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-800 uppercase tracking-[0.3em] text-xs font-bold">Premium Services</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 italic">Signature Offerings</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Every service is a refined craft, designed to honor your natural beauty while elevating your confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 hover:border-amber-200 transition-all duration-500 overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <span className="block text-[10px] uppercase tracking-[0.4em] text-gray-400">{service.title}</span>
                    <p className="text-[8px] text-gray-300 mt-2">Photo coming soon</p>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif italic">{service.title}</h3>
                  <span className="text-amber-800 font-bold text-sm">{service.priceFrom}+</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-6 text-xs uppercase tracking-[0.2em] border-b-2 border-amber-800 pb-1 hover:text-amber-800 transition-colors"
                >
                  Book This Service
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em]">
            All services include complimentary consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
