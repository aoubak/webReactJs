import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="Contact" className="container mx-auto mt-16">
      {/* Section header */}
      <div className="md:text-center md:mb-8 p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Work Together
          </h1>
          <p className="text-base sm:text-lg">
            Ready to grow your brand? We’re just one message away.
          </p>
        </motion.div>
      </div>
      {/* sectoin contant */}
      <div className="flex flex-col gap-8 md:flex-row p-4">
        <div className=" flex-1 space-y-2 ">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h1 className="text-3xl font-bold">Get in touch</h1>
              <p className="text-gray-300">
                Have a project in mind or need help boosting your online
                presence? Let’s connect and bring your ideas to life. Whether
                it’s a quick chat or a full proposal, we’re here to help.
              </p>
            </div>
          </motion.div>

          <div className=" py-4">
            <hr className=" text-gray-500 mb-4" />
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay:0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-start items-start bg-gray-700/20 p-3 rounded-md gap-4">
                <div>
                  <span className="text-2xl bg-amber-200">
                    <FaLocationDot />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Location:</span>
                  <span className="text-gray-400">
                    Mogadishu, Somalia (or your city)
                  </span>
                </div>
              </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay:0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-start items-start bg-linear-to-r from-cyan-500/5 to-cyan-900 p-3 rounded-md gap-4">
                <div>
                  <span className="text-2xl">
                    <MdAddIcCall />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>Phone:</span>
                  <span className="text-gray-400">+123 456 7890</span>
                </div>
              </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , delay:0.3}}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-start items-start bg-gray-700/20 p-3 rounded-md gap-4">
                <div>
                  <span className="text-2xl bg-amber-300">
                    <FaEnvelope />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>Location</span>
                  <span className="text-gray-400">
                    Mogadishu, Somalia (or your city)
                  </span>
                </div>
              </div>
              </motion.div>
              
            </div>
            <hr className=" text-gray-500 mb-4 mt-4" />
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , delay:0.3}}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
              <h1 className=" font-bold">Follow our social media</h1>
              <div className="mt-2">
                
                <div className="flex space-x-2 ">
                  <span className="bg-cyan-700 p-2 duration-300  hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                    <FaFacebookF />
                  </span>
                  <span className="bg-cyan-700 p-2 duration-300  hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                    <FaTwitter />
                  </span>
                  <span className="bg-cyan-700 p-2 duration-300  hover:bg-cyan-800 cursor-pointer rounded-md border border-cyan-500">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </div>
              </motion.div>
            
          </div>
        </div>
         <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , delay:0.3}}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-1 flex-col md:flex-row bg-gradient-to-b   from-cyan-900 to-cyan-700 rounded-md"
              >
                 <div className="p-4">
            {/* header */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold">Send a Message</h1>
              <p className="text-gray-300">
                We’d love to hear from you! Whether you have a question, project
                idea, or need advice, drop us a message, and we’ll get back to
                you as soon as possible.
              </p>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col mb-2 w-full">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="p-2 outline-0 bg-gray-800 rounded-md "
                  placeholder="Ayub Ak"
                />
              </div>
              <div className="flex flex-col mb-2 w-full">
                <label htmlFor="">Company</label>
                <input
                  type="text"
                  className="p-2 outline-0 bg-gray-800 rounded-md "
                  placeholder="TechGen"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col mb-2 w-full">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  className="p-2 outline-0 bg-gray-800 rounded-md "
                  placeholder="Ayub Ak"
                />
              </div>
              <div className="flex flex-col mb-2 w-full">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="p-2 outline-0 bg-gray-800 rounded-md "
                  placeholder="exmaple@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col mb-2 w-full">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  className="p-2 outline-0 bg-gray-800 rounded-md "
                  placeholder="Website Building"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col mb-2 w-full">
                <label htmlFor="">Phone</label>
                <textarea
                  name=""
                  className="p-2 outline-0 h-20 bg-gray-800 rounded-md"
                  id=""
                ></textarea>
              </div>
            </div>
            <a
              href="/contact"
              className="bg-cyan-900 border duration-300  border-cyan-600 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Submit
            </a>
          </div>
              </motion.div>
        
      </div>
    </section>
  );
}

export default Contact;
