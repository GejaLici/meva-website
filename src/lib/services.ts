
import type { ServiceCategory, Service } from '@/types/services';

const facialSurgeryServices: Service[] = [
  { id: 'op-hunde', slug: 'rhinoplasty', image: '/images/woman-getting-ready-nose-job-surgery (1).jpg', imageHint: 'nose surgery detail' },
  { id: 'rim-hunde', slug: 'nose-tip-reshaping', image: '/images/Nose Tip Reshaping.png', imageHint: 'nose tip surgery' },
  { id: 'rim-vesheve', slug: 'otoplasty', image: '/images/otoplasty.png', imageHint: 'otoplasty results' },
  { id: 'mbj-flokeve', slug: 'hair-transplant', image: '/images/hair-transplant.png', imageHint: 'hair transplant before after' },
  { id: 'mbj-mjekres', slug: 'beard-transplant', image: '/images/Beard Transplant.png', imageHint: 'Beard Transplant results' },
  { id: 'mbj-vetullave', slug: 'eyebrow-transplant', image: '/images/Eyebrow Transplant.png', imageHint: 'eyebrow transplant detail' },
  { id: 'lift-vetullave', slug: 'eyebrow-lift', image: '/images/Eyebrow Lift (Browplasty).png', imageHint: 'eyebrow lift surgery' },
  { id: 'blefaroplastika', slug: 'blepharoplasty', image: '/images/Eyelid Surgery (Blepharoplasty).png', imageHint: 'eyelid surgery results' },
  { id: 'lift-fytyres', slug: 'face-lift', image: '/images/Face Lift (Rhytidectomy).png', imageHint: 'face lift surgery' },
  { id: 'rim-mjekres', slug: 'genioplasty', image: '/images/Chin Augmentation (Genioplasty).png', imageHint: 'chin augmentation surgery' },
];

const facialTreatmentsServices: Service[] = [
  { id: 'lip-reshaping', slug: 'lip-reshaping', image: '/images/Lip Reshaping & Augmentation.png', imageHint: 'lip fillers application' },
  { id: 'xanthelasma-plasma-arc', slug: 'eyelid-deposit-removal', image: '/images/eyelid-deposit-removal.png', imageHint: 'xanthelasma plasma device' },
  { id: 'multivitamin-treatment', slug: 'multivitamin-infusion-facial', image: '/images/Multivitamin Infusion Facial.png', imageHint: 'vitamin facial therapy' },
  { id: 'eyelids-plasma-arc', slug: 'non-surgical-eyelid-lift', image: '/images/Non-Surgical Eyelid Lift (Plasma Arc).png', imageHint: 'plasma eyelid treatment' },
  { id: 'cheekbone-reshaping', slug: 'cheekbone-contouring', image: '/images/Cheekbone Contouring (Fillers).png', imageHint: 'cheek fillers injection' },
  { id: 'microdermabrasion', slug: 'microdermabrasion', image: '/images/Microdermabrasion.png', imageHint: 'microdermabrasion skin procedure' },
  { id: 'jawline-contouring', slug: 'jawline-contouring', image: '/images/Jawline Contouring FillersThreads.png', imageHint: 'jawline fillers procedure' },
  { id: 'wrinkle-fillers', slug: 'dermal-fillers-wrinkles', image: '/images/Dermal Fillers for Wrinkles.png', imageHint: 'dermal fillers face application' },
  { id: 'prp-face', slug: 'prp-facial-rejuvenation', image: '/images/PRP Facial Rejuvenation.png', imageHint: 'prp facial therapy procedure' },
  { id: 'dark-circles-treatment', slug: 'dark-circles-treatment', image: '/images/Under-Eye Dark Circles Treatment.png', imageHint: 'dark circles eye treatment' },
  { id: 'prp-hair', slug: 'prp-hair-restoration', image: '/images/PRP Hair Restoration.png', imageHint: 'prp hair treatment scalp' },
  { id: 'white-peeling', slug: 'chemical-peel', image: '/images/Chemical Peels (White Peeling).png', imageHint: 'chemical peel skin application' },
  { id: 'microneedling', slug: 'microneedling', image: '/images/Microneedling (Collagen Induction Therapy).png', imageHint: 'microneedling device skin' },
  { id: 'radiofrequency-face', slug: 'radiofrequency-skin-tightening', image: '/images/Radiofrequency Skin Tightening (Face).png', imageHint: 'radiofrequency facial treatment' },
  { id: 'sulcus-filling', slug: 'nasolabial-fold-fillers', image: '/images/Nasolabial Fold Fillers (Sulcus Filling).png', imageHint: 'smile line fillers injection' },
  { id: 'chin-reshaping', slug: 'non-surgical-chin-reshaping', image: '/images/Non-Surgical Chin Reshaping (Fillers).png', imageHint: 'chin fillers procedure' },
];

