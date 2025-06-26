import Image from 'next/image';
import { notFound } from 'next/navigation';
import { serviceCategories, getServiceBySlugs } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from '@/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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
  const tSite = await getTranslations({locale: params.locale, namespace: 'Site'});
  const siteTitle = tSite('title');
  const service = getServiceBySlugs(params.categorySlug, params.serviceSlug);
  
  if (!service) {
    return { 
        title: `Service Not Found | ${siteTitle}`,
        description: `The requested service could not be found at ${siteTitle}.` 
    };
  }

  const t = await getTranslations({locale: params.locale, namespace: 'Services.items'});
  const serviceName = t(`${service.id}.name`);
  const serviceDescription = t.rich(`${service.id}.description`, {p: (chunks) => chunks}).toString();

  const metaDescription = serviceDescription.length > 155 
    ? `${serviceDescription.substring(0, 152)}...` 
    : serviceDescription;

  return {
    title: `${serviceName} | ${siteTitle}`,
    description: `Explore ${serviceName} at ${siteTitle}. ${metaDescription}`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlugs(params.categorySlug, params.serviceSlug);
  const t = useTranslations('Services.items');
  const tSite = await getTranslations('Site');
  const siteTitle = tSite('title');

  if (!service) {
    notFound();
  }

  const serviceName = t(`${service.id}.name`);
  const serviceDescription = t.rich(`${service.id}.description`, {
    p: (chunks) => <p className="mb-4">{chunks}</p>,
    b: (chunks) => <strong>{chunks}</strong>,
  });

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
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">About {serviceName}</h2>
            <div className="mb-6">{serviceDescription}</div>
            
            <h3 className="font-headline text-xl font-semibold mb-2 text-primary">What to Expect at {siteTitle}</h3>
            <p className="mb-4">
              At {siteTitle}, your journey begins with a comprehensive consultation where our specialists develop a personalized treatment plan tailored to your specific needs and desired outcomes for {serviceName.toLowerCase()}. We utilize modern, evidence-based techniques and state-of-the-art technology. Our commitment extends to meticulous post-operative care and follow-up, ensuring optimal results, your comfort, and a smooth recovery process.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Thorough, confidential initial consultation with a specialist.</li>
              <li>Custom-developed treatment plan based on comprehensive assessment.</li>
              <li>Application of advanced medical technology and proven procedural methods.</li>
              <li>Dedicated, attentive post-operative care and follow-up.</li>
            </ul>
            
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Book a Confidential Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
