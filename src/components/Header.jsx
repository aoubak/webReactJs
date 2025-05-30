import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="bg-gray-800 mx-auto">
        <div className="container mx-auto flex justify-between items-center bg-gray-800  text-white p-4 ">
          <div className="text-2xl font-bold">
            <a href="/" className="hover:text-gray-400">
              AOUBAK
            </a>
          </div>
          <ul className="flex space-x-4 hidden md:flex">
            <li>
              <a className="hover:text-gray-400" href="/">Home</a>
            </li>
            <li >
              <a className="hover:text-gray-400" href="/about">About</a>
            </li>
            <li >
              <a className="hover:text-gray-400" href="/contact">Contact</a>
            </li>
            <li >
              <a className=" hover:bg-indigo-500 bg-indigo-600 rounded px-2 py-2" href="/login">Login</a>
            </li>
            <li >
              <a className="hover:bg-indigo-500 bg-indigo-600 rounded px-2 py-2" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
