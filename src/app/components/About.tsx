import React from 'react'
import Image from "next/image";
import rhyzenpic from "../images/rhyzen.jpg";


export default function About() {
  return (
    <section id='about' className="min-h-screen flex sm:items-center">
        <div className="sm:grid grid-cols-4">
          <div className="col-span-3">
            <div className="grid sm:grid-cols-[auto_1fr] w-full gap-x-10 ">
              <div className="w-full hidden sm:flex sm:flex-col sm:justify-center">
                <h2 className="text-7xl font-medium text-center">A</h2>
                <h2 className="text-7xl font-medium text-center">b</h2>
                <h2 className="text-7xl font-medium text-center">o</h2>
                <h2 className="text-7xl font-medium text-center">u</h2>
                <h2 className="text-7xl font-medium text-center">t</h2>
                <h2 className="text-7xl font-medium text-center">•</h2>
                <h2 className="text-7xl font-medium text-center">M</h2>
                <h2 className="text-7xl font-medium text-center">e</h2>
              </div>

              <div className='w-full block sm:hidden'>
                <h2 className='text-4xl font-medium my-2.5 text-center'>About • Me</h2>
              </div>

              <div className="flex flex-col justify-center">
                <div className='sm:px-1 sm:py-0 py-1 text-justify'>
                  <p className='mb-2.5'>
                    Hi! I&apos;m <strong>Rhy</strong>! I have a knack for minimal, clean user interfaces, and discovering things.
                    I turn wireframe designs to fully functional websites (I&apos;m still learning the craft of web designing) and 
                    gathering inspirations for future web designs and layouts on the web!
                  </p>
                  <p>
                    Outside of programming, I mostly enjoy my freetime gaming, listening to music and podcasts, or watching media. 
                  </p>
                </div>
              </div>
            </div> 
          </div>
          <div className="col-start-4 flex items-center w-full max-w-lg mx-auto sm:px-5">
            <Image src={rhyzenpic} alt="Me" layout="responsive" className="w-full h-full rounded-4xl"/>
          </div>
        </div>
    </section>
  )
}
