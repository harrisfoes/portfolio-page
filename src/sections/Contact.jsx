import React from "react";
import Border from "../components/Border";
import { contact } from "../constants/constants";

const ContactCard = ({ name, image, info, isLink, link }) => {
  //console.log(name);
  return (
    <div className="animate-fade-in my-1 flex flex-row items-center gap-2 overflow-hidden p-2 md:p-4 lg:p-6">
      <div className="rounded-full bg-slate-100 p-2">
        <img
          src={image}
          className="transform-all w-[1.4rem] opacity-50 duration-300 hover:scale-110 md:w-12"
        />
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-700 md:text-base lg:text-lg">
          {name}
        </p>
        {isLink && (
          <a href={link} target="_blank">
            <p className="cursor-pointer font-semibold text-sky-600 opacity-75 hover:opacity-50 md:text-base lg:text-lg">
              {info}
            </p>
          </a>
        )}
        {!isLink && (
          <p className="text-xs font-semibold text-sky-800 opacity-75 md:text-base lg:text-lg">
            {info}
          </p>
        )}
      </div>
    </div>
  );
};

function Contact() {
  return (
    <>
      <section className="md:my-6 lg:my-12">
        <h1 className="mx-auto py-6 text-center text-xl font-bold text-neutral-700 md:pb-12 lg:text-4xl">
          <span className="border-b-4 border-b-amber-500">Contact Me</span>
        </h1>

        <div className="mx-auto mb-4 grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-2 md:py-6 lg:grid-cols-3 lg:py-12">
          {contact.map((items) => {
            return (
              <ContactCard
                name={items.name}
                image={items.image}
                info={items.info}
                isLink={items.isLink}
                link={items.link}
                key={items.name}
              />
            );
          })}
        </div>
      </section>
      <Border />
    </>
  );
}

export default Contact;
