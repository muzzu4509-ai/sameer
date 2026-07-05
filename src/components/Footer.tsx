/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scissors, Phone, MapPin, Clock, Instagram, Facebook, Youtube, Send, ArrowUp, Heart } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-[#030303] border-t border-neutral-900 pt-16 pb-8 overflow-hidden">
      {/* Subtle bottom decorative glow */}
      <div className="absolute bottom-0 right-1/4 w-88 h-88 rounded-full bg-gold-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900 text-left">
          
          {/* Logo & Info column (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="p-2 bg-neutral-950 border border-gold-500 rounded-none group-hover:border-gold-400 transition-all">
                <Scissors className="w-5 h-5 text-gold-500 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-[0.2em] text-white uppercase">
                  THE NEXT CUT
                </span>
                <span className="text-[9px] font-sans tracking-[0.34em] uppercase text-gold-500 font-semibold">
                  Unisex Luxury Salon
                </span>
              </div>
            </a>

            <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
              Elevating the art of grooming and self-care in Nizamabad. We fuse global style trends with absolute sanitization and warm hospitality.
            </p>

            {/* Social channels */}
            <div className="flex items-center space-x-3.5 pt-2">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/thenextcut_nzb', name: 'Instagram' },
                { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com/thenextcut_nzb', name: 'Facebook' },
                { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com', name: 'YouTube' }
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-none bg-[#1A1A1A] hover:bg-gold-500 hover:text-black border border-white/5 text-gray-400 transition-all duration-300"
                  title={soc.name}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (Cols 5-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs text-white font-display font-bold tracking-widest uppercase">
              Quick Navigation
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-medium text-gray-400">
              <a href="#home" className="hover:text-gold-500 transition">Home Base</a>
              <a href="#about" className="hover:text-gold-500 transition">About Studio</a>
              <a href="#services" className="hover:text-gold-500 transition">Salon Services</a>
              <a href="#why-us" className="hover:text-gold-500 transition">Why Choose Us</a>
              <a href="#team" className="hover:text-gold-500 transition">Styling Team</a>
              <a href="#gallery" className="hover:text-gold-500 transition">Image Portfolio</a>
              <a href="#testimonials" className="hover:text-gold-500 transition">Guest Reviews</a>
              <a href="#contact" className="hover:text-gold-500 transition">Contact Info</a>
            </div>
          </div>

          {/* Core Services Column (Cols 8-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs text-white font-display font-bold tracking-widest uppercase">
              Core Services
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-gray-400">
              <a href="#services" className="hover:text-gold-500 transition">Precision Haircut</a>
              <a href="#services" className="hover:text-gold-500 transition">Red Carpet Styling</a>
              <a href="#services" className="hover:text-gold-500 transition">Beard Alignment</a>
              <a href="#services" className="hover:text-gold-500 transition">Deep Hair Spa Treatment</a>
              <a href="#services" className="hover:text-gold-500 transition">Gold Facials & Skincare</a>
              <a href="#services" className="hover:text-gold-500 transition">HD Bridal Makeup Artistry</a>
              <a href="#services" className="hover:text-gold-500 transition">Smoothening & Keratin</a>
            </div>
          </div>

          {/* Newsletter subscription (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs text-white font-display font-bold tracking-widest uppercase">
              Salon Journal
            </h4>
            <p className="text-gray-400 font-sans text-xs font-light leading-relaxed">
              Subscribe to receive style catalogs, festive beauty discounts, and early slot availability updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribed) setSubscribed(false);
                  }}
                  className="w-full bg-black border border-white/10 rounded-none py-3 pl-4 pr-10 text-white text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gold-500 text-black hover:scale-105 rounded-none transition"
                >
                  <Send className="w-3.5 h-3.5 text-black" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-gold-500 font-bold uppercase tracking-wider animate-pulse">
                  ✓ Successfully Subscribed!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <div className="flex flex-col sm:flex-row items-center gap-1.5 font-sans font-light">
            <span>&copy; {currentYear} <strong>The Next Cut Unisex Salon</strong>. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-800">|</span>
            <a href="#footer" className="hover:text-gold-500 transition">Privacy Policy</a>
            <span className="text-neutral-800">•</span>
            <a href="#footer" className="hover:text-gold-500 transition">Terms of Service</a>
          </div>

          {/* Back to top & made with signature */}
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[10px] tracking-wider uppercase font-semibold text-gray-600">
              Made with <Heart className="w-3 h-3 text-gold-500 fill-gold-500 mx-1" /> in Nizamabad
            </span>
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-none border border-white/10 bg-[#1A1A1A] hover:bg-gold-500 hover:text-black hover:border-transparent text-gray-400 transition-all shadow-lg"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
