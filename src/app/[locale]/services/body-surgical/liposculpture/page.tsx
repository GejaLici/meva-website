
import { getServiceBySlugs } from '@/lib/services';
import ServicePage from '@/components/services/ServicePage';
import { generateMetadataForService, generateStaticParamsForService } from '@/components/services/servicePageHelpers';


export async function generateStaticParams() {
  return generateStaticParamsForService('body-surgical', 'liposculpture');
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataForService(params.locale, 'body-surgical', 'liposculpture');
}

export default function Page({ params }: { params: { locale: string } }) {
  const service = getServiceBySlugs('body-surgical', 'liposculpture');
  if (!service) return null;
  return <ServicePage service={service} locale={params.locale} />;
}
