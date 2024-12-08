import Image from "next/image"

import chose1 from "../../../public/chooseGrid/one.png"
import chose2 from "../../../public/chooseGrid/two.png"
import  chose3 from "../../../public/chooseGrid/three.png"
import chose4 from '../../../public/chooseGrid/four.png'
import chose5 from "../../../public/chooseGrid/five.png"
import chose6 from "../../../public/chooseGrid/six.png" 

import { PiHamburgerThin ,PiPizzaBold,PiWine } from "react-icons/pi";

export default function ChooseItemtwo() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 flex justify-evenly max-sm:block mb-28">
        <div className=" font-[sans-serif] p-6 w-[700px] h-[360px] max-sm:w-fit ">

      



        {/* Grid Section */}
<div className="grid items-center gap-10 max-w-5xl mx-auto sm:max-w-md sm:gap-6">

  {/* First Row of Images */}
  <div className="grid grid-cols-2  gap-5 ">
    <Image src={chose1}  alt="choose1"  className="w-full h-auto max-w-[389px] sm:max-w-[250px] object-cover"  />
    <Image  src={chose2}  alt="choose2"  className="w-full h-auto max-w-[302px] sm:mt-8 object-cover"  />
  </div>

  {/* Second Row of Images */}
  <div className="grid grid-cols-3 gap-5 mt-4 sm:mt-5">
    <Image 
      src={chose3} 
      alt="chose3" 
      className="w-full h-auto max-w-[262px] sm:max-w-[237px] object-cover" 
    />
    <Image 
      src={chose4} 
      alt="chose4" 
      className="w-full h-auto max-w-[237px] object-cover" 
    />
    
    <div className="flex flex-col gap-5 sm:items-center">
      <Image 
        src={chose5} 
        alt="chose5" 
        className="w-full h-auto max-w-[173px] sm:max-w-[237px] object-cover" 
      />
      <Image 
        src={chose6} 
        alt="chose6" 
        className="w-full h-auto max-w-[173px] object-cover" 
      />
    </div>
  </div>

</div>

</div> 


{/* Text Section */}

        <div className="max-md:text-center max-sm:my-10">
            <h2 className="text-orange-500 text-center great-vibes-regular">Why Choose us</h2>
          <h3 className="text-white font-semibold md:text-3xl mx-3 text-2xl md:leading-10 max-sm:text-xl max-sm:text-center"><span className="text-orange-400  max-sm:text-start">Ex</span>tra ordinary taste and experince</h3>
          <p className="text-gray-300 mt-4 text-sm leading-loose max-sm:text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita sequi, velit similique deserunt libero explicabo. Repellendus soluta mollitia ut, error velit aut quibusdam dolore eveniet? Odio nulla assumenda distinctio laborum?</p>

          <div className="flex justify-evenly items-center max-sm:block my-5">
        <div className=" text-center">
        <div className="m-3 w-[110px] h-[100px] text-white bg-yellow-500 border-2 rounded-2xl hover:bg-orange-500 hover:text-whit items-center text-center max-sm:ml-24"><PiHamburgerThin className="ml-7 mt-5 text-5xl"/>
        </div>
      <h2 className="text-white text-center max-sm:mr-12">Fast Food</h2>
        </div>

        <div className="text-center">
        <div className="m-3 w-[110px] h-[100px] text-white bg-yellow-500 border-2 rounded-2xl hover:bg-orange-500 hover:text-white grid grid-cols-1 items-center text-center max-sm:ml-24"><PiPizzaBold className="ml-7 text-5xl"/>
        </div>
        <h2 className="text-white text-center max-sm:mr-12">Lunch</h2>
        </div>

        <div className="text-start">
        <div className="m-3 w-[110px] h-[100px] text-white bg-yellow-500 border-2 rounded-2xl hover:bg-orange-500 hover:text-white grid grid-cols-1 items-center text-center max-sm:ml-24"><PiWine className="ml-7 text-5xl"/>
        </div>
        <h2 className="text-white text-center max-sm:mr-10">Dinner</h2>
        </div>
        </div>

{/* Box Section */}

       <div className="text-black bg-white border-l-8 rounded-lg flex justify-evenly border-orange-400  w-[402px] h-[90px] max-sm:w-full">
        <h2 className="text-5xl font-bold text-orange-500 mt-4 max-sm:w-[200px] max-sm:mr-6 h-[45px] ">30+</h2>
        <p className="text-2xl mt-3 max-sm:text-2xl text-start max-sm:mt-3 max-sm:font-bold max-sm:mr-3" >Year of <br />Experienced</p>

     </div>
     </div>

</div>
       
  )
}
