import Image from "next/image";

import hero1 from "../../public/hero/hero1.png"
import hero2 from "../../public/hero/hero2.png"
import hero3 from "../../public/hero/hero3.png"


export default function About() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">
        <section className=" text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-orange-500 great-vibes-regular text-lg font-semibold">About us</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
            <span className="text-orange-500">We</span> Create the best foody
            product
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Ut
            vitae feugiat felis donec elementum.
          </p>
          <ul className="mt-6 space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-orange-500">•</span> Lacus nisi, at ac
              dapibus sit ac velit in consequat.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">•</span> Quisque diam
              pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">•</span> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large image */}
          <div className="col-span-2">
            <Image src={hero1} alt="Food 1" width={500} height={300} className="rounded-md w-full object-cover"/>
          </div>
          {/* Small images */}
          <Image src={hero2} alt="Food 2" width={250}  height={150} className="rounded-md w-full object-cover"/>
          <Image src={hero3} alt="Food 3"width={250} height={150}  className="rounded-md w-full object-cover" />
        </div>
      </div>
    </section>

    </div>
  )
}
