import { Logo } from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden flex-1 flex-col justify-end bg-primary p-10 text-primary-foreground lg:flex">
        <Image
          src="https://picsum.photos/seed/2/1200/1800"
          alt="Modern office"
          data-ai-hint="modern office"
          fill
          className="object-cover"
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo className="mr-2 h-8 w-8 text-primary-foreground" />
          Career Compass
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform gave me the clarity I needed to choose my career path and the roadmap to get there.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis, Software Engineer</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center">
        <Link
          href="/"
          className="absolute left-4 top-4 text-sm font-medium text-muted-foreground hover:text-primary md:left-8 md:top-8"
        >
          &larr; Back to Home
        </Link>
        {children}
      </div>
    </div>
  );
}
