import React from 'react'
import heroImage from '../assets/images/hero.png'; // Adjust the path as necessary

export default function Hero() {
  return (
    <div>
        <section className="bg-linear-65 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500  text-white py-20">
            <div className="container mx-auto p-4 flex justify-center items-center">
                <div className='flex-1'>
                <h1 className="text-5xl font-bold mb-4">Hi, Welcome to </h1>
                <h1 className="text-5xl font-bold mb-4">My Website</h1>
                <p className="text-lg mb-8">This is a simple hero section with a call to action.</p>
                <a href="/get-started" className="bg-gray-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </a>
                </div>
                <div className="flex-1">
                    <img src={heroImage} alt="Hero Image" className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </section>
    </div>
  )
}
