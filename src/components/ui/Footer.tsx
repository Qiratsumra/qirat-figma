import Link from "next/link"

import { FaPinterestP,FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

const footerLinks = [{title:'About', path:"/about"}, {title:'New',path:"/menu"},{title:'Partners',path:"/"},{title:'Team',path:"/chefs"},{title:'Menu',path:"/"},{title:'Contact',path:'/'}]

const linkHelp = ['FAQ','Term & conditions','Reporting','Documentation','Support Policy','Privacy',]

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 ">
        <footer className="font-sans tracking-wide text-white px-10 pt-12 pb-6">
            <div className="flex justify-evenly max-sm:block">
                <div>
                    <h1 className="text-3xl font-bold"><span className="text-orange-400">St</span>ill Need Your Support ?</h1>
                    <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                    </div>
                    <div>
                    <div className="flex overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" placeholder="Search Something..."
          className="w-full outline-none bg-orange-500 text-white text-sm px-4 py-3" />
        <button type='button' className="flex items-center justify-center bg-white px-5 text-sm text-orange-500">
          Search
        </button>
      </div>
                    </div>
            </div>
            <hr className="border-b border-[1px] border-orange-400 my-4 mx-4"/>
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md  text-2xl"><Link href='/about' className="font-bold text-3xl">About US.</Link><div className="mt-6">
            <p className=" leading-relaxed text-sm text-white">orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.</p>
          </div>
          <div className="my-3 flex justify-start gap-4 rounded-2xl">
            <VscDebugRestart className=" w-[78px] h-[62px] text-2xl bg-orange-400 text-white"/>
            <p className="text-white text-sm">Opening Houres
                <br />
                Mon - Sat(8.00 - 6.00)
                <br />
                Sunday - Closed
            </p>
          </div>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-white font-semibold text-base relative max-sm:cursor-pointer">Useful Links</h4>

          <ul className="mt-6 space-y-4">
           {footerLinks.map((link)=>(
             <li>
             <Link href={`${link.path}`} className='text-white text-sm hover:underline'>{link.title}</Link>
           </li>
           ))}
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className=" font-semibold text-base relative max-sm:cursor-pointer">Help ?</h4>
          <ul className="space-y-4 mt-6">
          {linkHelp.map((link)=>(
              <li>
              <a href='javascript:void(0)' className='text-sm hover:underline'>{link}</a>
            </li>
          ))}
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className=" font-semibold text-base relative max-sm:cursor-pointer">Recent Post</h4>

       
        </div>

      </div>

      <hr className="mt-10 mb-6 border-gray-400" />
      <div className="flex justify-between max-md:block gap-9">
      <p className=' text-2xl text-white'>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        <ul className="flex md:flex justify-evenly gap-5 ">
          <li>
           <FaFacebookF className="p-2  bg-white text-black text-4xl hover:cursor-pointer "/>
          </li>
          <li>
            <FaTwitter className="p-2 bg-white text-black text-4xl hover:cursor-pointer"/>
          </li>
          <li>
            <FaInstagram className="p-2 bg-white text-black text-4xl hover:cursor-pointer"/>
          </li>
          <li>
            <FaYoutube className="p-2 bg-white text-orange-400 text-4xl hover:cursor-pointer"/>
          </li>
          <li>
            <FaPinterestP className="p-2 bg-white text-black text-4xl hover:cursor-pointer"/>
          </li>
        </ul>
      </div>

    </footer>

    </div>
  )
}
