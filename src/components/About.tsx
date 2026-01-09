import React from 'react';
import { EMMA_BIO } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-amber-800 uppercase tracking-[0.3em] text-xs font-bold">About Emma</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 italic">{EMMA_BIO.experience}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {EMMA_BIO.philosophy}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {EMMA_BIO.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-800"></div>
                  <span className="text-xs uppercase tracking-[0.2em]">{specialty}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{EMMA_BIO.location}</span>
              </div>

              {/* Career History */}
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-4 font-bold">Career Highlights</h3>
                <div className="space-y-3">
                  {EMMA_BIO.career.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-xs text-amber-800 font-semibold min-w-[45px]">{item.year}</span>
                      <span className="text-xs text-gray-600">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-amber-800 mb-4 font-bold">Certifications & Training</h3>
                <div className="grid grid-cols-1 gap-2">
                  {EMMA_BIO.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg className="w-3 h-3 text-amber-800 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[11px] text-gray-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 aspect-square bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
            <img
              src="/images/profile.png"
              alt="Emma - K-Hair Specialist"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Designer Working Photos Section */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif italic mb-4">Leading Professional in K-Beauty Hair</h3>
            <p className="text-sm text-gray-600 tracking-wide">Pioneering Excellence in Korean Hair Artistry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-100">
              <img
                src="/images/designer1.jpg"
                alt="Emma at work - Professional K-Hair styling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-100">
              <img
                src="/images/designer2.jpg"
                alt="Emma providing premium hair treatment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
