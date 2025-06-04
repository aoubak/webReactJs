import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineContentPaste } from "react-icons/md";


function Services() {
  return (
    <section className="container mx-auto p-4 text-[#efeeee]">
      <div className="md:text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-base sm:text-lg">
          From strategy to execution, we deliver end-to-end digital marketing
          solutions that increase visibility, generate qualified leads, and turn
          clicks into loyal customers.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="w-[35%] md:text-left mt-4 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Explore Our Digital Services
          </h1>
          <p className="text-balance mb-4">
            We don't just deliver services — we build digital strategies that
            work. Every campaign we launch is backed by research, creative
            insight, and the latest marketing tools to ensure your brand stands
            out in today’s competitive landscape.
          </p>
          <a
            href="/contact"
            className="bg-cyan-900 border border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
          >
            Get More
          </a>
        </div>
        <div className="w-[70%] flex flex-col md:flex-row md:flex-wrap justify-start items-center gap-4 p-6">
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg min-h-[250px] border border-cyan-700 ">
            <h2 className="text-2xl font-bold mb-4">
              Search Engine Optimization (SEO)
            </h2>
            <p className="text-base">
              Optimize your website to rank higher in search results and attract
              organic traffic.
            </p>
          </div>
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg min-h-[250px] border border-cyan-700 ">
            <h2 className="text-2xl font-bold mb-4">Social Media Marketing</h2>
            <p className="text-base">
              Engage your audience and build brand loyalty through targeted
              social media campaigns.
            </p>
          </div>
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg min-h-[250px] border border-cyan-700 ">
            <h2 className="text-2xl font-bold mb-4">Content Marketing</h2>
            <p className="text-base">
              Create valuable content that attracts, informs, and converts your
              target audience.
            </p>
          </div>
          <div className="bg-gray-800 w-72 p-6 rounded-lg shadow-lg min-h-[250px] border border-cyan-700 ">
            <h2 className="text-2xl font-bold mb-4">Web Design & Development</h2>
            <p className="text-base">
              We craft modern, responsive, and SEO-friendly websites designed to reflect your brand and convert visitors into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
