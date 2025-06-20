
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { serviceCategories } from '@/lib/services';
import type { ServiceCategory } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Comprehensive Dental Services | ${SITE_NAME}`,
  description: `Explore our extensive range of expert dental services at ${SITE_NAME}, from advanced aesthetic treatments and orthodontics to oral surgery and specialized pediatric care.`,
};

const dentalCategoryIds = [
  'aesthetic-dentistry',
  'prosthetics',
  'orthodontics',
  'restorative-dentistry',
  'oral-surgery',
  'pediatric-dentistry',
];

export default function DentalServicesPage() {
  const dentalCategories = serviceCategories.filter(category => dentalCategoryIds.includes(category.id));

  return (
    <>
      <PageHeader
        title="Comprehensive Dental Services"
        description={`Discover our wide array of specialized dental treatments at ${SITE_NAME}, designed to enhance your smile and safeguard your oral health. Our expert dental team offers everything from advanced cosmetic enhancements and orthodontics to comprehensive surgical procedures and dedicated pediatric care.`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {dentalCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dentalCategories.map((category: ServiceCategory) => (
              <Card key={category.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {category.image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={category.imageHint || 'dental service collage'}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {category.description}
                  </CardDescription>
                  <Button asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Link href={`/services/${category.slug}`}>
                      Explore {category.name} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            No dental service categories are currently available. Please contact {SITE_NAME} for the latest information.
          </p>
        )}
      </div>
    </>
  );
}
