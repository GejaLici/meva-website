'use client';

import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@/firebase';
import { useRouter } from '@/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminPageClient() {
  const { user, loading: userLoading } = useUser();
  const { auth } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const t = useTranslations('AdminLogin');

  useEffect(() => {
    // If done loading and a user exists, redirect to dashboard
    if (!userLoading && user) {
      router.replace('/admin/dashboard');
    }
  }, [user, userLoading, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) {
      setError('Firebase Auth is not initialized.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The useEffect will handle the redirect on successful sign-in
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign-in.');
      setLoading(false);
    }
  };

  // While checking user status or if user exists (and redirect is imminent), show loader
  if (userLoading || user) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // If no user, show the login form
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-card p-8 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground">
            {t('title')}
          </h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t('passwordLabel')}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t('passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading || !auth}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? t('submittingButton') : t('submitButton')}
          </Button>
        </form>
        {error && <p className="text-center text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
