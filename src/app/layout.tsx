
import React from 'react';

// This layout is required for the root not-found.js page to work.
// It is intentionally minimal as the main layout is in `[locale]/layout.tsx`.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
