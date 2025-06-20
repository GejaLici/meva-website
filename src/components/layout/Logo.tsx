
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

const LogoSvg = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Simple M shape for Meva */}
    <path d="M20 80 V 20 L 50 50 L 80 20 V 80 H 65 V 40 L 50 60 L 35 40 V 80 H 20 Z" />
  </svg>
);


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
      <LogoSvg />
      <span className="font-headline text-lg font-semibold">{SITE_NAME}</span>
    </Link>
  );
}
