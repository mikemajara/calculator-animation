"use client";

import { cn } from "@/lib/utils";
import { useEffect, useReducer } from "react";

export default function AnimatedBall({
  className = "",
  toggleAnimation = false,
  style = {},
}) {
  const [clicked, toggleClicked] = useReducer((s) => !s, false);
  useEffect(() => {
    toggleAnimation && toggleClicked();
  });
  return (
    <div
      className={cn(
        "w-4 h-4 bg-yellow-300 rounded-full border border-yellow-400 relative transition-all duration-1000",
        {
          "bg-green-400 border-green-500 translate-x-96": clicked,
        },
        className
      )}
      onClick={toggleClicked}
      style={style}
    />
  );
}
