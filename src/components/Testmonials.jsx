import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
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
      <div className="flex flex-col md:flex-row">
        <div className="w-72 bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900">
            <div className="flex">
              <div className="w-28 h-28">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div>
                <span>AOUB AK</span>
                <span>Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testmonials;
