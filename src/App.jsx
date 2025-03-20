import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projectSection/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
