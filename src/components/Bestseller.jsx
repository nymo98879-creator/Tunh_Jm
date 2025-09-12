import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Bestseller() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <div>
      {/* Title Section */}
      <div className="py-10 w-full flex justify-center">
        <div className="md:w-[50%] lg:w-[25%]" data-aos="fade-up">
          <h1 className="text-center text-[40px] font-bold">BestSeller</h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            soluta!
          </p>
        </div>
      </div>
      {/* Product Grid */}
      <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div className="my-3" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/card/card1.png"
            alt=""
            className="w-full object-cover"
          />
          <div className="pt-3">
            <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
            <p className="text-gray-600 mt-2">woman</p>
            <p className="text-sm font-bold text-green-600">
              $200.00 - $ 300.00
            </p>
          </div>
          <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
            <li className="border-2 px-2 py-1 rounded-md">M</li>
            <li className="border-2 px-2 py-1 rounded-md">L</li>
            <li className="border-2 px-2 py-1 rounded-md">XL</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="my-3" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/card/card2.png"
            alt=""
            className="w-full object-cover"
          />
          <div className="pt-3">
            <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
            <p className="text-gray-600 mt-2">woman</p>
            <p className="text-sm font-bold text-green-600">
              $200.00 - $ 300.00
            </p>
          </div>
          <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
            <li className="border-2 px-2 py-1 rounded-md">M</li>
            <li className="border-2 px-2 py-1 rounded-md">L</li>
            <li className="border-2 px-2 py-1 rounded-md">XL</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="my-3" data-aos="zoom-in" data-aos-delay="300">
          <img
            src="/card/card3.png"
            alt=""
            className="w-full object-cover"
          />
          <div className="pt-3">
            <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
            <p className="text-gray-600 mt-2">woman</p>
            <p className="text-sm font-bold text-green-600">
              $200.00 - $ 300.00
            </p>
          </div>
          <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
            <li className="border-2 px-2 py-1 rounded-md">M</li>
            <li className="border-2 px-2 py-1 rounded-md">L</li>
            <li className="border-2 px-2 py-1 rounded-md">XL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
