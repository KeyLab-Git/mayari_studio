import React from 'react'
import { TrailersData } from '@/data/dummyData'

export default function Trailers() {
  return (
    <div data-scroll-section className='px-4 md:px-20 flex justify-between items-center font-nova py-10'>
        <div className="max-w-7xl mx-auto flex flex-col gap-y-5 w-full border-t border-b border-t-[#353535] border-b-[#353535] py-10">
            <span className='text-[#E3FF04] text-sm'>04 / MEDIA</span>
            <p className='text-6xl'>Watch the trailers</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <iframe 
                    src="https://www.youtube.com/embed/vr2YDrYuxKg?si=6tYx-i5IwAb1JVEO" 
                    title="YouTube video player" 
                    className="w-full h-60 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                />
                <iframe 
                    src="https://www.youtube.com/embed/cCEqv8pmnFQ?si=Rp73coZpCVtUkAm5" 
                    title="YouTube video player" 
                    className="w-full h-60 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
  )
}
