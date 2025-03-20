import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type PricingCardProps = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string | number;
  paymentLink: string;
  priceId: string;
};

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PricingCardProps) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 hover:transition-colors duration-300">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl",
          id === "pro" && "border-rose-500 gap-5 border-2"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="mt-2 text-base-content/80">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold"> USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>
        <div className="space-y-2.5 leading-relaxed text-base flex-1">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {items.map((item, index) => (
              <li className="flex items-center gap-2" key={index}>
                <CheckIcon size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 flex justify-center w-full">
          <Link
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2",
              id === "pro"
                ? "border-rose-900"
                : "border-rose-100 from-rose-400 to-rose-500"
            )}
            href={paymentLink}
          >
            Buy Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
