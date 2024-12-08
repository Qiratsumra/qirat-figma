import Image from "next/image";
import hero from "../../../public//hero/hero.png"




export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">

<div className="relative flex flex-col-reverse items-center justify-between px-6 py-16  text-white lg:flex-row lg:px-12 lg:py-20">
      {/* Left Section */}
      <div className="max-w-lg text-center space-y-6 lg:text-left">
        <p className="text-base great-vibes-regular text-orange-500 md:text-lg">It's Quick & Charming!</p>
        <h1 className="text-3xl font-bold md:text-5xl">
          <span className="text-orange-500">The</span> Art of speed
          <br />
          <span className="text-orange-500">food Quality</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <button className="px-5 py-3 font-medium text-black bg-orange-500 rounded-lg hover:bg-orange-800">
          See Menu
        </button>
      </div>

      {/* Right Section */}
      <div className="relative mb-8 lg:mb-0">
        {/* Circular Decorative Elements */}
        <div className="absolute w-10 h-10 bg-white/10 rounded-full border border-gray-500 -top-4 -left-6 md:w-14 md:h-14"></div>
        <div className="absolute w-8 h-8 bg-yellow-400 rounded-full -bottom-6 right-6 md:w-12 md:h-12"></div>

        {/* Food Image */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
          <Image
            src={hero} 
            alt="Food"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>


    </div>
  )
}
