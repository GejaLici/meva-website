
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Service } from '@/types/services';

interface DentalServiceListProps {
  services: Service[];
  categorySlug: string;
}

export function DentalServiceList({ services, categorySlug }: DentalServiceListProps) {
  // This component is structurally separate from AestheticServiceList.
  // Future changes to dental service presentation can be made here without affecting other services.
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          categorySlug={categorySlug}
        />
      ))}
    </div>
  );
}
