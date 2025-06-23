import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import React from 'react';

export async function generateMetadata({params: {locale}} : {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Site'});
 
  return {
    title: {
      default: t('name'),
      template: `%s | ${t('name')}`,
    },
    description: `${t('name')}: Premier aesthetic and dental services. Our board-certified specialists offer advanced treatments for transformative results with utmost care and expertise.`,
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  // The <html> and <body> tags are now in the root layout at `src/app/layout.tsx`.
  // This layout just provides the internationalization context and page structure.
  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
