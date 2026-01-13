
'use client';
import { useEffect } from 'react';
import { useRouter } from '@/navigation';
import { useUser } from '@/firebase';
import AdminPageClient from './_components/AdminPageClient';

export default function AdminPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If loading is finished and we have a user, redirect to the dashboard.
    if (!loading && user) {
      router.replace('/admin/dashboard');
    }
  }, [user, loading, router]);

  // While loading or if user is found (and redirect is imminent),
  // we can show nothing or a loader to prevent the login form from flashing.
  if (loading || user) {
    return null; // Or a loader component
  }

  // Only show the login page if loading is done and there's no user.
  return <AdminPageClient />;
}
