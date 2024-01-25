import "./index.css";
import Banner from "./assets/sections/Banner";
import Hero from "./assets/sections/Hero";
import Skills from "./assets/sections/Skills";
const App = () => {
  return (
    <main className="font-montserrat text-zinc-700 ">
      <Banner />
      <div className="container w-11/12 mx-auto max-w-[1000px]">
        <Hero />
        <Skills />
      </div>
    </main>
  );
};

export default App;
