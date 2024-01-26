import React from "react";
import Logo from "../components/Logo";
import Icons from "../components/Icons";

function Banner() {
  return (
    <header className="mx-auto w-full justify-center gap-3 bg-neutral-50 px-12 py-4 shadow-md lg:py-8">
      <div className="container mx-auto flex max-w-[1100px] flex-col items-center gap-2 md:flex-row md:justify-between">
        <Logo />
        <Icons />
      </div>
    </header>
  );
}

export default Banner;
