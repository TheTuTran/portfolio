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
  const trackRef = useRef<HTMLDivElement>(null);

  // States for mouse drag functionality
  // States for mouse drag functionality
  const [mouseDownAt, setMouseDownAt] = useState<number | null>(null);
  const [startScroll, setStartScroll] = useState(scroll);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      let newScroll = scroll - e.deltaY / 10;
      if (newScroll < -90) newScroll = -90;
      if (newScroll > -8.5) newScroll = -8.5;

      setScroll(newScroll);
    };

    window.addEventListener("wheel", handleWheel);

    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      setMouseDownAt(clientX);
      setStartScroll(scroll);
    };

    const handleOnUp = () => {
      setMouseDownAt(null);
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (mouseDownAt === null) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const mouseDelta = mouseDownAt - clientX;
      const maxDelta = window.innerWidth / 2;

      const scrollDelta = (mouseDelta / maxDelta) * -82.5 * 1.25;
      let newScroll = startScroll + scrollDelta;

      if (newScroll < -90) newScroll = -90;
      if (newScroll > -8.5) newScroll = -8.5;

      setScroll(newScroll);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("mousedown", handleOnDown);
    document.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchstart", handleOnDown as any);
    document.addEventListener("touchend", handleOnUp as any);
    window.addEventListener("touchmove", handleOnMove as any);

    const newIndex = Math.floor((scroll / -100) * CARDS.length);

    setImageIndex(newIndex);
    setTimeout(() => {
      if (newIndex >= 5) {
        setCounterValue(5);
      } else {
        setCounterValue(newIndex + 1);
      }
    }, 300);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleOnDown);
      document.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchstart", handleOnDown as any);
      document.removeEventListener("touchend", handleOnUp as any);
      window.removeEventListener("touchmove", handleOnMove as any);
    };
  }, [scroll, mouseDownAt, startScroll]);

  return (
    <div>
      <h1 className="text-2xl">
        Hello 👋. Click on a card to view my portfolio.
      </h1>
      <CardTrack scroll={scroll} trackRef={trackRef} />

      <PlusCrosshair />

      <CardCounter counterValue={counterValue} />
    </div>
  );
}
export default Home;
