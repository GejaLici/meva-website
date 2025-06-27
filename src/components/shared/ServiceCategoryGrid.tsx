'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import { serviceCategories } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, Leaf, Heart, PersonStanding, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const ICONS: { [key: string]: React.ElementType } = {
  Gem,
  Leaf,
  Heart,
  PersonStanding,
  Sparkles,
};

interface ServiceCategoryGridProps {
  homePageLayout?: boolean;
}

export function ServiceCategoryGrid({ homePageLayout = false }: ServiceCategoryGridProps) {
  const tServices = useTranslations('Services');
  const tOverview = useTranslations('ServicesOverviewPage');

  const categories = (
    homePageLayout
      ? serviceCategories.filter(cat => cat.displayOnHome)
      : serviceCategories.filter(cat => cat.id !== 'dental-summary')
  ).map(category => ({
    ...category,
    name: tServices(`categories.${category.id}.name`),
    description: tServices(`categories.${category.id}.description`),
  }));

  const renderCard = (category: any, className?: string) => {
    const CategoryIcon = category.icon ? ICONS[category.icon] : null;
    return (
      <Card key={category.id} className={cn("group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", className)}>
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
              {tOverview('exploreButtonText', { categoryName: category.name })} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  };
  
  if (homePageLayout) {
    if (categories.length === 0) {
      return (
        <p className="text-center text-lg text-muted-foreground">
          No featured services are available at the moment.
        </p>
      );
    }
    const row1Categories = categories.slice(0, 3);
    const row2Categories = categories.slice(3);
    
    return (
      <div className="flex flex-col items-center gap-8">
        {row1Categories.length > 0 && (
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center md:justify-evenly">
            {row1Categories.map(category => renderCard(category, "w-full md:max-w-sm"))}
          </div>
        )}
        {row2Categories.length > 0 && (
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center md:justify-evenly">
            {row2Categories.map(category => renderCard(category, "w-full md:max-w-sm"))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => renderCard(category))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          No service categories are currently available. Please check back soon or contact our clinic for more information.
        </p>
      )}
    </>
  );
}
