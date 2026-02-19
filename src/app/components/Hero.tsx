import React from 'react'

export default function Hero() {
  return (
    <section id='hero' className="min-h-screen flex items-center ">
        <div className="w-full grid gap-4 md:grid-cols-2 md:gap-6">
          <h1 className="md:col-span-2 text-center md:text-left lg:text-9xl md:text-7xl text-5xl font-bold leading-none">
            R<span>hy</span>
            <span className="text-(--theme-color)">z</span>
            <span className="text-(--accent)">e</span>
            <span className="text-(--theme-color)">n</span><span className='text-sm'>v3</span>
          </h1>

          <h1 className=" text-center md:text-left lg:text-9xl md:text-7xl text-5xl font-bold leading-none">
              C<span>edric</span>
          </h1>

          <p className="hidden sm:block self-center text-center md:text-left text-xl">
            Front-End Leaning, 
            <br />
            Full-Stack Web Developer
          </p>

          <h1 className="md:col-span-2 text-center md:text-left lg:text-9xl md:text-7xl text-5xl font-bold leading-none">
            B<span>umatay</span>
          </h1>

          <p className="block sm:hidden self-center text-center md:text-left text-xl">
            Front-End Leaning, 
            <br />
            Full-Stack Web Developer
          </p>

        </div>
    </section>
  )
}
