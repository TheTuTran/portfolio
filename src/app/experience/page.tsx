import { FC } from "react";
import { EXPERIENCES } from "@/config";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bold mb-8">
        Working Experience
      </h1>

      <div className="flex pt-4">
        <div className="w-full pr-8">
          {Object.keys(EXPERIENCES).map((experience, index) => (
            <div key={index} id={experience} className="mb-16">
              <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2">
                {experience}
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                {EXPERIENCES[experience]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
