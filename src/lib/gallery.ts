import type { GalleryItem } from '@/types/gallery';

// Text content (procedureName, description) has been moved to messages/[locale].json files.
// This file now only contains the structural data (IDs, image paths, and hints).
export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    beforeImageUrl: '/images/woman-getting-ready-nose-job-surgery (1).jpg',
    beforeImageHint: 'nose profile before',
    afterImageUrl: '/images/woman-getting-ready-nose-job-surgery (e).jpg',
    afterImageHint: 'nose profile after',
  },
  {
    id: 'gallery-2',
    beforeImageUrl: '/images/breast0.png',
    beforeImageHint: 'chest torso before',
    afterImageUrl: '/images/breast1.png',
    afterImageHint: 'chest torso after',
  },
  {
    id: 'gallery-3',
    beforeImageUrl: '/images/emax-before.png',
    beforeImageHint: 'smile teeth before',
    afterImageUrl: '/images/emax-after.png',
    afterImageHint: 'smile teeth after',
  },
  {
    id: 'gallery-4',
    beforeImageUrl: '/images/Gemini_Generated_Image_8oq2tg8oq2tg8oq2.png',
    beforeImageHint: 'face older before',
    afterImageUrl: '/images/Gemini_Generated_Image_8oq2th8oq2th8oq2.png',
    afterImageHint: 'face younger after',
  },
  {
    id: 'gallery-5',
    beforeImageUrl: '/images/Gemini_Generated_Image_dodofedodofedodo.png',
    beforeImageHint: 'lips thin before',
    afterImageUrl: '/images/Gemini_Generated_Image_dodoffdodoffdodo.png',
    afterImageHint: 'lips full after',
  },
  {
    id: 'gallery-6',
    beforeImageUrl: '/images/hair-before.png',
    beforeImageHint: 'hairline receding before',
    afterImageUrl: '/images/hair-after.png',
    afterImageHint: 'hairline full after',
  },
];

export const getAllGalleryItems = (): GalleryItem[] => {
  return galleryItems;
};
