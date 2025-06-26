import { Link } from '@/navigation';
import Image from 'next/image';
import { serviceCategories } from '@/lib/services';
import type { ServiceCategory } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, Leaf, Heart, PersonStanding, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const mainServiceDisplayInfo = [
  {
    id: 'facial-surgery',
    nameOverride: 'Facial Plastic Surgery',
    icon: Gem,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'facial-treatments',
    nameOverride: 'Facial Treatments',
    icon: Leaf,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'breasts',
    nameOverride: 'Breast Procedures',
    icon: Heart,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'body',
    nameOverride: 'Body Contouring',
    icon: PersonStanding,
    colSpan: 'md:col-span-3',
  },
  {
    id: 'dental', // Special case for dental group
    nameOverride: 'Comprehensive Dental Care',
    descriptionOverride: serviceCategories.find(cat => cat.id === 'aesthetic-dentistry')?.description || `Explore our full range of expert dental services, from cosmetic enhancements and orthodontics to surgical procedures and pediatric care, all tailored to your oral health needs.`,
    imageOverride: '/images/dentist-turkey-antalya.jpg',
    imageHintOverride: 'dental clinic modern equipment',
    slugOverride: 'dental',
    icon: Sparkles,
    colSpan: 'md:col-span-3',
  },
];

export function ServiceCategoryGrid() {
    const displayedCategories: (ServiceCategory & { icon?: React.ElementType, nameOverride?: string, slugOverride?: string, colSpan?: string })[] = mainServiceDisplayInfo.map(info => {
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
        colSpan: info.colSpan,
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
      colSpan: info.colSpan,
    };
  }).filter(Boolean) as (ServiceCategory & { icon?: React.ElementType, nameOverride?: string, slugOverride?: string, colSpan?: string })[];

  return (
    <>
      {displayedCategories.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          {displayedCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={category.id} className={cn("group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", category.colSpan)}>
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
          No service categories are currently available. Please check back soon or contact our clinic for more information.
        </p>
      )}
    </>
  );
}
