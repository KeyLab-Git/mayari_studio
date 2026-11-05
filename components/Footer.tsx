import React from 'react'

export default function Footer() {
  return (
    <div className='px-4 md:px-20 flex justify-between items-center font-nova py-10'>
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-y-5 w-full">
            <span className='text-[#E3FF04] text-sm'>06 / COMMUNITY</span>
            <p className='text-6xl'>Follow Mayari Studios</p>
            <p className='text-[#878787] text-base md:w-3xl'>Join our community and stay updated with the latest news and updates.</p>
            <button className='text-[#E3FF04] hover:text-[#d2d99a] text-sm cursor-pointer'>Join Community</button>
        </div>
    </div>
  )
}
