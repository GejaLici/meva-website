
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

const faceServicesBase: Omit<Service, 'slug' | 'image'>[] = [
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
  // New Face Services
  { id: 'lip-reshaping', name: 'Lip Reshaping', categorySlug: 'face', description: 'Detailed information about lip reshaping. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'lip reshape' },
  { id: 'xanthelasma-plasma-arc', name: 'Xanthelasma (Plasma Arc)', categorySlug: 'face', description: 'Detailed information about Xanthelasma treatment using plasma arc. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'xanthelasma treatment' },
  { id: 'multivitamin-treatment', name: 'Multivitamin Treatment', categorySlug: 'face', description: 'Detailed information about multivitamin facial treatment. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'facial treatment' },
  { id: 'eyelids-plasma-arc', name: 'Eyelids (Plasma Arc)', categorySlug: 'face', description: 'Detailed information about non-surgical eyelid lift using plasma arc. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'eyelid plasma' },
  { id: 'cheekbone-reshaping', name: 'Cheekbone Reshaping', categorySlug: 'face', description: 'Detailed information about cheekbone reshaping and augmentation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'cheekbone contour' },
  { id: 'microdermabrasion', name: 'Microdermabrasion', categorySlug: 'face', description: 'Detailed information about microdermabrasion. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin exfoliation' },
  { id: 'jawline-contouring', name: 'Jawline Contouring', categorySlug: 'face', description: 'Detailed information about jawline contouring. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'jawline definition' },
  { id: 'wrinkle-fillers', name: 'Wrinkle Fillers', categorySlug: 'face', description: 'Detailed information about wrinkle fillers. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'dermal fillers' },
  { id: 'prp-face', name: 'PRP for Face', categorySlug: 'face', description: 'Detailed information about PRP (Platelet-Rich Plasma) therapy for facial rejuvenation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'prp facial' },
  { id: 'dark-circles-treatment', name: 'Dark Circles Treatment', categorySlug: 'face', description: 'Detailed information about treatments for dark circles under the eyes. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'under eye' },
  { id: 'prp-hair', name: 'PRP for Hair', categorySlug: 'face', description: 'Detailed information about PRP (Platelet-Rich Plasma) therapy for hair restoration. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'hair restoration' },
  { id: 'white-peeling', name: 'White Peeling', categorySlug: 'face', description: 'Detailed information about white peeling treatment. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'chemical peel' },
  { id: 'microneedling', name: 'Microneedling', categorySlug: 'face', description: 'Detailed information about microneedling. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin rejuvenation' },
  { id: 'radiofrequency-face', name: 'Radiofrequency (Face)', categorySlug: 'face', description: 'Detailed information about radiofrequency treatments for facial skin tightening. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin tightening' },
  { id: 'sulcus-filling', name: 'Sulcus Filling (Deep Wrinkles)', categorySlug: 'face', description: 'Detailed information about sulcus filling for deep wrinkles. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'wrinkle treatment' },
  { id: 'chin-reshaping', name: 'Chin Reshaping', categorySlug: 'face', description: 'Detailed information about chin reshaping procedures. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'chin contour' },
];

const breastServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'zmadh-gjoksit', name: 'Breast Augmentation', categorySlug: 'breasts', description: 'Detailed information about breast augmentation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast augmentation' },
  { id: 'lift-gjoksit', name: 'Breast Lift', categorySlug: 'breasts', description: 'Detailed information about breast lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast lift' },
  { id: 'zvog-gjoksit', name: 'Breast Reduction', categorySlug: 'breasts', description: 'Detailed information about breast reduction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast reduction' },
  { id: 'rikonst-gjoksit', name: 'Breast Reconstruction', categorySlug: 'breasts', description: 'Detailed information about breast reconstruction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'breast reconstruction' },
];

const bodyServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'lift-kraheve', name: 'Arm Lift', categorySlug: 'body', description: 'Detailed information about arm lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'arm lift' },
  { id: 'rim-barkut', name: 'Tummy Tuck', categorySlug: 'body', description: 'Detailed information about tummy tuck. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'tummy tuck' },
  { id: 'liposculptura', name: 'Liposculpture', categorySlug: 'body', description: 'Detailed information about liposculpture. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'liposculpture body' },
  { id: 'rim-vitheve-bbl', name: 'BBL Buttock Remodeling', categorySlug: 'body', description: 'Detailed information about BBL buttock remodeling. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'buttock remodel' },
  { id: 'labioplastika', name: 'Labiaplasty', categorySlug: 'body', description: 'Detailed information about labiaplasty. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'labiaplasty surgery' },
  { id: 'lift-kofsheve', name: 'Thigh Lift', categorySlug: 'body', description: 'Detailed information about thigh lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'thigh lift' },
  { id: 'gynecomastia', name: 'Gynecomastia', categorySlug: 'body', description: 'Detailed information about Gynecomastia. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'male chest' },
  // New Body Services
  { id: 'cellulite-treatment', name: 'Cellulite Treatment', categorySlug: 'body', description: 'Detailed information about cellulite treatment. Learn about various procedures, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'cellulite reduction' },
  { id: 'plasma-arc-body', name: 'Plasma Arc (Body)', categorySlug: 'body', description: 'Detailed information about plasma arc treatments for the body. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin tightening body' },
  { id: 'carboxytherapy', name: 'Carboxytherapy', categorySlug: 'body', description: 'Detailed information about carboxytherapy. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin treatment' },
  { id: 'sclerotherapy', name: 'Sclerotherapy', categorySlug: 'body', description: 'Detailed information about sclerotherapy for vein treatment. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'vein treatment' },
  { id: 'lipolysis', name: 'Lipolysis', categorySlug: 'body', description: 'Detailed information about lipolysis for fat reduction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'fat reduction' },
  { id: 'laser-hair-removal', name: 'Laser Hair Removal', categorySlug: 'body', description: 'Detailed information about laser hair removal. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'hair removal' },
];

const faceServices: Service[] = faceServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const breastServices: Service[] = breastServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const bodyServices: Service[] = bodyServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));


export const serviceCategories: ServiceCategory[] = [
  {
    id: 'face',
    name: 'FACE',
    slug: 'face',
    description: 'Specialized services for improving and reshaping facial features.',
    services: faceServices.map(s => ({ ...s, categorySlug: 'face' })),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'facial aesthetics'
  },
  {
    id: 'breasts',
    name: 'BREASTS (Female)',
    slug: 'breasts',
    description: 'Procedures for breast augmentation, lift, reduction, and reconstruction.',
    services: breastServices.map(s => ({ ...s, categorySlug: 'breasts' })),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'breast surgery'
  },
  {
    id: 'body',
    name: 'BODY',
    slug: 'body',
    description: 'Services for body contouring and reshaping for a harmonious appearance.',
    services: bodyServices.map(s => ({ ...s, categorySlug: 'body' })),
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
