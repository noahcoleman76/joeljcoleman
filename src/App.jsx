import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp"; // NEW
import Services from "./components/Services";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MeetJoel from "./components/MeetJoel";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ValueProp />   {/* moved “Moves the Needle” section here */}
      <MeetJoel />
      <Services />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}
