import React, { useEffect, useRef } from "react";
import "@/styles/MouseBlobStyles.css";

const Blob: React.FC = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      // Using type assertion to ensure animate exists on the blobRef
      (blobRef.current as any)?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div ref={blobRef} id="blob" />
    </>
  );
};

export default Blob;
