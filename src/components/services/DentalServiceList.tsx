
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Service } from '@/types/services';

interface DentalServiceListProps {
  services: Service[];
  categorySlug: string;
  serviceTranslations: {
    [id: string]: {
      name: string;
      description: string;
    };
  };
  learnMoreText: string;
}

export function DentalServiceList({ services, categorySlug, serviceTranslations, learnMoreText }: DentalServiceListProps) {
  // This component is structurally separate from AestheticServiceList.
  // Future changes to dental service presentation can be made here without affecting other services.
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const translations = serviceTranslations[service.id];
        return (
          <ServiceCard
            key={service.id}
            service={service}
            categorySlug={categorySlug}
            serviceName={translations.name}
            serviceDescription={translations.description}
            learnMoreText={learnMoreText}
          />
        )
      })}
    </div>
  );
}
