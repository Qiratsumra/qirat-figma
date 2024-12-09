import Image from "next/image";
 
import homeabou1 from "../../public/homeAbout1.png"
import homeabou2 from "../../public/unsplash_jpkfc5_d-DI.png"
import homeabou3 from "../../public/unsplash_mAQZ3X_8_l0.png"

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div>
          <h2 className="text-orange-500 text-lg font-semibold mb-2">About us</h2>
          <h1 className="text-4xl font-bold mb-4">
            We Create the best <span className="text-orange-500">foody product</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Ut ac elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, at ac dapibus sit eu velit in consequat.
          </p>
          {/* Checklist */}
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>
              Lacus nisi, at ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          {/* Button */}
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
            Read More
          </button>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 gap-4">
            <div> <Image 
            src={homeabou1}
            alt="Food Image 1"
            className="rounded-lg w-[660px] h-[330px] object-cover"
            width={500}
            height={300}
          /></div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={homeabou2}
              alt="Food Image 2"
              className="rounded-lg object-cover w-[332px] h-[190px]"
              width={240}
              height={150}
            />
            <Image
              src={homeabou3}
              alt="Food Image 3"
              className="rounded-lg object-cover w[332px] h-[190px]"
              width={240}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
