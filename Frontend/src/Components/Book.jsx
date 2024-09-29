import React from 'react'
import { Link } from 'react-router-dom'

function Book() {
  return (
    <div className=' flex flex-col justify-center items-center gap-4 m-20 '>
      <h1 className='md:text-3xl text-lg text-orange-600 font-bold '>Get a Seminar hall ready!</h1>
      <Link to="/book" className='px-10 text-base font-bold text-white py-1 rounded-md  bg-orange-500'>Book</Link>
    </div>
  )
}

export default Book
