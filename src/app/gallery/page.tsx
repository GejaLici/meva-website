
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { getAllGalleryItems } from '@/lib/gallery';
import type { GalleryItem } from '@/types/gallery';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before & After Gallery',
  description: 'View the stunning transformations achieved by our expert team at NovaSculpt Clinic. See real patient results from various aesthetic and dental procedures.',
};

export default function GalleryPage() {
  const items = getAllGalleryItems();

  return (
    <>
      <PageHeader
        title="Before & After Gallery"
        description="Witness the transformative power of our aesthetic and dental expertise. Explore real patient results."
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
                        layout="fill"
                        objectFit="cover"
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
                          layout="fill"
                          objectFit="cover"
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
            Our gallery is currently being updated. Please check back soon to see amazing transformations!
          </p>
        )}
      </div>
    </>
  );
}
