"use client";
import React, { useEffect, useRef } from "react";
import "@/styles/AboutCardStyles.css";

function About() {
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;

    const createWord = (text: string, index: number) => {
      const word = document.createElement("span");

      /*
      if (!subtitle || subtitle.innerText.trim() !== "") {
        return;
      }
      */
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

    createSubtitle("But in reality, I'm just winging it. ");
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">
            Hello! I&apos;m Tu, a full stack developer with experience in
            building modern web applications. I love coding and learning new
            technologies. I like to think I know what I&apos;m doing. (hover
            over me)
          </h3>
          <h4 ref={subtitleRef} className="card-subtitle"></h4>
        </div>
      </div>
    </>
  );
}

export default About;
