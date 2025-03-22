"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UploadFormInput = ({
  onSubmit,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex items-center justify-center gap-1">
        <Input
          type="file"
          name="file"
          id="file"
          accept="application/pdf"
          required
        />
        <Button type="submit" className="bg-rose-600">
          Upload your PDF
        </Button>
      </div>
    </form>
  );
};

export default UploadFormInput;
