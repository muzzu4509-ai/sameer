/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Check, Scissors, AlertCircle, Sparkles, ChevronRight, ChevronLeft, CreditCard } from 'lucide-react';
import { SERVICES } from '../data';
import { Booking, Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string | null;
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form States
  const [selectedGender, setSelectedGender] = useState<'men' | 'women' | 'other' | ''>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  // Pre-select service when modal is triggered with quick book
  useEffect(() => {
    if (isOpen) {
      // reset state on reopen
      setStep(1);
      setConfirmedBooking(null);
      setError('');
      
      if (preselectedService) {
        const found = SERVICES.find(s => s.name.toLowerCase() === preselectedService.toLowerCase());
        if (found) {
          setSelectedServices([found.id]);
          // auto select gender category based on service
          if (found.category === 'grooming') {
            setSelectedGender('men');
          } else if (found.id === 'bridal-makeup') {
            setSelectedGender('women');
          } else {
            setSelectedGender('');
          }
        }
      } else {
        setSelectedServices([]);
        setSelectedGender('');
      }
      
      // default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setBookingDate(tomorrow.toISOString().split('T')[0]);
      setBookingTime('');
      setClientName('');
      setClientPhone('');
      setClientEmail('');
      setClientNotes('');
    }
  }, [isOpen, preselectedService]);

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  // Calculate total price dynamically
  const selectedServicesObjects = SERVICES.filter(s => selectedServices.includes(s.id));
  const totalPrice = selectedServicesObjects.reduce((acc, s) => {
    const numericPrice = parseInt(s.price.replace(/[^\d]/g, ''), 10);
    return acc + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(prev => prev.filter(id => id !== serviceId));
    } else {
      setSelectedServices(prev => [...prev, serviceId]);
    }
  };

  const handleNextStep = () => {
    setError('');
    if (step === 1) {
      if (!selectedGender) {
        setError('Please select a gender preference first.');
        return;
      }
      if (selectedServices.length === 0) {
        setError('Please select at least one grooming or beauty service.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!bookingDate) {
        setError('Please choose a date for your visit.');
        return;
      }
      if (!bookingTime) {
        setError('Please choose a preferred time slot.');
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setError('');
    setStep(prev => prev - 1);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!clientName) {
      setError('Please provide your full name.');
      return;
    }
    if (!clientPhone || clientPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    const newBooking: Booking = {
      id: `TNC-${Math.floor(100000 + Math.random() * 900000)}`,
      clientName,
      clientPhone,
      clientEmail: clientEmail || 'Not Provided',
      selectedServices,
      bookingDate,
      bookingTime,
      gender: selectedGender || 'other',
      notes: clientNotes,
      createdAt: new Date().toLocaleDateString(),
      status: 'confirmed'
    };

    setTimeout(() => {
      // Save in localStorage array
      const existingBookings = JSON.parse(localStorage.getItem('the_next_cut_bookings') || '[]');
      existingBookings.push(newBooking);
      localStorage.setItem('the_next_cut_bookings', JSON.stringify(existingBookings));

      setConfirmedBooking(newBooking);
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  // Get date limit values
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 30); // 30 days window max
    return today.toISOString().split('T')[0];
  };

  const getFormatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step !== 4 && !loading ? onClose : undefined}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-2xl bg-[#090909] rounded-none border border-gold-500/20 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 210 }}
          >
            {/* Top glowing gold divider line */}
            <div className="h-[1.5px] w-full bg-gold-500" />

            {/* Header */}
            <div className="p-6 border-b border-neutral-900 flex items-center justify-between bg-black/50">
              <div className="flex items-center space-x-3 text-left">
                <div className="p-2 bg-neutral-950 border border-neutral-800 rounded-none text-gold-500">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                    {step === 4 ? 'Appointment Confirmed' : 'Grooming Consultation'}
                  </h3>
                  {step < 4 && (
                    <p className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">
                      The Next Cut Unisex Salon
                    </p>
                  )}
                </div>
              </div>
              
              {step !== 4 && !loading && (
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-none text-gray-500 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Steps Progress Indicator */}
            {step < 4 && (
              <div className="bg-[#0c0c0c] px-6 py-3 border-b border-neutral-950 flex justify-between items-center text-xs text-gray-500 font-semibold">
                <span className={step >= 1 ? 'text-gold-500' : ''}>1. Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className={step >= 2 ? 'text-gold-500' : ''}>2. Date & Time</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className={step >= 3 ? 'text-gold-500' : ''}>3. Guest Details</span>
              </div>
            )}

            {/* Errors display */}
            {error && (
              <div className="mx-6 mt-4 p-3 bg-red-950/40 border border-red-500/20 text-red-300 rounded-none text-xs flex items-center space-x-2 text-left">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar">

              {/* STEP 1: SERVICE SELECTOR */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 text-left"
                >
                  {/* Gender Selector */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                      Select Gender Preference
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'men', name: 'Gentlemen' },
                        { id: 'women', name: 'Ladies' },
                        { id: 'other', name: 'Unisex / Other' }
                      ].map(g => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setSelectedGender(g.id as any)}
                          className={`py-3.5 rounded-none border font-sans text-[10px] font-bold tracking-widest uppercase transition-all ${
                            selectedGender === g.id
                              ? 'bg-gold-500 text-black border-transparent font-bold shadow-md'
                              : 'bg-neutral-950 border-neutral-900 text-gray-400 hover:text-white hover:border-neutral-800'
                          }`}
                        >
                          {g.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services list with subtotal */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                        Choose Grooming & Beauty Services
                      </label>
                      <span className="text-[10px] bg-[#1A1A1A] border border-white/10 text-gray-500 px-2 py-0.5 rounded-none font-sans font-bold uppercase">
                        {SERVICES.length} Available
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[250px] overflow-y-auto pr-2 border border-neutral-900/60 rounded-none p-3 bg-neutral-950/40">
                      {SERVICES.map((s) => (
                        <div
                          key={s.id}
                          onClick={() => handleServiceToggle(s.id)}
                          className={`flex items-center justify-between p-3 rounded-none border cursor-pointer transition-all ${
                            selectedServices.includes(s.id)
                              ? 'bg-gold-500/10 border-gold-500/40 text-white'
                              : 'bg-[#0a0a0a] border-neutral-900 text-gray-400 hover:border-neutral-800'
                          }`}
                        >
                          <div className="flex items-center space-x-3 pr-4">
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(s.id)}
                              onChange={() => {}} // handled by div click
                              className="accent-gold-500 w-4 h-4 rounded-none text-gold-500 cursor-pointer pointer-events-none"
                            />
                            <div>
                              <p className={`text-xs font-bold uppercase tracking-wide transition-colors ${selectedServices.includes(s.id) ? 'text-gold-500' : 'text-gray-300'}`}>
                                {s.name}
                              </p>
                              <p className="text-[10px] text-gray-500 font-sans mt-0.5 font-light line-clamp-1">
                                {s.duration} • {s.description}
                              </p>
                            </div>
                          </div>
                          
                          <span className="font-display font-bold text-xs text-gold-500 shrink-0">
                            {s.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Running Subtotal Bar */}
                  {selectedServices.length > 0 && (
                    <div className="p-4 rounded-none bg-[#1A1A1A] border border-white/10 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase block">
                          Selected Services: {selectedServices.length}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {selectedServicesObjects.map(s => (
                            <span key={s.id} className="text-[9px] bg-black text-gold-500 border border-neutral-850 px-2 py-0.5 rounded-none font-medium">
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right shrink-0 pl-4">
                        <span className="text-[10px] text-gray-500 font-semibold uppercase block">Est. Subtotal</span>
                        <span className="font-display font-bold text-lg text-gold-500">₹{totalPrice}</span>
                      </div>
                    </div>
                  )}

                </motion.div>
              )}

              {/* STEP 2: DATE & TIME */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 text-left"
                >
                  {/* Selected Services Recap */}
                  <div className="p-4 bg-[#1A1A1A] border border-white/10 rounded-none flex justify-between items-center text-xs">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-semibold">Grooming Subtotal</span>
                      <p className="text-gray-200 mt-0.5">{selectedServices.length} services selected</p>
                    </div>
                    <span className="font-display font-bold text-lg text-gold-500">₹{totalPrice}</span>
                  </div>

                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest flex items-center">
                      <Calendar className="w-4 h-4 text-gold-500 mr-2" />
                      Select Appointment Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      min={getMinDate()}
                      max={getMaxDate()}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 transition"
                    />
                    <span className="text-[10px] text-gray-600 font-sans block mt-1">
                      * Booking window is open for the next 30 days.
                    </span>
                  </div>

                  {/* Time Slots Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest flex items-center">
                      <Clock className="w-4 h-4 text-gold-500 mr-2" />
                      Select Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setBookingTime(slot)}
                          className={`py-2.5 rounded-none border font-sans text-xs font-bold transition-all ${
                            bookingTime === slot
                              ? 'bg-gold-500 text-black border-transparent shadow-md'
                              : 'bg-neutral-950 border-neutral-900 text-gray-400 hover:text-white hover:border-neutral-800'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}

              {/* STEP 3: CLIENT DETAILS */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 text-left"
                >
                  {/* Selected summary banner */}
                  <div className="p-4 bg-[#1A1A1A] border border-white/10 rounded-none flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-xs">
                    <div>
                      <span className="text-[9px] text-gray-500 uppercase font-semibold">Your Appointment</span>
                      <p className="text-gold-500 font-bold uppercase mt-0.5 tracking-wider">
                        {getFormatDate(bookingDate)} at {bookingTime}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[9px] text-gray-500 uppercase font-semibold">Est. Total</span>
                      <p className="font-display font-bold text-base text-white">₹{totalPrice}</p>
                    </div>
                  </div>

                  <form className="space-y-4">
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest flex items-center">
                        <User className="w-3.5 h-3.5 text-gold-500 mr-1.5" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Aravind Kumar"
                        className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mobile Number input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value.replace(/[^\d+]/g, ''))}
                          placeholder="e.g. +91 70958 65937"
                          className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="e.g. name@example.com (optional)"
                          className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition"
                        />
                      </div>
                    </div>

                    {/* Booking Notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">
                        Any Special Styling Requests / Notes
                      </label>
                      <textarea
                        rows={3}
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        placeholder="e.g. Prefer an experienced barber for hair coloring..."
                        className="w-full bg-black border border-white/10 rounded-none py-3 px-4 text-white font-sans text-xs focus:outline-none focus:border-gold-500 placeholder-neutral-700 transition resize-none"
                      />
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 4: SUCCESS CONFIRMATION TICKET */}
              {step === 4 && confirmedBooking && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-8 py-4 text-center"
                >
                  {/* Sparkly Success Badge */}
                  <div className="space-y-3">
                    <div className="w-16 h-16 rounded-none bg-gold-500/10 border border-gold-500/25 text-gold-500 flex items-center justify-center mx-auto shadow-lg">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-white tracking-widest uppercase">
                        Booking Confirmed!
                      </h4>
                      <p className="text-xs text-gold-500 font-semibold tracking-widest uppercase mt-0.5">
                        Your seat is reserved
                      </p>
                    </div>
                  </div>

                  {/* Luxury Digital Styling Receipt */}
                  <div className="relative max-w-sm mx-auto bg-[#1A1A1A] border border-white/10 rounded-none overflow-hidden shadow-2xl p-6 text-left">
                    {/* Decorative cutouts at the side to look like a real ticket */}
                    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#090909] border-r border-neutral-850 rounded-full" />
                    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#090909] border-l border-neutral-850 rounded-full" />
                    
                    <div className="flex justify-between items-center pb-4 border-b border-dashed border-neutral-800">
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Ticket ID</span>
                        <p className="font-sans text-xs font-bold text-white tracking-widest mt-0.5">{confirmedBooking.id}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Date Created</span>
                        <p className="font-sans text-xs text-gray-300 mt-0.5">{confirmedBooking.createdAt}</p>
                      </div>
                    </div>

                    <div className="py-4 space-y-4">
                      {/* Guest Details */}
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Guest Name</span>
                        <p className="text-sm font-bold text-white">{confirmedBooking.clientName}</p>
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Visit Date</span>
                          <p className="text-xs text-gray-200 font-bold">{getFormatDate(confirmedBooking.bookingDate)}</p>
                        </div>
                        <div>
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Time Slot</span>
                          <p className="text-xs text-gold-500 font-bold uppercase">{confirmedBooking.bookingTime}</p>
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block">Reserved Services</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedServicesObjects.map(s => (
                            <span key={s.id} className="text-[9px] bg-black border border-white/10 text-gray-300 px-2 py-0.5 rounded-none">
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Total Price Bar */}
                    <div className="pt-4 border-t border-dashed border-neutral-800 flex justify-between items-center bg-black/40">
                      <div className="flex items-center space-x-1">
                        <CreditCard className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-xs text-gray-400 font-medium">To pay at salon</span>
                      </div>
                      <span className="font-display font-bold text-lg text-gold-500">₹{totalPrice}</span>
                    </div>
                  </div>

                  {/* Arrive details */}
                  <div className="text-xs text-gray-500 font-sans max-w-sm mx-auto space-y-1 bg-[#1A1A1A] p-4 border border-white/10 rounded-none">
                    <p className="text-white font-semibold">📍 The Next Cut Unisex Salon</p>
                    <p>2nd Floor, Above IDFC First Bank, FCI Colony, Nizamabad</p>
                    <p className="text-[11px] text-gold-500 font-medium mt-1">
                      * Please arrive 10-15 minutes prior to your slot. No upfront booking fee!
                    </p>
                  </div>

                </motion.div>
              )}

            </div>

            {/* Modal Bottom Footer bar for controls */}
            {step < 4 && (
              <div className="p-6 border-t border-neutral-900 bg-black/50 flex items-center justify-between">
                <div>
                  {step > 1 ? (
                    <button
                      onClick={handlePrevStep}
                      disabled={loading}
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-none border border-neutral-800 text-gray-300 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}
                </div>

                <div>
                  {step < 3 ? (
                    <button
                      onClick={handleNextStep}
                      className="flex items-center space-x-2 px-6 py-3 rounded-none bg-gold-500 text-black font-sans text-[10px] uppercase tracking-widest font-bold shadow-lg hover:shadow-gold-500/10 transition-all"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4 text-black" />
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirmBooking}
                      disabled={loading}
                      className="flex items-center space-x-2 px-8 py-3.5 rounded-none bg-gold-500 text-black font-sans text-[10px] uppercase tracking-widest font-bold shadow-lg transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Reserving Seat...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4 text-black" />
                          <span>Confirm Booking</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="p-6 border-t border-neutral-900 bg-black/50 text-center">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-none bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white font-sans text-[10px] uppercase tracking-widest font-bold transition shadow-lg w-full sm:w-auto"
                >
                  Done & Close
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
