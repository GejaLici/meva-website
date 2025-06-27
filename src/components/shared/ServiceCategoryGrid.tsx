
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

  return (
    <>
      {categories.length > 0 ? (
        <div className={cn(
          "grid grid-cols-1 gap-8",
          homePageLayout ? "md:grid-cols-6" : "md:grid-cols-2 lg:grid-cols-3"
        )}>
          {categories.map((category) => {
            const CategoryIcon = category.icon ? ICONS[category.icon] : null;
            const gridSpan = homePageLayout ? category.homeColSpan : '';

            return (
              <Card key={category.id} className={cn("group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300", gridSpan)}>
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
