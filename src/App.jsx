
import About from "./components/About";
import Contact from "./components/Contact";
import CTA_action from "./components/CTA_action";
import Featers from "./components/featers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {

  return (
    <>
     <Header />
     <Hero />
     <Featers/>
     <About />
     <Services />
     <Portfolio />
     <Testimonials />
     <CTA_action />
     <Contact />
     <Footer />
     <ScrollToTopButton />
     
    </>
  )
}

export default App
