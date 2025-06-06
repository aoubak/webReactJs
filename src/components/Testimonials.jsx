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

const Testimonials = () => {
  return (
    <section className="container mx-auto">
      <div className="md:text-center md:mb-8 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h1>
        <p className="text-base sm:text-lg">
          We’re proud to partner with amazing clients — and even prouder when
          they share their experience working with us. Here’s what a few of them
          had to say about our digital marketing work.
        </p>
      </div>
      {/* <div className="flex flex-col gap-4 md:flex-row justify-center p-4">
        <div className="md:96  bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
            <div className="flex flex-row items-center">
              <div className="w-16 h-16 mr-4">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">AOUB AK</span>
                <span className="text-cyan-500">Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
          <div>
            <p>
              “The team truly understood our brand and delivered a campaign that
              doubled our traffic. Highly recommended!”
            </p>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-2 ">
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
              <div className="flex space-x-1">
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:96 bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
            <div className="flex flex-row items-center">
              <div className="w-16 h-16 mr-4">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">AOUB AK</span>
                <span className="text-cyan-500">Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
          <div>
            <p>
              “The team truly understood our brand and delivered a campaign that
              doubled our traffic. Highly recommended!”
            </p>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-2 ">
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
              <div className="flex space-x-1">
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:96 bg-gray-800 border p-4 rounded-md border-cyan-800">
          <div className="flex justify-between items-center bg-slate-900 mb-4 p-2 rounded-md">
            <div className="flex flex-row items-center">
              <div className="w-16 h-16 mr-4">
                <img
                  src={Test_1}
                  alt=""
                  srcset=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">AOUB AK</span>
                <span className="text-cyan-500">Founder, BloomCo</span>
              </div>
            </div>
            <div>
              <BiSolidQuoteRight size={36} color="#12688a" />
            </div>
          </div>
          <div>
            <p>
              “The team truly understood our brand and delivered a campaign that
              doubled our traffic. Highly recommended!”
            </p>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex space-x-2 ">
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
              <div className="flex space-x-1">
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
                <span className="text-yellow-600 ">
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
          className="w-full  max-w-3xl mx-auto"
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
    </section>
  );
};

export default Testimonials;
