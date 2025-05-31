import React from 'react'
import heroImage from '../assets/images/hero.png'; // Adjust the path as necessary

export default function Hero() {
return (
    <div className='mt-16 md:mb-20'>
        <section className="bg-linear-65 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 text-white py-16 md:py-20">
            <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex-1 w-full text-left md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl leading-none sm:text-4xl md:text-8xl font-bold mb-2 ">Hi, Welcome </h1>
                    <h1 className="text-4xl leading-none sm:text-4xl md:text-6xl font-bold mb-2">To My Website</h1>
                    <p className="text-base sm:text-lg mb-8">This is a simple hero section with a call to action.</p>

                    <a href="/get-started" className="bg-gray-900 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded inline-block" >
                        Get Started
                    </a>
                </div>
                <div className="flex-1 w-full flex justify-center">
                    <img
                        src={heroImage}
                        alt="Hero Image"
                        className="w-4/5 sm:w-3/5 md:w-full h-auto rounded-lg max-w-xs md:max-w-md"
                    />
                </div>
            </div>
        </section>
    </div>
)
}
