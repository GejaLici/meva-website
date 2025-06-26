'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllGalleryItems } from '@/lib/gallery';
import type { GalleryItem as GalleryItemType } from '@/types/gallery';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export function GalleryPreviewSection() {
  const t = useTranslations('HomePage');
  const tGallery = useTranslations('Gallery');
  const tGalleryPage = useTranslations('GalleryPage');
  const galleryPreviewItems = getAllGalleryItems().slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-primary-foreground mb-4">
              <ThumbsUp className="h-8 w-8" />
          </div>
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            {t('galleryTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallerySubtitle')}
          </p>
        </div>
        {galleryPreviewItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryPreviewItems.map((item: GalleryItemType) => (
              <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="font-headline text-xl text-primary text-center">{tGallery(`${item.id}.procedureName`)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">{tGalleryPage('before')}</h3>
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                       <Image
                        src={item.beforeImageUrl}
                        alt={`${tGalleryPage('before')} - ${tGallery(`${item.id}.procedureName`)}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={item.beforeImageHint}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1 text-center">{tGalleryPage('after')}</h3>
                     <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden border">
                        <Image
                          src={item.afterImageUrl}
                          alt={`${tGalleryPage('after')} - ${tGallery(`${item.id}.procedureName`)}`}
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
              {tGalleryPage('noResults')}
           </p>
        )}
        <div className="mt-12 text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/gallery">{t('galleryButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
