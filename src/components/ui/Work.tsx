import Image from "next/image";
import one from "../../public/work/one.png"

import { MdOutlineBakeryDining } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { PiForkKnifeLight } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { GiCupcake } from "react-icons/gi";

export default function Work() {
  return (
    <div>
         <div className="flex justify-evenly">
     <h1 className="text-4xl font-bold text-center">We are work with best people</h1>
     
     </div>

     <div className="flex justify-evenly max-sm:block">
        <div className="m-3 items-center  p-10 text-center text-slate-400">
            <div className="flex justify-center"><MdRestaurantMenu className=" text-5xl"/></div>
            <span>Restraunt</span></div>

            <div className="m-3 items-center  p-10 text-center text-slate-400">
            <div className="flex justify-center"><MdOutlineBakeryDining className=" text-5xl"/></div>
            <span>Bakery</span></div>

            <div className="m-3 items-center  p-10 text-center text-slate-400">
            <div className="flex justify-center"><PiForkKnifeLight className=" text-5xl"/></div>
            <span>Fork & Spoon</span></div>
    
            <div className="m-3 items-center  p-10 text-center text-slate-400">
            <div className="flex justify-center"><SiCoffeescript className=" text-5xl"/></div>
            <span>Coffee</span></div>
    
            <div className="m-3 items-center  p-10 text-center text-slate-400">
            <div className="flex justify-center"><GiCupcake className=" text-5xl"/></div>
            <span>Bakerys</span></div>
    
       </div>

    </div>
  )
}
