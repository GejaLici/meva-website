
import type { ServiceCategory, Service } from '@/types/services';

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

const faceServices: Service[] = [
  { id: 'op-hunde', name: 'Nose Surgery', categorySlug: 'face', description: 'Detailed information about nose surgery. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'nose surgery' },
  { id: 'rim-hunde', name: 'Nose Reshaping', categorySlug: 'face', description: 'Detailed information about nose reshaping. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'nose reshaping' },
  { id: 'rim-vesheve', name: 'Ear Reshaping', categorySlug: 'face', description: 'Detailed information about ear reshaping. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'ear surgery' },
  { id: 'mbj-flokeve', name: 'Hair Transplant', categorySlug: 'face', description: 'Detailed information about hair transplant. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'hair transplant' },
  { id: 'mbj-mjekres', name: 'Beard Transplant', categorySlug: 'face', description: 'Detailed information about beard transplant. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'beard transplant' },
  { id: 'mbj-vetullave', name: 'Eyebrow Transplant', categorySlug: 'face', description: 'Detailed information about eyebrow transplant. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'eyebrow transplant' },
  { id: 'lift-vetullave', name: 'Eyebrow Lift', categorySlug: 'face', description: 'Detailed information about eyebrow lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'eyebrow lift' },
  { id: 'blefaroplastika', name: 'Blepharoplasty', categorySlug: 'face', description: 'Detailed information about blepharoplasty. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'eyelid surgery' },
  { id: 'lift-fytyres', name: 'Face Lift', categorySlug: 'face', description: 'Detailed information about face lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'face lift' },
  { id: 'rim-mjekres', name: 'Chin Remodeling', categorySlug: 'face', description: 'Detailed information about chin remodeling. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'chin remodel' },
].map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

const breastServices: Service[] = [
  { id: 'zmadh-gjoksit', name: 'Breast Augmentation', categorySlug: 'breasts', description: 'Detailed information about breast augmentation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast augmentation' },
  { id: 'lift-gjoksit', name: 'Breast Lift', categorySlug: 'breasts', description: 'Detailed information about breast lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast lift' },
  { id: 'zvog-gjoksit', name: 'Breast Reduction', categorySlug: 'breasts', description: 'Detailed information about breast reduction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast reduction' },
  { id: 'rikonst-gjoksit', name: 'Breast Reconstruction', categorySlug: 'breasts', description: 'Detailed information about breast reconstruction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast reconstruction' },
].map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

const bodyServices: Service[] = [
  { id: 'lift-kraheve', name: 'Arm Lift', categorySlug: 'body', description: 'Detailed information about arm lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'arm lift' },
  { id: 'rim-barkut', name: 'Tummy Tuck', categorySlug: 'body', description: 'Detailed information about tummy tuck. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'tummy tuck' },
  { id: 'liposculptura', name: 'Liposculpture', categorySlug: 'body', description: 'Detailed information about liposculpture. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'liposculpture body' },
  { id: 'rim-vitheve-bbl', name: 'BBL Buttock Remodeling', categorySlug: 'body', description: 'Detailed information about BBL buttock remodeling. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'buttock remodel' },
  { id: 'labioplastika', name: 'Labiaplasty', categorySlug: 'body', description: 'Detailed information about labiaplasty. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'labiaplasty surgery' },
  { id: 'lift-kofsheve', name: 'Thigh Lift', categorySlug: 'body', description: 'Detailed information about thigh lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'thigh lift' },
  { id: 'gynecomastia', name: 'Gynecomastia', categorySlug: 'body', description: 'Detailed information about Gynecomastia. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'male chest' },
].map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'face', // Changed from 'fytyra'
    name: 'FACE', // Translated
    slug: 'face', // Changed from 'fytyra' for consistency, assuming URLs can change
    description: 'Specialized services for improving and reshaping facial features.', // Translated
    services: faceServices.map(s => ({ ...s, categorySlug: 'face' })), // Update categorySlug for services
    image: 'https://placehold.co/800x600.png',
    imageHint: 'facial aesthetics'
  },
  {
    id: 'breasts', // Changed from 'gjoksi'
    name: 'BREASTS (Female)', // Translated
    slug: 'breasts', // Changed from 'gjoksi'
    description: 'Procedures for breast augmentation, lift, reduction, and reconstruction.', // Translated
    services: breastServices.map(s => ({ ...s, categorySlug: 'breasts' })), // Update categorySlug for services
    image: 'https://placehold.co/800x600.png',
    imageHint: 'breast surgery'
  },
  {
    id: 'body', // Changed from 'trupi'
    name: 'BODY', // Translated
    slug: 'body', // Changed from 'trupi'
    description: 'Services for body contouring and reshaping for a harmonious appearance.', // Translated
    services: bodyServices.map(s => ({ ...s, categorySlug: 'body' })), // Update categorySlug for services
    image: 'https://placehold.co/800x600.png',
    imageHint: 'body contouring'
  },
];

export const getAllServices = (): Service[] => serviceCategories.flatMap(category => category.services);

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined =>
  serviceCategories.find(category => category.slug === slug);

export const getServiceBySlugs = (categorySlug: string, serviceSlug: string): Service | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find(service => service.slug === serviceSlug);
};
