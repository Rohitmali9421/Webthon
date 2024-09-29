import React from 'react'
function Card({image,text}) {
  return (
    <div className='w-full flex flex-col justify-center items-center '>

      <img className='w-10' src={image} alt="" />
      <h1 className='text-lg font-bold'>{text}</h1>
    </div>
  )
}

export default Card
