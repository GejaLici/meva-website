
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('HomePage');
  return (
    <section className="relative h-[calc(100vh-3rem)] min-h-[450px] md:min-h-[550px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portrait-woman.jpg"
          alt="Modern aesthetic clinic backdrop"
          fill
          priority
          style={{ objectFit: 'cover' }}
          data-ai-hint="modern clinic serene"
          className="filter brightness-50"
        />
      </div>
      <div className="relative z-10 container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 shadow-text">
          {t('heroTitle')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto shadow-text-sm">
          {t('heroSubtitle')}
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground py-3 px-8 text-base">
          <Link href="/services">{t('heroButton')}</Link>
        </Button>
      </div>
    </section>
  );
}
