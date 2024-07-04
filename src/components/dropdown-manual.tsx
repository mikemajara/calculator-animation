"use client";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  SquarePlus,
  SquareFunction,
  SquareRadical,
  Calculator,
} from "lucide-react";
import * as Switch from "@radix-ui/react-switch";
import { ReactNode, useReducer, useRef, useState } from "react";
import ButtonCalculator from "./calculator/button-motion";
import { useClickAway } from "react-use";
import { cn } from "@/lib/utils";

const modeIcon = {
  basic: SquarePlus,
  scientific: SquareFunction,
  math: SquareRadical,
};

export default function DropdownManual({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const [mode, setMode] = useState<"basic" | "scientific" | "math">("basic");
  const ButtonIcon = modeIcon[mode];
  return (
    <MotionConfig transition={{ duration: 1, type: "spring", bounce: 0.2 }}>
      <div className="relative">
        <div id="trigger">
          <ButtonCalculator onClick={() => setOpen(true)}>
            <AnimatePresence initial={false}>
              {!isOpen && (
                <motion.div
                  // transition={{ delay: 0.3 }}
                  initial={{ filter: "blur(5px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  exit={{ filter: "blur(5px)", opacity: 0 }}
                >
                  <ButtonIcon strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </ButtonCalculator>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              {/* <motion.div
                className="fixed top-[161px] left-[388px] bg-black/50 w-[280px] h-[436px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              /> */}
              <motion.div
                className="bg-neutral-800 text-white text-sm font-semibold rounded-2xl p-4 grid gap-3 absolute bottom-2 overflow-hidden text-nowrap"
                style={{ borderRadius: "16px" }}
                ref={ref}
                layoutId="modal-container"
              >
                <motion.div
                  className={cn(
                    "group flex gap-2 items-center h-[25px] relative select-none outline-none",
                    { "text-ios-orange-500": mode == "basic" }
                  )}
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  exit={{ y: 40 }}
                >
                  <SquarePlus strokeWidth={1.5} className="w-5" />
                  <p>Basic</p>
                </motion.div>
                <motion.div
                  className={cn(
                    "group flex gap-2 items-center h-[25px] relative select-none outline-none",
                    { "text-ios-orange-500": mode == "scientific" }
                  )}
                  initial={{ y: 70 }}
                  animate={{ y: 0 }}
                  exit={{ y: 70 }}
                >
                  <SquareFunction strokeWidth={1.5} className="w-5" />
                  <p>Scientific</p>
                </motion.div>
                <motion.div
                  className={cn(
                    "group flex gap-2 items-center h-[25px] relative select-none outline-none",
                    { "text-ios-orange-500": mode == "math" }
                  )}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                >
                  <SquareRadical strokeWidth={1.5} className="w-5" />
                  <p>Maths Notes</p>
                </motion.div>
                <motion.div
                  className="-mx-[15%] h-[2px] w-[130%] bg-neutral-900"
                  initial={{ y: 130 }}
                  animate={{ y: 0 }}
                  exit={{ y: 130 }}
                />
                <motion.div
                  className={cn(
                    "group flex gap-2 items-center h-[25px] relative select-none outline-none",
                    { "text-ios-orange-500": mode == "math" }
                  )}
                  initial={{ y: 160 }}
                  animate={{ y: 0 }}
                  exit={{ y: 160 }}
                >
                  <Switch.Root className="w-[42px] h-[25px] bg-neutral-200 rounded-full relative focus:shadow-black data-[state=checked]:bg-ios-orange-500 outline-none cursor-default overflow-hidden">
                    <Switch.Thumb className="block w-[22px] h-[22px] bg-white rounded-full shadow-lg transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                  </Switch.Root>
                  <p>Convert</p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
