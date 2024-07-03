"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "../ui/button";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "function" | "operation" | "standard";
};

const colors = {
  standard: "color-neutral-800",
  function: "color-neutral-500",
  operation: "color-ios-orange-500",
};
const colorsDegrade = {
  standard: "color-neutral-600",
  function: "color-neutral-400",
  operation: "color-ios-orange-300",
};

export default function ButtonCalculator({
  children,
  type = "standard",
  className = "",
  ...rest
}: Props) {
  return (
    <motion.button
      layoutId="modal-container"
      className={cn(
        "rounded-full bg-neutral-800 text-white flex items-center justify-center text-3xl w-14 h-14 ",
        `bg-neutral-800 transition-colors active:bg-neutral-600 ease-out-quint duration-1000`,
        className
      )}
      style={{
        background: `var(--${colors[type]})`,
        borderRadius: "50px",
      }}
      whileTap={{
        background: `var(--${colorsDegrade[type]})`,
        transition: { type: "spring", duration: 0.1 },
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
