import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

const LogoSvg = () => (
  <svg 
    width="36" 
    height="36" 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20 80L50 20L80 80L65 80L50 50L35 80L20 80Z" />
    <path d="M50 20L60 40H40L50 20Z" opacity="0.7"/>
  </svg>
);


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
      <LogoSvg />
      <span className="font-headline text-xl font-semibold">{SITE_NAME}</span>
    </Link>
  );
}
