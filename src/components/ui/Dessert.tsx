import Image from "next/image"

import dessert from "../../../public/dessert.png"
export default function Dessert() {
  return (
    
        <div className="font-sans">
            <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div className="flex justify-evenly max-sm:block gap-12">
                    <div className="lg:col-span-3  rounded-lg w-ful lg:sticky top-0 text-center p-6">
                        <Image src={dessert} alt="Product" className="object-cover rounded  mx-auto py-6" />

                        <hr className="border-white border my-6" />

                       </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800">Dessert Menu</h2>
                      <div>
                      <div className="flex flex-wrap gap-48 max-sm:gap-5 mt-4">
                            <p className="text-gray-800 text-xl font-bold hover:text-orange-500 hover:cursor-pointer">Fig and Lemon Cake</p>
                            <span className="text-xl font-bold text-orange-400">$32</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
                      <hr />

                      <div>
                      <div className="flex flex-wrap  gap-44 mt-4 max-sm:gap-5">
                            <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Cremy masecarpose cake </p>
                            <span className="text-xl font-bold text-orange-400">$42</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
                      <hr />
                      <div>
                      <div className="flex flex-wrap gap-32 max-sm:gap-5 mt-4">
                            <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Pastry Blueberries, Lemon juice</p>
                            <span className="text-xl font-bold text-orange-400">$14</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
                      <hr />
                      <div>
                      <div className="flex flex-wrap gap-48 mt-4 max-sm:gap-5">
                            <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Pain au chocolate</p>
                            <span className="text-xl font-bold text-orange-400">$35</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                      </div>
</div></div>        
                            
                            

                        </div>
                    </div>
  )
}
