import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

const UploadHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 text-center">
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-red-500 to-rose-800 animate-gradient-x group">
        <Badge
          variant={"secondary"}
          className="relative px-6 py-3 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
        >
          <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
          <p className="text-base text-rose-500">AI-Powered Content Creation</p>
        </Badge>
      </div>
      <div className="text-3xl capitalize font-bold tracking-tight text-gay-900 sm:text-4xl">
        {" "}
        <h1 className="font-bold py-6 text-center">
          Start Uploading
          <span className="relative inline-block bg-rose-200/50 rounded-lg px-2 -rotate-2">
            Your PDF's
          </span>
        </h1>
      </div>
      <div className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl">
        <p>Upload Your PDF and let our AI do the magic.✨</p>
      </div>
    </div>
  );
};

export default UploadHeader;
