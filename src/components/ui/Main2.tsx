import Image from "next/image"

import main2 from "../../../public/Main2s.png"

export default function Main2() {
  return (
    <div>
        <div className="font-[sans-serif]">
      <div className="relative overflow-hidden">
          <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full max-w-screen  mx-5 z-10" src={main2} alt="Delicious Food" />
      </div>
    </div>
    </div>
  )
}
