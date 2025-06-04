import React from 'react'
import heroImage from '../assets/images/hero.png'; // Adjust the path as necessary
import hero3dImage from '../assets/images/hero_3d.png'; // Adjust the path as necessary

export default function Hero() {
return (
    <div className='md:mt-16 md:mb-10'>
        {/* <section className="bg-linear-65 bg-gradient-to-t from-slate-800  to-slate-700 text-white py-16 md:py-20"> */}
        <section className="bg-radial from-cyan-900 from-40% to-slat-700 text-white py-16 md:py-20">
            <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex-1 w-full text-left md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl leading-none sm:text-4xl md:text-[55px] md:text-balance font-bold mb-2 ">
                        Grow Your Business with Proven Digital Marketing Strategies 
                    </h1>
                    {/* <h1 className="text-4xl leading-none sm:text-4xl md:text-6xl font-bold mb-2">To My Website</h1> */}
                    <p className="text-base sm:text-lg mb-8">We help startups and businesses scale online with expert SEO, social media, and performance marketing services.</p>

                    <div className='flex flex-col space-y-2 md:flex-row md:space-x-3 md:space-y-0  md:items-center '>
                        <a href="/get-started" className="bg-cyan-700 border-1 border-cyan-700 hover:bg-transparent text-white font-bold py-3 px-6 rounded inline-block" >
                        🚀 Get Started
                    </a>
                    <a href="/get-started" className="bg-transparent border-1 border-cyan-700 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded inline-block" >
                        📞 Book a Free Call
                    </a>
                    </div>
                    
                </div>
                <div className="flex-1 w-full flex justify-center">
                    <img
                        src={hero3dImage}
                        alt="Hero Image"
                        className="w-11/12 sm:w-4/5 md:w-3/4 h-[300px] md:h-[400px] object-cover rounded-xl max-w-sm md:max-w-xl"
                    />
                </div>
            </div>
        </section>
    </div>
)
}
