
import type { ServiceCategory, Service, ServiceWithContent } from '@/types/services';

const facialSurgeryServices: Service[] = [
  { id: 'op-hunde', slug: 'rhinoplasty', image: '/images/woman-getting-ready-nose-job-surgery%20(e).jpg', imageHint: 'nose surgery detail', gallery: [{url: "/images/galleries/rhinoplasty-1.png", hint: "rhinoplasty consultation"}, {url: "/images/galleries/rhinoplasty-2.png", hint: "surgical markup"}, {url: "/images/galleries/rhinoplasty-3.png", hint: "post-op checkup"}] },
  { id: 'rim-hunde', slug: 'nose-tip-reshaping', image: '/images/Nose-Tip-Reshaping.png', imageHint: 'nose tip surgery', gallery: [{url: "/images/galleries/nose-tip-reshaping-1.png", hint: "nose tip detail"}, {url: "/images/galleries/nose-tip-reshaping-2.png", hint: "suture placement"}, {url: "/images/galleries/nose-tip-reshaping-3.png", hint: "healing process"}] },
  { id: 'rim-vesheve', slug: 'otoplasty', image: '/images/otoplasty.png', imageHint: 'otoplasty results', gallery: [{url: "/images/galleries/otoplasty-1.png", hint: "ear before surgery"}, {url: "/images/galleries/otoplasty-2.png", hint: "ear after surgery"}, {url: "/images/galleries/otoplasty-3.png", hint: "otoplasty technique"}] },
  { id: 'mbj-flokeve', slug: 'hair-transplant', image: '/images/hair-transplant.png', imageHint: 'hair transplant before after', gallery: [{url: "/images/galleries/hair-transplant-1.png", hint: "donor area"}, {url: "/images/galleries/hair-transplant-2.png", hint: "follicle extraction"}, {url: "/images/galleries/hair-transplant-3.png", hint: "recipient area"}] },
  { id: 'mbj-mjekres', slug: 'beard-transplant', image: '/images/Beard-Transplant.png', imageHint: 'Beard Transplant results', gallery: [{url: "/images/galleries/beard-transplant-1.png", hint: "patchy beard before"}, {url: "/images/galleries/beard-transplant-2.png", hint: "full beard after"}, {url: "/images/galleries/beard-transplant-3.png", hint: "beard design"}] },
  { id: 'mbj-vetullave', slug: 'eyebrow-transplant', image: '/images/Eyebrow%20Transplant.png', imageHint: 'eyebrow transplant detail', gallery: [{url: "/images/galleries/eyebrow-transplant-1.png", hint: "thin eyebrows"}, {url: "/images/galleries/eyebrow-transplant-2.png", hint: "fuller eyebrows"}, {url: "/images/galleries/eyebrow-transplant-3.png", hint: "eyebrow shaping"}] },
  { id: 'lift-vetullave', slug: 'eyebrow-lift', image: '/images/Eyebrow%20Lift%20(Browplasty).png', imageHint: 'eyebrow lift surgery', gallery: [{url: "/images/galleries/eyebrow-lift-1.png", hint: "forehead lines"}, {url: "/images/galleries/eyebrow-lift-2.png", hint: "lifted brows"}, {url: "/images/galleries/eyebrow-lift-3.png", hint: "youthful appearance"}] },
  { id: 'blefaroplastika', slug: 'blepharoplasty', image: '/images/Eyelid%20Surgery%20(Blepharoplasty).png', imageHint: 'eyelid surgery results', gallery: [{url: "/images/galleries/blepharoplasty-1.png", hint: "droopy eyelids"}, {url: "/images/galleries/blepharoplasty-2.png", hint: "rejuvenated eyes"}, {url: "/images/galleries/blepharoplasty-3.png", hint: "upper eyelid surgery"}] },
  { id: 'lift-fytyres', slug: 'face-lift', image: '/images/Face%20Lift%20(Rhytidectomy).png', imageHint: 'face lift surgery', gallery: [{url: "/images/galleries/face-lift-1.png", hint: "aging signs"}, {url: "/images/galleries/face-lift-2.png", hint: "facelift results"}, {url: "/images/galleries/face-lift-3.png", hint: "neck lift"}] },
  { id: 'rim-mjekres', slug: 'genioplasty', image: '/images/Chin%20Augmentation%20(Genioplasty).png', imageHint: 'chin augmentation surgery', gallery: [{url: "/images/galleries/genioplasty-1.png", hint: "weak chin profile"}, {url: "/images/galleries/genioplasty-2.png", hint: "defined chin"}, {url: "/images/galleries/genioplasty-3.png", hint: "facial balance"}] },
];

