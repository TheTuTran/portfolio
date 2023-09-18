import { FC } from "react";
import { PROJECTS } from "@/config";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bold mb-8">My Projects</h1>

      <div className="grid grid-cols-2 gap-8 pt-4">
        {PROJECTS.map((project, index) => (
          <div key={index} id={project.title} className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2">
              {project.title}
            </h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="relative mt-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-md blur-sm"
                />

                <div className="absolute inset-0 flex justify-center items-center">
                  <Link
                    className={buttonVariants({ variant: "subtle" })}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                  <Link
                    className={buttonVariants({
                      variant: "subtle",
                      className: "ml-4",
                    })}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
              <hr className="border-2 border-gray-700 my-4" />
              <p className="m-2">{project.description}</p>
              <hr className="border-2 border-gray-700 my-4" />

              {project.technology.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-700 px-3 py-1 m-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
