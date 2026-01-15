
import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import '@/app/globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import { locales } from '@/navigation';
import { FirebaseProvider } from '@/firebase/provider';
import { seedExampleBlogPost } from '@/lib/seed';

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

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = t('title');
 
  return {
    title: {
      default: siteTitle,
      template: `%s | ${siteTitle}`,
    },
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale as any)) {
    // This will be caught by the middleware, but as a fallback
    return null;
  }
  
  // NOTE: This is a temporary function to seed the database with an example post.
  // You can safely remove this line after the post has been created.
  await seedExampleBlogPost();

  const messages = useMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <FirebaseProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </FirebaseProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
