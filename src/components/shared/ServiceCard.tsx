
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import type { ServiceWithContent } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceWithContent;
  categorySlug: string;
}

// Helper function to extract the meta description from the HTML content
function extractMetaDescription(html: string): string {
  if (!html) return '';
  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  return match ? match[1] : 'No description available.';
}


export function ServiceCard({ service, categorySlug }: ServiceCardProps) {
  const tServices = useTranslations('Services');
  const tNav = useTranslations('Navigation');
  const name = tServices(`items.${service.id}.name`);
  
  // Use the new helper function to get only the meta description
  const shortDescription = extractMetaDescription(service.description);
  
  const learnMoreText = tNav('exploreService');

  const imageUrl = service.image;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          {shortDescription}
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
