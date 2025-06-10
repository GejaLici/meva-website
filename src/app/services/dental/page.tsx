
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { serviceCategories } from '@/lib/services';
import type { ServiceCategory } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Services',
  description: 'Explore our comprehensive range of dental services, from aesthetic treatments to oral surgery and pediatric care.',
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
        title="Dental Services"
        description="Discover our wide array of specialized dental treatments designed to enhance your smile and oral health. Our expert team offers everything from cosmetic enhancements to comprehensive surgical and pediatric care."
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
            No dental service categories are available at the moment. Please check back later.
          </p>
        )}
      </div>
    </>
  );
}
