import { notFound } from 'next/navigation';
import { serviceCategories, getCategoryBySlug } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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
  const category = getCategoryBySlug(params.categorySlug);
  if (!category) {
    return { 
      title: `Category Not Found | Meva Clinic`,
      description: `The requested service category could not be found at Meva Clinic.`
    };
  }

  const t = await getTranslations({locale: params.locale, namespace: 'Services.categories'});
  const categoryName = t(`${category.id}.name`);
  const categoryDescription = t(`${category.id}.description`);

  return {
    title: `${categoryName} | Meva Clinic`,
    description: categoryDescription,
  };
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.categorySlug);
  const t = useTranslations('Services.categories');

  if (!category) {
    notFound();
  }

  const categoryName = t(`${category.id}.name`);
  const categoryDescription = t(`${category.id}.description`);

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
            There are no services available in this category at the moment. Please contact Meva Clinic for more details.
          </p>
        )}
      </div>
    </>
  );
}

    