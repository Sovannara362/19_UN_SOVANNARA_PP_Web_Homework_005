import React from 'react'

export default function NavBar() {
  return (
      <nav className='p-4 flex justify-between'>
        <div className='flex gap-2 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
          <h1 className='text-lg font-bold'>Dashboard</h1>
        </div>
        <div>
          <input type="text" placeholder='Search Item by name...' className='border-2 bg-gray-900 border-gray-600 rounded-lg p-2' />
        </div>
      </nav>
  )
}
