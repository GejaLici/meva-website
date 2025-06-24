
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import React from 'react';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { SITE_NAME } from '@/lib/constants';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME}: Premier aesthetic and dental services. Our board-certified specialists offer advanced treatments for transformative results with utmost care and expertise.`,
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
