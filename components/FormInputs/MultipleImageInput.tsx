import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import React from "react";

type ImageInputProps = {
  title: string;
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  endpoint: "categoryImages" | "budgetImages" | "productImages";
};

export default function MultipleImageInput({
  title,
  imageUrls,
  setImageUrls,
  endpoint,
}: ImageInputProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {imageUrls.length > 0 ? (
            <>
              <Image
                alt={title}
                className="h-40 w-full rounded-md object-cover"
                height={300}
                src={imageUrls[0]}
                width={300}
              />
              <div className="grid grid-cols-3 gap-2">
                {imageUrls.map((imageUrl: string, i: number) => (
                  <div key={i}>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height={84}
                      src={imageUrl}
                      width={84}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center p-4 bg-gray-100 rounded-md">
              No hay imágenes cargadas
            </div>
          )}
          <UploadButton
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              if (res) {
                setImageUrls((prev) => [...prev, ...res.map((item) => item.url)]);
              }
            }}
            onUploadError={(error: Error) => {
              console.error("Upload error:", error);
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}