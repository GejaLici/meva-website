import React from 'react';

// The root layout is a required file that renders its children.
// The actual page structure, including <html> and <body>,
// is defined in the [locale] layout file.
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
