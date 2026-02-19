import React from 'react'

export default function Experience() {
  return (
    <section id='experience' className='min-h-screen flex items-center'>
        <div className="grid sm:grid-cols-[auto_1fr] w-full gap-x-10 ">
          <div className="w-full hidden sm:flex sm:flex-col sm:justify-center">
            <h2 className="text-7xl font-medium text-center">E</h2>
            <h2 className="text-7xl font-medium text-center">x</h2>
            <h2 className="text-7xl font-medium text-center">p</h2>
            <h2 className="text-7xl font-medium text-center">e</h2>
            <h2 className="text-7xl font-medium text-center">r</h2>
            <h2 className="text-7xl font-medium text-center">i</h2>
            <h2 className="text-7xl font-medium text-center">e</h2>
            <h2 className="text-7xl font-medium text-center">n</h2>
            <h2 className="text-7xl font-medium text-center">c</h2>
            <h2 className="text-7xl font-medium text-center">e</h2>
          </div>

          <div className='w-full block sm:hidden'>
            <h2 className='text-4xl font-medium my-2.5 text-center'>Experience</h2>
          </div>
          
          <div className="flex flex-col justify-center"> 
            <div className="grid grid-cols-[auto_1fr_1fr] lg:gap-x-10 gap-x-3 w-full">
                <div className='flex flex-col items-center justify-start'>
                    <div className='flex-none sm:w-4 sm:h-4 w-2 h-2 bg-(--foreground) rounded-full lg:mt-4 mt-3'></div>
                    <div className='w-1 bg-(--foreground) h-full sm:mt-5 mt-3'></div>
                </div>
                <div className='lg:col-span-1 col-span-2'>
                    <h3 className='lg:text-5xl md:text-4xl text-3xl font-medium'> 2026</h3>
                    <div className='my-5'>
                        <ul className='space-y-3'>
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Built Moviefy, a music-driven movie recommendation app using Next.js and API integrations.</p>
                                </div>                              
                            </li>
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Rebuilt portfolio (<a href='https://rhy-folio.vercel.app/' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>v2</a> → v3) using Next.js + Tailwind to improve UI structure and responsiveness..</p>
                                </div>
                                <ul className='pl-5 mt-1 text-sm opacity-80'>
                                    <li>
                                        <div className='flex items-center gap-x-2 my-2.5'>
                                            <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                            <p>Refactored components for cleaner layout and scalability.</p>
                                        </div>  
                                    </li>
                                </ul>                             
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='hidden lg:block borders border-(--foreground)'>{/*for 3rd column, prolly an image?*/}</div>

                <div className='flex flex-col items-center justify-start col-start-1'>
                    <div className='flex-none sm:w-4 sm:h-4 w-2 h-2 bg-(--foreground) rounded-full lg:mt-4 mt-3'></div>
                    <div className='w-1 bg-(--foreground) h-full sm:mt-5 mt-3'></div>
                </div>
                <div className='lg:col-span-1 col-span-2'>
                   <h3 className='lg:text-5xl md:text-4xl text-3xl font-medium'> 2025</h3>
                    <div className='my-5'>
                        <ul className='space-y-3'>
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Enhanced portfolio <a href='https://rhy-folio.vercel.app/' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>v2</a> using Next.js, focusing on UI polish and performance improvements.</p>
                                </div>                                 
                            </li>                            
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Junior Web Developer Intern — <a href='https://high6.com/' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>High 6</a>; 
                                    Contributed to production web projects and QA workflows.</p>
                                </div> 
                                <ul className='pl-5  mt-1 text-sm opacity-80'>
                                    <li>
                                        <div className='flex items-center gap-x-2 my-2.5'>
                                            <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                            <p>Implemented wireframes into responsive web interfaces and performed testing.</p>
                                        </div>  
                                    </li>
                                </ul>                               
                            </li>
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Developed <a href='' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>PhisherMan</a>, a phishing-detection mobile app using OCR techniques.</p>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='hidden lg:block borders border-(--foreground)'>{/*for 3rd column, prolly an image?*/}</div>

                <div className='flex flex-col items-center justify-start col-start-1'>
                    <div className='flex-none sm:w-4 sm:h-4 w-2 h-2 bg-(--foreground) rounded-full lg:mt-4 mt-3'></div>
                    <div className='w-1 bg-(--foreground) h-full sm:mt-5 mt-3'></div>
                </div>
                <div className='lg:col-span-1 col-span-2'>
                   <h3 className='lg:text-5xl md:text-4xl text-3xl font-medium'> 2024</h3>
                    <div className='my-5'>
                        <ul className='space-y-3'>
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Built <a href='https://2-tor-expressjs.vercel.app/' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>2Tor</a>,a tutoring platform with educator ranking powered by NLP and sentiment analysis.</p>
                                </div> 
                                <ul className='pl-5  mt-1 text-sm opacity-80'>
                                    <li>
                                        <div className='flex items-center gap-x-2 my-2.5'>
                                            <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                            <p>Implemented ranking logic to improve educator discoverability.</p>
                                        </div>                              
                                    </li>
                                </ul>                                
                            </li>                            
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Developed <a href='https://ccit-106-project.vercel.app/' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>Clinnect</a>, a healthcare navigation app using geolocation and search optimization.</p>
                                </div>
                                <ul className='pl-5  mt-1 text-sm opacity-80'>
                                    <li>
                                        <div className='flex items-center gap-x-2 my-2.5'>
                                            <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                            <p>Enabled insurance-based routing to nearby medical facilities.</p>
                                        </div>                              
                                    </li>
                                </ul>                              
                            </li>
                            <li>
                                <div className='flex items-center gap-x-2 my-2.5'>
                                    <p className='flex-none w-2 h-2 bg-(--foreground) rounded-full '></p>
                                    <p>Created portfolio <a href='https://rhyzen-portfolio.vercel.app/' target="_blank" rel="noopener noreferrer" className='font-bold text-(--text-muted) hover:text-(--foreground)'>v1</a> using React + Vite to showcase early web development progress and projects.</p>
                                </div>                                 
                            </li>                          
                        </ul>
                    </div>
                </div>
                
                <div className='hidden lg:block borders border-(--foreground)'>{/*for 3rd column, prolly an image?*/}</div>
            </div>
          </div>
        </div>        
    </section>
  )
}
