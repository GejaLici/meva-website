
import { PageHeader } from '@/components/shared/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/lib/faq';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'FaqPage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  return {
    title: t('metaTitle', { siteName: tSite('title') }),
    description: t('metaDescription', { siteName: tSite('title') }),
  };
}

export default async function FAQPage() {
  const tSite = await getTranslations('Site');
  const tPage = await getTranslations('FaqPage');
  const tFaq = await getTranslations('FAQ');
  const siteName = tSite('title');

  return (
    <>
      <PageHeader
        title={tPage('title')}
        description={tPage('description')}
      />
      <div className="container mx-auto max-w-screen-md px-4 py-12 sm:px-6 lg:px-8">
        {faqItems.length > 0 ? (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="bg-card p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:no-underline">
                  {tFaq(`${item.id}.question`, { siteName: siteName })}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-muted-foreground">
                  {tFaq.rich(`${item.id}.answer`, { 
                    siteName: siteName,
                    p: (chunks) => <p>{chunks}</p> 
                  })}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            {tPage('noResults')}
          </p>
        )}
      </div>
    </>
  );
}
