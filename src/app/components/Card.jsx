"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import BookmarkButton from './buttons/BookmarkButton'
import ViewButton from './buttons/ViewButton';
export default function Card({ item ,setClickedItem, setShowModal}) {
  const [saved, setSaved] = useState(item.saved);
  return (
    <li className='flex justify-between items-center p-4 bg-gray-900 m-4 rounded-xl'>
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
            <BookmarkButton item={item} saved={saved} setSaved={setSaved} />
          </div>
          <p className='text-gray-300'>{item.item_description}</p>
        </div>
      </div>
      <ViewButton item={item} setClickedItem={setClickedItem} setShowModal={setShowModal}/>
    </li>
  )
}
