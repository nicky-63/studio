import PublicLayout from "@/app/(public)/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const careerFields = [
  { name: "Software Engineering", hint: "coding abstract" },
  { name: "Data Science & AI", hint: "data network" },
  { name: "Embedded Systems", hint: "circuit board" },
  { name: "DevOps & Cloud", hint: "cloud computing" },
  { name: "Mechanical Engineering", hint: "gears machine" },
  { name: "Biomedical Engineering", hint: "dna science" },
  { name: "Civil Engineering", hint: "bridge architecture" },
  { name: "Project Management", hint: "team planning" },
];

export default function CareerPage() {
  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Engineering Frontiers
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The world of engineering is vast and ever-evolving. Discover which field is the perfect fit for your skills and passions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careerFields.map((field, index) => (
            <Card key={field.name} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={`https://picsum.photos/seed/career${index}/400/300`}
                  alt={field.name}
                  data-ai-hint={field.hint}
                  width={400}
                  height={300}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{field.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">Ready to find your place in the world of engineering?</p>
          <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/signup">
              Get Your Personalized Recommendations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PublicLayout>
  );
}
