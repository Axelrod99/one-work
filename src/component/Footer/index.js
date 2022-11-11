import React from 'react'
import twitter from '../../assets/icons/twitter.png'
import linkedin from '../../assets/icons/linkedin.png'
import facebook from '../../assets/icons/facebook.png'

export default function index() {
  return (
    <div className='bg-[#202030] text-[#909090] p-8'>
        <div className=' text-xs flex w-full justify-between'>
            <div className='w-40'>
                <p className='text-3xl font-bold text-white'>one-work</p>
                <p className='font-thin py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing</p>
            </div>

            <div>
                <p className='my-3'>Gigs</p>
                <p className='mb-3'>Jobs</p>
                <p className='mb-3'>Freelancers</p>
                <p className='mb-3'>Blog</p>
                <p className='mb-3'>Skills</p>
            </div>

            <div>
                <p className='my-3'>Premium</p>
                <p className='mb-3'>Job mining</p>
                <p className='mb-3'>About us</p>
                <p className='mb-3'>Terms of use</p>
                <p className='mb-3'>Privacy policy</p>
                <p className='mb-3'>FAQ</p>
            </div>

            <div className='my-3'>
                <p >Contact us</p>
                <p className='font-bold text-lg'>info@one-work.com</p>

                <div className='flex justify-around my-14'>
                <img className='h-7' src={twitter}/>
                <img className='h-7' src={linkedin}/>
                <img className=' h-7' src={facebook}/>
                </div>
            </div>

        </div>

        <div>
            <p>one-work 2022 All rights reserved</p>

            
        </div>
    </div>
  )
}
