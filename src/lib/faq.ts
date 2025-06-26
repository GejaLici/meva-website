export interface FAQItem {
  id: string;
}

// All text content has been moved to the messages/[locale].json files.
// This file now only provides the structure/IDs for the FAQ items.
export const faqItems: FAQItem[] = [
  { id: 'faq-1' },
  { id: 'faq-2' },
  { id: 'faq-3' },
  { id: 'faq-4' },
  { id: 'faq-5' },
];
