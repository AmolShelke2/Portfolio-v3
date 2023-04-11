import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Blogs />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
