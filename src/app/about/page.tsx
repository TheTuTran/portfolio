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
    <section className="w-full flex flex-col items-center">
      <section className="min-h-[80vh]">
        <h1 className="text-4xl text-center font-bold mb-8">About Me</h1>

        <AboutCard />
      </section>

      <section className="w-full flex flex-col items-center min-h-[20vh]">
        <h2 className="text-3xl text-center font-bold mb-4 ">Education</h2>
        <p className="text-lg mb-4 text-slate-400">
          I&apos;m set to graduate from Saint Louis University with a BS in
          Computer Science in May of 2024. More on my resume{" "}
          <ImNewTab className="cursor-pointer inline" onClick={openPdf} />
        </p>
      </section>

      <section className="w-full flex flex-col items-center min-h-[20vh]">
        <h2 className="text-3xl text-center font-bold mb-4">
          Hobbies & Interests
        </h2>
        <p className="text-lg mb-4 text-slate-400">
          Outside of my professional life, I enjoy playing games or reading in
          my free time. I believe these activities have also contributed to my
          skills and perspectives in Computer Science. It helps me get used to
          the amount of docs that I have to read through.
        </p>
      </section>
    </section>
  );
};

export default About;