const facialTreatmentsServices: Service[] = [
  { id: 'lip-reshaping', slug: 'lip-reshaping', image: '/images/Lip%20Reshaping%20&%20Augmentation.png', imageHint: 'lip fillers application', gallery: [{url: "/images/galleries/lip-reshaping-1.png", hint: "lip augmentation"}, {url: "/images/galleries/lip-reshaping-2.png", hint: "lip definition"}, {url: "/images/galleries/lip-reshaping-3.png", hint: "natural results"}] },
  { id: 'xanthelasma-plasma-arc', slug: 'eyelid-deposit-removal', image: '/images/eyelid-deposit-removal.png', imageHint: 'xanthelasma plasma device', gallery: [{url: "/images/galleries/eyelid-deposit-removal-1.png", hint: "eyelid cholesterol"}, {url: "/images/galleries/eyelid-deposit-removal-2.png", hint: "plasma pen treatment"}, {url: "/images/galleries/eyelid-deposit-removal-3.png", hint: "clear eyelids"}] },
  { id: 'multivitamin-treatment', slug: 'multivitamin-infusion-facial', image: '/images/Multivitamin%20Infusion%20Facial.png', imageHint: 'vitamin facial therapy', gallery: [{url: "/images/galleries/multivitamin-infusion-facial-1.png", hint: "dull skin"}, {url: "/images/galleries/multivitamin-infusion-facial-2.png", hint: "glowing skin"}, {url: "/images/galleries/multivitamin-infusion-facial-3.png", hint: "vitamin infusion"}] },
  { id: 'eyelids-plasma-arc', slug: 'non-surgical-eyelid-lift', image: '/images/Non-Surgical%20Eyelid%20Lift%20(Plasma%20Arc).png', imageHint: 'plasma eyelid treatment', gallery: [{url: "/images/galleries/non-surgical-eyelid-lift-1.png", hint: "hooded eyes"}, {url: "/images/galleries/non-surgical-eyelid-lift-2.png", hint: "lifted eyelids"}, {url: "/images/galleries/non-surgical-eyelid-lift-3.png", hint: "plasma energy"}] },
  { id: 'cheekbone-reshaping', slug: 'cheekbone-contouring', image: '/images/Cheekbone%20Contouring%20(Fillers).png', imageHint: 'cheek fillers injection', gallery: [{url: "/images/galleries/cheekbone-contouring-1.png", hint: "flat cheeks"}, {url: "/images/galleries/cheekbone-contouring-2.png", hint: "defined cheekbones"}, {url: "/images/galleries/cheekbone-contouring-3.png", hint: "filler injection"}] },
  { id: 'microdermabrasion', slug: 'microdermabrasion', image: '/images/Microdermabrasion.png', imageHint: 'microdermabrasion skin procedure', gallery: [{url: "/images/galleries/microdermabrasion-1.png", hint: "uneven skin tone"}, {url: "/images/galleries/microdermabrasion-2.png", hint: "smooth skin"}, {url: "/images/galleries/microdermabrasion-3.png", hint: "exfoliation"}] },
  { id: 'jawline-contouring', slug: 'jawline-contouring', image: '/images/Jawline%20Contouring%20FillersThreads.png', imageHint: 'jawline fillers procedure', gallery: [{url: "/images/galleries/jawline-contouring-1.png", hint: "soft jawline"}, {url: "/images/galleries/jawline-contouring-2.png", hint: "sharp jawline"}, {url: "/images/galleries/jawline-contouring-3.png", hint: "thread lift"}] },
  { id: 'wrinkle-fillers', slug: 'dermal-fillers-wrinkles', image: '/images/Dermal%20Fillers%20for%20Wrinkles.png', imageHint: 'dermal fillers face application', gallery: [{url: "/images/galleries/dermal-fillers-wrinkles-1.png", hint: "facial wrinkles"}, {url: "/images/galleries/dermal-fillers-wrinkles-2.png", hint: "smooth face"}, {url: "/images/galleries/dermal-fillers-wrinkles-3.png", hint: "hyaluronic acid"}] },
  { id: 'prp-face', slug: 'prp-facial-rejuvenation', image: '/images/PRP%20Facial%20Rejuvenation.png', imageHint: 'prp facial therapy procedure', gallery: [{url: "/images/galleries/prp-facial-rejuvenation-1.png", hint: "tired skin"}, {url: "/images/galleries/prp-facial-rejuvenation-2.png", hint: "rejuvenated skin"}, {url: "/images/galleries/prp-facial-rejuvenation-3.png", hint: "prp injection"}] },
  { id: 'dark-circles-treatment', slug: 'dark-circles-treatment', image: '/images/Under-Eye%20Dark%20Circles%20Treatment.png', imageHint: 'dark circles eye treatment', gallery: [{url: "/images/galleries/dark-circles-treatment-1.png", hint: "under eye bags"}, {url: "/images/galleries/dark-circles-treatment-2.png", hint: "bright eyes"}, {url: "/images/galleries/dark-circles-treatment-3.png", hint: "filler treatment"}] },
  { id: 'prp-hair', slug: 'prp-hair-restoration', image: '/images/PRP%20Hair%20Restoration.png', imageHint: 'prp hair treatment scalp', gallery: [{url: "/images/galleries/prp-hair-restoration-1.png", hint: "thinning hair"}, {url: "/images/galleries/prp-hair-restoration-2.png", hint: "thicker hair"}, {url: "/images/galleries/prp-hair-restoration-3.png", hint: "scalp injection"}] },
  { id: 'white-peeling', slug: 'chemical-peel', image: '/images/Chemical%20Peels%20(White%20Peeling).png', imageHint: 'chemical peel skin application', gallery: [{url: "/images/galleries/chemical-peel-1.png", hint: "sun damage"}, {url: "/images/galleries/chemical-peel-2.png", hint: "clear skin"}, {url: "/images/galleries/chemical-peel-3.png", hint: "peeling process"}] },
  { id: 'microneedling', slug: 'microneedling', image: '/images/Microneedling%20(Collagen%20Induction%20Therapy).png', imageHint: 'microneedling device skin', gallery: [{url: "/images/galleries/microneedling-1.png", hint: "acne scars"}, {url: "/images/galleries/microneedling-2.png", hint: "improved texture"}, {url: "/images/galleries/microneedling-3.png", hint: "microneedling pen"}] },
  { id: 'radiofrequency-face', slug: 'radiofrequency-skin-tightening', image: '/images/Radiofrequency%20Skin%20Tightening%20(Face).png', imageHint: 'radiofrequency facial treatment', gallery: [{url: "/images/galleries/radiofrequency-skin-tightening-1.png", hint: "sagging skin"}, {url: "/images/galleries/radiofrequency-skin-tightening-2.png", hint: "tighter skin"}, {url: "/images/galleries/radiofrequency-skin-tightening-3.png", hint: "rf device"}] },
  { id: 'sulcus-filling', slug: 'nasolabial-fold-fillers', image: '/images/Nasolabial%20Fold%20Fillers%20(Sulcus%20Filling).png', imageHint: 'smile line fillers injection', gallery: [{url: "/images/galleries/nasolabial-fold-fillers-1.png", hint: "deep smile lines"}, {url: "/images/galleries/nasolabial-fold-fillers-2.png", hint: "smoother lines"}, {url: "/images/galleries/nasolabial-fold-fillers-3.png", hint: "filler placement"}] },
  { id: 'chin-reshaping', slug: 'non-surgical-chin-reshaping', image: '/images/Non-Surgical%20Chin%20Reshaping%20(Fillers).png', imageHint: 'chin fillers procedure', gallery: [{url: "/images/galleries/non-surgical-chin-reshaping-1.png", hint: "recessed chin"}, {url: "/images/galleries/non-surgical-chin-reshaping-2.png", hint: "enhanced chin"}, {url: "/images/galleries/non-surgical-chin-reshaping-3.png", hint: "side profile"}] },
];

