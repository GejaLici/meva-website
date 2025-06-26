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
    quote: `Meva Clinic truly transformed my confidence! The results of my nose reshaping are fantastic, exceeding all my expectations. The entire team was incredibly professional and supportive throughout the entire process. I couldn't be happier.`,
    treatment: 'Nose Reshaping (Rhinoplasty)',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'happy woman',
  },
  {
    id: 'testimonial-2',
    name: 'Michael B.',
    quote: `I was initially hesitant about undergoing a hair transplant, but the specialists at Meva Clinic were exceptional. They explained everything clearly and made me feel completely comfortable. The procedure was smooth, and the results are remarkably natural. Highly recommend their expertise!`,
    treatment: 'Hair Transplant (FUE)',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'smiling man',
  },
  {
    id: 'testimonial-3',
    name: 'Emily R.',
    quote: `My breast augmentation experience at Meva Clinic was outstanding. The surgeons attentively listened to my aesthetic goals and delivered beautiful, natural-looking results that perfectly suit my frame. The post-operative care and attention to detail were exceptional.`,
    treatment: 'Breast Augmentation',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'confident person',
  },
];
