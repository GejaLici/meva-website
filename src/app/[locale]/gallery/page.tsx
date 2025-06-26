import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { getAllGalleryItems } from '@/lib/gallery';
import type { GalleryItem } from '@/types/gallery';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = t('title');
  return {
    title: `Before & After Patient Gallery | ${siteTitle}`,
    description: `View the remarkable transformations achieved by our expert medical team at ${siteTitle}. Explore real patient results from our advanced aesthetic and dental procedures.`,
  };
}

export default async function GalleryPage() {
  const items = getAllGalleryItems();
  const t = await getTranslations('Site');
  const siteTitle = t('title');

  return (
    <>
      <PageHeader
        title="Patient Before & After Gallery"
        description={`Witness the transformative power of our advanced aesthetic and dental expertise. Explore real patient results achieved at ${siteTitle}.`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item: GalleryItem) => (
              <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="font-headline text-xl text-primary text-center">{item.procedureName}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">BEFORE</h3>
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                       <Image
                        src={item.beforeImageUrl}
                        alt={`Before - ${item.procedureName}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={item.beforeImageHint}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">AFTER</h3>
                     <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                        <Image
                          src={item.afterImageUrl}
                          alt={`After - ${item.procedureName}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          data-ai-hint={item.afterImageHint}
                        />
                    </div>
                  </div>
                  {item.description && (
                    <CardDescription className="text-sm text-muted-foreground mt-2 text-center flex-grow">
                      {item.description}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            Our patient gallery is currently being updated with new transformations. Please check back soon to see the exceptional results achieved by our specialists at {siteTitle}.
          </p>
        )}
      </div>
    </>
  );
}
