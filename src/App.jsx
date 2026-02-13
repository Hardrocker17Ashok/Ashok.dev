import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />


      <Home />
      <About />
      <Services />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
