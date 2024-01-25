import "./index.css";
import Banner from "./sections/Banner";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="font-montserrat text-zinc-700 ">
      <Banner />
      <div className="container w-10/12 mx-auto max-w-[1100px]">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
};

export default App;
