import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import React from 'react';

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

// The metadata object in a layout applies to its children.
// The metadata object exported from a nested layout will be merged with the metadata object exported from its parent layout.
// So we can set a fallback here.
export const metadata: Metadata = {
  title: 'Meva Clinic',
  description: 'Meva Clinic: Premier aesthetic and dental services.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The lang attribute will be overwritten by the `generateMetadata` function in `[locale]/layout.tsx`.
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
          {children}
          <Toaster />
      </body>
    </html>
  );
}
