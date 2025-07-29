
import { getServiceBySlugs } from '@/lib/services';
import ServicePage from '@/components/services/ServicePage';
import { generateMetadataForService, generateStaticParamsForService } from '@/components/services/servicePageHelpers';


export async function generateStaticParams() {
  return generateStaticParamsForService('body-non-surgical', 'carboxytherapy');
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataForService(params.locale, 'body-non-surgical', 'carboxytherapy');
}

export default function Page({ params }: { params: { locale: string } }) {
  const service = getServiceBySlugs('body-non-surgical', 'carboxytherapy');
  if (!service) return null;
  return <ServicePage service={service} locale={params.locale} />;
}
