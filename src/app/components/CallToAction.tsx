import React from 'react'

export default function CallToAction() {
  return (
    <section id='call-to-action' className=''>

            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className='font-medium md:text-7xl text-4xl sm:m-0 my-2.5'>Interested in working together? Let&apos;s 
                    <a href="https://mail.google.com/mail/?view=cm&to=rhyzen.cedric.bumatay@gmail.com"   target="_blank" 
                    rel="noopener noreferrer" className="text-(--text-muted) hover:font-bold hover:text-(--foreground)"> connect</a>
                    .
                    </h2>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className=' lg:col-start-3 md:col-start-2 col-span-2 md:grid grid-cols-2 gap-2'>
                    <div className='hidden sm:block'>
                        <p className='text-xl leading-[1.1]'>Other ways to connect</p>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <a href="https://www.linkedin.com/in/rcbumatay/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-(--text-color) text-(--text-muted) font-(family-name:--font-fira-code)">LinkedIn</a>
                        <a href="https://github.com/RhyzenCedric" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-(--text-color) text-(--text-muted) font-(family-name:--font-fira-code)">Github</a>
                        <a href="https://www.instagram.com/awry_zenith/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-(--text-color) text-(--text-muted) font-(family-name:--font-fira-code)">Instagram</a>
                        <a href="https://www.facebook.com/papelpng" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-(--text-color) text-(--text-muted) font-(family-name:--font-fira-code)">Facebook</a>
                        <a href="https://drive.google.com/file/d/1xKb7nzp51V9_IvF_pvRBjkpn8NdZtl2F/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-(--text-color) text-(--text-muted) font-(family-name:--font-fira-code)">Read my résumé</a>
                    </div>
                </div>
            </div>
    </section>
  )
}
