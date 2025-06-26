'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Images, BookOpen, HelpCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export function InsightsSection() {
  const t = useTranslations('HomePage');
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            {t('insightsTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('insightsSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Images className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-2xl font-bold text-primary">
                {t('insightsGalleryTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center">
              <p className="text-muted-foreground mb-6">
                {t('insightsGalleryDesc')}
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                <Link href="/gallery">{t('insightsGalleryButton')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-2xl font-bold text-primary">
                {t('insightsBlogTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center">
              <p className="text-muted-foreground mb-6">
                {t('insightsBlogDesc')}
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                <Link href="/blog">{t('insightsBlogButton')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <HelpCircle className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-2xl font-bold text-primary">
                {t('insightsFaqTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center">
              <p className="text-muted-foreground mb-6">
                {t('insightsFaqDesc')}
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                <Link href="/faq">{t('insightsFaqButton')}</Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
