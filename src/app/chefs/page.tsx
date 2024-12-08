import Image from "next/image"

import chef1 from "../../../public/ChefsProfile/chef1.png"
import chef2 from "../../../public/ChefsProfile/chef2.png"
import chef3 from "../../../public/ChefsProfile/chef3.png"
import chef4 from "../../../public/ChefsProfile/chef4.png"
import chef5 from '../../../public/ChefsProfile/chef5.png'
import chef6 from "../../../public/ChefsProfile/chef6.png"
import chef7 from "../../../public/ChefsProfile/chef7.png"
import chef8 from "../../../public/ChefsProfile/chef8.png"
import chef9 from "../../../public/ChefsProfile/chef9.png"
import chef10 from "../../../public/ChefsProfile/chef10.png"
import chef11 from "../../../public/ChefsProfile/chef11.png"
import chef12 from "../../../public/ChefsProfile/chef12.png"


const chefsData =[{image:chef1,name:"Tahmina Rumi"}, {image:chef2,name:"Jorinn Begum"}, {image:chef3,name:"M.Mohammad"}, {image:chef4,name:"Munna Kethy"},{image:chef5,name:"John"}, {image:chef6,name:"Bisnu Devgon"}, {image:chef7,name:"Motin Molladon"},{image:chef8,name:"Willium"},{image:chef9,name:"Kets Willium Roy"},{image:chef10, name:"Muhmud Khodil"},{image:chef11, name:"Atuar Rehman"},{image:chef12,name:"Monalisa Holly"},
]


export default function page() {
  return (
    <div>
        <div className="font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center"> 
                    <h2 className="hover:text-orange-500 text-4xl my-3 cursor-pointer font-extrabold">Meet our Chefs</h2>
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
            </div>
        </div>
    </div>
  )
}
