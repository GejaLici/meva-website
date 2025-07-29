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
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const locales = supportedLocales.map((code) => ({
    code: code,
    name: t(code as any),
  }));

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      // The params object can be deeply nested and may contain non-serializable values
      // in some Next.js versions. We ensure it's a flat, clean object.
      const sanitizedParams = JSON.parse(JSON.stringify(params));
      router.replace(
        // @ts-expect-error -- The type of `pathname` is too broad for the compiler to match.
        { pathname, params: sanitizedParams },
        { locale: nextLocale }
      );
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
