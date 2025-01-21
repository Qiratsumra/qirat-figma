"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"

import imageUrlBuilder from '@sanity/image-url'
import {  Slug } from 'sanity';
import {SanityClient} from "@/sanity/sanity.client";
import { groq } from "next-sanity";


const builder = imageUrlBuilder(SanityClient)
export  function urlFor(source:any) {
    return builder.image(source)
  }
  
  interface IProduct {
    name:string,
//    image:Image,
    price:number
    description:string,
    slug:Slug
  }
export default async function  Shops() {
    const data = await SanityClient.fetch(groq `*[_type=='food']{name,"image":image.asset->url,category,price,originalPrice,tags,description,slug {current}}`);
    console.log(data);
  return (
    <div>
<div className="relative py-14 font-[sans-serif]">
           <div className="mb-10">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">Shop</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={'/shops'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Shop</li></Link>
      </ul>
    </div>
    </div>
         <div className="font-[sans-serif] py-4 mx-auto lg:max-w-4xl max-w-lg md:max-w-full">
    
      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {data.map((items:any)=>(
    <Link href={`/shops/${items.slug.current}`}>
      <div
      key={items.name}
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-[400px] sm:h-[450px] transition-transform transform hover:scale-105 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-2/3">
        <img
          src={items.image}
          alt={items.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 text-center flex flex-col justify-center gap-3 h-1/3">
        {/* Item Name */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          {items.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-center gap-4">
          {items.originalPrice && (
            <span className="text-sm sm:text-base text-gray-500 line-through">
              ${items.originalPrice}
            </span>
          )}
          <span className="text-lg sm:text-xl font-bold text-orange-500">
            ${items.price}
          </span>
        </div>
      </div>
    </div>
    </Link>

  ))}
    
  
</div>


    </div>
    </div>
     
    </div>
  )
}
// ilug } from 'sanity';
// import sanityClient from "@/sanity/sanity.client";
// import { groq } from "next-sanity";


// const builder = imageUrlBuilder(sanityClient)
// export  function urlFor(source:any) {
//     return builder.image(source)
//   }
  
//   interface mport Link from "next/link"
// import Image from "next/image"
// import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"

// import imageUrlBuilder from '@sanity/image-url'
// import {  SIProduct {
//     name:string,
// //    image:Image,
//     price:number
//     description:string,
//     slug:Slug
//   }

//   export default async function ProductsList(){
//     const data= await sanityClient.fetch(groq `*[_type=='food']`);
//     console.log(data);
//     return(
//     <div className="relative py-14 font-[sans-serif]">
//            <div className="mb-10">
//     <div className="absolute inset-0">
//       <Image src={hero} alt="Background Image" className="w-full h-[200px] object-cover opacity-100" />
//     </div>

//     <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
//       <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">Shop</h1>
//       <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
//      <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
//           <path fill-rule="evenodd"
//             d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//             clip-rule="evenodd" data-original="#000000"></path>
//         </svg>
//       </li>
//     <Link href={'/shops'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Shop</li></Link>
//       </ul>
//     </div>
//     </div>
//          <div className="font-[sans-serif] py-4 mx-auto lg:max-w-4xl max-w-lg md:max-w-full">
    
//       {/* Card Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//   {data.map((item: any) => (
//     <Link href={`shops/${item.slug.current}`} key={item.name}>
//       <div
//       key={item.name}
//       className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-[400px] sm:h-[450px] transition-transform transform hover:scale-105 cursor-pointer"
//     >
//       {/* Image Section */}
//       <div className="relative h-2/3">
//         <img
//           src={urlFor(item.image).url()}
//           alt={item.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-4 text-center flex flex-col justify-center gap-3 h-1/3">
//         {/* Item Name */}
//         <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
//           {item.name}
//         </h3>

//         {/* Price Section */}
//         <div className="flex items-center justify-center gap-4">
//           {item.originalPrice && (
//             <span className="text-sm sm:text-base text-gray-500 line-through">
//               ${item.originalPrice}
//             </span>
//           )}
//           <span className="text-lg sm:text-xl font-bold text-orange-500">
//             ${item.price}
//           </span>
//         </div>
//       </div>
//     </div>
//     </Link>
//   ))}
// </div>


//     </div>
//     </div>
//     )
//   }