
'use client';

import { useState, useEffect } from 'react';
import {
  onSnapshot,
  type DocumentData,
  type Query,
} from 'firebase/firestore';

type DocumentType<T> = T & { id: string };

export function useCollection<T>(
  q: Query<DocumentData> | null
) {
  const [data, setData] = useState<DocumentType<T>[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!q) {
      setLoading(false);
      setData(null);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as DocumentType<T>[];
        setData(docs);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error fetching collection:', err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [q]);

  return { data, loading, error };
}
