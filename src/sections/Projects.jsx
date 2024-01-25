import React from "react";
import audio_ecomm from "../assets/images/projects/audio-ecomm.jpg";

function Projects() {
  return (
    <>
      <section className="md:my-6 lg:my-12">
        <h1 className="mx-auto py-6 text-center text-xl font-bold text-neutral-700 md:pb-12 lg:text-4xl">
          <span className="border-b-4 border-b-amber-500">Projects</span>
        </h1>

        <div className="project-container flex flex-col items-center rounded-lg">
          <div className="project-card w-[360px] rounded-lg border px-4 py-6 shadow-xl md:flex md:w-full lg:p-12">
            <div className="relative overflow-hidden shadow-lg lg:w-1/2">
              <div class="absolute right-0 top-0 z-50 mx-6 my-8 flex h-10 w-fit items-center rounded-full bg-amber-500 px-4 py-2 text-sm font-bold uppercase text-white">
                Featured
              </div>
              <img
                src={audio_ecomm}
                className="transform-all cursor-pointer duration-300 hover:scale-110"
              />
            </div>
            <div className="project-card-text flex flex-col items-center justify-center  px-5 text-left md:justify-evenly lg:w-1/2 lg:px-12">
              <h3 className="mx-auto w-full py-4 font-bold md:text-xl lg:text-3xl">
                Audiophile Ecommerce Website
              </h3>
              <div className="flex w-full items-start justify-start gap-2 text-sm lg:text-base">
                <div className="font-bold uppercase text-blue-400">React</div>
                <div className="font-bold uppercase text-slate-500">
                  TailwindCSS
                </div>
              </div>
              <div className="description text-md opacity-75 lg:text-xl">
                A responsive, multi-page, e-commerce website with product pages,
                an add-to-cart feature and forms (with validation) that collect
                shipping details
              </div>
              <div className="project-link flex w-full gap-6 py-3">
                <button className="rounded-full bg-slate-600 px-3 py-2 font-bold text-white hover:opacity-75">
                  Preview Site
                </button>
                <button className="rounded-full bg-blue-900 px-3 py-2 font-bold text-white hover:opacity-75">
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
