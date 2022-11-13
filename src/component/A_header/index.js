import React from 'react'
import Ellipsee from '../../assets/icons/Ellipsee.png'


export default function index() {
  return (
    <div className='flex justify-between px-5 py-4 w-full'>
      <p className='text-[#7C60FF] font-bold so:text-[20px] sm:text-lg md:text-2xl lg:text-3xl ml'>one-work</p>

      <div className='flex gap-3 items-center'>
        <button className='bg-blue-200 h-7 so:w-24 xo:w-28 sm:w-32 so:text-[10px] md:w-36 xo:text-xs md:text-sm text-white font-bold flex rounded-md px-2 items-center justify-center '>Create Your Gig</button>
        <p className='hidden'>Michael Aang</p>
        <img className='so:h-10 md:h-14' src={Ellipsee}/>
      </div>
    </div>
  )
}
