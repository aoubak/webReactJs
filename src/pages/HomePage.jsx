import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CTA_action from "../components/CTA_action";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA_action />
      <Contact />
    </>
  );
}
