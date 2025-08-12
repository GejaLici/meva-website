
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

const importServiceHtml = (locale: string, serviceId: string) => {
    switch (`${locale}/${serviceId}`) {
        case 'de/apical-resection': return import('@/messages/services/de/apical-resection.html');
        case 'de/blefaroplastika': return import('@/messages/services/de/blefaroplastika.html');
        case 'de/carboxytherapy': return import('@/messages/services/de/carboxytherapy.html');
        case 'de/cellulite-treatment': return import('@/messages/services/de/cellulite-treatment.html');
        case 'de/cheekbone-reshaping': return import('@/messages/services/de/cheekbone-reshaping.html');
        case 'de/chin-reshaping': return import('@/messages/services/de/chin-reshaping.html');
        case 'de/composite-veneers': return import('@/messages/services/de/composite-veneers.html');
        case 'de/dark-circles-treatment': return import('@/messages/services/de/dark-circles-treatment.html');
        case 'de/dental-bridges': return import('@/messages/services/de/dental-bridges.html');
        case 'de/dental-crowns': return import('@/messages/services/de/dental-crowns.html');
        case 'de/dental-fillings': return import('@/messages/services/de/dental-fillings.html');
        case 'de/dental-implants': return import('@/messages/services/de/dental-implants.html');
        case 'de/dental-sealants': return import('@/messages/services/de/dental-sealants.html');
        case 'de/dentures': return import('@/messages/services/de/dentures.html');
        case 'de/emax-veneers': return import('@/messages/services/de/emax-veneers.html');
        case 'de/eyelids-plasma-arc': return import('@/messages/services/de/eyelids-plasma-arc.html');
        case 'de/fixed-braces': return import('@/messages/services/de/fixed-braces.html');
        case 'de/gynecomastia': return import('@/messages/services/de/gynecomastia.html');
        case 'de/invisalign': return import('@/messages/services/de/invisalign.html');
        case 'de/jawline-contouring': return import('@/messages/services/de/jawline-contouring.html');
        case 'de/labioplastika': return import('@/messages/services/de/labioplastika.html');
        case 'de/laser-hair-removal': return import('@/messages/services/de/laser-hair-removal.html');
        case 'de/lift-gjoksit': return import('@/messages/services/de/lift-gjoksit.html');
        case 'de/lift-kraheve': return import('@/messages/services/de/lift-kraheve.html');
        case 'de/lift-kofsheve': return import('@/messages/services/de/lift-kofsheve.html');
        case 'de/lip-reshaping': return import('@/messages/services/de/lip-reshaping.html');
        case 'de/lipolysis': return import('@/messages/services/de/lipolysis.html');
        case 'de/liposculptura': return import('@/messages/services/de/liposculptura.html');
        case 'de/lift-fytyres': return import('@/messages/services/de/lift-fytyres.html');
        case 'de/lift-vetullave': return import('@/messages/services/de/lift-vetullave.html');
        case 'de/mbj-flokeve': return import('@/messages/services/de/mbj-flokeve.html');
        case 'de/mbj-mjekres': return import('@/messages/services/de/mbj-mjekres.html');
        case 'de/mbj-vetullave': return import('@/messages/services/de/mbj-vetullave.html');
        case 'de/microdermabrasion': return import('@/messages/services/de/microdermabrasion.html');
        case 'de/microneedling': return import('@/messages/services/de/microneedling.html');
        case 'de/multivitamin-treatment': return import('@/messages/services/de/multivitamin-treatment.html');
        case 'de/op-hunde': return import('@/messages/services/de/op-hunde.html');
        case 'de/plasma-arc-body': return import('@/messages/services/de/plasma-arc-body.html');
        case 'de/primary-teeth-care': return import('@/messages/services/de/primary-teeth-care.html');
        case 'de/prp-face': return import('@/messages/services/de/prp-face.html');
        case 'de/prp-hair': return import('@/messages/services/de/prp-hair.html');
        case 'de/radiofrequency-face': return import('@/messages/services/de/radiofrequency-face.html');
        case 'de/removable-appliances': return import('@/messages/services/de/removable-appliances.html');
        case 'de/rikonst-gjoksit': return import('@/messages/services/de/rikonst-gjoksit.html');
        case 'de/rim-barkut': return import('@/messages/services/de/rim-barkut.html');
        case 'de/rim-hunde': return import('@/messages/services/de/rim-hunde.html');
        case 'de/rim-mjekres': return import('@/messages/services/de/rim-mjekres.html');
        case 'de/rim-vesheve': return import('@/messages/services/de/rim-vesheve.html');
        case 'de/rim-vitheve-bbl': return import('@/messages/services/de/rim-vitheve-bbl.html');
        case 'de/root-canal-treatment': return import('@/messages/services/de/root-canal-treatment.html');
        case 'de/sclerotherapy': return import('@/messages/services/de/sclerotherapy.html');
        case 'de/sulcus-filling': return import('@/messages/services/de/sulcus-filling.html');
        case 'de/teeth-cleaning': return import('@/messages/services/de/teeth-cleaning.html');
        case 'de/teeth-fluoridation': return import('@/messages/services/de/teeth-fluoridation.html');
        case 'de/teeth-whitening': return import('@/messages/services/de/teeth-whitening.html');
        case 'de/tooth-extraction': return import('@/messages/services/de/tooth-extraction.html');
        case 'de/white-peeling': return import('@/messages/services/de/white-peeling.html');
        case 'de/wrinkle-fillers': return import('@/messages/services/de/wrinkle-fillers.html');
        case 'de/xanthelasma-plasma-arc': return import('@/messages/services/de/xanthelasma-plasma-arc.html');
        case 'de/zmadh-gjoksit': return import('@/messages/services/de/zmadh-gjoksit.html');
        case 'de/zvog-gjoksit': return import('@/messages/services/de/zvog-gjoksit.html');
        case 'en/apical-resection': return import('@/messages/services/en/apical-resection.html');
        case 'en/blefaroplastika': return import('@/messages/services/en/blefaroplastika.html');
        case 'en/carboxytherapy': return import('@/messages/services/en/carboxytherapy.html');
        case 'en/cellulite-treatment': return import('@/messages/services/en/cellulite-treatment.html');
        case 'en/cheekbone-reshaping': return import('@/messages/services/en/cheekbone-reshaping.html');
        case 'en/chin-reshaping': return import('@/messages/services/en/chin-reshaping.html');
        case 'en/composite-veneers': return import('@/messages/services/en/composite-veneers.html');
        case 'en/dark-circles-treatment': return import('@/messages/services/en/dark-circles-treatment.html');
        case 'en/dental-bridges': return import('@/messages/services/en/dental-bridges.html');
        case 'en/dental-crowns': return import('@/messages/services/en/dental-crowns.html');
        case 'en/dental-fillings': return import('@/messages/services/en/dental-fillings.html');
        case 'en/dental-implants': return import('@/messages/services/en/dental-implants.html');
        case 'en/dental-sealants': return import('@/messages/services/en/dental-sealants.html');
        case 'en/dentures': return import('@/messages/services/en/dentures.html');
        case 'en/emax-veneers': return import('@/messages/services/en/emax-veneers.html');
        case 'en/eyelids-plasma-arc': return import('@/messages/services/en/eyelids-plasma-arc.html');
        case 'en/fixed-braces': return import('@/messages/services/en/fixed-braces.html');
        case 'en/gynecomastia': return import('@/messages/services/en/gynecomastia.html');
        case 'en/invisalign': return import('@/messages/services/en/invisalign.html');
        case 'en/jawline-contouring': return import('@/messages/services/en/jawline-contouring.html');
        case 'en/labioplastika': return import('@/messages/services/en/labioplastika.html');
        case 'en/laser-hair-removal': return import('@/messages/services/en/laser-hair-removal.html');
        case 'en/lift-gjoksit': return import('@/messages/services/en/lift-gjoksit.html');
        case 'en/lift-kraheve': return import('@/messages/services/en/lift-kraheve.html');
        case 'en/lift-kofsheve': return import('@/messages/services/en/lift-kofsheve.html');
        case 'en/lip-reshaping': return import('@/messages/services/en/lip-reshaping.html');
        case 'en/lipolysis': return import('@/messages/services/en/lipolysis.html');
        case 'en/liposculptura': return import('@/messages/services/en/liposculptura.html');
        case 'en/lift-fytyres': return import('@/messages/services/en/lift-fytyres.html');
        case 'en/lift-vetullave': return import('@/messages/services/en/lift-vetullave.html');
        case 'en/mbj-flokeve': return import('@/messages/services/en/mbj-flokeve.html');
        case 'en/mbj-mjekres': return import('@/messages/services/en/mbj-mjekres.html');
        case 'en/mbj-vetullave': return import('@/messages/services/en/mbj-vetullave.html');
        case 'en/microdermabrasion': return import('@/messages/services/en/microdermabrasion.html');
        case 'en/microneedling': return import('@/messages/services/en/microneedling.html');
        case 'en/multivitamin-treatment': return import('@/messages/services/en/multivitamin-treatment.html');
        case 'en/op-hunde': return import('@/messages/services/en/op-hunde.html');
        case 'en/plasma-arc-body': return import('@/messages/services/en/plasma-arc-body.html');
        case 'en/primary-teeth-care': return import('@/messages/services/en/primary-teeth-care.html');
        case 'en/prp-face': return import('@/messages/services/en/prp-face.html');
        case 'en/prp-hair': return import('@/messages/services/en/prp-hair.html');
        case 'en/radiofrequency-face': return import('@/messages/services/en/radiofrequency-face.html');
        case 'en/removable-appliances': return import('@/messages/services/en/removable-appliances.html');
        case 'en/rikonst-gjoksit': return import('@/messages/services/en/rikonst-gjoksit.html');
        case 'en/rim-barkut': return import('@/messages/services/en/rim-barkut.html');
        case 'en/rim-hunde': return import('@/messages/services/en/rim-hunde.html');
        case 'en/rim-mjekres': return import('@/messages/services/en/rim-mjekres.html');
        case 'en/rim-vesheve': return import('@/messages/services/en/rim-vesheve.html');
        case 'en/rim-vitheve-bbl': return import('@/messages/services/en/rim-vitheve-bbl.html');
        case 'en/root-canal-treatment': return import('@/messages/services/en/root-canal-treatment.html');
        case 'en/sclerotherapy': return import('@/messages/services/en/sclerotherapy.html');
        case 'en/sulcus-filling': return import('@/messages/services/en/sulcus-filling.html');
        case 'en/teeth-cleaning': return import('@/messages/services/en/teeth-cleaning.html');
        case 'en/teeth-fluoridation': return import('@/messages/services/en/teeth-fluoridation.html');
        case 'en/teeth-whitening': return import('@/messages/services/en/teeth-whitening.html');
        case 'en/tooth-extraction': return import('@/messages/services/en/tooth-extraction.html');
        case 'en/white-peeling': return import('@/messages/services/en/white-peeling.html');
        case 'en/wrinkle-fillers': return import('@/messages/services/en/wrinkle-fillers.html');
        case 'en/xanthelasma-plasma-arc': return import('@/messages/services/en/xanthelasma-plasma-arc.html');
        case 'en/zmadh-gjoksit': return import('@/messages/services/en/zmadh-gjoksit.html');
        case 'en/zvog-gjoksit': return import('@/messages/services/en/zvog-gjoksit.html');
        case 'es/apical-resection': return import('@/messages/services/es/apical-resection.html');
        case 'es/blefaroplastika': return import('@/messages/services/es/blefaroplastika.html');
        case 'es/carboxytherapy': return import('@/messages/services/es/carboxytherapy.html');
        case 'es/cellulite-treatment': return import('@/messages/services/es/cellulite-treatment.html');
        case 'es/cheekbone-reshaping': return import('@/messages/services/es/cheekbone-reshaping.html');
        case 'es/chin-reshaping': return import('@/messages/services/es/chin-reshaping.html');
        case 'es/composite-veneers': return import('@/messages/services/es/composite-veneers.html');
        case 'es/dark-circles-treatment': return import('@/messages/services/es/dark-circles-treatment.html');
        case 'es/dental-bridges': return import('@/messages/services/es/dental-bridges.html');
        case 'es/dental-crowns': return import('@/messages/services/es/dental-crowns.html');
        case 'es/dental-fillings': return import('@/messages/services/es/dental-fillings.html');
        case 'es/dental-implants': return import('@/messages/services/es/dental-implants.html');
        case 'es/dental-sealants': return import('@/messages/services/es/dental-sealants.html');
        case 'es/dentures': return import('@/messages/services/es/dentures.html');
        case 'es/emax-veneers': return import('@/messages/services/es/emax-veneers.html');
        case 'es/eyelids-plasma-arc': return import('@/messages/services/es/eyelids-plasma-arc.html');
        case 'es/fixed-braces': return import('@/messages/services/es/fixed-braces.html');
        case 'es/gynecomastia': return import('@/messages/services/es/gynecomastia.html');
        case 'es/invisalign': return import('@/messages/services/es/invisalign.html');
        case 'es/jawline-contouring': return import('@/messages/services/es/jawline-contouring.html');
        case 'es/labioplastika': return import('@/messages/services/es/labioplastika.html');
        case 'es/laser-hair-removal': return import('@/messages/services/es/laser-hair-removal.html');
        case 'es/lift-gjoksit': return import('@/messages/services/es/lift-gjoksit.html');
        case 'es/lift-kraheve': return import('@/messages/services/es/lift-kraheve.html');
        case 'es/lift-kofsheve': return import('@/messages/services/es/lift-kofsheve.html');
        case 'es/lip-reshaping': return import('@/messages/services/es/lip-reshaping.html');
        case 'es/lipolysis': return import('@/messages/services/es/lipolysis.html');
        case 'es/liposculptura': return import('@/messages/services/es/liposculptura.html');
        case 'es/lift-fytyres': return import('@/messages/services/es/lift-fytyres.html');
        case 'es/lift-vetullave': return import('@/messages/services/es/lift-vetullave.html');
        case 'es/mbj-flokeve': return import('@/messages/services/es/mbj-flokeve.html');
        case 'es/mbj-mjekres': return import('@/messages/services/es/mbj-mjekres.html');
        case 'es/mbj-vetullave': return import('@/messages/services/es/mbj-vetullave.html');
        case 'es/microdermabrasion': return import('@/messages/services/es/microdermabrasion.html');
        case 'es/microneedling': return import('@/messages/services/es/microneedling.html');
        case 'es/multivitamin-treatment': return import('@/messages/services/es/multivitamin-treatment.html');
        case 'es/op-hunde': return import('@/messages/services/es/op-hunde.html');
        case 'es/plasma-arc-body': return import('@/messages/services/es/plasma-arc-body.html');
        case 'es/primary-teeth-care': return import('@/messages/services/es/primary-teeth-care.html');
        case 'es/prp-face': return import('@/messages/services/es/prp-face.html');
        case 'es/prp-hair': return import('@/messages/services/es/prp-hair.html');
        case 'es/radiofrequency-face': return import('@/messages/services/es/radiofrequency-face.html');
        case 'es/removable-appliances': return import('@/messages/services/es/removable-appliances.html');
        case 'es/rikonst-gjoksit': return import('@/messages/services/es/rikonst-gjoksit.html');
        case 'es/rim-barkut': return import('@/messages/services/es/rim-barkut.html');
        case 'es/rim-hunde': return import('@/messages/services/es/rim-hunde.html');
        case 'es/rim-mjekres': return import('@/messages/services/es/rim-mjekres.html');
        case 'es/rim-vesheve': return import('@/messages/services/es/rim-vesheve.html');
        case 'es/rim-vitheve-bbl': return import('@/messages/services/es/rim-vitheve-bbl.html');
        case 'es/root-canal-treatment': return import('@/messages/services/es/root-canal-treatment.html');
        case 'es/sclerotherapy': return import('@/messages/services/es/sclerotherapy.html');
        case 'es/sulcus-filling': return import('@/messages/services/es/sulcus-filling.html');
        case 'es/teeth-cleaning': return import('@/messages/services/es/teeth-cleaning.html');
        case 'es/teeth-fluoridation': return import('@/messages/services/es/teeth-fluoridation.html');
        case 'es/teeth-whitening': return import('@/messages/services/es/teeth-whitening.html');
        case 'es/tooth-extraction': return import('@/messages/services/es/tooth-extraction.html');
        case 'es/white-peeling': return import('@/messages/services/es/white-peeling.html');
        case 'es/wrinkle-fillers': return import('@/messages/services/es/wrinkle-fillers.html');
        case 'es/xanthelasma-plasma-arc': return import('@/messages/services/es/xanthelasma-plasma-arc.html');
        case 'es/zmadh-gjoksit': return import('@/messages/services/es/zmadh-gjoksit.html');
        case 'es/zvog-gjoksit': return import('@/messages/services/es/zvog-gjoksit.html');
        case 'fr/apical-resection': return import('@/messages/services/fr/apical-resection.html');
        case 'fr/blefaroplastika': return import('@/messages/services/fr/blefaroplastika.html');
        case 'fr/carboxytherapy': return import('@/messages/services/fr/carboxytherapy.html');
        case 'fr/cellulite-treatment': return import('@/messages/services/fr/cellulite-treatment.html');
        case 'fr/cheekbone-reshaping': return import('@/messages/services/fr/cheekbone-reshaping.html');
        case 'fr/chin-reshaping': return import('@/messages/services/fr/chin-reshaping.html');
        case 'fr/composite-veneers': return import('@/messages/services/fr/composite-veneers.html');
        case 'fr/dark-circles-treatment': return import('@/messages/services/fr/dark-circles-treatment.html');
        case 'fr/dental-bridges': return import('@/messages/services/fr/dental-bridges.html');
        case 'fr/dental-crowns': return import('@/messages/services/fr/dental-crowns.html');
        case 'fr/dental-fillings': return import('@/messages/services/fr/dental-fillings.html');
        case 'fr/dental-implants': return import('@/messages/services/fr/dental-implants.html');
        case 'fr/dental-sealants': return import('@/messages/services/fr/dental-sealants.html');
        case 'fr/dentures': return import('@/messages/services/fr/dentures.html');
        case 'fr/emax-veneers': return import('@/messages/services/fr/emax-veneers.html');
        case 'fr/eyelids-plasma-arc': return import('@/messages/services/fr/eyelids-plasma-arc.html');
        case 'fr/fixed-braces': return import('@/messages/services/fr/fixed-braces.html');
        case 'fr/gynecomastia': return import('@/messages/services/fr/gynecomastia.html');
        case 'fr/invisalign': return import('@/messages/services/fr/invisalign.html');
        case 'fr/jawline-contouring': return import('@/messages/services/fr/jawline-contouring.html');
        case 'fr/labioplastika': return import('@/messages/services/fr/labioplastika.html');
        case 'fr/laser-hair-removal': return import('@/messages/services/fr/laser-hair-removal.html');
        case 'fr/lift-gjoksit': return import('@/messages/services/fr/lift-gjoksit.html');
        case 'fr/lift-kraheve': return import('@/messages/services/fr/lift-kraheve.html');
        case 'fr/lift-kofsheve': return import('@/messages/services/fr/lift-kofsheve.html');
        case 'fr/lip-reshaping': return import('@/messages/services/fr/lip-reshaping.html');
        case 'fr/lipolysis': return import('@/messages/services/fr/lipolysis.html');
        case 'fr/liposculptura': return import('@/messages/services/fr/liposculptura.html');
        case 'fr/lift-fytyres': return import('@/messages/services/fr/lift-fytyres.html');
        case 'fr/lift-vetullave': return import('@/messages/services/fr/lift-vetullave.html');
        case 'fr/mbj-flokeve': return import('@/messages/services/fr/mbj-flokeve.html');
        case 'fr/mbj-mjekres': return import('@/messages/services/fr/mbj-mjekres.html');
        case 'fr/mbj-vetullave': return import('@/messages/services/fr/mbj-vetullave.html');
        case 'fr/microdermabrasion': return import('@/messages/services/fr/microdermabrasion.html');
        case 'fr/microneedling': return import('@/messages/services/fr/microneedling.html');
        case 'fr/multivitamin-treatment': return import('@/messages/services/fr/multivitamin-treatment.html');
        case 'fr/op-hunde': return import('@/messages/services/fr/op-hunde.html');
        case 'fr/plasma-arc-body': return import('@/messages/services/fr/plasma-arc-body.html');
        case 'fr/primary-teeth-care': return import('@/messages/services/fr/primary-teeth-care.html');
        case 'fr/prp-face': return import('@/messages/services/fr/prp-face.html');
        case 'fr/prp-hair': return import('@/messages/services/fr/prp-hair.html');
        case 'fr/radiofrequency-face': return import('@/messages/services/fr/radiofrequency-face.html');
        case 'fr/removable-appliances': return import('@/messages/services/fr/removable-appliances.html');
        case 'fr/rikonst-gjoksit': return import('@/messages/services/fr/rikonst-gjoksit.html');
        case 'fr/rim-barkut': return import('@/messages/services/fr/rim-barkut.html');
        case 'fr/rim-hunde': return import('@/messages/services/fr/rim-hunde.html');
        case 'fr/rim-mjekres': return import('@/messages/services/fr/rim-mjekres.html');
        case 'fr/rim-vesheve': return import('@/messages/services/fr/rim-vesheve.html');
        case 'fr/rim-vitheve-bbl': return import('@/messages/services/fr/rim-vitheve-bbl.html');
        case 'fr/root-canal-treatment': return import('@/messages/services/fr/root-canal-treatment.html');
        case 'fr/sclerotherapy': return import('@/messages/services/fr/sclerotherapy.html');
        case 'fr/sulcus-filling': return import('@/messages/services/fr/sulcus-filling.html');
        case 'fr/teeth-cleaning': return import('@/messages/services/fr/teeth-cleaning.html');
        case 'fr/teeth-fluoridation': return import('@/messages/services/fr/teeth-fluoridation.html');
        case 'fr/teeth-whitening': return import('@/messages/services/fr/teeth-whitening.html');
        case 'fr/tooth-extraction': return import('@/messages/services/fr/tooth-extraction.html');
        case 'fr/white-peeling': return import('@/messages/services/fr/white-peeling.html');
        case 'fr/wrinkle-fillers': return import('@/messages/services/fr/wrinkle-fillers.html');
        case 'fr/xanthelasma-plasma-arc': return import('@/messages/services/fr/xanthelasma-plasma-arc.html');
        case 'fr/zmadh-gjoksit': return import('@/messages/services/fr/zmadh-gjoksit.html');
        case 'fr/zvog-gjoksit': return import('@/messages/services/fr/zvog-gjoksit.html');
        case 'it/apical-resection': return import('@/messages/services/it/apical-resection.html');
        case 'it/blefaroplastika': return import('@/messages/services/it/blefaroplastika.html');
        case 'it/carboxytherapy': return import('@/messages/services/it/carboxytherapy.html');
        case 'it/cellulite-treatment': return import('@/messages/services/it/cellulite-treatment.html');
        case 'it/cheekbone-reshaping': return import('@/messages/services/it/cheekbone-reshaping.html');
        case 'it/chin-reshaping': return import('@/messages/services/it/chin-reshaping.html');
        case 'it/composite-veneers': return import('@/messages/services/it/composite-veneers.html');
        case 'it/dark-circles-treatment': return import('@/messages/services/it/dark-circles-treatment.html');
        case 'it/dental-bridges': return import('@/messages/services/it/dental-bridges.html');
        case 'it/dental-crowns': return import('@/messages/services/it/dental-crowns.html');
        case 'it/dental-fillings': return import('@/messages/services/it/dental-fillings.html');
        case 'it/dental-implants': return import('@/messages/services/it/dental-implants.html');
        case 'it/dental-sealants': return import('@/messages/services/it/dental-sealants.html');
        case 'it/dentures': return import('@/messages/services/it/dentures.html');
        case 'it/emax-veneers': return import('@/messages/services/it/emax-veneers.html');
        case 'it/eyelids-plasma-arc': return import('@/messages/services/it/eyelids-plasma-arc.html');
        case 'it/fixed-braces': return import('@/messages/services/it/fixed-braces.html');
        case 'it/gynecomastia': return import('@/messages/services/it/gynecomastia.html');
        case 'it/invisalign': return import('@/messages/services/it/invisalign.html');
        case 'it/jawline-contouring': return import('@/messages/services/it/jawline-contouring.html');
        case 'it/labioplastika': return import('@/messages/services/it/labioplastika.html');
        case 'it/laser-hair-removal': return import('@/messages/services/it/laser-hair-removal.html');
        case 'it/lift-gjoksit': return import('@/messages/services/it/lift-gjoksit.html');
        case 'it/lift-kraheve': return import('@/messages/services/it/lift-kraheve.html');
        case 'it/lift-kofsheve': return import('@/messages/services/it/lift-kofsheve.html');
        case 'it/lip-reshaping': return import('@/messages/services/it/lip-reshaping.html');
        case 'it/lipolysis': return import('@/messages/services/it/lipolysis.html');
        case 'it/liposculptura': return import('@/messages/services/it/liposculptura.html');
        case 'it/lift-fytyres': return import('@/messages/services/it/lift-fytyres.html');
        case 'it/lift-vetullave': return import('@/messages/services/it/lift-vetullave.html');
        case 'it/mbj-flokeve': return import('@/messages/services/it/mbj-flokeve.html');
        case 'it/mbj-mjekres': return import('@/messages/services/it/mbj-mjekres.html');
        case 'it/mbj-vetullave': return import('@/messages/services/it/mbj-vetullave.html');
        case 'it/microdermabrasion': return import('@/messages/services/it/microdermabrasion.html');
        case 'it/microneedling': return import('@/messages/services/it/microneedling.html');
        case 'it/multivitamin-treatment': return import('@/messages/services/it/multivitamin-treatment.html');
        case 'it/op-hunde': return import('@/messages/services/it/op-hunde.html');
        case 'it/plasma-arc-body': return import('@/messages/services/it/plasma-arc-body.html');
        case 'it/primary-teeth-care': return import('@/messages/services/it/primary-teeth-care.html');
        case 'it/prp-face': return import('@/messages/services/it/prp-face.html');
        case 'it/prp-hair': return import('@/messages/services/it/prp-hair.html');
        case 'it/radiofrequency-face': return import('@/messages/services/it/radiofrequency-face.html');
        case 'it/removable-appliances': return import('@/messages/services/it/removable-appliances.html');
        case 'it/rikonst-gjoksit': return import('@/messages/services/it/rikonst-gjoksit.html');
        case 'it/rim-barkut': return import('@/messages/services/it/rim-barkut.html');
        case 'it/rim-hunde': return import('@/messages/services/it/rim-hunde.html');
        case 'it/rim-mjekres': return import('@/messages/services/it/rim-mjekres.html');
        case 'it/rim-vesheve': return import('@/messages/services/it/rim-vesheve.html');
        case 'it/rim-vitheve-bbl': return import('@/messages/services/it/rim-vitheve-bbl.html');
        case 'it/root-canal-treatment': return import('@/messages/services/it/root-canal-treatment.html');
        case 'it/sclerotherapy': return import('@/messages/services/it/sclerotherapy.html');
        case 'it/sulcus-filling': return import('@/messages/services/it/sulcus-filling.html');
        case 'it/teeth-cleaning': return import('@/messages/services/it/teeth-cleaning.html');
        case 'it/teeth-fluoridation': return import('@/messages/services/it/teeth-fluoridation.html');
        case 'it/teeth-whitening': return import('@/messages/services/it/teeth-whitening.html');
        case 'it/tooth-extraction': return import('@/messages/services/it/tooth-extraction.html');
        case 'it/white-peeling': return import('@/messages/services/it/white-peeling.html');
        case 'it/wrinkle-fillers': return import('@/messages/services/it/wrinkle-fillers.html');
        case 'it/xanthelasma-plasma-arc': return import('@/messages/services/it/xanthelasma-plasma-arc.html');
        case 'it/zmadh-gjoksit': return import('@/messages/services/it/zmadh-gjoksit.html');
        case 'it/zvog-gjoksit': return import('@/messages/services/it/zvog-gjoksit.html');
        case 'sq/apical-resection': return import('@/messages/services/sq/apical-resection.html');
        case 'sq/blefaroplastika': return import('@/messages/services/sq/blefaroplastika.html');
        case 'sq/carboxytherapy': return import('@/messages/services/sq/carboxytherapy.html');
        case 'sq/cellulite-treatment': return import('@/messages/services/sq/cellulite-treatment.html');
        case 'sq/cheekbone-reshaping': return import('@/messages/services/sq/cheekbone-reshaping.html');
        case 'sq/chin-reshaping': return import('@/messages/services/sq/chin-reshaping.html');
        case 'sq/composite-veneers': return import('@/messages/services/sq/composite-veneers.html');
        case 'sq/dark-circles-treatment': return import('@/messages/services/sq/dark-circles-treatment.html');
        case 'sq/dental-bridges': return import('@/messages/services/sq/dental-bridges.html');
        case 'sq/dental-crowns': return import('@/messages/services/sq/dental-crowns.html');
        case 'sq/dental-fillings': return import('@/messages/services/sq/dental-fillings.html');
        case 'sq/dental-implants': return import('@/messages/services/sq/dental-implants.html');
        case 'sq/dental-sealants': return import('@/messages/services/sq/dental-sealants.html');
        case 'sq/dentures': return import('@/messages/services/sq/dentures.html');
        case 'sq/emax-veneers': return import('@/messages/services/sq/emax-veneers.html');
        case 'sq/eyelids-plasma-arc': return import('@/messages/services/sq/eyelids-plasma-arc.html');
        case 'sq/fixed-braces': return import('@/messages/services/sq/fixed-braces.html');
        case 'sq/gynecomastia': return import('@/messages/services/sq/gynecomastia.html');
        case 'sq/invisalign': return import('@/messages/services/sq/invisalign.html');
        case 'sq/jawline-contouring': return import('@/messages/services/sq/jawline-contouring.html');
        case 'sq/labioplastika': return import('@/messages/services/sq/labioplastika.html');
        case 'sq/laser-hair-removal': return import('@/messages/services/sq/laser-hair-removal.html');
        case 'sq/lift-gjoksit': return import('@/messages/services/sq/lift-gjoksit.html');
        case 'sq/lift-kraheve': return import('@/messages/services/sq/lift-kraheve.html');
        case 'sq/lift-kofsheve': return import('@/messages/services/sq/lift-kofsheve.html');
        case 'sq/lip-reshaping': return import('@/messages/services/sq/lip-reshaping.html');
        case 'sq/lipolysis': return import('@/messages/services/sq/lipolysis.html');
        case 'sq/liposculptura': return import('@/messages/services/sq/liposculptura.html');
        case 'sq/lift-fytyres': return import('@/messages/services/sq/lift-fytyres.html');
        case 'sq/lift-vetullave': return import('@/messages/services/sq/lift-vetullave.html');
        case 'sq/mbj-flokeve': return import('@/messages/services/sq/mbj-flokeve.html');
        case 'sq/mbj-mjekres': return import('@/messages/services/sq/mbj-mjekres.html');
        case 'sq/mbj-vetullave': return import('@/messages/services/sq/mbj-vetullave.html');
        case 'sq/microdermabrasion': return import('@/messages/services/sq/microdermabrasion.html');
        case 'sq/microneedling': return import('@/messages/services/sq/microneedling.html');
        case 'sq/multivitamin-treatment': return import('@/messages/services/sq/multivitamin-treatment.html');
        case 'sq/op-hunde': return import('@/messages/services/sq/op-hunde.html');
        case 'sq/plasma-arc-body': return import('@/messages/services/sq/plasma-arc-body.html');
        case 'sq/primary-teeth-care': return import('@/messages/services/sq/primary-teeth-care.html');
        case 'sq/prp-face': return import('@/messages/services/sq/prp-face.html');
        case 'sq/prp-hair': return import('@/messages/services/sq/prp-hair.html');
        case 'sq/radiofrequency-face': return import('@/messages/services/sq/radiofrequency-face.html');
        case 'sq/removable-appliances': return import('@/messages/services/sq/removable-appliances.html');
        case 'sq/rikonst-gjoksit': return import('@/messages/services/sq/rikonst-gjoksit.html');
        case 'sq/rim-barkut': return import('@/messages/services/sq/rim-barkut.html');
        case 'sq/rim-hunde': return import('@/messages/services/sq/rim-hunde.html');
        case 'sq/rim-mjekres': return import('@/messages/services/sq/rim-mjekres.html');
        case 'sq/rim-vesheve': return import('@/messages/services/sq/rim-vesheve.html');
        case 'sq/rim-vitheve-bbl': return import('@/messages/services/sq/rim-vitheve-bbl.html');
        case 'sq/root-canal-treatment': return import('@/messages/services/sq/root-canal-treatment.html');
        case 'sq/sclerotherapy': return import('@/messages/services/sq/sclerotherapy.html');
        case 'sq/sulcus-filling': return import('@/messages/services/sq/sulcus-filling.html');
        case 'sq/teeth-cleaning': return import('@/messages/services/sq/teeth-cleaning.html');
        case 'sq/teeth-fluoridation': return import('@/messages/services/sq/teeth-fluoridation.html');
        case 'sq/teeth-whitening': return import('@/messages/services/sq/teeth-whitening.html');
        case 'sq/tooth-extraction': return import('@/messages/services/sq/tooth-extraction.html');
        case 'sq/white-peeling': return import('@/messages/services/sq/white-peeling.html');
        case 'sq/wrinkle-fillers': return import('@/messages/services/sq/wrinkle-fillers.html');
        case 'sq/xanthelasma-plasma-arc': return import('@/messages/services/sq/xanthelasma-plasma-arc.html');
        case 'sq/zmadh-gjoksit': return import('@/messages/services/sq/zmadh-gjoksit.html');
        case 'sq/zvog-gjoksit': return import('@/messages/services/sq/zvog-gjoksit.html');
        default: return Promise.resolve({ default: 'Description not available.' });
    }
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
    const htmlModule = await importServiceHtml(locale, service.id);
    return {
      ...service,
      description: htmlModule.default as string,
    };
  } catch (error) {
    console.warn(`Could not load service description for ${service.id} in locale ${locale}. Falling back to English.`, error);
    try {
      const htmlModule = await importServiceHtml('en', service.id);
      return {
        ...service,
        description: htmlModule.default as string,
      };
    } catch (fallbackError) {
       console.error(`Could not load fallback English description for ${service.id}`, fallbackError);
       return {
        ...service,
        description: "<p>Description not available.</p>",
      };
    }
  }
};
