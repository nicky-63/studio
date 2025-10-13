"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { analyzeSkills } from "@/ai/flows/analyze-skills";
import { matchCareerPaths } from "@/ai/flows/match-career-paths";
import { Loader2 } from "lucide-react";

export default function AssessmentPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [interests, setInterests] = useState("");
  const [strengths, setStrengths] = useState("");
  const [pastCoursework, setPastCoursework] = useState("");
  const [preferredIndustries, setPreferredIndustries] = useState("");
  const [softSkills, setSoftSkills] = useState(""); // Assuming you might add this field later

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const assessmentData = {
        interests,
        strengths,
        pastCoursework,
        preferredIndustries,
        softSkills: softSkills || 'Communication, Teamwork, Problem Solving', // Default value if not collected
      };
      
      const [analysis, matches] = await Promise.all([
        analyzeSkills(assessmentData),
        matchCareerPaths(assessmentData),
      ]);

      localStorage.setItem('assessmentAnalysis', JSON.stringify(analysis));
      localStorage.setItem('careerRecommendations', JSON.stringify(matches.careerPaths));

      toast({
        title: "Assessment Submitted!",
        description: "We're generating your personalized recommendations.",
      });
      router.push("/dashboard/recommendations");
    } catch (error) {
      console.error("Error submitting assessment:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem submitting your assessment.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight font-headline">Skill Assessment</h1>
          <p className="text-muted-foreground">
            Help us understand your strengths and interests to build your personalized career roadmap.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Part 1: Your Interests & Strengths</CardTitle>
              <CardDescription>Tell us what you enjoy and what you excel at.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="interests">What are your interests? (e.g., AI, robotics, web development)</Label>
                <Input
                  id="interests"
                  placeholder="Enter your interests, separated by commas"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="strengths">What are your biggest strengths? (e.g., problem-solving, coding, design)</Label>
                <Input
                  id="strengths"
                  placeholder="Enter your strengths, separated by commas"
                  value={strengths}
                  onChange={(e) => setStrengths(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="past-coursework">List some relevant past coursework.</Label>
                <Textarea
                  id="past-coursework"
                  placeholder="e.g., Data Structures and Algorithms, Introduction to Machine Learning"
                  value={pastCoursework}
                  onChange={(e) => setPastCoursework(e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Part 2: Career Preferences</CardTitle>
              <CardDescription>Let us know what you're looking for in a career.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Which industries are you most interested in?</Label>
                <Select onValueChange={setPreferredIndustries} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Software & Tech</SelectItem>
                    <SelectItem value="finance">Finance & Fintech</SelectItem>
                    <SelectItem value="healthcare">Healthcare & Biotech</SelectItem>
                    <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                    <SelectItem value="energy">Energy & Renewables</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>How would you rate your interest in the following domains?</Label>
                <div className="space-y-2">
                  <Label className="font-normal">Software Development</Label>
                  <RadioGroup defaultValue="3" className="flex">
                    {[1, 2, 3, 4, 5].map(v => (
                      <div key={v} className="flex items-center space-x-2">
                        <RadioGroupItem value={v.toString()} id={`software-${v}`} />
                        <Label htmlFor={`software-${v}`}>{v}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label className="font-normal">Hardware & Electronics</Label>
                  <RadioGroup defaultValue="3" className="flex">
                    {[1, 2, 3, 4, 5].map(v => (
                      <div key={v} className="flex items-center space-x-2">
                        <RadioGroupItem value={v.toString()} id={`hardware-${v}`} />
                        <Label htmlFor={`hardware-${v}`}>{v}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="text-xs text-muted-foreground flex justify-between">
                  <span>(1 = Not interested)</span>
                  <span>(5 = Very interested)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="ml-auto bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Analyzing..." : "Submit Assessment"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}
