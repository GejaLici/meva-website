
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { serviceCategories, getServiceBySlugs } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'next-intl/navigation';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

interface ServicePageProps {
  params: {
    categorySlug: string;
    serviceSlug: string;
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
  const service = getServiceBySlugs(params.categorySlug, params.serviceSlug);
  if (!service) {
    return { 
        title: `Service Not Found | ${SITE_NAME}`,
        description: `The requested service could not be found at ${SITE_NAME}.` 
    };
  }
  const metaDescription = service.description.length > 155 
    ? `${service.description.substring(0, 152)}...` 
    : service.description;
  return {
    title: `${service.name} | ${SITE_NAME}`,
    description: `Explore ${service.name} at ${SITE_NAME}. ${metaDescription}`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlugs(params.categorySlug, params.serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader title={service.name} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            {service.image && (
              <Card className="overflow-hidden shadow-xl mb-8">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={service.imageHint || 'medical procedure detail'}
                />
              </Card>
            )}
          </div>
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">About {service.name}</h2>
            <p className="mb-6">{service.description}</p>
            
            <h3 className="font-headline text-xl font-semibold mb-2 text-primary">What to Expect at ${SITE_NAME}</h3>
            <p className="mb-4">
              At ${SITE_NAME}, your journey begins with a comprehensive consultation where our specialists develop a personalized treatment plan tailored to your specific needs and desired outcomes for {service.name.toLowerCase()}. We utilize modern, evidence-based techniques and state-of-the-art technology. Our commitment extends to meticulous post-operative care and follow-up, ensuring optimal results, your comfort, and a smooth recovery process.
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
