import React from 'react'
import Card from './Card.jsx'

function Right() {
  return (
    <div className='shsh flex '>
    <div className='right text-white gap-20 mt-2 grid grid-cols-3 pl-20'>
      <div className="card1 ">
    <Card />
      </div>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </div>
  )
}

export default Right