import { BackButton } from "@/components/shared/BackButton";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight font-headline">Find Courses</h1>
          <p className="text-muted-foreground">
            Discover courses to help you bridge your skill gaps.
          </p>
        </div>
      </div>
       <div className="text-center py-20">
        <p className="text-muted-foreground">Course search and recommendations will be available here.</p>
      </div>
    </div>
  );
}
