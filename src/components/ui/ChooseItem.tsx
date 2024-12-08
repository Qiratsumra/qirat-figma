import Image from "next/image"

import choose1 from "../../../public/chooseFood/choose1.png"
import choose2 from "../../../public/chooseFood/choose2.png"
import choose3 from "../../../public/chooseFood/choose3.png"
import choose4 from "../../../public/chooseFood/choose4.png"
import { it } from "node:test"

const ChooseItems = [
    {image:choose1, title:'item1'},
    {image:choose2,  title:'item2'},
    {image:choose3,title:'item3'},
    {image:choose4, title:'item4'},
]

export default function ChooseItem() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
            <h1 className="text-orange-500 text-center great-vibes-regular">Food Category</h1>
      <h2 className="text-4xl font-extrabold text-center mb-16"><span className="text-orange-600">Ch</span>oose the items of food</h2>
      <div className="flex justify-evenly max-sm:block items-center gap-x-8 gap-y-16">

   
          {ChooseItems.map((item)=>(
                 <div className=" overflow-hidden cursor-pointer">
            <div className="w-[205px] h-[229px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 my-4">
            <Image src={item.image} alt={`${item.title}`}
              className="h-full w-full object-contain" />
               </div>
               </div>
          ))}
      </div>
    </div>
 </div>
  )
}
