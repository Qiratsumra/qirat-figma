import HeroSection from "@/components/ui/HeroSection";

import About from "../app/about/page";
import ChooseItem from "../components/ui/ChooseItem";
import ChooseItemtwo from "@/components/ui/chooseItemtwo";
import Main from "@/components/ui/Main";
import Chefs from "@/components/ui/Chefs";
import Blog from "@/components/ui/Blog";
import Testimormals from "@/components/ui/Testimormals";
import Main2 from "@/components/ui/Main2";
import About1 from "@/components/ui/About1";


export default function Home() {
  return (
   <div className="bg-gradient-to-r from-black to-gray-900">
     <HeroSection/>
    <About1/>

<ChooseItem/>
<ChooseItemtwo/>
<Main/>
<Chefs/>
<Testimormals/>
<br />
<Main2/>
<Blog/>


   </div>
  );
}
