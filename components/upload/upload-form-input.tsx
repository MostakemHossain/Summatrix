"use client";
import React, { forwardRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface UploadFormInputRef {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading:boolean;
}

const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputRef>(
  ({ onSubmit,isLoading }, ref) => {
    return (
      <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex items-center justify-center gap-1">
          <Input
            type="file"
            name="file"
            id="file"
            accept="application/pdf"
            required
            className={cn(isLoading && "opacity-50 cursor-not-allowed")}
            disabled={isLoading}
          />
          <Button disabled={isLoading} type="submit" className="bg-rose-600">
           {
            isLoading
             ? <>
             <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
             Processing
             </>
              : "Upload PDF"
           }
          </Button>
        </div>
      </form>
    );
  }
);

UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput;
