
import type { GalleryItem } from '@/types/gallery';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    procedureName: 'Rhinoplasty (Nose Surgery)',
    beforeImageUrl: 'https://placehold.co/400x300.png',
    beforeImageHint: 'nose profile before',
    afterImageUrl: 'https://placehold.co/400x300.png',
    afterImageHint: 'nose profile after',
    description: 'Significant improvement in nasal bridge and tip definition.',
  },
  {
    id: 'gallery-2',
    procedureName: 'Breast Augmentation',
    beforeImageUrl: 'https://placehold.co/400x300.png',
    beforeImageHint: 'chest torso before',
    afterImageUrl: 'https://placehold.co/400x300.png',
    afterImageHint: 'chest torso after',
    description: 'Enhanced volume and improved breast shape, achieving a natural look.',
  },
  {
    id: 'gallery-3',
    procedureName: 'E-Max Veneers',
    beforeImageUrl: 'https://placehold.co/400x300.png',
    beforeImageHint: 'smile teeth before',
    afterImageUrl: 'https://placehold.co/400x300.png',
    afterImageHint: 'smile teeth after',
    description: 'Complete smile transformation with improved color, shape, and alignment.',
  },
  {
    id: 'gallery-4',
    procedureName: 'Face Lift (Rhytidectomy)',
    beforeImageUrl: 'https://placehold.co/400x300.png',
    beforeImageHint: 'face older before',
    afterImageUrl: 'https://placehold.co/400x300.png',
    afterImageHint: 'face younger after',
    description: 'Rejuvenated facial appearance with reduced sagging and wrinkles.',
  },
  {
    id: 'gallery-5',
    procedureName: 'Lip Augmentation',
    beforeImageUrl: 'https://placehold.co/400x300.png',
    beforeImageHint: 'lips thin before',
    afterImageUrl: 'https://placehold.co/400x300.png',
    afterImageHint: 'lips full after',
    description: 'Fuller, well-defined lips achieved with dermal fillers.',
  },
  {
    id: 'gallery-6',
    procedureName: 'Hair Transplant',
    beforeImageUrl: 'https://placehold.co/400x300.png',
    beforeImageHint: 'hairline receding before',
    afterImageUrl: 'https://placehold.co/400x300.png',
    afterImageHint: 'hairline full after',
    description: 'Significant restoration of hair density in treated areas.',
  },
];

export const getAllGalleryItems = (): GalleryItem[] => {
  return galleryItems;
};
