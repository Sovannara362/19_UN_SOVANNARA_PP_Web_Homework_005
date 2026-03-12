'use client';
import React, { useState } from 'react'
import { items } from '../db/items'
import Card from './Card'
import FilterBookMarked from './buttons/FilterBookMarked';
import SortAscButton from './buttons/SortAscButton';
import SortDescButton from './buttons/SortDescButton';
export default function CardList() {
  const [listItem, setListItem] = useState(items);
  return (
    <>
      <div className='flex justify-between gap-1.5 m-4'>
        <button onClick={()=> setListItem(items)}>Back</button>
        <div className='flex justify-between gap-4 '>
          <FilterBookMarked listItem={listItem} setListItem={setListItem}/>
          <SortAscButton listItem={listItem} setListItem={setListItem}/>
          <SortDescButton listItem={listItem} setListItem={setListItem}/>
        </div>
      </div>
      <ul>
        {listItem.map(item => <Card key={item.id} item={item} />)}
      </ul>
    </>

  )
}
