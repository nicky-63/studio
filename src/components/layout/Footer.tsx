import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">Career Compass</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your AI-powered guide to a successful engineering career.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-2">
            <div className="grid gap-1">
              <h4 className="font-semibold">Company</h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/career" className="text-sm text-muted-foreground hover:text-primary">Careers</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
            </div>
            <div className="grid gap-1">
              <h4 className="font-semibold">Product</h4>
              {navLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="text-sm text-muted-foreground hover:text-primary">
                    {label}
                </Link>
              ))}
            </div>
            <div className="grid gap-1">
              <h4 className="font-semibold">Legal</h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Career Compass. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
