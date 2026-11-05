import React from 'react'
import { TrailersData } from '@/data/dummyData'

export default function Trailers() {
  return (
    <div data-scroll-section className='px-4 md:px-20 flex justify-between items-center font-nova py-10'>
        <div className="max-w-7xl mx-auto flex flex-col gap-y-5 w-full border-t border-b border-t-[#353535] border-b-[#353535] py-10">
            <span className='text-[#E3FF04] text-sm'>04 / MEDIA</span>
            <p className='text-6xl'>Watch the trailers</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {TrailersData.map((data, i) => (
                    <div key={i} className="flex flex-col items-start gap-y-2">
                        <img src={data.img} alt="" width={100} height={100} className='w-full h-52 object-cover' />
                        <h3 className='text-lg'>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
