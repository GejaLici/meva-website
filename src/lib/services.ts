
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
  { id: 'cellulite-treatment', name: 'Cellulite Treatment', categorySlug: 'body', description: 'Detailed information about cellulite treatment. Learn about various procedures, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'cellulite reduction' },
  { id: 'plasma-arc-body', name: 'Plasma Arc (Body)', categorySlug: 'body', description: 'Detailed information about plasma arc treatments for the body. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin tightening body' },
  { id: 'carboxytherapy', name: 'Carboxytherapy', categorySlug: 'body', description: 'Detailed information about carboxytherapy. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'skin treatment' },
  { id: 'sclerotherapy', name: 'Sclerotherapy', categorySlug: 'body', description: 'Detailed information about sclerotherapy for vein treatment. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'vein treatment' },
  { id: 'lipolysis', name: 'Lipolysis', categorySlug: 'body', description: 'Detailed information about lipolysis for fat reduction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'fat reduction' },
  { id: 'laser-hair-removal', name: 'Laser Hair Removal', categorySlug: 'body', description: 'Detailed information about laser hair removal. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', imageHint: 'hair removal' },
];

const aestheticDentistryServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'teeth-whitening', name: 'Teeth Whitening', categorySlug: 'aesthetic-dentistry', description: 'Professional teeth whitening services for a brighter, more confident smile. Discover effective treatments and lasting results.', imageHint: 'teeth whitening smile' },
  { id: 'composite-veneers', name: 'Composite Veneers', categorySlug: 'aesthetic-dentistry', description: 'Transform your smile with custom-crafted composite veneers. Ideal for correcting chips, gaps, or discoloration.', imageHint: 'dental veneers beautiful' },
  { id: 'emax-veneers', name: 'E-Max Veneers', categorySlug: 'aesthetic-dentistry', description: 'Achieve a stunning, natural-looking smile with high-quality E-Max porcelain veneers, known for their durability and beauty.', imageHint: 'porcelain veneers smile' },
];

const prostheticsServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'dental-crowns', name: 'Dental Crowns', categorySlug: 'prosthetics', description: 'Restore the strength, shape, and appearance of damaged teeth with custom-fitted dental crowns.', imageHint: 'dental crown tooth' },
  { id: 'dental-bridges', name: 'Dental Bridges', categorySlug: 'prosthetics', description: 'Replace missing teeth and restore your smile with durable and natural-looking dental bridges.', imageHint: 'dental bridge teeth' },
  { id: 'dentures', name: 'Dentures', categorySlug: 'prosthetics', description: 'Comfortable and custom-made dentures to replace missing teeth and improve oral function and aesthetics.', imageHint: 'dentures smile' },
];

const orthodonticsServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'invisalign', name: 'Invisalign', categorySlug: 'orthodontics', description: 'Straighten your teeth discreetly and comfortably with Invisalign clear aligners. The modern solution to a perfect smile.', imageHint: 'invisalign aligners smile' },
  { id: 'fixed-braces', name: 'Fixed Braces', categorySlug: 'orthodontics', description: 'Traditional fixed braces for effective teeth alignment and bite correction, suitable for various orthodontic needs.', imageHint: 'dental braces smile' },
  { id: 'removable-appliances', name: 'Removable Appliances', categorySlug: 'orthodontics', description: 'Customized removable orthodontic appliances for specific alignment needs and maintaining results.', imageHint: 'orthodontic appliance' },
];

const restorativeDentistryServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'teeth-cleaning', name: 'Teeth Cleaning (Calculus Removal)', categorySlug: 'restorative-dentistry', description: 'Professional dental cleaning to remove plaque and calculus, promoting healthy gums and teeth.', imageHint: 'dental cleaning hygiene' },
  { id: 'dental-fillings', name: 'Dental Fillings', categorySlug: 'restorative-dentistry', description: 'Restore decayed teeth with durable dental fillings, matching the natural color of your teeth.', imageHint: 'tooth filling dental' },
  { id: 'root-canal-treatment', name: 'Root Canal Treatment', categorySlug: 'restorative-dentistry', description: 'Save infected teeth with expert root canal therapy, relieving pain and preserving your natural tooth.', imageHint: 'root canal procedure' },
];

const oralSurgeryServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'tooth-extraction', name: 'Tooth Extraction', categorySlug: 'oral-surgery', description: 'Safe and comfortable tooth extraction procedures, including wisdom teeth removal, by experienced oral surgeons.', imageHint: 'tooth extraction dental' },
  { id: 'dental-implants', name: 'Dental Implants', categorySlug: 'oral-surgery', description: 'Permanent solutions for missing teeth with high-quality dental implants that look and feel natural.', imageHint: 'dental implant surgery' },
  { id: 'apical-resection', name: 'Apical Resection (Apicoectomy)', categorySlug: 'oral-surgery', description: 'Specialized surgical procedure to treat infections at the root tip and save the natural tooth.', imageHint: 'dental surgery procedure' },
];

const pediatricDentistryServicesBase: Omit<Service, 'slug' | 'image'>[] = [
  { id: 'primary-teeth-care', name: 'Primary Teeth Care (Milk Teeth)', categorySlug: 'pediatric-dentistry', description: 'Gentle and comprehensive dental care for children, focusing on the health of primary (milk) teeth.', imageHint: 'child dentist kids' },
  { id: 'teeth-fluoridation', name: 'Teeth Fluoridation', categorySlug: 'pediatric-dentistry', description: 'Protective fluoride treatments to strengthen children’s teeth and prevent cavities.', imageHint: 'fluoride treatment child' },
  { id: 'dental-sealants', name: 'Dental Sealants', categorySlug: 'pediatric-dentistry', description: 'Application of dental sealants to protect children’s molars from decay.', imageHint: 'dental sealants kids' },
];


const faceServices: Service[] = faceServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const breastServices: Service[] = breastServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const bodyServices: Service[] = bodyServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));

const aestheticDentistryServices: Service[] = aestheticDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const prostheticsServices: Service[] = prostheticsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const orthodonticsServices: Service[] = orthodonticsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const restorativeDentistryServices: Service[] = restorativeDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const oralSurgeryServices: Service[] = oralSurgeryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));
const pediatricDentistryServices: Service[] = pediatricDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: `https://placehold.co/600x400.png` }));


export const serviceCategories: ServiceCategory[] = [
  {
    id: 'face',
    name: 'FACE (Aesthetic)',
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
    name: 'BODY (Aesthetic)',
    slug: 'body',
    description: 'Services for body contouring and reshaping for a harmonious appearance.',
    services: bodyServices.map(s => ({ ...s, categorySlug: 'body' })),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'body contouring'
  },
  {
    id: 'aesthetic-dentistry',
    name: 'Aesthetic Dentistry',
    slug: 'aesthetic-dentistry',
    description: 'Enhancing smiles with advanced cosmetic dental procedures for a radiant look.',
    services: aestheticDentistryServices.map(s => ({...s, categorySlug: 'aesthetic-dentistry'})),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'cosmetic dentistry smile'
  },
  {
    id: 'prosthetics',
    name: 'Prosthetics',
    slug: 'prosthetics',
    description: 'Custom dental prosthetics to restore function and aesthetics for a complete smile.',
    services: prostheticsServices.map(s => ({...s, categorySlug: 'prosthetics'})),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'dental prosthetics'
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    slug: 'orthodontics',
    description: 'Specialized orthodontic treatments for perfectly aligned teeth and a confident smile.',
    services: orthodonticsServices.map(s => ({...s, categorySlug: 'orthodontics'})),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'orthodontics braces'
  },
  {
    id: 'restorative-dentistry',
    name: 'Restorative & General Dentistry',
    slug: 'restorative-dentistry',
    description: 'Comprehensive dental care including fillings, cleanings, and root canal treatments.',
    services: restorativeDentistryServices.map(s => ({...s, categorySlug: 'restorative-dentistry'})),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'general dentistry tools'
  },
  {
    id: 'oral-surgery',
    name: 'Oral Surgery',
    slug: 'oral-surgery',
    description: 'Expert oral surgery services including extractions, implants, and specialized procedures.',
    services: oralSurgeryServices.map(s => ({...s, categorySlug: 'oral-surgery'})),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'oral surgery instruments'
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    slug: 'pediatric-dentistry',
    description: 'Gentle and specialized dental care for children, ensuring a positive experience.',
    services: pediatricDentistryServices.map(s => ({...s, categorySlug: 'pediatric-dentistry'})),
    image: 'https://placehold.co/800x600.png',
    imageHint: 'child dentist office'
  },
];

export const getAllServices = (): Service[] => serviceCategories.flatMap(category => category.services);

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined =>
  serviceCategories.find(category => category.slug === slug);

export const getServiceBySlugs = (categorySlug: string, serviceSlug: string): Service | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find(service => service.slug === serviceSlug);
};
