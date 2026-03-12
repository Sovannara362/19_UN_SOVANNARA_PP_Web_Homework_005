'use client';
import React, { useState } from 'react'
import { items } from '../db/items'
import Card from './Card'
import FilterBookMarked from './buttons/FilterBookMarked';
import SortAscButton from './buttons/SortAscButton';
import SortDescButton from './buttons/SortDescButton';
export default function CardList() {
  const [listItem, setListItem] = useState(items);
  const [clickedItem, setClickedItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex justify-between items-center gap-1.5 mx-4'>
        <button onClick={() => setListItem(items)} className='bg-white text-black hover:bg-yellow-300 p-2 px-4 rounded-3xl'>Back</button>
        <div className='flex justify-between ite gap-4 '>
          <FilterBookMarked listItem={listItem} setListItem={setListItem} />
          <SortAscButton listItem={listItem} setListItem={setListItem} />
          <SortDescButton listItem={listItem} setListItem={setListItem} />
        </div>
      </div>
      <ul >
        {listItem.map(item => <Card key={item.id} item={item} setClickedItem={setClickedItem} setShowModal={setShowModal} />)}
        {showModal ?

          <div className='p-4 fixed bg-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-120'>
            <div className='flex justify-between'>
              <h1 className='text-lg font-semibold'>Item Details</h1>
              <button onClick={() => setShowModal(!showModal)}
                className=' bg-gray-900 p-2 px-4 rounded-lg'>
                Close
              </button>
            </div>
            <div className='flex flex-col gap-2'>
              <p> <span className='text-md font-semibold'>ID:</span> {clickedItem.id}</p>
              <p><span className='text-md font-semibold'>Name:</span> {clickedItem.item_name}</p>
              <p><span className='text-md font-semibold'>Price:</span> $ {clickedItem.item_price}</p>
              <p><span className='text-md font-semibold'>Descriptoin:</span> {clickedItem.item_description}</p>
            </div>
          </div>

          :
          <div className='none'>

          </div>
        }
      </ul>
    </>

  )
}
