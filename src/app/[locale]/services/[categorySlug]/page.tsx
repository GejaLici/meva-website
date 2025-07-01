
import { notFound } from 'next/navigation';
import { serviceCategories, getCategoryBySlug, dentalCategoryIds } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AestheticServiceList } from '@/components/services/AestheticServiceList';
import { DentalServiceList } from '@/components/services/DentalServiceList';
import { stripHtml } from '@/lib/utils';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  return serviceCategories
    .filter(cat => cat.id !== 'dental-summary') // Exclude summary card which has its own page
    .map((category) => ({
      categorySlug: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, categorySlug } = params;
  const tSite = await getTranslations({locale, namespace: 'Site'});
  const tPage = await getTranslations({locale, namespace: 'ServiceCategoryPage'});
  const tServices = await getTranslations({locale, namespace: 'Services'});
  
  const siteName = tSite('title');
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    return { 
      title: tPage('categoryNotFoundTitle', {siteName}),
      description: tPage('categoryNotFoundDescription', {siteName})
    };
  }

  const categoryName = tServices(`categories.${category.id}.name`);
  const categoryDescription = tServices(`categories.${category.id}.description`);

  return {
    title: tPage('metaTitle', { categoryName, siteName }),
    description: tPage('metaDescription', { categoryName, categoryDescription, siteName }),
  };
}

export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.categorySlug);
  const tServices = await getTranslations('Services');
  const tPage = await getTranslations('ServiceCategoryPage');
  
  if (!category) {
    notFound();
  }
  
  const categoryName = tServices(`categories.${category.id}.name`);
  const categoryDescription = tServices(`categories.${category.id}.description`);
  const learnMoreText = "Learn More";

  const isDental = dentalCategoryIds.includes(category.id);
  
  const serviceTranslations = category.services.reduce((acc, service) => {
    const rawDescription = tServices(`items.${service.id}.description`);
    acc[service.id] = {
      name: tServices(`items.${service.id}.name`),
      description: stripHtml(rawDescription)
    };
    return acc;
  }, {} as { [id: string]: { name: string; description: string } });

  return (
    <>
      <PageHeader title={categoryName} description={categoryDescription} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {category.services.length > 0 ? (
          isDental ? (
            <DentalServiceList
              services={category.services}
              categorySlug={category.slug}
              serviceTranslations={serviceTranslations}
              learnMoreText={learnMoreText}
            />
          ) : (
            <AestheticServiceList
              services={category.services}
              categorySlug={category.slug}
              serviceTranslations={serviceTranslations}
              learnMoreText={learnMoreText}
            />
          )
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            {tPage('noResults')}
          </p>
        )}
      </div>
    </>
  );
}
