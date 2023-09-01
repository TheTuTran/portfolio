"use client";
import { useEffect, useRef, useState } from "react";
import { CARDS } from "../../config";
import CardTrack from "@/components/CardTrack";
import PlusCrosshair from "@/components/PlusCrosshair";
import CardCounter from "@/components/CardCounter";

function Home() {
  const [scroll, setScroll] = useState(-8.5);
  const [imageIndex, setImageIndex] = useState(0);
  const [counterValue, setCounterValue] = useState(imageIndex + 1);
  const [view, setView] = useState("track");
  const trackRef = useRef<HTMLDivElement>(null);
  let content;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      let newScroll = scroll - e.deltaY / 10;
      if (newScroll < -90) newScroll = -90;
      if (newScroll > -8.5) newScroll = -8.5;

      setScroll(newScroll);

      const newIndex = Math.floor((newScroll / -90) * CARDS.length);

      setImageIndex(newIndex);
      setTimeout(() => {
        if (newIndex >= 5) {
          setCounterValue(5);
        } else {
          setCounterValue(newIndex + 1);
        }
      }, 600);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scroll]);

  const handleCardClicked = () => {};

  switch (view) {
    case "track":
      content = (
        <CardTrack scroll={scroll} trackRef={trackRef} setView={setView} />
      );
      break;
    case "about":
      content = <></>;
      break;
    case "tech":
      content = <></>;
      break;
    case "projects":
      content = <></>;
      break;
    case "experience":
      content = <></>;
      break;
    case "contact":
      content = <></>;
      break;
    default:
      content = (
        <CardTrack scroll={scroll} trackRef={trackRef} setView={setView} />
      );
  }

  return (
    <div>
      {content}

      <PlusCrosshair />

      <CardCounter counterValue={counterValue} />
    </div>
  );
}
export default Home;
