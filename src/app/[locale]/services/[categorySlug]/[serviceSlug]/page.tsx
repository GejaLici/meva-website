import { notFound } from 'next/navigation';
import { getServiceBySlugs, serviceCategories } from '@/lib/services';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { stripHtml } from '@/lib/utils';
import ServicePageClient from '@/components/services/ServicePage';

interface ServicePageProps {
  params: {
    categorySlug: string;
    serviceSlug: string;
    locale: string;
  };
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const paths = [];
  for (const category of serviceCategories) {
    if (category.id === 'dental-summary') continue;
    for (const service of category.services) {
      paths.push({
        categorySlug: category.slug,
        serviceSlug: service.slug,
      });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, categorySlug, serviceSlug } = params;
  const tSite = await getTranslations({ locale, namespace: 'Site' });
  const tDetails = await getTranslations({ locale, namespace: 'ServiceDetailsPage' });
  const tServices = await getTranslations({ locale, namespace: 'Services' });

  const service = getServiceBySlugs(categorySlug, serviceSlug);
  const siteName = tSite('title');

  if (!service) {
    return {
      title: tDetails('serviceNotFoundTitle', { siteName }),
      description: tDetails('serviceNotFoundDescription', { siteName })
    };
  }

  const serviceName = tServices(`items.${service.id}.name`);
  const serviceDescriptionRaw = tServices(`items.${service.id}.description`);
  const serviceDescription = stripHtml(serviceDescriptionRaw);

  const metaDescription = serviceDescription.length > 155
    ? `${serviceDescription.substring(0, 152)}...`
    : serviceDescription;

  return {
    title: serviceName,
    description: metaDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { categorySlug, serviceSlug } = params;
  const service = getServiceBySlugs(categorySlug, serviceSlug);

  if (!service) {
    notFound();
  }
  
  return <ServicePageClient service={service} />;
}
