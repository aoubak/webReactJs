import React from "react";
import Ctabg from "../assets/images/cta.png";
import Boost from "../assets/images/boost.png";
import { motion } from "framer-motion";
function CTA_action() {
  return (
    <section
      style={{ backgroundImage: `url(${Ctabg})` }}
      className="bg-radial  from-cyan-900 from-40% to-gray-900 mt-20 bg-center bg-cover  md:h-[300px]"
    >
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between">
        <div className="flex-1 flex flex-col  justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl  font-bold mb-2">
              Let<span className="text-cyan-500">'</span>s{" "}
              <span className="text-cyan-500">Boost</span> Your{" "}
              <span className="text-cyan-500">Business</span>.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-4">
              Unlock your brand’s full potential with smart digital strategies.
              We help you grow faster, smarter, and stronger.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <a
                href="/contact"
                className="bg-cyan-900 border duration-300  border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full inline-block"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full flex justify-center md:justify-end"
          >
             <img src={Boost} alt="" className="md:flex hidden h-[250px]" />
          </motion.div>
      
      </div>
    </section>
  );
}

export default CTA_action;
