import { FC } from "react";
import { TECH_STACK_CATEGORIES } from "@/config";
import { Icons } from "./Icons";

interface TechStackSideButtonsProps {}

type IconKeys = keyof typeof Icons;

const TechStackSideButtons: FC<TechStackSideButtonsProps> = ({}) => {
  return (
    <section className="bg-gray-800 transition fixed right-0 bottom-0 h-full w-[20%] flex flex-col justify-around items-center ">
      {Object.keys(TECH_STACK_CATEGORIES).map((category) => {
        const IconComponent = Icons[category as IconKeys];
        return (
          <a
            href={`#${category}`}
            key={category}
            className="flex items-center mb-4 cursor-pointer hover:scale-102"
          >
            <div className="bg-gray-800 text-gray-300 h-8 w-48 flex items-center justify-center translate-x-2 border-2 border-gray-500 rounded-md shadow-md ">
              {category}
            </div>
            <div className="relative bg-gray-700 rounded-full w-16 h-16 overflow-hidden border-2 border-gray-500 shadow-lg">
              {IconComponent && (
                <IconComponent className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-auto" />
              )}
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default TechStackSideButtons;
