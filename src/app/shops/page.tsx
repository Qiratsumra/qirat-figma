"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"
import { ChangeEvent, useState } from "react";

import { FaAnglesRight } from "react-icons/fa6";

import burger from "../../../public/chooseGrid/four.png";
import dessert from "../../../public/dessert.png";
import pizza from "../../../public/pizza.png";
import tacos from "../../../public/chooseGrid/one.png";
import drink from "../../../public/Drink.png"
import ChickenPlatter from "../../../public/unsplash_jpkfc5_d-DI.png"
import sandwish from "../../../public/unsplash_mAQZ3X_8_l0.png"
import eggsandwish from "../../../public/homeAbout1.png"


import Total from "@/components/ui/Total";

const shopCartData = [
  { image: burger, title: "Burger", price: "$80" },
  { image: dessert, title: "Chocolate CupCake", price: "$50" },
  { image: pizza, title: "Cheeses Pizza with Crispy Chicken", price: "$100" },
  { image: eggsandwish, title: "Classic Egg Sandwish", price: "$100" },
  {image:tacos,title:'Tacox',price:"$30"},
  {image:drink, title:'Cocktail',price:'$40'},
  {image:ChickenPlatter,title:"chicken platter with special soauce",price:'$150'},
  {image:sandwish, title:'Dynamic Sandwish',price:"#80"}
];

export default function ShopCart() {
  const [selectedOption, setSelectedOption] = useState("Newest");

  const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="relative py-14 font-[sans-serif]">
        <div className="mb-4">
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
    <Link href={'/menu'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Shop</li></Link>
      </ul>
    </div>
    </div>
      <div>
{/* Drop down */}
<div className="m-20 grid grid-cols-2 items-center max-sm:grid-cols-1 max-sm:gap-5">
<div className="flex items-center max-sm:b space-x-4">
      <label htmlFor="sort" className="text-sm font-medium text-gray-800">
        Sort By:
      </label>
      <select value={selectedOption} onChange={handleChange}className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="PriceLowHigh">Price: Low to High</option>
        <option value="PriceHighLow">Price: High to Low</option>
      </select>
      </div>
      <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-800">
      By default:
      </label>
      <select id="sort" value={selectedOption} onChange={handleChange}className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="PriceLowHigh">Price: Low to High</option>
        <option value="PriceHighLow">Price: High to Low</option>
      </select>
      </div>
</div>


{/* Card Section */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto m-5">
                    {
                        shopCartData.map((data)=>(
                          <div className="border-[1px] snipcart-add-item">
                        <button>
                        <div className="overflow-hidden group">
                          <Image src={data.image} alt={`${data.title}`} className="group-hover:scale-125 transition-all duration-300 w-[312px] h-[267px] object-cover rounded-lg" />
                          </div>
   
                           <div className="text-start mt-4 ml-5">
                               <h4 className="text-base font-semibold text-black">{data.title}</h4>
                               <p className="text-[15px] mt-2 text-orange-400">{data.price}</p>
                               <Link href={"/checkout"} > <button className="text-xl hover:cursor-pointer">Buy Now
                               </button></Link>
                           </div>
                        </button>
                       </div>
                        ))
                    }          
                </div>

{/* SlideBar */}

{/* Buttons Group */}
<div className="font-[sans-serif] w-max mx-auto bg-white border-2  flex rounded overflow-hidden">
      <button className="px-5 py-2.5 flex items-center text-orange-500 text-sm tracking-wider font-semibold border-orange-500 transition-all border-2">1</button>
      <button className="px-5 py-2.5 flex items-center text-orange-500 text-sm tracking-wider font-semibold border-orange-500 transition-all border-2">2</button>
      <button className="px-5 py-2.5 flex items-center text-orange-500 text-sm tracking-wider font-semibold border-orange-500 transition-all border-2">3</button>
      <button className="px-5 py-2.5 flex items-center text-orange-500 text-sm tracking-wider font-semibold border-orange-500 transition-all border-2"><FaAnglesRight/> </button>
    </div>

    </div>
    </div>
  );
}
