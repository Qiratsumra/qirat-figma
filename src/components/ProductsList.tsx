import Link from "next/link"

import imageUrlBuilder from '@sanity/image-url'
import { Image, Slug } from 'sanity';
import  {SanityClient} from "@/sanity/sanity.client";
import { groq } from "next-sanity";


const builder = imageUrlBuilder(SanityClient)
export  function urlFor(source:any) {
    return builder.image(source)
  }
  
  interface IProduct {
    name:string,
   image:Image,
    price:number
    description:string,
    slug:Slug
  }

  export default async function ProductsList(){
    const data= await SanityClient.fetch(groq `*[_type=='food']`);
    console.log(data);
    return(
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-4xl max-w-lg md:max-w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gray-200 flex flex-col rounded-md cursor-pointer transition-all relative overflow-hidden">

          <div className="p-4 sm:p-6">
            <div
              className="bg-pink-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div className="w-full">
              <img src="https://readymadeui.com/images/coffee1.webp" alt="Product 1" className="w-full aspect-[230/220] object-contain" />
            </div>
          </div>

          <div className="flex flex-col h-full text-center bg-gray-100 p-4">
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-gray-800">Espresso Elegante</h3>
              
            </div>

            <button type="button"
              className="w-full flex items-center justify-center gap-2 mt-6 px-2 py-2.5 sm:px-4 bg-yellow-400 hover:bg-yellow-500 text-sm text-gray-800 font-semibold rounded-md transition-all">
             
              Add to cart</button>
          </div>
        </div>

        
      </div>
    </div>
    )
  }