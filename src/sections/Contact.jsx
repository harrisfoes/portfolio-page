import React from "react";
import mail from "../assets/images/contact/mail.svg";
import location from "../assets/images/contact/location.svg";
import blog from "../assets/images/contact/blog.svg";
import nihongo from "../assets/images/contact/nihongo.svg";
import resume from "../assets/images/contact/resume.svg";
import github from "../assets/images/github.svg";
import linkedIn from "../assets/images/linkedIn.svg";
import Border from "../components/Border";

const contact = [
  {
    name: "Email",
    info: "harrisfoes@gmail.com",
    image: mail,
    isLink: true,
    link: "mailto:harrisfoes@gmail.com",
  },
  {
    name: "Resume",
    info: "Click to view",
    image: resume,
    isLink: true,
    link: "https://docs.google.com/document/d/1KXWIsSF6f5MfOF34eHe2xFZFN7ofek4O/edit?usp=sharing&ouid=106763750924785491162&rtpof=true&sd=true",
  },
  {
    name: "Github",
    info: "Project Repository",
    image: github,
    isLink: true,
    link: "https://github.com/harrisfoes/",
  },
  {
    name: "LinkedIn",
    info: "Connect with me",
    image: linkedIn,
    isLink: true,
    link: "https://www.linkedin.com/in/harris-escalante-07106a94/",
  },
  {
    name: "Blog",
    info: "Hashnode Blog",
    image: blog,
    isLink: true,
    link: "https://harrisfoes.hashnode.dev/",
  },
  { name: "Location", info: "Tokyo", image: location, isLink: false, link: "" },
  {
    name: "Nihongo Level",
    info: "N5",
    image: nihongo,
    isLink: false,
    link: "",
  },
];

const ContactCard = ({ name, image, info, isLink, link }) => {
  //console.log(name);
  return (
    <div className="animate-fade-in my-1 flex flex-row items-center gap-2 overflow-hidden p-2 md:p-4 lg:p-6">
      <div className="rounded-full bg-blue-200 p-2">
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
                keys={items.name}
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
