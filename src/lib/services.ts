
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
  { id: 'op-hunde', name: 'Nose Surgery (Rhinoplasty)', categorySlug: 'facial-surgery', description: 'Surgical procedure to reshape or resize the nose for aesthetic or functional improvement. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: '/images/woman-getting-ready-nose-job-surgery (1).jpg', imageHint: 'nose surgery detail' },
  { id: 'rim-hunde', name: 'Nose Tip Reshaping', categorySlug: 'facial-surgery', description: 'Specialized surgical refinement of the nasal tip for improved definition and appearance. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'nose tip surgery' },
  { id: 'rim-vesheve', name: 'Ear Reshaping (Otoplasty)', categorySlug: 'facial-surgery', description: 'Surgical correction of prominent or misshapen ears to create a more balanced facial appearance. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'otoplasty results' },
  { id: 'mbj-flokeve', name: 'Hair Transplant', categorySlug: 'facial-surgery', description: 'Surgical restoration of hair to areas with thinning or baldness, using advanced transplantation techniques. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'hair transplant before after' },
  { id: 'mbj-mjekres', name: 'Beard Transplant', categorySlug: 'facial-surgery', description: 'Surgical procedure to enhance beard density and shape using hair transplantation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'beard transplant results' },
  { id: 'mbj-vetullave', name: 'Eyebrow Transplant', categorySlug: 'facial-surgery', description: 'Surgical restoration or enhancement of eyebrows using hair transplantation for fuller, defined brows. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'eyebrow transplant detail' },
  { id: 'lift-vetullave', name: 'Eyebrow Lift (Browplasty)', categorySlug: 'facial-surgery', description: 'Surgical procedure to elevate the eyebrows, reducing forehead wrinkles and creating a more youthful look. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'eyebrow lift surgery' },
  { id: 'blefaroplastika', name: 'Eyelid Surgery (Blepharoplasty)', categorySlug: 'facial-surgery', description: 'Surgical procedure to correct droopy eyelids or remove under-eye bags for a rejuvenated appearance. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'eyelid surgery results' },
  { id: 'lift-fytyres', name: 'Face Lift (Rhytidectomy)', categorySlug: 'facial-surgery', description: 'Comprehensive surgical procedure to address sagging skin, wrinkles, and signs of aging in the face and neck. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'face lift surgery' },
  { id: 'rim-mjekres', name: 'Chin Augmentation (Genioplasty)', categorySlug: 'facial-surgery', description: 'Surgical procedure to reshape or enhance the chin, improving facial balance and profile. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'chin augmentation surgery' },
];

const facialTreatmentsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'lip-reshaping', name: 'Lip Reshaping & Augmentation', categorySlug: 'facial-treatments', description: 'Non-surgical enhancement of lips using fillers for improved volume, shape, and definition. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'lip fillers' },
  { id: 'xanthelasma-plasma-arc', name: 'Xanthelasma Removal (Plasma Arc)', categorySlug: 'facial-treatments', description: 'Non-invasive removal of xanthelasma (cholesterol deposits on eyelids) using Plasma Arc technology. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'xanthelasma plasma' },
  { id: 'multivitamin-treatment', name: 'Multivitamin Infusion Facial', categorySlug: 'facial-treatments', description: 'Revitalizing facial treatment infusing skin with essential vitamins for improved radiance and health. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'vitamin facial' },
  { id: 'eyelids-plasma-arc', name: 'Non-Surgical Eyelid Lift (Plasma Arc)', categorySlug: 'facial-treatments', description: 'Non-invasive tightening of eyelid skin using Plasma Arc technology as an alternative to surgical blepharoplasty. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'plasma eyelid lift' },
  { id: 'cheekbone-reshaping', name: 'Cheekbone Contouring (Fillers)', categorySlug: 'facial-treatments', description: 'Non-surgical enhancement of cheekbones using dermal fillers for improved definition and facial contours. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'cheek fillers' },
  { id: 'microdermabrasion', name: 'Microdermabrasion', categorySlug: 'facial-treatments', description: 'Exfoliating treatment to remove dead skin cells, improve skin texture, and reduce minor imperfections. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'microdermabrasion skin' },
  { id: 'jawline-contouring', name: 'Jawline Contouring (Fillers/Threads)', categorySlug: 'facial-treatments', description: 'Non-surgical enhancement of the jawline using dermal fillers or threads for a more defined and sculpted look. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'jawline fillers' },
  { id: 'wrinkle-fillers', name: 'Dermal Fillers for Wrinkles', categorySlug: 'facial-treatments', description: 'Injectable treatments to smooth out wrinkles and fine lines, restoring volume and youthfulness. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'dermal fillers face' },
  { id: 'prp-face', name: 'PRP Facial Rejuvenation', categorySlug: 'facial-treatments', description: 'Platelet-Rich Plasma (PRP) therapy to stimulate collagen production and rejuvenate facial skin. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'prp facial therapy' },
  { id: 'dark-circles-treatment', name: 'Under-Eye Dark Circles Treatment', categorySlug: 'facial-treatments', description: 'Treatments to reduce the appearance of dark circles under the eyes, tailored to the underlying cause. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'dark circles eye' },
  { id: 'prp-hair', name: 'PRP Hair Restoration', categorySlug: 'facial-treatments', description: 'Platelet-Rich Plasma (PRP) therapy for the scalp to stimulate hair growth and improve hair density. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'prp hair treatment' },
  { id: 'white-peeling', name: 'Chemical Peels (White Peeling)', categorySlug: 'facial-treatments', description: 'Superficial chemical peel to improve skin tone, texture, and reduce blemishes. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'chemical peel skin' },
  { id: 'microneedling', name: 'Microneedling (Collagen Induction Therapy)', categorySlug: 'facial-treatments', description: 'Procedure using fine needles to create micro-injuries, stimulating collagen and elastin production for skin rejuvenation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'microneedling device' },
  { id: 'radiofrequency-face', name: 'Radiofrequency Skin Tightening (Face)', categorySlug: 'facial-treatments', description: 'Non-invasive treatment using radiofrequency energy to heat skin tissue, stimulating collagen and tightening the skin. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'radiofrequency facial' },
  { id: 'sulcus-filling', name: 'Nasolabial Fold Fillers (Sulcus Filling)', categorySlug: 'facial-treatments', description: 'Dermal fillers to reduce the appearance of nasolabial folds (smile lines). Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'smile line fillers' },
  { id: 'chin-reshaping', name: 'Non-Surgical Chin Reshaping (Fillers)', categorySlug: 'facial-treatments', description: 'Enhancement or reshaping of the chin using dermal fillers for improved facial balance. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'chin fillers' },
];

const breastServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'zmadh-gjoksit', name: 'Breast Augmentation', categorySlug: 'breasts', description: 'Detailed information about breast augmentation. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'breast augmentation' },
  { id: 'lift-gjoksit', name: 'Breast Lift', categorySlug: 'breasts', description: 'Detailed information about breast lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'breast lift' },
  { id: 'zvog-gjoksit', name: 'Breast Reduction', categorySlug: 'breasts', description: 'Detailed information about breast reduction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'breast reduction' },
  { id: 'rikonst-gjoksit', name: 'Breast Reconstruction', categorySlug: 'breasts', description: 'Detailed information about breast reconstruction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'breast reconstruction' },
];

const bodyServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'lift-kraheve', name: 'Arm Lift', categorySlug: 'body', description: 'Detailed information about arm lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'arm lift' },
  { id: 'rim-barkut', name: 'Tummy Tuck', categorySlug: 'body', description: 'Detailed information about tummy tuck. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'tummy tuck' },
  { id: 'liposculptura', name: 'Liposculpture', categorySlug: 'body', description: 'Detailed information about liposculpture. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'liposculpture body' },
  { id: 'rim-vitheve-bbl', name: 'BBL Buttock Remodeling', categorySlug: 'body', description: 'Detailed information about BBL buttock remodeling. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'buttock remodel' },
  { id: 'labioplastika', name: 'Labiaplasty', categorySlug: 'body', description: 'Detailed information about labiaplasty. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'labiaplasty surgery' },
  { id: 'lift-kofsheve', name: 'Thigh Lift', categorySlug: 'body', description: 'Detailed information about thigh lift. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'thigh lift' },
  { id: 'gynecomastia', name: 'Gynecomastia', categorySlug: 'body', description: 'Detailed information about Gynecomastia. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'male chest' },
  { id: 'cellulite-treatment', name: 'Cellulite Treatment', categorySlug: 'body', description: 'Detailed information about cellulite treatment. Learn about various procedures, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'cellulite reduction' },
  { id: 'plasma-arc-body', name: 'Plasma Arc (Body)', categorySlug: 'body', description: 'Detailed information about plasma arc treatments for the body. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'skin tightening body' },
  { id: 'carboxytherapy', name: 'Carboxytherapy', categorySlug: 'body', description: 'Detailed information about carboxytherapy. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'skin treatment' },
  { id: 'sclerotherapy', name: 'Sclerotherapy', categorySlug: 'body', description: 'Detailed information about sclerotherapy for vein treatment. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'vein treatment' },
  { id: 'lipolysis', name: 'Lipolysis', categorySlug: 'body', description: 'Detailed information about lipolysis for fat reduction. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'fat reduction' },
  { id: 'laser-hair-removal', name: 'Laser Hair Removal', categorySlug: 'body', description: 'Detailed information about laser hair removal. Learn about the procedure, benefits, and recovery process at NovaSculpt Clinic.', image: 'https://placehold.co/600x400.png', imageHint: 'hair removal' },
];

const aestheticDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'teeth-whitening', name: 'Teeth Whitening', categorySlug: 'aesthetic-dentistry', description: 'Professional teeth whitening services for a brighter, more confident smile. Discover effective treatments and lasting results.', image: 'https://placehold.co/600x400.png', imageHint: 'teeth whitening smile' },
  { id: 'composite-veneers', name: 'Composite Veneers', categorySlug: 'aesthetic-dentistry', description: 'Transform your smile with custom-crafted composite veneers. Ideal for correcting chips, gaps, or discoloration.', image: 'https://placehold.co/600x400.png', imageHint: 'dental veneers beautiful' },
  { id: 'emax-veneers', name: 'E-Max Veneers', categorySlug: 'aesthetic-dentistry', description: 'Achieve a stunning, natural-looking smile with high-quality E-Max porcelain veneers, known for their durability and beauty.', image: 'https://placehold.co/600x400.png', imageHint: 'porcelain veneers smile' },
];

const prostheticsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'dental-crowns', name: 'Dental Crowns', categorySlug: 'prosthetics', description: 'Restore the strength, shape, and appearance of damaged teeth with custom-fitted dental crowns.', image: 'https://placehold.co/600x400.png', imageHint: 'dental crown tooth' },
  { id: 'dental-bridges', name: 'Dental Bridges', categorySlug: 'prosthetics', description: 'Replace missing teeth and restore your smile with durable and natural-looking dental bridges.', image: 'https://placehold.co/600x400.png', imageHint: 'dental bridge teeth' },
  { id: 'dentures', name: 'Dentures', categorySlug: 'prosthetics', description: 'Comfortable and custom-made dentures to replace missing teeth and improve oral function and aesthetics.', image: 'https://placehold.co/600x400.png', imageHint: 'dentures smile' },
];

const orthodonticsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'invisalign', name: 'Invisalign', categorySlug: 'orthodontics', description: 'Straighten your teeth discreetly and comfortably with Invisalign clear aligners. The modern solution to a perfect smile.', image: 'https://placehold.co/600x400.png', imageHint: 'invisalign aligners smile' },
  { id: 'fixed-braces', name: 'Fixed Braces', categorySlug: 'orthodontics', description: 'Traditional fixed braces for effective teeth alignment and bite correction, suitable for various orthodontic needs.', image: 'https://placehold.co/600x400.png', imageHint: 'dental braces smile' },
  { id: 'removable-appliances', name: 'Removable Appliances', categorySlug: 'orthodontics', description: 'Customized removable orthodontic appliances for specific alignment needs and maintaining results.', image: 'https://placehold.co/600x400.png', imageHint: 'orthodontic appliance' },
];

const restorativeDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'teeth-cleaning', name: 'Teeth Cleaning (Calculus Removal)', categorySlug: 'restorative-dentistry', description: 'Professional dental cleaning to remove plaque and calculus, promoting healthy gums and teeth.', image: 'https://placehold.co/600x400.png', imageHint: 'dental cleaning hygiene' },
  { id: 'dental-fillings', name: 'Dental Fillings', categorySlug: 'restorative-dentistry', description: 'Restore decayed teeth with durable dental fillings, matching the natural color of your teeth.', image: 'https://placehold.co/600x400.png', imageHint: 'tooth filling dental' },
  { id: 'root-canal-treatment', name: 'Root Canal Treatment', categorySlug: 'restorative-dentistry', description: 'Save infected teeth with expert root canal therapy, relieving pain and preserving your natural tooth.', image: 'https://placehold.co/600x400.png', imageHint: 'root canal procedure' },
];

const oralSurgeryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'tooth-extraction', name: 'Tooth Extraction', categorySlug: 'oral-surgery', description: 'Safe and comfortable tooth extraction procedures, including wisdom teeth removal, by experienced oral surgeons.', image: 'https://placehold.co/600x400.png', imageHint: 'tooth extraction dental' },
  { id: 'dental-implants', name: 'Dental Implants', categorySlug: 'oral-surgery', description: 'Permanent solutions for missing teeth with high-quality dental implants that look and feel natural.', image: 'https://placehold.co/600x400.png', imageHint: 'dental implant surgery' },
  { id: 'apical-resection', name: 'Apical Resection (Apicoectomy)', categorySlug: 'oral-surgery', description: 'Specialized surgical procedure to treat infections at the root tip and save the natural tooth.', image: 'https://placehold.co/600x400.png', imageHint: 'dental surgery procedure' },
];

const pediatricDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'primary-teeth-care', name: 'Primary Teeth Care (Milk Teeth)', categorySlug: 'pediatric-dentistry', description: 'Gentle and comprehensive dental care for children, focusing on the health of primary (milk) teeth.', image: 'https://placehold.co/600x400.png', imageHint: 'child dentist kids' },
  { id: 'teeth-fluoridation', name: 'Teeth Fluoridation', categorySlug: 'pediatric-dentistry', description: 'Protective fluoride treatments to strengthen children’s teeth and prevent cavities.', image: 'https://placehold.co/600x400.png', imageHint: 'fluoride treatment child' },
  { id: 'dental-sealants', name: 'Dental Sealants', categorySlug: 'pediatric-dentistry', description: 'Application of dental sealants to protect children’s molars from decay.', image: 'https://placehold.co/600x400.png', imageHint: 'dental sealants kids' },
];


const facialSurgeryServices: Service[] = facialSurgeryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || '/images/beauty-natural-woman-studio.jpg', imageHint: s.imageHint || 'facial surgery procedure' }));
const facialTreatmentsServices: Service[] = facialTreatmentsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || '/images/cute-woman-lying-procedure-rejuvenation-skin.jpeg', imageHint: s.imageHint || 'facial treatment application' }));
const breastServices: Service[] = breastServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || '/images/close-beauty-portrait-topless-woman-with-perfect-skin-natural-make-up-plump-nude-lips-blue-background.jpeg', imageHint: s.imageHint || 'breast procedure result' }));
const bodyServices: Service[] = bodyServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'body contouring detail' }));

const aestheticDentistryServices: Service[] = aestheticDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'aesthetic dentistry tool' }));
const prostheticsServices: Service[] = prostheticsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'dental prosthetic device' }));
const orthodonticsServices: Service[] = orthodonticsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'orthodontic tools' }));
const restorativeDentistryServices: Service[] = restorativeDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'restorative dentistry procedure' }));
const oralSurgeryServices: Service[] = oralSurgeryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'oral surgery equipment' }));
const pediatricDentistryServices: Service[] = pediatricDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || 'child at dentist' }));


