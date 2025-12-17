import React from 'react';

export interface GuestRsvp {
  name: string;
  email: string;
  attending: 'yes' | 'no' | 'maybe';
  guestsCount: number;
  message: string;
}

export enum ToneType {
  HEARTFELT = 'Heartfelt',
  FUNNY = 'Funny',
  FORMAL = 'Formal',
  SHORT = 'Short & Sweet',
}

export interface GalleryImage {
  id: number;
  url: string;
  category: 'Ceremony' | 'Pre-wedding' | 'Moments';
}

export interface EventDetail {
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  mapLink: string;
  icon: React.ReactNode;
}