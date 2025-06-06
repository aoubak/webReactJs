import React from "react";
import port1 from "../assets/images/port_1.png"; // Adjust the path as necessary
import port2 from "../assets/images/port_2.jpg"; // Adjust the path as necessary
import port3 from "../assets/images/port_3.png"; // Adjust the path as necessary

function Portfolio() {
  return (
    <section className="container mx-auto text-[#efeeee] ">
      <div className="md:text-center md:mb-8 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-base sm:text-lg">
          Projects That Speak for Themselves, Check out all project and see for
          yourself
        </p>
      </div>
      <div>
        <div className="flex flex-col sm:flex-col-2 md:flex-row justify-center items-center p-4 gap-4">
          {/* Example Portfolio Item */}
          <div className="bg-gray-800 w-full cursor-pointer md:96 p-4 rounded-lg shadow-lg shadow-cyan-700/5 border border-cyan-700">
            <img
              src={port1}
              alt="Project 1"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              EcomPro – E-commerce Website Redesign
            </h2>
            <p className="text-base">{
              `We redesigned an outdated online store into a modern,
              mobile-friendly e-commerce site. The result? A 65% increase in
              conversions and a smoother shopping experience across all devices.`.slice(0,100)} ...
            </p>
            <a
              href="/contact"
              className="bg-cyan-900 mt-4 border border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Read More
            </a>
          </div>
          {/* Repeat for more items */}
          <div className="bg-gray-800 w-full cursor-pointer md:96 p-4 rounded-lg shadow-lg shadow-cyan-700/5 border border-cyan-700">
            <img
              src={port2}
              alt="Project 2"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              FinBoost – SEO & Content Campaign
            </h2>
            
              <p className="text-base">
              {`Our SEO strategy and content creation helped FinBoost rank on the
              first page of Google for 12 competitive finance keywords, boosting
              organic traffic by over 300% in 4 months.`.slice(0,100)} ...
            </p>
            
            <a
              href="/contact"
              className="bg-cyan-900 mt-4 border border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Read More
            </a>
          </div>
          {/* Repeat for more items */}
          <div className="bg-gray-800 w-full cursor-pointer md:96 p-4 rounded-lg shadow-lg shadow-cyan-700/5 border border-cyan-700">
            <img
              src={port3}
              alt="Project 3"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              CaféSocial – Social Media Brand Launch
            </h2>
            <p className="text-base">{
              `From zero to viral — we built a full social media identity for
              CaféSocial, complete with visuals, posting strategy, and
              influencer collabs. The brand gained 10K+ followers in its first 6
              weeks.`.slice(0,100)} ...
            </p>
            <a
              href="/contact"
              className="bg-cyan-900 mt-4 border border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <a
            href="/contact"
            className=" mt-4 border border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
