
import { Link } from 'next-intl/navigation';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/PageHeader';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

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
