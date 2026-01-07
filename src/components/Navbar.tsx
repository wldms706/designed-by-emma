import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-serif italic">Designed by Emma</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors">About</a>
            <a href="#services" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors">Services</a>
            <a href="#gallery" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors">Gallery</a>
            <a href="#contact" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors">Contact</a>
            <a
              href="https://www.instagram.com/designedbyemma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-amber-800 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#about" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#gallery" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#contact" className="text-xs uppercase tracking-[0.2em] hover:text-amber-800 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <a
              href="https://www.instagram.com/designedbyemma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-amber-800 transition-colors text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
