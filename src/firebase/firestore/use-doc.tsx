
'use client';

import { useState, useEffect } from 'react';
import {
  onSnapshot,
  doc,
  type DocumentReference,
  type DocumentData,
} from 'firebase/firestore';
import { useFirestore } from '../provider';

type DocumentType<T> = T & { id: string };

export function useDoc<T>(
  docRef: DocumentReference<DocumentData> | null
) {
  const { db } = useFirestore();
  const [data, setData] = useState<DocumentType<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!db || !docRef) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          setData({ id: doc.id, ...doc.data() } as DocumentType<T>);
        } else {
          setData(null);
        }
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching document:', err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [db, docRef]);

  return { data, loading, error };
}
