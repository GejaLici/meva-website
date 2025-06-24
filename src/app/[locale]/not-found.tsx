'use client';

import { Link } from 'next-intl/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/PageHeader';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <>
      <PageHeader
        title={t('title')}
        description={t('description')}
      />
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-muted-foreground mb-8">
          {t('suggestion')}
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/">{t('homeButton')}</Link>
        </Button>
      </div>
    </>
  );
}
