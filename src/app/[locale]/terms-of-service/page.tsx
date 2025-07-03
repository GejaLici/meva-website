
import { LastUpdatedHeader } from '@/components/shared/LastUpdatedHeader';
import { SITE_DOMAIN } from '@/lib/constants';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'TermsOfServicePage'});
  const tSite = await getTranslations({locale, namespace: 'Site'});
  return {
    title: t('metaTitle', { siteName: tSite('title') }),
    description: t('metaDescription', { siteName: tSite('title') }),
  };
}

export default async function TermsOfServicePage({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations('TermsOfServicePage');
  const tSite = await getTranslations('Site');
  const siteName = tSite('title');

  return (
    <>
      <LastUpdatedHeader
        titleKey="title"
        descriptionKey="lastUpdated"
        namespace="TermsOfServicePage"
      />
      <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8 prose prose-lg text-foreground">
        <h2>{t('h2_1')}</h2>
        <p>{t('p1_1', { siteName, SITE_DOMAIN })}</p>
        <p>{t('p1_2')}</p>
        <p>{t('p1_3')}</p>

        <h2>{t('h2_2')}</h2>
        <p>{t('p2_1')}</p>
        
        <h2>{t('h2_3')}</h2>
        <p>{t('p3_1')}</p>

        <h2>{t('h2_4')}</h2>
        <p>{t('p4_1')}</p>
        <p>{t.rich('p4_2', {
          siteName: siteName,
          a: (chunks) => <a href={`mailto:info@${SITE_DOMAIN}`}>{chunks}</a>,
        })}</p>

        <h2>{t('h2_5')}</h2>
        <p>{t('p5_1')}</p>
        <p>{t('p5_2')}</p>
        <p>{t('p5_3')}</p>
        
        <h2>{t('h2_6')}</h2>
        <p>{t('p6_1')}</p>

        <h2>{t('h2_7')}</h2>
        <p>{t('p7_1')}</p>

        <h2>{t('h2_8')}</h2>
        <p>{t.rich('p8_1', {
          strong: (chunks) => <strong>{chunks}</strong>
        })}</p>
        <p>{t('p8_2')}</p>
        <p>{t('p8_3')}</p>

        <h2>{t('h2_9')}</h2>
        <p>{t('p9_1')}</p>

        <h2>{t('h2_10')}</h2>
        <p>{t('p10_1', { SITE_DOMAIN })}</p>
        <p>{t.rich('p10_2', {
            siteName: siteName,
            br: () => <br />
          })}
        </p>
      </div>
    </>
  );
}
