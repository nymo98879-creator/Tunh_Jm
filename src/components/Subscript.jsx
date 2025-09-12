import React from 'react'
import { FaInstagram } from "react-icons/fa6";
export default function Subscript() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
            Get 10% Off Your First Order
          </h1>
          <p className="text-center mt-4">
            Plus exclusive access to product drops, style tips, and insider
            deals.
          </p>
        </div>
        <form action="" className="md:flex md:justify-center md:items-center lg:mr-4">
          <div className="w-full md:w-[60%] lg:w-[37%] h-full  flex justify-center items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR ORDER *"
              className="w-[90%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:shadow-lg"
            />
          </div>
          <div className=" md:w-[20%] lg:w-[8%] h-full  flex justify-center items-center ">
            <div className="w-[90%] md:w-[100%] mt-10 md:mt-0 px-3 py-2  text-center rounded-md text-white bg-red-500">
              SUBSRIPBE
            </div>
          </div>
        </form>
        {/* card */}
        <div className="w-full grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 gap-5 px-5 lg:px-36 py-10">
          <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden">
            <img
              src="public/card/subscribe1.png"
              alt=""
              className="w-full h-full "
            />
          </div>
          <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden">
            <img
              src="public/card/subscribe2.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden ">
            <img
              src="public/card/subscribe3.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[200px] lg:h-[350px] rounded-2xl overflow-hidden">
            <img
              src="public/card/subscribe4.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center items-center">
            <FaInstagram className="text-red-500 text-4xl" />
            <b className="px-2 text-lg">Follow us </b>
            <h1 className="">@VeloraStyle</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
