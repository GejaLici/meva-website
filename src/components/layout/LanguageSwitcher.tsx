'use client';

import { usePathname, useRouter, locales as supportedLocales } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { Languages } from 'lucide-react';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = supportedLocales.map((code) => ({
    code: code,
    name: t(code as any),
  }));

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <Languages className="h-5 w-5" />
          <span className="sr-only">{t('changeLanguage')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => handleLocaleChange(l.code)}
            disabled={locale === l.code || isPending}
          >
            {l.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
