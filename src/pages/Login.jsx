import { KeyRound, Send } from "lucide-react";
import React from "react";

function Login() {
  return (
    <section className="container mx-auto h-screen flex justify-center items-center">
      <div className="border dark:bg-gray-800 p-10 w-1/2 dark:text-white border-neutral-300 dark:border-neutral-300/20 rounded-md shadow-md shadow-neutral-600/10">
        <h1 className="text-3xl mb-2 font-bold">Welcome Back</h1>
        <p className="">Welcome Back Please enter your details </p>
        <div>
          <form className="flex flex-col mt-5">
            <label htmlFor="">Email</label>
           <div className="w-full rounded-md flex justify-start items-center ">
            <span className="p-2 rounded-l-lg border bg-cyan-900 dark:bg-gray-700/40 border-neutral-300/10"><Send color="#06b6d4"  /></span>
             <input
              type="email"
              placeholder="Enter Email"
              className="border rounded-r-lg mt-2 mb-2 bg-neutral-200 w-full dark:bg-gray-700 dark:text-white border-neutral-300/10 rounde p-2 focus:outline-none focus:border-cyan-500"
            />
           </div>
            <label htmlFor="">Password</label>
             <div className="w-full rounded-md flex justify-start items-center ">
            <span className="p-2 rounded-l-lg border bg-cyan-900 dark:bg-gray-700/40 border-neutral-300/10"><KeyRound color="#06b6d4" /></span>
             <input
              type="password"
              placeholder="Enter Password"
              className="border rounded-r-lg mt-2 mb-2 bg-neutral-200 w-full dark:bg-gray-700 dark:text-white border-neutral-300/10 rounde p-2 focus:outline-none focus:border-cyan-500"
            />
           </div>
            <a href="#" className="text-sm text-neutral-400">Forget Password</a>
            <button className="bg-cyan-700 mt-2 mb-2 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors">
              Login
            </button>
             <button className="border border-neutral-500 dark:text-white text-neutral-800 mt-2 py-2 rounded-md hover:bg-gray-800/10 transition-colors">
              Sign in with Google
            </button>
            <div className="text-center mt-4">
              <span className="text-sm"> Don't have an account?</span> 
              <span className="font-bold text-sm cursor-pointer"> Sign up for free</span> 
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
