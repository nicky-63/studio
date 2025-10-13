"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("h-8 w-8", className)}
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Back</span>
    </Button>
  );
}
