/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

const getIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return Icons.Award; // fallback
  return IconComponent;
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-[#070707] overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase">
            The Gold Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Why Choose Us
          </h2>
          <div className="h-[1.5px] w-24 bg-gold-500 mx-auto" />
          <p className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed font-light tracking-wide">
            We are dedicated to elevating your style with meticulous service, premium care, and a warm, elegant salon experience.
          </p>
        </div>

        {/* Bento-inspired layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const FeatureIcon = getIcon(item.iconName);
            
            // Customize layouts of certain cards to create visual texture (bento-style)
            const isFeatured = idx === 0 || idx === 3;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group relative rounded-none p-6 overflow-hidden border transition-all duration-300 ${
                  isFeatured 
                    ? 'lg:col-span-2 bg-[#1A1A1A] border-white/10 hover:border-gold-500 shadow-2xl'
                    : 'bg-neutral-950 border-neutral-900 hover:border-gold-500 shadow-xl'
                }`}
              >
                {/* Floating glowing light */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-none bg-gold-500/5 group-hover:bg-gold-500/10 blur-xl transition-all duration-300" />
                
                <div className={`flex ${isFeatured ? 'flex-col sm:flex-row sm:items-start gap-6' : 'flex-col gap-4'}`}>
                  {/* Icon Container */}
                  <div className="p-3 bg-black border border-neutral-850 rounded-none text-gold-500 group-hover:text-white transition-all duration-300 w-fit shrink-0">
                    <FeatureIcon className="w-6 h-6" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-sm tracking-widest text-white group-hover:text-gold-500 uppercase transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-xs font-light leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Subtle border bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Brand Promise Footer Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center p-8 rounded-none bg-[#1A1A1A] border border-white/10 relative max-w-4xl mx-auto overflow-hidden"
        >
          <Icons.Quote className="w-8 h-8 text-gold-500/20 mx-auto mb-4" />
          <blockquote className="font-display font-light italic text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            "We believe that premium grooming is not just about changing your hair; it’s about restoring your self-confidence and providing an oasis of absolute hygiene and modern elegance."
          </blockquote>
          <p className="text-gold-500 text-[10px] font-sans font-bold uppercase tracking-widest mt-4">
            — The Next Cut Stylists
          </p>
        </motion.div>

      </div>
    </section>
  );
}
