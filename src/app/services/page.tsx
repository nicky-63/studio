import PublicLayout from "@/app/(public)/layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const services = [
  "AI-Driven Skill & Interest Profiling",
  "Personalized Career Path Matching",
  "In-Depth Skill Gap Identification",
  "Customized Learning Roadmap Creation",
  "Curated Course & Resource Recommendations",
  "Interactive Progress & Achievement Tracking",
];

export default function ServicesPage() {
  return (
    <PublicLayout>
      <div className="w-full">
        <section className="container mx-auto py-12 px-4 md:py-20 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Our Services
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Career Compass provides a suite of AI-powered services designed to
                guide engineering students from the classroom to a fulfilling career.
                We turn uncertainty into a clear, actionable plan.
              </p>
              <ul className="grid gap-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/signup">Start Your Journey</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/services/600/600"
                alt="Services illustration"
                data-ai-hint="people collaborating"
                width="600"
                height="600"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
