import React from "react";
import heroImage from "../assets/images/hero.png"; // Adjust the path as necessary
import hero3dImage from "../assets/images/hero_3d.png"; // Adjust the path as necessary
import Grid from "../assets/images/grid.png";
import { motion } from "framer-motion";
import Features from '../components/Features'

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${Grid})` }}
      className=" md:h-[450px] bg-cover md:mb-10"
    >
      {/* <section className="bg-linear-65 bg-gradient-to-t from-slate-800  to-slate-700 text-white py-16 md:py-20"> */}
      <section className="bg-radial  from-emerald-900/20 from-10% to-gray-900 md:h-full text-gray-100 pt-20  md:pt-30">
        <div className="container  mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1 w-full text-left md:text-center mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl leading-none   sm:text-4xl md:text-[55px] md:text-balance font-bold mb-4 ">
                Grow Your Business with Proven Digital Marketing Strategies
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-base sm:text-lg mb-4">
                We help startups and businesses scale online with expert SEO,{" "}
                <br /> social media, and performance marketing services.
              </p>
            </motion.div>

            <div className="flex flex-col w-52 md:w-full space-y-4 md:flex-row md:space-x-3 md:space-y-0 justify-center   md:items-center ">
              {/* <a href="/get-started" className="bg-cyan-700 border-1 border-cyan-700 hover:bg-transparent text-white font-bold py-3 px-6 rounded inline-block" >
                        🚀 Get Started
                    </a> */}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <a
                  href="/get-started"
                  className="bg-radial from-cyan-700 from-20% to-gray-900 
 border-1 border-cyan-700 hover:bg-transparent hover:from-cyan-900  text-white font-bold transition-colors duration-300 py-3 px-6 rounded-full inline-block"
                >
                  🚀 Get Started
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <a
                href="/get-started"
                className="bg-transparent border-1 border-cyan-700 duration-300  hover:bg-radial transition-colors from-cyan-700 from-20% to-gray-900  hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-full"
              >
                📞 Book a Free Call
              </a>
              </motion.div>
            </div>
          </div>

          
          {/* <div className="flex-1 w-full flex justify-center">
                    <img
                        src={hero3dImage}
                        alt="Hero Image"
                        className="h-[280px] w-full sm:w-4/5 md:w-3/4  md:h-[400px] object-cover rounded-xl max-w-sm md:max-w-xl"
                    />
                </div> */}
        </div>
        {/* <Features /> */}
      </section>
    </div>
  );
}
