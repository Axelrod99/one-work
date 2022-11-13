import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function index() {

  // const [activePage, setActivePage]=useState("login");
  return (
    <div className='flex justify-between px-5 py-4 w-full'>
      <p className='text-[#7C60FF] font-bold sm:text-md md:text-2xl lg:text-3xl ml'>one-work</p>

      <div className='hidden md:flex font-semibold text-xs items-center'>
        <p>Freelance jobs</p>
        <p className='mx-3'>Fulltime jobs</p>
        <p>Blog</p>
      </div>

      <div className=' flex gap-2 '>
        <button className='bg-transparent hover:bg-purple-600 text-purple-500 text-xs h-7 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded flex items-center'>Login</button>
        <Link className='h-7 bg-purple-600 hover:bg-white hover:border-purple-500 text-white font-semibold hover:text-purple-500 py-2 px-4 border border-purple-500 hover:border-transparent rounded flex items-center' to='/dashboard'>sign up</Link>
        {/* <button className='h-7 bg-purple-600 hover:bg-white hover:border-purple-500 text-white font-semibold hover:text-purple-500 py-2 px-4 border border-purple-500 hover:border-transparent rounded flex items-center'>sign up</button> */}
      </div>
    </div>
  )
}
