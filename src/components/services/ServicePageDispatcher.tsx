

'use client';

import type { ServiceWithContent } from '@/types/services';
import GenericServicePage from './service-pages/GenericServicePage';
import ServicePageSkeleton from './service-pages/ServicePageSkeleton';
import dynamic from 'next/dynamic';

const ServiceComponent = dynamic(() => import('./service-pages/GenericServicePage'), { loading: () => <ServicePageSkeleton /> });

export function ServicePageDispatcher({ service }: { service: ServiceWithContent }) {
  // All services now use the GenericServicePage.
  // The dynamic import with a skeleton is kept for good UX.
  return <ServiceComponent service={service} />;
}
