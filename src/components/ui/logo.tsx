import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6 text-primary", className)}
    >
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8C20 17.5 12 22 12 22Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="m13.41 10.59-1.82 1.82" />
      <path d="m10.59 13.41 1.82-1.82" />
      <path d="m14.12 12 1.88 2.12" />
      <path d="m7.99 9.88 1.89-2.13" />
    </svg>
  );
}
