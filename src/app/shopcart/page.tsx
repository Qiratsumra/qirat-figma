"use client";
import Image from "next/image";

import { ChangeEvent, useState } from "react";

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
    <div className="block">
      <div>
{/* Drop down */}
<div className="m-5 grid grid-cols-2 items-center max-sm:grid-cols-1 max-sm:gap-5">
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
                            <div className="border-[1px] ">
                           <div className="overflow-hidden group">
                           <Image src={data.image} alt={`${data.title}`} className="group-hover:scale-125 transition-all duration-300 w-[312px] h-[267px] object-cover rounded-lg" />
                           </div>
    
                            <div className="text-start mt-4 ml-5">
                                <h4 className="text-base font-semibold text-black">{data.title}</h4>
                                <p className="text-[15px] mt-2 text-orange-400">{data.price}</p>
                            </div>
                        </div>
                        ))
                    }          
                </div>

{/* SlideBar */}

    </div>
    </div>
  );
}
