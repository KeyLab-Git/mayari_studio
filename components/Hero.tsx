import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaYoutube  } from "react-icons/fa";
import BtnIcon from '@/assets/svgs/btn.svg'
import Link from 'next/link'

export default function Hero() {
  return (
    <div data-scroll-section className='hero-fade-in h-dvh flex justify-center items-center relative'>
      <div className="flex flex-col justify-center items-center gap-y-10 max-w-xl">
        <h1 className='text-3xl md:text-7xl font-nova text-center font-bold'>MAYARI <span className='flex gap-x-2'>
            <span className='text-[80px] md:text-[150px]'>STUDIOS</span>
        <span className="[writing-mode:vertical-lr] text-[#E3FF04] font-nova font-bold text-sm">GAME</span>
            </span></h1>
        <p className='text-center text-[#878787] font-nova text-lg'>
            Mayari Studios is a proudly Filipino indie game company dedicated to creating fun, meaningful, and culturally inspired experiences.
        </p>
        <button className='w-max relative'>
            <p className='w-full cursor-pointer flex justify-center items-center bg-transparent text-[#000000] font-nova font-bold z-1 absolute inset-0'>Scroll</p>
            <BtnIcon />
        </button>
      </div>
      
      <div className="hidden absolute right-0 px-10 top-0 h-full w-max md:flex flex-col justify-center items-center space-y-5">
        <Link href="https://www.facebook.com/profile.php?id=61570756795274" target="_blank">
            <FaFacebookF />
        </Link>
        <Link href="https://discord.gg/ucz7MHVX" target="_blank">
            <FaDiscord /> 
        </Link>
        <Link href="https://www.youtube.com/@mayaristudios" target="_blank">
            <FaYoutube />
        </Link>
      </div>
    </div>
  )
}
