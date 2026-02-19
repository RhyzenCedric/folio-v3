import { projects } from '@/lib/projects'
import Image from 'next/image'
import React from 'react'

export default function Projects() {
  return (
    <section id='projects' className='min-h-screen flex items-center'>
        <div className="grid sm:grid-cols-[auto_1fr] w-full gap-x-10 ">
          <div className="w-full hidden sm:flex sm:flex-col sm:justify-center">
            <h2 className="text-7xl font-medium text-center">P</h2>
            <h2 className="text-7xl font-medium text-center">r</h2>
            <h2 className="text-7xl font-medium text-center">o</h2>
            <h2 className="text-7xl font-medium text-center">j</h2>
            <h2 className="text-7xl font-medium text-center">e</h2>
            <h2 className="text-7xl font-medium text-center">c</h2>
            <h2 className="text-7xl font-medium text-center">t</h2>
            <h2 className="text-7xl font-medium text-center">s</h2>
          </div>

          <div className='w-full block sm:hidden'>
            <h2 className='text-4xl font-medium my-2.5 text-center'>Projects</h2>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {projects.map((project, index)=>(
              <a key={index} className='overflow-hidden hover:cursor-pointer hover:font-bold '>
                <div className='w-full lg:h-70 border-2 rounded-xl shadow hover:shadow-lg transition-shadow '>
                  <Image src={project.img} alt={project.name} className='w-full h-full object-cover p-2.5'/>
                </div>
                <div className='flex justify-between items-center my-2.5'>
                  <h3 className='lg:text-5xl md:text-4xl text-3xl'>{project.name}</h3>
                  <p className='text-2xl'>{project.date}</p>
                </div>
              </a>
            ))}
            </div>
          </div>
        </div>        
    </section>
  )
}