const bodySurgicalServices: Service[] = [
  { id: 'zmadh-gjoksit', slug: 'breast-augmentation', image: '/images/Breast%20Augmentation.png', imageHint: 'breast augmentation results', gallery: [{url: "/images/galleries/breast-augmentation-1.png", hint: "before augmentation"}, {url: "/images/galleries/breast-augmentation-2.png", hint: "after augmentation"}, {url: "/images/galleries/breast-augmentation-3.png", hint: "implant options"}] },
  { id: 'lift-gjoksit', slug: 'breast-lift', image: '/images/Breast%20Lift.png', imageHint: 'breast lift surgery', gallery: [{url: "/images/galleries/breast-lift-1.png", hint: "sagging breasts"}, {url: "/images/galleries/breast-lift-2.png", hint: "lifted breasts"}, {url: "/images/galleries/breast-lift-3.png", hint: "incision planning"}] },
  { id: 'zvog-gjoksit', slug: 'breast-reduction', image: '/images/Breast%20Reduction.png', imageHint: 'breast reduction procedure', gallery: [{url: "/images/galleries/breast-reduction-1.png", hint: "large breasts"}, {url: "/images/galleries/breast-reduction-2.png", hint: "reduced breasts"}, {url: "/images/galleries/breast-reduction-3.png", hint: "post-op comfort"}] },
  { id: 'rikonst-gjoksit', slug: 'breast-reconstruction', image: '/images/Breast-reconstruction.png', imageHint: 'breast reconstruction process', gallery: [{url: "/images/galleries/breast-reconstruction-1.png", hint: "post mastectomy"}, {url: "/images/galleries/breast-reconstruction-2.png", hint: "reconstructed breast"}, {url: "/images/galleries/breast-reconstruction-3.png", hint: "tissue expander"}] },
  { id: 'lift-kraheve', slug: 'arm-lift', image: '/images/Arm%20Lift.png', imageHint: 'arm lift results', gallery: [{url: "/images/galleries/arm-lift-1.png", hint: "loose arm skin"}, {url: "/images/galleries/arm-lift-2.png", hint: "toned arms"}, {url: "/images/galleries/arm-lift-3.png", hint: "surgical markings"}] },
  { id: 'rim-barkut', slug: 'tummy-tuck', image: '/images/Tummy%20Tuck.png', imageHint: 'tummy tuck surgery', gallery: [{url: "/images/galleries/tummy-tuck-1.png", hint: "excess belly skin"}, {url: "/images/galleries/tummy-tuck-2.png", hint: "flat abdomen"}, {url: "/images/galleries/tummy-tuck-3.png", hint: "muscle repair"}] },
  { id: 'liposculptura', slug: 'liposculpture', image: '/images/Liposculpture.png', imageHint: 'liposculpture body contouring', gallery: [{url: "/images/galleries/liposculpture-1.png", hint: "body before"}, {url: "/images/galleries/liposculpture-2.png", hint: "contoured body"}, {url: "/images/galleries/liposculpture-3.png", hint: "liposuction cannula"}] },
  { id: 'rim-vitheve-bbl', slug: 'bbl-buttock-remodeling', image: '/images/BBL%20Buttock%20Remodeling.png', imageHint: 'buttock remodel surgery', gallery: [{url: "/images/galleries/bbl-buttock-remodeling-1.png", hint: "flat buttocks"}, {url: "/images/galleries/bbl-buttock-remodeling-2.png", hint: "fuller buttocks"}, {url: "/images/galleries/bbl-buttock-remodeling-3.png", hint: "fat transfer"}] },
  { id: 'labioplastika', slug: 'labiaplasty', image: '/images/labiaplasty.png', imageHint: 'labiaplasty procedure', gallery: [{url: "/images/galleries/labiaplasty-1.png", hint: "procedure illustration"}, {url: "/images/galleries/labiaplasty-2.png", hint: "aesthetic results"}, {url: "/images/galleries/labiaplasty-3.png", hint: "comfort and confidence"}] },
  { id: 'lift-kofsheve', slug: 'thigh-lift', image: '/images/Thigh%20Lift.png', imageHint: 'thigh lift results', gallery: [{url: "/images/galleries/thigh-lift-1.png", hint: "loose thigh skin"}, {url: "/images/galleries/thigh-lift-2.png", hint: "toned thighs"}, {url: "/images/galleries/thigh-lift-3.png", hint: "inner thigh lift"}] },
  { id: 'gynecomastia', slug: 'gynecomastia', image: '/images/gynecomastia.png', imageHint: 'male chest', gallery: [{url: "/images/galleries/gynecomastia-1.png", hint: "male chest before"}, {url: "/images/galleries/gynecomastia-2.png", hint: "male chest after"}, {url: "/images/galleries/gynecomastia-3.png", hint: "surgical treatment"}] },
];

