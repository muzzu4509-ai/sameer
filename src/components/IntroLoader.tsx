/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors } from 'lucide-react';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="intro-loader"
          className="fixed inset-0 bg-[#050505] z-9999 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Glowing background aura */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Elegant Golden Icon Container */}
            <motion.div
              className="relative p-5 rounded-none border border-gold-500 bg-[#0a0a0a] shadow-2xl mb-6 flex items-center justify-center"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Spinning subtle gold ring */}
              <div className="absolute inset-0 rounded-none border-l border-r border-gold-500/40 animate-spin" style={{ animationDuration: '4s' }} />
              <Scissors className="w-10 h-10 text-gold-500" />
            </motion.div>

            {/* Brand Title with Clean Display Typography */}
            <motion.h1
              className="font-display text-3xl md:text-4xl font-bold tracking-[0.25em] text-white uppercase"
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.25em', opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
            >
              THE NEXT CUT
            </motion.h1>

            {/* Premium subtitle */}
            <motion.p
              className="text-xs md:text-sm text-gold-500 font-sans font-bold uppercase tracking-[0.3em] mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Unisex Luxury Salon
            </motion.p>
          </motion.div>

          {/* Progress loader line */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1.5px] bg-neutral-900 overflow-hidden rounded-none">
            <motion.div
              className="h-full bg-gold-500 rounded-none"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
