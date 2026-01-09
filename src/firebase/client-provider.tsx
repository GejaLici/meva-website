
'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

/**
 * Use this provider to compose the FirebaseProvider and ensure Firebase
 * is initialized only once on the client.
 */
export function FirebaseClientProvider({
  children,
}: FirebaseClientProviderProps) {
  const [firebase, setFirebase] = useState<ReturnType<
    typeof initializeFirebase
  > | null>(null);

  useEffect(() => {
    const firebaseInstances = initializeFirebase();
    setFirebase(firebaseInstances);
  }, []);

  if (!firebase) {
    // You can return a loader here
    return null;
  }

  return <FirebaseProvider {...firebase}>{children}</FirebaseProvider>;
}
