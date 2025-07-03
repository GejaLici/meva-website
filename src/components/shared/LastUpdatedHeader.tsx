'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { formatDate } from '@/lib/utils';
import { PageHeader } from '@/components/shared/PageHeader';

interface LastUpdatedHeaderProps {
  titleKey: string;
  descriptionKey: string;
  namespace: 'PrivacyPolicyPage' | 'TermsOfServicePage';
}

export function LastUpdatedHeader({ titleKey, descriptionKey, namespace }: LastUpdatedHeaderProps) {
  const t = useTranslations(namespace);
  const locale = useLocale();
  const [date, setDate] = useState('');

  useEffect(() => {
    // This runs only on the client, after hydration
    setDate(formatDate(new Date().toISOString(), locale));
  }, [locale]);

  // On the server and initial client render, `date` will be empty.
  // After hydration, `useEffect` runs, `date` is set, and the component re-renders.
  // We render a space as a placeholder to prevent layout shifts.
  const description = date ? t(descriptionKey, { date }) : ' ';

  return <PageHeader title={t(titleKey)} description={description} />;
}
