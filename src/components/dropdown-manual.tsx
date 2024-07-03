"use client";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  SquarePlus,
  SquareFunction,
  SquareRadical,
  Calculator,
} from "lucide-react";
import { ReactNode, useReducer, useRef } from "react";
import ButtonCalculator from "./calculator/button-motion";
import { useClickAway } from "react-use";

export default function DropdownManual({ children }: { children: ReactNode }) {
  const [isOpen, toggleOpen] = useReducer((s) => !s, false);
  const ref = useRef(null);
  useClickAway(ref, toggleOpen);

  return (
    <MotionConfig transition={{ duration: 2.5, type: "spring", bounce: 0.1 }}>
      <div className="relative">
        <div id="trigger">
          <ButtonCalculator onClick={toggleOpen}>
            <Calculator strokeWidth={1.5} />
          </ButtonCalculator>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="min-w-[184px] bg-neutral-700 text-white font-semibold rounded-2xl p-5  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] grid gap-3 absolute -top-[84px]"
              style={{ borderRadius: "16px" }}
              ref={ref}
              layoutId="modal-container"
            >
              <motion.div
                className="group flex gap-2 items-center h-[25px] relative select-none outline-none"
                initial={{ y: 100, filter: "blur(5px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                exit={{ y: 100, filter: "blur(5px)" }}
              >
                <SquarePlus strokeWidth={1.5} className="w-5" />
                <p>Basic</p>
              </motion.div>
              <motion.div className="group flex gap-2 items-center h-[25px] relative select-none outline-none">
                <SquareFunction strokeWidth={1.5} className="w-5" />
                <p>Scientific</p>
              </motion.div>
              <motion.div className="group flex gap-2 items-center h-[25px] relative select-none outline-none">
                <SquareRadical strokeWidth={1.5} className="w-5" />
                <p>Maths Notes</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