export const serviceCategories: ServiceCategory[] = [
  {
    id: 'facial-surgery',
    name: 'Facial Plastic Surgery',
    slug: 'facial-surgery',
    description: 'Expert surgical procedures to refine, enhance, and restore facial harmony and youthfulness.',
    services: facialSurgeryServices.map(s => ({ ...s, categorySlug: 'facial-surgery' })),
    image: '/images/beauty-natural-woman-studio.jpg',
    imageHint: 'facial surgery instruments'
  },
  {
    id: 'facial-treatments',
    name: 'Facial Treatments',
    slug: 'facial-treatments',
    description: 'Advanced non-surgical and minimally invasive treatments to rejuvenate skin, enhance features, and address specific concerns.',
    services: facialTreatmentsServices.map(s => ({ ...s, categorySlug: 'facial-treatments' })),
    image: '/images/cute-woman-lying-procedure-rejuvenation-skin.jpg',
    imageHint: 'facial treatment collage'
  },
  {
    id: 'breasts',
    name: 'Breast Procedures',
    slug: 'breasts',
    description: 'Surgical procedures for breast augmentation, lift, reduction, and reconstruction to achieve desired aesthetics and confidence.',
    services: breastServices.map(s => ({ ...s, categorySlug: 'breasts' })),
    image: '/images/close-beauty-portrait-topless-woman-with-perfect-skin-natural-make-up-plump-nude-lips-blue-background.jpg',
    imageHint: 'breast surgery results'
  },
  {
    id: 'body',
    name: 'Body Contouring',
    slug: 'body',
    description: 'Surgical and non-surgical services for body contouring, sculpting, and skin rejuvenation for a harmonious appearance.',
    services: bodyServices.map(s => ({ ...s, categorySlug: 'body' })),
    image: '/images/slim-young-woman-measuring-her-thin-waist-with-tape-measure-fitness-diet-concept.jpg',
    imageHint: 'body contouring technology'
  },
  {
    id: 'aesthetic-dentistry',
    name: 'Aesthetic Dentistry',
    slug: 'aesthetic-dentistry',
    description: 'Enhancing smiles with advanced cosmetic dental procedures for a radiant look.',
    services: aestheticDentistryServices.map(s => ({...s, categorySlug: 'aesthetic-dentistry'})),
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'cosmetic dentistry smile'
  },
  {
    id: 'prosthetics',
    name: 'Prosthetics',
    slug: 'prosthetics',
    description: 'Custom dental prosthetics to restore function and aesthetics for a complete smile.',
    services: prostheticsServices.map(s => ({...s, categorySlug: 'prosthetics'})),
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'dental prosthetics'
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    slug: 'orthodontics',
    description: 'Specialized orthodontic treatments for perfectly aligned teeth and a confident smile.',
    services: orthodonticsServices.map(s => ({...s, categorySlug: 'orthodontics'})),
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'orthodontics braces'
  },
  {
    id: 'restorative-dentistry',
    name: 'Restorative & General Dentistry',
    slug: 'restorative-dentistry',
    description: 'Comprehensive dental care including fillings, cleanings, and root canal treatments.',
    services: restorativeDentistryServices.map(s => ({...s, categorySlug: 'restorative-dentistry'})),
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'general dentistry tools'
  },
  {
    id: 'oral-surgery',
    name: 'Oral Surgery (Dental)',
    slug: 'oral-surgery',
    description: 'Expert dental surgery services including extractions, implants, and specialized procedures.',
    services: oralSurgeryServices.map(s => ({...s, categorySlug: 'oral-surgery'})),
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'oral surgery instruments'
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    slug: 'pediatric-dentistry',
    description: 'Gentle and specialized dental care for children, ensuring a positive experience.',
    services: pediatricDentistryServices.map(s => ({...s, categorySlug: 'pediatric-dentistry'})),
    image: '/images/dentist-turkey-antalya.jpg',
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

    