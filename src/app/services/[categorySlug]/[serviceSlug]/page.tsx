
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { serviceCategories, getServiceBySlugs } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';

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
    return { title: 'Service Not Found' };
  }
  return {
    title: service.name,
    description: `Learn more about ${service.name} at NovaSculpt Clinic. ${service.description.substring(0,120)}...`,
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
            <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">About the Service</h2>
            <p className="mb-6">{service.description}</p>
            
            <h3 className="font-headline text-xl font-semibold mb-2 text-primary">What to expect?</h3>
            <p className="mb-4">
              At NovaSculpt Clinic, we ensure that every patient receives a personalized treatment plan. 
              The procedure for {service.name.toLowerCase()} includes detailed consultations, modern techniques, and careful 
              post-operative follow-up to guarantee optimal results and a speedy recovery.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Detailed initial consultation</li>
              <li>Personalized treatment plan</li>
              <li>Modern technology and methods</li>
              <li>Dedicated post-operative care</li>
            </ul>
            
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
