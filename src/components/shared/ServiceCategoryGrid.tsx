'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import { serviceCategories } from '@/lib/services';
import type { ServiceCategory } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, Leaf, Heart, PersonStanding, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const mainServiceDisplayInfo = [
  {
    id: 'facial-surgery',
    icon: Gem,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'facial-treatments',
    icon: Leaf,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'breasts',
    icon: Heart,
    colSpan: 'md:col-span-2',
  },
  {
    id: 'body',
    icon: PersonStanding,
    colSpan: 'md:col-span-3',
  },
  {
    id: 'dental-summary', 
    slugOverride: 'dental',
    icon: Sparkles,
    colSpan: 'md:col-span-3',
    image: '/images/dentist-turkey-antalya.jpg',
    imageHint: 'dental clinic modern equipment'
  },
];

export function ServiceCategoryGrid() {
  const t = useTranslations('Services.categories');
  
  const displayedCategories = mainServiceDisplayInfo.map(info => {
    const category = serviceCategories.find(cat => cat.id === info.id);
    if(info.id === 'dental-summary') {
      return {
        id: info.id,
        name: t('dental-summary.name'),
        description: t('dental-summary.description'),
        slug: info.slugOverride || info.id,
        image: info.image,
        imageHint: info.imageHint,
        icon: info.icon,
        colSpan: info.colSpan,
        services: [],
      }
    }
    
    if (!category) return null;

    return {
      ...category,
      name: t(`${category.id}.name`),
      description: t(`${category.id}.description`),
      icon: info.icon,
      colSpan: info.colSpan,
    };
  }).filter(Boolean) as (ServiceCategory & { icon?: React.ElementType, colSpan?: string })[];

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
                      alt={category.name}
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
                  <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground mb-6 flex-grow line-clamp-3 text-center">
                    {category.description}
                  </CardDescription>
                  <Button asChild className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <Link href={`/services/${category.slug}`}>
                      Explore {category.name} <ArrowRight className="ml-2 h-4 w-4" />
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
