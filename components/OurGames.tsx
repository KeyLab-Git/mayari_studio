import React from 'react'
import { OurGamesData } from '@/data/dummyData'

export default function OurGames() {
  return (
    <div data-scroll-section className='px-4 md:px-20 flex justify-between items-center font-nova'>
        <div className="max-w-7xl mx-auto flex flex-col gap-y-15 border-t border-b border-t-[#353535] border-b-[#353535] py-10 w-full">
             <div className="flex flex-col gap-y-5">
                <span className='text-[#E3FF04] text-sm'>02 / GAMES</span>
                <h2 className='text-6xl'>Our games</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {OurGamesData.map((data, i) => (
                    <div key={i} className="flex flex-col items-start gap-y-2">
                        <img src={data.img} alt="" width={100} height={100} className='w-full h-52' />
                        <h3 className='text-lg'>{data.title}</h3>
                        <p className='text-[#AAAAB0] text-sm'>{data.genre}</p>
                        <button className='text-[#E3FF04] hover:text-[#d2d99a] text-sm cursor-pointer'>View game</button>
                    </div>
                ))}
             </div>
        </div>
    </div>
  )
}
