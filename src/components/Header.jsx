import React, { use, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed  top-0  left-0 w-full z-50">
      <nav className=" mx-auto relative p-2  ">
        <div className="container mx-auto flex justify-between items-center border border-cyan-800 rounded md:rounded-full mt-2 mb-2  text-white p-4  bg-gray-800/50 backdrop-blur-md shadow shadow-cyan-900 ">
          <div className="text-2xl font-bold">
            <a href="/" className="hover:text-gray-400">
              AOUBAK
            </a>
          </div>
          <ul
            className={`absolute top-18 rounded border border-cyan-800 md:border-0 h-screen w-full bg-gray-800  p-4 transition-all duration-700 z-50 ease-in-out md:static md:h-auto md:w-3xl md:flex md:justify-between md:space-x-4 md:p-0 md:bg-transparent ${
              isOpen ? "left-0" : "-left-100 "
            }`}
          >
            <div className="flex flex-col md:flex-row md:space-x-4">
              <li className="w-full md:w-auto bg-gray-600/50 md:bg-transparent mb-2 md:mb-0 rounded-md md:rounded-none ">
              <a className="hover:text-gray-400 block p-2" href="/">
                Home
              </a>
            </li>
            <li className="w-full md:w-auto bg-gray-600/50 md:bg-transparent mb-2 md:mb-0 rounded-md ">
              <a className="hover:text-gray-400 block p-2" href="#about">
                About
              </a>
            </li>
            <li className="w-full md:w-auto bg-gray-600/50 md:bg-transparent mb-2 md:mb-0 rounded-md ">
              <a className="hover:text-gray-400 block p-2" href="#services">
                Services
              </a>
            </li>
            <li className="w-full md:w-auto bg-gray-600/50 md:bg-transparent mb-2 md:mb-0 rounded-md ">
              <a className="hover:text-gray-400 block p-2" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="w-full md:w-auto bg-gray-600/50 md:bg-transparent mb-2 md:mb-0 rounded-md ">
              <a className="hover:text-gray-400 block p-2" href="#contact">
                Contact
              </a>
            </li>
            {/* <li className="w-full md:w-auto bg-gray-600/50 md:bg-transparent mb-2 md:mb-0 rounded-md ">
              <a className="hover:text-gray-400 block p-2" href="/contact">
                Blog
              </a>
            </li> */}
            </div>
           <div className="flex flex-col md:flex-row md:space-x-4">
             <li className="w-full md:w-auto">
              <a
                className=" hover:bg-cyan-600 bg-cyan-700 duration-300 rounded md:rounded-full px-4 py-2  mb-2 md:mb-0 block"
                href="/login"
              >
                Get a Quote
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                className="hover:bg-cyan-600 bg-cyan-700  duration-300 rounded md:rounded-full px-4 py-2 block"
                href="/register"
              >
                Register
              </a>
            </li>
           </div>
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl"
            >
              {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
