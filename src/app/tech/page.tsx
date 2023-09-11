import TechStackSideButtons from "@/components/TechStackSideButtons";
import { FC } from "react";
import { TECH_STACK_CATEGORIES } from "@/config";
import { Icons } from "@/components/Icons";

interface TechProps {}

type IconKeys = keyof typeof Icons;

const Tech: FC<TechProps> = ({}) => {
  return (
    <section className="w-full">
      <h1 className="text-4xl text-center font-bold mb-8">My Tech Stack</h1>

      <div className="flex pt-4">
        <div className="w-full pr-8">
          {Object.keys(TECH_STACK_CATEGORIES).map((category, index) => (
            <div key={index} id={category} className="mb-16 max-w-[60vw] ">
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 w-full">
                {category}
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                {TECH_STACK_CATEGORIES[category].map((tech, index) => {
                  // Retrieve the appropriate icon component based on the tech name
                  const TechIcon = Icons[tech as IconKeys];

                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-700 px-3 py-1 m-1 rounded-full"
                    >
                      {TechIcon && <TechIcon className="inline-block mr-2" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <TechStackSideButtons />
      </div>
    </section>
  );
};

export default Tech;
