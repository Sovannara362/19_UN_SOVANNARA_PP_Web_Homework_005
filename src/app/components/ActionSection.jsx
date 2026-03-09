import React from 'react'

export default function ActionSection() {
  return (
    <div className='flex justify-between gap-1.5'>
      <button>Back</button>
      <div className='flex justify-between'>
        <div className='flex'>
          <h1>Your Boorkmark</h1>
          <button>bookmark</button>
        </div>
        <button>Asc</button>
        <button>Desc</button>
      </div>
    </div>
  )
}
