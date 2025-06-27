
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getServiceBySlugs } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from '@/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { stripHtml } from '@/lib/utils';
import { serviceCategories } from '@/lib/services';

interface ServicePageProps {
  params: {
    categorySlug: string;
    serviceSlug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const category of serviceCategories) {
    for (const service of category.services) {
      paths.push({
        categorySlug: category.slug,
        serviceSlug: service.slug,
      });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const t = await getTranslations();
  const service = getServiceBySlugs(params.categorySlug, params.serviceSlug);
  const siteTitle = t('Site.title');

  if (!service) {
    return {
      title: t('ServiceDetailsPage.serviceNotFoundTitle', { siteTitle }),
      description: t('ServiceDetailsPage.serviceNotFoundDescription', { siteTitle })
    };
  }

  const serviceName = t(`Services.items.${service.id}.name`);
  const serviceDescriptionRaw = t(`Services.items.${service.id}.description`);
  const serviceDescription = stripHtml(serviceDescriptionRaw);

  const metaDescription = serviceDescription.length > 155
    ? `${serviceDescription.substring(0, 152)}...`
    : serviceDescription;

  return {
    title: t('ServiceDetailsPage.metaTitle', { serviceName, siteTitle }),
    description: t('ServiceDetailsPage.metaDescription', { serviceName, excerpt: metaDescription }),
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const t = await getTranslations();
  const service = getServiceBySlugs(params.categorySlug, params.serviceSlug);

  if (!service) {
    notFound();
  }

  const siteTitle = t('Site.title');
  const serviceName = t(`Services.items.${service.id}.name`);

  return (
    <>
      <PageHeader title={serviceName} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            {service.image && (
              <Card className="overflow-hidden shadow-xl mb-8">
                <Image
                  src={service.image}
                  alt={serviceName}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={service.imageHint || 'medical procedure detail'}
                />
              </Card>
            )}
          </div>
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">{t('ServiceDetailsPage.aboutTitle', { serviceName })}</h2>
            <div className="mb-6">
              {t.rich(`Services.items.${service.id}.description`, {
                p: (chunks) => <p>{chunks}</p>
              })}
            </div>
            
            <h3 className="font-headline text-xl font-semibold mb-2 text-primary">{t('ServiceDetailsPage.whatToExpectTitle', { siteTitle })}</h3>
            <p className="mb-4">
              {t('ServiceDetailsPage.whatToExpectP1', { siteTitle, serviceName: serviceName.toLowerCase() })}
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>{t('ServiceDetailsPage.whatToExpectL1')}</li>
              <li>{t('ServiceDetailsPage.whatToExpectL2')}</li>
              <li>{t('ServiceDetailsPage.whatToExpectL3')}</li>
              <li>{t('ServiceDetailsPage.whatToExpectL4')}</li>
            </ul>
            
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">{t('ServiceDetailsPage.consultationButton')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
