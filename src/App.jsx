import { Outlet, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const hideLayout = ["/login"];
  const shouldHide = hideLayout.includes(location.pathname);

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

        

      
      <ScrollToTop />
      {!shouldHide && <Header />}
      <Outlet />
      {!shouldHide && <Footer />}
      </div>
    </div>
  );
}

export default App;
