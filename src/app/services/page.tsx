
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { serviceCategories } from '@/lib/services';
import type { ServiceCategory } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, Leaf, Heart, PersonStanding, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Explore the comprehensive range of aesthetic and dental services offered at ${SITE_NAME}. Find the perfect treatment to enhance your beauty and well-being.`,
};

const mainServiceDisplayInfo = [
  {
    id: 'facial-surgery',
    nameOverride: 'Facial Plastic Surgery',
    icon: Gem,
  },
  {
    id: 'facial-treatments',
    nameOverride: 'Facial Treatments',
    icon: Leaf,
  },
  {
    id: 'breasts',
    nameOverride: 'Breast Procedures',
    icon: Heart,
  },
  {
    id: 'body',
    nameOverride: 'Body Contouring',
    icon: PersonStanding,
  },
  {
    id: 'dental', // Special case for dental group
    nameOverride: 'Comprehensive Dental Care',
    descriptionOverride: `Explore our full range of expert dental services, from cosmetic enhancements and orthodontics to surgical procedures and pediatric care, all tailored to your oral health needs.`,
    imageOverride: '/images/dentist-turkey-antalya.jpg',
    imageHintOverride: 'dental clinic modern equipment',
    slugOverride: 'dental',
    icon: Sparkles,
  },
];

export default function ServicesOverviewPage() {
  const displayedCategories: (ServiceCategory & { icon?: React.ElementType, nameOverride?: string, slugOverride?: string })[] = mainServiceDisplayInfo.map(info => {
    if (info.id === 'dental') {
      return {
        id: 'dental-summary',
        name: info.nameOverride || 'Dental Services',
        nameOverride: info.nameOverride,
        slug: info.slugOverride || 'dental',
        slugOverride: info.slugOverride,
        description: info.descriptionOverride || 'Comprehensive dental care solutions.',
        services: [], // Not listing individual services here
        image: info.imageOverride,
        imageHint: info.imageHintOverride,
        icon: info.icon,
      };
    }
    const category = serviceCategories.find(cat => cat.id === info.id);
    return {
      ...category,
      id: category?.id || info.id,
      name: info.nameOverride || category?.name || 'Unknown Category',
      nameOverride: info.nameOverride || category?.name,
      slug: category?.slug || info.id,
      description: category?.description || 'Explore our services.',
      services: category?.services || [],
      image: category?.image,
      imageHint: category?.imageHint,
      icon: info.icon,
    };
  }).filter(Boolean) as (ServiceCategory & { icon?: React.ElementType, nameOverride?: string, slugOverride?: string })[];

  return (
    <>
      <PageHeader
        title="Our Services"
        description={`Discover the wide array of specialized aesthetic and dental treatments designed to help you achieve your beauty and wellness goals. Our expert team at ${SITE_NAME} is dedicated to providing personalized care and exceptional results.`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {displayedCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
            {displayedCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              let colSpanClass = '';
              if (index < 3) { 
                colSpanClass = 'md:col-span-2';
              } else { 
                colSpanClass = 'md:col-span-3';
              }
              return (
                <Card key={category.id} className={cn("group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", colSpanClass)}>
                  {category.image && (
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.nameOverride || category.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={category.imageHint || 'medical service collage'}
                        className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  )}
                  <CardHeader className="text-center">
                    {CategoryIcon && (
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <CategoryIcon className="h-6 w-6" />
                      </div>
                    )}
                    <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">{category.nameOverride || category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="text-muted-foreground mb-6 flex-grow line-clamp-3 text-center">
                      {category.description}
                    </CardDescription>
                    <Button asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Link href={`/services/${category.slugOverride || category.slug}`}>
                        Explore {category.nameOverride || category.name} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            No service categories are available at the moment. Please check back later.
          </p>
        )}
      </div>
    </>
  );
}
