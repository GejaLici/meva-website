'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Logo() {
  const t = useTranslations('Site');
  const siteTitle = t('title');

  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
      aria-label={siteTitle}
    >
      <Image
        src="/images/logo1.png"
        alt={siteTitle}
        width={90}
        height={23}
        priority
      />
    </Link>
  );
}
