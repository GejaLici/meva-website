'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { recommendServices, type ServiceRecommenderOutput } from '@/ai/flows/service-recommender-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Link } from '@/navigation';

export function ServiceRecommender() {
  const t = useTranslations('ServiceRecommender');
  const tServices = useTranslations('Services');
  const tNav = useTranslations('Navigation');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ServiceRecommenderOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await recommendServices({ query });
      setResult(response);
    } catch (e) {
      console.error(e);
      setError(t('error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl border-accent/50">
      <CardHeader className="text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Sparkles className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder={t('placeholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px]"
            disabled={isLoading}
          />
          <Button onClick={handleSubmit} disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('buttonLoadingText')}
              </>
            ) : (
              t('buttonText')
            )}
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertTitle>{t('errorTitle')}</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <div className="mt-8">
            <h3 className="text-xl font-headline font-semibold mb-4 text-center">{t('resultsTitle')}</h3>
            {result.recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.recommendations.map((rec) => (
                  <Card key={rec.serviceId} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg">{tServices(`items.${rec.serviceId}.name`)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{rec.reasoning}</p>
                       <Button asChild size="sm" className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <Link href={`/services/${rec.categorySlug}/${rec.serviceSlug}`}>
                            {tNav('exploreService')} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">{t('noResults')}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
