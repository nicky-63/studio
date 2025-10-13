import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  Lightbulb,
  LineChart,
  ListChecks,
  Map,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PublicLayout from './(public)/layout';

const features = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Skill Assessment',
    description: 'Pinpoint your strengths and interests with our dynamic questionnaire.',
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: 'Career Recommendation',
    description: 'Discover career paths that align with your unique skill profile.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'Skill Gap Analysis',
    description: 'Identify the exact skills you need to land your dream job.',
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: 'Personalized Roadmap',
    description: 'Get a step-by-step guide with courses and projects to follow.',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Take the Assessment',
    description: 'Answer our AI-powered questionnaire to build your skill and interest profile.',
  },
  {
    step: 2,
    title: 'Explore Careers',
    description: 'Receive a curated list of engineering careers that match your profile.',
  },
  {
    step: 3,
    title: 'Follow Your Roadmap',
    description: 'Bridge skill gaps with a personalized plan of courses, projects, and internships.',
  },
  {
    step: 4,
    title: 'Achieve Your Goals',
    description: 'Track your progress and watch your career aspirations turn into reality.',
  },
];

export default function Home() {
  return (
    <PublicLayout>
      <div className="flex flex-col">
        <main className="flex-1">
          <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Navigate Your Engineering Career Path
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Career Compass uses AI to assess your skills and interests,
                      recommending personalized career paths and roadmaps for
                      success.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="/signup">Find Your Path</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/features">Learn More</Link>
                    </Button>
                  </div>
                </div>
                <Image
                  src="https://picsum.photos/seed/1/600/600"
                  data-ai-hint="abstract geometric"
                  alt="Hero"
                  width={600}
                  height={600}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>

          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                    Key Features
                  </div>
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                    Your Personal Career Co-pilot
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide the tools and insights you need to make informed
                    decisions about your future in engineering.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
                {features.map((feature) => (
                  <div key={feature.title} className="grid gap-1 text-center">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Four simple steps to launch your engineering career.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-12">
                {howItWorks.map(item => (
                   <div key={item.step} className="flex items-start gap-4">
                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl">
                       {item.step}
                     </div>
                     <div className="grid gap-1">
                       <h3 className="text-lg font-bold">{item.title}</h3>
                       <p className="text-sm text-muted-foreground">{item.description}</p>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Chart Your Course?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Career Compass today and take the first step towards a
                  fulfilling engineering career.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/signup">Get Started Now</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PublicLayout>
  );
}
