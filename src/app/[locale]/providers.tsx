
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { FirebaseProvider } from '@/firebase/provider';
import type { AbstractIntlMessages } from 'next-intl';

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <FirebaseProvider>{children}</FirebaseProvider>
    </NextIntlClientProvider>
  );
}
