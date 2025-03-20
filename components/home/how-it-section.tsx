import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";
import StepItem from "./step-item";

type Steps = {
  icon: ReactNode;
  title: string;
  description: string;
};
const steps: Steps[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    title: "Upload Your PDF",
    description:
      "Drag and drop your PDF file here or click to browse your computer.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    title: "AI Analysis",
    description:
      "Summatrix uses advanced machine learning algorithms to analyze your PDF and extract key information",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    title: "Get Summary",
    description: "Get  your summary in a clean and easy-to-read format.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div
          aria-label="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br  from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%,47.5% 58.3%,45.5% 34.5%,27.5% 76.6%, 0.1% 64.9%, 17.9% 100%,27.6% 76.8%,76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="text-center mb-16">
          <h2 className="uppercase font-bold text-xl mb-4 text-rose-500">
            How it Works
          </h2>
          <h3 className="font-bold max-w-2xl text-3xl mx-auto">
            Transform any pdf into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <div className="relative flex items-stretch">
              <StepItem key={idx} {...step} />
              {idx!==0 && (
                <div className="hidden absolute md:block top-1/2 z-10 transform -translate-y-1/2">
                  <MoveRight
                    size={32}
                    strokeWidth={1}
                    className="text-rose-400"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
