

'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import type { ServiceWithContent } from '@/types/services';
import GenericServicePage from './service-pages/GenericServicePage';

// All pages use the generic template.
const componentMap: { [key: string]: React.ComponentType<{ service: ServiceWithContent }> } = {
  'default': dynamic(() => import('./service-pages/GenericServicePage'), { loading: () => <ServicePageSkeleton /> }),
};

export function ServicePageDispatcher({ service }: { service: ServiceWithContent }) {
  // Use the GenericServicePage for all services.
  const ServiceComponent = componentMap['default'];

  if (!ServiceComponent) {
     // This fallback will likely not be reached as we have a default.
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
