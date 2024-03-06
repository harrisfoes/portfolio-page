import audio_ecomm from "../assets/images/projects/audio-ecomm.jpg";
import portfolio from "../assets/images/projects/portfolio.jpg";
import multistep from "../assets/images/projects/multistep.jpg";
import crypto from "../assets/images/projects/crypto.png";
import countrylist from "../assets/images/projects/country-list.jpg";

import html from "../assets/images/skills/html5.png";
import css from "../assets/images/skills/css.png";
import js from "../assets/images/skills/javascript.png";
import react from "../assets/images/skills/react.png";
import tailwind from "../assets/images/skills/tailwindcss.svg";
import python from "../assets/images/skills/python.svg";
import typescript from "../assets/images/skills/ts.svg";
import next from "../assets/images/skills/next.svg";

import mail from "../assets/images/contact/mail.svg";
import location from "../assets/images/contact/location.svg";
import blog from "../assets/images/contact/blog.svg";
import nihongo from "../assets/images/contact/nihongo.svg";
import resume from "../assets/images/contact/resume.svg";
import github from "../assets/images/github.svg";
import linkedIn from "../assets/images/linkedIn.svg";

const skills = [
  { name: "HTML", image: html, level: "Advanced" },
  { name: "CSS", image: css, level: "Advanced" },
  { name: "JavaScript", image: js, level: "Advanced" },
  { name: "React", image: react, level: "Intermediate" },
  { name: "TailwindCSS", image: tailwind, level: "Intermediate" },
  { name: "Python", image: python, level: "Intermediate" },
  { name: "Typescript", image: typescript, level: "Intermediate" },
  { name: "NextJS", image: next, level: "Beginner" },
];

const projects = [
  {
    name: "Audiophile Ecommerce Website",
    image: audio_ecomm,
    isFeatured: true,
    tech: ["React", "TailwindCSS"],
    desc: "A responsive, multi-page, e-commerce website with product pages, an add-to-cart feature and validated forms that collect shipping details",
    link: "https://harrisfoes.github.io/audio-ecomm",
    code: "https://github.com/harrisfoes/audio-ecomm",
  },
  {
    name: "Web Developer Portfolio",
    image: portfolio,
    isFeatured: true,
    tech: ["React", "TailwindCSS"],
    desc: "A minimalistic, mobile-friendly web portfolio that showcases my skills and projects. Designed in a way that's easy to maintain as I improve my craft. Sleek yet functional.",
    link: "/portfolio-page",
    code: "https://github.com/harrisfoes/portfolio-page",
  },
  {
    name: "REST Countries API with color theme switcher",
    image: countrylist,
    isFeatured: false,
    tech: ["React", "TailwindCSS", "Typescript"],
    desc: "First Typescript project. Search for Countries and their details. Light-Dark theme switching that checks for browser's preference.",
    link: "https://harrisfoes.github.io/country-list/",
    code: "https://github.com/harrisfoes/country-list",
  },
  {
    name: "Multistep Form",
    image: multistep,
    isFeatured: false,
    tech: ["React", "TailwindCSS"],
    desc: "A mobile-responsive, multi-step form page with input validation. Calculates pricing based on user input",
    link: "https://harrisfoes.github.io/multistep-form",
    code: "https://github.com/harrisfoes/multistep-form",
  },
  {
    name: "Crypto Landing Page",
    image: crypto,
    isFeatured: false,
    tech: ["React", "TailwindCSS"],
    desc: "A mobile-responsive landing page for a Crypto trading website. Guaranteed to take you to the moon (maybe)",
    link: "https://harrisfoes.github.io/crypto-page",
    code: "https://github.com/harrisfoes/crypto-page",
  },
];

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
    info: "More Projects Here",
    image: github,
    isLink: true,
    link: "https://github.com/harrisfoes/",
  },
  {
    name: "LinkedIn",
    info: "Let's Connect!",
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

export { projects, skills, contact };
