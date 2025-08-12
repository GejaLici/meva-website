
'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import type { ServiceWithContent } from '@/types/services';
import { useTranslations } from 'next-intl';

interface ServicePageProps {
    service: ServiceWithContent;
}

export default function GenericServicePage({ service }: ServicePageProps) {
  const tServices = useTranslations('Services');
  const tDetails = useTranslations('ServiceDetailsPage');
  const siteName = useTranslations('Site')('title');

  const serviceName = tServices(`items.${service.id}.name`);
  const serviceExcerpt = tDetails('metaDescription', { serviceName, siteName, excerpt: service.description });

  return (
    <>
      <PageHeader title={serviceName} description={serviceExcerpt} />
    </>
  );
}
