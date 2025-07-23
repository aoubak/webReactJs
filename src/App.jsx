import { Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CTA_action from "./components/CTA_action";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";

function App() {
   const [darkMode, setDarkMode] = useState(()=>{

    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse (savedMode) : false;
   }); 
  
    useEffect(() =>{
      if(darkMode){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark");
      }

      // Save to localStorage on every change
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    },[darkMode]);
  
    const toggleDarkMode =()=>{
      setDarkMode(!darkMode);
    }

  return (
    <div
      className="bg-neutral-100  dark:bg-neutral-900"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255, 255, 255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255,0.05) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }}
    >
      <div  style={{
        backgroundImage:
        "radial-gradient( rgba(255,255,255, 0.1) 1px, transparent 1px",
        backgroundSize: "20px 20px",
      }}>

         <div className=" fixed top-8 cursor-pointer right-20 lg:right-10 z-1000 lg:top-8">
         <button onClick={toggleDarkMode} className=" text-white dark:bg-cyan-950 dark:text-white flex cursor-pointer justify-center items-center w-9 h-9 shadow-md shadow-cyan-700 border border-cyan-400 bg-cyan-700 duration-300 rounded-full  md:mb-0 ">
        <i className={`bxr bx-${darkMode ? "moon-star" : "sun-bright"}`}></i> 
        </button>
       </div>

      
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      </div>
    </div>
  );
}

export default App;
