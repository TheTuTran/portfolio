import { FC, useState } from "react";

import { Icons } from "./Icons";
import React, { useRef, useEffect } from "react";

interface SidebarProps {
  categories: {
    [key: string]: string[];
  };
}

type IconKeys = keyof typeof Icons;

const Sidebar: FC<SidebarProps> = ({ categories }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    }

    if (showSidebar) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showSidebar, setShowSidebar]);

  return (
    <div className="z-10">
      {showSidebar && (
        <div
          ref={sidebarRef}
          className="bg-gray-900/20 transition-[width] duration-300 fixed right-0 bottom-0 h-full flex flex-col justify-center items-center min-w-0 w-[20vw]"
        >
          {Object.keys(categories).map((category) => {
            const IconComponent = Icons[category as IconKeys];
            return (
              <a
                href={`#${category}`}
                onClick={() => setShowSidebar(false)}
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
        </div>
      )}
      <button
        className="text-gray-400 top-[15%] -translate-y-[4rem] right-[4rem] hover:text-gray-800 fixed bg-gray-400 rounded-full h-[4rem] w-[4rem] hover:scale-[1.2] transition text-sm"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? "Close Menu" : "Open Menu"}
      </button>
    </div>
  );
};

export default Sidebar;
