import React from "react";
import Border from "../components/Border";
import html from "../images/html5.png";
import css from "../images/css.png";
import js from "../images/javascript.png";
import react from "../images/react.png";
import tailwind from "../images/tailwindcss.svg";
import python from "../images/python.svg";

const skills = [
  { name: "HTML", image: html, level: "Advanced" },
  { name: "CSS", image: css, level: "Advanced" },
  { name: "JavaScript", image: js, level: "Advanced" },
  { name: "React", image: react, level: "Intermediate" },
  { name: "TailwindCSS", image: tailwind, level: "Intermediate" },
  { name: "Python", image: python, level: "Intermediate" },
];

const SkillCard = ({ name, image, level }) => {
  return (
    <div class="flex my-1 gap-2 flex-row items-center justify-enter p-2">
      <img
        src={image}
        className="w-[1.5rem] hover:w-[1.75rem] transform-all duration-300"
      />
      <div>
        <p className="font-semibold text-xs">{name}</p>
        <p className="text-xs opacity-75">{level}</p>
      </div>
    </div>
  );
};

function Skills() {
  return (
    <section>
      <h1 className="text-xl  text-center font-bold text-neutral-700 py-6 mx-auto">
        <span className=" border-b-4 border-b-amber-500">My Skills</span>
      </h1>
      <div class="flex flex-col items-center justify-center md:grid md:grid-cols-3 md:gap-2 md:place-items-center w-4/6 mx-auto mb-4">
        {skills.map((items) => {
          return (
            <SkillCard
              name={items.name}
              image={items.image}
              level={items.level}
            />
          );
        })}
      </div>
      <Border />
    </section>
  );
}

export default Skills;
