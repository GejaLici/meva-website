
import { SITE_NAME } from './constants';

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  treatment: string;
  avatar?: string;
  imageHint?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah L.',
    quote: `${SITE_NAME} changed my life! The results of my nose reshaping are fantastic, and the team was so supportive throughout the process. I feel more confident than ever.`,
    treatment: 'Nose Reshaping',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'happy woman',
  },
  {
    id: 'testimonial-2',
    name: 'Michael B.',
    quote: `I was hesitant about getting a hair transplant, but the experts at ${SITE_NAME} made me feel comfortable. The procedure was smooth, and the results are incredibly natural. Highly recommend!`,
    treatment: 'Hair Transplant',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'smiling man',
  },
  {
    id: 'testimonial-3',
    name: 'Emily R.',
    quote: `The breast augmentation I received at ${SITE_NAME} exceeded my expectations. The doctors listened to my desires and delivered beautiful, natural-looking results. The care was exceptional.`,
    treatment: 'Breast Augmentation',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'confident person',
  },
];

