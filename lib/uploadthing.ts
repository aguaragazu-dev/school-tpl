import { createUploadthing } from "uploadthing/next";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

export const uploadThing = createUploadthing();
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();