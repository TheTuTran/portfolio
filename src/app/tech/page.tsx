"use client";

import SideBar from "@/components/SideBar";
import { FC, useState } from "react";
import { TECH_STACK_CATEGORIES } from "@/config";
import { Icons } from "@/components/Icons";

interface TechProps {}

type IconKeys = keyof typeof Icons;

const Tech: FC<TechProps> = ({}) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div
        className={`w-full ${showSideBar ? "SideBarOpened" : ""}`}
        onClick={() => setShowSideBar(false)}
      >
        <h1 className="text-4xl text-center font-bold mb-8">My Tech Stack</h1>

        <div className="flex pt-4">
          <div className="w-full pr-8">
            {Object.keys(TECH_STACK_CATEGORIES).map((category, index) => (
              <div key={index} id={category} className="mb-16">
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
        </div>
      </div>
      <button
        className="text-gray-700 hover:text-gray-400 fixed right-0 top-[50%] -translate-y-[4rem] -translate-x-[10px] hover:-translate-x-[15px] bg-gray-700 rounded-tl-full rounded-bl-full h-[6rem] w-[3rem] hover:scale-[1.2] transition "
        onClick={() => setShowSideBar(!showSideBar)}
      >
        open
      </button>
      {showSideBar && (
        <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      )}
    </>
  );
};

export default Tech;
