import React from 'react'
import ActionSection from './ActionSection'
import SideBar from './SideBar'
export default function Main() {
  return (
    <div className='flex'>
      <SideBar/>
      <div className=''>
        <ActionSection/>
      </div>
    </div>
  )
}
