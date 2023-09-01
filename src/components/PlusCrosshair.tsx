import { FC } from "react";

interface PlusCrosshairProps {}

const PlusCrosshair: FC<PlusCrosshairProps> = ({}) => {
  return (
    <section className="fixed inset-[50%] translate-x-[-50%] translate-y-[-50%] text-md z-10 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </section>
  );
};

export default PlusCrosshair;
