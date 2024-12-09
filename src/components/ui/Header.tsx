import { Menu } from "lucide-react";
import Link from "next/link"
import {  Sheet, SheetContent, SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";

import About from "./page"

import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

interface Data{
    name: string,
    path: string
}

const LinksData:Data[] =[
    { name:'Home', path:'/' },
    { name:'Menu', path:'/menu'},
    {name:"Blog", path:"/blog" },
    {name:"Chefs", path:"/chefs" },    
    {name:"About", path: "/about" },    
    {name:"Shop", path:"/shop" },    
    {name:"Contact", path:"/contact" },    

]


export default function Header() {
  
  return (
    <header className='shadow-md bg-gradient-to-r from-black to-gray-900 font-sans tracking-wide relative z-50'>
    <section
      className='flex items-center lg:justify-center flex-wrap gap-5 relative py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
      <Link href="/"><h1 className='md:w-[170px] font-bold text-3xl text-yellow-500 w-36 max-sm:text-center'>Food<span className="text-white">Luck</span></h1>
      </Link>
    </section>

    <div className='flex justify-evenly py-3.5 px-10 overflow-x-auto'>

      <div id="collapseMenu"
        className='w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>

        <ul
          className='lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
         {LinksData.map((list)=>(
              <li className='max-lg:border-b max-lg:py-3 px-3'><Link href={`${list.path}`}
              className='text-white hover:underline text-[15px] block font-semibold'>{list.name}</Link></li>
         ))}
        </ul>
      </div>
      {/* search bar */}
      <div className="flex justify-center gap-5">
          <div><FaShoppingBag className="text-white mt-5 max-sm:mt-2 max-sm:mb-2"/></div>
            <div className="border bg-black flex justify-evenly  px-1 py-1 rounded-full max-w-md mx-auto font-[sans-serif] max-sm:mx-2 text-white">
        <input type='email' placeholder='Search Something...' className="w-full outline-none bg-black pl-4 text-sm" />
       <button> <Link href={"/shopcart"} className="hover:cursor-pointer"><FaSearch className="text-3xl  transition-all text-white mt-2  rounded-full px-5 py-2.5" /></Link></button>
      </div>
            </div>
      <Sheet >
              <SheetTrigger className="md:hidden">
              <Menu className="text-2xl text-white"/>
              </SheetTrigger>
              <SheetContent >
                <SheetHeader>
                  <SheetTitle className="mt-5 mx-5 text-3xl hover:underline font-bold ">Menu<span className=" text-yellow-500"> Bar</span></SheetTitle>
                  <ul>
                {LinksData.map((list)=>(
                  <li className="flex flex-col space-y-6 mt-5 mx-5 text-2xl font-bold hover:underline text-black">
                  <Link href={`${list.path}`}>{list.name}</Link></li>
                ))}
               
            </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
    </div>
  </header>
  )
}




