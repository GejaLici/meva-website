
import { notFound } from 'next/navigation';
import { serviceCategories, getCategoryBySlug } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const tSite = await getTranslations('Site');
  const tPage = await getTranslations('ServiceCategoryPage');
  const tServices = await getTranslations('Services');
  const siteTitle = tSite('title');
  const category = getCategoryBySlug(params.categorySlug);
  
  if (!category) {
    return { 
      title: tPage('categoryNotFoundTitle', {siteTitle}),
      description: tPage('categoryNotFoundDescription', {siteTitle})
    };
  }

  const categoryName = tServices(`categories.${category.id}.name`);
  const categoryDescription = tServices(`categories.${category.id}.description`);

  return {
    title: tPage('metaTitle', { categoryName, siteTitle }),
    description: tPage('metaDescription', { categoryDescription }),
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

  return (
    <>
      <PageHeader title={categoryName} description={categoryDescription} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {category.services.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service) => (
              <ServiceCard key={service.id} service={service} categorySlug={category.slug} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            {tPage('noResults')}
          </p>
        )}
      </div>
    </>
  );
}
