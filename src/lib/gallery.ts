
import type { GalleryItem } from '@/types/gallery';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    procedureName: 'Rhinoplasty (Nose Surgery)',
    beforeImageUrl: '/images/woman-getting-ready-nose-job-surgery (1).jpg',
    beforeImageHint: 'nose profile before',
    afterImageUrl: '/images/woman-getting-ready-nose-job-surgery (e).jpg',
    afterImageHint: 'nose profile after',
    description: 'Significant improvement in nasal bridge and tip definition.',
  },
  {
    id: 'gallery-2',
    procedureName: 'Breast Augmentation',
    beforeImageUrl: '/images/breast0.png',
    beforeImageHint: 'chest torso before',
    afterImageUrl: '/images/breast1.png',
    afterImageHint: 'chest torso after',
    description: 'Enhanced volume and improved breast shape, achieving a natural look.',
  },
  {
    id: 'gallery-3',
    procedureName: 'E-Max Veneers',
    beforeImageUrl: '/images/emax-before.png',
    beforeImageHint: 'smile teeth before',
    afterImageUrl: '/images/emax-after.png',
    afterImageHint: 'smile teeth after',
    description: 'Complete smile transformation with improved color, shape, and alignment.',
  },
  {
    id: 'gallery-4',
    procedureName: 'Face Lift (Rhytidectomy)',
    beforeImageUrl: '/images/Gemini_Generated_Image_8oq2tg8oq2tg8oq2.png',
    beforeImageHint: 'face older before',
    afterImageUrl: '/images/Gemini_Generated_Image_8oq2th8oq2th8oq2.png',
    afterImageHint: 'face younger after',
    description: 'Rejuvenated facial appearance with reduced sagging and wrinkles.',
  },
  {
    id: 'gallery-5',
    procedureName: 'Lip Augmentation',
    beforeImageUrl: '/images/Gemini_Generated_Image_dodofedodofedodo.png',
    beforeImageHint: 'lips thin before',
    afterImageUrl: '/images/Gemini_Generated_Image_dodoffdodoffdodo.png',
    afterImageHint: 'lips full after',
    description: 'Fuller, well-defined lips achieved with dermal fillers.',
  },
  {
    id: 'gallery-6',
    procedureName: 'Hair Transplant',
    beforeImageUrl: '/images/hair-before.png',
    beforeImageHint: 'hairline receding before',
    afterImageUrl: '/images/hair-after.png',
    afterImageHint: 'hairline full after',
    description: 'Significant restoration of hair density in treated areas.',
  },
];

export const getAllGalleryItems = (): GalleryItem[] => {
  return galleryItems;
};
