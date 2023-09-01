import { CARDS } from "@/config";
import Card from "./Card";
import { FC, RefObject } from "react";

interface CardTrackProps {
  scroll: number;
  trackRef: RefObject<HTMLDivElement>;
  setView: (view: string) => void;
}

const CardTrack: FC<CardTrackProps> = ({ scroll, trackRef, setView }) => {
  return (
    <section
      className="absolute left-[50%] top-[50%]"
      ref={trackRef}
      style={{
        transform: `translate(${scroll}%, -50%)`,
        transition: "transform 1s ease-out",
      }}
    >
      <div className="flex gap-5">
        {CARDS.map((card, index) => (
          <Card
            src={card.image}
            text={card.text}
            destination={card.destination}
            indx={index}
            scroll={scroll}
            setView={setView}
          />
        ))}
      </div>
    </section>
  );
};

export default CardTrack;
