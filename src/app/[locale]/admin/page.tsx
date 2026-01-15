
'use client';
import { useUser } from '@/firebase';
import AdminPageClient from './_components/AdminPageClient';
import { Loader2 } from 'lucide-react';

export default function AdminPage() {
  const { user, loading } = useUser();

  // While loading, show a spinner to avoid flashing the login page
  // before the redirect for an authenticated user happens in the layout.
  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // If loading is done and there's no user, show the login form.
  // The redirect for authenticated users is now handled by the layout.
  if (!user) {
    return <AdminPageClient />;
  }

  // If loading is done and there IS a user, the layout will redirect.
  // Return a loader to prevent any flash of content during the redirect.
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}
