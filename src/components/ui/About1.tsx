import Image from "next/image"
import about1 from "../../../public/about/about1.png"




export default function About1() {
  return (
    <div className="m-10 p-3 ">
        <div className=" w-full font-[sans-serif]">
      <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
      <Image src={about1} alt="--" className="w-full h-full object-cover shrink-0" />
        <div className="m-3">
            <h1 className="great-vibes-regular text-2xl text-orange-500 text-center ">About us</h1>
          <h2 className="sm:text-4xl text-2xl font-bold uppercase m-5 text-white " >food is an important part of a balance diet</h2>
          <p className="mt-4 text-sm m-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
          <button type="button"
            className="px-6 py-3 m-5 mb-10 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Get started</button>
        </div>
      </div>
    </div>
    </div>
  )
}
