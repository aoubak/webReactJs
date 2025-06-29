import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaStar } from "react-icons/fa";
import Test_1 from "../assets/images/test_1.png";
import Test_2 from "../assets/images/test_2.jpg";
import Test_3 from "../assets/images/test_3.avif";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="container mx-auto">
      <div className="md:text-center md:mb-8 p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8,  }}
          viewport={{ once: true, amount: 0.3 }}
        >
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h1>
        <p className="text-base sm:text-lg">
          We’re proud to partner with amazing clients — and even prouder when
          they share their experience working with us. Here’s what a few of them
          had to say about our digital marketing work.
        </p>
        </motion.div>
       
      </div>
 <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8,  }}
          viewport={{ once: true, amount: 0.3 }}
        >
<div className="relative p-4 mb-9 ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={30}
          // slidesPerView={2}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile
            },
            768: {
              slidesPerView: 2, // Tablet and up
            },
            1024: {
              slidesPerView: 2, // Desktop
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <TestimonialCard
              name="Ayub Ak"
              title="Founder, BloomCo"
              description="The team truly understood our brand and delivered a campaign that doubled our traffic. Highly recommended!"
              image={Test_1}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name=" David K."
              title="CEO, TechHive"
              description="Professional, creative, and results-driven. 
              They turned our vision into a powerful online presence."
              image={Test_2}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              name="Lina A."
              title="Marketing Lead, FreshGlow"
              description="From social media to SEO, they handled everything smoothly. 
              We saw measurable growth in just 2 months."
              image={Test_3}
            />
          </SwiperSlide>

          {/* Add more SwiperSlides here */}
        </Swiper>
        <button className="custom-next  cursor-pointer absolute z-10 left-1/2 -bottom-15 ml-2  -translate-y-1/2 bg-cyan-800 border border-cyan-400 text-white p-2 rounded-full shadow">
          <ChevronRight />
        </button>
        <button className=" custom-prev cursor-pointer  absolute z-10 right-1/2 -bottom-15 mr-2 -translate-y-1/2 bg-cyan-800  border border-cyan-400 text-white p-2 rounded-full shadow">
          <ChevronLeft />
        </button>
      </div>
        </motion.div>
      
    </section>
  );
};

export default Testimonials;
