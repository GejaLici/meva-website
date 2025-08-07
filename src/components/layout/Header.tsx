
'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/navigation';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { serviceCategories } from '@/lib/services';
import { Logo } from './Logo';
import { MobileNav } from './MobileNav';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const currentPathname = usePathname();
  // We need to remove the locale from the pathname to compare
  const pathnameWithoutLocale = currentPathname.replace(/^\/(en|it|sq|de|fr|es)/, '') || '/';
  
  // Also adjust href for comparison if it's not the root
  const adjustedHref = href === '/' ? '/' : href;

  const isActive = pathnameWithoutLocale === adjustedHref || (adjustedHref !== "/" && pathnameWithoutLocale.startsWith(adjustedHref));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium relative transition-colors hover:text-primary py-2",
        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
        isActive ? "text-primary after:w-full" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
};

export function Header() {
  const t = useTranslations('Navigation');
  const tServices = useTranslations('Services');
  const currentPathname = usePathname();
  const pathnameWithoutLocale = currentPathname.replace(/^\/(en|it|sq|de|fr|es)/, '') || '/';
  const isServicesActive = pathnameWithoutLocale.startsWith('/services');

  const aestheticCategories = serviceCategories.filter(cat => ['facial-surgery', 'facial-treatments', 'body-surgical', 'body-non-surgical'].includes(cat.id));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/">{t('home')}</NavLink>
          <NavLink href="/about">{t('about')}</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "text-sm font-medium relative transition-colors hover:text-primary px-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 py-2", 
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  isServicesActive ? "text-primary after:w-full" : "text-foreground/80"
                )}
              >
                {t('services')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-h-[70vh] overflow-y-auto">
              {aestheticCategories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link href={`/services/${category.slug}`}>{tServices(`categories.${category.id}.name`)}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services/dental">{t('dentalServices')}</Link>
              </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem asChild>
                  <Link href="/services">{t('services')}</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink href="/gallery">{t('gallery')}</NavLink>
          <NavLink href="/blog">{t('blog')}</NavLink>
          <NavLink href="/faq">{t('faq')}</NavLink>
          <NavLink href="/ai-advisor">{t('aiAdvisor')}</NavLink>
          <NavLink href="/contact">{t('contact')}</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
