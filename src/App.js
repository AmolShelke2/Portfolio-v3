import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skills />

      <SocialLinks />
    </div>
  );
}

export default App;
