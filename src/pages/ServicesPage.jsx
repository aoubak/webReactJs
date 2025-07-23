import React from "react";
import Services from "../components/Services";
import Grid from "../assets/images/grd_col.png";
import CTA_action from "../components/CTA_action";
import Features from "../components/Features";
import Contact from "../components/Contact";

export default function ServicesPage() {
  return (
    <>
      <section className="container mx-auto pt-30">
       <div className="mb-10   bg-center bg-cover flex justify-center items-center md:rounded-2xl bg-gradient-to-b  from-cyan-800 to-gray-800 h-50">
          <h1 className="text-5xl text-white">
            <span className="font-bold text-cyan-400">Services </span> {" "}
          </h1>
        </div>
        <Features />
        <Services />
      </section>
      <CTA_action />
       <Contact/>
    </>
  );
}
