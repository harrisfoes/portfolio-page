import "./index.css";
import Banner from "./sections/Banner";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="font-montserrat text-zinc-700 ">
      <Banner />
      <div className="container mx-auto w-10/12 max-w-[1100px]">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default App;
