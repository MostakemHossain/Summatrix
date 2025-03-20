import PricingCard from "./pricing-card";
type PricingCardProps = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: number | string;
  paymentLink: string;
  priceId: string;
};
const plans: PricingCardProps[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Basic price for basic features",
    items: [
      "% PDF summaries per month",
      "100% PDF summaries per month",
      "Unlimited PDF uploads",
      "Customizable summary settings",
      "100% accurate summary results",
      "No ads or tracking",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "Pro price for advanced features",
    items: [
      "100% PDF summaries per month",
      "Unlimited PDF summaries per month",
      "Unlimited PDF uploads",
      "Customizable summary settings",
      "100% accurate summary results",
      "Ad-free usage",
      "Email support",
    ],
    paymentLink: "",
    priceId: "",
  },
];

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase font-bold text-xl mb-8 text-rose-500">
            Pricing
          </h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
