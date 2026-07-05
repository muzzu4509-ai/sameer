/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Scissors, Sparkles, Shield, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '5,000+', label: 'Happy Clients' },
    { value: '12+', label: 'Certified Stylists' },
    { value: '4.9★', label: 'Google Rating' },
    { value: '100%', label: 'Hygiene Guard' },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#070707] overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Overlapping Image Grid (Column 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              
              {/* Back background decorative square */}
              <div className="absolute -top-4 -left-4 w-40 h-40 border-t-2 border-l-2 border-gold-500/20 rounded-none pointer-events-none" />
              
              {/* Large Image Column 1 */}
              <div className="col-span-7 space-y-4">
                <motion.div
                  className="rounded-none overflow-hidden border border-neutral-800/80 shadow-2xl aspect-[3/4]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop"
                    alt="Hair washing spa treatment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <motion.div
                  className="rounded-none overflow-hidden border border-neutral-800/80 shadow-2xl aspect-square"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=400&auto=format&fit=crop"
                    alt="Styling session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Smaller Image Column 2 */}
              <div className="col-span-5 pt-8 space-y-4">
                <motion.div
                  className="rounded-none overflow-hidden border border-neutral-800/80 shadow-2xl aspect-square"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400&auto=format&fit=crop"
                    alt="Facial and skincare"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <motion.div
                  className="rounded-none overflow-hidden border border-neutral-800/80 shadow-2xl aspect-[3/4] bg-[#1A1A1A] flex flex-col justify-center p-6 text-center border-gold-500/20 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gold-gradient opacity-5 rounded-none" />
                  <Scissors className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                  <p className="font-sans font-bold text-lg text-white tracking-widest uppercase">
                    ESTD
                  </p>
                  <p className="font-display font-bold text-gold-500 tracking-wider text-2xl mt-1">
                    2021
                  </p>
                  <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase mt-2">
                    Premium Styling
                  </p>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Copy section (Column 7-12) */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
            <div className="space-y-3">
              <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase">
                A Touch of Glamour
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
                About Us
              </h2>
              <div className="h-[1.5px] w-20 bg-gold-500" />
            </div>

            <div className="space-y-6 text-gray-300 font-sans font-light leading-relaxed tracking-wide text-sm sm:text-base">
              <p>
                Welcome to <strong className="text-white font-bold">The Next Cut Unisex Salon</strong>, where style meets perfection. Our experienced professionals provide premium grooming and beauty services in a relaxing, highly sophisticated, and hygienic environment.
              </p>
              <p>
                We focus on top-tier quality, absolute customer satisfaction, and adapting the latest global styling trends to help every client look and feel their absolute best. Whether it’s a detailed hair transformation, relaxing spa rituals, or premium skincare therapies, we provide a customized pampering experience tailored to you.
              </p>
            </div>

            {/* Micro value badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-none text-gold-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-xs">Pure Hygiene</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">100% Autoclaved Equipment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-none text-gold-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-xs">Global Trends</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Modern, Up-to-Date Looks</p>
                </div>
              </div>
            </div>

            {/* Stats list with animated glass container */}
            <div className="p-6 bg-[#1A1A1A] border border-white/10 rounded-none shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-display font-bold text-2xl md:text-3xl text-gold-500">
                      {stat.value}
                    </p>
                    <p className="text-[9px] text-gray-500 font-semibold tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