const bodyNonSurgicalServices: Service[] = [
  { id: 'cellulite-treatment', slug: 'cellulite-treatment', image: '/images/Cellulite%20Treatment.png', imageHint: 'cellulite reduction', gallery: [{url: "/images/galleries/cellulite-treatment-1.png", hint: "cellulite on thighs"}, {url: "/images/galleries/cellulite-treatment-2.png", hint: "smoother skin"}, {url: "/images/galleries/cellulite-treatment-3.png", hint: "treatment device"}] },
  { id: 'plasma-arc-body', slug: 'plasma-arc-body', image: '/images/plasma-arc-body.png', imageHint: 'skin tightening', gallery: [{url: "/images/galleries/plasma-arc-body-1.png", hint: "loose stomach skin"}, {url: "/images/galleries/plasma-arc-body-2.png", hint: "tighter stomach skin"}, {url: "/images/galleries/plasma-arc-body-3.png", hint: "plasma pen on body"}] },
  { id: 'carboxytherapy', slug: 'carboxytherapy', image: '/images/carboxytherapy.png', imageHint: 'co2 therapy', gallery: [{url: "/images/galleries/carboxytherapy-1.png", hint: "stretch marks"}, {url: "/images/galleries/carboxytherapy-2.png", hint: "reduced stretch marks"}, {url: "/images/galleries/carboxytherapy-3.png", hint: "co2 injection"}] },
  { id: 'sclerotherapy', slug: 'sclerotherapy', image: '/images/Sclerotherapy.png', imageHint: 'vein treatment', gallery: [{url: "/images/galleries/sclerotherapy-1.png", hint: "spider veins"}, {url: "/images/galleries/sclerotherapy-2.png", hint: "clear legs"}, {url: "/images/galleries/sclerotherapy-3.png", hint: "injection process"}] },
  { id: 'lipolysis', slug: 'lipolysis', image: '/images/Lipolysis.png', imageHint: 'fat reduction', gallery: [{url: "/images/galleries/lipolysis-1.png", hint: "stubborn fat"}, {url: "/images/galleries/lipolysis-2.png", hint: "slimmer contour"}, {url: "/images/galleries/lipolysis-3.png", hint: "injection lipolysis"}] },
  { id: 'laser-hair-removal', slug: 'laser-hair-removal', image: '/images/Laser%20Hair%20Removal.png', imageHint: 'laser hair removal', gallery: [{url: "/images/galleries/laser-hair-removal-1.png", hint: "unwanted hair"}, {url: "/images/galleries/laser-hair-removal-2.png", hint: "smooth skin"}, {url: "/images/galleries/laser-hair-removal-3.png", hint: "laser device"}] },
];

