import Image from "next/image"
import main from "../../../public/image.png"
import main2 from "../../../public/main.jpeg"


export default function Main() {
  return (
   
        <div className="relative py-16 font-[sans-serif] hover:cursor-pointer">
      <div className="absolute inset-0">
        <Image src={main2} alt="Background Image" className="w-full h-full object-cover bg-opacity-35" />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <Image src={main} alt=""></Image> 
      </div>
    </div>
  )
}
