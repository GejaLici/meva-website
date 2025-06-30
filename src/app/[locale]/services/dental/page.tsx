
import { Link } from '@/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { serviceCategories } from '@/lib/services';
import type { ServiceCategory } from '@/types/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale});
  return {
    title: t('DentalServicesPage.metaTitle', {siteName: t('Site.title')}),
    description: t('DentalServicesPage.metaDescription', {siteName: t('Site.title')}),
  };
}

const dentalCategoryIds = [
  'aesthetic-dentistry',
  'prosthetics',
  'orthodontics',
  'restorative-dentistry',
  'oral-surgery',
  'pediatric-dentistry',
];

export default async function DentalServicesPage() {
  const dentalCategories = serviceCategories.filter(category => dentalCategoryIds.includes(category.id));
  const t = await getTranslations();
  const siteName = t('Site.title');

  return (
    <>
      <PageHeader
        title={t('DentalServicesPage.title')}
        description={t('DentalServicesPage.description')}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {dentalCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dentalCategories.map((category: ServiceCategory) => {
              const categoryName = t(`Services.categories.${category.id}.name`);
              const categoryDescription = t(`Services.categories.${category.id}.description`);
              return (
                <Card key={category.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {category.image && (
                    <div className="relative w-full h-56">
                      <Image
                        src={category.image}
                        alt={categoryName}
                        fill
                        style={{objectFit: 'cover'}}
                        data-ai-hint={category.imageHint || 'dental service collage'}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{categoryName}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                      {categoryDescription}
                    </CardDescription>
                    <Button asChild className="mt-auto w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                      <Link href={`/services/${category.slug}`}>
                        {t('Navigation.exploreService', {categoryName})} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            {t('DentalServicesPage.noResults', {siteName})}
          </p>
        )}
      </div>
    </>
  );
}
