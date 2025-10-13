import PublicLayout from "@/app/(public)/layout";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function GalleryPage() {
    const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-"));

  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            The World of Engineering
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the innovation, collaboration, and impact that defines the engineering field.
          </p>
        </div>

        <div className="mt-16 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {galleryImages.map((image) => (
                <div key={image.id} className="mb-4 break-inside-avoid">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                data-ai-hint={image.imageHint}
                                width={600}
                                height={400}
                                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </PublicLayout>
  );
}
