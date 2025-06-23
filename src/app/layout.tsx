
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import React from 'react';
import { SITE_NAME } from '@/lib/constants';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
