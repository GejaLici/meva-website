
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

const facialSurgeryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'op-hunde', categorySlug: 'facial-surgery', image: '/images/woman-getting-ready-nose-job-surgery (1).jpg', imageHint: 'nose surgery detail' },
  { id: 'rim-hunde', categorySlug: 'facial-surgery', image: '/images/Nose Tip Reshaping.png', imageHint: 'nose tip surgery' },
  { id: 'rim-vesheve', categorySlug: 'facial-surgery', image: '/images/otoplasty.png', imageHint: 'otoplasty results' },
  { id: 'mbj-flokeve', categorySlug: 'facial-surgery', image: '/images/hair-transplant.png', imageHint: 'hair transplant before after' },
  { id: 'mbj-mjekres', categorySlug: 'facial-surgery', image: '/images/Beard Transplant.png', imageHint: 'Beard Transplant results' },
  { id: 'mbj-vetullave', categorySlug: 'facial-surgery', image: '/images/Eyebrow Transplant.png', imageHint: 'eyebrow transplant detail' },
  { id: 'lift-vetullave', categorySlug: 'facial-surgery', image: '/images/Eyebrow Lift (Browplasty).png', imageHint: 'eyebrow lift surgery' },
  { id: 'blefaroplastika', categorySlug: 'facial-surgery', image: '/images/Eyelid Surgery (Blepharoplasty).png', imageHint: 'eyelid surgery results' },
  { id: 'lift-fytyres', categorySlug: 'facial-surgery', image: '/images/Face Lift (Rhytidectomy).png', imageHint: 'face lift surgery' },
  { id: 'rim-mjekres', categorySlug: 'facial-surgery', image: '/images/Chin Augmentation (Genioplasty).png', imageHint: 'chin augmentation surgery' },
];

const facialTreatmentsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'lip-reshaping', categorySlug: 'facial-treatments', image: '/images/Lip Reshaping & Augmentation.png', imageHint: 'lip fillers application' },
  { id: 'xanthelasma-plasma-arc', categorySlug: 'facial-treatments', image: '/images/Xanthelasma Removal (Plasma Arc).png', imageHint: 'xanthelasma plasma device' },
  { id: 'multivitamin-treatment', categorySlug: 'facial-treatments', image: '/images/Multivitamin Infusion Facial.png', imageHint: 'vitamin facial therapy' },
  { id: 'eyelids-plasma-arc', categorySlug: 'facial-treatments', image: '/images/Non-Surgical Eyelid Lift (Plasma Arc).png', imageHint: 'plasma eyelid treatment' },
  { id: 'cheekbone-reshaping', categorySlug: 'facial-treatments', image: '/images/Cheekbone Contouring (Fillers).png', imageHint: 'cheek fillers injection' },
  { id: 'microdermabrasion', categorySlug: 'facial-treatments', image: '/images/Microdermabrasion.png', imageHint: 'microdermabrasion skin procedure' },
  { id: 'jawline-contouring', categorySlug: 'facial-treatments', image: '/images/Jawline Contouring FillersThreads.png', imageHint: 'jawline fillers procedure' },
  { id: 'wrinkle-fillers', categorySlug: 'facial-treatments', image: '/images/Dermal Fillers for Wrinkles.png', imageHint: 'dermal fillers face application' },
  { id: 'prp-face', categorySlug: 'facial-treatments', image: '/images/PRP Facial Rejuvenation.png', imageHint: 'prp facial therapy procedure' },
  { id: 'dark-circles-treatment', categorySlug: 'facial-treatments', image: '/images/Under-Eye Dark Circles Treatment.png', imageHint: 'dark circles eye treatment' },
  { id: 'prp-hair', categorySlug: 'facial-treatments', image: '/images/PRP Hair Restoration.png', imageHint: 'prp hair treatment scalp' },
  { id: 'white-peeling', categorySlug: 'facial-treatments', image: '/images/Chemical Peels (White Peeling).png', imageHint: 'chemical peel skin application' },
  { id: 'microneedling', categorySlug: 'facial-treatments', image: '/images/Microneedling (Collagen Induction Therapy).png', imageHint: 'microneedling device skin' },
  { id: 'radiofrequency-face', categorySlug: 'facial-treatments', image: '/images/Radiofrequency Skin Tightening (Face).png', imageHint: 'radiofrequency facial treatment' },
  { id: 'sulcus-filling', categorySlug: 'facial-treatments', image: '/images/Nasolabial Fold Fillers (Sulcus Filling).png', imageHint: 'smile line fillers injection' },
  { id: 'chin-reshaping', categorySlug: 'facial-treatments', image: '/images/Non-Surgical Chin Reshaping (Fillers).png', imageHint: 'chin fillers procedure' },
];

const breastServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'zmadh-gjoksit', categorySlug: 'breasts', image: '/images/Breast Augmentation.png', imageHint: 'breast augmentation results' },
  { id: 'lift-gjoksit', categorySlug: 'breasts', image: '/images/Breast Lift.png', imageHint: 'breast lift surgery' },
  { id: 'zvog-gjoksit', categorySlug: 'breasts', image: '/images/Breast Reduction.png', imageHint: 'breast reduction procedure' },
  { id: 'rikonst-gjoksit', categorySlug: 'breasts', image: '/images/Breast Reconstruction.png', imageHint: 'breast reconstruction process' },
];

const bodyServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'lift-kraheve', categorySlug: 'body', image: '/images/Arm Lift.png', imageHint: 'arm lift results' },
  { id: 'rim-barkut', categorySlug: 'body', image: '/images/Tummy Tuck.png', imageHint: 'tummy tuck surgery' },
  { id: 'liposculptura', categorySlug: 'body', image: '/images/Liposculpture.png', imageHint: 'liposculpture body contouring' },
  { id: 'rim-vitheve-bbl', categorySlug: 'body', image: '/images/BBL Buttock Remodeling.png', imageHint: 'buttock remodel surgery' },
  { id: 'labioplastika', categorySlug: 'body', image: '/images/Labiaplasty.png', imageHint: 'labiaplasty procedure' },
  { id: 'lift-kofsheve', categorySlug: 'body', image: '/images/Thigh Lift.png', imageHint: 'thigh lift results' },
  { id: 'gynecomastia', categorySlug: 'body', image: '/images/Gynecomastia.png', imageHint: 'male chest surgery' },
  { id: 'cellulite-treatment', categorySlug: 'body', image: '/images/Cellulite Treatment.png', imageHint: 'cellulite reduction therapy' },
  { id: 'plasma-arc-body', categorySlug: 'body', image: '/images/Plasma Arc (Body).png', imageHint: 'skin tightening body treatment' },
  { id: 'carboxytherapy', categorySlug: 'body', image: '/images/Carboxytherapy.png', imageHint: 'skin treatment co2' },
  { id: 'sclerotherapy', categorySlug: 'body', image: '/images/Sclerotherapy.png', imageHint: 'vein treatment legs' },
  { id: 'lipolysis', categorySlug: 'body', image: '/images/Lipolysis.png', imageHint: 'fat reduction procedure' },
  { id: 'laser-hair-removal', categorySlug: 'body', image: '/images/Laser Hair Removal.png', imageHint: 'hair removal laser' },
];

const aestheticDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'teeth-whitening', categorySlug: 'aesthetic-dentistry', image: '/images/Teeth Whitening.png', imageHint: 'teeth whitening smile close up' },
  { id: 'composite-veneers', categorySlug: 'aesthetic-dentistry', image: '/images/Composite Veneers.png', imageHint: 'dental veneers beautiful smile' },
  { id: 'emax-veneers', categorySlug: 'aesthetic-dentistry', image: '/images/E-Max Veneers.png', imageHint: 'porcelain veneers smile design' },
];

const prostheticsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'dental-crowns', categorySlug: 'prosthetics', image: '/images/Dental Crowns.png', imageHint: 'dental crown tooth model' },
  { id: 'dental-bridges', categorySlug: 'prosthetics', image: '/images/Dental Bridges.png', imageHint: 'dental bridge teeth model' },
  { id: 'dentures', categorySlug: 'prosthetics', image: '/images/Dentures.png', imageHint: 'dentures smile model' },
];

const orthodonticsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'invisalign', categorySlug: 'orthodontics', image: '/images/Invisalign.png', imageHint: 'invisalign aligners smile transparent' },
  { id: 'fixed-braces', categorySlug: 'orthodontics', image: '/images/Fixed Braces.png', imageHint: 'dental braces smile metal' },
  { id: 'removable-appliances', categorySlug: 'orthodontics', image: '/images/Removable Appliances.png', imageHint: 'orthodontic appliance retainer' },
];

const restorativeDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'teeth-cleaning', categorySlug: 'restorative-dentistry', image: '/images/Teeth Cleaning (Calculus Removal).png', imageHint: 'dental cleaning hygiene tools' },
  { id: 'dental-fillings', categorySlug: 'restorative-dentistry', image: '/images/Dental Fillings.png', imageHint: 'tooth filling dental procedure' },
  { id: 'root-canal-treatment', categorySlug: 'restorative-dentistry', image: '/images/Root Canal Treatment.png', imageHint: 'root canal procedure tooth' },
];

const oralSurgeryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'tooth-extraction', categorySlug: 'oral-surgery', image: '/images/Tooth Extraction.png', imageHint: 'tooth extraction dental tools' },
  { id: 'dental-implants', categorySlug: 'oral-surgery', image: '/images/Dental Implants.png', imageHint: 'dental implant surgery model' },
  { id: 'apical-resection', categorySlug: 'oral-surgery', image: '/images/Apical Resection (Apicoectomy).png', imageHint: 'dental surgery procedure detail' },
];

const pediatricDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'primary-teeth-care', categorySlug: 'pediatric-dentistry', image: '/images/Primary Teeth Care (Milk Teeth).png', imageHint: 'child dentist kids care' },
  { id: 'teeth-fluoridation', categorySlug: 'pediatric-dentistry', image: '/images/Teeth Fluoridation.png', imageHint: 'fluoride treatment child dental' },
  { id: 'dental-sealants', categorySlug: 'pediatric-dentistry', image: '/images/Dental Sealants.png', imageHint: 'dental sealants kids teeth' },
];

const slugMapping: { [key: string]: string } = {
    'op-hunde': 'nose-surgery-rhinoplasty',
    'rim-hunde': 'nose-tip-reshaping',
    'rim-vesheve': 'ear-reshaping-otoplasty',
    'mbj-flokeve': 'hair-transplant',
    'mbj-mjekres': 'beard-transplant',
    'mbj-vetullave': 'eyebrow-transplant',
    'lift-vetullave': 'eyebrow-lift-browplasty',
    'blefaroplastika': 'eyelid-surgery-blepharoplasty',
    'lift-fytyres': 'face-lift-rhytidectomy',
    'rim-mjekres': 'chin-augmentation-genioplasty',
    'lip-reshaping': 'lip-reshaping-augmentation',
    'xanthelasma-plasma-arc': 'xanthelasma-removal-plasma-arc',
    'multivitamin-treatment': 'multivitamin-infusion-facial',
    'eyelids-plasma-arc': 'non-surgical-eyelid-lift-plasma-arc',
    'cheekbone-reshaping': 'cheekbone-contouring-fillers',
    'microdermabrasion': 'microdermabrasion',
    'jawline-contouring': 'jawline-contouring-fillers-threads',
    'wrinkle-fillers': 'dermal-fillers-for-wrinkles',
    'prp-face': 'prp-facial-rejuvenation',
    'dark-circles-treatment': 'under-eye-dark-circles-treatment',
    'prp-hair': 'prp-hair-restoration',
    'white-peeling': 'chemical-peels-white-peeling',
    'microneedling': 'microneedling-collagen-induction-therapy',
    'radiofrequency-face': 'radiofrequency-skin-tightening-face',
    'sulcus-filling': 'nasolabial-fold-fillers-sulcus-filling',
    'chin-reshaping': 'non-surgical-chin-reshaping-fillers',
    'zmadh-gjoksit': 'breast-augmentation',
    'lift-gjoksit': 'breast-lift',
    'zvog-gjoksit': 'breast-reduction',
    'rikonst-gjoksit': 'breast-reconstruction',
    'lift-kraheve': 'arm-lift',
    'rim-barkut': 'tummy-tuck',
    'liposculptura': 'liposculpture',
    'rim-vitheve-bbl': 'bbl-buttock-remodeling',
    'labioplastika': 'labiaplasty',
    'lift-kofsheve': 'thigh-lift',
    'gynecomastia': 'gynecomastia',
    'cellulite-treatment': 'cellulite-treatment',
    'plasma-arc-body': 'plasma-arc-body',
    'carboxytherapy': 'carboxytherapy',
    'sclerotherapy': 'sclerotherapy',
    'lipolysis': 'lipolysis',
    'laser-hair-removal': 'laser-hair-removal',
    'teeth-whitening': 'teeth-whitening',
    'composite-veneers': 'composite-veneers',
    'emax-veneers': 'e-max-veneers',
    'dental-crowns': 'dental-crowns',
    'dental-bridges': 'dental-bridges',
    'dentures': 'dentures',
    'invisalign': 'invisalign',
    'fixed-braces': 'fixed-braces',
    'removable-appliances': 'removable-appliances',
    'teeth-cleaning': 'teeth-cleaning-calculus-removal',
    'dental-fillings': 'dental-fillings',
    'root-canal-treatment': 'root-canal-treatment',
    'tooth-extraction': 'tooth-extraction',
    'dental-implants': 'dental-implants',
    'apical-resection': 'apical-resection-apicoectomy',
    'primary-teeth-care': 'primary-teeth-care-milk-teeth',
    'teeth-fluoridation': 'teeth-fluoridation',
    'dental-sealants': 'dental-sealants'
};


