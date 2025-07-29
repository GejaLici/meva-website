
import { getServiceBySlugs } from '@/lib/services';
import ServicePage from '@/components/services/ServicePage';
import { generateMetadataForService, generateStaticParamsForService } from '@/components/services/servicePageHelpers';


export async function generateStaticParams() {
  return generateStaticParamsForService('facial-surgery', 'otoplasty');
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataForService(params.locale, 'facial-surgery', 'otoplasty');
}

export default function Page({ params }: { params: { locale: string } }) {
  const service = getServiceBySlugs('facial-surgery', 'otoplasty');
  if (!service) return null;
  return <ServicePage service={service} locale={params.locale} />;
}
