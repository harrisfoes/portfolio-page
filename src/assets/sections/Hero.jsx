import React from "react";
import harrisPic from "../images/mug.jpg";
import Border from "../components/Border";
function Hero() {
  return (
    <section>
      <div className="hero-section md:flex md:flex-row max-w-[600px] md:max-w-[700px] mx-auto  md:my-10 md:justify-between">
        <div className="md:w-1/2">
          <img
            src={harrisPic}
            className="w-2/3 md:w-full mx-auto my-6 rounded-xl grayscale max-w-[200px] md:max-w-[260px] animate-fade-in"
          />
        </div>
        <div className="hero-text md:w-1/2  md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="text-xl  text-center font-bold text-neutral-700 p-4 max-w-[380px] md:max-w-[450px] mx-auto">
            Nice to meet you! I'm Harris, a
            <span className="mx-2 decoration-amber-500 border-b-4 border-b-amber-500">
              Front-End Developer
            </span>
          </h1>
          <div className="text-sm text-center p-4 font-medium max-w-[400px] mx-auto">
            I'm a front-end developer currently working in{" "}
            <span className="font-bold text-blue-500">React.js</span> and its
            ecosystem. I'm a passionate programmer who loves building apps that
            users love to use.
          </div>
        </div>
      </div>
      <Border />
    </section>
  );
}

export default Hero;
