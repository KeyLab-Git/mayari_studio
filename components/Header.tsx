import Link from "next/link"
import Image from 'next/image'

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full px-10 md:px-20 h-[100px] flex justify-between items-center font-nova z-50 bg-transparent">
        <div className="relative w-40 h-13">
        <Image 
          src="/logo_white.svg" 
          alt="Mayari Studios Logo" 
          fill
          priority
          className="object-contain object-left"
        />
      </div>
        <ul className="flex flex-1 pr-43 justify-center items-center">
            <li className="flex gap-x-5">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Games</Link>
            </li>
        </ul>
    </nav>
  )
}
