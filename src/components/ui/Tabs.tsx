'use client'
import { useState } from 'react';

const TabsData = [
    "Breakfast","Lunch",'Dinner','Drink','Sack'
]


export default function Tabs() {
    const [activeTab, setActiveTab] = useState('Home'); // Default active tab

  return (
    <div>

 <div className="font-sans p-4">
    <ul className="flex justify-center max-sm:block">
    <li onClick={()=>setActiveTab('BreakFast')} className={`  ${activeTab === 'BreakFast' ? 'text-orange-500 border-b border-orange-500' : 'border-b border-black text-black'} font-bold text-base text-center py-3 px-6 border-b-2 cursor-pointer transition-all`}>BreakFast</li>
      
    <li onClick={()=>setActiveTab('Lunch')} className={`  ${activeTab === 'Lunch' ? 'text-orange-500 border-b border-orange-500' : 'border-b border-black text-black'} font-bold text-base text-center py-3 px-6 border-b-2 cursor-pointer transition-all`}>Lunch</li>

    <li onClick={()=>setActiveTab('Dinner')} className={`  ${activeTab === 'Dinner' ? 'text-orange-500 border-b border-orange-500' : 'border-b border-black text-black'} font-bold text-base text-center py-3 px-6 border-b-2 cursor-pointer transition-all`}>Dinner</li>

    <li onClick={()=>setActiveTab('Drink')} className={`  ${activeTab === 'Drink' ? 'text-orange-500 border-b border-orange-500' : 'border-b border-black text-black'} font-bold text-base text-center py-3 px-6 border-b-2 cursor-pointer transition-all`}>Drink</li>

    <li onClick={()=>setActiveTab('Sack')} className={`  ${activeTab === 'Sack' ? 'text-orange-500 border-b border-orange-500' : 'border-b border-black text-black'} font-bold text-base text-center py-3 px-6 border-b-2 cursor-pointer transition-all`}>Sack</li>
    </ul>  
</div> 

</div>
  )
}
