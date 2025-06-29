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


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
