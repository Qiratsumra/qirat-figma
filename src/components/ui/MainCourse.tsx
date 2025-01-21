import Image from "next/image"

import mainCourse from "../../../public/chooseGrid/one.png"

export default function MainCourse() {
  return (
   
    <div className="font-sans">
        <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
            <div className="flex justify-evenly max-sm:block gap-12">

                <div className="lg:col-span-2 mx-10">
                    <h2 className="text-2xl font-bold text-gray-800">Main Menu</h2>
                  <div>
                  <div className="flex flex-wrap gap-10 max-sm:gap-5 mt-4">
                        <p className="text-gray-800 text-xl font-bold hover:text-orange-500 hover:cursor-pointer">Optic  Big Breakfast Big combo</p>
                        <span className="text-xl font-bold text-orange-400">$32</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                  </div>
                  <hr />

                  <div>
                  <div className="flex flex-wrap  gap-10 mt-4 max-sm:gap-5">
                        <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Cashew Chicken with stir-Fry</p>
                        <span className="text-xl font-bold text-orange-400">$42</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                  </div>
                  <hr />
                  <div>
                  <div className="flex flex-wrap gap-10 max-sm:gap-5 mt-4">
                        <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Vegetable & Green Salad</p>
                        <span className="text-xl font-bold text-orange-400">$14</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                  </div>
                  <hr />
                  <div>
                  <div className="flex flex-wrap gap-10 mt-4 max-sm:gap-5">
                        <p className="text-gray-800 text-xl font-bold  hover:text-orange-500 cursor-pointer">Spicy Vegan Potato Curry</p>
                        <span className="text-xl font-bold text-orange-400">$35</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit voluptate tenetur suscipit iste aperiam quasi tempore ipsam totam reiciendis.</p>
                  </div>
</div>
<div className="lg:col-span-3  rounded-lg w-ful lg:sticky top-0 text-center p-6">
                    <Image src={mainCourse} alt="Product" className="object-cover rounded  mx-auto py-6" />

                    <hr className="border-white border my-6" />

                   </div>

</div>        
                        
                        

                    </div>
                </div>
            
  )
}
