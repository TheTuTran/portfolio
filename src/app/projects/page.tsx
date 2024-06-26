import { FC } from "react";
import { PROJECTS, OUTDATED_PROJECTS } from "@/config";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { Icons } from "@/components/Icons";

interface ProjectsProps {}

type IconKeys = keyof typeof Icons;

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bold mb-8">My Projects</h1>
      <p className="text-sm text-center mb-8">Here are a list of some of my recent projects along with a description and a few tech stacks for each. </p>
      <div className="grid grid-cols-2 gap-8 pt-4">
        {PROJECTS.map((project, index) => (
          <div key={index} id={project.title} className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2">{project.title}</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="relative mt-4">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-md blur-sm" />

                <div className="absolute inset-0 flex justify-center items-center">
                  <Link className={buttonVariants({ variant: "subtle" })} href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  {project.demoLink !== "" && (
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
                  )}
                </div>
              </div>
              <hr className="border-2 border-gray-700 my-4" />
              <p className="m-2">{project.description}</p>
              <hr className="border-2 border-gray-700 my-4" />

              {project.technology.map((tech, index) => {
                const TechIcon = Icons[tech as IconKeys];

                return (
                  <span key={index} className="inline-block bg-gray-700 px-3 py-1 m-1 rounded-full">
                    {TechIcon && <TechIcon className="inline-block mr-2" />}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-center mb-8">Outdated Projects that might not work due to the database not being kept up to date</p>
      <div className="grid grid-cols-2 gap-8 pt-4">
        {OUTDATED_PROJECTS.map((project, index) => (
          <div key={index} id={project.title} className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2">{project.title}</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="relative mt-4">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-md blur-sm" />

                <div className="absolute inset-0 flex justify-center items-center">
                  <Link className={buttonVariants({ variant: "subtle" })} href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  {project.demoLink !== "" && (
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
                  )}
                </div>
              </div>
              <hr className="border-2 border-gray-700 my-4" />
              <p className="m-2">{project.description}</p>
              <hr className="border-2 border-gray-700 my-4" />

              {project.technology.map((tech, index) => {
                const TechIcon = Icons[tech as IconKeys];

                return (
                  <span key={index} className="inline-block bg-gray-700 px-3 py-1 m-1 rounded-full">
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
  );
};

export default Projects;
