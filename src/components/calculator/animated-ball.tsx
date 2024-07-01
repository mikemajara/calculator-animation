"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useReducer } from "react";

export default function AnimatedBall() {
  const [clicked, toggleClicked] = useReducer((s) => !s, false);
  return (
    <div
      className={clsx(
        "w-4 h-4 bg-yellow-300 rounded-full border border-yellow-400 relative inset-0 translate-x-32 ease-[--ease-in-out-quad] transition-all",
        {
          "bg-green-400 border-green-500 -translate-x-32": clicked,
        }
      )}
      onClick={toggleClicked}
    />
  );
}
