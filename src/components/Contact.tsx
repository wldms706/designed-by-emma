import React from 'react';
import { BUSINESS_INFO } from '../data/content';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-amber-800 uppercase tracking-[0.3em] text-xs font-bold">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 italic">Book Your Experience</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're seeking a transformative perm, restorative clinic treatment, or a signature color,
              Emma is here to bring your vision to life. Reach out to schedule your consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] mb-1">Location</h3>
                  <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-800 hover:underline mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] mb-1">Hours</h3>
                  <p className="text-gray-600">{BUSINESS_INFO.hours.regular}</p>
                  <p className="text-xs text-gray-400 mt-1">Closed: {BUSINESS_INFO.hours.closed}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em] mb-1">Instagram</h3>
                  <a
                    href={BUSINESS_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 hover:underline"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                  <p className="text-xs text-gray-400 mt-1">DM for bookings & inquiries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF9F6] p-8 md:p-12">
            <h3 className="text-2xl font-serif italic mb-6">Send a Message</h3>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Ready to transform your hair? Send Emma a direct message on Instagram to book your appointment or ask any questions.
              </p>

              <a
                href="https://ig.me/m/designedby.emma.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-amber-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-amber-800 transition-colors text-center"
              >
                Send Instagram Message
              </a>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 text-center">Or scan WhatsApp QR Code</p>
                <div className="flex justify-center">
                  <img
                    src="/images/whatsapp-qr.png"
                    alt="WhatsApp QR Code for Designed by Emma"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">What to include in your message:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span>Your name and preferred contact method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span>Service you're interested in (Perm, Clinic, Cut, or Color)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span>Your hair goals and any reference photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span>Preferred appointment dates and times</span>
                  </li>
                </ul>
              </div>

              <p className="text-[10px] text-gray-400 text-center pt-4">
                Emma typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
