"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { BackButton } from "@/components/shared/BackButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const careerHints: { [key: string]: string } = {
  "Software Engineering": "coding abstract",
  "Data Science & AI": "data network",
  "Embedded Systems": "circuit board",
  "DevOps & Cloud": "cloud computing",
  "Mechanical Engineering": "gears machine",
  "Biomedical Engineering": "dna science",
  "Civil Engineering": "bridge architecture",
  "Project Management": "team planning",
};

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRecs = localStorage.getItem("careerRecommendations");
    if (storedRecs) {
      setRecommendations(JSON.parse(storedRecs));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <BackButton />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight font-headline">Career Recommendations</h1>
            <p className="text-muted-foreground">
              Based on your assessment, here are some career paths that might be a great fit for you.
            </p>
          </div>
        </div>
        <div className="text-center py-20">
          <p className="text-muted-foreground">Loading your recommendations...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight font-headline">Career Recommendations</h1>
          <p className="text-muted-foreground">
            Based on your assessment, here are some career paths that might be a great fit for you.
          </p>
        </div>
      </div>

      {recommendations.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((career, index) => (
            <Card key={career} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-muted p-3 rounded-md">
                  <Briefcase className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle>{career}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                 <Image
                  src={`https://picsum.photos/seed/rec${index}/400/250`}
                  alt={career}
                  data-ai-hint={careerHints[career] || 'abstract concept'}
                  width={400}
                  height={250}
                  className="rounded-md object-cover"
                />
                <CardDescription className="mt-4">
                  Explore the opportunities and requirements for a career in {career.toLowerCase()}.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/dashboard/roadmap">
                    View Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border rounded-lg">
          <h3 className="text-lg font-semibold">No recommendations found.</h3>
          <p className="text-muted-foreground mt-2">
            Please complete the skill assessment to get your personalized career recommendations.
          </p>
          <Button asChild className="mt-4">
            <Link href="/dashboard/assessment">Take Assessment</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
