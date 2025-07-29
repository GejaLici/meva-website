
import { getServiceBySlugs } from '@/lib/services';
import ServicePage from '@/components/services/ServicePage';
import { generateMetadataForService, generateStaticParamsForService } from '@/components/services/servicePageHelpers';


export async function generateStaticParams() {
  return generateStaticParamsForService('facial-treatments', 'multivitamin-infusion-facial');
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataForService(params.locale, 'facial-treatments', 'multivitamin-infusion-facial');
}

export default function Page({ params }: { params: { locale: string } }) {
  const service = getServiceBySlugs('facial-treatments', 'multivitamin-infusion-facial');
  if (!service) return null;
  return <ServicePage service={service} locale={params.locale} />;
}
