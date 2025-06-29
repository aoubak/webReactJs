import React from "react";
import Grid from "../assets/images/grd_col.png";
import Contact from "../components/Contact";
import CTA_action from "../components/CTA_action";

export default function ContactPage() {
  return (
    <>
      <section className="container mx-auto mt-30">
        <div
          style={{ backgroundImage: `url(${Grid})` }}
          className="bg-center bg-cover flex justify-center items-center rounded-2xl bg-gradient-to-b  from-cyan-800 to-gray-800 h-50"
        >
          <h1 className="text-5xl">
            Our <span className="font-bold text-cyan-400">Contact</span>
          </h1>
        </div>
        <Contact />
      </section>
      <CTA_action />
    </>
  );
}
