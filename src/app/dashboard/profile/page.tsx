import { BackButton } from "@/components/shared/BackButton";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight font-headline">Profile & Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences.
          </p>
        </div>
      </div>
       <div className="text-center py-20">
        <p className="text-muted-foreground">User profile and settings will be available here.</p>
      </div>
    </div>
  );
}
