import Link from "next/link"
import Image from "next/image"
import hero from "../../public/unsplash_4ycv3Ky1ZZU.png"

import { MdKeyboardArrowRight } from "react-icons/md";
export default function notfound() {
  return (
    <div className="relative  py-16 font-[sans-serif]">
    <div className="mb-4">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">404 page</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={''}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">404 Page</li></Link>
      </ul>
    </div>
    </div>
    <div className="min-h-[350px] h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-orange-500">404 Page</h2>
        <h3 className="sm:text-2xl text-center font-bold mb-5">OOPs! somthing going is wrong</h3>
        <p className="sm:text-lg text-base text-center">Page Cannot be found! we’ll have it figured out in no time.
        Menwhile, cheek out these fresh ideas:</p>

            <Link href={"/"} className="mt-12 text-white bg-orange-500 text-base py-3 px-6 border cursor-pointer border-gray-600 rounded-lg hover:bg-orange-300 hover:text-black ">Go Home</Link>
      </div>
  </div>
  )
}
