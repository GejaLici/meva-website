
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
  { id: 'op-hunde', name: 'Nose Surgery (Rhinoplasty)', categorySlug: 'facial-surgery', description: 'Artistically reshapes the nose to improve facial harmony or correct breathing issues. Explore the tailored procedure details, expected benefits, typical recovery journey, and candidacy for nose surgery during a consultation at NexaSculpt Clinic.', image: '/images/woman-getting-ready-nose-job-surgery (1).jpg', imageHint: 'nose surgery detail' },
  { id: 'rim-hunde', name: 'Nose Tip Reshaping', categorySlug: 'facial-surgery', description: 'A specialized procedure focusing on refining the shape and projection of the nasal tip for a more balanced profile. Discover the specific techniques and outcomes for nose tip reshaping at NexaSculpt Clinic.', image: '/images/Nose Tip Reshaping.png', imageHint: 'nose tip surgery' },
  { id: 'rim-vesheve', name: 'Ear Reshaping (Otoplasty)', categorySlug: 'facial-surgery', description: 'Corrects prominent or misshapen ears, bringing them closer to the head or improving their form for enhanced confidence. Learn about otoplasty options for adults and children at NexaSculpt Clinic.', image: '/images/otoplasty.png', imageHint: 'otoplasty results' },
  { id: 'mbj-flokeve', name: 'Hair Transplant', categorySlug: 'facial-surgery', description: 'Restores hair to thinning or bald areas by transplanting individual hair follicles, offering natural-looking and permanent results. Find out about advanced hair transplant techniques at NexaSculpt Clinic.', image: '/images/hair-transplant.png', imageHint: 'hair transplant before after' },
  { id: 'mbj-mjekres', name: 'Beard Transplant', categorySlug: 'facial-surgery', description: 'Enhances beard density and shape by transplanting hair follicles to the facial region, creating a fuller, well-defined beard. Discuss your beard restoration goals with our experts at NexaSculpt Clinic.', image: '/images/Beard Transplant.png', imageHint: 'Beard Transplant results' },
  { id: 'mbj-vetullave', name: 'Eyebrow Transplant', categorySlug: 'facial-surgery', description: 'Restores or reconstructs eyebrows by transplanting hair follicles, resulting in fuller and naturally shaped brows. Learn how eyebrow transplants can redefine your look at NexaSculpt Clinic.', image: '/images/Eyebrow Transplant.png', imageHint: 'eyebrow transplant detail' },
  { id: 'lift-vetullave', name: 'Eyebrow Lift (Browplasty)', categorySlug: 'facial-surgery', description: 'Elevates sagging eyebrows and reduces forehead wrinkles, creating a more alert, youthful, and refreshed appearance. Explore brow lift options and their benefits at NexaSculpt Clinic.', image: '/images/Eyebrow Lift (Browplasty).png', imageHint: 'eyebrow lift surgery' },
  { id: 'blefaroplastika', name: 'Eyelid Surgery (Blepharoplasty)', categorySlug: 'facial-surgery', description: 'Rejuvenates the eyes by removing excess skin, fat, or muscle from the upper and/or lower eyelids to correct droopiness or puffiness. Discover how eyelid surgery can refresh your appearance at NexaSculpt Clinic.', image: '/images/Eyelid Surgery (Blepharoplasty).png', imageHint: 'eyelid surgery results' },
  { id: 'lift-fytyres', name: 'Face Lift (Rhytidectomy)', categorySlug: 'facial-surgery', description: 'A comprehensive surgical procedure to reduce sagging skin, smooth deep wrinkles, and restore youthful contours to the face and neck. Learn about personalized face lift approaches at NexaSculpt Clinic.', image: '/images/Face Lift (Rhytidectomy).png', imageHint: 'face lift surgery' },
  { id: 'rim-mjekres', name: 'Chin Augmentation (Genioplasty)', categorySlug: 'facial-surgery', description: 'Enhances the chin\'s shape and projection using implants or by repositioning the bone, improving facial balance and profile. Discuss chin augmentation options and outcomes at NexaSculpt Clinic.', image: '/images/Chin Augmentation (Genioplasty).png', imageHint: 'chin augmentation surgery' },
];

const facialTreatmentsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'lip-reshaping', name: 'Lip Reshaping & Augmentation', categorySlug: 'facial-treatments', description: 'Enhances lip volume, shape, and definition using dermal fillers for a fuller, more youthful pout. Explore customized lip augmentation techniques at NexaSculpt Clinic.', image: '/images/Lip Reshaping & Augmentation.png', imageHint: 'lip fillers' },
  { id: 'xanthelasma-plasma-arc', name: 'Xanthelasma Removal (Plasma Arc)', categorySlug: 'facial-treatments', description: 'A non-invasive treatment using targeted plasma energy to effectively remove yellowish cholesterol deposits (xanthelasma) around the eyelids. Learn about this precise removal method at NexaSculpt Clinic.', image: '/images/Xanthelasma Removal (Plasma Arc).png', imageHint: 'xanthelasma plasma' },
  { id: 'multivitamin-treatment', name: 'Multivitamin Infusion Facial', categorySlug: 'facial-treatments', description: 'A revitalizing facial treatment that delivers a potent blend of essential vitamins and antioxidants directly to the skin, promoting radiance and health. Discover the benefits of vitamin infusion therapy at NexaSculpt Clinic.', image: '/images/Multivitamin Infusion Facial.png', imageHint: 'vitamin facial' },
  { id: 'eyelids-plasma-arc', name: 'Non-Surgical Eyelid Lift (Plasma Arc)', categorySlug: 'facial-treatments', description: 'A minimally invasive alternative to surgical blepharoplasty, using plasma energy to tighten and lift sagging eyelid skin for a rejuvenated look. Find out if a non-surgical eyelid lift is right for you at NexaSculpt Clinic.', image: '/images/Non-Surgical Eyelid Lift (Plasma Arc).png', imageHint: 'plasma eyelid lift' },
  { id: 'cheekbone-reshaping', name: 'Cheekbone Contouring (Fillers)', categorySlug: 'facial-treatments', description: 'Defines and enhances cheekbone structure using strategically placed dermal fillers, restoring youthful volume and improving facial contours. Learn about cheekbone contouring possibilities at NexaSculpt Clinic.', image: '/images/Cheekbone Contouring (Fillers).png', imageHint: 'cheek fillers' },
  { id: 'microdermabrasion', name: 'Microdermabrasion', categorySlug: 'facial-treatments', description: 'A gentle exfoliation treatment that removes the outermost layer of dead skin cells, revealing smoother, brighter skin and improving texture. Experience skin renewal with microdermabrasion at NexaSculpt Clinic.', image: '/images/Microdermabrasion.png', imageHint: 'microdermabrasion skin' },
  { id: 'jawline-contouring', name: 'Jawline Contouring (Fillers/Threads)', categorySlug: 'facial-treatments', description: 'Sculpts and defines the jawline for a sharper, more youthful profile using dermal fillers for volume or PDO threads for lifting. Explore jawline enhancement options at NexaSculpt Clinic.', image: '/images/Jawline Contouring FillersThreads.png', imageHint: 'jawline fillers' },
  { id: 'wrinkle-fillers', name: 'Dermal Fillers for Wrinkles', categorySlug: 'facial-treatments', description: 'Injectable treatments that smooth out fine lines and deeper wrinkles by restoring lost volume, creating a more youthful appearance. Discover various filler options for wrinkle reduction at NexaSculpt Clinic.', image: '/images/Dermal Fillers for Wrinkles.png', imageHint: 'dermal fillers face' },
  { id: 'prp-face', name: 'PRP Facial Rejuvenation', categorySlug: 'facial-treatments', description: 'Utilizes Platelet-Rich Plasma (PRP) from your own blood to stimulate collagen production, improve skin texture, and promote overall facial rejuvenation. Learn about the natural benefits of PRP facials at NexaSculpt Clinic.', image: '/images/PRP Facial Rejuvenation.png', imageHint: 'prp facial therapy' },
  { id: 'dark-circles-treatment', name: 'Under-Eye Dark Circles Treatment', categorySlug: 'facial-treatments', description: 'Addresses the appearance of dark circles and hollows under the eyes through various techniques, such as fillers or specialized skincare, for a refreshed look. Find solutions for tired-looking eyes at NexaSculpt Clinic.', image: '/images/Under-Eye Dark Circles Treatment.png', imageHint: 'dark circles eye' },
  { id: 'prp-hair', name: 'PRP Hair Restoration', categorySlug: 'facial-treatments', description: 'A non-surgical treatment using Platelet-Rich Plasma (PRP) injected into the scalp to stimulate hair follicles, promote growth, and increase hair density. Explore PRP for hair loss at NexaSculpt Clinic.', image: '/images/PRP Hair Restoration.png', imageHint: 'prp hair treatment' },
  { id: 'white-peeling', name: 'Chemical Peels (White Peeling)', categorySlug: 'facial-treatments', description: 'Superficial chemical peels designed to gently exfoliate the skin, improving tone, texture, and clarity, and reducing minor blemishes. Discover the benefits of gentle peeling solutions at NexaSculpt Clinic.', image: '/images/Chemical Peels (White Peeling).png', imageHint: 'chemical peel skin' },
  { id: 'microneedling', name: 'Microneedling (Collagen Induction Therapy)', categorySlug: 'facial-treatments', description: 'A procedure that creates controlled micro-injuries in the skin using fine needles to stimulate collagen and elastin production, improving texture and reducing scars. Learn about microneedling benefits at NexaSculpt Clinic.', image: '/images/Microneedling (Collagen Induction Therapy).png', imageHint: 'microneedling device' },
  { id: 'radiofrequency-face', name: 'Radiofrequency Skin Tightening (Face)', categorySlug: 'facial-treatments', description: 'A non-invasive treatment that uses radiofrequency energy to heat the deeper layers of skin, stimulating collagen and elastin production for firmer, tighter skin. Experience facial skin tightening at NexaSculpt Clinic.', image: '/images/Radiofrequency Skin Tightening (Face).png', imageHint: 'radiofrequency facial' },
  { id: 'sulcus-filling', name: 'Nasolabial Fold Fillers (Sulcus Filling)', categorySlug: 'facial-treatments', description: 'Reduces the appearance of nasolabial folds (smile lines) by injecting dermal fillers to add volume and smooth out these prominent creases. Soften your smile lines effectively at NexaSculpt Clinic.', image: '/images/Nasolabial Fold Fillers (Sulcus Filling).png', imageHint: 'smile line fillers' },
  { id: 'chin-reshaping', name: 'Non-Surgical Chin Reshaping (Fillers)', categorySlug: 'facial-treatments', description: 'Enhances or reshapes the chin using dermal fillers to improve facial proportion and balance without surgery. Achieve a more defined chin profile at NexaSculpt Clinic.', image: '/images/Non-Surgical Chin Reshaping (Fillers).png', imageHint: 'chin fillers' },
];

const breastServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'zmadh-gjoksit', name: 'Breast Augmentation', categorySlug: 'breasts', description: 'Enhances breast size and shape using implants or fat transfer to achieve fuller, more proportionate breasts. Explore your breast augmentation options and desired outcomes at NexaSculpt Clinic.', image: '/images/Breast Augmentation.png', imageHint: 'breast augmentation' },
  { id: 'lift-gjoksit', name: 'Breast Lift', categorySlug: 'breasts', description: 'Raises and firms sagging breasts by removing excess skin and reshaping breast tissue, restoring a more youthful contour. Discover how a breast lift can rejuvenate your profile at NexaSculpt Clinic.', image: '/images/Breast Lift.png', imageHint: 'breast lift' },
  { id: 'zvog-gjoksit', name: 'Breast Reduction', categorySlug: 'breasts', description: 'Reduces the size and weight of overly large breasts to alleviate discomfort and improve proportion, enhancing comfort and confidence. Learn about the transformative benefits of breast reduction at NexaSculpt Clinic.', image: '/images/Breast Reduction.png', imageHint: 'breast reduction' },
  { id: 'rikonst-gjoksit', name: 'Breast Reconstruction', categorySlug: 'breasts', description: 'Recreates the shape and appearance of a breast, often after mastectomy or lumpectomy, using various surgical techniques. Discuss personalized breast reconstruction plans with our compassionate team at NexaSculpt Clinic.', image: '/images/Breast Reconstruction.png', imageHint: 'breast reconstruction' },
];

const bodyServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'lift-kraheve', name: 'Arm Lift', categorySlug: 'body', description: 'Removes excess sagging skin and fat from the upper arms, creating a firmer, more toned appearance. Achieve sleeker arm contours with an arm lift at NexaSculpt Clinic.', image: '/images/Arm Lift.png', imageHint: 'arm lift' },
  { id: 'rim-barkut', name: 'Tummy Tuck', categorySlug: 'body', description: 'Removes excess skin and fat from the abdomen and tightens abdominal muscles, resulting in a flatter, firmer midsection. Explore the transformative results of a tummy tuck at NexaSculpt Clinic.', image: '/images/Tummy Tuck.png', imageHint: 'tummy tuck' },
  { id: 'liposculptura', name: 'Liposculpture', categorySlug: 'body', description: 'A body contouring procedure that removes unwanted fat deposits from specific areas to sculpt and define body shape. Refine your silhouette with advanced liposculpture techniques at NexaSculpt Clinic.', image: '/images/Liposculpture.png', imageHint: 'liposculpture body' },
  { id: 'rim-vitheve-bbl', name: 'BBL Buttock Remodeling', categorySlug: 'body', description: 'Enhances the size and shape of the buttocks using your own body fat (Brazilian Butt Lift) for natural-looking augmentation and lift. Discover personalized BBL procedures at NexaSculpt Clinic.', image: '/images/BBL Buttock Remodeling.png', imageHint: 'buttock remodel' },
  { id: 'labioplastika', name: 'Labiaplasty', categorySlug: 'body', description: 'A surgical procedure to alter the size or shape of the labia minora or majora, often for comfort or aesthetic reasons. Discuss sensitive concerns with our discreet professionals at NexaSculpt Clinic.', image: '/images/Labiaplasty.png', imageHint: 'labiaplasty surgery' },
  { id: 'lift-kofsheve', name: 'Thigh Lift', categorySlug: 'body', description: 'Removes excess skin and fat from the inner or outer thighs to create smoother, firmer, and more proportionate leg contours. Achieve more toned thighs with a lift procedure at NexaSculpt Clinic.', image: '/images/Thigh Lift.png', imageHint: 'thigh lift' },
  { id: 'gynecomastia', name: 'Gynecomastia', categorySlug: 'body', description: 'Surgical correction of enlarged male breast tissue, resulting in a flatter, more masculine chest contour. Address gynecomastia with confidence at NexaSculpt Clinic.', image: '/images/Gynecomastia.png', imageHint: 'male chest' },
  { id: 'cellulite-treatment', name: 'Cellulite Treatment', categorySlug: 'body', description: 'Various treatments aimed at reducing the appearance of cellulite, improving skin texture and smoothness on areas like thighs and buttocks. Explore effective cellulite reduction strategies at NexaSculpt Clinic.', image: '/images/Cellulite Treatment.png', imageHint: 'cellulite reduction' },
  { id: 'plasma-arc-body', name: 'Plasma Arc (Body)', categorySlug: 'body', description: 'Utilizes plasma energy for non-surgical skin tightening and rejuvenation on various body areas, improving skin laxity and texture. Learn about Plasma Arc body treatments at NexaSculpt Clinic.', image: '/images/Plasma Arc (Body).png', imageHint: 'skin tightening body' },
  { id: 'carboxytherapy', name: 'Carboxytherapy', categorySlug: 'body', description: 'A minimally invasive treatment involving the injection of medical-grade carbon dioxide gas to improve circulation, skin elasticity, and reduce cellulite or stretch marks. Discover carboxytherapy benefits at NexaSculpt Clinic.', image: '/images/Carboxytherapy.png', imageHint: 'skin treatment' },
  { id: 'sclerotherapy', name: 'Sclerotherapy', categorySlug: 'body', description: 'A medical procedure used to eliminate varicose veins and spider veins by injecting a solution directly into the vein, causing it to collapse and fade. Find relief from unsightly veins at NexaSculpt Clinic.', image: '/images/Sclerotherapy.png', imageHint: 'vein treatment' },
  { id: 'lipolysis', name: 'Lipolysis', categorySlug: 'body', description: 'Non-surgical fat reduction treatments that use various methods, like injections or energy devices, to break down and eliminate localized fat cells. Target stubborn fat areas with lipolysis at NexaSculpt Clinic.', image: '/images/Lipolysis.png', imageHint: 'fat reduction' },
  { id: 'laser-hair-removal', name: 'Laser Hair Removal', categorySlug: 'body', description: 'A long-term solution for reducing unwanted hair on the face and body using concentrated light energy to target hair follicles. Achieve smooth, hair-free skin with laser hair removal at NexaSculpt Clinic.', image: '/images/Laser Hair Removal.png', imageHint: 'hair removal' },
];

const aestheticDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'teeth-whitening', name: 'Teeth Whitening', categorySlug: 'aesthetic-dentistry', description: 'Brightens and lightens the color of your teeth, removing stains and discoloration for a more radiant smile. Explore professional teeth whitening options at NexaSculpt Clinic.', image: '/images/Teeth Whitening.png', imageHint: 'teeth whitening smile' },
  { id: 'composite-veneers', name: 'Composite Veneers', categorySlug: 'aesthetic-dentistry', description: 'Thin layers of tooth-colored composite resin applied to the front of teeth to improve their appearance, correcting chips, gaps, or discoloration. Achieve a smile makeover with composite veneers at NexaSculpt Clinic.', image: '/images/Composite Veneers.png', imageHint: 'dental veneers beautiful' },
  { id: 'emax-veneers', name: 'E-Max Veneers', categorySlug: 'aesthetic-dentistry', description: 'High-strength, durable porcelain veneers known for their exceptional aesthetics and natural appearance, used to transform smiles. Discover the beauty of E-Max veneers at NexaSculpt Clinic.', image: '/images/E-Max Veneers.png', imageHint: 'porcelain veneers smile' },
];

const prostheticsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'dental-crowns', name: 'Dental Crowns', categorySlug: 'prosthetics', description: 'Custom-made caps placed over damaged or weakened teeth to restore their strength, shape, size, and appearance. Learn about different types of dental crowns at NexaSculpt Clinic.', image: '/images/Dental Crowns.png', imageHint: 'dental crown tooth' },
  { id: 'dental-bridges', name: 'Dental Bridges', categorySlug: 'prosthetics', description: 'Fixed dental restorations used to replace one or more missing teeth by joining an artificial tooth definitively to adjacent teeth or dental implants. Restore your smile and function with dental bridges at NexaSculpt Clinic.', image: '/images/Dental Bridges.png', imageHint: 'dental bridge teeth' },
  { id: 'dentures', name: 'Dentures', categorySlug: 'prosthetics', description: 'Removable replacements for missing teeth and surrounding tissues, available as full or partial sets to restore oral function and aesthetics. Discuss comfortable and natural-looking denture solutions at NexaSculpt Clinic.', image: '/images/Dentures.png', imageHint: 'dentures smile' },
];

const orthodonticsServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'invisalign', name: 'Invisalign', categorySlug: 'orthodontics', description: 'A modern approach to straightening teeth using a series of custom-made, clear, removable aligners for discreet and comfortable treatment. Achieve your ideal smile with Invisalign at NexaSculpt Clinic.', image: '/images/Invisalign.png', imageHint: 'invisalign aligners smile' },
  { id: 'fixed-braces', name: 'Fixed Braces', categorySlug: 'orthodontics', description: 'Traditional orthodontic treatment using brackets and wires to effectively align teeth and correct bite issues for children and adults. Explore fixed brace options for optimal results at NexaSculpt Clinic.', image: '/images/Fixed Braces.png', imageHint: 'dental braces smile' },
  { id: 'removable-appliances', name: 'Removable Appliances', categorySlug: 'orthodontics', description: 'Customized orthodontic devices that can be taken in and out of the mouth, used for specific alignment adjustments or to maintain treatment results. Learn about the role of removable appliances in orthodontic care at NexaSculpt Clinic.', image: '/images/Removable Appliances.png', imageHint: 'orthodontic appliance' },
];

const restorativeDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'teeth-cleaning', name: 'Teeth Cleaning (Calculus Removal)', categorySlug: 'restorative-dentistry', description: 'Professional dental cleaning to remove plaque, tartar (calculus), and stains from teeth, promoting oral health and preventing gum disease. Maintain a healthy smile with regular cleanings at NexaSculpt Clinic.', image: '/images/Teeth Cleaning (Calculus Removal).png', imageHint: 'dental cleaning hygiene' },
  { id: 'dental-fillings', name: 'Dental Fillings', categorySlug: 'restorative-dentistry', description: 'Restores teeth damaged by decay back to their normal function and shape, using materials like composite resin or amalgam. Get durable and aesthetic dental fillings at NexaSculpt Clinic.', image: '/images/Dental Fillings.png', imageHint: 'tooth filling dental' },
  { id: 'root-canal-treatment', name: 'Root Canal Treatment', categorySlug: 'restorative-dentistry', description: 'A procedure to treat infection at the center of a tooth (the root canal system), saving the natural tooth and relieving pain. Understand the root canal process and its benefits at NexaSculpt Clinic.', image: '/images/Root Canal Treatment.png', imageHint: 'root canal procedure' },
];

const oralSurgeryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'tooth-extraction', name: 'Tooth Extraction', categorySlug: 'oral-surgery', description: 'The removal of a tooth from its socket in the bone, performed for various reasons including severe decay, infection, or crowding. Experience gentle tooth extractions with our skilled team at NexaSculpt Clinic.', image: '/images/Tooth Extraction.png', imageHint: 'tooth extraction dental' },
  { id: 'dental-implants', name: 'Dental Implants', categorySlug: 'oral-surgery', description: 'Artificial tooth roots surgically placed into the jawbone to replace missing teeth, providing a strong foundation for fixed or removable replacement teeth. Discover the benefits of permanent tooth replacement with dental implants at NexaSculpt Clinic.', image: '/images/Dental Implants.png', imageHint: 'dental implant surgery' },
  { id: 'apical-resection', name: 'Apical Resection (Apicoectomy)', categorySlug: 'oral-surgery', description: 'A surgical procedure to remove the tip of a tooth\'s root (apex) and any infected tissue, typically performed when a root canal treatment alone is not sufficient. Learn about this specialized endodontic surgery at NexaSculpt Clinic.', image: '/images/Apical Resection (Apicoectomy).png', imageHint: 'dental surgery procedure' },
];

