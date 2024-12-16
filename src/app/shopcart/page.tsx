"use client"
import Image from "next/image"

import {  useState } from "react"

import burger from "../../../public/chooseGrid/four.png"
import dessert from "../../../public/dessert.png"
import pizza from "../../../public/pizza.png"
import tacos from "../../../public/chooseGrid/one.png"
import { ImEyeMinus } from "react-icons/im"

import Total from "@/components/ui/Total"
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"
import Link from "next/link"
const shopCartData =[
    {image:burger,title:"Burger",price:"$80"},
    {image:dessert,title:"Chocolate CupCake",price:"$50"},
    {image:pizza,title:"Cheeses Pizza with Crispy Chicken",price:"$100"},
    {image:pizza,title:"Cheeses Tacos Chicken",price:"$35"},
]


export default function ShopCart(){

  return (

   
      
                <div className="block relative py-14 font-[sans-serif]">
                      <div className="mb-10">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">Shop Cart</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={'/shopcart'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Shop Cart</li></Link>
      </ul>
    </div>
    </div>
                           
                            <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">

            <div>
            {shopCartData.map((item)=>(
                        <div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="md:col-span-2 space-y-4">

                    <div className=" gap-4 px-4 py-6">
                        <div className="flex gap-4">
                            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                <Image src={item.image} alt={`${item.title}`} className="w-full h-full object-contain" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                                  <p>{item.price}</p>
                                </div>
</div>

<div className="flex items-start gap-4 justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 24 24">
                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
<div className=" flex justify-evenly">

                                    <button type="button"
                                        className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"  >+
                                    </button>
                                    <p>1</p>
 
                                    <button type="button" 
                                        className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                       _
                                    </button></div>
                                    </div>
                    
            </div>
            </div>
                    ))}

                    </div>

</div>
<br />
<br />
<br />

<Total/>
</div>                    




       
  )
}
