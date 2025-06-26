import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { getAllGalleryItems } from '@/lib/gallery';
import type { GalleryItem } from '@/types/gallery';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'GalleryPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = tSite('title');
  return {
    title: t('metaTitle', { siteTitle }),
    description: t('metaDescription', { siteTitle }),
  };
}

export default async function GalleryPage() {
  const items = getAllGalleryItems();
  const tPage = await getTranslations('GalleryPage');
  const tGallery = await getTranslations('Gallery');
  const tSite = await getTranslations('Site');
  const siteTitle = tSite('title');

  return (
    <>
      <PageHeader
        title={tPage('title')}
        description={tPage('description', { siteTitle })}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item: GalleryItem) => (
              <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="font-headline text-xl text-primary text-center">{tGallery(`${item.id}.procedureName`)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">{tPage('before')}</h3>
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                       <Image
                        src={item.beforeImageUrl}
                        alt={`${tPage('before')} - ${tGallery(`${item.id}.procedureName`)}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={item.beforeImageHint}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">{tPage('after')}</h3>
                     <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                        <Image
                          src={item.afterImageUrl}
                          alt={`${tPage('after')} - ${tGallery(`${item.id}.procedureName`)}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          data-ai-hint={item.afterImageHint}
                        />
                    </div>
                  </div>
                  {tGallery.rich(`${item.id}.description`) && (
                    <CardDescription className="text-sm text-muted-foreground mt-2 text-center flex-grow">
                      {tGallery(`${item.id}.description`)}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            {tPage('noResults', { siteTitle })}
          </p>
        )}
      </div>
    </>
  );
}
