"use client";
import { faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBolt, faBriefcase, faCode, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ThemeButton from './ThemeButton'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <section className='fixed inset-0 lg:top-1/2 lg:right-[1.5%] lg:transform lg:-translate-y-1/2 z-50 flex lg:items-center lg:justify-end items-end justify-center pointer-events-none'>
        <div className='h-fit w-fit bg-(--foreground)s flex lg:flex-col items-center justify-center  gap-3 lg:mb-0 mb-5 pointer-events-auto'>
            <a href='#hero' className='group relative w-fit'>
                <motion.div whileTap={{scale:0.8}}><FontAwesomeIcon icon={faHome} className='bg-(--foreground) rounded-2xl p-2 h-10 text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125 '/></motion.div>
                <p className='lg:block hidden bg-(--foreground) lg:absolute right-full top-1/2 -translate-y-1/2 mr-5 p-3 rounded-2xl opacity-0 font-(--font-fira-code) group-hover:opacity-100 transition duration-200 text-(--background) '>Home</p>
            </a>

            <a href='#about' className='group relative w-fit'>
                <motion.div whileTap={{scale:0.8}}><FontAwesomeIcon icon={faUser} className='bg-(--foreground) rounded-2xl p-2 h-10 text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125 '/></motion.div>
                <p className='lg:block hidden bg-(--foreground) lg:absolute right-full top-1/2 -translate-y-1/2 mr-5 p-3 rounded-2xl opacity-0 font-(--font-fira-code) group-hover:opacity-100 transition duration-200 text-(--background)'>About</p>
            </a>
            <a href='#techstack' className='group relative w-fit'>
                <motion.div whileTap={{scale:0.8}}><FontAwesomeIcon icon={faCode} className='bg-(--foreground) rounded-2xl p-2 h-10 text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125 '/></motion.div>
                <p className='lg:block hidden bg-(--foreground) lg:absolute right-full top-1/2 -translate-y-1/2 mr-5 p-3 rounded-2xl opacity-0 font-(--font-fira-code) group-hover:opacity-100 transition duration-200 text-(--background)'>Tech</p>
            </a>
            <a href='#projects' className='group relative w-fit'>
                <motion.div whileTap={{scale:0.8}}><FontAwesomeIcon icon={faFolderOpen} className='bg-(--foreground) rounded-2xl p-2 h-10 text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125 '/></motion.div>
                <p className='lg:block hidden bg-(--foreground) lg:absolute right-full top-1/2 -translate-y-1/2 mr-5 p-3 rounded-2xl opacity-0 font-(--font-fira-code) group-hover:opacity-100 transition duration-200 text-(--background) '>Projects</p>
            </a>

            <a href='#experience' className='group relative w-fit'>
                <motion.div whileTap={{scale:0.8}}><FontAwesomeIcon icon={faBriefcase} className='bg-(--foreground) rounded-2xl p-2 h-10 text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125 '/></motion.div>
                <p className='lg:block hidden bg-(--foreground) lg:absolute right-full top-1/2 -translate-y-1/2 mr-5 p-3 rounded-2xl opacity-0 font-(--font-fira-code) group-hover:opacity-100 transition duration-200 text-(--background)'>Experience</p>
            </a>
            <a href='#call-to-action' className='group relative w-fit'>
                <motion.div whileTap={{scale:0.8}}><FontAwesomeIcon icon={faPhone} className='bg-(--foreground) rounded-2xl p-2 h-10 text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125 '/></motion.div>            
                <p className='lg:block hidden bg-(--foreground) lg:absolute right-full top-1/2 -translate-y-1/2 mr-5 p-3 rounded-2xl opacity-0 font-(--font-fira-code) group-hover:opacity-100 transition duration-200 text-(--background)'>Contact</p>
            </a>

            <ThemeButton/>
        </div>
    </section>
  )
}
