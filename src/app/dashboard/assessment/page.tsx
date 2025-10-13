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

export default function AssessmentPage() {
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

      <Card>
        <CardHeader>
          <CardTitle>Part 1: Your Interests & Strengths</CardTitle>
          <CardDescription>Tell us what you enjoy and what you excel at.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="interests">What are your interests? (e.g., AI, robotics, web development)</Label>
            <Input id="interests" placeholder="Enter your interests, separated by commas" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="strengths">What are your biggest strengths? (e.g., problem-solving, coding, design)</Label>
            <Input id="strengths" placeholder="Enter your strengths, separated by commas" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="past-coursework">List some relevant past coursework.</Label>
            <Textarea id="past-coursework" placeholder="e.g., Data Structures and Algorithms, Introduction to Machine Learning" />
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
            <Select>
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
            <Button className="ml-auto bg-accent text-accent-foreground hover:bg-accent/90">Submit Assessment</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
