import menu from "../../../public/pizza.png"

import Image from "next/image"

export default function StarterMenu() {
  return (
    
        <div className="font-sans">
            <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div className="flex justify-evenly max-sm:block gap-12">
                    <div className="lg:col-span-3  rounded-lg w-ful lg:sticky top-0 text-center p-6">
                        <Image src={menu} alt="Product" className="object-cover rounded  mx-auto py-6" />

                        <hr className="border-white border my-6" />

                       </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800">Starter Menu</h2>
                      <div>
                      <div className="flex flex-wrap gap-20 max-sm:gap-5 mt-4">
                            <p className="text-gray-800 text-xl font-bold hover:text-orange-500 hover:cursor-pointer">Alder Grilled Chinook Salmon</p>
                            <span className="text-xl font-bold text-orange-400">$32</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
                      <hr />

                      <div>
                      <div className="flex flex-wrap  gap-44 mt-4 max-sm:gap-5">
                            <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Berries and creme fart</p>
                            <span className="text-xl font-bold text-orange-400">$33</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
                      <hr />
                      <div>
                      <div className="flex flex-wrap gap-48 max-sm:gap-5 mt-4">
                            <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Tomato Bush Pizza</p>
                            <span className="text-xl font-bold text-orange-400">$45</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
                      <hr />
                      <div>
                      <div className="flex flex-wrap gap-48 mt-4 max-sm:gap-5">
                            <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Spicy Vegan Potato</p>
                            <span className="text-xl font-bold text-orange-400">$14</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
</div></div>        
                            
                            

                        </div>
                    </div>
  )
}
