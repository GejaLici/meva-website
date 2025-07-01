'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import type { Service } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  service: Service;
  categorySlug: string;
  learnMoreText: string;
}

export function ServiceCard({ service, categorySlug, learnMoreText }: ServiceCardProps) {
  const tServices = useTranslations('Services');
  const encodedImageUrl = service.image ? encodeURI(service.image) : undefined;
  
  const name = tServices(`items.${service.id}.name`);
  const description = tServices(`items.${service.id}.description`);

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {encodedImageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={encodedImageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={service.imageHint || 'medical procedure'}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {description}
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