const facialSurgeryServices: Service[] = facialSurgeryServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));
const facialTreatmentsServices: Service[] = facialTreatmentsServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));
const breastServices: Service[] = breastServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));
const bodyServices: Service[] = bodyServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));

const aestheticDentistryServices: Service[] = aestheticDentistryServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: '/images/Aesthetic Dentistry.png' }));
const prostheticsServices: Service[] = prostheticsServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || '/images/Prosthetics.png' }));
const orthodonticsServices: Service[] = orthodonticsServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));
const restorativeDentistryServices: Service[] = restorativeDentistryServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));
const oralSurgeryServices: Service[] = oralSurgeryServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));
const pediatricDentistryServices: Service[] = pediatricDentistryServicesBase.map(s => ({ ...s, slug: slugMapping[s.id], image: s.image || 'https://placehold.co/600x400.png' }));


export const serviceCategories: ServiceCategory[] = [
  {
    id: 'facial-surgery',
    slug: 'facial-surgery',
    services: facialSurgeryServices.map(s => ({ ...s, categorySlug: 'facial-surgery' })),
    image: '/images/beauty-natural-woman-studio.jpg',
    imageHint: 'facial surgery instruments'
  },
  {
    id: 'facial-treatments',
    slug: 'facial-treatments',
    services: facialTreatmentsServices.map(s => ({ ...s, categorySlug: 'facial-treatments' })),
    image: '/images/cute-woman-lying-procedure-rejuvenation-skin.jpg',
    imageHint: 'facial treatment collage'
  },
  {
    id: 'breasts',
    slug: 'breasts',
    services: breastServices.map(s => ({ ...s, categorySlug: 'breasts' })),
    image: '/images/close-beauty-portrait-topless-woman-with-perfect-skin-natural-make-up-plump-nude-lips-blue-background.jpg',
    imageHint: 'breast surgery results'
  },
  {
    id: 'body',
    slug: 'body',
    services: bodyServices.map(s => ({ ...s, categorySlug: 'body' })),
    image: '/images/slim-young-woman-measuring-her-thin-waist-with-tape-measure-fitness-diet-concept.jpg',
    imageHint: 'body contouring technology'
  },
  {
    id: 'aesthetic-dentistry',
    slug: 'aesthetic-dentistry',
    services: aestheticDentistryServices.map(s => ({...s, categorySlug: 'aesthetic-dentistry'})),
    image: '/images/Aesthetic Dentistry.png',
    imageHint: 'cosmetic dentistry smile'
  },
  {
    id: 'prosthetics',
    slug: 'prosthetics',
    services: prostheticsServices.map(s => ({...s, categorySlug: 'prosthetics'})),
    image: '/images/Prosthetics.png',
    imageHint: 'dental prosthetics'
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    services: orthodonticsServices.map(s => ({...s, categorySlug: 'orthodontics'})),
    image: '/images/Orthodontics.png',
    imageHint: 'orthodontics braces'
  },
  {
    id: 'restorative-dentistry',
    slug: 'restorative-dentistry',
    services: restorativeDentistryServices.map(s => ({...s, categorySlug: 'restorative-dentistry'})),
    image: '/images/Restorative & General Dentistry.png',
    imageHint: 'general dentistry tools'
  },
  {
    id: 'oral-surgery',
    slug: 'oral-surgery',
    services: oralSurgeryServices.map(s => ({...s, categorySlug: 'oral-surgery'})),
    image: '/images/Oral Surgery (Dental).png',
    imageHint: 'oral surgery instruments'
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    services: pediatricDentistryServices.map(s => ({...s, categorySlug: 'pediatric-dentistry'})),
    image: '/images/Pediatric Dentistry.png',
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

    