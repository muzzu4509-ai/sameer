/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Sparkles, Send } from 'lucide-react';

export default function Contact() {
  const handleDirections = () => {
    // Open directions directly in Google Maps
    const destination = encodeURIComponent(
      'The Next Cut Unisex Salon, 2nd Floor, Vinayak Nagar Street, Above IDFC First Bank, Opposite HP Petrol Pump, Ganesh Colony, FCI Colony, Nizamabad, Telangana 503001'
    );
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Decorative Gold Light */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase">
            Let's Connect
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Contact & Location
          </h2>
          <div className="h-[1.5px] w-24 bg-gold-500 mx-auto" />
          <p className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed font-light tracking-wide">
            Ready for your style upgrade? Visit us in Nizamabad, call our line for quick bookings, or message us on WhatsApp anytime.
          </p>
        </div>

        {/* Contact layout columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card Contact details (Column 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-none p-8 bg-[#1A1A1A] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col h-full justify-between space-y-8"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-none bg-gold-500/5 blur-3xl" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-wider uppercase">
                    THE NEXT CUT
                  </h3>
                  <p className="text-xs text-gold-500 font-semibold tracking-widest uppercase mt-1">
                    Unisex Luxury Salon
                  </p>
                </div>

                {/* Info Items List */}
                <div className="space-y-6 text-left">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-black border border-white/5 rounded-none text-gold-500 mt-0.5 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-500 font-sans font-bold uppercase tracking-wider">
                        Our Studio Location
                      </h4>
                      <p className="text-gray-300 font-sans text-xs sm:text-sm font-light leading-relaxed mt-1">
                        2nd Floor, Vinayak Nagar Street, Above IDFC First Bank, Opposite HP Petrol Pump, Ganesh Colony, FCI Colony, Nizamabad, Telangana – 503001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-black border border-white/5 rounded-none text-gold-500 mt-0.5 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-500 font-sans font-bold uppercase tracking-wider">
                        Call Reservations
                      </h4>
                      <a
                        href="tel:+917095865937"
                        className="text-gold-500 hover:text-white font-sans font-bold text-base sm:text-lg block mt-1 transition"
                      >
                        +91 70958 65937
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-black border border-white/5 rounded-none text-gold-500 mt-0.5 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-500 font-sans font-bold uppercase tracking-wider">
                        Working Hours
                      </h4>
                      <p className="text-gray-200 font-sans text-xs font-bold mt-1 uppercase tracking-wide">
                        Open Daily
                      </p>
                      <p className="text-gray-400 font-sans text-xs sm:text-sm font-light">
                        10:00 AM – 10:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
                <a
                  href="tel:+917095865937"
                  className="flex items-center justify-center space-x-2.5 py-3.5 rounded-none border border-white/10 text-gray-200 hover:text-white hover:bg-[#252525] bg-black font-sans text-[10px] uppercase tracking-widest font-bold transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href="https://wa.me/917095865937?text=Hi%21%20I%20would%20like%20to%20know%20more%20about%20booking%20an%20appointment%20at%20The%20Next%20Cut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2.5 py-3.5 rounded-none bg-[#25D366] hover:bg-emerald-600 text-black font-sans text-[10px] font-bold uppercase tracking-widest transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </motion.div>
          </div>

          {/* Interactive Google Map & Directions (Column 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-none border border-white/5 bg-[#1A1A1A] p-4 shadow-2xl overflow-hidden h-[340px] md:h-full flex flex-col justify-between relative group"
            >
              {/* Google Maps Iframe */}
              <div className="rounded-none overflow-hidden w-full h-[280px] md:h-[350px] border border-neutral-900 bg-neutral-900 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.345!2d78.098!3d18.674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcde65b4c4146cf%3A0x868b9ff4d3da2c8b!2sFCI%20Colony%2C%20Nizamabad%2C%20Telangana%20503001!5e0!3m2!1sen!2sin!4v1720137233214!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 filter invert-[90%] hue-rotate-[180deg] contrast-[105%]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Next Cut Unisex Salon Map Location"
                />
              </div>

              {/* Get Directions overlay button */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-sans font-light tracking-wide flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500 mr-2" />
                  Located above IDFC First Bank
                </span>
                
                <button
                  onClick={handleDirections}
                  className="flex items-center space-x-2 px-6 py-3 rounded-none bg-gold-500 hover:bg-white text-black font-sans text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                >
                  <Navigation className="w-3.5 h-3.5 fill-black" />
                  <span>Get Directions</span>
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
