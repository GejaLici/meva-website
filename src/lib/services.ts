
import type { ServiceCategory, Service } from '@/types/services';

const facialSurgeryServices: Service[] = [
  { id: 'op-hunde', slug: 'rhinoplasty', image: '/images/woman-getting-ready-nose-job-surgery%20(1).jpg', imageHint: 'nose surgery detail', gallery: [{url: "https://placehold.co/800x600.png", hint: "rhinoplasty consultation"}, {url: "https://placehold.co/800x600.png", hint: "surgical markup"}, {url: "https://placehold.co/800x600.png", hint: "post-op checkup"}] },
  { id: 'rim-hunde', slug: 'nose-tip-reshaping', image: '/images/Nose-Tip-Reshaping.png', imageHint: 'nose tip surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "nose tip detail"}, {url: "https://placehold.co/800x600.png", hint: "suture placement"}, {url: "https://placehold.co/800x600.png", hint: "healing process"}] },
  { id: 'rim-vesheve', slug: 'otoplasty', image: '/images/otoplasty.png', imageHint: 'otoplasty results', gallery: [{url: "https://placehold.co/800x600.png", hint: "ear before surgery"}, {url: "https://placehold.co/800x600.png", hint: "ear after surgery"}, {url: "https://placehold.co/800x600.png", hint: "otoplasty technique"}] },
  { id: 'mbj-flokeve', slug: 'hair-transplant', image: '/images/hair-transplant.png', imageHint: 'hair transplant before after', gallery: [{url: "https://placehold.co/800x600.png", hint: "donor area"}, {url: "https://placehold.co/800x600.png", hint: "follicle extraction"}, {url: "https://placehold.co/800x600.png", hint: "recipient area"}] },
  { id: 'mbj-mjekres', slug: 'beard-transplant', image: '/images/Beard-Transplant.png', imageHint: 'Beard Transplant results', gallery: [{url: "https://placehold.co/800x600.png", hint: "patchy beard before"}, {url: "https://placehold.co/800x600.png", hint: "full beard after"}, {url: "https://placehold.co/800x600.png", hint: "beard design"}] },
  { id: 'mbj-vetullave', slug: 'eyebrow-transplant', image: '/images/Eyebrow%20Transplant.png', imageHint: 'eyebrow transplant detail', gallery: [{url: "https://placehold.co/800x600.png", hint: "thin eyebrows"}, {url: "https://placehold.co/800x600.png", hint: "fuller eyebrows"}, {url: "https://placehold.co/800x600.png", hint: "eyebrow shaping"}] },
  { id: 'lift-vetullave', slug: 'eyebrow-lift', image: '/images/Eyebrow%20Lift%20(Browplasty).png', imageHint: 'eyebrow lift surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "forehead lines"}, {url: "https://placehold.co/800x600.png", hint: "lifted brows"}, {url: "https://placehold.co/800x600.png", hint: "youthful appearance"}] },
  { id: 'blefaroplastika', slug: 'blepharoplasty', image: '/images/Eyelid%20Surgery%20(Blepharoplasty).png', imageHint: 'eyelid surgery results', gallery: [{url: "https://placehold.co/800x600.png", hint: "droopy eyelids"}, {url: "https://placehold.co/800x600.png", hint: "rejuvenated eyes"}, {url: "https://placehold.co/800x600.png", hint: "upper eyelid surgery"}] },
  { id: 'lift-fytyres', slug: 'face-lift', image: '/images/Face%20Lift%20(Rhytidectomy).png', imageHint: 'face lift surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "aging signs"}, {url: "https://placehold.co/800x600.png", hint: "facelift results"}, {url: "https://placehold.co/800x600.png", hint: "neck lift"}] },
  { id: 'rim-mjekres', slug: 'genioplasty', image: '/images/Chin%20Augmentation%20(Genioplasty).png', imageHint: 'chin augmentation surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "weak chin profile"}, {url: "https://placehold.co/800x600.png", hint: "defined chin"}, {url: "https://placehold.co/800x600.png", hint: "facial balance"}] },
];

const facialTreatmentsServices: Service[] = [
  { id: 'lip-reshaping', slug: 'lip-reshaping', image: '/images/Lip%20Reshaping%20&%20Augmentation.png', imageHint: 'lip fillers application', gallery: [{url: "https://placehold.co/800x600.png", hint: "lip augmentation"}, {url: "https://placehold.co/800x600.png", hint: "lip definition"}, {url: "https://placehold.co/800x600.png", hint: "natural results"}] },
  { id: 'xanthelasma-plasma-arc', slug: 'eyelid-deposit-removal', image: '/images/eyelid-deposit-removal.png', imageHint: 'xanthelasma plasma device', gallery: [{url: "https://placehold.co/800x600.png", hint: "eyelid cholesterol"}, {url: "https://placehold.co/800x600.png", hint: "plasma pen treatment"}, {url: "https://placehold.co/800x600.png", hint: "clear eyelids"}] },
  { id: 'multivitamin-treatment', slug: 'multivitamin-infusion-facial', image: '/images/Multivitamin%20Infusion%20Facial.png', imageHint: 'vitamin facial therapy', gallery: [{url: "https://placehold.co/800x600.png", hint: "dull skin"}, {url: "https://placehold.co/800x600.png", hint: "glowing skin"}, {url: "https://placehold.co/800x600.png", hint: "vitamin infusion"}] },
  { id: 'eyelids-plasma-arc', slug: 'non-surgical-eyelid-lift', image: '/images/Non-Surgical%20Eyelid%20Lift%20(Plasma%20Arc).png', imageHint: 'plasma eyelid treatment', gallery: [{url: "https://placehold.co/800x600.png", hint: "hooded eyes"}, {url: "https://placehold.co/800x600.png", hint: "lifted eyelids"}, {url: "https://placehold.co/800x600.png", hint: "plasma energy"}] },
  { id: 'cheekbone-reshaping', slug: 'cheekbone-contouring', image: '/images/Cheekbone%20Contouring%20(Fillers).png', imageHint: 'cheek fillers injection', gallery: [{url: "https://placehold.co/800x600.png", hint: "flat cheeks"}, {url: "https://placehold.co/800x600.png", hint: "defined cheekbones"}, {url: "https://placehold.co/800x600.png", hint: "filler injection"}] },
  { id: 'microdermabrasion', slug: 'microdermabrasion', image: '/images/Microdermabrasion.png', imageHint: 'microdermabrasion skin procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "uneven skin tone"}, {url: "https://placehold.co/800x600.png", hint: "smooth skin"}, {url: "https://placehold.co/800x600.png", hint: "exfoliation"}] },
  { id: 'jawline-contouring', slug: 'jawline-contouring', image: '/images/Jawline%20Contouring%20FillersThreads.png', imageHint: 'jawline fillers procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "soft jawline"}, {url: "https://placehold.co/800x600.png", hint: "sharp jawline"}, {url: "https://placehold.co/800x600.png", hint: "thread lift"}] },
  { id: 'wrinkle-fillers', slug: 'dermal-fillers-wrinkles', image: '/images/Dermal%20Fillers%20for%20Wrinkles.png', imageHint: 'dermal fillers face application', gallery: [{url: "https://placehold.co/800x600.png", hint: "facial wrinkles"}, {url: "https://placehold.co/800x600.png", hint: "smooth face"}, {url: "https://placehold.co/800x600.png", hint: "hyaluronic acid"}] },
  { id: 'prp-face', slug: 'prp-facial-rejuvenation', image: '/images/PRP%20Facial%20Rejuvenation.png', imageHint: 'prp facial therapy procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "tired skin"}, {url: "https://placehold.co/800x600.png", hint: "rejuvenated skin"}, {url: "https://placehold.co/800x600.png", hint: "prp injection"}] },
  { id: 'dark-circles-treatment', slug: 'dark-circles-treatment', image: '/images/Under-Eye%20Dark%20Circles%20Treatment.png', imageHint: 'dark circles eye treatment', gallery: [{url: "https://placehold.co/800x600.png", hint: "under eye bags"}, {url: "https://placehold.co/800x600.png", hint: "bright eyes"}, {url: "https://placehold.co/800x600.png", hint: "filler treatment"}] },
  { id: 'prp-hair', slug: 'prp-hair-restoration', image: '/images/PRP%20Hair%20Restoration.png', imageHint: 'prp hair treatment scalp', gallery: [{url: "https://placehold.co/800x600.png", hint: "thinning hair"}, {url: "https://placehold.co/800x600.png", hint: "thicker hair"}, {url: "https://placehold.co/800x600.png", hint: "scalp injection"}] },
  { id: 'white-peeling', slug: 'chemical-peel', image: '/images/Chemical%20Peels%20(White%20Peeling).png', imageHint: 'chemical peel skin application', gallery: [{url: "https://placehold.co/800x600.png", hint: "sun damage"}, {url: "https://placehold.co/800x600.png", hint: "clear skin"}, {url: "https://placehold.co/800x600.png", hint: "peeling process"}] },
  { id: 'microneedling', slug: 'microneedling', image: '/images/Microneedling%20(Collagen%20Induction%20Therapy).png', imageHint: 'microneedling device skin', gallery: [{url: "https://placehold.co/800x600.png", hint: "acne scars"}, {url: "https://placehold.co/800x600.png", hint: "improved texture"}, {url: "https://placehold.co/800x600.png", hint: "microneedling pen"}] },
  { id: 'radiofrequency-face', slug: 'radiofrequency-skin-tightening', image: '/images/Radiofrequency%20Skin%20Tightening%20(Face).png', imageHint: 'radiofrequency facial treatment', gallery: [{url: "https://placehold.co/800x600.png", hint: "sagging skin"}, {url: "https://placehold.co/800x600.png", hint: "tighter skin"}, {url: "https://placehold.co/800x600.png", hint: "rf device"}] },
  { id: 'sulcus-filling', slug: 'nasolabial-fold-fillers', image: '/images/Nasolabial%20Fold%20Fillers%20(Sulcus%20Filling).png', imageHint: 'smile line fillers injection', gallery: [{url: "https://placehold.co/800x600.png", hint: "deep smile lines"}, {url: "https://placehold.co/800x600.png", hint: "smoother lines"}, {url: "https://placehold.co/800x600.png", hint: "filler placement"}] },
  { id: 'chin-reshaping', slug: 'non-surgical-chin-reshaping', image: '/images/Non-Surgical%20Chin%20Reshaping%20(Fillers).png', imageHint: 'chin fillers procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "recessed chin"}, {url: "https://placehold.co/800x600.png", hint: "enhanced chin"}, {url: "https://placehold.co/800x600.png", hint: "side profile"}] },
];

const breastServices: Service[] = [
  { id: 'zmadh-gjoksit', slug: 'breast-augmentation', image: '/images/Breast%20Augmentation.png', imageHint: 'breast augmentation results', gallery: [{url: "https://placehold.co/800x600.png", hint: "before augmentation"}, {url: "https://placehold.co/800x600.png", hint: "after augmentation"}, {url: "https://placehold.co/800x600.png", hint: "implant options"}] },
  { id: 'lift-gjoksit', slug: 'breast-lift', image: '/images/Breast%20Lift.png', imageHint: 'breast lift surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "sagging breasts"}, {url: "https://placehold.co/800x600.png", hint: "lifted breasts"}, {url: "https://placehold.co/800x600.png", hint: "incision planning"}] },
  { id: 'zvog-gjoksit', slug: 'breast-reduction', image: '/images/Breast%20Reduction.png', imageHint: 'breast reduction procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "large breasts"}, {url: "https://placehold.co/800x600.png", hint: "reduced breasts"}, {url: "https://placehold.co/800x600.png", hint: "post-op comfort"}] },
  { id: 'rikonst-gjoksit', slug: 'breast-reconstruction', image: '/images/Breast%20Reconstruction.png', imageHint: 'breast reconstruction process', gallery: [{url: "https://placehold.co/800x600.png", hint: "post mastectomy"}, {url: "https://placehold.co/800x600.png", hint: "reconstructed breast"}, {url: "https://placehold.co/800x600.png", hint: "tissue expander"}] },
];

const bodyServices: Service[] = [
  { id: 'lift-kraheve', slug: 'arm-lift', image: '/images/Arm%20Lift.png', imageHint: 'arm lift results', gallery: [{url: "https://placehold.co/800x600.png", hint: "loose arm skin"}, {url: "https://placehold.co/800x600.png", hint: "toned arms"}, {url: "https://placehold.co/800x600.png", hint: "surgical markings"}] },
  { id: 'rim-barkut', slug: 'tummy-tuck', image: '/images/Tummy%20Tuck.png', imageHint: 'tummy tuck surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "excess belly skin"}, {url: "https://placehold.co/800x600.png", hint: "flat abdomen"}, {url: "https://placehold.co/800x600.png", hint: "muscle repair"}] },
  { id: 'liposculptura', slug: 'liposculpture', image: '/images/Liposculpture.png', imageHint: 'liposculpture body contouring', gallery: [{url: "https://placehold.co/800x600.png", hint: "body before"}, {url: "https://placehold.co/800x600.png", hint: "contoured body"}, {url: "https://placehold.co/800x600.png", hint: "liposuction cannula"}] },
  { id: 'rim-vitheve-bbl', slug: 'bbl-buttock-remodeling', image: '/images/BBL%20Buttock%20Remodeling.png', imageHint: 'buttock remodel surgery', gallery: [{url: "https://placehold.co/800x600.png", hint: "flat buttocks"}, {url: "https://placehold.co/800x600.png", hint: "fuller buttocks"}, {url: "https://placehold.co/800x600.png", hint: "fat transfer"}] },
  { id: 'labioplastika', slug: 'labiaplasty', image: '/images/labiaplasty.png', imageHint: 'labiaplasty procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "procedure illustration"}, {url: "https://placehold.co/800x600.png", hint: "aesthetic results"}, {url: "https://placehold.co/800x600.png", hint: "comfort and confidence"}] },
  { id: 'lift-kofsheve', slug: 'thigh-lift', image: '/images/Thigh%20Lift.png', imageHint: 'thigh lift results', gallery: [{url: "https://placehold.co/800x600.png", hint: "loose thigh skin"}, {url: "https://placehold.co/800x600.png", hint: "toned thighs"}, {url: "https://placehold.co/800x600.png", hint: "inner thigh lift"}] },
  { id: 'gynecomastia', slug: 'gynecomastia', image: '/images/gynecomastia.png', imageHint: 'male chest', gallery: [{url: "https://placehold.co/800x600.png", hint: "male chest before"}, {url: "https://placehold.co/800x600.png", hint: "male chest after"}, {url: "https://placehold.co/800x600.png", hint: "surgical treatment"}] },
  { id: 'cellulite-treatment', slug: 'cellulite-treatment', image: '/images/Cellulite%20Treatment.png', imageHint: 'cellulite reduction', gallery: [{url: "https://placehold.co/800x600.png", hint: "cellulite on thighs"}, {url: "https://placehold.co/800x600.png", hint: "smoother skin"}, {url: "https://placehold.co/800x600.png", hint: "treatment device"}] },
  { id: 'plasma-arc-body', slug: 'plasma-arc-body', image: '/images/plasma-arc.png', imageHint: 'skin tightening', gallery: [{url: "https://placehold.co/800x600.png", hint: "loose stomach skin"}, {url: "https://placehold.co/800x600.png", hint: "tighter stomach skin"}, {url: "https://placehold.co/800x600.png", hint: "plasma pen on body"}] },
  { id: 'carboxytherapy', slug: 'carboxytherapy', image: '/images/carboxytherapy.png', imageHint: 'co2 therapy', gallery: [{url: "https://placehold.co/800x600.png", hint: "stretch marks"}, {url: "https://placehold.co/800x600.png", hint: "reduced stretch marks"}, {url: "https://placehold.co/800x600.png", hint: "co2 injection"}] },
  { id: 'sclerotherapy', slug: 'sclerotherapy', image: '/images/Sclerotherapy.png', imageHint: 'vein treatment', gallery: [{url: "https://placehold.co/800x600.png", hint: "spider veins"}, {url: "https://placehold.co/800x600.png", hint: "clear legs"}, {url: "https://placehold.co/800x600.png", hint: "injection process"}] },
  { id: 'lipolysis', slug: 'lipolysis', image: '/images/Lipolysis.png', imageHint: 'fat reduction', gallery: [{url: "https://placehold.co/800x600.png", hint: "stubborn fat"}, {url: "https://placehold.co/800x600.png", hint: "slimmer contour"}, {url: "https://placehold.co/800x600.png", hint: "injection lipolysis"}] },
  { id: 'laser-hair-removal', slug: 'laser-hair-removal', image: '/images/Laser%20Hair%20Removal.png', imageHint: 'laser hair removal', gallery: [{url: "https://placehold.co/800x600.png", hint: "unwanted hair"}, {url: "https://placehold.co/800x600.png", hint: "smooth skin"}, {url: "https://placehold.co/800x600.png", hint: "laser device"}] },
];

const aestheticDentistryServices: Service[] = [
  { id: 'teeth-whitening', slug: 'teeth-whitening', image: '/images/Teeth%20Whitening.png', imageHint: 'teeth whitening smile close up', gallery: [{url: "https://placehold.co/800x600.png", hint: "stained teeth"}, {url: "https://placehold.co/800x600.png", hint: "bright white smile"}, {url: "https://placehold.co/800x600.png", hint: "whitening procedure"}] },
  { id: 'composite-veneers', slug: 'composite-veneers', image: '/images/Composite%20Veneers.png', imageHint: 'dental veneers beautiful smile', gallery: [{url: "https://placehold.co/800x600.png", hint: "chipped teeth"}, {url: "https://placehold.co/800x600.png", hint: "perfect smile"}, {url: "https://placehold.co/800x600.png", hint: "veneer application"}] },
  { id: 'emax-veneers', slug: 'emax-veneers', image: '/images/E-Max%20Veneers.png', imageHint: 'porcelain veneers smile design', gallery: [{url: "https://placehold.co/800x600.png", hint: "smile makeover before"}, {url: "https://placehold.co/800x600.png", hint: "smile makeover after"}, {url: "https://placehold.co/800x600.png", hint: "e-max material"}] },
];

const prostheticsServices: Service[] = [
  { id: 'dental-crowns', slug: 'dental-crowns', image: '/images/Dental%20Crowns.png', imageHint: 'dental crown tooth model', gallery: [{url: "https://placehold.co/800x600.png", hint: "broken tooth"}, {url: "https://placehold.co/800x600.png", hint: "crowned tooth"}, {url: "https://placehold.co/800x600.png", hint: "crown fitting"}] },
  { id: 'dental-bridges', slug: 'dental-bridges', image: '/images/Dental%20Bridges.png', imageHint: 'dental bridge teeth model', gallery: [{url: "https://placehold.co/800x600.png", hint: "missing tooth gap"}, {url: "https://placehold.co/800x600.png", hint: "bridge in place"}, {url: "https://placehold.co/800x600.png", hint: "bridge structure"}] },
  { id: 'dentures', slug: 'dentures', image: '/images/Dentures.png', imageHint: 'dentures smile model', gallery: [{url: "https://placehold.co/800x600.png", hint: "before dentures"}, {url: "https://placehold.co/800x600.png", hint: "smiling with dentures"}, {url: "https://placehold.co/800x600.png", hint: "denture fitting"}] },
];

const orthodonticsServices: Service[] = [
  { id: 'invisalign', slug: 'invisalign', image: '/images/Invisalign.png', imageHint: 'invisalign aligners smile transparent', gallery: [{url: "https://placehold.co/800x600.png", hint: "crooked teeth"}, {url: "https://placehold.co/800x600.png", hint: "straight teeth"}, {url: "https://placehold.co/800x600.png", hint: "invisalign trays"}] },
  { id: 'fixed-braces', slug: 'fixed-braces', image: '/images/Fixed%20Braces.png', imageHint: 'dental braces smile metal', gallery: [{url: "https://placehold.co/800x600.png", hint: "before braces"}, {url: "https://placehold.co/800x600.png", hint: "after braces"}, {url: "https://placehold.co/800x600.png", hint: "braces close-up"}] },
  { id: 'removable-appliances', slug: 'removable-appliances', image: '/images/Removable%20Appliances.png', imageHint: 'orthodontic appliance retainer', gallery: [{url: "https://placehold.co/800x600.png", hint: "orthodontic issue"}, {url: "https://placehold.co/800x600.png", hint: "corrected smile"}, {url: "https://placehold.co/800x600.png", hint: "retainer example"}] },
];

const restorativeDentistryServices: Service[] = [
  { id: 'teeth-cleaning', slug: 'teeth-cleaning', image: '/images/Teeth%20Cleaning%20(Calculus%20Removal).png', imageHint: 'dental cleaning hygiene tools', gallery: [{url: "https://placehold.co/800x600.png", hint: "plaque buildup"}, {url: "https://placehold.co/800x600.png", hint: "clean teeth"}, {url: "https://placehold.co/800x600.png", hint: "dental scaling"}] },
  { id: 'dental-fillings', slug: 'dental-fillings', image: '/images/Dental%20Fillings.png', imageHint: 'tooth filling dental procedure', gallery: [{url: "https://placehold.co/800x600.png", hint: "cavity in tooth"}, {url: "https://placehold.co/800x600.png", hint: "filled tooth"}, {url: "https://placehold.co/800x600.png", hint: "filling material"}] },
  { id: 'root-canal-treatment', slug: 'root-canal-treatment', image: '/images/Root%20Canal%20Treatment.png', imageHint: 'root canal procedure tooth', gallery: [{url: "https://placehold.co/800x600.png", hint: "infected tooth xray"}, {url: "https://placehold.co/800x600.png", hint: "treated tooth"}, {url: "https://placehold.co/800x600.png", hint: "root canal process"}] },
];

const oralSurgeryServices: Service[] = [
  { id: 'tooth-extraction', slug: 'tooth-extraction', image: '/images/Tooth%20Extraction.png', imageHint: 'tooth extraction dental tools', gallery: [{url: "https://placehold.co/800x600.png", hint: "damaged tooth"}, {url: "https://placehold.co/800x600.png", hint: "extraction site"}, {url: "https://placehold.co/800x600.png", hint: "healing process"}] },
  { id: 'dental-implants', slug: 'dental-implants', image: '/images/Dental%20Implants.png', imageHint: 'dental implant surgery model', gallery: [{url: "https://placehold.co/800x600.png", hint: "missing tooth"}, {url: "https://placehold.co/800x600.png", hint: "implant in jaw"}, {url: "https://placehold.co/800x600.png", hint: "final crown"}] },
  { id: 'apical-resection', slug: 'apical-resection', image: '/images/Apical%20Resection%20(Apicoectomy).png', imageHint: 'dental surgery procedure detail', gallery: [{url: "https://placehold.co/800x600.png", hint: "root infection xray"}, {url: "https://placehold.co/800x600.png", hint: "apicoectomy surgery"}, {url: "https://placehold.co/800x600.png", hint: "healed root"}] },
];

const pediatricDentistryServices: Service[] = [
  { id: 'primary-teeth-care', slug: 'primary-teeth-care', image: '/images/Primary%20Teeth%20Care%20(Milk%20Teeth).png', imageHint: 'child dentist kids care', gallery: [{url: "https://placehold.co/800x600.png", hint: "child at dentist"}, {url: "https://placehold.co/800x600.png", hint: "healthy milk teeth"}, {url: "https://placehold.co/800x600.png", hint: "fun dental visit"}] },
  { id: 'teeth-fluoridation', slug: 'teeth-fluoridation', image: '/images/Teeth%20Fluoridation.png', imageHint: 'fluoride treatment child dental', gallery: [{url: "https://placehold.co/800x600.png", hint: "fluoride varnish"}, {url: "https://placehold.co/800x600.png", hint: "strong teeth"}, {url: "https://placehold.co/800x600.png", hint: "preventing cavities"}] },
  { id: 'dental-sealants', slug: 'dental-sealants', image: '/images/Dental%20Sealants.png', imageHint: 'dental sealants kids teeth', gallery: [{url: "https://placehold.co/800x600.png", hint: "molar fissures"}, {url: "https://placehold.co/800x600.png", hint: "sealed tooth"}, {url: "https://placehold.co/800x600.png", hint: "sealant application"}] },
];

export const dentalCategoryIds = [
  'aesthetic-dentistry',
  'prosthetics',
  'orthodontics',
  'restorative-dentistry',
  'oral-surgery',
  'pediatric-dentistry',
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
    image: '/images/Aesthetic%20Dentistry.png',
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
    image: '/images/Restorative%20&%20General%20Dentistry.png',
    imageHint: 'general dentistry tools'
  },
  {
    id: 'oral-surgery',
    slug: 'oral-surgery',
    services: oralSurgeryServices,
    image: '/images/Oral%20Surgery%20(Dental).png',
    imageHint: 'oral surgery instruments'
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    services: pediatricDentistryServices,
    image: '/images/Pediatric%20Dentistry.png',
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
