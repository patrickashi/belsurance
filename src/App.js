import React from "react";
import Navbar from "./Components/Navbar";
import Secone from "./Components/Secone";
import Sectwo from "./Components/Sectwo";
import Secthree from "./Components/Secthree";
import Secfour from "./Components/Secfour";
import Secfive from "./Components/Secfive";
import Secsix from "./Components/Secsix";
import Secseven from "./Components/Secseven";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Approach from "./Components/Approach";
import Benefits from "./Components/Benefits";
import About from "./Components/About";
import Faq from "./Components/Faq";

function App() {
  return (
    <div className="">
      <Navbar />
      <Secone />
      <section id="services">
        <Sectwo />
      </section>
      
      <Secthree />
      <Secfour />
      <Secfive />
      <Secsix />
      <Secseven />
      <section id="about">
        <About />
      </section>
      
      <Approach />
      <Benefits />
      <Testimonials />
      <section id="faq" > 
        <Faq />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
