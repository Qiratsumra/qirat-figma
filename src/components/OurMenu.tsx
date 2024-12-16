
import Image from "next/image";
import back1 from "../../public/O/unsplash_INjdgkCwHp0.png"
import back2 from "../../public/O/unsplash_Lv174o7fn7Y.png"

import img1 from "../../public/chooseFood/choose1.png"
import img2 from "../../public/chooseFood/choose2.png"
import img3 from "../../public/chooseFood/choose3.png"
import img4 from "../../public/chooseFood/choose4.png"
import img5 from "../../public/pizza.png" 
import img6 from '../../public/O/unsplash_Lv174o7fn7Y.png'
import img7 from "../../public/chooseGrid/four.png"


export default function OurMenu() {
    const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];
    const items = [
      { name: "Lettuce Leaf", price: "12.5$", image: img1 },
      { name: "Fresh Breakfast", price: "14.5$", image:img2},
      { name: "Mild Butter", price: "12.5$", image:img3},
      { name: "Fresh Bread", price: "12.5$", image: img3},
      { name: "Glow Cheese", price: "12.5$", image: img4},
      { name: "Italian Pizza", price: "12.5$", image: img5},
      { name: "Slice Beef", price: "12.5$", image:img6},
      { name: "Mushroom Pizza", price: "12.5$", image: img7},
    ];
  
    return (
        <div className="bg-black text-white py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-orange-500 text-xl great-vibes-regular">Choose & Pick</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          From <span className="text-orange-500">Our Menu</span>
        </h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center mb-6 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="text-sm font-semibold hover:text-orange-500"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-wrap lg:flex-nowrap items-start lg:justify-between gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <div className="relative">
          <Image src={back1} alt="Menu Item"className="rounded-lg mx-auto w-full lg:max-w-md"/>
            <div className="absolute bottom-20 left-20 top-9 right-12 ">
            <Image src={back2} alt="Menu Item" className="rounded-lg mx-auto w-full lg:max-w-md"/>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center bg-transparent border-[1px] p-4 rounded-lg hover:cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-400">
                  Locus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-yellow-500 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
  