import Image from "next/image"
import Link from "next/link"

import chef1 from "../../../public/ChefsProfile/chef1.png"
import chef2 from "../../../public/ChefsProfile/chef2.png"
import chef3 from "../../../public/ChefsProfile/chef3.png"
import chef4 from "../../../public/ChefsProfile/chef4.png"
import chef5 from '../../../public/ChefsProfile/chef5.png'
import chef6 from "../../../public/ChefsProfile/chef6.png"
import chef7 from "../../../public/ChefsProfile/chef7.png"
import chef8 from "../../../public/ChefsProfile/chef8.png"
import chef9 from "../../../public/ChefsProfile/chef9.png"
import chef10 from "../../../public/ChefsProfile/chef10.png"
import chef11 from "../../../public/ChefsProfile/chef11.png"
import chef12 from "../../../public/ChefsProfile/chef12.png"
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"

const chefsData =[{image:chef1,name:"Tahmina Rumi"}, {image:chef2,name:"Jorinn Begum"}, {image:chef3,name:"M.Mohammad"}, {image:chef4,name:"Munna Kethy"},{image:chef5,name:"John"}, {image:chef6,name:"Bisnu Devgon"}, {image:chef7,name:"Motin Molladon"},{image:chef8,name:"Willium"},{image:chef9,name:"Kets Willium Roy"},{image:chef10, name:"Muhmud Khodil"},{image:chef11, name:"Atuar Rehman"},{image:chef12,name:"Monalisa Holly"},
]


export default function page() {
  return (
    <div>
        <div className="font-sans">
            <div className=" mx-auto">
            <div className='relative py-14 font-[sans-serif]'>
       <div className="mb-10">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">Our Chefs</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={'/chefs'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Chefs</li></Link>
      </ul>
    </div>
    </div>
    </div>
                <div className="grid sm:grid-cols-4 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-12 my-4">
                    {
                        chefsData.map((chef)=>(
                            <div className="">
                            <Image src={chef.image} alt="" className="w-full object-contain object-top rounded-lg" />
    
                            <div className="text-center mt-4">
                                <h4 className="text-base font-semibold text-black">{chef.name}</h4>
                                <p className="text-xs mt-2 text-black">Chef</p>
                            </div>
                        </div>
                        ))
                    }          
                </div>
            </div>
        </div>
</div>
  )
}
