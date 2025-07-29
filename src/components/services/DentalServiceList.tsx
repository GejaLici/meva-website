
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { ServiceWithContent } from '@/types/services';

interface DentalServiceListProps {
  services: ServiceWithContent[];
  categorySlug: string;
}

export function DentalServiceList({ services, categorySlug }: DentalServiceListProps) {
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