const breastServices: Service[] = [
  { id: 'zmadh-gjoksit', slug: 'breast-augmentation', image: '/images/Breast Augmentation.png', imageHint: 'breast augmentation results' },
  { id: 'lift-gjoksit', slug: 'breast-lift', image: '/images/Breast Lift.png', imageHint: 'breast lift surgery' },
  { id: 'zvog-gjoksit', slug: 'breast-reduction', image: '/images/Breast Reduction.png', imageHint: 'breast reduction procedure' },
  { id: 'rikonst-gjoksit', slug: 'breast-reconstruction', image: '/images/Breast Reconstruction.png', imageHint: 'breast reconstruction process' },
];

const bodyServices: Service[] = [
  { id: 'lift-kraheve', slug: 'arm-lift', image: '/images/Arm Lift.png', imageHint: 'arm lift results' },
  { id: 'rim-barkut', slug: 'tummy-tuck', image: '/images/Tummy Tuck.png', imageHint: 'tummy tuck surgery' },
  { id: 'liposculptura', slug: 'liposculpture', image: '/images/Liposculpture.png', imageHint: 'liposculpture body contouring' },
  { id: 'rim-vitheve-bbl', slug: 'bbl-buttock-remodeling', image: '/images/BBL Buttock Remodeling.png', imageHint: 'buttock remodel surgery' },
  { id: 'labioplastika', slug: 'labiaplasty', image: '/images/Labiaplasty.png', imageHint: 'labiaplasty procedure' },
  { id: 'lift-kofsheve', slug: 'thigh-lift', image: '/images/Thigh Lift.png', imageHint: 'thigh lift results' },
  { id: 'gynecomastia', slug: 'gynecomastia', image: '/images/Gynecomastia.png', imageHint: 'male chest surgery' },
  { id: 'cellulite-treatment', slug: 'cellulite-treatment', image: '/images/Cellulite Treatment.png', imageHint: 'cellulite reduction therapy' },
  { id: 'plasma-arc-body', slug: 'plasma-arc-body', image: '/images/Plasma Arc (Body).png', imageHint: 'skin tightening body treatment' },
  { id: 'carboxytherapy', slug: 'carboxytherapy', image: '/images/Carboxytherapy.png', imageHint: 'skin treatment co2' },
  { id: 'sclerotherapy', slug: 'sclerotherapy', image: '/images/Sclerotherapy.png', imageHint: 'vein treatment legs' },
  { id: 'lipolysis', slug: 'lipolysis', image: '/images/Lipolysis.png', imageHint: 'fat reduction procedure' },
  { id: 'laser-hair-removal', slug: 'laser-hair-removal', image: '/images/Laser Hair Removal.png', imageHint: 'hair removal laser' },
];

const aestheticDentistryServices: Service[] = [
  { id: 'teeth-whitening', slug: 'teeth-whitening', image: '/images/Teeth Whitening.png', imageHint: 'teeth whitening smile close up' },
  { id: 'composite-veneers', slug: 'composite-veneers', image: '/images/Composite Veneers.png', imageHint: 'dental veneers beautiful smile' },
  { id: 'emax-veneers', slug: 'emax-veneers', image: '/images/E-Max Veneers.png', imageHint: 'porcelain veneers smile design' },
];

const prostheticsServices: Service[] = [
  { id: 'dental-crowns', slug: 'dental-crowns', image: '/images/Dental Crowns.png', imageHint: 'dental crown tooth model' },
  { id: 'dental-bridges', slug: 'dental-bridges', image: '/images/Dental Bridges.png', imageHint: 'dental bridge teeth model' },
  { id: 'dentures', slug: 'dentures', image: '/images/Dentures.png', imageHint: 'dentures smile model' },
];

const orthodonticsServices: Service[] = [
  { id: 'invisalign', slug: 'invisalign', image: '/images/Invisalign.png', imageHint: 'invisalign aligners smile transparent' },
  { id: 'fixed-braces', slug: 'fixed-braces', image: '/images/Fixed Braces.png', imageHint: 'dental braces smile metal' },
  { id: 'removable-appliances', slug: 'removable-appliances', image: '/images/Removable Appliances.png', imageHint: 'orthodontic appliance retainer' },
];

