
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Service } from '@/types/services';
import { getTranslations } from 'next-intl/server';

interface DentalServiceListProps {
  services: Service[];
  categorySlug: string;
}

export async function DentalServiceList({ services, categorySlug }: DentalServiceListProps) {
  const tServices = await getTranslations('Services');
  const tNav = await getTranslations('Navigation');
  const learnMoreText = tNav('exploreService');

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
         <ServiceCard
          key={service.id}
          service={service}
          categorySlug={categorySlug}
          name={tServices(`items.${service.id}.name`)}
          description={tServices(`items.${service.id}.description`)}
          learnMoreText={learnMoreText}
        />
      ))}
    </div>
  );
}
