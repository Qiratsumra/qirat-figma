import Image from "next/image"
import Link from "next/link"

import hero from '../../../public/unsplash_4ycv3Ky1ZZU.png'

import imageUrlBuilder from '@sanity/image-url'
import { groq } from "next-sanity";
import { SanityClient } from "@/sanity/sanity.client";
import { urlFor } from "@/sanity/sanity.client";




export default async function Chefs() {
 const data= await SanityClient.fetch(groq `*[_type=='chef']{name,position,experience,specialty,description, "image":image.asset->url}`);
    console.log(data);
  return (
    
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
                        data.map((chef:any)=>(
                          <div className="bg-white font-sans">
                          <div >
                          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                            <img src={chef.image} alt="Blog Post 1" className="w-full h-96 object-cover" />
                            <div className="p-6 absolute bottom-0 left-0 right-0 bg-orange-500 opacity-90">
                              <span className="text-sm block text-gray-800 mb-2">Chef: {chef.name}</span>
                              <h3 className="text-xl font-bold text-gray-800">{chef.position}</h3>
                              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                                <p className="text-gray-800 text-sm">{chef.description}</p>
                                <p className="text-gray-800 text-sm">Experience: {chef.experience}years</p>
                              </div>
                            </div>
                          </div>
                    
                        </div>
                        </div>
                        ))
                    }          
                </div>
            </div>
        </div>

  )
}