const aestheticDentistryServices: Service[] = [
  { id: 'teeth-whitening', slug: 'teeth-whitening', image: '/images/Teeth%20Whitening.png', imageHint: 'teeth whitening smile close up', gallery: [{url: "/images/galleries/teeth-whitening-1.png", hint: "stained teeth"}, {url: "/images/galleries/teeth-whitening-2.png", hint: "bright white smile"}, {url: "/images/galleries/teeth-whitening-3.png", hint: "whitening procedure"}] },
  { id: 'composite-veneers', slug: 'composite-veneers', image: '/images/Composite%20Veneers.png', imageHint: 'dental veneers beautiful smile', gallery: [{url: "/images/galleries/composite-veneers-1.png", hint: "chipped teeth"}, {url: "/images/galleries/composite-veneers-2.png", hint: "perfect smile"}, {url: "/images/galleries/composite-veneers-3.png", hint: "veneer application"}] },
  { id: 'emax-veneers', slug: 'emax-veneers', image: '/images/E-Max%20Veneers.png', imageHint: 'porcelain veneers smile design', gallery: [{url: "/images/galleries/emax-veneers-1.png", hint: "smile makeover before"}, {url: "/images/galleries/emax-veneers-2.png", hint: "smile makeover after"}, {url: "/images/galleries/emax-veneers-3.png", hint: "e-max material"}] },
];

