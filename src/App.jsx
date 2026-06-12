import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
      <div className={"container mx-auto px-4 "}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects
            title="Shop App"
            description="React + Tailwind"
        />
        <Contact />
      </div>
  );
}

export default App;

