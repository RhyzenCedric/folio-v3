import React from 'react'

export default function Skills() {
  return (
    <section id='techstack' className="min-h-screen flex sm:items-center">
        <div className="md:grid grid-cols-[auto_1fr] w-full gap-x-10 ">
          <div className="w-full hidden sm:flex sm:flex-col sm:justify-center">
            <h2 className="text-7xl font-medium text-center">T</h2>
            <h2 className="text-7xl font-medium text-center">e</h2>
            <h2 className="text-7xl font-medium text-center">c</h2>
            <h2 className="text-7xl font-medium text-center">h</h2>
            <h2 className="text-7xl font-medium text-center">•</h2>
            <h2 className="text-7xl font-medium text-center">S</h2>
            <h2 className="text-7xl font-medium text-center">t</h2>
            <h2 className="text-7xl font-medium text-center">a</h2>
            <h2 className="text-7xl font-medium text-center">c</h2>
            <h2 className="text-7xl font-medium text-center">k</h2>
          </div>

          <div className='w-full block sm:hidden'>
            <h2 className='text-4xl font-medium my-2.5 text-center'>Tech • Stack</h2>
          </div>

          <div className="flex flex-col justify-center">
            <div className='md:grid grid-cols-5 flex flex-col'>
                <div className='col-span-2 w-full '>
                    <h3 className='lg:text-5xl md:text-4xl text-3xl mb-2.5 font-medium md:text-left text-right '>Development</h3>
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">Next.js</p>
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">ReactJS</p>
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">TypeScript</p>
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">JavaScript</p>
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">Tailwind CSS</p>   
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">Express.js</p>
                    <p className="flex items-center justify-end md:justify-start border-t-2 py-2.5 text-2xl">Kotlin</p>
                </div>
                <div className=' col-start-4 col-span-2 w-full'>
                    <h3 className='lg:text-5xl md:text-4xl text-3xl  mb-2.5 font-medium'>Tools</h3>
                    <p className="flex items-center border-t-2 py-2.5 text-2xl">VSCode</p>
                    <p className="flex items-center border-t-2 py-2.5 text-2xl">Git / Github</p>
                    <p className="flex items-center border-t-2 py-2.5 text-2xl">Android Studio</p>  
                    <p className="flex items-center border-t-2 py-2.5 text-2xl">Postman</p>
                    <p className="flex items-center border-t-2 py-2.5 text-2xl">WordPress</p>
                    <p className="flex items-center border-t-2 py-2.5 text-2xl">Figma</p>  
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}
