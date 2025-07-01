
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Service } from '@/types/services';

interface AestheticServiceListProps {
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

export function AestheticServiceList({ services, categorySlug, serviceTranslations, learnMoreText }: AestheticServiceListProps) {
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
