"use client";
import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Switch from "@radix-ui/react-switch";
import { SquareFunction, SquarePlus, SquareRadical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const Dropdown = ({ children }: { children: ReactNode }) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      {/* <AnimatePresence> */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          align="start"
          side="top"
          avoidCollisions={false}
          asChild
        >
          <motion.div
            className="min-w-[120px] bg-neutral-700 text-white font-semibold rounded-2xl p-5  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] grid gap-3"
            layoutId="modal-container"
          >
            <DropdownMenu.Item className="group flex gap-2 items-center h-[25px] relative select-none outline-none">
              <SquarePlus strokeWidth={1.5} className="w-5" />
              <p>Basic</p>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group flex gap-2 items-center h-[25px] relative select-none outline-none">
              <SquareFunction strokeWidth={1.5} className="w-5" />
              <p>Scientific</p>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group flex gap-2 items-center h-[25px] relative select-none outline-none">
              <SquareRadical strokeWidth={1.5} className="w-5" />
              <p>Maths Notes</p>
            </DropdownMenu.Item>
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
      {/* </AnimatePresence> */}
    </DropdownMenu.Root>
  );
};

export default Dropdown;
