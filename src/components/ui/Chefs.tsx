import Image from "next/image"
import one from "../../../public/chefs/one.png"
import two from "../../../public/chefs/two.png"
import three from "../../../public/chefs/three.png"
import four from "../../../public/chefs/four.png"
export default function Chefs() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">

<div className="font-[sans-serif] lg:max-w-5xl sm:max-w-2xl max-sm:max-w-sm mx-auto mt-4">
            <h2 className="text-gray-800 text-3xl font-extrabold border-b-2 border-gray-800 inline-block">Our Team</h2>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-md:justify-center mt-12">
                <div className="flex justify-evenly items-center bg-gray-900 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <Image src={one} alt="" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute h-[60px] bottom-1 left-1 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-[15px] font-bold">D.Estwood</h4>
 
                        <p className="text-gray-800 mt-2 text-[10px]">Cheif chef</p>
                    </div>
                </div>
               
                <div className="flex justify-evenly items-center bg-gray-900 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <Image src={two} alt="" className="rounded-lg" />
                    </div>

                  
                </div>
                <div className="flex justify-evenly items-center bg-gray-900 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <Image src={three} alt="" className="rounded-lg" />
                    </div>

                   
                </div>

                <div className="flex justify-evenly items-center bg-gray-900 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <Image src={four} alt="" className="rounded-lg" />
                    </div>

                    
                </div>
               

              

              
              
            </div>
        </div>
    </div>
    
  )
}
