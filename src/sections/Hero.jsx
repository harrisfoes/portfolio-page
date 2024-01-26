import React from "react";
import harrisPic from "../assets/images/mug.jpg";
import Border from "../components/Border";
function Hero() {
  return (
    <section>
      <div className="hero-section mx-auto max-w-[600px] md:my-10 md:flex md:max-w-[1100px]  md:flex-row-reverse md:justify-between lg:my-20 ">
        <div className="md:w-1/2">
          <img
            src={harrisPic}
            className="animate-fade-in mx-auto my-6 w-2/3 max-w-[200px] rounded-xl shadow-lg grayscale md:w-full md:max-w-[420px]"
          />
        </div>
        <div className="hero-text md:flex  md:w-1/2 md:flex-col md:items-center md:justify-center">
          <h1 className="mx-auto max-w-[380px] p-4 text-center text-2xl font-bold text-neutral-700 md:max-w-full lg:text-4xl lg:leading-normal lg:tracking-tight ">
            Nice to meet you! I'm Harris, a
            <span className="mx-2 border-b-4 border-b-amber-500 decoration-amber-500">
              Front-End Developer.
            </span>
          </h1>
          <div className="mx-auto max-w-[400px] p-4 text-center text-sm font-medium lg:text-lg">
            Bachelor in <strong>Computer Engineering</strong>. I'm now a
            front-end developer working in{" "}
            <span className="font-bold text-blue-500">React.js</span>. I'm a
            passionate programmer who loves building apps that people love to
            use.
          </div>
        </div>
      </div>
      <Border />
    </section>
  );
}

export default Hero;
