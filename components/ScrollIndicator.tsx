"use client"

import React, { useState, useEffect } from 'react'

interface ScrollIndicatorProps {
    totalSections: number
}

export default function ScrollIndicator({ totalSections }: ScrollIndicatorProps) {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>("[data-scroll-section]");
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        let currentSection = 0;
        sections.forEach((section, index) => {
          if (section.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
            currentSection = index;
          }
        });
        setActiveSection(currentSection);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll<HTMLElement>("[data-scroll-section]");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  };    

  return (
    <div className='hidden fixed left-8 top-1/2 -translate-y-1/2 z-50 md:flex flex-col items-center bg-[#0f0f0f] border-l-2 border-r-2 border-zinc-700/60 rounded-full backdrop-blur-md shadow-2xl'>
        <div className="relative py-6 px-3">

            <div className="absolute inset-0 w-full h-full flex flex-col justify-between items-center">
                <div className='relative -top-1.1 w-6 h-6 border-t border-l border-zinc-700 rotate-45 mb-4'/>
               <div className='relative -bottom-1.1 w-6 h-6 border-b border-l border-zinc-700 -rotate-45 mt-4'/>
            </div>
        
        <div className="flex flex-col items-center gap-5 my-2">
            {Array.from({ length: totalSections }).map((_, index) => {
                const isActive = activeSection === index
                return (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Scroll to section ${index + 1}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => scrollToSection(index)}
                      className={`cursor-pointer transition-all duration-300 transform rotate-45 ${ isActive
                  ? "w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110"
                  : "w-2.5 h-2.5 border border-zinc-500 bg-transparent hover:border-white" }`}
                    />
                )
            })}
        </div>

        </div>
      
    </div>
  )
}
