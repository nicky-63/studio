import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, ClipboardList, BookOpen } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Overall Progress</CardDescription>
            <CardTitle className="text-4xl">65%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={65} aria-label="65% complete" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Top Career Match</CardDescription>
            <CardTitle className="text-2xl">Data Scientist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              92% match based on your skills
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Courses in Progress</CardDescription>
            <CardTitle className="text-4xl">3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              2 completed this month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Skills to Develop</CardDescription>
            <CardTitle className="text-4xl">8</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              Focus on Python & SQL
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Here are some suggested actions to keep you moving forward.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-md">
                <ClipboardList className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">Complete Your Assessment</p>
                <p className="text-sm text-muted-foreground">
                  Fine-tune your recommendations by completing the skills assessment.
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="ml-auto">
                <Link href="/dashboard/assessment">
                  Start <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-md">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">Explore Career Paths</p>
                <p className="text-sm text-muted-foreground">
                  Dive into the details of your recommended careers.
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="ml-auto">
                <Link href="/dashboard/recommendations">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-md">
                <BookOpen className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">Find Your Next Course</p>
                <p className="text-sm text-muted-foreground">
                  Browse courses that match your skill gaps and interests.
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="ml-auto">
                <Link href="/dashboard/courses">
                  Browse <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No recent activity.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
