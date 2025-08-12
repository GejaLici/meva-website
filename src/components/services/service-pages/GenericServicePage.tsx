

'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import type { ServiceWithContent } from '@/types/services';
import { Skeleton } from '@/components/ui/skeleton';
import '@/messages/services/style.css';

const ServiceGallery = dynamic(
  () => import('@/components/services/ServiceGallery').then((mod) => mod.ServiceGallery),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-2xl mx-auto">
        <Skeleton className="aspect-video w-full" />
        <div className="flex justify-center items-center gap-2 mt-4">
          <Skeleton className="h-2 w-6 rounded-full" />
          <Skeleton className="h-2 w-2 rounded-full" />
          <Skeleton className="h-2 w-2 rounded-full" />
        </div>
      </div>
    ),
  }
);

interface ServicePageProps {
    service: ServiceWithContent;
}

export default function GenericServicePage({ service }: ServicePageProps) {
  const tSite = useTranslations('Site');
  const tDetails = useTranslations('ServiceDetailsPage');
  const tServices = useTranslations('Services');

  const siteName = tSite('title');
  const serviceName = tServices(`items.${service.id}.name`);
  
  return (
    <>
      <PageHeader title={serviceName} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div 
            className="prose prose-lg max-w-none text-foreground prose-h1:font-headline prose-h1:text-2xl prose-h1:font-semibold prose-h1:mb-4 prose-h1:text-primary prose-h2:font-headline prose-h2:text-xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:text-primary prose-h3:font-headline prose-h3:text-lg prose-h3:font-semibold prose-h3:mb-2 prose-h3:text-primary prose-p:mb-4 prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:mb-4 prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-2 prose-ol:mb-4 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: service.description }} 
          />
           <div>
            {service.image && (
              <Card className="overflow-hidden shadow-xl mb-8">
                <Image
                  src={decodeURIComponent(service.image)}
                  alt={serviceName}
                  width={600}
                  height={400}
                  priority
                  className="w-full h-auto object-cover"
                  data-ai-hint={service.imageHint || 'medical procedure detail'}
                />
              </Card>
            )}

             <div className="p-6 rounded-lg bg-muted/50">
                 <h3 className="font-headline text-xl font-semibold mb-2 text-primary">{tDetails('whatToExpectTitle', { siteName })}</h3>
                <p className="mb-4 text-sm">
                  {tDetails('whatToExpectP1', { siteName, serviceName: serviceName.toLowerCase() })}
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-sm">
                  <li>{tDetails('whatToExpectL1')}</li>
                  <li>{tDetails('whatToExpectL2')}</li>
                  <li>{tDetails('whatToExpectL3')}</li>
                  <li>{tDetails('whatToExpectL4')}</li>
                </ul>
                
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <Link href="/contact">{tDetails('consultationButton')}</Link>
                </Button>
            </div>
          </div>
        </div>
        
        {service.gallery && service.gallery.length > 0 && (
          <section className="mt-16 pt-12 border-t">
            <h2 className="text-3xl font-headline font-bold text-center mb-8 text-primary">
              {tDetails('galleryTitle')}
            </h2>
            <ServiceGallery images={service.gallery} />
          </section>
        )}
      </div>
    </>
  );
}
