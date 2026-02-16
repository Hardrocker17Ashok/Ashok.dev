import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import Home from "./sections/Home";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import About from "./sections/About";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 300); // small delay for smooth transition
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className={`main-content ${showContent ? "fade-in" : ""}`}>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
