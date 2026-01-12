'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import type { ServiceWithContent } from '@/types/services';
import { useTranslations } from 'next-intl';
import '@/messages/services/style.css';
import { ServiceGallery } from '../ServiceGallery';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';

interface ServicePageProps {
    service: ServiceWithContent;
}

// Helper function to extract just the meta description from the HTML content
function extractMetaDescription(html: string): string {
  if (!html) return '';
  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  return match ? match[1] : 'No description available.';
}

export default function GenericServicePage({ service }: ServicePageProps) {
  const tServices = useTranslations('Services');
  const tDetails = useTranslations('ServiceDetailsPage');
  const tNav = useTranslations('Navigation');
  const siteName = useTranslations('Site')('title');

  const serviceName = tServices(`items.${service.id}.name`);
  const serviceExcerpt = extractMetaDescription(service.description);
  const encodedFeatureImageUrl = service.image ? encodeURI(service.image) : undefined;

  return (
    <>
      <PageHeader title={serviceName} description={serviceExcerpt} />
      
      {encodedFeatureImageUrl && (
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src={encodedFeatureImageUrl}
            alt={serviceName}
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="filter brightness-90"
            data-ai-hint={service.imageHint || 'medical procedure'}
          />
        </div>
      )}

      <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:py-12">
        <main>
          <div
              className="prose prose-lg max-w-none mx-auto text-foreground prose-h2:text-primary prose-h3:text-accent prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: service.description }}
          />
        </main>
      </div>

      {service.gallery && service.gallery.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/50">
           <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                     <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary">{tDetails('galleryTitle')}</h3>
                </div>
                <ServiceGallery images={service.gallery} />
            </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-screen-md text-center px-4 sm:px-6 lg:px-8">
             <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">{tDetails('whatToExpectTitle', {siteName})}</h2>
             <p className="mb-6 max-w-xl mx-auto">{tDetails('whatToExpectP1', {siteName, serviceName})}</p>
             <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
               <Link href="/contact">{tDetails('consultationButton')}</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
