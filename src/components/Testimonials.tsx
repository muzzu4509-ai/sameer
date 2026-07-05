/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Plus, Check, User, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';
import { INITIAL_TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form Fields State
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [formService, setFormService] = useState('');

  // Local Storage integration
  useEffect(() => {
    const saved = localStorage.getItem('the_next_cut_reviews');
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      setReviews(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) return;

    setSubmitting(true);

    const newReview: Testimonial = {
      id: `t-custom-${Date.now()}`,
      name: formName,
      rating: formRating,
      text: formText,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop', // default user avatar
      serviceReceived: formService || 'General Styling'
    };

    setTimeout(() => {
      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem('the_next_cut_reviews', JSON.stringify(updatedReviews));
      
      setSubmitting(false);
      setSuccess(true);
      
      // Reset form fields
      setFormName('');
      setFormRating(5);
      setFormText('');
      setFormService('');
    }, 1200);
  };

  const closeReviewModal = () => {
    setIsModalOpen(false);
    setSuccess(false);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#070707] overflow-hidden">
      {/* Decorative circle glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-6 border-b border-neutral-900">
          <div className="text-left space-y-3">
            <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase">
              Client Appreciations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              Reviews & Testimonials
            </h2>
            <div className="h-[1.5px] w-24 bg-gold-500" />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-6 py-3 rounded-none bg-neutral-950 hover:bg-[#1A1A1A] border border-gold-500 text-gold-500 hover:text-white font-sans text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-none p-6 bg-[#1A1A1A] border border-white/5 hover:border-gold-500 shadow-xl flex flex-col justify-between transition-all duration-300"
              >
                {/* Accent line top */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex text-gold-500 space-x-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'fill-gold-500 text-gold-500' : 'text-neutral-800'}`}
                      />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-gray-300 font-sans text-xs sm:text-sm font-light italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-neutral-950">
                  <div className="w-10 h-10 rounded-none overflow-hidden border border-white/10">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">
                      {review.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-medium">
                      <span>{review.date}</span>
                      {review.serviceReceived && (
                        <>
                          <span>•</span>
                          <span className="text-gold-500/80 font-semibold uppercase tracking-wider">{review.serviceReceived}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Review Counter / Google Trust badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2.5 bg-[#1A1A1A] border border-white/10 px-5 py-3 rounded-none">
            <span className="flex text-gold-500">
              <Star className="w-4 h-4 fill-gold-500" />
              <Star className="w-4 h-4 fill-gold-500" />
              <Star className="w-4 h-4 fill-gold-500" />
              <Star className="w-4 h-4 fill-gold-500" />
              <Star className="w-4 h-4 fill-gold-500" />
            </span>
            <span className="text-xs text-gray-400 font-sans">
              Rated <strong className="text-white">4.9/5</strong> based on 31+ Google Customer Reviews
            </span>
          </div>
        </div>

      </div>

      {/* WRITE A REVIEW MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeReviewModal}
            />

            {/* Modal Body */}
            <motion.div
              className="relative w-full max-w-lg bg-[#1A1A1A] rounded-none border border-white/10 shadow-2xl overflow-hidden z-10"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
            >
              {/* Gold Top Header line */}
              <div className="h-[1.5px] w-full bg-gold-500" />

              <div className="p-6 md:p-8">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-6">
                  <div className="flex items-center space-x-3 text-left">
                    <MessageSquare className="w-5 h-5 text-gold-500" />
                    <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                      Write a Review
                    </h3>
                  </div>
                  <button
                    onClick={closeReviewModal}
                    className="p-1 rounded-none text-gray-500 hover:text-white hover:bg-neutral-900 transition-colors"
                  >
                    <Plus className="w-6 h-6 rotate-45" />
                  </button>
                </div>

                {/* SUCCESS SCREEN */}
                {success ? (
                  <motion.div
                    className="text-center py-12 space-y-5"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-none bg-gold-500/10 border border-gold-500/25 text-gold-500 flex items-center justify-center mx-auto shadow-lg">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-lg text-white uppercase tracking-widest">
                        Thank You!
                      </h4>
                      <p className="text-gray-400 font-sans text-xs sm:text-sm font-light max-w-xs mx-auto">
                        Your review has been successfully published to our feed. We truly appreciate your feedback!
                      </p>
                    </div>
                    <button
                      onClick={closeReviewModal}
                      className="px-6 py-2.5 rounded-none bg-gold-500 text-black font-sans text-[10px] uppercase tracking-widest font-bold transition shadow-lg"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  /* REVIEW FORM */
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    {/* Star Rating select */}
                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                        Your Rating
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((starValue) => (
                          <button
                            type="button; button"
                            key={starValue}
                            onClick={() => setFormRating(starValue)}
                            className="text-gold-500 hover:scale-110 transform transition focus:outline-none"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                starValue <= formRating ? 'fill-gold-500 text-gold-500' : 'text-neutral-800'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Rahul Verma"
                        className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition"
                      />
                    </div>

                    {/* Service Taken input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                        Service Received
                      </label>
                      <input
                        type="text"
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        placeholder="e.g. Hair Cut, Keratin Treatment (optional)"
                        className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition"
                      />
                    </div>

                    {/* Review text */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                        Your Review
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formText}
                        onChange={(e) => setFormText(e.target.value)}
                        placeholder="Share your experience at The Next Cut..."
                        className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-none bg-gold-500 text-black font-sans text-[10px] font-bold uppercase tracking-widest transition flex items-center justify-center space-x-2"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Publishing Review...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Submit Review</span>
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
