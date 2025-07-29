
import { getServiceBySlugs } from '@/lib/services';
import ServicePage from '@/components/services/ServicePage';
import { generateMetadataForService, generateStaticParamsForService } from '@/components/services/servicePageHelpers';


export async function generateStaticParams() {
  return generateStaticParamsForService('body-non-surgical', 'plasma-arc-body');
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataForService(params.locale, 'body-non-surgical', 'plasma-arc-body');
}

export default function Page({ params }: { params: { locale: string } }) {
  const service = getServiceBySlugs('body-non-surgical', 'plasma-arc-body');
  if (!service) return null;
  return <ServicePage service={service} locale={params.locale} />;
}
