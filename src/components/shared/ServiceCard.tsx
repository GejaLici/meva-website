'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import type { Service } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { stripHtml } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  categorySlug: string;
}

export function ServiceCard({ service, categorySlug }: ServiceCardProps) {
  const t = useTranslations();
  const serviceName = t(`Services.items.${service.id}.name`);
  const serviceDescriptionHtml = t.rich(`Services.items.${service.id}.description`, {
    p: (chunks) => `<p>${chunks}</p>`,
    b: (chunks) => `<strong>${chunks}</strong>`,
  }).toString();

  const plainDescription = stripHtml(serviceDescriptionHtml);

  const truncatedDescription = plainDescription.length > 120 
    ? plainDescription.substring(0, 120) + '...' 
    : plainDescription;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {service.image && (
        <div className="relative w-full h-48">
          <Image
            src={service.image}
            alt={serviceName}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={service.imageHint || 'medical procedure'}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{serviceName}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {truncatedDescription}
        </CardDescription>
        <Button asChild className="mt-auto w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <Link href={`/services/${categorySlug}/${service.slug}`}>
            {t('Navigation.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
