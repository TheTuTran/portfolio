import { CARDS } from "@/config";
import { FC } from "react";

interface CardCounterProps {
  counterValue: number;
}

const CardCounter: FC<CardCounterProps> = ({ counterValue }) => {
  return (
    <section className="fixed bottom-[10px] left-[50%] translate-x-[-50%] text-md mb-[1.5rem] text-white flex gap-[0.4rem] z-5">
      <div>{counterValue}</div>
      <div>—</div>
      <div>{CARDS.length}</div>
    </section>
  );
};

export default CardCounter;
