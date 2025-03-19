import { ArrowRight, Sparkle } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 sm:py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto text-center">
      <div className="flex justify-center">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-3 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-all duration-300 hover:bg-rose-200 flex items-center gap-2"
          >
            <Sparkle className="h-6 w-6 text-rose-600 animate-pulse" />
            <span className="text-rose-600">Powered by AI</span>
          </Badge>
        </div>
      </div>

      <h1 className="font-bold py-6 text-center">
        Transform PDFs into
        <span className="relative inline-block bg-rose-200/50 rounded-lg px-2 -rotate-2">
          concise
        </span>
        summaries
      </h1>

      {/* Subheading */}
      <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mt-4">
        Get a beautiful summary reel of the document in seconds.
      </h2>

      {/* CTA Button */}
      <div className="mt-8 lg:mt-12">
        <Link href={"/#pricing"}>
          <Button
            variant={"link"}
            className="text-white text-lg sm:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full bg-gradient-to-r from-slate-900 to-rose-500 
            
            hover:from-rose-500 hover:to-slate-900 
            hover:no-underline
            font-bold shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <span>Try Summatrix</span>
            <ArrowRight className="animate-pulse h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
