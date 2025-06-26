'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/testimonials';
import { useTranslations } from 'next-intl';

export function TestimonialsSection() {
  const t = useTranslations('HomePage');
  const tTestimonials = useTranslations('Testimonials');
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            {t('testimonialsTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('testimonialsSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 md:p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-3 md:mb-4">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10 mr-3 md:mr-3">
                    <AvatarImage src={testimonial.avatar} alt={tTestimonials(`${testimonial.id}.name`)} data-ai-hint={testimonial.imageHint || 'person portrait'}/>
                    <AvatarFallback>{tTestimonials(`${testimonial.id}.name`).substring(0,1).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary text-xs md:text-sm">{tTestimonials(`${testimonial.id}.name`)}</p>
                    <p className="text-xs text-muted-foreground">{tTestimonials(`${testimonial.id}.treatment`)}</p>
                  </div>
                </div>
                <blockquote className="text-foreground italic border-l-4 border-accent pl-3 md:pl-4 mb-3 md:mb-4 flex-grow text-xs md:text-sm">
                  "{tTestimonials(`${testimonial.id}.quote`)}"
                </blockquote>
                <div className="flex items-center text-yellow-500 mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
