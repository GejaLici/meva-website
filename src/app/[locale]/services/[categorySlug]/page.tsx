
import { notFound } from 'next/navigation';
import { serviceCategories, getCategoryBySlug, getServiceWithContent, dentalCategoryIds } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AestheticServiceList } from '@/components/services/AestheticServiceList';
import { DentalServiceList } from '@/components/services/DentalServiceList';
import type { ServiceWithContent } from '@/types/services';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  return serviceCategories
    .filter(cat => cat.id !== 'dental-summary')
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
    title: categoryName,
    description: categoryDescription,
  };
}

export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const tServices = await getTranslations('Services');
  const tPage = await getTranslations('ServiceCategoryPage');
  const tSite = await getTranslations('Site');
  
  const category = getCategoryBySlug(params.categorySlug);
  
  if (!category) {
    notFound();
  }

  const servicesWithContent: ServiceWithContent[] = await Promise.all(
    category.services.map(service => 
      getServiceWithContent(params.locale, category.slug, service.slug)
    )
  ).then(results => results.filter((s): s is ServiceWithContent => s !== undefined));

  const categoryName = tServices(`categories.${category.id}.name`);
  const categoryDescription = tServices(`categories.${category.id}.description`);
  
  const isDental = dentalCategoryIds.includes(category.id);

  return (
    <>
      <PageHeader title={categoryName} description={categoryDescription} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {servicesWithContent.length > 0 ? (
          isDental ? (
            <DentalServiceList services={servicesWithContent} categorySlug={category.slug} />
          ) : (
            <AestheticServiceList services={servicesWithContent} categorySlug={category.slug} />
          )
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            {tPage('noResults', {siteName: tSite('title')})}
          </p>
        )}
      </div>
    </>
  );
}
