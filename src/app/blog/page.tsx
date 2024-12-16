import Image  from "next/image"
import Link from "next/link"
import hero from "../../../public/unsplash_4ycv3Ky1ZZU.png"
import blog1 from "../../../public/chooseGrid/two.png"
import blog2 from "../../../public/pizza.png"
import blog3 from "../../../public/chooseGrid/one.png"
import blog4 from "../../../public/Drink.png"
import blog5 from "../../../public/dessert.png"
import blog6 from "../../../public/chooseFood/choose3.png"


import { SlLike } from "react-icons/sl"
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentDots } from "react-icons/lia";


const BlogData =[
    {image:blog1,date:"10 February 2022" ,title:"pallentesque non efficitur mi aliquam convallis mi quis"},
    {image:blog2, date:"10 February 2022",title:"morbi sodales telkues eilit, in biandit risus suscipit a "},
    {image:blog3, date:"10 February 2022", title:"curabitur rutum velit ac congue malesuade"},
    {image:blog4, date:"10 February 2022", title:"curabitur rutum velit ac congue malesuade"},
    {image:blog5, date:"10 February 2022",title:"curabitur rutum velit ac congue malesuade"},
    {image:blog6, date:"10 February 2022",title:"curabitur rutum velit ac congue malesuade"},
]

export default function Blog() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white">
        <div className=" font-[sans-serif] p-4 relative py-14 ">
        <div className="mb-10">
    <div className="absolute inset-0">
      <Image src={hero} alt="Background Image" className="w-full h-[190px] object-cover opacity-100" />
    </div>

    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-orange-500 great-vibes-regular">Menu</h1>
      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
     <Link href={'/'}> <li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Home</li></Link>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
    <Link href={'/menu'}><li className="text-gray-500 text-base cursor-pointer hover:text-orange-500">Menu</li></Link>
      </ul>
    </div>
    </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl  mx-auto">
            <h1 className="text-center text-xl great-vibes-regular text-orange-500 m-3">Blog Post</h1>
          <h2 className="text-3xl font-extrabold uppercase inline-block"><span className="text-orange-500">La</span>test new & blog</h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto">
         {BlogData.map((item)=>(
             <div className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
             <Image src={item.image} alt={`${item.title}`} className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
             <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
               <span className="text-sm block mb-2 text-yellow-400 font-semibold">{item.date}</span>
               <h3 className="text-xl font-bold text-white capitalize">{item.title}</h3>
               <div className="mt-4">
                 <p className="text-gray-200 text-sm ">Learn More</p>
                <div className="text-white mt-2 flex justify-evenly">
                <SlLike className="hover:text-orange-600 "/>
                 <LiaCommentDots  className="hover:text-orange-600 "/>
                 <IoShareSocialOutline className="hover:text-orange-600 "/>
                </div>
               </div>
             </div>
           </div>
          
         ))}
         
         </div>
          </div>
        </div>
      </div>

   
  )
}

