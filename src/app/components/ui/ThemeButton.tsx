"use client";
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

  return (
        <button onClick={() => setTheme(isDark ? "light" : "dark")} className='group fixed lg:-bottom-50 top-5 lg:right-0 right-3 sm:top-auto sm:bottom-5 z-50 w-fits'>
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} className='bg-(--foreground) md:bg-transparent rounded-2xl border-2 p-2 h-10 md:text-(--foreground) text-(--background) hover:cursor-pointer transform transition duration-300 hover:scale-125'/>
        </button>
  )
}
