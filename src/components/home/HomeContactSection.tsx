'use client';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslations } from 'next-intl';

const ContactForm = dynamic(
  () => import('@/app/[locale]/contact/_components/ContactForm').then((mod) => mod.ContactForm),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    ),
  }
);

export function HomeContactSection() {
  const t = useTranslations('HomePage');
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            {t('contactTitle')}
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
        <div className="bg-card p-8 md:p-10 rounded-lg shadow-2xl text-card-foreground">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
