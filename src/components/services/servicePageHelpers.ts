// This file is on the server only and can contain server-side logic
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getServiceBySlugs } from '@/lib/services';
import { stripHtml } from '@/lib/utils';
import { locales } from '@/navigation';

export async function generateMetadataForService(
  locale: string,
  categorySlug: string,
  serviceSlug: string
): Promise<Metadata> {
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

// This function is simple enough that it doesn't need to be async
export function generateStaticParamsForService(categorySlug: string, serviceSlug: string) {
  // Although we are in a static page, Next.js still needs to know which locales to generate.
  // This helper generates the params for all supported locales.
  return locales.map(locale => ({ locale, categorySlug, serviceSlug }));
}
