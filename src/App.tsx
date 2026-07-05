/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Calendar, ArrowUp, Scissors } from 'lucide-react';

import IntroLoader from './components/IntroLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [showFloatingCTAs, setShowFloatingCTAs] = useState(false);

  // Scroll handler to toggle floating assistance triggers
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTAs(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceName: string | null = null) => {
    setPreselectedService(serviceName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setPreselectedService(null);
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#050505] text-[#f3f4f6] font-sans antialiased relative selection:bg-gold-500 selection:text-black">
      
      {/* 1. Elegant Gold Branding Preloader */}
      <IntroLoader />

      {/* 2. Premium Sticky Glass Header */}
      <Header onOpenBooking={() => handleOpenBooking(null)} />

      {/* 3. Main Sections Layout */}
      <main className="relative">
        {/* Full-screen Hero Section with custom generated background */}
        <Hero onOpenBooking={() => handleOpenBooking(null)} />

        {/* Editorial About Us Story */}
        <About />

        {/* 14+ Custom Services Cards Grid with filters */}
        <Services onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* Bento Grid Features */}
        <WhyChooseUs />

        {/* Master Artisans & Stylists Team */}
        <Team />

        {/* Masonry image portfolio with Lightbox preview */}
        <Gallery />

        {/* Star reviews with custom review submission form */}
        <Testimonials />

        {/* Directions coordinates, phone calls and Map embed */}
        <Contact />
      </main>

      {/* 4. Fine-tuned Footer */}
      <Footer />

      {/* 5. Transactional Booking Engine Slide-Up Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={preselectedService}
      />

      {/* 6. Floating Assistance Quick-Triggers */}
      <AnimatePresence>
        {showFloatingCTAs && (
          <motion.div
            className="fixed bottom-6 right-6 z-900 flex flex-col items-center space-y-3"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* WhatsApp Assistance */}
            <motion.a
              href="https://wa.me/917095865937?text=Hi!%20I'm%20visiting%20your%20website%20and%20need%20help%20with%20booking%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
              whileHover={{ rotate: 5 }}
            >
              <MessageCircle className="w-5.5 h-5.5 fill-white" />
              {/* Tooltip tooltip */}
              <span className="absolute right-14 bg-black border border-neutral-800 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp Help
              </span>
            </motion.a>

            {/* Direct Calling Hotline */}
            <motion.a
              href="tel:+917095865937"
              className="p-3.5 bg-gold-gradient text-black rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
              whileHover={{ rotate: -5 }}
            >
              <Phone className="w-5.5 h-5.5 fill-black text-black" />
              <span className="absolute right-14 bg-black border border-neutral-800 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Call Us Direct
              </span>
            </motion.a>

            {/* Book Now Speed dial */}
            <motion.button
              onClick={() => handleOpenBooking(null)}
              className="p-3.5 bg-black border border-gold-500/30 text-gold-400 hover:text-gold-300 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
            >
              <Calendar className="w-5.5 h-5.5" />
              <span className="absolute right-14 bg-black border border-neutral-800 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Book a Seat
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
