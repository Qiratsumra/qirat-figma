"use client"
import Image from "next/image"
import Link from "next/link"
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"
import homeabou2 from "../../../public/unsplash_jpkfc5_d-DI.png"
import { useContext } from "react";
import { createCartContext } from "../context/CartContext";
import { urlFor } from '../chefs/page';

export default function page() {
  const { cartItem, totalQuantity, toggleCartItemQuantity, removeItemsFromCart }: any = useContext(createCartContext);
  return (
    <div>

<div className='relative py-14 font-[sans-serif]'>
       <div className="mb-10">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">Checkout Page</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={'/checkout'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Check Out</li></Link>
      </ul>
    </div>
    </div>
    </div>


    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shipping Address */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-2 border rounded-md sm:col-span-2"
            />
            <input type="text"placeholder="Company"className="p-2 border rounded-md"/>
            <select className="p-2 border rounded-md">
              <option>Choose country</option>
              <option>Pakistan</option>
            </select>
            <select className="p-2 border rounded-md">
              <option>Choose city</option>
              <option>Karachi</option>
              <option>Gujranwala</option>
              <option>Lahore</option>
              <option>Hyderabad</option>
            </select>
            <input type="text" placeholder="Zip code" className="p-2 border rounded-md"/>
            <input
              type="text"
              placeholder="Address 1"
              className="p-2 border rounded-md sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="p-2 border rounded-md sm:col-span-2"
            />
            <div className="flex items-center sm:col-span-2">
              <input type="checkbox" id="same-as-shipping" className="mr-2" />
              <label htmlFor="same-as-shipping">
                Same as shipping address
              </label>
            </div>
            <div className="flex justify-between sm:col-span-2">
              <button
                type="button"
                className="py-2 px-4 bg-gray-200 text-black rounded-md"
              ><Link href={"/shopcart"}>Back to cart</Link></button>
              <button type="submit" className="py-2 px-4 bg-yellow-500 text-white rounded-md">
               <Link href={'/shopcart'}> Proceed to shipping</Link> </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
    {cartItem.map((items:any)=>(
          <div>
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
 
              <div  className=" items-center gap-4">
                 <img
                                    src={urlFor(items.image).url()}
                                    alt={items.name}
                                    className="w-full h-full object-contain"
                                  />
                <div>
                  <p className="font-semibold">{}</p>
                  <p className="text-sm text-gray-500">${items.price}</p>
                </div>
              </div>
          
          </div>
        
          <button className="mt-6 w-full py-2 bg-yellow-500 text-white rounded-md">
            Place an order
          </button>
        </div>
    ))}
      </div>
    </div>

    </div>
  )
}
