/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scissors, Instagram, ExternalLink, X, Check, Award, Flame, Star, BookOpen } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  bio: string;
  photo: string;
  instagram: string;
  skills: string[];
  portfolio: {
    title: string;
    image: string;
  }[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'vikram',
    name: 'Vikram Aditya',
    title: 'Director & Master Barber',
    specialty: 'Precision Fades & Shears-Only Cuts',
    experience: '12+ Years',
    bio: 'Vikram is the creative visionary behind The Next Cut. Specializing in bespoke haircuts, sharp razor fades, and custom beard alignment, he blends traditional barbering precision with high-fashion aesthetics.',
    photo: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com/thenextcut.vikram',
    skills: ['Razor Fading', 'Shears-Only Scissors Cut', 'Beard Sculpting', 'Hair Tattooing'],
    portfolio: [
      { title: 'Slick Back Pompadour Fade', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400&auto=format&fit=crop' },
      { title: 'Premium Sculpted Beard alignment', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop' },
      { title: 'Sharp Texturized Crop Cut', image: 'https://images.unsplash.com/photo-1605497746444-051d13b14edc?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    title: 'Senior Hair Colorist',
    specialty: 'Balayage, Creative Coloring & Styling',
    experience: '8+ Years',
    bio: 'A certified master of hair coloring from L’Oréal Academy, Priya is known for custom highlights, hand-painted balayage, and restorative hair treatments. Her meticulous color profiling ensures hair stays healthy and vibrant.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com/thenextcut.priya',
    skills: ['Balayage & Ombre', 'Global Hair Coloring', 'Olaxplex Therapy', 'Red Carpet Styling'],
    portfolio: [
      { title: 'Caramel Balayage Waves', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop' },
      { title: 'Platinium Ash Global Blonde', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=400&auto=format&fit=crop' },
      { title: 'Silk Press & Blowout Style', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'ananya',
    name: 'Ananya Sen',
    title: 'Master Skin Therapist',
    specialty: 'HydraFacials & Luxury Skincare',
    experience: '10+ Years',
    bio: 'Ananya is an expert in advanced non-invasive skin treatments, medical facials, and bridal makeovers. She emphasizes skin nutrition and tailors every session using world-class botanical and clinical skin formulas.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com/thenextcut.ananya',
    skills: ['Advanced HydraFacials', 'Soothe & Detox Therapy', 'HD Bridal Makeup', 'Anti-Aging Facials'],
    portfolio: [
      { title: 'HydraFacial Skin Revival', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop' },
      { title: 'Flawless HD Makeup Artistry', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop' },
      { title: 'Radiance Glow Facial Therapy', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'rahul',
    name: 'Rahul Verma',
    title: 'Senior Grooming Stylist',
    specialty: 'Keratin Care & Head Spa',
    experience: '6+ Years',
    bio: 'Rahul specializes in hair texturizing, Keratin smoothening, and deep nourishing head massage spas. He is passionate about scalp care and delivers styling solutions that make hair manageable, soft, and naturally flowing.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    instagram: 'https://instagram.com/thenextcut.rahul',
    skills: ['Keratin Treatment', 'Deep Hydration Hair Spa', 'Nanoplasty Straightening', 'Modern Shag & Layers'],
    portfolio: [
      { title: 'Glass Hair Keratin Treatment', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop' },
      { title: 'Nourishing Therapeutic Head Spa', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop' },
      { title: 'Soft Textured Layers', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=400&auto=format&fit=crop' }
    ]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openPortfolio = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closePortfolio = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Decorative Gold Backdrop Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gold-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans font-bold text-xs tracking-[0.3em] text-gold-500 uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            Master Artisans & Stylists
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Meet Our Team
          </h2>
          <div className="h-[1.5px] w-24 bg-gold-500 mx-auto" />
          <p className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed font-light tracking-wide">
            Our certified, highly-trained professionals are masters of their craft, bringing bespoke styling, clinical care, and red-carpet grooming to Nizamabad.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              className="group/card relative rounded-none bg-[#1A1A1A] border border-white/5 overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-gold-500/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.06)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black border-b border-neutral-900">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 group-hover/card:brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glowing Gold Strip bottom */}
                  <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold-500 transition-all duration-500 group-hover/card:w-full" />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 text-gold-500 text-[9px] uppercase tracking-widest font-bold px-2.5 py-1.5 rounded-none flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3 h-3 text-gold-500" />
                    <span>{member.experience} EXP</span>
                  </div>
                </div>

                {/* Info and Bio */}
                <div className="p-6 space-y-4">
                  <div className="text-left space-y-1">
                    <h3 className="font-display font-bold text-lg text-white group-hover/card:text-gold-500 transition-colors duration-300 uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-[10px] text-gold-500 font-sans font-bold uppercase tracking-wider">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-gray-400 font-sans font-light text-xs leading-relaxed text-left line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Micro-skills list */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.skills.slice(0, 2).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-sans font-medium bg-black/40 text-gray-300 border border-white/5 px-2.5 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="text-[9px] font-sans font-bold text-gold-500 px-1 py-1">
                        +{member.skills.length - 2} More
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-auto bg-black/10">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-500 hover:text-gold-500 hover:bg-[#252525]/30 transition-all border border-transparent hover:border-white/5"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openPortfolio(member)}
                  className="flex items-center justify-center space-x-1.5 flex-1 py-2 border border-gold-500 text-gold-500 hover:text-black hover:bg-gold-500 font-sans text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>Featured Work</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Lightbox Portfolio Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-1100 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Container */}
              <motion.div
                className="relative w-full max-w-3xl bg-[#121212] border border-white/10 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[92vh] rounded-none text-left"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Gold Top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-500" />

                {/* Close Button */}
                <button
                  onClick={closePortfolio}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header info */}
                <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-white/5 items-start">
                  <div className="w-20 h-20 shrink-0 bg-black overflow-hidden border border-gold-500/30">
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold-500 font-sans font-bold uppercase tracking-wider flex items-center gap-1">
                      <Scissors className="w-3 h-3" /> {selectedMember.title}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mt-1 tracking-wide">
                      {selectedMember.name}
                    </h3>
                    <p className="text-gray-400 font-sans font-light text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                {/* Skills section */}
                <div className="py-5">
                  <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-3">
                    Technical Expertise & Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-sans bg-[#1A1A1A] text-white border border-white/5 px-3 py-1.5 rounded-none flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-gold-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Showcase Grid */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-gold-500 animate-bounce" />
                    Featured Work & Client Transformations
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedMember.portfolio.map((work, pIdx) => (
                      <div
                        key={pIdx}
                        className="group/work relative aspect-square bg-black overflow-hidden border border-white/5"
                      >
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/work:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Elegant Slide-up Description Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover/work:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5">
                          <p className="text-[10px] text-gold-500 uppercase tracking-wider font-bold">
                            Crafted by {selectedMember.name.split(' ')[0]}
                          </p>
                          <p className="text-xs font-sans text-white mt-1 leading-snug">
                            {work.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5 bg-black/20 p-4">
                  <p className="text-xs text-gray-500 font-sans font-light">
                    Want an exclusive look with {selectedMember.name}? Book an appointment online instantly.
                  </p>
                  <a
                    href="#services"
                    onClick={() => {
                      closePortfolio();
                      const element = document.getElementById('services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-2.5 bg-gold-500 text-black font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300 text-center w-full sm:w-auto hover:bg-white"
                  >
                    Select Services
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
