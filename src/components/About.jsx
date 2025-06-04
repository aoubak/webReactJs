import React from "react";
import aboutImage from "../assets/images/about.png"; // Adjust the path as necessary
import { TiTick } from "react-icons/ti";

function About() {
  return (
    <section className="container mx-auto p-4 text-[#efeeee]">
      <div className="md:text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
        <p className="text-base sm:text-lg">
          We’re a team of creative digital marketers, designers, and strategists
          helping brands grow and thrive online.
        </p>
      </div>
      <div className="md:pt-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1 w-full text-left md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl  font-bold mb-4">
              Empowering Brands with Smart Digital Marketing
            </h2>
            <p className="text-base sm:text-lg mb-5">
              At [Your Agency Name], we combine innovation with data-driven
              strategies to deliver powerful digital marketing results. From SEO
              and content creation to PPC and social media, we provide complete
              solutions that make your brand stand out in a crowded market.
            </p>
            <h1 className="text-xl font-bold mb-2">Core Values</h1>
            <ul className="list-disc space-y-2 md:flex md:space-x-3 border-l-2  pl-3 border-cyan-500 mb-6">
              <div>
                <li className="flex space-x-2 items-center">
                  <TiTick size={25} color="cyan" />
                  Data-Driven Strategy
                </li>
                <li className="flex space-x-2 items-center">
                  <TiTick size={25} color="cyan" />
                  Transparent Reporting
                </li>
              </div>
              <div>
                <li className="flex space-x-2 items-center">
                  <TiTick size={25} color="cyan" />
                  Client-Centered Approach
                </li>
                <li className="flex space-x-2 items-center">
                  <TiTick size={25} color="cyan" /> Growth-Focused Solutions
                </li>
              </div>
            </ul>

            <a
              href="/contact"
              className="bg-cyan-900 border border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Contact Us
            </a>
          </div>
          <div className="flex-1 w-full md:border-l-1 md:border-cyan-300  md:flex md:justify-center">
            <img
              src={aboutImage} // Replace with your image path
              alt="About Us"
              className="w-11/12  h-[300px] md:h-[400px] object-cover rounded-lg max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
