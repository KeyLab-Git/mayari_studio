import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaYoutube  } from "react-icons/fa";
import BtnIcon from '@/assets/svgs/btn.svg'

export default function Hero() {
  return (
    <div className='h-dvh flex justify-center items-center relative'>
      <div className="flex flex-col justify-center items-center gap-y-10 max-w-xl">
        <h1 className='text-7xl font-orbitron text-center font-bold'>MAYARI <span className='flex gap-x-2'>
            <span className='text-[150px]'>STUDIOS</span>
        <span className="[writing-mode:vertical-lr] text-[#E3FF04] font-orbitron font-bold text-sm">GAME</span>
            </span></h1>
        <p className='text-center text-[#878787] font-orbitron text-lg'>
            Mayari Studios is a proudly Filipino indie game company dedicated to creating fun, meaningful, and culturally inspired experiences.
        </p>
        <button className='w-max relative'>
            <p className='w-full flex justify-center items-center bg-transparent text-[#000000] font-orbitron font-bold z-1 absolute inset-0'>Scroll</p>
            <BtnIcon />
        </button>
      </div>

      <div className="absolute right-0 px-10 top-0 h-full w-max flex flex-col justify-center items-center space-y-5">
        <FaFacebookF />
        <FaDiscord />
        <FaYoutube />
      </div>
    </div>
  )
}
