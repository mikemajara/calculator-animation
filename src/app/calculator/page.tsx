import {
  ButtonCalculator,
  ButtonModal,
} from "@/components/calculator/button-css";
import Dropdown from "@/components/dropdown";
import DropdownManual from "@/components/dropdown-manual";
import { Calculator } from "lucide-react";

export default function CalculatorPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-10 p-24">
      <div className="flex flex-col gap-5 p-4 text-white bg-neutral-900">
        <div className="flex flex-col items-end ">
          <p className="text-neutral-500">85x12</p>
          <p className="text-5xl">1.020</p>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-2">
          <ButtonCalculator type="function" className="bg-neutral-500">
            AC
          </ButtonCalculator>
          <ButtonCalculator
            type="function"
            className="pb-1 text-4xl font-extralight bg-neutral-500"
          >
            =
          </ButtonCalculator>
          <ButtonCalculator
            type="function"
            className="text-3xl font-extralight bg-neutral-500"
          >
            %
          </ButtonCalculator>
          <ButtonCalculator
            className="pb-1 text-4xl font-extralight "
            type="operation"
          >
            ÷
          </ButtonCalculator>
          <ButtonCalculator>7</ButtonCalculator>
          <ButtonCalculator>8</ButtonCalculator>
          <ButtonCalculator>9</ButtonCalculator>
          <ButtonCalculator
            className="pb-1 text-4xl rotate-45 font-extralight "
            type="operation"
          >
            +
          </ButtonCalculator>
          <ButtonCalculator>4</ButtonCalculator>
          <ButtonCalculator>5</ButtonCalculator>
          <ButtonCalculator>6</ButtonCalculator>
          <ButtonCalculator
            className="text-4xl font-extralight "
            type="operation"
          >
            -
          </ButtonCalculator>
          <ButtonCalculator>1</ButtonCalculator>
          <ButtonCalculator>2</ButtonCalculator>
          <ButtonCalculator>3</ButtonCalculator>
          <ButtonCalculator
            className="pb-1 text-4xl font-extralight "
            type="operation"
          >
            +
          </ButtonCalculator>
          <DropdownManual />
          {/* <Dropdown>
            <ButtonModal>
              <Calculator strokeWidth={1.5} />
            </ButtonModal>
          </Dropdown> */}
          <ButtonCalculator>0</ButtonCalculator>
          <ButtonCalculator>,</ButtonCalculator>
          <ButtonCalculator
            className="pb-1 text-4xl font-extralight "
            type="operation"
          >
            =
          </ButtonCalculator>
        </div>
      </div>
    </div>
  );
}
