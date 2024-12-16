import HeroSection from "@/components/ui/HeroSection";


import ChooseItem from "../components/ui/ChooseItem";
import ChooseItemtwo from "@/components/ui/chooseItemtwo";
import Main from "@/components/ui/Main";
import Chefs from "@/components/ui/Chefs";
import Blog from "@/components/ui/Blog";
import Testimormals from "@/components/ui/Testimormals";
import Main2 from "@/components/ui/Main2";

import AboutUsSection from "@/components/HomeAbout";
import OurMenu from "@/components/OurMenu";


export default function Home() {
  return (
   <div className="bg-gradient-to-r from-black to-gray-900">
     <HeroSection/>
    <AboutUsSection/>

<ChooseItem/>
<ChooseItemtwo/>
<Main/>
<OurMenu/>
<Chefs/>
<Testimormals/>
<br />
<Main2/>
<Blog/>


   </div>
  );
}
