import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import BtnIcon from '@/assets/svgs/btn.svg'
import Link from 'next/link'

export default function Hero() {
  const videoId = "VTdv0ounaCw";
 const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`;

  return (
    <div data-scroll-section className='hero-fade-in h-dvh flex justify-center items-center relative overflow-hidden bg-black text-white'>
      
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <iframe
          src={embedUrl}
          title="Hero Background Video"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none opacity-80"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* 2. Dark Overlay (Crucial so white text pops over the video background) */}
      <div className="absolute inset-0 bg-black/50 z-1 pointer-events-none" />
      
      {/* 3. Foreground Content */}
      <div className="flex flex-col justify-center items-center gap-y-10 max-w-xl z-10 px-4">
        <h1 className='text-3xl md:text-7xl font-nova text-center font-bold'>
          MAYARI 
          <span className='flex gap-x-2 items-center justify-center'>
            <span className='text-[80px] md:text-[150px] leading-none'>STUDIOS</span>
            <span className="[writing-mode:vertical-lr] text-[#E3FF04] font-nova font-bold text-sm">GAME</span>
          </span>
        </h1>
        
        <p className='text-center text-[#878787] font-nova text-lg'>
          Mayari Studios is a proudly Filipino indie game company dedicated to creating fun, meaningful, and culturally inspired experiences.
        </p>
        
        <button className='w-max relative group'>
          <p className='w-full cursor-pointer flex justify-center items-center bg-transparent text-black font-nova font-bold z-10 absolute inset-0'>Scroll</p>
          <BtnIcon />
        </button>
      </div>
      
      {/* 4. Social Links Sidebar */}
      <div className="hidden absolute right-0 px-10 top-0 h-full w-max md:flex flex-col justify-center items-center space-y-5 z-10 text-white">
        <Link href="https://www.facebook.com/profile.php?id=61570756795274" target="_blank" className="hover:text-[#E3FF04] transition-colors">
            <FaFacebookF />
        </Link>
        <Link href="https://discord.gg/ucz7MHVX" target="_blank" className="hover:text-[#E3FF04] transition-colors">
            <FaDiscord /> 
        </Link>
        <Link href="https://www.youtube.com/@mayaristudios" target="_blank" className="hover:text-[#E3FF04] transition-colors">
            <FaYoutube />
        </Link>
      </div>
      
    </div>
  )
}