import React from 'react'

export default function WhereToPlay() {
  return (
    <div className='px-4 md:px-20 flex justify-between items-center font-nova py-10'>
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-y-5 w-full">
            <span className='text-[#E3FF04] text-sm'>05 / PLATFORMS</span>
            <p className='text-6xl'>Where to Play</p>
            <p className='text-[#878787] text-base md:w-3xl'>You can play our games on various platforms including Steam and itch.io.</p>
            <button className='text-[#E3FF04] hover:text-[#d2d99a] text-sm cursor-pointer'>Visit Store</button>
        </div>
    </div>
  )
}
