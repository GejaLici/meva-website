
'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import type { Service } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  categorySlug: string;
  serviceName: string;
  serviceDescription: string;
  learnMoreText: string;
}

export function ServiceCard({ service, categorySlug, serviceName, serviceDescription, learnMoreText }: ServiceCardProps) {

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
          {serviceDescription}
        </CardDescription>
        <Button asChild className="mt-auto w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <Link href={`/services/${categorySlug}/${service.slug}`}>
            {learnMoreText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
