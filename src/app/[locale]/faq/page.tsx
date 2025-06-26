import { PageHeader } from '@/components/shared/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/lib/faq';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Site'});
  const siteTitle = t('title');
  return {
    title: `Frequently Asked Questions | ${siteTitle}`,
    description: `Find comprehensive answers to common questions about aesthetic procedures, consultations, recovery, and care pathways at ${siteTitle}.`,
  };
}

export default async function FAQPage() {
  const t = await getTranslations('Site');
  const siteTitle = t('title');

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions (FAQ)"
        description={`Find comprehensive answers to frequently asked questions regarding our specialized services, advanced procedures, pre-operative preparation, and post-treatment care at ${siteTitle}.`}
      />
      <div className="container mx-auto max-w-screen-md px-4 py-12 sm:px-6 lg:px-8">
        {faqItems.length > 0 ? (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="bg-card p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:no-underline">
                  {item.question.replace(/Meva Clinic/g, siteTitle)}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-muted-foreground">
                  {item.answer.replace(/Meva Clinic/g, siteTitle)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-lg text-muted-foreground">
            No FAQs are available at the moment. Please contact our clinic directly if you have specific questions.
          </p>
        )}
      </div>
    </>
  );
}
