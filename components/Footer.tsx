import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaYoutube  } from "react-icons/fa";
import Link from 'next/link'

export default function Footer() {
  return (
    <div data-scroll-section className='px-4 md:px-20 flex justify-between items-center font-nova py-10'>
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-y-5 w-full">
            <span className='text-[#E3FF04] text-sm'>06 / COMMUNITY</span>
            <p className='text-6xl'>Follow Mayari Studios</p>
            <p className='text-[#878787] text-base md:w-3xl'>Join our community and stay updated with the latest news and updates.</p>
            <div className="flex flex-row gap-x-5 text-[#E3FF04] text-2xl">
                    
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
            <button className='text-[#E3FF04] hover:text-[#d2d99a] text-sm cursor-pointer'>Join Community</button>
        </div>
    </div>
  )
}