const prostheticsServices: Service[] = [
  { id: 'dental-crowns', slug: 'dental-crowns', image: '/images/Dental%20Crowns.png', imageHint: 'dental crown tooth model', gallery: [{url: "/images/galleries/dental-crowns-1.png", hint: "broken tooth"}, {url: "/images/galleries/dental-crowns-2.png", hint: "crowned tooth"}, {url: "/images/galleries/dental-crowns-3.png", hint: "crown fitting"}] },
  { id: 'dental-bridges', slug: 'dental-bridges', image: '/images/Dental%20Bridges.png', imageHint: 'dental bridge teeth model', gallery: [{url: "/images/galleries/dental-bridges-1.png", hint: "missing tooth gap"}, {url: "/images/galleries/dental-bridges-2.png", hint: "bridge in place"}, {url: "/images/galleries/dental-bridges-3.png", hint: "bridge structure"}] },
  { id: 'dentures', slug: 'dentures', image: '/images/Dentures.png', imageHint: 'dentures smile model', gallery: [{url: "/images/galleries/dentures-1.png", hint: "before dentures"}, {url: "/images/galleries/dentures-2.png", hint: "smiling with dentures"}, {url: "/images/galleries/dentures-3.png", hint: "denture fitting"}] },
];

const orthodonticsServices: Service[] = [
  { id: 'invisalign', slug: 'invisalign', image: '/images/Invisalign.png', imageHint: 'invisalign aligners smile transparent', gallery: [{url: "/images/galleries/invisalign-1.png", hint: "crooked teeth"}, {url: "/images/galleries/invisalign-2.png", hint: "straight teeth"}, {url: "/images/galleries/invisalign-3.png", hint: "invisalign trays"}] },
  { id: 'fixed-braces', slug: 'fixed-braces', image: '/images/Fixed%20Braces.png', imageHint: 'dental braces smile metal', gallery: [{url: "/images/galleries/fixed-braces-1.png", hint: "before braces"}, {url: "/images/galleries/fixed-braces-2.png", hint: "after braces"}, {url: "/images/galleries/fixed-braces-3.png", hint: "braces close-up"}] },
  { id: 'removable-appliances', slug: 'removable-appliances', image: '/images/Removable%20Appliances.png', imageHint: 'orthodontic appliance retainer', gallery: [{url: "/images/galleries/removable-appliances-1.png", hint: "orthodontic issue"}, {url: "/images/galleries/removable-appliances-2.png", hint: "corrected smile"}, {url: "/images/galleries/removable-appliances-3.png", hint: "retainer example"}] },
];

const restorativeDentistryServices: Service[] = [
  { id: 'teeth-cleaning', slug: 'teeth-cleaning', image: '/images/Teeth%20Cleaning%20(Calculus%20Removal).png', imageHint: 'dental cleaning hygiene tools', gallery: [{url: "/images/galleries/teeth-cleaning-1.png", hint: "plaque buildup"}, {url: "/images/galleries/teeth-cleaning-2.png", hint: "clean teeth"}, {url: "/images/galleries/teeth-cleaning-3.png", hint: "dental scaling"}] },
  { id: 'dental-fillings', slug: 'dental-fillings', image: '/images/Dental%20Fillings.png', imageHint: 'tooth filling dental procedure', gallery: [{url: "/images/galleries/dental-fillings-1.png", hint: "cavity in tooth"}, {url: "/images/galleries/dental-fillings-2.png", hint: "filled tooth"}, {url: "/images/galleries/dental-fillings-3.png", hint: "filling material"}] },
  { id: 'root-canal-treatment', slug: 'root-canal-treatment', image: '/images/Root%20Canal%20Treatment.png', imageHint: 'root canal procedure tooth', gallery: [{url: "/images/galleries/root-canal-treatment-1.png", hint: "infected tooth xray"}, {url: "/images/galleries/root-canal-treatment-2.png", hint: "treated tooth"}, {url: "/images/galleries/root-canal-treatment-3.png", hint: "root canal process"}] },
];

