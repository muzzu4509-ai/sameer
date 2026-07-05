/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Phone, Star, Play, Award } from 'lucide-react';
import { HERO_BACKGROUND } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Background Image with Dark Golden Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND}
          alt="The Next Cut Unisex Salon Interior"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
          referrerPolicy="no-referrer"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50 md:from-[#030303] md:via-black/90 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Decorative Gold Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gold-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy (Column 1-7) */}
          <div className="lg:col-span-8 flex flex-col space-y-8 text-left">
            
            {/* Elegant Top Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-[#1A1A1A] border-l-2 border-gold-500 px-4 py-1.5 rounded-none w-fit"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-4 h-4 text-gold-500" />
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase">
                Nizamabad's Premier Luxury Salon
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Transform Your Style <br />
                <span className="text-gold-500 font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">with The Next Cut</span>
              </motion.h1>
              
              <motion.div
                className="h-[1.5px] w-24 bg-gold-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {/* Subheading */}
            <motion.p
              className="max-w-2xl text-gray-300 font-sans text-sm sm:text-base leading-relaxed font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Professional Haircuts, Hair Styling, Hair Spa, Coloring, Beard Grooming, Facial, Makeup, and Beauty Services for Men & Women. Experience global styling trends locally in an atmosphere of utter elegance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={onOpenBooking}
                className="group relative overflow-hidden px-8 py-4 rounded-none bg-gold-500 text-black font-sans text-xs uppercase tracking-widest font-bold text-center shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Book Appointment</span>
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-25" />
              </button>

              <a
                href="tel:+917095865937"
                className="group flex items-center justify-center space-x-3 px-8 py-4 rounded-none border border-gold-500 text-gold-500 font-sans text-xs font-bold uppercase tracking-widest bg-transparent hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                <span>Call Hotline</span>
              </a>
            </motion.div>

            {/* Social Proof / Ratings */}
            <motion.div
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="flex items-center space-x-4 bg-[#1A1A1A] px-5 py-4 rounded-none border-l-3 border-gold-500">
                <div className="flex text-gold-500">
                  <Star className="w-4 h-4 fill-gold-500" />
                  <Star className="w-4 h-4 fill-gold-500" />
                  <Star className="w-4 h-4 fill-gold-500" />
                  <Star className="w-4 h-4 fill-gold-500" />
                  <Star className="w-4 h-4 fill-gold-500" />
                </div>
                <div>
                  <div className="text-base font-display font-bold text-gold-500">4.9 ★</div>
                  <div className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">31+ Google Reviews</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-3">
                <span className="h-10 w-[1px] bg-neutral-800" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white tracking-wider uppercase">100% Hygienic</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Sterilized Tools Always</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Floating Card (Column 9-12) */}
          <motion.div
            className="hidden lg:block lg:col-span-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative rounded-none p-8 bg-[#1A1A1A]/85 border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-none bg-gold-500/5 blur-3xl" />
              
              <h3 className="font-sans font-bold text-sm text-gold-500 tracking-widest uppercase mb-1">
                SALON HOURS
              </h3>
              <p className="text-[10px] text-white/50 font-semibold uppercase tracking-widest mb-6">
                Open Every Day
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
                  <span className="text-xs text-gray-400 font-medium">Monday – Sunday</span>
                  <span className="text-xs text-white font-bold font-sans">10:00 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
                  <span className="text-xs text-gray-400 font-medium">Location</span>
                  <span className="text-xs text-gold-500 font-bold">FCI Colony, Nizamabad</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs text-gray-400 font-medium">Quick Booking</span>
                  <span className="text-[10px] bg-gold-500/10 text-gold-500 border border-gold-500/20 font-bold px-2 py-0.5 rounded-none tracking-wider uppercase animate-pulse">
                    Available
                  </span>
                </div>
              </div>

              <div className="mt-8 relative rounded-none overflow-hidden aspect-video border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop"
                  alt="Salon interior workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={onOpenBooking}
                    className="p-3 bg-gold-500 text-black rounded-none hover:bg-gold-600 shadow-xl transform transition hover:scale-110"
                    title="Take a Look"
                  >
                    <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Animated Mouse Wheel Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-gold-400 transition-colors">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-neutral-800 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-2 bg-gold-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
