
import { IoMdAdd } from "react-icons/io";

const FAQData =[
    {question:"How we serve food?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit optio laudantium vero, fugiat, aliquid esse amet eius doloribus, exercitationem quis repudiandae. Odit nisi officia ullam iure explicabo dignissimos temporibus!"},
    {question:"How we get in touch with you?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit optio laudantium vero, fugiat, aliquid esse amet eius doloribus, exercitationem quis repudiandae. Odit nisi officia ullam iure explicabo dignissimos temporibus!"},
    {question:"How was our food quality?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit optio laudantium vero, fugiat, aliquid esse amet eius doloribus, exercitationem quis repudiandae. Odit nisi officia ullam iure explicabo dignissimos temporibus!"},
    {question:"What we wiil delivered? And When",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit optio laudantium vero, fugiat, aliquid esse amet eius doloribus, exercitationem quis repudiandae. Odit nisi officia ullam iure explicabo dignissimos temporibus!"},
    {question:"What we wiil delivered? And When",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit optio laudantium vero, fugiat, aliquid esse amet eius doloribus, exercitationem quis repudiandae. Odit nisi officia ullam iure explicabo dignissimos temporibus!"},
    {question:"Is this resturent is open 24 hours ?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reprehenderit optio laudantium vero, fugiat, aliquid esse amet eius doloribus, exercitationem quis repudiandae. Odit nisi officia ullam iure explicabo dignissimos temporibus!"},
]

export default function FAQSection() {
  return (
        <div className="bg-[#F7F7F7] font-[sans-serif]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className=" text-4xl font-extrabold text-center mb-5 capitalize great-vibes-regular">Questions look here</h2>
        <p className="text-xl text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deleniti.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-md:max-w-md mx-auto">
            {FAQData.map((question)=>(
                  <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-8 font-serif">
               <div className="flex justify-between">
                  <h3 className="text-gray-800 text-xl font-semibold mb-3">{question.question}</h3>
                  <IoMdAdd/>
               </div>
                <p className="text-gray-500 text-sm leading-relaxed">{question.answer}</p>
                </div>
                </div>
            ))}

        </div>
      </div>
    </div>
  )
}
