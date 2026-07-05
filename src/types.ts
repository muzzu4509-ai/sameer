/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'grooming' | 'makeup' | 'skin' | 'treatment';
  price: string;
  duration: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  serviceReceived?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircuts' | 'hairstyling' | 'makeup' | 'interior' | 'beauty' | 'grooming';
  imageUrl: string;
  description: string;
}

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  selectedServices: string[]; // Service IDs
  bookingDate: string;
  bookingTime: string;
  gender: 'men' | 'women' | 'other';
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}
