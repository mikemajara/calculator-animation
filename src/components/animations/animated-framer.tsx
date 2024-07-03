"use client";

import { cn } from "@/lib/utils";
import { useEffect, useReducer } from "react";
import { motion } from "framer-motion";

export default function AnimatedBall({
  className = "",
  toggleAnimation = false,
  duration,
  bounce,
}) {
  const [clicked, toggleClicked] = useReducer((s) => !s, false);
  useEffect(() => {
    toggleAnimation && toggleClicked();
  });
  return (
    <motion.div
      className={cn(
        "w-4 h-4 bg-yellow-300 rounded-full border border-yellow-400 relative",
        {
          "bg-green-400 border-green-500": clicked,
        },
        className
      )}
      animate={{ x: clicked ? 384 : 0 }}
      transition={{ type: "spring", duration, bounce }}
    />
  );
}
