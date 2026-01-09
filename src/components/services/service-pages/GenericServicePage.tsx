
'use client';

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
  // Use the helper to get only the meta description for the header
  const serviceExcerpt = extractMetaDescription(service.description);

  return (
    <>
      <PageHeader title={serviceName} description={serviceExcerpt} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <main className="md:col-span-8">
                 {/* This div will render the HTML content from your service files */}
                <div
                    className="prose prose-lg max-w-none text-foreground prose-h2:text-primary prose-h3:text-accent prose-strong:text-foreground"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                />
            </main>
            <aside className="md:col-span-4">
                <div className="sticky top-24 space-y-8">
                    {service.gallery && service.gallery.length > 0 && (
                         <div className="space-y-4">
                            <h3 className="font-headline text-2xl font-semibold text-primary">{tDetails('galleryTitle')}</h3>
                            <ServiceGallery images={service.gallery} />
                        </div>
                    )}
                    <Card className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{tDetails('whatToExpectTitle', {siteName})}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">{tDetails('whatToExpectP1', {siteName, serviceName})}</p>
                             <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                <li>{tDetails('whatToExpectL1')}</li>
                                <li>{tDetails('whatToExpectL2')}</li>
                                <li>{tDetails('whatToExpectL3')}</li>
                                <li>{tDetails('whatToExpectL4')}</li>
                            </ul>
                            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                               <Link href="/contact">{tDetails('consultationButton')}</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </aside>
        </div>
      </div>
    </>
  );
}
