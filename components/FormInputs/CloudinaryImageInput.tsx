"use client"

import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

type CloudinaryImageInputProps = {
  title: string;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  setImagePublicUrl: (url: string) => void;
  setFileSize: (size: number) => void;
};

export default function CloudinaryImageInput({
  title,
  imageUrl,
  setImageUrl,
  setImagePublicUrl,
  setFileSize,
}: CloudinaryImageInputProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleUploadSuccess = (result: any) => {
    setIsUploading(false);
    setImageUrl(result.info.url);
    setImagePublicUrl(result.info.secure_url);
    setFileSize(result.info.bytes);
    toast({
      title: "Success",
      description: "Image uploaded successfully",
    });
  };

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
                height="300"
                src={imageUrl}
                width="300"
              />
            </div>
          )}

          <CldUploadWidget
            uploadPreset="your_upload_preset"
            onUpload={(error, result, widget) => {
              if (error) {
                setIsUploading(false);
                toast({
                  title: "Error",
                  description: `ERROR! ${error.message}`,
                  variant: "destructive",
                });
                console.log(error);
              }
              if (result && "info" in result) {
                handleUploadSuccess(result);
              }
            }}
            options={{
              maxFiles: 1,
              resourceType: "image",
            }}
          >
            {({ open }) => (
              <Button
                onClick={() => {
                  setIsUploading(true);
                  open();
                }}
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Upload Image"}
              </Button>
            )}
          </CldUploadWidget>
          {isUploading && <p>Uploading image...</p>}
        </div>
      </CardContent>
    </Card>
  );
}