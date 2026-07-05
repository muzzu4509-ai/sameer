/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

// Map strings to Lucide icon components
const getIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return Icons.Scissors; // fallback
  return IconComponent;
};

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'hair' | 'grooming' | 'makeup' | 'skin' | 'treatment'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'hair', name: 'Hair Cut & Style' },
    { id: 'treatment', name: 'Spa & treatments' },
    { id: 'grooming', name: 'Men\'s Grooming' },
    { id: 'skin', name: 'Skincare & Hands' },
    { id: 'makeup', name: 'Makeup Artistry' },
  ];

  // Filter logic
  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Dynamic Background Circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gold-400/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase">
            Indulge Yourself
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Our Premium Services
          </h2>
          <div className="h-[1.5px] w-24 bg-gold-500 mx-auto" />
          <p className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed font-light tracking-wide">
            Browse our catalog of world-class hair, grooming, makeup, and skin treatments designed to refresh and redefine your style.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-neutral-900">
          
          {/* Live Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search services (e.g. Keratin)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/10 text-white rounded-none py-2.5 pl-10 pr-4 font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-gray-600 transition-colors"
            />
            <Icons.Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <Icons.X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Categories Tab list */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto py-2 no-scrollbar scroll-smooth">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id as any)}
                className={`px-4 py-2.5 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gold-500 text-black shadow-md'
                    : 'bg-[#1A1A1A] border border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

        </div>

        {/* Services Grid with Framer Motion Stagger */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const ServiceIcon = getIcon(service.iconName);
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative rounded-none p-6 bg-[#1A1A1A] border border-white/5 hover:bg-gold-500 hover:border-transparent shadow-xl overflow-hidden flex flex-col justify-between h-[280px] transition-all duration-300"
                >
                  <div>
                    {/* Header: Icon & Tags */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-black/45 border border-white/10 group-hover:border-black/20 rounded-none text-gold-500 group-hover:text-black transition-all duration-300">
                        <ServiceIcon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-sans text-gray-400 group-hover:text-black/70 font-semibold tracking-wider uppercase flex items-center space-x-1 transition-colors duration-300">
                          <Icons.Clock className="w-3 h-3 mr-1 text-gold-500/60 group-hover:text-black/60" />
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    {/* Service Name & Description */}
                    <h3 className="font-display font-bold text-lg tracking-wide text-white group-hover:text-black uppercase transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-black/85 font-sans text-xs font-light tracking-wide leading-relaxed mt-2 line-clamp-3 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer: Price & Booking button */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-900 group-hover:border-black/10 mt-4 transition-colors duration-300">
                    <span className="font-display font-bold text-lg text-gold-500 group-hover:text-black transition-colors duration-300">
                      {service.price}
                    </span>
                    
                    <button
                      onClick={() => onSelectService(service.name)}
                      className="inline-flex items-center space-x-1.5 font-sans text-[10px] font-bold tracking-widest uppercase text-white group-hover:text-black hover:underline group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Book Slot</span>
                      <Icons.ChevronRight className="w-3.5 h-3.5 text-gold-500 group-hover:text-black" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-[#1A1A1A] rounded-none border border-white/5 mt-8"
          >
            <Icons.Scissors className="w-10 h-10 text-neutral-800 mx-auto mb-4" />
            <p className="text-gray-400 font-sans text-sm font-light">
              No services found matching "<span className="text-gold-500 font-semibold">{searchQuery}</span>".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-4 px-5 py-2 rounded-none border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black text-xs tracking-wider uppercase font-semibold transition"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
