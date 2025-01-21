import Image from "next/image"
import about2 from "../../../public/about/about2.png"

import icon1 from"../../../public/about/feacture.png"
import icon3 from "../../../public/about/feacture3.png"
import icon2 from "../../../public/about/feacture2.png"


import chef1 from "../../../public/ChefsProfile/chef1.png"
import chef2 from "../../../public/ChefsProfile/chef2.png"
import chef3 from "../../../public/ChefsProfile/chef3.png"
import chef4 from "../../../public/ChefsProfile/chef4.png"
import ClientReview from "./clientReview"


const chefsData =[{image:chef1,name:"Tahmina Rumi"}, {image:chef2,name:"Jorinn Begum"}, {image:chef3,name:"M.Mohammad"}, {image:chef4,name:"Munna Kethy"},
]


export default function About2() {
  return (
    <>
        {/* Text Section */}
        <div className="">
            <h1 className="sm:text-4xl text-2xl font-bold capitalize m-5 text-center text-orange-500">why choose us</h1>
            <p className="mt-4 text-center p-7 leading-tight font-serif text-sm m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
        </div>
<br />
<br />
        {/* Image Section */}
        <div className=" py-16 font-[sans-serif]">
        <Image src={about2} alt="Background Image" className="w-full h-[386px]" />
      </div>

      {/* Feacture Section */}
      <div className="font-[sans-serif] py-4">
      <div className="flex justify-evenly gap-x-6 gap-y-12 divide-x divide-gray-300 max-sm:block">
        <div className="text-center">
       <div className="flex justify-center"> <Image src={icon1} alt="" height={80} width={80}></Image></div>
          <h3 className="text-2xl font-extrabold mt-5 ">Best Chef</h3>
          <p className="text-sm mt-3 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi necessitatibus praesentium veniam, eveniet quidem sint, vero voluptatem minima voluptas provident, soluta iure earum debitis quibusdam ex obcaecati facere distinctio.</p>
        </div>
        
        <div className="text-center">
        <div className="flex justify-center"> <Image src={icon2} alt="" height={80} width={80}></Image></div>
         <h3 className="text-2xl font-extrabold mt-5">120 Items Food</h3>
         <p className="text-sm mt-3 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi necessitatibus praesentium veniam, eveniet quidem sint, vero voluptatem minima voluptas provident, soluta iure earum debitis quibusdam ex obcaecati facere distinctio.</p>
       </div>
       <div className="text-center">
        <div className="flex justify-center"> <Image src={icon3} alt="" height={80} width={80}></Image></div>
         <h3 className="text-2xl font-extrabold mt-5">120 Items Food</h3>
         <p className="text-sm mt-3 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi necessitatibus praesentium veniam, eveniet quidem sint, vero voluptatem minima voluptas provident, soluta iure earum debitis quibusdam ex obcaecati facere distinctio.</p>
       </div>
      </div>
      </div>



{/* Bannner with Team */}
<div className="font-[sans-serif]">
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <div className="bg-[#FF9F0D] w-full h-full object-cover" ></div>
      </div>

      <div className="-mt-28 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative rounded-md">
            <div className="flex justify-center">
            <h2 className=" text-white absolute -top-10 text-center text-3xl font-bold ">Team Member</h2>
            <br />
            <p className="text-sm p-3 absolute -top-2 text-white max-sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Optio necessitatibus fugit sunt doloremque perspiciatis
                <br /> suscipit laborum vero perferendis nemo itaque voluptate expedita,
                <br /> eaque et, quidem magni eum est quo! Quos.</p>
            </div>

        <div className="grid sm:grid-cols-4 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                    {
                        chefsData.map((chef)=>(
                            <div className="">
                            <Image src={chef.image} alt="" className="w-full object-contain object-top rounded-lg" />
    
                            <div className="text-center mt-4">
                                <h4 className="text-base font-semibold text-black">{chef.name}</h4>
                                <p className="text-xs mt-2 text-black">Chef</p>
                            </div>
                        </div>
                        ))
                    }          
                </div>    
                <ClientReview/>     
        </div>
      </div>
    </div>

    </>
 

  )
}
