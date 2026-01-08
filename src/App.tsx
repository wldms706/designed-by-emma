import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative antialiased selection:bg-amber-100 selection:text-amber-900 bg-[#FAF9F6]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        {/* Signature Perm Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-amber-800 uppercase tracking-[0.3em] text-xs font-bold">Signature Service</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 italic">Korean Perm Excellence</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Do you desire voluminous curling? Transform your hair into luxurious, bouncy waves while maintaining natural shine and minimizing damage.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our premium Korean perm technique creates elegant, sophisticated waves that enhance your natural beauty with a high-end, graceful finish.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-100 hover:border-amber-200 transition-all duration-500 group">
                <img
                  src="/images/perm1.jpg"
                  alt="Voluminous Korean Perm Style"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-100 hover:border-amber-200 transition-all duration-500 group">
                <img
                  src="/images/perm2.jpg"
                  alt="Natural Wave Perm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border border-gray-100 hover:border-amber-200 transition-all duration-500 group">
                <img
                  src="/images/perm3.jpg"
                  alt="Elegant Bouncy Curls"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-block text-sm uppercase tracking-[0.2em] border-2 border-amber-800 px-8 py-3 hover:bg-amber-800 hover:text-white transition-all duration-300"
              >
                Book Your Perm Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section id="gallery" className="py-24 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-amber-800 uppercase tracking-[0.3em] text-xs font-bold">Recent Work</span>
                <h2 className="text-4xl md:text-5xl font-serif mt-4 italic">The Art of Hair</h2>
              </div>
              <a
                href="https://www.instagram.com/designedby.emma.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold border-b-2 border-amber-800 pb-2 mb-2 uppercase tracking-[0.2em] hover:text-amber-800 transition-colors"
              >
                Follow @designedby.emma.nz
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {/* Color Photos */}
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/color1.jpg" alt="Signature Brown Color 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/color2.jpg" alt="Signature Brown Color 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>

              {/* Clinic Photos */}
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/clinic1.jpg" alt="Premium Clinic Treatment 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/clinic2.jpg" alt="Premium Clinic Treatment 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>

              {/* Cut Photo */}
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/cut1.jpg" alt="Designer Cut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>

              {/* Additional Style Photos */}
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/style1.jpg" alt="Premium Hair Style 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/style2.jpg" alt="Premium Hair Style 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              <div className="aspect-square overflow-hidden bg-[#FAF9F6] border border-gray-50 hover:border-amber-200 transition-all duration-700 group cursor-pointer relative">
                <img src="/images/style3.jpg" alt="Premium Hair Style 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
            </div>
            <p className="text-center mt-12 text-[10px] text-gray-400 uppercase tracking-[0.3em]">More images coming soon</p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
