
import Link from 'next/link';
import Image from 'next/image';
import type { Service } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  categorySlug: string;
}

export function ServiceCard({ service, categorySlug }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {service.image && (
        <div className="relative w-full h-48">
          <Image
            src={service.image}
            alt={service.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={service.imageHint || 'medical procedure'}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {service.description.substring(0, 100) + (service.description.length > 100 ? '...' : '')}
        </CardDescription>
        <Button asChild variant="link" className="mt-auto p-0 self-start text-accent hover:text-accent/90">
          <Link href={`/services/${categorySlug}/${service.slug}`}>
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
