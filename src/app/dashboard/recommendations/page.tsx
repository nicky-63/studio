import { BackButton } from "@/components/shared/BackButton";

export default function RecommendationsPage() {
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
        <p className="text-muted-foreground">Career recommendations will be displayed here.</p>
      </div>
    </div>
  );
}
