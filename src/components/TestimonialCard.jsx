import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaStar } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";

const TestimonialCard = ({ name, title, description, image }) => {
  return (
    <div className="md:96 bg-gray-800 border p-4 rounded-md border-cyan-800 min-h-[250px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
        <div className="flex flex-row items-center">
          <div className="w-16 h-16 mr-4">
            <img
              src={image}
              alt={name}
              className="w-full rounded border border-cyan-700 shadow-2xl shadow-cyan-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white">{name}</span>
            <span className="text-cyan-500">{title}</span>
          </div>
        </div>
        <div>
          <BiSolidQuoteRight size={46} color="#12688a" />
        </div>
      </div>

      {/* Content area (grow to fill space) */}
      <div className="flex flex-col justify-between flex-grow">
        <p className="text-white mb-4 flex-grow">"{description}"</p>

        {/* Footer section (fixed to bottom) */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
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
          <div className="flex space-x-1 text-yellow-600">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
