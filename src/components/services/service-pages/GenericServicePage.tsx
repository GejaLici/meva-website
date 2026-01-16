
'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import type { ServiceWithContent } from '@/types/services';
import { useTranslations } from 'next-intl';
import { ServiceGallery } from '../ServiceGallery';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { ContactForm } from '@/components/contact/ContactForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getServiceDetails } from '@/lib/service-details';

interface ServicePageProps {
    service: ServiceWithContent;
}

function extractMetaDescription(html: string): string {
  if (!html) return '';
  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  return match ? match[1] : 'No description available.';
}

export default function GenericServicePage({ service }: ServicePageProps) {
  const tServices = useTranslations('Services');
  const tDetails = useTranslations('ServiceDetailsPage');
  const tSite = useTranslations('Site');
  const tFaqs = useTranslations('ServiceFaqs');

  const serviceName = tServices(`items.${service.id}.name`);
  const serviceExcerpt = extractMetaDescription(service.description);
  const encodedFeatureImageUrl = service.image ? encodeURI(service.image) : undefined;
  
  const serviceDetails = getServiceDetails(service.id);

  return (
    <>
      <PageHeader title={serviceName} description={serviceExcerpt} />
      
      {encodedFeatureImageUrl && (
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] -mt-6">
          <Image
            src={encodedFeatureImageUrl}
            alt={serviceName}
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="filter brightness-90"
            data-ai-hint={service.imageHint || 'medical procedure'}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          <main className="lg:col-span-8">
            <div
              className="prose prose-lg max-w-none mx-auto text-foreground prose-h2:text-primary prose-h3:text-accent prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </main>

          <aside className="hidden lg:block lg:col-span-4 mt-8 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>{tDetails('quickDetailsTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {serviceDetails?.details.map((detail, index) => (
                     <div key={index} className="flex justify-between text-sm">
                      <p className="font-semibold text-muted-foreground">{tFaqs(`details.${detail.label}`)}:</p>
                      <p className="text-right">{detail.value}</p>
                    </div>
                  ))}
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">{tDetails('consultationButton')}</Link>
                  </Button>
                </CardContent>
              </Card>

              {serviceDetails && serviceDetails.faqs.length > 0 && (
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary mb-4">{tDetails('faqTitle')}</h3>
                   <Accordion type="single" collapsible className="w-full space-y-2">
                      {serviceDetails.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-card p-2 px-4 rounded-lg shadow-sm border">
                          <AccordionTrigger className="text-left font-semibold text-base text-primary hover:no-underline">
                             {tFaqs(`${service.id}.${faq.id}.question`)}
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 text-muted-foreground">
                            {tFaqs.rich(`${service.id}.${faq.id}.answer`, {
                                p: (chunks) => <p className="mb-2 last:mb-0">{chunks}</p>
                            })}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                </div>
              )}
            </div>
          </aside>

        </div>
      </div>

       {service.gallery && service.gallery.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/50">
           <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                     <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary">{tDetails('galleryTitle')}</h2>
                     <p className="mt-2 text-muted-foreground">{tDetails('gallerySubtitle', { serviceName })}</p>
                </div>
                <ServiceGallery images={service.gallery} />
            </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-primary/5">
         <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                    {tDetails('contactTitle')}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                   {tDetails('contactSubtitle', { serviceName })}
                </p>
            </div>
            <div className="bg-card p-8 md:p-10 rounded-lg shadow-2xl text-card-foreground">
                <ContactForm />
            </div>
        </div>
      </section>
    </>
  );
}
