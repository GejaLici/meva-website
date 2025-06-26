import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, locale: string, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  try {
    return new Date(dateString).toLocaleDateString(locale, options || defaultOptions);
  } catch (error) {
    // Fallback for invalid locale or other errors
    return new Date(dateString).toLocaleDateString(undefined, options || defaultOptions);
  }
}
