import React from "react";
import Name from "./Components/Home/Name";
import HomeFooter from "./Components/Home/HomeFooter";
import Navbars from "./Components/Navbar/navbar";
import Image from "./Components/About/image";
import AboutInfo from "./Components/About/aboutInfo";
import Projects from "./Components/Projects/project";
import Contact from "./Components/Contact/contact";
function App() {
  return (
    <div className="App">
      <Navbars />
      <div className="Home" id="Home">
        <div className="name">
          <Name />
        </div>
        <div className="view mt-5">
          <HomeFooter />
        </div>
      </div>
      <div id="about" className="about">
        <span className="mt-5 title">About Me</span>
        <div className="aboutgrid">
          <div className="grid1">
            <Image />
          </div>
          <div className="grid2">
            <AboutInfo />
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        <span className="mt-1 title">Projects</span>
        <Projects />
      </div>
      <div id="contact" className="mt-1 Contacts">
        <span className="mt-1 title">Contact</span>
        <Contact />
      </div>
    </div>
  );
}

export default App;
