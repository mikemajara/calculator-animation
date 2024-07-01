"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "function" | "operation" | "standard";
};

const colors = {
  standard: "neutral-800",
  function: "neutral-500",
  operation: "ios-orange-500",
};
const colorsDegrade = {
  standard: "neutral-600",
  function: "neutral-400",
  operation: "ios-orange-300",
};

export default function ButtonCalculator({
  children,
  type = "standard",
  className = "",
}: Props) {
  return (
    <motion.button
      className={cn(
        "rounded-full bg-neutral-800 text-white flex items-center justify-center text-3xl w-14 h-14 ",
        `bg-neutral-800 transition active:bg-neutral-600 ease-[cubic-bezier(0,1,0.5,1)]`,
        className
      )}
      style={{
        background: `var(--${colors[type]})`,
      }}
      whileTap={{
        background: `var(--${colorsDegrade[type]})`,
        transition: { type: "spring", duration: 0.1 },
      }}
    >
      {children}
    </motion.button>
  );
}
