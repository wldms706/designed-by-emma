import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2926] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif italic text-white mb-4">Designed by Emma</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium K-Hair expertise in the heart of Auckland. 20+ years of mastering the art of Korean hair design.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm hover:text-amber-300 transition-colors">About Emma</a>
              <a href="#services" className="block text-sm hover:text-amber-300 transition-colors">Services</a>
              <a href="#gallery" className="block text-sm hover:text-amber-300 transition-colors">Gallery</a>
              <a href="#contact" className="block text-sm hover:text-amber-300 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/designedbyemma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-amber-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @designedbyemma
              </a>
              <p className="text-sm text-gray-400">Auckland Central</p>
              <p className="text-xs text-gray-500">By Appointment Only</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Designed by Emma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
