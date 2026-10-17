import Link from "next/link"
import IconMayari from '@/assets/svgs/iconMayari.svg'

export default function Header() {
  return (
    <nav className="fixed inset-0 px-20 h-[100px] flex justify-between items-center font-orbitron">
        <p className="text-3xl flex justify-center items-center gap-x-1 text-xl font-bold">
            <IconMayari />
            Mayari</p>
        <ul className="flex flex-1 pr-34 justify-center items-center">
            <li className="flex gap-x-5">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Games</Link>
            </li>
        </ul>
    </nav>
  )
}
