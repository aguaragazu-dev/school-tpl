'use client';
import React, { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

type ImageInputProps = {
  title: string;
  imageUrl: string;
  setImageUrl: any;
  endpoint: any;
  // onUploadComplete: (url: string) => void
};

export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
  // onUploadComplete
}: ImageInputProps)
{
  const [ isUploading, setIsUploading ] = useState(false)
  const { toast } = useToast()

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {imageUrl && (
            <div className="relative w-full h-48 mb-4">
              <Image
                alt={title}
                className="h-40 w-full rounded-md object-cover"
                src={imageUrl}
                height="300"
                width="300"
              />
            </div>
          )}

          <UploadButton
            className="col-span-full"
            endpoint={endpoint}
            onClientUploadComplete={(res) =>
            {
              setIsUploading(false)
              console.log("Files: ", res);
              if (res && res[ 0 ])
              {
                // onUploadComplete(res[0].url)
                setImageUrl(res[ 0 ].url);
                toast({
                  title: "Success",
                  description: "Image uploaded successfully",
                })
              }
            }}
            onUploadError={(error: Error) =>
            {
              setIsUploading(false)
              toast({
                title: "Error",
                description: `ERROR! ${error.message}`,
                variant: "destructive",
              })
              console.log(error)
              alert(`ERROR! ${error.message}`);
            }}
            onUploadBegin={() => {
              setIsUploading(true)
            }}
            appearance={{
              button: {
                background: isUploading ? '#ccc' : '#3b82f6',
              },
              allowedContent: {
                display: 'none',
              },
            }}
            content={{
              button({ ready })
              {
                if (ready) return 'Subir Imagen'
                return 'Getting ready...'
              },
              allowedContent()
              {
                return null
              },
            }}
          />
          {isUploading && <p>Subiendo imagen...</p>}
        </div>
      </CardContent>
    </Card>

  );
}
