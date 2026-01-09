
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  onSnapshot,
  collection,
  query,
  where,
  limit,
  orderBy,
  startAfter,
  getDocs,
  type Query,
  type DocumentData,
  type QueryConstraint,
  type CollectionReference,
} from 'firebase/firestore';
import { useFirestore } from '../provider';

type DocumentType<T> = T & { id: string };

export function useCollection<T>(
  collectionRef: CollectionReference<DocumentData> | null,
  ...constraints: QueryConstraint[]
) {
  const { db } = useFirestore();
  const [data, setData] = useState<DocumentType<T>[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const queryRef = useRef(collectionRef && query(collectionRef, ...constraints));

  useEffect(() => {
    if (!db || !queryRef.current) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      queryRef.current,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as DocumentType<T>[];
        setData(docs);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching collection:', err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [db]); // Re-run effect if db instance changes

  return { data, loading, error };
}
