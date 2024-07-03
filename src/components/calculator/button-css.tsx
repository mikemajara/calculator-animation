"use client";
import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import React from "react";

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

// export const ButtonCalculator = React.forwardRef((props, forwardedRef) => (
//   <button {...props} ref={forwardedRef} />
// ));

export const ButtonCalculator = forwardRef(
  (
    { children, type = "standard", className = "", ...rest }: Props,
    fowardedRef
  ) => {
    switch (type) {
      case "function":
        return (
          <motion.button
            ref={fowardedRef}
            className={cn(
              "rounded-full bg-neutral-500 text-white flex items-center justify-center text-3xl w-14 h-14 ",
              `transition-colors active:bg-neutral-400 ease-out-quint duration-500`,
              className
            )}
            {...rest}
          >
            {children}
          </motion.button>
        );
      case "operation":
        return (
          <motion.button
            ref={fowardedRef}
            className={cn(
              "rounded-full bg-ios-orange-500 text-white flex items-center justify-center text-3xl w-14 h-14 ",
              `transition-colors active:bg-ios-orange-300 ease-out-quint duration-500`,
              className
            )}
            {...rest}
          >
            {children}
          </motion.button>
        );
      default:
        return (
          <motion.button
            ref={fowardedRef}
            className={cn(
              "rounded-full bg-neutral-800 text-white flex items-center justify-center text-3xl w-14 h-14 ",
              `bg-neutral-800 transition-colors active:bg-neutral-600 ease-out-quint duration-500`,
              className
            )}
            {...rest}
          >
            {children}
          </motion.button>
        );
    }
  }
);

export const ButtonModal = forwardRef(
  ({ children, className = "", ...rest }: Props, fowardedRef) => {
    return (
      <motion.button
        layoutId="modal-container"
        ref={fowardedRef}
        className={cn(
          "rounded-full bg-neutral-800 text-white flex items-center justify-center text-3xl w-14 h-14 ",
          `bg-neutral-800 transition-colors active:bg-neutral-600 ease-out-quint duration-500`,
          className
        )}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);
ButtonModal.displayName = "ButtonModal";

ButtonCalculator.displayName = "ButtonCalculator";
