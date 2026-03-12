import React from 'react'
import SideBar from './SideBar'
import CardList from './CardList'
export default function Main() {
  return (
    <div className='flex h-screen w-full'>
      <div>
        <SideBar/>
      </div>
      <div className='w-full'>
        <CardList/>
      </div>
    </div>
  )
}
