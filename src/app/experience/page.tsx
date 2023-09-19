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
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-2xl font-semibold mb-2 border-b-2 border-gray-700 pb-2">
                {experience.title}
              </h2>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                  <p className="text-gray-400">
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p className=" text-gray-400">{experience.location}</p>
                </div>
                <ul className="list-disc mx-4">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
