
import { notFound } from 'next/navigation';
import { serviceCategories, getCategoryBySlug } from '@/lib/services';
import { PageHeader } from '@/components/shared/PageHeader';
import { ServiceCard } from '@/components/shared/ServiceCard';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

interface CategoryPageProps {
  params: {
    categorySlug: string;
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
      title: `Category Not Found | ${SITE_NAME}`,
      description: `The requested service category could not be found at ${SITE_NAME}.`
    };
  }
  return {
    title: `${category.name} | ${SITE_NAME}`,
    description: category.description,
  };
}

export default function ServiceCategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHeader title={category.name} description={category.description} />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {category.services.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service) => (
              <ServiceCard key={service.id} service={service} categorySlug={category.slug} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            There are no services available in this category at the moment. Please contact ${SITE_NAME} for more details.
          </p>
        )}
      </div>
    </>
  );
}
