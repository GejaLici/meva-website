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
  { id: 'op-hunde', name: 'Operacioni i hundës', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth operacionit të hundës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'nose surgery' },
  { id: 'rim-hunde', name: 'Rimodelimi i hundës', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth rimodelimit të hundës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'nose reshaping' },
  { id: 'rim-vesheve', name: 'Rimodelimi i veshëve', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth rimodelimit të veshëve. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'ear surgery' },
  { id: 'mbj-flokeve', name: 'Mbjellja e flokëve', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth mbjelljes së flokëve. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'hair transplant' },
  { id: 'mbj-mjekres', name: 'Mbjellja e mjekrës', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth mbjelljes së mjekrës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'beard transplant' },
  { id: 'mbj-vetullave', name: 'Mbjellja e vetullave', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth mbjelljes së vetullave. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'eyebrow transplant' },
  { id: 'lift-vetullave', name: 'Lifting i vetullave', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth liftingut të vetullave. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'eyebrow lift' },
  { id: 'blefaroplastika', name: 'Blefaroplastika', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth blefaroplastikës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'eyelid surgery' },
  { id: 'lift-fytyres', name: 'Lifting i fytyrës', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth liftingut të fytyrës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'face lift' },
  { id: 'rim-mjekres', name: 'Rimodelimi i mjekrës', categorySlug: 'fytyra', description: 'Informacion i detajuar rreth rimodelimit të mjekrës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'chin remodel' },
].map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

const breastServices: Service[] = [
  { id: 'zmadh-gjoksit', name: 'Zmadhimi i gjoksit', categorySlug: 'gjoksi', description: 'Informacion i detajuar rreth zmadhimit të gjoksit. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'breast augmentation' },
  { id: 'lift-gjoksit', name: 'Lifting i gjoksit', categorySlug: 'gjoksi', description: 'Informacion i detajuar rreth liftingut të gjoksit. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'breast lift' },
  { id: 'zvog-gjoksit', name: 'Zvogëlimi i gjoksit', categorySlug: 'gjoksi', description: 'Informacion i detajuar rreth zvogëlimit të gjoksit. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'breast reduction' },
  { id: 'rikonst-gjoksit', name: 'Rikonstuktrimi i gjoksit', categorySlug: 'gjoksi', description: 'Informacion i detajuar rreth rikonstuktrimit të gjoksit. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'breast reconstruction' },
].map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

const bodyServices: Service[] = [
  { id: 'lift-kraheve', name: 'Lifting i krahëve', categorySlug: 'trupi', description: 'Informacion i detajuar rreth liftingut të krahëve. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'arm lift' },
  { id: 'rim-barkut', name: 'Rimodelimi i barkut', categorySlug: 'trupi', description: 'Informacion i detajuar rreth rimodelimit të barkut. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'tummy tuck' },
  { id: 'liposculptura', name: 'Liposculptura', categorySlug: 'trupi', description: 'Informacion i detajuar rreth liposculpturës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'liposculpture body' },
  { id: 'rim-vitheve-bbl', name: 'Rimodelimi i vitheve BBL', categorySlug: 'trupi', description: 'Informacion i detajuar rreth rimodelimit të vitheve BBL. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'buttock remodel' },
  { id: 'labioplastika', name: 'Labioplastika', categorySlug: 'trupi', description: 'Informacion i detajuar rreth labioplastikës. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'labiaplasty surgery' },
  { id: 'lift-kofsheve', name: 'Lifting i kofshëve', categorySlug: 'trupi', description: 'Informacion i detajuar rreth liftingut të kofshëve. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'thigh lift' },
  { id: 'gynecomastia', name: 'Gynecomastia', categorySlug: 'trupi', description: 'Informacion i detajuar rreth Gynecomastia. Mësoni rreth procedurës, përfitimeve dhe procesit të rikuperimit në NovaSculpt Clinic.', imageHint: 'male chest' },
].map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'fytyra',
    name: 'FYTYRA (Face)',
    slug: 'fytyra',
    description: 'Shërbime të specializuara për përmirësimin dhe rimodelimin e tipareve të fytyrës.',
    services: faceServices,
    image: 'https://placehold.co/800x600.png',
    imageHint: 'facial aesthetics'
  },
  {
    id: 'gjoksi',
    name: 'GJOKSI (Breasts - Femra)',
    slug: 'gjoksi',
    description: 'Procedura për zmadhimin, liftingun, zvogëlimin dhe rikonstruktimin e gjoksit.',
    services: breastServices,
    image: 'https://placehold.co/800x600.png',
    imageHint: 'breast surgery'
  },
  {
    id: 'trupi',
    name: 'TRUPI (Body)',
    slug: 'trupi',
    description: 'Shërbime për konturimin dhe rimodelimin e trupit për një pamje harmonike.',
    services: bodyServices,
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
