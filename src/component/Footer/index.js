import React from 'react'
import twitter from '../../assets/icons/twitter.png'
import linkedin from '../../assets/icons/linkedin.png'
import facebook from '../../assets/icons/facebook.png'

export default function index() {
  return (
    <div className='so:bg-blue-200 bx:bg-[#202030] text-[#909090] p-5'>
        <div className=' text-xs flex w-full justify-between'>
            <div className='w-40'>
                <p className='so:text-2xl bx:text-3xl font-bold text-white'>one-work</p>
                <p className='font-thin py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing</p>
            </div>

            <div className='hidden bx:flex flex-col'>
                <p className='my-3'>Gigs</p>
                <p className='mb-3'>Jobs</p>
                <p className='mb-3'>Freelancers</p>
                <p className='mb-3'>Blog</p>
                <p className='mb-3'>Skills</p>
            </div>

            <div className='hidden bx:flex flex-col'>
                <p className='my-3'>Premium</p>
                <p className='mb-3'>Job mining</p>
                <p className='mb-3'>About us</p>
                <p className='mb-3'>Terms of use</p>
                <p className='mb-3'>Privacy policy</p>
                <p className='mb-3'>FAQ</p>
            </div>

            <div className='my-3'>
                <p >Contact us</p>
                <p className='font-bold so:text-md bx:text-lg'>info@one-work.com</p>

                <div className='flex justify-around my-10'>
                <img className='h-5' src={twitter}/>
                <img className='h-5' src={linkedin}/>
                <img className='h-5' src={facebook}/>
                </div>
            </div>

        </div>

        <div>
            <div className='so:flex flex-row bx:hidden'>
                <a href='#'><p className=''>Gigs</p></a>
                <a href='#'><p className='mx-1'>Jobs</p></a>
                <a href='#'><p className='mx-1'>Freelancers</p></a>
                <a href='#'><p className='mx-1'>Blog</p></a>
                <a href='#'><p className=''>Skills</p></a>
            </div>
        </div>

        <div className='so:flex flex-row bx:hidden'>
            <p className='text-[13px]'>Premium</p>
            <p className='mx-1 text-[13px]'>Job mining</p>
            <p className=' mx-1 text-[13px]'>About us</p>
            <p className='mx-1 text-[13px]'>Terms of use</p>
            <p className='mx-1 text-[13px]'>Privacy policy</p>
                <p className='text-[13px]'>FAQ</p>
        </div>

        <div>
            <p className='so:text-xs bx:text-sm'>one-work 2022 All rights reserved</p>

            
        </div>
    </div>
  )
}
