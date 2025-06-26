export interface Testimonial {
  id: string;
  avatar?: string;
  imageHint?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'happy woman',
  },
  {
    id: 'testimonial-2',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'smiling man',
  },
  {
    id: 'testimonial-3',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'confident person',
  },
];

    