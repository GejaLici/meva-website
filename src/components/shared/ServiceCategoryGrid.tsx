import { Link } from '@/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, Leaf, Heart, PersonStanding, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceCategory } from '@/types/services';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { Separator } from '../ui/separator';

const ICONS: { [key: string]: React.ElementType } = {
  Gem,
  Leaf,
  Heart,
  PersonStanding,
  Sparkles,
};

interface ServiceCategoryGridProps {
  aestheticCategories: ServiceCategory[];
  dentalCategory?: ServiceCategory;
  homePageLayout?: boolean;
}

export async function ServiceCategoryGrid({ aestheticCategories, dentalCategory, homePageLayout = false }: ServiceCategoryGridProps) {
  const tServices = await getTranslations('Services');
  const tNav = useTranslations('Navigation');
  
  const renderCard = (category: ServiceCategory, className?: string) => {
    const CategoryIcon = category.icon ? ICONS[category.icon] : null;
    const name = tServices(`categories.${category.id}.name`);
    const description = tServices(`categories.${category.id}.description`);
    const exploreText = tNav('exploreService');

    return (
      <Card key={category.id} className={cn("group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", className)}>
        {category.image && (
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={category.image}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint={category.imageHint || 'medical service collage'}
              className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        )}
        <CardHeader className="text-center">
          {CategoryIcon && (
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CategoryIcon className="h-6 w-6" />
            </div>
          )}
          <CardTitle className="font-headline text-2xl text-primary group-hover:text-accent transition-colors duration-300">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <CardDescription className="text-muted-foreground mb-6 flex-grow line-clamp-3 text-center">
            {description}
          </CardDescription>
          <Button asChild className="mt-auto w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
            <Link href={category.id === 'dental-summary' ? '/services/dental' : `/services/${category.slug}`}>
              {exploreText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  };
  
  if (homePageLayout) {
    return (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aestheticCategories.map((category) => renderCard(category))}
        </div>
        {dentalCategory && (
          <>
            <Separator className="my-8" />
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 lg:w-1/2">
                {renderCard(dentalCategory)}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Fallback for non-homepage layouts
  const allCategories = [...aestheticCategories];
  if (dentalCategory) allCategories.push(dentalCategory);

  return (
    <>
      {allCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategories.map((category) => renderCard(category))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          No service categories are currently available. Please check back soon or contact our clinic for more information.
        </p>
      )}
    </>
  );
}
