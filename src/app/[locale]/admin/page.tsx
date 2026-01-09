
'use client';

import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@/firebase';
import { useRouter } from '@/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AdminLoginPage() {
  const { user, loading: userLoading } = useUser();
  const { auth } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!userLoading && user) {
      router.replace('/admin/dashboard');
    }
  }, [user, userLoading, router]);

  const handleGoogleSignIn = async () => {
    if (!auth) {
      setError('Firebase Auth is not initialized.');
      return;
    }
    setLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // The useEffect will handle the redirect on successful sign-in
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign-in.');
      setLoading(false);
    }
  };

  if (userLoading || user) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-card p-8 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground">
            Sign in to your account
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={handleGoogleSignIn} className="w-full" disabled={loading || !auth}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg className="mr-2 -ml-1 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 260.8S109.8 8 244 8c73.2 0 136 28.7 183.4 75.2l-67.8 67.8C338.3 124.6 292.7 104 244 104c-82.3 0-149.3 67.1-149.3 149.3s67 149.3 149.3 149.3c96.1 0 133.3-67.4 137-104.5h-137v-83.3h239.1c2.3 12.7 3.9 26.1 3.9 40.8z"></path>
              </svg>
            )}
            Sign in with Google
          </Button>
        </div>
        {error && <p className="text-center text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
