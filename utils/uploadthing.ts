import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers, generateUploadButton } from "@uploadthing/react";

export const { useUploadThing } = generateReactHelpers<OurFileRouter>();
