import React from 'react'
import Image from 'next/image'
export default function NavBar() {
  return (
      <nav className='p-4 flex justify-between'>
        <div className='flex gap-2 items-center '>
          <Image
            src="file.svg"
            width={60}
            height={60}
            alt="Picture of the author"
            className='border-3 border-amber-50 rounded-full p-2'
          />
          <h1 className='text-lg font-bold'>Dashboard</h1>
        </div>
        <div>
          <input type="text" placeholder='Search Item by name...' className='border-2 bg-gray-900 border-gray-600 rounded-lg p-2' />
        </div>
      </nav>
  )
}
