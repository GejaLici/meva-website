import React from 'react';

// This root layout is required by the Next.js App Router.
// It renders the children passed from the internationalized layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
