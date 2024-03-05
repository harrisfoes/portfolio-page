import React from "react";
import Border from "../components/Border";
import { skills } from "../constants/constants";

const SkillCard = ({ name, image, level }) => {
  return (
    <div className="justify-enter animate-fade-in my-1 flex flex-row items-center gap-2 overflow-hidden p-2 md:p-4 lg:p-6">
      <img
        src={image}
        className="transform-all w-[1.4rem] duration-300 hover:scale-110 md:w-14"
      />
      <div>
        <p className="text-xs font-semibold md:text-sm lg:text-base">{name}</p>
        <p className="text-xs opacity-75 md:text-sm">{level}</p>
      </div>
    </div>
  );
};

function Skills() {
  return (
    <>
      <section className="md:my-6 lg:my-12">
        <h1 className="mx-auto py-6 text-center text-xl font-bold text-neutral-700 md:py-7 lg:text-4xl">
          <span className=" border-b-4 border-b-amber-500">My Skills</span>
        </h1>
        <div className="mx-auto mb-4 grid grid-cols-2 place-items-center gap-4  md:grid-cols-4 md:gap-2 md:py-10 lg:py-16">
          {skills.map((items) => {
            return (
              <SkillCard
                key={items.name}
                name={items.name}
                image={items.image}
                level={items.level}
              />
            );
          })}
        </div>
      </section>
      <Border />
    </>
  );
}

export default Skills;
