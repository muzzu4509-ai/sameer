/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'haircuts' | 'hairstyling' | 'makeup' | 'interior' | 'beauty' | 'grooming'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', name: 'All Work' },
    { id: 'haircuts', name: 'Haircuts' },
    { id: 'hairstyling', name: 'Hairstyling' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'grooming', name: 'Grooming' },
    { id: 'beauty', name: 'Beauty Care' },
    { id: 'interior', name: 'Our Interior' },
  ];

  // Filter items
  const filteredItems = GALLERY.filter((item) => activeTab === 'all' || item.category === activeTab);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase">
            Visual Craftsmanship
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Our Gallery
          </h2>
          <div className="h-[1.5px] w-24 bg-gold-500 mx-auto" />
          <p className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed font-light tracking-wide">
            Glance through actual shots of our premium styling, high-end makeup results, luxury grooming, and comfortable modern interior.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-8 mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold-500 text-black shadow-md'
                  : 'bg-[#1A1A1A] border border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-none overflow-hidden border border-white/5 bg-[#1A1A1A] group cursor-pointer shadow-xl"
                onClick={() => setLightboxIndex(index)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Golden Overlay and Eye icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  {/* Absolute Centered Zoom Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3.5 bg-gold-500 text-black rounded-none shadow-2xl scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Eye className="w-5 h-5 font-bold" />
                  </div>

                  {/* bottom info */}
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 space-y-1 text-left">
                    <span className="text-[9px] font-sans font-bold tracking-widest text-gold-500 uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-sans font-light line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#1A1A1A] rounded-none border border-white/5">
            <Image className="w-10 h-10 text-neutral-800 mx-auto mb-4" />
            <p className="text-gray-400 font-sans text-sm font-light">
              No gallery items available in this category.
            </p>
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-9999 flex flex-col items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Clickable backdrop to close */}
            <div className="absolute inset-0 z-0" onClick={() => setLightboxIndex(null)} />

            {/* Top Toolbar */}
            <div className="absolute top-4 left-0 w-full px-6 flex items-center justify-between z-10 text-white">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-sans text-gold-500 font-bold uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-none border border-gold-500/20">
                  {filteredItems[lightboxIndex].category}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-none bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/30 text-white hover:text-gold-300 transition-all shadow-lg"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-none bg-white/5 hover:bg-gold-500/20 border border-white/10 text-white hover:text-gold-300 z-10 transition-all"
              title="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-none bg-white/5 hover:bg-gold-500/20 border border-white/10 text-white hover:text-gold-300 z-10 transition-all"
              title="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[70vh] z-10 flex items-center justify-center overflow-hidden"
            >
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-none shadow-2xl border border-neutral-800"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Bottom Details Drawer */}
            <motion.div
              key={`details-${lightboxIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative max-w-2xl text-center mt-6 z-10 space-y-2 px-4"
            >
              <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-wider uppercase">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-sans font-light leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
