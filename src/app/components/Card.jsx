import React from 'react'
import Image from 'next/image'
import BookmarkButton from './buttons/BookmarkButton'
export default function Card({ item }) {
  return (
    <li className='flex justify-between items-center p-4 border m-4 rounded-xl'>
      <div className='flex gap-4 '>
        <Image
          src={item.image}
          width={120}
          height={60}
          alt='Product Image'
          className='rounded-xl'
        />
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex gap-4'>
            <h1 className='text-lg font-bold'>{item.item_name}</h1>
            <p className='text-gray-300'>${item.item_price}</p>
            <BookmarkButton save={item.saved}/>
          </div>
          <p className='text-gray-300'>{item.item_description}</p>
        </div>
      </div>
      <button className='border border-gray-700 p-2 w-20 h-10'>View</button>
    </li>
  )
}