const pediatricDentistryServicesBase: Omit<Service, 'slug'>[] = [
  { id: 'primary-teeth-care', name: 'Primary Teeth Care (Milk Teeth)', categorySlug: 'pediatric-dentistry', description: 'Comprehensive dental care tailored for infants, children, and adolescents, focusing on the health and development of primary (milk) teeth and establishing good oral hygiene habits. Ensure a healthy start for your child\'s smile at NexaSculpt Clinic.', image: '/images/Primary Teeth Care (Milk Teeth).png', imageHint: 'child dentist kids' },
  { id: 'teeth-fluoridation', name: 'Teeth Fluoridation', categorySlug: 'pediatric-dentistry', description: 'The application of fluoride to teeth to help prevent tooth decay by making teeth more resistant to acid attacks from plaque bacteria and sugars. Protect your child\'s teeth with professional fluoride treatments at NexaSculpt Clinic.', image: '/images/Teeth Fluoridation.png', imageHint: 'fluoride treatment child' },
  { id: 'dental-sealants', name: 'Dental Sealants', categorySlug: 'pediatric-dentistry', description: 'Thin, protective coatings applied to the chewing surfaces of back teeth (molars) to prevent cavities by sealing out food and bacteria. Safeguard your child\'s molars with dental sealants at NexaSculpt Clinic.', image: '/images/Dental Sealants.png', imageHint: 'dental sealants kids' },
];


const facialSurgeryServices: Service[] = facialSurgeryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));
const facialTreatmentsServices: Service[] = facialTreatmentsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));
const breastServices: Service[] = breastServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));
const bodyServices: Service[] = bodyServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));

const aestheticDentistryServices: Service[] = aestheticDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name),  image: '/images/Aesthetic Dentistry.png', imageHint: s.imageHint || slugify(s.name) }));
const prostheticsServices: Service[] = prostheticsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || '/images/Prosthetics.png', imageHint: s.imageHint || slugify(s.name) }));
const orthodonticsServices: Service[] = orthodonticsServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));
const restorativeDentistryServices: Service[] = restorativeDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));
const oralSurgeryServices: Service[] = oralSurgeryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));
const pediatricDentistryServices: Service[] = pediatricDentistryServicesBase.map(s => ({ ...s, slug: slugify(s.name), image: s.image || 'https://placehold.co/600x400.png', imageHint: s.imageHint || slugify(s.name) }));


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
    image: '/images/Aesthetic Dentistry.png',
    imageHint: 'cosmetic dentistry smile'
  },
  {
    id: 'prosthetics',
    name: 'Prosthetics',
    slug: 'prosthetics',
    description: 'Custom dental prosthetics to restore function and aesthetics for a complete smile.',
    services: prostheticsServices.map(s => ({...s, categorySlug: 'prosthetics'})),
    image: '/images/Prosthetics.png',
    imageHint: 'dental prosthetics'
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    slug: 'orthodontics',
    description: 'Specialized orthodontic treatments for perfectly aligned teeth and a confident smile.',
    services: orthodonticsServices.map(s => ({...s, categorySlug: 'orthodontics'})),
    image: '/images/Orthodontics.png',
    imageHint: 'orthodontics braces'
  },
  {
    id: 'restorative-dentistry',
    name: 'Restorative & General Dentistry',
    slug: 'restorative-dentistry',
    description: 'Comprehensive dental care including fillings, cleanings, and root canal treatments.',
    services: restorativeDentistryServices.map(s => ({...s, categorySlug: 'restorative-dentistry'})),
    image: '/images/Restorative & General Dentistry.png',
    imageHint: 'general dentistry tools'
  },
  {
    id: 'oral-surgery',
    name: 'Oral Surgery (Dental)',
    slug: 'oral-surgery',
    description: 'Expert dental surgery services including extractions, implants, and specialized procedures.',
    services: oralSurgeryServices.map(s => ({...s, categorySlug: 'oral-surgery'})),
    image: '/images/Oral Surgery (Dental).png',
    imageHint: 'oral surgery instruments'
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    slug: 'pediatric-dentistry',
    description: 'Gentle and specialized dental care for children, ensuring a positive experience.',
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

  

    