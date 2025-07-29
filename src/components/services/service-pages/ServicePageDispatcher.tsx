
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import type { ServiceWithContent } from '@/types/services';

const componentMap: { [key: string]: React.ComponentType<{ service: ServiceWithContent }> } = {
  'op-hunde': dynamic(() => import('./RhinoplastyPage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-hunde': dynamic(() => import('./NoseTipReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-vesheve': dynamic(() => import('./OtoplastyPage'), { loading: () => <ServicePageSkeleton /> }),
  'mbj-flokeve': dynamic(() => import('./HairTransplantPage'), { loading: () => <ServicePageSkeleton /> }),
  'mbj-mjekres': dynamic(() => import('./BeardTransplantPage'), { loading: () => <ServicePageSkeleton /> }),
  'mbj-vetullave': dynamic(() => import('./EyebrowTransplantPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-vetullave': dynamic(() => import('./EyebrowLiftPage'), { loading: () => <ServicePageSkeleton /> }),
  'blefaroplastika': dynamic(() => import('./BlepharoplastyPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-fytyres': dynamic(() => import('./FaceLiftPage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-mjekres': dynamic(() => import('./GenioplastyPage'), { loading: () => <ServicePageSkeleton /> }),
  'lip-reshaping': dynamic(() => import('./LipReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'xanthelasma-plasma-arc': dynamic(() => import('./XanthelasmaPlasmaArcPage'), { loading: () => <ServicePageSkeleton /> }),
  'multivitamin-treatment': dynamic(() => import('./MultivitaminTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'eyelids-plasma-arc': dynamic(() => import('./EyelidsPlasmaArcPage'), { loading: () => <ServicePageSkeleton /> }),
  'cheekbone-reshaping': dynamic(() => import('./CheekboneReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'microdermabrasion': dynamic(() => import('./MicrodermabrasionPage'), { loading: () => <ServicePageSkeleton /> }),
  'jawline-contouring': dynamic(() => import('./JawlineContouringPage'), { loading: () => <ServicePageSkeleton /> }),
  'wrinkle-fillers': dynamic(() => import('./WrinkleFillersPage'), { loading: () => <ServicePageSkeleton /> }),
  'prp-face': dynamic(() => import('./PrpFacePage'), { loading: () => <ServicePageSkeleton /> }),
  'dark-circles-treatment': dynamic(() => import('./DarkCirclesTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'prp-hair': dynamic(() => import('./PrpHairPage'), { loading: () => <ServicePageSkeleton /> }),
  'white-peeling': dynamic(() => import('./WhitePeelingPage'), { loading: () => <ServicePageSkeleton /> }),
  'microneedling': dynamic(() => import('./MicroneedlingPage'), { loading: () => <ServicePageSkeleton /> }),
  'radiofrequency-face': dynamic(() => import('./RadiofrequencyFacePage'), { loading: () => <ServicePageSkeleton /> }),
  'sulcus-filling': dynamic(() => import('./SulcusFillingPage'), { loading: () => <ServicePageSkeleton /> }),
  'chin-reshaping': dynamic(() => import('./ChinReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'zmadh-gjoksit': dynamic(() => import('./BreastAugmentationPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-gjoksit': dynamic(() => import('./BreastLiftPage'), { loading: () => <ServicePageSkeleton /> }),
  'zvog-gjoksit': dynamic(() => import('./BreastReductionPage'), { loading: () => <ServicePageSkeleton /> }),
  'rikonst-gjoksit': dynamic(() => import('./BreastReconstructionPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-kraheve': dynamic(() => import('./ArmLiftPage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-barkut': dynamic(() => import('./TummyTuckPage'), { loading: () => <ServicePageSkeleton /> }),
  'liposculptura': dynamic(() => import('./LiposculpturePage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-vitheve-bbl': dynamic(() => import('./BblButtockRemodelingPage'), { loading: () => <ServicePageSkeleton /> }),
  'labioplastika': dynamic(() => import('./LabiaplastyPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-kofsheve': dynamic(() => import('./ThighLiftPage'), { loading: () => <ServicePageSkeleton /> }),
  'gynecomastia': dynamic(() => import('./GynecomastiaPage'), { loading: () => <ServicePageSkeleton /> }),
  'cellulite-treatment': dynamic(() => import('./CelluliteTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'plasma-arc-body': dynamic(() => import('./PlasmaArcBodyPage'), { loading: () => <ServicePageSkeleton /> }),
  'carboxytherapy': dynamic(() => import('./CarboxytherapyPage'), { loading: () => <ServicePageSkeleton /> }),
  'sclerotherapy': dynamic(() => import('./SclerotherapyPage'), { loading: () => <ServicePageSkeleton /> }),
  'lipolysis': dynamic(() => import('./LipolysisPage'), { loading: () => <ServicePageSkeleton /> }),
  'laser-hair-removal': dynamic(() => import('./LaserHairRemovalPage'), { loading: () => <ServicePageSkeleton /> }),
  'teeth-whitening': dynamic(() => import('./TeethWhiteningPage'), { loading: () => <ServicePageSkeleton /> }),
  'composite-veneers': dynamic(() => import('./CompositeVeneersPage'), { loading: () => <ServicePageSkeleton /> }),
  'emax-veneers': dynamic(() => import('./EmaxVeneersPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-crowns': dynamic(() => import('./DentalCrownsPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-bridges': dynamic(() => import('./DentalBridgesPage'), { loading: () => <ServicePageSkeleton /> }),
  'dentures': dynamic(() => import('./DenturesPage'), { loading: () => <ServicePageSkeleton /> }),
  'invisalign': dynamic(() => import('./InvisalignPage'), { loading: () => <ServicePageSkeleton /> }),
  'fixed-braces': dynamic(() => import('./FixedBracesPage'), { loading: () => <ServicePageSkeleton /> }),
  'removable-appliances': dynamic(() => import('./RemovableAppliancesPage'), { loading: () => <ServicePageSkeleton /> }),
  'teeth-cleaning': dynamic(() => import('./TeethCleaningPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-fillings': dynamic(() => import('./DentalFillingsPage'), { loading: () => <ServicePageSkeleton /> }),
  'root-canal-treatment': dynamic(() => import('./RootCanalTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'tooth-extraction': dynamic(() => import('./ToothExtractionPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-implants': dynamic(() => import('./DentalImplantsPage'), { loading: () => <ServicePageSkeleton /> }),
  'apical-resection': dynamic(() => import('./ApicalResectionPage'), { loading: () => <ServicePageSkeleton /> }),
  'primary-teeth-care': dynamic(() => import('./PrimaryTeethCarePage'), { loading: () => <ServicePageSkeleton /> }),
  'teeth-fluoridation': dynamic(() => import('./TeethFluoridationPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-sealants': dynamic(() => import('./DentalSealantsPage'), { loading: () => <ServicePageSkeleton /> }),
};

export function ServicePageDispatcher({ service }: { service: ServiceWithContent }) {
  const ServiceComponent = componentMap[service.id];

  if (!ServiceComponent) {
    // Fallback for any service that might not have a custom component yet
    return <div>Service page for {service.id} not found.</div>;
  }

  return <ServiceComponent service={service} />;
}

// Skeleton component for loading state
function ServicePageSkeleton() {
    return (
        <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <Skeleton className="h-12 w-1/2 mx-auto mb-12" />
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <Skeleton className="w-full aspect-w-4 aspect-h-3 rounded-lg" />
                </div>
                <div className="space-y-6">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-8 w-1/2 mt-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-12 w-48 mt-6" />
                </div>
            </div>
        </div>
    );
}
