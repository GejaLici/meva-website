
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Camera, Upload, ArrowRight, RefreshCw, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { virtualAdvisor, type AdvisorOutput } from '@/ai/flows/advisor-flow';
import { Link } from '@/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function AiAdvisorClient() {
  const t = useTranslations('AiAdvisorPage');
  const tNav = useTranslations('Navigation');
  const { toast } = useToast();

  const [problemDescription, setProblemDescription] = useState('');
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const [advisorResult, setAdvisorResult] = useState<AdvisorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720, facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setHasCameraPermission(true);
    } catch (err) {
      console.error("Camera access denied:", err);
      setHasCameraPermission(false);
      toast({
        variant: 'destructive',
        title: t('cameraErrorTitle'),
        description: t('cameraErrorDescription'),
      });
    }
  }, [t, toast]);

  useEffect(() => {
    if (hasCameraPermission === null) {
        startCamera();
    }
    
    return () => {
      // Stop camera stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [hasCameraPermission, startCamera]);


  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      const dataUri = canvas.toDataURL('image/png');
      setPhotoDataUri(dataUri);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoDataUri(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!photoDataUri || !problemDescription.trim()) {
      toast({
        variant: 'destructive',
        title: t('submissionErrorTitle'),
        description: t('submissionErrorDescription'),
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setAdvisorResult(null);

    try {
      const result = await virtualAdvisor({ photoDataUri, problemDescription });
      setAdvisorResult(result);
    } catch (e: any) {
      console.error(e);
      setError(e.message || t('genericError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPhotoDataUri(null);
    setProblemDescription('');
    setAdvisorResult(null);
    setError(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
    // Re-initialize camera if it was stopped
    if(hasCameraPermission) startCamera();
  };

  const renderPhotoState = () => {
    if (photoDataUri) {
      return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-primary shadow-lg">
          <Image src={photoDataUri} alt={t('photoTakenAlt')} fill style={{ objectFit: 'contain' }} />
        </div>
      );
    }

    return (
       <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
        {hasCameraPermission === null && <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />}
        {hasCameraPermission === true && <video ref={videoRef} className="w-full h-full object-cover rounded-md" autoPlay muted playsInline />}
        {hasCameraPermission === false && (
            <div className="text-center p-4">
                 <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                 <p className="text-muted-foreground">{t('cameraPermissionNeeded')}</p>
            </div>
        )}
       </div>
    );
  };
  
  const renderResult = () => {
    if (isLoading) {
        return (
            <Card className="w-full shadow-2xl animate-pulse">
                <CardHeader>
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <Skeleton className="h-6 w-1/4 mb-2" />
                        <Skeleton className="h-4 w-full mb-4" />
                        <Skeleton className="h-6 w-1/4 mb-2" />
                        <Skeleton className="h-4 w-full" />
                         <Skeleton className="h-4 w-3/4 mt-1" />
                        <Skeleton className="h-10 w-full mt-6" />
                    </div>
                    <div>
                         <Skeleton className="w-full aspect-square rounded-lg" />
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (error) {
        return (
             <Alert variant="destructive">
                <AlertTitle>{t('errorTitle')}</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )
    }

    if (advisorResult) {
        const { recommendation, generatedImageUrl } = advisorResult;
        return (
            <Card className="w-full shadow-2xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl text-primary">{t('resultTitle')}</CardTitle>
                    <CardDescription>{t('resultSubtitle')}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">{t('recommendedProcedure')}</h3>
                            <p className="text-accent font-bold text-xl">{recommendation.procedureName}</p>
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg text-foreground">{t('ourReasoning')}</h3>
                            <p className="text-muted-foreground">{recommendation.reasoning}</p>
                        </div>
                        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href={`/services/${recommendation.categorySlug}/${recommendation.serviceSlug}`}>
                                {tNav('exploreService')} <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-center text-foreground">{t('potentialResult')}</h3>
                         <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                            <Image src={generatedImageUrl} alt={t('generatedImageAlt')} fill style={{ objectFit: 'cover' }} />
                         </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!advisorResult && !isLoading && !error && (
        <Card className="shadow-xl border-accent/50">
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              {renderPhotoState()}
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={capturePhoto} disabled={!hasCameraPermission || !!photoDataUri}>
                  <Camera className="mr-2" /> {t('captureButton')}
                </Button>
                <Button onClick={() => fileInputRef.current?.click()} variant="outline">
                   <Upload className="mr-2" /> {t('uploadButton')}
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">{t('problemLabel')}</h3>
              <Textarea
                placeholder={t('problemPlaceholder')}
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                className="min-h-[150px]"
                disabled={isLoading}
              />
              <Button onClick={handleSubmit} disabled={isLoading || !photoDataUri || !problemDescription} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? <Loader2 className="mr-2 animate-spin" /> : <Wand2 className="mr-2" />}
                {t('submitButton')}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        {renderResult()}
      </div>

       {(advisorResult || error) && (
            <div className="mt-8 text-center">
                <Button onClick={handleReset} variant="outline" size="lg">
                    <RefreshCw className="mr-2" /> {t('tryAgainButton')}
                </Button>
            </div>
        )}
    </div>
  );
}
