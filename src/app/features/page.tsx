import PublicLayout from "@/app/(public)/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, LineChart, ListChecks, MapPin, Search } from "lucide-react";

const featuresList = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Skill Assessment",
    description: "Our dynamic questionnaire, powered by AI, evaluates your technical skills, soft skills, and interests to create a comprehensive, individualized skill profile. Understand what you excel at and where you can grow.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Career Path Recommendation",
    description: "Based on your unique profile, our AI engine suggests a range of suitable engineering career paths, from Data Science to Embedded Systems. Each recommendation comes with details on salary expectations and industry growth.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Skill Gap Analysis",
    description: "We compare your current skillset against the requirements for your desired career. This analysis highlights the specific skills and knowledge you need to acquire, giving you a clear path to your goals.",
  },
  {
    icon: <ListChecks className="h-8 w-8 text-primary" />,
    title: "Personalized Roadmap Generation",
    description: "Receive a custom, step-by-step roadmap to success. Your plan will include recommended courses, relevant certifications, potential side projects, and internship opportunities to bridge your skill gaps.",
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "AI-Powered Course Integration",
    description: "Explore a curated database of courses from platforms like Coursera and Udemy. Our AI uses semantic search to filter and recommend the most relevant courses that align with your skill needs and career ambitions.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Progress Tracking Dashboard",
    description: "Monitor your journey with our intuitive dashboard. Track completed courses, log projects, and visualize your skill growth over time. Stay motivated by seeing how far you've come and what's next on your path.",
  },
];


export default function FeaturesPage() {
  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            A Powerful Toolkit for Your Career
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Career Compass provides everything you need to navigate the complexities of the engineering job market with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
