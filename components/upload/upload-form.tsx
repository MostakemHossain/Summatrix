"use client";
import { toast } from "sonner";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    // upload the file to your server or any other storage service
    // ...

    // clear the form
    e.currentTarget.reset();
  };
  return (
    <div className="flex flex-col max-w-2xl mx-auto w-full gap-8">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
