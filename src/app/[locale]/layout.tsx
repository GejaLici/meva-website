
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import React from 'react';
import {NextIntlClientProvider, useMessages} from 'next-intl';

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
