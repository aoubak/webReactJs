import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaStar } from "react-icons/fa";
import LogoImage from "../assets/images/Logo.png";
import { FaEnvelope } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ScrollToTopButton from "./ScrollToTopButton";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-10">
      <ScrollToTopButton /> 
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="w-16">
            <img src={LogoImage} className="w-full" alt="" />
          </div>
          <h2 className="text-xl font-bold mb-2">AOUBAK</h2>
          <p className="text-sm text-gray-400">
            We help brands grow through strategic planning, creative design, and
            results-driven digital marketing — turning ideas into impactful
            online experiences.
          </p>
          <div className="flex space-x-2 mt-4 ">
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

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white">
                Our Work
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#quote" className="hover:text-white">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm flex items-center gap-2 mb-2 text-gray-400"><span className="text-lg bg-cyan-900 p-2 rounded-md hover:bg-cyan-700 duration-300 cursor-pointer text-cyan-300" ><FaEnvelope/></span> hello@youragency.com</p>
          <p className="text-sm flex items-center gap-2 mb-2 text-gray-400"><span className="text-lg bg-cyan-900 p-2 rounded-md hover:bg-cyan-700 duration-300 cursor-pointer text-cyan-300" ><MdAddIcCall/></span>  +123 456 7890</p>
          <p className="text-sm flex items-center gap-2 mb-2 text-gray-400"><span className="text-lg bg-cyan-900 p-2 rounded-md hover:bg-cyan-700 duration-300 cursor-pointer text-cyan-300" ><FaLocationDot/></span>  Mogadishu, Somalia</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AOUBAK. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
