'use client';

import { useState, useEffect } from 'react';
import {
  onSnapshot,
  query,
  type DocumentData,
  type QueryConstraint,
  type CollectionReference,
} from 'firebase/firestore';

type DocumentType<T> = T & { id: string };

export function useCollection<T>(
  collectionRef: CollectionReference<DocumentData> | null,
  ...constraints: QueryConstraint[]
) {
  const [data, setData] = useState<DocumentType<T>[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!collectionRef) {
      setLoading(false);
      setData(null);
      return;
    }

    setLoading(true);

    const q = query(collectionRef, ...constraints);
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
  }, [collectionRef]); // collectionRef is now a dependency

  return { data, loading, error };
}