const restorativeDentistryServices: Service[] = [
  { id: 'teeth-cleaning', slug: 'teeth-cleaning', image: '/images/Teeth Cleaning (Calculus Removal).png', imageHint: 'dental cleaning hygiene tools' },
  { id: 'dental-fillings', slug: 'dental-fillings', image: '/images/Dental Fillings.png', imageHint: 'tooth filling dental procedure' },
  { id: 'root-canal-treatment', slug: 'root-canal-treatment', image: '/images/Root Canal Treatment.png', imageHint: 'root canal procedure tooth' },
];

const oralSurgeryServices: Service[] = [
  { id: 'tooth-extraction', slug: 'tooth-extraction', image: '/images/Tooth Extraction.png', imageHint: 'tooth extraction dental tools' },
  { id: 'dental-implants', slug: 'dental-implants', image: '/images/Dental Implants.png', imageHint: 'dental implant surgery model' },
  { id: 'apical-resection', slug: 'apical-resection', image: '/images/Apical Resection (Apicoectomy).png', imageHint: 'dental surgery procedure detail' },
];

const pediatricDentistryServices: Service[] = [
  { id: 'primary-teeth-care', slug: 'primary-teeth-care', image: '/images/Primary Teeth Care (Milk Teeth).png', imageHint: 'child dentist kids care' },
  { id: 'teeth-fluoridation', slug: 'teeth-fluoridation', image: '/images/Teeth Fluoridation.png', imageHint: 'fluoride treatment child dental' },
  { id: 'dental-sealants', slug: 'dental-sealants', image: '/images/Dental Sealants.png', imageHint: 'dental sealants kids teeth' },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'facial-surgery',
    slug: 'facial-surgery',
    services: facialSurgeryServices,
    image: '/images/beauty-natural-woman-studio.jpg',
    imageHint: 'facial surgery instruments',
    displayOnHome: true,
    icon: 'Gem'
  },
  {
    id: 'facial-treatments',
    slug: 'facial-treatments',
    services: facialTreatmentsServices,
    image: '/images/cute-woman-lying-procedure-rejuvenation-skin.jpg',
    imageHint: 'facial treatment collage',
    displayOnHome: true,
    icon: 'Leaf'
  },
  {
    id: 'breasts',
    slug: 'breasts',
    services: breastServices,
    image: '/images/close-beauty-portrait-topless-woman-with-perfect-skin-natural-make-up-plump-nude-lips-blue-background.jpg',
    imageHint: 'breast surgery results',
    displayOnHome: true,
    icon: 'Heart'
  },
  {
    id: 'body',
    slug: 'body',
    services: bodyServices,
    image: '/images/slim-young-woman-measuring-her-thin-waist-with-tape-measure-fitness-diet-concept.jpg',
    imageHint: 'body contouring technology',
    displayOnHome: true,
    icon: 'PersonStanding'
  },
  {
    id: 'aesthetic-dentistry',
    slug: 'aesthetic-dentistry',
    services: aestheticDentistryServices,
    image: '/images/Aesthetic Dentistry.png',
    imageHint: 'cosmetic dentistry smile'
  },
  {
    id: 'prosthetics',
    slug: 'prosthetics',
    services: prostheticsServices,
    image: '/images/Prosthetics.png',
    imageHint: 'dental prosthetics'
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    services: orthodonticsServices,
    image: '/images/Orthodontics.png',
    imageHint: 'orthodontics braces'
  },
  {
    id: 'restorative-dentistry',
    slug: 'restorative-dentistry',
    services: restorativeDentistryServices,
    image: '/images/Restorative & General Dentistry.png',
    imageHint: 'general dentistry tools'
  },
  {
    id: 'oral-surgery',
    slug: 'oral-surgery',
    services: oralSurgeryServices,
    image: '/images/Oral Surgery (Dental).png',
    imageHint: 'oral surgery instruments'
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    services: pediatricDentistryServices,
    image: '/images/Pediatric Dentistry.png',
    imageHint: 'child dentist office'
  },
  {
    id: 'dental-summary',
    slug: 'dental',
    services: [], // This is a summary card, no individual services needed here.
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'dental clinic modern equipment',
    displayOnHome: true,
    icon: 'Sparkles'
  },
];

export const getAllServices = (): Service[] => serviceCategories.flatMap(category => 
  category.services.map(service => ({...service, categorySlug: category.slug}))
);

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined =>
  serviceCategories.find(category => category.slug === slug);

export const getServiceBySlugs = (categorySlug: string, serviceSlug: string): Service | undefined => {
  const category = getCategoryBySlug(categorySlug);
  const service = category?.services.find(service => service.slug === serviceSlug);
  if (!service) return undefined;
  return { ...service, categorySlug };
};
