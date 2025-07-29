
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import type { ServiceWithContent } from '@/types/services';

const componentMap: { [key: string]: React.ComponentType<{ service: ServiceWithContent }> } = {
  'op-hunde': dynamic(() => import('./service-pages/OpHundePage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-hunde': dynamic(() => import('./service-pages/RimHundePage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-vesheve': dynamic(() => import('./service-pages/RimVeshevePage'), { loading: () => <ServicePageSkeleton /> }),
  'mbj-flokeve': dynamic(() => import('./service-pages/MbjFlokevePage'), { loading: () => <ServicePageSkeleton /> }),
  'mbj-mjekres': dynamic(() => import('./service-pages/MbjMjekresPage'), { loading: () => <ServicePageSkeleton /> }),
  'mbj-vetullave': dynamic(() => import('./service-pages/MbjVetullavePage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-vetullave': dynamic(() => import('./service-pages/LiftVetullavePage'), { loading: () => <ServicePageSkeleton /> }),
  'blefaroplastika': dynamic(() => import('./service-pages/BlefaroplastikaPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-fytyres': dynamic(() => import('./service-pages/LiftFytyresPage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-mjekres': dynamic(() => import('./service-pages/RimMjekresPage'), { loading: () => <ServicePageSkeleton /> }),
  'lip-reshaping': dynamic(() => import('./service-pages/LipReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'xanthelasma-plasma-arc': dynamic(() => import('./service-pages/XanthelasmaPlasmaArcPage'), { loading: () => <ServicePageSkeleton /> }),
  'multivitamin-treatment': dynamic(() => import('./service-pages/MultivitaminTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'eyelids-plasma-arc': dynamic(() => import('./service-pages/EyelidsPlasmaArcPage'), { loading: () => <ServicePageSkeleton /> }),
  'cheekbone-reshaping': dynamic(() => import('./service-pages/CheekboneReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'microdermabrasion': dynamic(() => import('./service-pages/MicrodermabrasionPage'), { loading: () => <ServicePageSkeleton /> }),
  'jawline-contouring': dynamic(() => import('./service-pages/JawlineContouringPage'), { loading: () => <ServicePageSkeleton /> }),
  'wrinkle-fillers': dynamic(() => import('./service-pages/WrinkleFillersPage'), { loading: () => <ServicePageSkeleton /> }),
  'prp-face': dynamic(() => import('./service-pages/PrpFacePage'), { loading: () => <ServicePageSkeleton /> }),
  'dark-circles-treatment': dynamic(() => import('./service-pages/DarkCirclesTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'prp-hair': dynamic(() => import('./service-pages/PrpHairPage'), { loading: () => <ServicePageSkeleton /> }),
  'white-peeling': dynamic(() => import('./service-pages/WhitePeelingPage'), { loading: () => <ServicePageSkeleton /> }),
  'microneedling': dynamic(() => import('./service-pages/MicroneedlingPage'), { loading: () => <ServicePageSkeleton /> }),
  'radiofrequency-face': dynamic(() => import('./service-pages/RadiofrequencyFacePage'), { loading: () => <ServicePageSkeleton /> }),
  'sulcus-filling': dynamic(() => import('./service-pages/SulcusFillingPage'), { loading: () => <ServicePageSkeleton /> }),
  'chin-reshaping': dynamic(() => import('./service-pages/ChinReshapingPage'), { loading: () => <ServicePageSkeleton /> }),
  'zmadh-gjoksit': dynamic(() => import('./service-pages/ZmadhGjoksitPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-gjoksit': dynamic(() => import('./service-pages/LiftGjoksitPage'), { loading: () => <ServicePageSkeleton /> }),
  'zvog-gjoksit': dynamic(() => import('./service-pages/ZvogGjoksitPage'), { loading: () => <ServicePageSkeleton /> }),
  'rikonst-gjoksit': dynamic(() => import('./service-pages/RikonstGjoksitPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-kraheve': dynamic(() => import('./service-pages/LiftKrahevePage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-barkut': dynamic(() => import('./service-pages/RimBarkutPage'), { loading: () => <ServicePageSkeleton /> }),
  'liposculptura': dynamic(() => import('./service-pages/LiposculpturaPage'), { loading: () => <ServicePageSkeleton /> }),
  'rim-vitheve-bbl': dynamic(() => import('./service-pages/RimVitheveBblPage'), { loading: () => <ServicePageSkeleton /> }),
  'labioplastika': dynamic(() => import('./service-pages/LabioplastikaPage'), { loading: () => <ServicePageSkeleton /> }),
  'lift-kofsheve': dynamic(() => import('./service-pages/LiftKofshevePage'), { loading: () => <ServicePageSkeleton /> }),
  'gynecomastia': dynamic(() => import('./service-pages/GynecomastiaPage'), { loading: () => <ServicePageSkeleton /> }),
  'cellulite-treatment': dynamic(() => import('./service-pages/CelluliteTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'plasma-arc-body': dynamic(() => import('./service-pages/PlasmaArcBodyPage'), { loading: () => <ServicePageSkeleton /> }),
  'carboxytherapy': dynamic(() => import('./service-pages/CarboxytherapyPage'), { loading: () => <ServicePageSkeleton /> }),
  'sclerotherapy': dynamic(() => import('./service-pages/SclerotherapyPage'), { loading: () => <ServicePageSkeleton /> }),
  'lipolysis': dynamic(() => import('./service-pages/LipolysisPage'), { loading: () => <ServicePageSkeleton /> }),
  'laser-hair-removal': dynamic(() => import('./service-pages/LaserHairRemovalPage'), { loading: () => <ServicePageSkeleton /> }),
  'teeth-whitening': dynamic(() => import('./service-pages/TeethWhiteningPage'), { loading: () => <ServicePageSkeleton /> }),
  'composite-veneers': dynamic(() => import('./service-pages/CompositeVeneersPage'), { loading: () => <ServicePageSkeleton /> }),
  'emax-veneers': dynamic(() => import('./service-pages/EmaxVeneersPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-crowns': dynamic(() => import('./service-pages/DentalCrownsPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-bridges': dynamic(() => import('./service-pages/DentalBridgesPage'), { loading: () => <ServicePageSkeleton /> }),
  'dentures': dynamic(() => import('./service-pages/DenturesPage'), { loading: () => <ServicePageSkeleton /> }),
  'invisalign': dynamic(() => import('./service-pages/InvisalignPage'), { loading: () => <ServicePageSkeleton /> }),
  'fixed-braces': dynamic(() => import('./service-pages/FixedBracesPage'), { loading: () => <ServicePageSkeleton /> }),
  'removable-appliances': dynamic(() => import('./service-pages/RemovableAppliancesPage'), { loading: () => <ServicePageSkeleton /> }),
  'teeth-cleaning': dynamic(() => import('./service-pages/TeethCleaningPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-fillings': dynamic(() => import('./service-pages/DentalFillingsPage'), { loading: () => <ServicePageSkeleton /> }),
  'root-canal-treatment': dynamic(() => import('./service-pages/RootCanalTreatmentPage'), { loading: () => <ServicePageSkeleton /> }),
  'tooth-extraction': dynamic(() => import('./service-pages/ToothExtractionPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-implants': dynamic(() => import('./service-pages/DentalImplantsPage'), { loading: () => <ServicePageSkeleton /> }),
  'apical-resection': dynamic(() => import('./service-pages/ApicalResectionPage'), { loading: () => <ServicePageSkeleton /> }),
  'primary-teeth-care': dynamic(() => import('./service-pages/PrimaryTeethCarePage'), { loading: () => <ServicePageSkeleton /> }),
  'teeth-fluoridation': dynamic(() => import('./service-pages/TeethFluoridationPage'), { loading: () => <ServicePageSkeleton /> }),
  'dental-sealants': dynamic(() => import('./service-pages/DentalSealantsPage'), { loading: () => <ServicePageSkeleton /> }),
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
