import React from "react";
import About from "../components/About";
import CTA_action from "../components/CTA_action";
import Grid from "../assets/images/grid.png";

function AboutPage() {
  return (
    <>
    
    <section className="container mx-auto mt-30">
      <div style={{backgroundImage: `url(${Grid})` }} className="bg-center bg-cover flex justify-center items-center rounded-2xl bg-gradient-to-b  from-cyan-800 to-gray-800 h-50">
        <h1 className="text-3xl">About Us</h1>
      </div>
      <About />
      
    </section>
    <CTA_action />
    </>
  );
}

export default AboutPage;
