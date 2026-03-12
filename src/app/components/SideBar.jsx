import React from 'react'

export default function SideBar() {
  return (
    <aside className='h-screen rounded-lg bg-gray-900 p-4 mx-4 w-50'>
      <h1 className='text-gray-400 text-sm'>MENU</h1>
      <div className='p-1 flex flex-col gap-2'>
        <p className=' rounded-lg p-1.5 bg-gray-800'>Overview</p>
        <p className=' rounded-lg p-1.5 bg-gray-800'>Items</p>
        <p className=' rounded-lg p-1.5 bg-gray-800'>Orders</p>
        <p className=' rounded-lg p-1.5 bg-gray-800'>Customers</p>
        <p className=' rounded-lg p-1.5 bg-gray-800'>Settings</p>
      </div>
    </aside>
  )
}