const oralSurgeryServices: Service[] = [
  { id: 'tooth-extraction', slug: 'tooth-extraction', image: '/images/Tooth%20Extraction.png', imageHint: 'tooth extraction dental tools', gallery: [{url: "/images/galleries/tooth-extraction-1.png", hint: "damaged tooth"}, {url: "/images/galleries/tooth-extraction-2.png", hint: "extraction site"}, {url: "/images/galleries/tooth-extraction-3.png", hint: "healing process"}] },
  { id: 'dental-implants', slug: 'dental-implants', image: '/images/Dental%20Implants.png', imageHint: 'dental implant surgery model', gallery: [{url: "/images/galleries/dental-implants-1.png", hint: "missing tooth"}, {url: "/images/galleries/dental-implants-2.png", hint: "implant in jaw"}, {url: "/images/galleries/dental-implants-3.png", hint: "final crown"}] },
  { id: 'apical-resection', slug: 'apical-resection', image: '/images/Apical%20Resection%20(Apicoectomy).png', imageHint: 'dental surgery procedure detail', gallery: [{url: "/images/galleries/apical-resection-1.png", hint: "root infection xray"}, {url: "/images/galleries/apical-resection-2.png", hint: "apicoectomy surgery"}, {url: "/images/galleries/apical-resection-3.png", hint: "healed root"}] },
];

const pediatricDentistryServices: Service[] = [
  { id: 'primary-teeth-care', slug: 'primary-teeth-care', image: '/images/Primary%20Teeth%20Care%20(Milk%20Teeth).png', imageHint: 'child dentist kids care', gallery: [{url: "/images/galleries/primary-teeth-care-1.png", hint: "child at dentist"}, {url: "/images/galleries/primary-teeth-care-2.png", hint: "healthy milk teeth"}, {url: "/images/galleries/primary-teeth-care-3.png", hint: "fun dental visit"}] },
  { id: 'teeth-fluoridation', slug: 'teeth-fluoridation', image: '/images/Teeth%20Fluoridation.png', imageHint: 'fluoride treatment child dental', gallery: [{url: "/images/galleries/teeth-fluoridation-1.png", hint: "fluoride varnish"}, {url: "/images/galleries/teeth-fluoridation-2.png", hint: "strong teeth"}, {url: "/images/galleries/teeth-fluoridation-3.png", hint: "preventing cavities"}] },
  { id: 'dental-sealants', slug: 'dental-sealants', image: '/images/Dental%20Sealants.png', imageHint: 'dental sealants kids teeth', gallery: [{url: "/images/galleries/dental-sealants-1.png", hint: "molar fissures"}, {url: "/images/galleries/dental-sealants-2.png", hint: "sealed tooth"}, {url: "/images/galleries/dental-sealants-3.png", hint: "sealant application"}] },
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
    id: 'body-surgical',
    slug: 'body-surgical',
    services: bodySurgicalServices,
    image: '/images/slim-young-woman-measuring-her-thin-waist-with-tape-measure-fitness-diet-concept.jpg',
    imageHint: 'body contouring technology',
    displayOnHome: true,
    icon: 'PersonStanding'
  },
  {
    id: 'body-non-surgical',
    slug: 'body-non-surgical',
    services: bodyNonSurgicalServices,
    image: '/images/sm.jpg',
    imageHint: 'non-surgical body treatment device',
    displayOnHome: true,
    icon: 'Sparkles'
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
  return category?.services.find(service => service.slug === serviceSlug);
};

export const getServiceWithContent = async (
  locale: string,
  categorySlug: string,
  serviceSlug: string
): Promise<ServiceWithContent | undefined> => {
  const service = getServiceBySlugs(categorySlug, serviceSlug);
  if (!service) {
    return undefined;
  }

  try {
    const markdown = await import(`../../messages/services/${locale}/${service.id}.md`);
    return {
      ...service,
      description: markdown.default as string,
    };
  } catch (error) {
    console.error(`Could not load service description for ${service.id} in locale ${locale}`, error);
    // Fallback to English if the locale-specific file is not found
    try {
      const markdown = await import(`../../messages/services/en/${service.id}.md`);
      return {
        ...service,
        description: markdown.default as string,
      };
    } catch (fallbackError) {
       console.error(`Could not load fallback English description for ${service.id}`, fallbackError);
       return {
        ...service,
        description: "Description not available.",
      };
    }
  }
};
