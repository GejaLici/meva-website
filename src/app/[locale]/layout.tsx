import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';

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

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
