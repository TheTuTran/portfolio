import { FC } from "react";
import { useRouter } from "next/navigation";

interface CardProps {
  src: string;
  text: string;
  destination: string;
  indx: number;
  scroll: number;
}

const Card: FC<CardProps> = ({ src, text, indx, scroll, destination }) => {
  const router = useRouter();
  return (
    <div
      className="relative w-[40vmin] h-[56vmin] cursor-pointer hover:scale-105 active:scale-100 transition-transform duration-300"
      draggable="false"
      onClick={() => {
        router.push(`/${destination}`);
      }}
    >
      <img
        key={src}
        id={`image-${indx}`}
        className="w-full h-full object-cover object-center"
        draggable="false"
        src={src}
        style={{
          objectPosition: `${(-scroll / 99) * 100}% 50%`,
          transition: "object-position 1s ease-out",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <span
        draggable="false"
        className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded"
      >
        {text}
      </span>
    </div>
  );
};

export default Card;
