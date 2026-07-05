/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, WhyChooseUsItem, GalleryItem, Testimonial } from './types';

// Custom generated images
import heroBg from './assets/images/hero_salon_bg_1783234225283.jpg';
import makeupBg from './assets/images/makeup_beauty_1783234239471.jpg';
import groomingBg from './assets/images/grooming_styling_1783234252582.jpg';

export const HERO_BACKGROUND = heroBg;

export const SERVICES: Service[] = [
  {
    id: 'hair-cut',
    name: 'Hair Cut',
    category: 'hair',
    price: '₹500',
    duration: '45 mins',
    description: 'Precision haircuts tailored to your face structure, hair type, and personal aesthetic. Includes premium wash and conditioning.',
    iconName: 'Scissors'
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'hair',
    price: '₹400',
    duration: '30 mins',
    description: 'Red Carpet blowouts, curls, straightening, or elegant braids for any occasion. Designed to complement your style perfectly.',
    iconName: 'Sparkles'
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    category: 'treatment',
    price: '₹1200',
    duration: '60 mins',
    description: 'Deep nourishing treatment that restores scalp health, reduces hair fall, and revitalizes dry, damaged tresses with premium oils and steam.',
    iconName: 'Droplet'
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring',
    category: 'hair',
    price: '₹1999',
    duration: '120 mins',
    description: 'Global color, balayage, highlights, or grey coverage using top-shelf, ammonia-free, hair-healthy dyes.',
    iconName: 'Palette'
  },
  {
    id: 'beard-styling',
    name: 'Beard Styling',
    category: 'grooming',
    price: '₹300',
    duration: '30 mins',
    description: 'Precise beard trim, dynamic razor alignment, hot towel treatment, and post-shave beard oil application for the perfect masculine look.',
    iconName: 'Crown'
  },
  {
    id: 'facial',
    name: 'Facial',
    category: 'skin',
    price: '₹1500',
    duration: '60 mins',
    description: 'Hydrating, anti-aging, or glow-boosting custom facials featuring extraction, deep exfoliation, and a soothing massage.',
    iconName: 'Heart'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    category: 'makeup',
    price: '₹2500',
    duration: '75 mins',
    description: 'Elegant makeup designs for parties, dinners, or corporate galas. Created with professional, skin-friendly cosmetics.',
    iconName: 'Sparkle'
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'makeup',
    price: '₹9999',
    duration: '180 mins',
    description: 'Bespoke HD or Airbrush bridal makeup service designed to make you glow and stand out on your special day. Includes trial consultation.',
    iconName: 'Gem'
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    category: 'skin',
    price: '₹800',
    duration: '45 mins',
    description: 'Detoxifying scrubs, premium masks, and hydrating clean-ups to restore your skin\'s natural radiance.',
    iconName: 'Smile'
  },
  {
    id: 'hair-treatment',
    name: 'Hair Treatment',
    category: 'treatment',
    price: '₹2500',
    duration: '90 mins',
    description: 'Advanced clinical treatments for dandruff control, scalp hydration, or deep cuticle repair to combat environmental stress.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Treatment',
    category: 'treatment',
    price: '₹4999',
    duration: '150 mins',
    description: 'Deep protein infusion therapy that tames frizz, enhances natural shine, and leaves your hair ultra-silky and manageable for up to 3-5 months.',
    iconName: 'Flame'
  },
  {
    id: 'smoothening',
    name: 'Smoothening',
    category: 'treatment',
    price: '₹5999',
    duration: '180 mins',
    description: 'Transformative straightening process that relaxes curls and provides sleek, straight, mirror-shine locks with minimum damage.',
    iconName: 'Wind'
  },
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'skin',
    price: '₹600',
    duration: '40 mins',
    description: 'Nail shaping, cuticle grooming, hand scrub, therapeutic massage, and premium gel polish for neat, healthy hands.',
    iconName: 'Hand'
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    category: 'skin',
    price: '₹800',
    duration: '50 mins',
    description: 'Relaxing foot soak, scrub with organic pumice stone, nail trimming, deep moisturizing massage, and polish to restore tired feet.',
    iconName: 'Footprints'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'exp-prof',
    title: 'Experienced Professionals',
    description: 'Our highly trained stylists and beauticians keep up with global fashion and grooming standards to offer you unmatched styling precision.',
    iconName: 'Users'
  },
  {
    id: 'prem-prod',
    title: 'Premium Quality Products',
    description: 'We care about your safety and beauty. We use only internationally certified, chemical-safe, luxury haircare and skincare brands.',
    iconName: 'Award'
  },
  {
    id: 'aff-price',
    title: 'Affordable Pricing',
    description: 'Luxury experiences shouldn\'t break the bank. Enjoy premium-tier grooming and beauty sessions with fair, highly competitive pricing.',
    iconName: 'DollarSign'
  },
  {
    id: 'hyg-env',
    title: 'Hygienic Environment',
    description: 'We follow stringent sanitation practices. All grooming tools are sterilized, and styling stations are deep-cleaned after every client session.',
    iconName: 'Sparkles'
  },
  {
    id: 'mod-equip',
    title: 'Modern Equipment',
    description: 'Experience comfort and precision with state-of-the-art styling chairs, advanced hair washers, and high-tech skincare devices.',
    iconName: 'Zap'
  },
  {
    id: 'friend-staff',
    title: 'Friendly Staff',
    description: 'We treat you like royalty. Enjoy a welcoming, warm smile and a hospitable atmosphere from the very second you step through our doors.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'pers-style',
    title: 'Personalized Styling',
    description: 'No one-size-fits-all here. We consult closely with you to understand your preferences, matching your hairstyle and makeup to your lifestyle.',
    iconName: 'UserCheck'
  },
  {
    id: 'cust-sat',
    title: 'Customer Satisfaction',
    description: 'Your smile is our absolute metric of success. We do not rest until you are completely in love with your new transformation.',
    iconName: 'Smile'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g-haircut-1',
    title: 'Textured Modern Cut',
    category: 'haircuts',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop',
    description: 'Clean fade and stylishly textured crop haircut, tailored for a sharp, sophisticated appearance.'
  },
  {
    id: 'g-makeup-1',
    title: 'Elegant Bridal Glamour',
    category: 'makeup',
    imageUrl: makeupBg,
    description: 'A glowing, premium bridal makeup finish designed to radiate elegance and highlight natural features.'
  },
  {
    id: 'g-grooming-1',
    title: 'Sharp Beard Sculpting',
    category: 'grooming',
    imageUrl: groomingBg,
    description: 'Premium hot towel shaving and precise beard styling, delivering a sharp and sculpted finish.'
  },
  {
    id: 'g-styling-1',
    title: 'Red Carpet Waves',
    category: 'hairstyling',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop',
    description: 'Soft, bouncy red-carpet curls created with high-performance styling tools.'
  },
  {
    id: 'g-interior-1',
    title: 'Luxurious Salon Atmosphere',
    category: 'interior',
    imageUrl: heroBg,
    description: 'Our premium studio styling zone featuring glowing mirrors, luxury chairs, and absolute comfort.'
  },
  {
    id: 'g-beauty-1',
    title: 'Radiant Herbal Skin Care',
    category: 'beauty',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
    description: 'A hydrating and rejuvenating organic facial mask treatment to restore skin health.'
  },
  {
    id: 'g-interior-2',
    title: 'Sophisticated Grooming Lounge',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop',
    description: 'An expansive view of our modern, hygienic, and highly professional unisex salon layout.'
  },
  {
    id: 'g-styling-2',
    title: 'Sleek Silky Blowout',
    category: 'hairstyling',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop',
    description: 'Hydrating hair spa session followed by a sleek, glass-hair style blowout.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aravind Kumar',
    rating: 5,
    text: 'Awesome staff and professional barbers. Gave an amazing haircut.',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop',
    serviceReceived: 'Hair Cut & Beard Styling'
  },
  {
    id: 't-2',
    name: 'Suhasini Reddy',
    rating: 5,
    text: 'Super friendly staff, nice ambience, and overall such a good experience.',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    serviceReceived: 'Keratin Treatment'
  },
  {
    id: 't-3',
    name: 'Rohit Sharma',
    rating: 5,
    text: 'Excellent service and highly skilled professionals. Definitely recommended.',
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    serviceReceived: 'Facial & Hair Styling'
  }
];
