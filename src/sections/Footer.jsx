import React from "react";
import Logo from "../components/Logo";
import Icons from "../components/Icons";

function Footer() {
  return (
    <footer className="mx-auto w-full justify-center gap-3 bg-zinc-800 px-12 pb-4 pt-12 shadow-md lg:pt-28">
      <div className="container mx-auto flex max-w-[1100px] flex-col items-center gap-4 text-neutral-200 md:flex-row md:justify-between">
        <Logo />
        <span className="px-6">
          Design and Implementation by Harris Escalante 2024
        </span>
        <Icons />
      </div>
    </footer>
  );
}

export default Footer;
