'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { ServiceImage } from '@/types/services';
import { cn } from '@/lib/utils';

interface ServiceGalleryProps {
  images: ServiceImage[];
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!mainApi) {
        return;
      }
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) {
      return;
    }
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) {
      return;
    }

    onSelect();
    mainApi.on('select', onSelect);
    mainApi.on('reInit', onSelect);

    return () => {
      mainApi.off('select', onSelect);
      mainApi.off('reInit', onSelect);
    };
  }, [mainApi, onSelect]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Carousel setApi={setMainApi} className="w-full relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none">
                <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.url}
                    alt={image.hint}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={image.hint}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>

      <div className="py-2">
        <Carousel
          setApi={setThumbApi}
          opts={{
            align: 'start',
            containScroll: 'keepSnaps',
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                onClick={() => onThumbClick(index)}
                className="basis-1/4 md:basis-1/5 pl-2 cursor-pointer"
              >
                <div className="p-1">
                  <Card
                    className={cn(
                      'overflow-hidden transition-all border-2',
                      selectedIndex === index
                        ? 'border-primary'
                        : 'border-transparent'
                    )}
                  >
                    <CardContent className="relative flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.url}
                        alt={`Thumbnail ${image.hint}`}
                        fill
                        sizes="10vw"
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={image.hint}
                        className={cn(
                          'transition-opacity',
                          selectedIndex !== index && 'opacity-60'
                        )}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}