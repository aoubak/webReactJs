import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaLinkedinIn ,FaStar } from "react-icons/fa";

import Test_1 from "../assets/images/test_1.png";

function Testmonials() {
  return (
    <section className="container mx-auto">
      <div className="md:text-center md:mb-8 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h1>
        <p className="text-base sm:text-lg">Real Feedback, Real Results</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-center p-4"> 
        {/* card */}
        <div className="md:96  bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
            <div className="flex flex-row items-center">
              <div className="w-16 h-16 mr-4">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">AOUB AK</span>
                <span className="text-cyan-500">Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
          <div>
            <p>
              “The team truly understood our brand and delivered a campaign that
              doubled our traffic. Highly recommended!”
            </p>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-2 ">
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaFacebookF />
                </span>
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaTwitter />
                </span>
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaLinkedinIn />
                </span>
              </div>
              <div className="flex space-x-1">
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:96 bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
            <div className="flex flex-row items-center">
              <div className="w-16 h-16 mr-4">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">AOUB AK</span>
                <span className="text-cyan-500">Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
          <div>
            <p>
              “The team truly understood our brand and delivered a campaign that
              doubled our traffic. Highly recommended!”
            </p>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-2 ">
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaFacebookF />
                </span>
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaTwitter />
                </span>
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaLinkedinIn />
                </span>
              </div>
              <div className="flex space-x-1">
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:96 bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
            <div className="flex flex-row items-center">
              <div className="w-16 h-16 mr-4">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">AOUB AK</span>
                <span className="text-cyan-500">Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
          <div>
            <p>
              “The team truly understood our brand and delivered a campaign that
              doubled our traffic. Highly recommended!”
            </p>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-2 ">
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaFacebookF />
                </span>
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaTwitter />
                </span>
                <span className="bg-cyan-700 p-2 hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                  <FaLinkedinIn />
                </span>
              </div>
              <div className="flex space-x-1">
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
                <span className="text-yellow-600 " ><FaStar/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testmonials;
