import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />

      <SocialLinks />
    </div>
  );
}

export default App;
