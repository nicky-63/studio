import PublicLayout from "@/app/(public)/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to help. Whether you have a question about our features or need support, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">123 Innovation Drive, Tech City, 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">hello@careercompass.io</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
