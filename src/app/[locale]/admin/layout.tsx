
'use client';

import React, { useEffect } from 'react';
import { useUser } from '@/firebase';
import { useRouter, usePathname } from '@/navigation';
import { Loader2, Newspaper, Mail, LogOut, LayoutDashboard } from 'lucide-react';
import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/layout/Logo';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/firebase';


function AdminSidebar() {
  const t = useTranslations('AdminNav');
  const pathname = usePathname();
  const { auth } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/admin');
    }
  };

  const navItems = [
    { href: '/admin/dashboard', label: t('dashboard'), icon: LayoutDashboard },
    { href: '/admin/contacts', label: t('contacts'), icon: Mail },
    { href: '/admin/blog', label: t('blog'), icon: Newspaper },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Logo />
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                  pathname.endsWith(item.href) && 'bg-muted text-primary'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            {t('signOut')}
          </Button>
        </div>
      </div>
    </div>
  );
}


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname.endsWith('/admin');

  useEffect(() => {
    // Don't do anything while loading
    if (loading) return;

    // If the user is not logged in and is not on the login page,
    // redirect them to the login page.
    if (!user && !isLoginPage) {
      router.replace('/admin');
    }

    // If the user is logged in and is on the login page,
    // redirect them to the dashboard.
    if (user && isLoginPage) {
      router.replace('/admin/dashboard');
    }
  }, [user, loading, isLoginPage, pathname, router]);


  // While loading, or if a redirect is in progress, show a loader.
  if (loading || (!user && !isLoginPage) || (user && isLoginPage)) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // If the user is logged in and not on the login page, show the admin layout
  if (user && !isLoginPage) {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
          </main>
        </div>
      </div>
    );
  }

  // If there's no user and we are on the login page, render the login page itself.
  if (!user && isLoginPage) {
    return <>{children}</>;
  }

  // As a fallback, show a loader
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}
