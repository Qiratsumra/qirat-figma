import Image from "next/image"

import testimormals from "../../../public/testimormals.png"
import comma from "../../../public/comma.png"

export default function ClientReview() {
  return (
    <>
        <div className="m-5 font-bold text-[50px]">
            <h1 className="text-base great-vibes-regular  text-orange-500 md:text-lg">Testimonial</h1>
            What our client our saying       </div>
<div className="font-[sans-serif] max-w-[800px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
      <Image src={testimormals} alt="testimormals" className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7" />
      <div className="mt-6 text-center">
        <div className="flex justify-center items-center">
            <Image src={comma} alt=""></Image>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-extrabold text-gray-800 mb-2">Amazing Design Inspiration</h2>
          <p className="text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
        </div>

        <div className="flex justify-center space-x-1 mt-4">
          <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-5 fill-[#e7e1ca]" viewBox="0 0 14 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>
    </div>


    </>
  )
}
