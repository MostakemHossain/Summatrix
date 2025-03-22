"use client";
import { toast } from "sonner";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine((file) => file.size <= 20 * 1024 * 1024, "File size exceeds 20MB")
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a pdf"
    ),
});

const UploadForm = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
      toast("File uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading",err);
      toast.error("error occurred while uploading");
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    // validation the fields
    const validationFields = schema.safeParse({ file });
    console.log(validationFields);
    if (!validationFields.success) {
      console.log(
        validationFields?.error.flatten().fieldErrors?.file?.[0] ??
          "Invalid file"
      );
      toast(
        validationFields?.error.flatten().fieldErrors?.file?.[0] ??
          "Invalid file"
      );
      return;
    }
    toast.success("PDF Processing. Hang Tight! Our AI is working on it.");

    // upload the file to uploading
    const res= await startUpload([file]);
    if(!res){
      toast.error("Failed to upload the file");
      return;
    }

  };
  return (
    <div className="flex flex-col max-w-2xl mx-auto w-full gap-8">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
