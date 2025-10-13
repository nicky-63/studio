"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Navigation } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Career Compass
            </span>
          </Link>
          <NavLinks />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-6 w-6" />
                    <span className="font-bold font-headline">Career Compass</span>
                </Link>
                <NavLinks className="flex-col items-start" />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
