import React from 'react'

export default function StreamerPlays() {
    const dynamic = "https://mayari-studio.vercel.app"

  return (
    <div data-scroll-section className='px-4 md:px-20 flex justify-between items-center font-nova py-10'>
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-y-5 w-full">
            <span className='text-[#E3FF04] text-sm'>05 / STREAM</span>
            <p className='text-6xl'>Watch Streamers Play</p>
            <p className='text-[#878787] text-base md:w-3xl'>Follow your favorite streamers as they play our games live on their channels.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <iframe 
                src="https://www.youtube.com/embed/ZY8rQv6imec?si=98eLbxR7CEXFtBNA" 
                title="YouTube video player" 
                className="w-full h-130 border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

            <iframe src="https://www.youtube.com/embed/T1sq4qyA0hQ?si=mI_g2ZdgAFQODU8L" title="YouTube video player" className="w-full h-130 border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe src="https://www.youtube.com/embed/Zl7-bPif4FQ?si=ACQhemj31lYW2HUX" title="YouTube video player" className="w-full h-130 border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            <iframe 
                src={`https://player.twitch.tv/?video=2912130453&parent=${dynamic}&autoplay=false`} 
                title="Twitch video player"
                className="w-full h-130 border-0"
                allowFullScreen={true}
                scrolling="no"
            />

            <iframe 
            src={`https://player.twitch.tv/?video=2919284309&parent=${dynamic}&autoplay=false`} 
            title="Twitch video player"
            className="w-full h-130 border-0"
            allowFullScreen={true}  
            ></iframe>

            <iframe 
            src={`https://player.twitch.tv/?video=2911253099&parent=${dynamic}&autoplay=false`} 
            title="Twitch video player"
            className="w-full h-130 border-0"
            allowFullScreen={true}
            scrolling="no"
            ></iframe>
            </div>
        </div>
    </div>
  )
}
