import React from 'react'
import Portfolio from '../components/Portfolio'
import Grid from "../assets/images/grd_col.png";
import CTA_action from '../components/CTA_action';
import Contact from '../components/Contact';

export default function PortfolioPage() {
  return (
    <>
    <section className='container mx-auto mt-30'>
        <div style={{backgroundImage: `url(${Grid})` }} className="bg-center bg-cover flex justify-center items-center rounded-2xl bg-gradient-to-b  from-cyan-800 to-gray-800 h-50">
                <h1 className="text-5xl">Our<span className='font-bold text-cyan-400'>Portfolio </span></h1>
              </div>
    <Portfolio/>
    </section>
    <CTA_action />
       <Contact/>
    </>
  )
}
