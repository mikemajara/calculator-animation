"use client";
import AnimatedBall from "@/components/animations/animated-ball";
import { useEffect, useReducer } from "react";

export default function Page() {
  const [clicked, toggleClicked] = useReducer((s) => !s, false);
  useEffect(() => {
    clicked && toggleClicked();
  });
  return (
    <div className="flex flex-col gap-2 p-10 ">
      <button className="border border-black" onClick={toggleClicked}>
        animate
      </button>
      <h1>Control</h1>
      <AnimatedBall toggleAnimation={clicked} />

      <h2 className="font-bold font-xl">In</h2>
      <AnimatedBall toggleAnimation={clicked} className="ease-in-quad" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-cubic" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-quart" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-quint" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-expo" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-circ" />

      <h2 className="font-bold font-xl">Out</h2>
      <AnimatedBall toggleAnimation={clicked} className="ease-out-quad" />
      <AnimatedBall toggleAnimation={clicked} className="ease-out-cubic" />
      <AnimatedBall toggleAnimation={clicked} className="ease-out-quart" />
      <AnimatedBall toggleAnimation={clicked} className="ease-out-quint" />
      <AnimatedBall toggleAnimation={clicked} className="ease-out-expo" />
      <AnimatedBall toggleAnimation={clicked} className="ease-out-circ" />

      <h2 className="font-bold font-xl">In out</h2>
      <AnimatedBall toggleAnimation={clicked} className="ease-in-out-quad" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-out-cubic" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-out-quart" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-out-quint" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-out-expo" />
      <AnimatedBall toggleAnimation={clicked} className="ease-in-out-circ" />
    </div>
  );
}
