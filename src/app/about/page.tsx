"use client";

import AboutCard from "@/components/AboutCard";
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

    createSubtitle(
      "But in reality, I don't know what I'm doing. But in reality, I don't know what I'm doing."
    );
  }, []);

  const openPdf = () => {
    window.open("/TuTranResume.pdf", "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <section className="min-h-[80vh]">
        <h1 className="text-4xl text-center font-bold mb-8">About Me</h1>

        <AboutCard />
      </section>
      <div className="mx-8">
        <section className="w-full flex flex-col items-center min-h-[20vh]">
          <h2 className="text-3xl text-center font-bold mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg mb-4 text-slate-400">
            Outside of my professional life, I enjoy playing games or reading in
            my free time. I believe these activities have added to my skills and
            perspectives in Computer Science. It helps me get used to the amount
            of docs that I have to read through.
          </p>
        </section>

        <section className="w-full flex flex-col items-center min-h-[20vh]">
          <h2 className="text-3xl text-center font-bold mb-4">Education</h2>
          <p className="text-lg mb-4 text-slate-400">
            I&apos;m set to graduate from Saint Louis University with a major in
            Computer Science and minor in Mathematics in May of 2024. More on my
            resume{" "}
            <ImNewTab className="cursor-pointer inline" onClick={openPdf} />
          </p>
        </section>

        <section className="w-full flex flex-col items-center min-h-[20vh]">
          <h2 className="text-3xl text-center font-bold mb-4">Certificates</h2>
          <p className="text-lg mb-4 text-slate-400">
            I&apos;m set to graduate from Saint Louis University with a major in
            Computer Science and minor in Mathematics in May of 2024. More on my
            resume{" "}
            <ImNewTab className="cursor-pointer inline" onClick={openPdf} />
          </p>
        </section>

        <section className="w-full flex flex-col min-h-[20vh] mb-4">
          <h2 className="text-3xl text-center font-bold mb-4">
            Relevant Coursework
          </h2>
          <div className="skills-container">
            <ul className="text-lg mb-4 text-slate-400 list-decimal">
              <li className="mb-4">
                <strong>Data Structures:</strong> Proficient in array,
                linked-list, stack, queue, and tree implementations. Developed
                efficient solutions for numerous real-world problems using
                various data structures during my Computer Science degree.
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
                <strong>Programming Languages:</strong> Proficient in C++, Java,
                and Python. Experienced in compiler design, parsing, and lexical
                analysis.
              </li>
              <li className="mb-4">
                <strong>Databases:</strong> Designed and maintained relational
                databases using SQL. Understand the concepts of normalization,
                indexing, and transaction management.
              </li>
              <li className="mb-4">
                <strong>Software Engineering:</strong> Participated in full
                software development life cycles, from requirements gathering to
                deployment. Familiar with Agile and Scrum methodologies.
              </li>
              <li className="mb-4">
                <strong>Machine Learning:</strong> Implemented supervised and
                unsupervised learning models. Familiar with popular ML
                frameworks like TensorFlow and PyTorch.
              </li>
              <li className="mb-4">
                <strong>Artificial Intelligence:</strong> Developed solutions
                using heuristic search, neural networks, and natural language
                processing. Completed projects on game playing algorithms and
                robotics.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
