"use client";

import AboutCard from "@/components/AboutCard";
import Sidebar from "@/components/Sidebar";
import { ABOUT_CATEGORIES } from "@/config";
import { FC, useEffect, useRef } from "react";
import { ImNewTab } from "react-icons/im";
interface AboutProps {}

const About: FC<AboutProps> = () => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;

    const createWord = (text: string, index: number) => {
      const word = document.createElement("span");

      word.innerHTML = `${text} `;

      word.classList.add("card-subtitle-word");

      word.style.transitionDelay = `${index * 40}ms`;

      return word;
    };

    const addWord = (text: string, index: number) => {
      if (subtitle) {
        subtitle.appendChild(createWord(text, index));
      }
    };

    const createSubtitle = (text: string) => text.split(" ").forEach(addWord);

    createSubtitle("But in reality, I'm just winging it");
  }, []);

  const openPdf = () => {
    window.open("/TuTranResume.pdf", "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <section className="mb-8">
        <h1 className="text-4xl text-center font-bold mb-8">About Me</h1>

        <AboutCard />
      </section>
      <div className="mx-8">
        <section
          className="w-full flex flex-col items-center min-h-[20vh] mb-16"
          id="Hobbies & Interests"
        >
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 w-full">
            Hobbies & Interests
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg m-4 text-slate-400">
              Outside of my professional life, I enjoy playing games or reading
              in my free time. I believe these activities have added to my
              skills and perspectives in Computer Science. It helps me get used
              to the amount of docs that I have to read through.
            </p>
          </div>
        </section>

        <section
          className="w-full flex flex-col items-center min-h-[20vh] mb-16"
          id="Education"
        >
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 w-full">
            Education
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg m-4 text-slate-400">
              I&apos;m set to graduate from Saint Louis University with a major
              in Computer Science and minor in Mathematics in May of 2024. More
              on my resume{" "}
              <ImNewTab className="cursor-pointer inline" onClick={openPdf} />
            </p>
          </div>
        </section>

        <section
          className="w-full flex flex-col items-center min-h-[20vh] mb-16"
          id="Certificates"
        >
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 w-full">
            Certificates
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="text-lg m-4 text-slate-400 list-decimal">
              <li className="mb-4">
                <strong>AWS Cloud Practitioner (In Progress):</strong> Currently
                taking the AWS Cloud Practitioner Essentials course to prepare
                for the Cloud Practioner Exam. I should have the course finished
                by the end of September 2023.
              </li>
            </ul>
          </div>
        </section>

        <section
          className="w-full flex flex-col min-h-[20vh] mb-16"
          id="Relevant Coursework"
        >
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 w-full">
            Relevant Coursework
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md ">
            <ul className="text-lg m-4 text-slate-400 list-decimal">
              <li className="mb-4">
                <strong>Data Structures:</strong> Proficient in array,
                linked-list, stack, queue, and tree implementations. Developed
                efficient solutions for numerous real-world problems using
                various data structures
              </li>
              <li className="mb-4">
                <strong>Object-Oriented Software Design:</strong> Designed and
                implemented multiple applications using OOP principles, such as
                encapsulation, inheritance, and polymorphism. Familiar with UML
                diagrams and design patterns.
              </li>
              <li className="mb-4">
                <strong>Computer Architecture:</strong> Understand the
                fundamental concepts of CPU operations, memory hierarchy, and
                I/O. Experienced in assembly language programming and hardware
                description languages.
              </li>
              <li className="mb-4">
                <strong>Algorithms:</strong> Strong background in algorithmic
                analysis, design, and implementation. Proficient in
                divide-and-conquer, dynamic programming, and greedy strategies.
              </li>
              <li className="mb-4">
                <strong>Programming Languages:</strong> Experienced in compiler
                design, parsing, and lexical analysis. Worked with python to
                create a transpiler that translated Racket code into Python
                code.
              </li>
              <li className="mb-4">
                <strong>Databases:</strong> Designed and maintained relational
                databases using SQL. Understand the concepts of normalization,
                data management, and ERD&apos;s.
              </li>
              <li className="mb-4">
                <strong>Software Engineering:</strong> Participated in full
                software development life cycles, from requirements gathering to
                deployment. Familiar with Agile and Scrum methodologies.
              </li>
              <li className="mb-4">
                <strong>Machine Learning (In Progress Fall 2023):</strong>{" "}
                Implemented supervised and unsupervised learning models.
                Familiar with popular ML libraries like Scikit-Learn, Numpy,
                Pandas, and Matplotlib for analyzing and visualizing data.
              </li>
              <li className="mb-4">
                <strong>
                  Artificial Intelligence (In Progress Fall 2023):
                </strong>{" "}
                Developed solutions using different algorithms including
                heuristic search and A* search. Completed projects on game
                playing algorithms.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar categories={ABOUT_CATEGORIES} />
    </div>
  );
};

export default About;
