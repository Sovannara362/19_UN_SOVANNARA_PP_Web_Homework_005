"use client";
import React from 'react'

export default function ViewButton({item,setClickedItem,setShowModal}) {
  function showItemModal(){
    setClickedItem(item)
    setShowModal(true)
    console.log(item)
  }
  return (
    <button onClick={() => showItemModal()} className='p-2 px-4 rounded-lg bg-gray-800 w-20 h-10'>View</button>
  )
}
