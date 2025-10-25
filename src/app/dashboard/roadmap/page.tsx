
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { generateRoadmap, type GenerateRoadmapOutput } from '@/ai/flows/generate-roadmaps';
import { Loader2, Map, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type RoadmapSection = GenerateRoadmapOutput['roadmap'][number];

function RoadmapGenerator() {
  const searchParams = useSearchParams();
  const career = searchParams.get('career');
  const [roadmap, setRoadmap] = useState<RoadmapSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!career) {
      setError('No career path selected.');
      setLoading(false);
      return;
    }

    const generate = async () => {
      try {
        const assessmentDataStr = localStorage.getItem('assessmentData');
        const analysisStr = localStorage.getItem('assessmentAnalysis');

        if (!assessmentDataStr || !analysisStr) {
          setError('Assessment data not found. Please complete the assessment first.');
          setLoading(false);
          return;
        }

        const assessmentData = JSON.parse(assessmentDataStr);
        const analysis = JSON.parse(analysisStr);

        if (!assessmentData.interests || !analysis.skillAnalysis) {
          setError('Incomplete assessment data. Please complete the assessment first.');
          setLoading(false);
          return;
        }

        const input = {
          careerPath: career,
          studentSkills: analysis.skillAnalysis,
          requiredSkills: 'Varies by path, AI should determine', // Let AI infer this
          interests: assessmentData.interests,
        };
        const result = await generateRoadmap(input);
        setRoadmap(result.roadmap);
      } catch (e) {
        console.error('Error generating roadmap:', e);
        setError('Failed to generate your personalized roadmap. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    generate();
  }, [career]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg text-muted-foreground">
          Generating your personalized roadmap for a career in {career}...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-6">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error}
          {error.includes('Assessment data not found') && (
            <Button asChild variant="link" className="p-0 h-auto mt-2">
              <Link href="/dashboard/assessment">Go to Assessment</Link>
            </Button>
          )}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight font-headline">
            Personalized Roadmap{career ? `: ${career}` : ''}
          </h1>
          <p className="text-muted-foreground">
            Your step-by-step guide to achieving your career goals.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        {roadmap.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 font-headline">
                <Map className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
      <RoadmapGenerator />
    </Suspense>
  );
}
