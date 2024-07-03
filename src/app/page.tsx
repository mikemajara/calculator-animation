import AnimatedBall from "@/components/calculator/animated-ball";
import ButtonCalculator from "@/components/calculator/button";

import { Calculator, Spline } from "lucide-react";
import Image from "next/image";
import { fileURLToPath } from "url";

// Get the current file URL and convert it to a file path
const __filename = fileURLToPath(import.meta.url);

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 p-24">
      <a href="/calculator" className="flex flex-col items-center">
        <div className="border-[0.5px] rounded-full bg-neutral-800 text-white p-2">
          <Calculator strokeWidth={1.2} />
        </div>
        Calculator
      </a>
      <a href="/animations-css" className="flex flex-col items-center">
        <div className="border-[0.5px] rounded-full bg-neutral-800 text-white p-2">
          <Spline strokeWidth={1.2} />
        </div>
        Animations CSS
      </a>
      <a href="/animations-framer" className="flex flex-col items-center">
        <div className="border-[0.5px] rounded-full bg-neutral-800 text-white p-2">
          <Spline strokeWidth={1.2} />
        </div>
        Animations Framer
      </a>
    </main>
  );
}
