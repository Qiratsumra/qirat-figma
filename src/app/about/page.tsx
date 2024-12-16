import About1 from "@/components/ui/About1";
import About2 from "@/components/ui/About2";
import FoodMenu from "@/components/ui/FoodMenu";
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="relative py-14 font-[sans-serif]">
        <div className="mb-10">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">About</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={'/about'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">About</li></Link>
      </ul>
      </div>
    </div>
        <About1/>
        <About2/>
        <FoodMenu/>
    </div>
  )
}
