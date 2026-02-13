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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
