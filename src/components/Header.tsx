/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gold-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Scissors icon */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="p-2 bg-neutral-950 border border-gold-500/30 rounded-none group-hover:border-gold-500 transition-all duration-300">
              <Scissors className="w-5 h-5 text-gold-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-widest text-gold-500 group-hover:text-gold-400 transition-colors duration-300 uppercase">
                The Next Cut
              </span>
              <span className="text-[9px] font-sans tracking-[0.34em] uppercase text-white/60 font-semibold">
                Unisex Luxury Salon
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs font-semibold text-gray-300 hover:text-gold-500 tracking-wider uppercase transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+917095865937"
              className="p-2 border border-neutral-800 hover:border-gold-500/50 rounded-none text-gray-400 hover:text-gold-500 transition-all duration-300"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenBooking}
              className="relative overflow-hidden group px-6 py-2.5 rounded-none font-sans text-xs uppercase tracking-widest font-bold bg-[#121212] text-white border border-gold-500 shadow-[0_2px_10px_rgba(212,175,55,0.1)] hover:shadow-[0_2px_20px_rgba(212,175,55,0.25)] hover:scale-102 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center space-x-2 group-hover:text-black transition-colors duration-300">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="p-2 rounded-none border border-gold-500/30 bg-[#0c0c0c] text-gold-500"
              title="Quick Booking"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none border border-neutral-800 hover:border-gold-500/30 text-gray-300 bg-[#0c0c0c] hover:text-gold-500 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-998"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Content Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0a0a0a] border-l border-gold-500/10 z-999 shadow-2xl flex flex-col justify-between"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between pb-6 border-b border-neutral-900">
                  <div className="flex items-center space-x-2">
                    <Scissors className="w-5 h-5 text-gold-400" />
                    <span className="font-display font-bold tracking-widest text-white uppercase text-base">
                      The Next Cut
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-sans font-medium text-lg text-gray-300 hover:text-gold-400 py-1 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-neutral-900 bg-black/40 space-y-4">
                <a
                  href="tel:+917095865937"
                  className="flex items-center justify-center space-x-2.5 w-full py-3 rounded-none border border-neutral-800 text-gray-300 hover:text-gold-500 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>Call +91 70958 65937</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center space-x-2.5 w-full py-3.5 rounded-none bg-gold-500 hover:bg-gold-600 text-black font-sans font-bold tracking-widest uppercase text-xs transition-all duration-300 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
