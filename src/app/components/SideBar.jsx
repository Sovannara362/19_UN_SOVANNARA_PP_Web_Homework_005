import React from 'react'

export default function SideBar() {
  return (
    <aside className='h-screen rounded-lg bg-gray-800 p-4 mx-4 w-50'>
      <h1 className='text-gray-500 text-sm'>MENU</h1>
      <div className='p-1 flex flex-col gap-2'>
        <p className=' rounded-lg p-1.5 bg-gray-700'>Overview</p>
        <p className=' rounded-lg p-1.5 bg-gray-700'>Items</p>
        <p className=' rounded-lg p-1.5 bg-gray-700'>Orders</p>
        <p className=' rounded-lg p-1.5 bg-gray-700'>Customers</p>
        <p className=' rounded-lg p-1.5 bg-gray-700'>Settings</p>
      </div>
    </aside>
  )
}
