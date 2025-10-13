'use client';

import { useEffect, useState } from 'react';
import { BackButton } from '@/components/shared/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { filterCourses } from '@/ai/flows/filter-courses';
import { identifySkillGaps } from '@/ai/flows/identify-skill-gaps';
import { Loader2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { allCourses, Course } from '@/lib/courses';

export default function CoursesPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [initialSkillGaps, setInitialSkillGaps] = useState('');

  useEffect(() => {
    // Automatically identify skill gaps when the page loads
    const fetchSkillGaps = async () => {
      const assessmentData = JSON.parse(localStorage.getItem('assessmentData') || '{}');
      const analysis = JSON.parse(localStorage.getItem('assessmentAnalysis') || '{}');
      const recommendations = JSON.parse(localStorage.getItem('careerRecommendations') || '[]');
      
      if (!analysis.skillAnalysis || recommendations.length === 0) {
        toast({
          variant: 'destructive',
          title: 'Assessment data not found!',
          description: 'Please complete the assessment to get course recommendations.',
        });
        return;
      }
      
      // For simplicity, we'll use the requirements for the top recommended career
      const topCareer = recommendations[0]; 
      // This is a placeholder for actual career requirements. 
      // In a real app, you'd fetch this from a DB.
      const careerPathRequirements = `Skills required for ${topCareer}`;

      try {
        setIsLoading(true);
        const gaps = await identifySkillGaps({
          studentSkills: analysis.skillAnalysis,
          careerPathRequirements: careerPathRequirements,
        });
        const initialSearchTerms = `${gaps.skillGaps}, ${gaps.suggestedActions}`;
        setInitialSkillGaps(initialSearchTerms);
        setKeywords(initialSearchTerms);
        handleFilterCourses(initialSearchTerms); // Automatically trigger search
      } catch (error) {
        console.error('Error identifying skill gaps:', error);
        toast({
          variant: 'destructive',
          title: 'Error identifying skill gaps.',
          description: 'Could not automatically determine skills to search for.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkillGaps();
  }, [toast]);


  const handleFilterCourses = async (searchKeywords: string) => {
    if (!searchKeywords.trim()) {
      toast({
        variant: 'destructive',
        title: 'Keywords required',
        description: 'Please enter some skills or keywords to search for courses.',
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const assessmentData = JSON.parse(localStorage.getItem('assessmentData') || '{}');
      
      const result = await filterCourses({
        skills: assessmentData.strengths || '',
        keywords: searchKeywords,
        courseDescriptions: allCourses.map(c => `${c.title}: ${c.description}`),
      });

      // Filter the original `allCourses` array to find the full course objects
      const matchedCourses = allCourses.filter(course => 
        result.some(filteredDesc => filteredDesc.startsWith(course.title))
      );

      setFilteredCourses(matchedCourses);

      if (matchedCourses.length === 0) {
        toast({
          title: 'No courses found',
          description: 'Try broadening your search terms.',
        });
      }
    } catch (error) {
      console.error('Error filtering courses:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem filtering courses.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterCourses(keywords);
  };


  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight font-headline">Find Courses</h1>
          <p className="text-muted-foreground">
            Discover courses to help you bridge your skill gaps. We've pre-filled this with your identified skill gaps.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Search</CardTitle>
          <CardDescription>Enter skills or topics you want to learn about.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="keywords">Skills / Keywords</Label>
              <Input
                id="keywords"
                placeholder="e.g., Python, Machine Learning, SQL for Data Science"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
               <p className="text-xs text-muted-foreground">
                Based on your assessment, we suggest searching for: <span className="italic">{initialSkillGaps}</span>
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                'Search Courses'
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recommended Courses</h2>
        {isLoading && filteredCourses.length === 0 ? (
           <div className="text-center py-10">
             <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
             <p className="mt-2 text-muted-foreground">Finding the best courses for you...</p>
           </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.provider}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={course.url} target="_blank" rel="noopener noreferrer">
                      View Course <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          !isLoading && (
            <div className="text-center py-20 border rounded-lg">
                <h3 className="text-lg font-semibold">Ready to Learn?</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                    Your personalized course recommendations will appear here once you search. We've suggested some terms based on your assessment to get you started.
                </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
