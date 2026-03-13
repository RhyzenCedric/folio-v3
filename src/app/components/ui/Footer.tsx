import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-between items-center h-24 border-t-2 border-(--foreground) px-4'>
      <p><a href='/' className='text-(--text-muted) hover:text-(--foreground) hover:cursor-pointer'>Back to top</a></p>
      <div>
      <p className='text-right'>2026 <br/>Rhyzen Cedric</p>
      </div>
    </footer>
  )
}
